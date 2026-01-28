import { FieldType, fieldDecoratorKit, FormItemComponent, FieldExecuteCode, AuthorizationType } from 'dingtalk-docs-cool-app';
const { t } = fieldDecoratorKit;

// 通过addDomainList添加请求接口的域名
fieldDecoratorKit.setDomainList(['api.exchangerate-api.com', 'alidocs2-zjk-cdn.dingtalk.com', 'api.ezlinkai.com', 'saas.jcbbi.com', 'jcbbi.com']);

fieldDecoratorKit.setDecorator({
  name: '图像生成',
  authorizations: {
    id: 'auth_id',// 授权的id，用于context.fetch第三个参数指定使用
    platform: '毛毛虫',// 授权平台，目前可以填写当前平台名称
    type: AuthorizationType.HeaderBearerToken, // 授权类型
    required: false,// 设置为选填，用户如果填了授权信息，请求中则会携带授权信息，否则不带授权信息
    instructionsUrl: "https://saas.jcbbi.com/",// 帮助链接，告诉使用者如何填写这个apikey
    label: '测试授权', // 授权平台，告知用户填写哪个平台的信息
    tooltips: '请配置授权', // 提示，引导用户添加授权
    /**
    * 也支持配置链接
    **/
    icon: { // 当前平台的图标
      light: 'https://saas.jcbbi.com/upload/avatar/745470592254021.png',
      dark: 'https://saas.jcbbi.com/upload/avatar/745470592254021.png'
    }
  },
  // 定义捷径的i18n语言资源
  i18nMap: {
    'zh-CN': {
        "param_image_label": "图片",
        "param_prompt_label": "提示词",
    }
  },
  // 定义捷径的入参
  formItems: [
    {
      key: 'imageUrl1',
      label: `${t('param_image_label')}`,
      component: FormItemComponent.FieldSelect,
      props: {
        supportTypes: [FieldType.Attachment],
      },
      validator: {
        required: false,
      }
    },
    {
      key: 'prompt',
      label: t('param_prompt_label'),
      component: FormItemComponent.Textarea,
      props: {
        placeholder: '请输入图片编辑指令',
        enableFieldReference: true,
      },
      validator: {
        required: true,
      }
    }
  ],
  // 定义捷径的返回结果类型
  resultType: {
    type: FieldType.Text,
  },
  // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems （如引用的依赖字段）
  execute: async (context, formData: { imageUrl1?: string; prompt: string }) => {
    const { imageUrl1, prompt } = formData;
    try {
      // 1. 调用Gemini API
      const url = 'https://api.ezlinkai.com/v1beta/models/gemini-3-pro-preview:generateContent';

       const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 2O13DgDpmdia619m9c14E981149347068808B386A17bCbAb'
      };

      // Build request payload
      const requestBody: any = {
        model: "gemini-3-pro-preview",
        "contents": [{
          "role": "user",
          "parts": []
        }],
        "generationConfig": {
          "responseModalities": ["TEXT"]
        }
      };


       // Add images first (inlineData with camelCase)
      if (Array.isArray(imageUrl1) && imageUrl1.length > 0 && imageUrl1[0]?.tmp_url) {
        const image = imageUrl1[0];
        try {
          // Fetch the image from the temporary URL
          const imageResponse = await context.fetch(image.tmp_url, {
            method: 'GET',
          });
          const arrayBuffer = await imageResponse.arrayBuffer();

          // Convert ArrayBuffer to Buffer
          const buffer = Buffer.from(arrayBuffer);

          // Convert Buffer to base64 string without data URI prefix
          const base64 = buffer.toString('base64');
          const contentType = image.type + '/' + image.name.split('.').pop() || 'image/png';

          // Add image to request using inlineData (camelCase)
          requestBody.contents[0].parts.push({
            "inlineData": {
              "data": base64,
              "mimeType": contentType
            }
          });
        } catch (error) {
          console.log({ '===图片处理错误': String(error) });
        }
      }

      // Add prompt text last
      requestBody.contents[0].parts.push({
        "text": prompt
      });

      const init = {
        method: 'POST',
        headers,
        body: JSON.stringify(requestBody)
      };

       // 直接使用context.fetch
      const res = await context.fetch(url, init,'auth_id');

      // 2. 处理响应
      try {
        const resJson = await res.json();
        // console.log({ '===完整响应': JSON.stringify(resJson) });

        // 解析响应，获取文字结果
        let resultText = '';

        // 检查candidates是否存在
        if (resJson.candidates && Array.isArray(resJson.candidates) && resJson.candidates.length > 0) {
          const candidate = resJson.candidates[0];
          // console.log({ '===candidate': JSON.stringify(candidate) });

          // 检查content
          if (candidate.content) {
            const content = candidate.content;
            // console.log({ '===content': JSON.stringify(content) });

            // 检查parts
            if (content.parts && Array.isArray(content.parts)) {
              // console.log({ '===parts数量': content.parts.length });

              // 查找text类型的content
              for (const part of content.parts) {
                if (part.text) {
                  resultText = part.text;
                  // console.log({ '===找到text': resultText.substring(0, 100) });
                  break;
                }
              }
            }
          }
        }

        // console.log({ '===最终提取的text': resultText.substring(0, 100) });

        // 返回文字结果
        return {
          code: FieldExecuteCode.Success,
          data: resultText,
        };
      } catch (e) {
        console.log({ '===读取响应错误': String(e) });
        return {
          code: FieldExecuteCode.Error,
        };
      }
    } catch (e) {
      console.log('====error', String(e));
      return {
        code: FieldExecuteCode.Error,
      }
    }
  },
});
export default fieldDecoratorKit;

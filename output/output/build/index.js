"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dingtalkDocsCoolApp = require("dingtalk-docs-cool-app");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var t = _dingtalkDocsCoolApp.fieldDecoratorKit.t;

// 通过addDomainList添加请求接口的域名
_dingtalkDocsCoolApp.fieldDecoratorKit.setDomainList(['api.exchangerate-api.com', 'alidocs2-zjk-cdn.dingtalk.com', 'api.ezlinkai.com', 'saas.jcbbi.com', 'jcbbi.com']);
_dingtalkDocsCoolApp.fieldDecoratorKit.setDecorator({
  name: '图像生成',
  authorizations: {
    id: 'auth_id',
    // 授权的id，用于context.fetch第三个参数指定使用
    platform: '毛毛虫',
    // 授权平台，目前可以填写当前平台名称
    type: _dingtalkDocsCoolApp.AuthorizationType.HeaderBearerToken,
    // 授权类型
    required: false,
    // 设置为选填，用户如果填了授权信息，请求中则会携带授权信息，否则不带授权信息
    instructionsUrl: "https://saas.jcbbi.com/",
    // 帮助链接，告诉使用者如何填写这个apikey
    label: '测试授权',
    // 授权平台，告知用户填写哪个平台的信息
    tooltips: '请配置授权',
    // 提示，引导用户添加授权
    /**
    * 也支持配置链接
    **/
    icon: {
      // 当前平台的图标
      light: '',
      dark: ''
    }
  },
  // 定义捷径的i18n语言资源
  i18nMap: {
    'zh-CN': {
      "param_image_label": "图片",
      "param_prompt_label": "提示词",
      "param_model_label": "型号"
    }
  },
  // 定义捷径的入参
  formItems: [{
    key: 'imageUrl1',
    label: "".concat(t('param_image_label')),
    component: _dingtalkDocsCoolApp.FormItemComponent.FieldSelect,
    props: {
      supportTypes: [_dingtalkDocsCoolApp.FieldType.Attachment]
    },
    validator: {
      required: true
    }
  },
  // {
  //   key: 'imageUrl2',
  //   label: `${t('param_image_label')}`,
  //   component: FormItemComponent.FieldSelect,
  //   props: {
  //     supportTypes: [FieldType.Attachment],
  //   },
  //   validator: {
  //     required: false,
  //   }
  // },
  // {
  //   key: 'imageUrl3',
  //   label: `${t('param_image_label')}`,
  //   component: FormItemComponent.FieldSelect,
  //   props: {
  //     supportTypes: [FieldType.Attachment],
  //   },
  //   validator: {
  //     required: false,
  //   }
  // },
  // {
  //   key: 'imageUrl4',
  //   label: `${t('param_image_label')}`,
  //   component: FormItemComponent.FieldSelect,
  //   props: {
  //     supportTypes: [FieldType.Attachment],
  //   },
  //   validator: {
  //     required: false,
  //   }
  // },
  // {
  //   key: 'imageUrl5',
  //   label: `${t('param_image_label')}`,
  //   component: FormItemComponent.FieldSelect,
  //   props: {
  //     supportTypes: [FieldType.Attachment],
  //   },
  //   validator: {
  //     required: false,
  //   }
  // },
  {
    key: 'prompt',
    label: t('param_prompt_label'),
    component: _dingtalkDocsCoolApp.FormItemComponent.Textarea,
    props: {
      placeholder: '请输入图片编辑指令',
      enableFieldReference: true
    },
    validator: {
      required: true
    }
  }, {
    key: 'model',
    label: t('param_model_label'),
    component: _dingtalkDocsCoolApp.FormItemComponent.Textarea,
    props: {
      placeholder: '请输入型号',
      enableFieldReference: true
    },
    validator: {
      required: true
    }
  }],
  // 定义捷径的返回结果类型
  resultType: {
    type: _dingtalkDocsCoolApp.FieldType.Attachment
  },
  // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems （如引用的依赖字段）
  execute: function () {
    var _execute = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(context, formData) {
      var imageUrl1, imageUrl2, imageUrl3, imageUrl4, imageUrl5, prompt, model, generateNonce, generateSign, url, imageFields, base64Images, _i, _imageFields, imageField, _iterator, _step, image, tmpUrl, imageResponse, arrayBuffer, buffer, base64, contentType, headers, requestBody, init, res, editedImageUrls, resJson, content, imageContents, uploadedImages, _iterator2, _step2, _step2$value, index, _url, dataUriRegex, match, _match, mimeType, base64Data, fileExtension, fileName, dataUrl, _t, _t2, _t3, _t4;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            imageUrl1 = formData.imageUrl1, imageUrl2 = formData.imageUrl2, imageUrl3 = formData.imageUrl3, imageUrl4 = formData.imageUrl4, imageUrl5 = formData.imageUrl5, prompt = formData.prompt, model = formData.model;
            _context.p = 1;
            // 生成6位随机数
            generateNonce = function generateNonce() {
              return Math.floor(100000 + Math.random() * 900000).toString();
            }; // 生成签名
            generateSign = function generateSign(method, url, accessKey, timestamp, nonce, accessSecret) {
              // 处理url，去除协议、域名、参数，以/开头
              var path = url.replace(/^https?:\/\/[^\/]+/, '').split('?')[0];
              // 按照顺序拼接参数
              var str = "".concat(method.toUpperCase(), "&").concat(path, "&").concat(accessKey, "&").concat(timestamp, "&").concat(nonce);
              // 使用HMAC-SHA256计算签名
              var hmac = require('crypto').createHmac('sha256', accessSecret);
              var signData = hmac.update(str).digest('base64');
              return signData;
            }; // 3. 上传生成的图片到外部存储API
            // 1. 调用Gemini API
            url = 'https://api.ezlinkai.com/v1beta/models/gemini-3-pro-image-preview:generateContent'; // 收集所有图片字段
            imageFields = [imageUrl1, imageUrl2, imageUrl3, imageUrl4, imageUrl5]; // 转换所有临时URL为base64
            base64Images = [];
            _i = 0, _imageFields = imageFields;
          case 2:
            if (!(_i < _imageFields.length)) {
              _context.n = 14;
              break;
            }
            imageField = _imageFields[_i];
            if (!Array.isArray(imageField)) {
              _context.n = 13;
              break;
            }
            _iterator = _createForOfIteratorHelper(imageField);
            _context.p = 3;
            _iterator.s();
          case 4:
            if ((_step = _iterator.n()).done) {
              _context.n = 10;
              break;
            }
            image = _step.value;
            if (!(image !== null && image !== void 0 && image.tmp_url)) {
              _context.n = 9;
              break;
            }
            tmpUrl = image.tmp_url;
            if (!tmpUrl) {
              _context.n = 9;
              break;
            }
            _context.p = 5;
            _context.n = 6;
            return context.fetch(tmpUrl, {
              method: 'GET'
            });
          case 6:
            imageResponse = _context.v;
            _context.n = 7;
            return imageResponse.arrayBuffer();
          case 7:
            arrayBuffer = _context.v;
            // Convert ArrayBuffer to Buffer
            buffer = Buffer.from(arrayBuffer); // Convert Buffer to base64 string without data URI prefix
            base64 = buffer.toString('base64');
            contentType = image.type + '/' + image.name.split('.').pop() || 'image/png';
            base64Images.push({
              mime_type: contentType,
              data: base64
            });
            _context.n = 9;
            break;
          case 8:
            _context.p = 8;
            _t = _context.v;
            console.log('====error', String(_t));
          case 9:
            _context.n = 4;
            break;
          case 10:
            _context.n = 12;
            break;
          case 11:
            _context.p = 11;
            _t2 = _context.v;
            _iterator.e(_t2);
          case 12:
            _context.p = 12;
            _iterator.f();
            return _context.f(12);
          case 13:
            _i++;
            _context.n = 2;
            break;
          case 14:
            headers = {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer vSECfXfc7PQiB3Ap2029936eE83349878b0aE0F82b76D228'
            };
            requestBody = {
              model: "gemini-2.5-flash-image-preview",
              "contents": [{
                "role": "user",
                "parts": [{
                  "text": prompt
                }]
              }],
              "generationConfig": {
                "responseModalities": ["TEXT", "IMAGE"]
              }
            }; // Add all base64 images after the text prompt
            base64Images.forEach(function (image) {
              requestBody.contents[0].parts.push({
                "inline_data": {
                  "mime_type": image.mime_type,
                  "data": image.data
                }
              });
            });
            init = {
              method: 'POST',
              headers: headers,
              body: JSON.stringify(requestBody)
            };
            _context.n = 15;
            return context.fetch(url, init, 'auth_id');
          case 15:
            res = _context.v;
            // 2. 处理响应
            editedImageUrls = [];
            _context.p = 16;
            _context.n = 17;
            return res.json();
          case 17:
            resJson = _context.v;
            // console.log({ '===完整响应': resJson });

            // 解析响应，获取编辑后的图片URL
            if (resJson.candidates && resJson.candidates[0] && resJson.candidates[0].content) {
              content = resJson.candidates[0].content;
              if (Array.isArray(content.parts)) {
                // 查找所有图片类型的内容 - 使用正确的 camelCase 属性名
                imageContents = content.parts.filter(function (item) {
                  return item.inlineData;
                }); // 收集所有图片URL
                if (imageContents.length > 0) {
                  editedImageUrls = imageContents.map(function (item) {
                    if (item.inlineData) {
                      var _item$inlineData = item.inlineData,
                        mimeType = _item$inlineData.mimeType,
                        data = _item$inlineData.data;
                      return "data:".concat(mimeType, ";base64,").concat(data);
                    }
                    return '';
                  }).filter(function (url) {
                    return url;
                  }); // 过滤掉空URL
                }
              }
            }
            _context.n = 19;
            break;
          case 18:
            _context.p = 18;
            _t3 = _context.v;
            console.log({
              '===读取响应错误': _t3
            });
            editedImageUrls = [];
          case 19:
            uploadedImages = [];
            _iterator2 = _createForOfIteratorHelper(editedImageUrls.entries());
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                _step2$value = _slicedToArray(_step2.value, 2), index = _step2$value[0], _url = _step2$value[1];
                try {
                  // 解析base64 data URI
                  dataUriRegex = /^data:(.+);base64,(.+)$/;
                  match = _url.match(dataUriRegex);
                  if (match) {
                    _match = _slicedToArray(match, 3), mimeType = _match[1], base64Data = _match[2];
                    fileExtension = mimeType.split('/')[1];
                    fileName = "generated-".concat(index + 1, ".").concat(fileExtension); // 直接使用base64数据构建完整的data URL
                    dataUrl = "data:".concat(mimeType, ";base64,").concat(base64Data);
                    uploadedImages.push({
                      "fileName": "".concat(model, ".png"),
                      "url": _url,
                      "type": mimeType
                    });
                  }
                } catch (error) {
                  console.log({
                    '===上传图片错误': String(error)
                  });
                  // fallback: use original URL if upload fails
                  uploadedImages.push({
                    "fileName": "".concat(model, ".png"),
                    "url": _url,
                    "type": "image"
                  });
                }
              }
              // console.log('===========<uploadedImages', uploadedImages);
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            return _context.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Success,
              data: uploadedImages
            });
          case 20:
            _context.p = 20;
            _t4 = _context.v;
            console.log('====error', String(_t4));
            return _context.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Error
            });
        }
      }, _callee, null, [[16, 18], [5, 8], [3, 11, 12, 13], [1, 20]]);
    }));
    function execute(_x, _x2) {
      return _execute.apply(this, arguments);
    }
    return execute;
  }()
});
var _default = exports["default"] = _dingtalkDocsCoolApp.fieldDecoratorKit;
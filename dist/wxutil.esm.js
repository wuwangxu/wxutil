var url = {
  /**
   * 获取url参数
   * @param {string} - name
   * @param {string} - url
   * @returns {string}
   * @example
   * getParamByName("a", "http://www.baidu.com?a=1&b=aaa") // "1"
   * @example
   * getParamByName("b", "http://www.baidu.com?a=1&b=aaa") // "aaa"
   * @example
   * getParamByName("c", "http://www.baidu.com?a=1&b=aaa") //""
   * @example
   * getParamByName("c") // "ccc"
   */
  getParamByName: function getParamByName(name) {
    var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);
    if (!results) return "";
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  },

  /**
   * 解析url
   * @param {string} - url
   * @returns {Object}
   * @example
   * parseQueryString("http://www.baidu.com?a=1&b=aaa") // {a:'1',b:'aaa'}
   */
  parseQueryString: function parseQueryString(url) {
    if (!url) url = window.location.href;
    var search = url[0] === "?" ? url.substr(1) : url.substring(url.lastIndexOf("?") + 1);
    var theRequest = new Object();

    if (search !== "") {
      var strs = search.split("&");

      for (var i = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
      }
    }

    return theRequest;
  }
};
var getParamByName = url.getParamByName;
var parseQueryString = url.parseQueryString;

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

var env = {
  /**
   * ios环境
   * @param {string} ua
   * @returns {boolean}
   * @example
   * iOS('Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1') // true
   */
  iOS: function iOS() {
    var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : navigator.userAgent;
    return /iPad|iPhone|iPod/i.test(ua);
  },

  /**
   * weixin环境
   * @param {string} ua
   * @returns {boolean}
   */
  Weixin: function Weixin() {
    var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : navigator.userAgent;
    return /micromessenger\/([\d.]+)/i.test(ua) || ua.indexOf("MicroMessenger") > -1;
  },

  /**
   * android环境
   * @param {string} ua
   * @returns {boolean}
   * @example
   * Android('Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Mobile Safari/537.36') // true
   */
  Android: function Android() {
    var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : navigator.userAgent;
    return /android/i.test(ua) || ua.indexOf("Adr") > 1;
  },

  /**
   * browser环境
   * @returns {boolean}
   */
  isBrowser: function isBrowser() {
    return (typeof window === "undefined" ? "undefined" : _typeof_1(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof_1(document)) === "object" && document.nodeType === 9;
  },

  /**
   * webvie环境
   * @returns {boolean}
   */
  isMara: function isMara() {
    var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : navigator.userAgent;
    return ua.indexOf("mararun") > -1;
  },

  /**
   * 小程序环境
   * @returns {promise}
   */
  isMini: function isMini() {
    var _this = this;

    return new Promise(function (resolve, reject) {
      if (_this.Weixin()) {
        wx.miniProgram.getEnv(function (res) {
          resolve(res.miniprogram);
        });
      } else {
        resolve(false);
      }
    });
  },

  /**
   * mobile环境
   * @param {string} ua
   * @returns {boolean}
   * @example
   * isMobile('Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)') // true
   */
  isMobile: function isMobile() {
    var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : navigator.userAgent;
    var regMobileAll = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        regMobileFour = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i;
    return regMobileAll.test(ua) || regMobileFour.test(ua.substr(0, 4));
  }
};
var iOS = env.iOS;
var Weixin = env.Weixin;
var Android = env.Android;
var isBrowser = env.isBrowser;
var isMobile = env.isMobile;
var isMara = env.isMara;
var isMini = env.isMini;

var verification = {
  /**
   * 判断是否是验证码
   * @param {number|string} -code
   * @returns {boolean}
   * @example
   * isCode(123123) // true
   * @example
   * isCode(3123) // false
   */
  isCode: function isCode(code) {
    return /^[0-9]{6}$/g.test(code + "");
  },

  /**
   * 判断是否为邮箱
   * @param {string} - email
   * @returns {boolean}
   * @example
   * isEmail("aaa@qq.com") // true
   * @example
   * isEmail("aaqq.com") // false
   */
  isEmail: function isEmail(email) {
    return /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?$/.test(email);
  },

  /**
   * 判断是否为手机号码
   * @param {number | string} - phone
   * @returns {boolean}
   * @example
   * isPhone(13311112222) // true
   * @example
   * isPhone(2) // false
   */
  isPhone: function isPhone(phone) {
    return /(((\+?86)|(\+?860))?[1][34578][0-9]{9})/.test(phone + "");
  }
};
var isCode = verification.isCode;
var isEmail = verification.isEmail;
var isPhone = verification.isPhone;

var prefix = 'store';
var storage = {
  /**
  * 设置storage
  * @param {string} - attr
  * @param {string|number} - val
  * @returns {void}
  * @example
  * set("token", "123") // undefined
  * @example
  * get("token") // "123"
  */
  set: function set(attr, val) {
    localStorage.setItem(prefix + attr, val);
  },

  /**
   * 获取storage
   * @param {string} - attr
   * @returns {string}
   * @example
   * get("token") // "123"
   */
  get: function get(attr) {
    return localStorage.getItem(prefix + attr);
  },

  /**
  * 移除storage
  * @param {string} - attr
  * @returns {void}
  * @example
  * remove("token") // undefined
  * @example
  * get("token") // null
  */
  remove: function remove(attr) {
    localStorage.removeItem(prefix + attr);
  },

  /**
   * 移除所有storage
   * @returns {void}
   * @example
   * clear() // undefined
   * @example
   * get("token") // null
   */
  clear: function clear() {
    localStorage.clear();
  }
};
var set = storage.set;
var get = storage.get;
var remove = storage.remove;
var clear = storage.clear;

export { getParamByName, parseQueryString, iOS, Weixin, Android, isBrowser, isMobile, isMara, isMini, isCode, isEmail, isPhone, set, get, remove, clear };

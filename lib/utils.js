var toString = Object.prototype.toString,
    hasOwn = Object.prototype.hasOwnProperty;

var class2type = {
    '[object Boolean]' : 'boolean',
    '[object Number]' : 'number',
    '[object String]' : 'string',
    '[object Function]' : 'function',
    '[object Array]' : 'array',
    '[object Date]' : 'date',
    '[object RegExp]' : 'regExp',
    '[object Object]' : 'object'
};

var validateRegExp = {
    decmal: "^([+-]?)\\d*\\.\\d+$",// 浮点数
    decmal1: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*$",// 正浮点数
    decmal2: "^-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*)$",// 负浮点数
    decmal3: "^-?([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0)$",
    // 浮点数
    decmal4: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0$",
    // 非负浮点数（正浮点数 + 0）
    decmal5: "^(-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*))|0?.0+|0$",
    // 非正浮点数（负浮点数 +
    // 0）
    intege: "^-?[1-9]\\d*$",
    // 整数
    intege1: "^[1-9]\\d*$",
    // 正整数
    intege2: "^-[1-9]\\d*$",
    // 负整数
    num: "^([+-]?)\\d*\\.?\\d+$",
    // 数字
    num1: "^[1-9]\\d*|0$",
    // 正数（正整数 + 0）
    num2: "^-[1-9]\\d*|0$",
    // 负数（负整数 + 0）
    ascii: "^[\\x00-\\xFF]+$",
    // 仅ACSII字符
    chinese: "^[\\u4e00-\\u9fa5]+$",
    // 仅中文
    color: "^[a-fA-F0-9]{6}$",
    // 颜色
    date: "^\\d{4}(\\-|\\/|\.)\\d{1,2}\\1\\d{1,2}$",
    // 日期
    email: "^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$",
    // 邮件
    idcard: "^[1-9]([0-9]{14}|[0-9]{17})$",
    // 身份证
    ip4: "^(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)$",
    // ip地址
    letter: "^[A-Za-z]+$",
    // 字母
    letter_l: "^[a-z]+$",
    // 小写字母
    letter_u: "^[A-Z]+$",
    // 大写字母
    mobile: "^0?(13|15|18|14|17)[0-9]{9}$", //^1[3|4|5|7|8]\d{9}$
    // 手机
    notempty: "^\\S+$",
    // 非空
    password: "^.*[A-Za-z0-9\\w_-]+.*$",
    // 密码
    fullNumber: "^[0-9]+$",
    // 数字
    picture: "(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$",
    // 图片
    qq: "^[1-9]*[1-9][0-9]*$",
    // QQ号码
    rar: "(.*)\\.(rar|zip|7zip|tgz)$",
    // 压缩文件
    tel: "^[0-9\-()（）]{7,18}$",
    // 电话号码的函数(包括验证国内区号,国际区号,分机号)
    url: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$",
    // url
    username: "^[A-Za-z0-9_\\-\\u4e00-\\u9fa5]+$",
    // 用户名
    deptname: "^[A-Za-z0-9_()（）\\-\\u4e00-\\u9fa5]+$",
    // 单位名
    zipcode: "^\\d{6}$",
    // 邮编
    realname: "^[A-Za-z\\u4e00-\\u9fa5]+$",
    // 真实姓名
    addr: "^[A-Za-z0-9_()（）\\#\\-\\u4e00-\\u9fa5]+$",
    siteurl: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&#=]*)?$",
};

module.exports = {
    type : function(obj) {
        return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
    },
    isArray : function (obj) {
        return this.type(obj) === "array";
    },
    isWindow : function(obj) {
        return obj && typeof obj === "object" && "setInterval" in obj;
    },
    isFunction : function (obj) {
        return this.type(obj) === "function";
    },
    isPlainObject : function (obj) {
        // Must be an Object.
        // Because of IE, we also have to check the presence of the constructor property.
        // Make sure that DOM nodes and window objects don't pass through, as well
        if ( !obj || this.type(obj) !== "object" || obj.nodeType || this.isWindow( obj ) ) {
            return false;
        }

        try {
            // Not own constructor property must be Object
            if ( obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
                return false;
            }
        } catch (e) {
            return false;
        }

        // Own properties are enumerated firstly, so to speed up,
        // if last one is own, then all properties are own.
        var key;
        for ( key in obj ) {}

        return key === undefined || hasOwn.call( obj, key );
    },

    extend : function() {
        // 定义默认参数和变量
        // 对象分为扩展对象和被扩展的对象
        //options 代表扩展的对象中的方法
        //name 代表扩展对象的方法名
        //i   为扩展对象参数起始值
        //deep 默认为浅复制
        var options, name, src, copy, copyIsArray, clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        //当第一个参数为布尔类型是，次参数定义是否为深拷贝
        //对接下来的参数进行处理
        if ( typeof target === "boolean" ) {
            deep = target;
            target = arguments[1] || {};
            // 当定义是否深拷贝时，参数往后移动一位
            i = 2;
        }

        //如果要扩展的不是对象或者函数，则定义要扩展的对象为空
        if ( typeof target !== "object" && !this.isFunction(target) ) {
            target = {};
        }

        //当只含有一个参数时，被扩展的对象是jQuery或jQuery.fn
        if ( length === i ) {
            target = this;
            --i;
        }

        //对从i开始的多个参数进行遍历
        for ( ;i < length; i++ ) {
            // 只处理有定义的值
            if ( (options = arguments[ i ]) != null ) {
                // 展开扩展对象
                for ( name in options ) {
                    src = target[name];
                    copy = options[name];
                    // 防止循环引用
                    if ( target === copy ) {
                        continue;
                    }
                    // 递归处理深拷贝
                    if ( deep && copy && ( this.isPlainObject(copy) || (copyIsArray = this.isArray(copy)) ) ) {
                        if ( copyIsArray ) {
                            copyIsArray = false;
                            clone = src && this.isArray(src) ? src : [];
                        } else {
                            clone = src && this.isPlainObject(src) ? src : {};
                        }
                        target[name] = this.extend( deep, clone, copy );
                        // 不处理未定义值
                    } else if ( copy !== undefined ) {
                        //给target增加属性或方法
                        target[name] = copy;
                    }
                }
            }
        }
        return target;
    },

    isDefined : function(value) {
        return typeof value !== 'undefined';
    },

    inArray : function( elem, arr) {
        for (var i in arr) {
            if ( arr[i] === elem ) {
                return true;
            }
        }
        return false;
    },
    isZipcode: function(str){
        return new RegExp(validateRegExp.zipcode).test(str);
    },
    isAmount: function(str){
        return (new RegExp(validateRegExp.decmal4).test(str)) || (new RegExp(validateRegExp.intege1).test(str));
    },
    isEmpty: function(a) {
        return typeof(a)=='undefined' || !a || a == '0'
    },
    isChinese: function(a) {
        return new RegExp("^[\\u4e00-\\u9fa5]+$").test(a)
    },
    isLetter: function(a) {
        return new RegExp("^[A-Za-z]+$").test(a)
    },
    isNumeric: function(a) {
        return new RegExp("^([+-]?)\\d*\\.?\\d+$").test(a)
    },
    isBetweenLength: function(str, _min, _max) {
        return (str.length >= _min && str.length <= _max);
    },
    isUsername: function(str) {
        return new RegExp(validateRegExp.username).test(str);
    },
    isFullNumberName: function(str) {
        return new RegExp(validateRegExp.fullNumber).test(str);
    },
    isPassword: function(str) {
        return /^.*([\W_a-zA-z0-9-])+.*$/i.test(str);
    },
    isEmail: function(str) {
        return new RegExp(validateRegExp.email).test(str);
    },
    isTelephone: function(str) {
        return new RegExp(validateRegExp.tel).test(str);
    },
    isMobile: function(str) {
        return new RegExp(validateRegExp.mobile).test(str);
    },
    isRealName: function(str) {
        return new RegExp(validateRegExp.realname).test(str);
    },
    isAddress: function(str) {
        return new RegExp(validateRegExp.addr).test(str);
    },
    isSiteUrl: function(str) {
        return new RegExp(validateRegExp.siteurl).test(str);
    },
    isIdCard:  function(str) {
        return new RegExp(validateRegExp.idcard).test(str);
    },
}
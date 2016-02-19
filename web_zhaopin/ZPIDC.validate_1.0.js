(function () {
    if (!window.console) { window.console = {}; }
    if (!console.error) { console.error = function (msg) { alert(msg) }; }
     var ZPValidate = function () {
        var self = this;
        this._validate = [];
        this.info = {
            ok: "",
            error: ""
        };
        this.verifier = {
            ok: "",
            error: ""
        };
        this.focusCls = '';
        this.valiedateControl = function (boxids, msgid, rule) {
            var result = self.valiedateRule(boxids.val(), rule, boxids, msgid);
            var enable_sys_console = result._enable_sys_console;
            var rt = result.rt;
            //返回值为false,则认为验证不通过
            if (!rt) {
                if (enable_sys_console) {
                    self._validateError(boxids, msgid, result.ver, rule);
                }
                return false;
            } else {
                if (enable_sys_console) {
                    self._validateSuccess(boxids, msgid, result.ver, rule);
                }
                return true;
            }
        };
        this.add = function (option) {
            ///值判断
            option.blur = (option.blur == undefined) ? true : option.blur;
            option = self.equalto(option);
            option = self.rengelength(option);
            option = self.renge(option);
            if (option.id) {
                var boxid = $("#" + option.id);
                var msgid = $("#" + option.msgid);
                if (option.blur) {
                    boxid.unbind("blur").bind("blur", function () {
                        self.valiedateControl(boxid, msgid, option.rule);
                    });
                }
                if(boxid.attr('type') == 'text'){
                    boxid.unbind("focus").bind("focus", function () {
                        boxid.removeClass(self.verifier.error);
                        boxid.addClass(self.focusCls);
                    });

                }
            }
            self._validate.push(option);
        }
        ///验证所有
        this.validate = function (callback) {
            var result = true;
            for (var i = 0; i < self._validate.length; i++) {
                var option = self._validate[i];
                var boxid = $("#" + option.id);
                var msgid = $("#" + option.msgid);
                //若
                if (!self.valiedateControl(boxid, msgid, option.rule)) {
                    result = false;
                }
            }
            return result;
        }
         //验证指定的控件
        this.valiedateSpecifiedCtrl = function (ctrlId) {
            var result = true;
            for (var i = 0; i < self._validate.length; i++) {
                var option = self._validate[i];
                if (ctrlId == option.id) {
                    var boxid = $("#" + option.id);
                    var msgid = $("#" + option.msgid);
                    if (!self.valiedateControl(boxid, msgid, option.rule)) {
                        result = false;
                    }
                    break;
                }
            }
            return result;
        }
        

        this.valiedateRule = function (value, rule, boxids, msgid) {
            var dtypestr = rule.datatype.split(",")
            var result = {};
            for (var i = 0; i < dtypestr.length; i++) {
                if (dtypestr[i].indexOf(":") < 0) {
                    var _rule = ZPValidate.rules[dtypestr[i]];
                    var fun = _rule._fun;
                    var disable = _rule._enable_sys_console;
                    if (fun != null && typeof (fun) == "function") {
                        if (!fun(value, boxids, msgid)) {
                            return { ver: dtypestr[i], rt: false, _enable_sys_console: disable };
                        }
                    } else {
                        console.error("标识为" + dtypestr[i] + "的验证方法无效");
                    }
                } else {
                    var _rule_name = dtypestr[i].split(":")[0];
                    var equaltoid = dtypestr[i].split(":")[1];
                    var _rule = ZPValidate.rules[_rule_name];
                    var fun = _rule._fun;
                    var disable = _rule._enable_sys_console;
                    if (fun != null && typeof (fun) == "function") {
                        if (!fun(value, equaltoid)) {
                            return { ver: _rule_name, rt: false, _enable_sys_console: disable };
                        }
                    } else {
                        console.error("标识为" + dtypestr[i] + "的验证方法无效");
                    }
                }
            }
            result = { ver: "", rt: true, _enable_sys_console: disable };
            return result;
        };

        ///验证长度
        this.rengelength = function (option) {
            var minmax = false;
            if (option.minlength || option.maxlength) {
                minmax = true;
                if (!option.rangelength) {
                    if (option.minlength) {
                        if (!ZPValidate.check.isNumeric(option.minlength)) {
                            console.error("参数minlength的值必须为数字类型");
                            return option;
                        }
                        option.rule.datatype = option.rule.datatype + ",minlength:" + option.minlength;
                    }
                    if (option.maxlength) {
                        if (!ZPValidate.check.isNumeric(option.maxlength)) {
                            console.error("参数maxlength的值必须为数字类型");
                            return option;
                        }
                        option.rule.datatype = option.rule.datatype + ",maxlength:" + option.maxlength;
                    }
                } else {
                    console.error("对minlength,maxlength赋值之后就不能对rangelength 参数赋值");
                    return option;
                }
            }
            if (option.rangelength) {
                if (minmax) {
                    console.error("对 rangelength 赋值之后就不能对 minlength,maxlength参数赋值");
                    return option;
                } else {
                    if (option.rangelength.length == 2) {
                        if (ZPValidate.check.isNumeric(option.rangelength[0]) && ZPValidate.check.isNumeric(option.rangelength[1])) {
                            option.rule.datatype = option.rule.datatype + ",rangelength:" + option.rangelength[0] + "|" + option.rangelength[1];
                        } else {
                            console.error("rangelength的值格式不正确，格式参考 [6,16]");
                        }
                    } else {
                        console.error("rangelength的值格式不正确，格式参考 [6,16]");
                    }
                }
            }
            return option;
        };

        ///验证取值范围
        this.renge = function (option) {
            var minmax = false;
            if (option.min || option.max) {
                minmax = true;
                if (option.min) {
                    if (ZPValidate.check.isNumeric(option.min) || ZPValidate.check.isDate(option.min)) {
                        option.rule.datatype = option.rule.datatype + ",min:" + option.min;
                    } else {
                        console.error("参数min的值必须为数字或者时间类型");
                        return option;
                    }
                }
                if (option.max) {
                    if (!ZPValidate.check.isNumeric(option.max) || !ZPValidate.check.isDate(option.max)) {
                        option.rule.datatype = option.rule.datatype + ",max:" + option.max;
                    } else {
                        console.error("参数max的值必须为数字或者时间类型");
                        return option;
                    }
                }
            }
            if (option.range) {
                if (minmax) {
                    console.error("对 range 赋值之后就不能对 minlength,maxlength参数赋值");
                    return option;
                } else {
                    if (option.range.length == 2) {
                        if ((ZPValidate.check.isNumeric(option.range[0]) && ZPValidate.check.isNumeric(option.range[1])) || (ZPValidate.check.isDate(option.range[0]) && ZPValidate.check.isDate(option.range[1]))) {
                            option.rule.datatype = option.rule.datatype + ",range:" + option.range[0] + "|" + option.range[1];
                        } else {
                            console.error("range的值格式不正确，格式参考 [6,16] 或 [\"2014-9-3\",\"2014-9-8\"]");
                        }
                    } else {
                        console.error("range的值格式不正确，格式参考 [6,16] 或 [\"2014-9-3\",\"2014-9-8\"]");
                    }
                }
            }
            return option
        };
        this.equalto = function (option) {
            var equalto = option.equalTo;
            if (equalto) {
                var equaltoval = $("#" + equalto);
                if (equaltoval.length > 0) {
                    option.rule.datatype = option.rule.datatype + ",equalTo:" + equalto;
                } else {
                    console.error("页面中未找到id=\"" + equalto + "\"的dom元素");
                }
            }
            return option;
        };
        this._validateSuccess = function (boxids, msgid, rule) {
            boxids.removeClass(self.focusCls);
            msgid.removeClass(self.info.error);
            boxids.addClass(self.verifier.ok);
            msgid.addClass(self.info.ok);
            msgid.html("");
            //msgid.hide();
        }
        this._validateError = function (boxids, msgid, msgkey, rule) {
            boxids.removeClass(self.focusCls);
            msgid.removeClass(self.info.ok);
            boxids.addClass(self.verifier.error);
            msgid.addClass(self.info.error);
            if (!rule) { console.error("添加验证的id=\"" + boxids.attr("id") + "\"中的rule错误"); }
            if (!rule[msgkey]) { console.error("添加验证的id=\"" + boxids.attr("id") + "\"中的验证函数\"" + msgkey + "\"对应的错误信息没有找到"); }
            var datatypes = rule.datatype.split(",");
            var errorMsg = '';
            for (var i = 0; i < datatypes.length; i++) {
                if (datatypes[i].indexOf(msgkey) >= 0) {
                    if (datatypes[i].indexOf(":") > 0) {
                        var param = datatypes[i].split(":");
                        if (param[0] == msgkey) {
                            if (param[0] == "rangelength") {
                                errorMsg = rule[msgkey].format(param[1].split("|")[0], param[1].split("|")[1]);
                                break;
                            } else {
                                errorMsg = rule[msgkey].format(param[1]);
                                break;
                            }
                        }
                    } else {
                        errorMsg = rule[msgkey];
                        break;
                    }
                }
            }
            msgid.html(errorMsg);
            if(self.validateCallback){
                self.validateCallback(errorMsg);
            }
            msgid.show();
        }
    }
    ZPValidate.rules = [];
    ///初始化验证规则
    ZPValidate.initCombValidate = function () {
        var _rules = [];
        _rules["isNotEmpty"] = { _fun: ZPValidate.check.isNotEmpty, _enable_sys_console: true };
        _rules["isEmail"] = { _fun: ZPValidate.check.isEmail, _enable_sys_console: true };
        _rules["isAlpha"] = { _fun: ZPValidate.check.isAlpha, _enable_sys_console: true };
        _rules["isNumeric"] = { _fun: ZPValidate.check.isNumeric, _enable_sys_console: true };
        _rules["isAlphaNumeric"] = { _fun: ZPValidate.check.isAlphaNumeric, _enable_sys_console: true };
        _rules["checkEmail"] = { _fun: ZPValidate.check.checkEmail, _enable_sys_console: true };
        _rules["isUrl"] = { _fun: ZPValidate.check.isUrl, _enable_sys_console: true };
        _rules["isMobile"] = { _fun: ZPValidate.check.isMobile, _enable_sys_console: true };
        _rules["isPassword"] = { _fun: ZPValidate.check.isPassword, _enable_sys_console: true };
        _rules["isDate"] = { _fun: ZPValidate.check.isDate, _enable_sys_console: true };
        _rules["equalTo"] = { _fun: ZPValidate.check.equalTo, _enable_sys_console: true };
        _rules["maxlength"] = { _fun: ZPValidate.check.maxLength, _enable_sys_console: true };
        _rules["minlength"] = { _fun: ZPValidate.check.minLength, _enable_sys_console: true };
        _rules["rangelength"] = { _fun: ZPValidate.check.rangeLength, _enable_sys_console: true };
        _rules["min"] = { _fun: ZPValidate.check.Min, _enable_sys_console: true };
        _rules["max"] = { _fun: ZPValidate.check.Max, _enable_sys_console: true };
        _rules["range"] = { _fun: ZPValidate.check.Range, _enable_sys_console: true };
        _rules["notyahooemail"] = { _fun: ZPValidate.check.NotYahooEmail, _enable_sys_console: true };
        ZPValidate.rules = _rules;
    };
    ZPValidate.addRule = function (key, rule, enablesysconsole) {
        enablesysconsole = enablesysconsole == undefined ? true : enablesysconsole;
        if (typeof (key) == "string" && typeof (rule) == "function") {
            if (ZPValidate.check.isNotEmpty(key)) {
                ZPValidate.rules[key] = { _fun: rule, _enable_sys_console: enablesysconsole };
            } else {
                console.error("验证方法标识不能为空");
            }
        } else {
            console.error("请传入正确的值");
        }
    };
    ZPValidate.utility = {
        trim: function (str) {
            return typeof (str) == "string" ? str.replace(/(^\s*)|(\s*$)/g, "") : str;
        },
        parseDate: function (str) {
            return ZPValidate.check.isDate(str) ? new Date(Date.parse(str.replace(/-/g, "/"))) : str;
        }
    };
    ZPValidate.check = {
        ///验证字符串是否不为空
        isNotEmpty: function (str) {
            if (str == null || str == undefined) return false;
            str = ZPValidate.utility.trim(str);
            if (str.length == 0) return false;
            return true;
        },
        ///验证是否全部为字母
        isAlpha: function (str) {
            var re = /[^a-zA-Z]/g;
            if (re.test(str)) {
                return false;
            }
            return true;
        },
        //是否全部为数字
        isNumeric: function (str) {
            var re = /[\D]/g;
            if (re.test(str)) {
                return false;
            }
            return true;
        },
        ///是否为英文或为数字
        isAlphaNumeric: function (str) {
            var re = /[^a-zA-Z0-9-]/g;
            if (re.test(str)) {
                return false;
            }
            return true;
        },
        ///检查是否是email
        isEmail: function (str) {
            var re = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
            return re.test(str);
        },
        ///检查email是否存在
        checkEmail: function (str) {
            var strSuffix = "cc|com|edu|gov|int|net|org|biz|info|pro|name|coop|al|dz|af|ar|ae|aw|om|az|eg|et|ie|ee|ad|ao|ai|ag|at|au|mo|bb|pg|bs|pk|py|ps|bh|pa|br|by|bm|bg|mp|bj|be|is|pr|ba|pl|bo|bz|bw|bt|bf|bi|bv|kp|gq|dk|de|tl|tp|tg|dm|do|ru|ec|er|fr|fo|pf|gf|tf|va|ph|fj|fi|cv|fk|gm|cg|cd|co|cr|gg|gd|gl|ge|cu|gp|gu|gy|kz|ht|kr|nl|an|hm|hn|ki|dj|kg|gn|gw|ca|gh|ga|kh|cz|zw|cm|qa|ky|km|ci|kw|cc|hr|ke|ck|lv|ls|la|lb|lt|lr|ly|li|re|lu|rw|ro|mg|im|mv|mt|mw|my|ml|mk|mh|mq|yt|mu|mr|us|um|as|vi|mn|ms|bd|pe|fm|mm|md|ma|mc|mz|mx|nr|np|ni|ne|ng|nu|no|nf|na|za|aq|gs|eu|pw|pn|pt|jp|se|ch|sv|ws|yu|sl|sn|cy|sc|sa|cx|st|sh|kn|lc|sm|pm|vc|lk|sk|si|sj|sz|sd|sr|sb|so|tj|tw|th|tz|to|tc|tt|tn|tv|tr|tm|tk|wf|vu|gt|ve|bn|ug|ua|uy|uz|es|eh|gr|hk|sg|nc|nz|hu|sy|jm|am|ac|ye|iq|ir|il|it|in|id|uk|vg|io|jo|vn|zm|je|td|gi|cl|cf|cn";
            var regu = "^[a-z0-9][_a-z0-9\-]*([\.][_a-z0-9\-]+)*@([a-z0-9\-_]+[\.])+(" + strSuffix + ")$";
            var re = new RegExp(regu);
            return re.test(str);
        },
        //检查网址是否正确
        isUrl: function (str) {
            ///验证是否为空
            var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
            var objExp = new RegExp(Expression);
            return objExp.test(str)
        },
        ///检查是否是电话号码
        isMobile: function (str) {
            ///验证是否为空
            var reMobile = /^1[3|4|5|7|8]\d{9}$/;
            return reMobile.test(str);
        },
        ///检查密码是否正确
        isPassword: function (str) {
            ///验证是否为空
            var patn = /^[a-zA-Z0-9_]{6,12}$/;
            return patn.test(str);
        },
        ///验证是否是日期格式
        isDate: function (str) {
            var re = /^(\d{4})[\s\.\/-](\d{1,2})[\s\.\/-](\d{1,2})$/;
            if (!re.test(str)) {
                return false;
            }
            var result = str.match(re);
            var y = parseInt(result[1]);
            var m = parseInt(result[2]);
            var d = parseInt(result[3]);
            if (m < 1 || m > 12 || y < 1900 || y > 2100) {
                return false;
            }
            if (m == 2) {
                var days = ((y % 4) == 0) ? 29 : 28;
            } else {
                if (m == 4 || m == 6 || m == 9 || m == 11) {
                    var days = 30;
                } else {
                    var days = 31;
                }
            }
            return (d >= 1 && d <= days);
        },
        equalTo: function (str, equalid) {
            var equalval = $("#" + equalid).val();
            if (equalval == str) {
                return true;
            }
            return false;
        },
        maxLength: function (str, param) {
            if (str.length <= param) {
                return true;
            }
            return false;
        },
        minLength: function (str, param) {
            if (str.length >= param) {
                return true;
            }
            return false;
        },
        rangeLength: function (str, param) {
            var min = parseInt(param.split("|")[0]);
            var max = parseInt(param.split("|")[1]);
            if ( str.length >= min && str.length <= max) {
                return true;
            }
            return false;
        },
        Min: function (str, param) {
            if (ZPValidate.check.isDate(str) && ZPValidate.check.isDate(param)) {
                var d_str = ZPValidate.utility.parseDate(str);
                var d_param = ZPValidate.utility.parseDate(param);
                return (d_str >= d_param)
            } else {
                var d_str = parseInt(str);
                var d_min = parseInt(param);
                return (d_str >= d_min);
            }
        },
        Max: function (str, param) {
            if (ZPValidate.check.isDate(str) && ZPValidate.check.isDate(param)) {
                var d_str = ZPValidate.utility.parseDate(str);
                var d_param = ZPValidate.utility.parseDate(param);
                return (d_str <= d_param)
            } else {
                var d_str = parseInt(str);
                var d_max = parseInt(param);
                return (d_str <= d_max);
            }
        },
        Range: function (str, param) {
            var min = param.split("|")[0];
            var max = param.split("|")[1];
            if (ZPValidate.check.isDate(str) && ZPValidate.check.isDate(min) && ZPValidate.check.isDate(max)) {
                d_str = ZPValidate.utility.parseDate(str);
                d_min = ZPValidate.utility.parseDate(min);
                d_max = ZPValidate.utility.parseDate(max);
                if (d_str >= d_min && d_str <= d_max) {
                    return true;
                }
                return false;
            } else {
                var d_str = parseInt(str);
                var d_min = parseInt(min);
                var d_max = parseInt(max);
                if (d_str >= d_min && d_str <= d_max) {
                    return true;
                }
                return false;
            }
        },
        NotYahooEmail: function (str) {
            if (str.indexOf('@yahoo.cn') > 0 || str.indexOf('@yahoo.com.cn') > 0) {
                return false;
            } else {
                return true;
            }
        }
    };
    String.prototype.format = function () {
        if (!this || this == null || this == "") {
            return "";
        }
        if (!arguments || arguments == undefined || arguments == null || arguments.length == 0) {
            return this.toString();
        }
        var arg = arguments, regFlag = /({\d})/g, str = this.toString();
        var maResult = str.match(regFlag);
        if (maResult != null && maResult.length > 0) {
            for (var i = 0; i < maResult.length; i++) {
                var flag = maResult[i];
                var sIndex = flag.replace("{", "").replace("}", "");
                var argIndex = parseInt(sIndex);
                var value = arg[argIndex];
                str = str.replace(flag, value);
            }
        }
        return str;
    };
    window.ZPValidate = ZPValidate;
    ZPValidate.initCombValidate();
})();


/**-----------------------------------控件使用参数说明，具体在使用的时候，以下代码实例代码需全部删除---------------------------------------**/

///调用验证框架中的addvalidate(option) 中的参数说明
///验证控件控件使用的参数说明

var option = {
    id: "",                                                 //需要验证的id
    msgid: "",                                              //错误信息的domid
    maxlength: 10,                                          //最大字符串长度
    minlength: 5,                                           //最小字符串长度
    max: 10,                                                //最大值
    min: 5,                                                 //最小值
    rangelength: [6, 8],                                    //字符串长度在6-8之间
    range:[5,10],                                           //字符串的值在5-10之间
    equalTo:"username",                                     //是否和id=username 文本框中的值相等
    blur: "",                                               //默认值为true， 是否启用blur验证
    rule: {
        datatype: "isNotEmpty,isEmail,checkEmail",             //需要验证的参数
        isNotEmpty: "用户名不能为空!",                      //验证isNotEmpty未通过的提示信息
        isEmail: "电子邮件的格式不正确",                    //验证isEmail未通过的提示信息，框架自动会填充{0},{1}的值
        rangelength: "字符串的长度必须在{0}至{1}之间",      //验证ranglength未通过的提示信息，框架自动会填充{0}
        maxlength: "字符串的长度不能大于{0}个字符",         //验证maxlength未通过的信息，框架自动会填充{0}
        mixlength: "不能小于{0}个字符",                     //验证mixlength未通过的信息，框架自动会填充{0}
        max: "字符串的值不能大于{0}个字符",                 //验证max未通过的信息，框架自动会填充{0}
        min: "字符串的值不能小于{0}个字符",                 //验证min未通过的信息，框架自动会填充{0}
        range: "字符串的值必须在{0}至{1}之间"               //验证range未通过的信息，框架自动会填充{0}{1}
    }
}

///验证规则
var rules = {
    //名称
    _name: "isNotEmpty",                                   //验证参数的key，重名则覆盖
    ///验证的方法
    _fun: function (str, id, msgid) { },                //具体的参数,str:此控件的值， id:此控件的id   msgid:错误信息显示id， 方法必须返回true和false告知验证框架是否验证通过
    ///是否启用系统错误信息的输出
    _enable_sys_console: true                          //是否启用框架本身验证信息显示，不给值的时候默认是true
}
var ran = function(){
    var imgRan = Math.floor(Math.random() * 10);
    return imgRan == 1 ? imgRan + 1 : imgRan;
};
seajs.config({
    alias: {},
    paths: {
        commJs : 'http://img0'+ran()+'.zhaopin.cn/2014/common/js',
        widgets : 'http://img0'+ran()+'.zhaopin.cn/2014/common/js/widgets',
        rd2JobtType : 'http://img0'+ran()+'.zhaopin.cn/2014/common/js/widgets/rd2.jobType'
    },
    vars: {},
    map: [],
    preload: [],
    base: 'http://img0'+ran()+'.zhaopin.cn/2014/common/js/'
    /*debug: true
    charset: 'utf-8'*/
});
﻿ZPIDC.ns("ZPIDC.addJob");
//单日历
ZPIDC.addJob.initTimeSelector = function(maxDate){
    var oBackCalTime1 = null;
    var _maxDate = new Date(+new Date() + 90*24*60*60*1000);
    oBackCalTime1 = new Calendar({
        id: 		   "#DateEnd",			//触发显示日历元素ID
        isPopup:       !0,					//弹出式日历
        isPrevBtn:     !0,					//显示上月按钮
        isNextBtn:     !0,					//显示下月按钮
        isCloseBtn:    !0,					//显示关闭按钮
        isHoliday:     !0,					//节假日特殊显示
        isHolidayTips: !0,					//显示节假日1~3天/后1~3天信息
        isDateInfo:    !0,					//显示日期信息
        isMessage: 	   !0,					//有日历提示信息
        isCalEnd:      !0,					//标记为结束时间
        dateInfoClass: "date-info-end",		//结束时间icon样式
        range:		   {mindate: new Date(), maxdate: maxDate || _maxDate},	//限制范围（当天——2020-12-31）
        count: 		   1,					//日历个数
        monthStep:	   1,					//切换上下月日历步长
        onSelectDate:  fnSelectDate,		//选择日期回调方法
        onClose:	   fnClose				//关闭日历回调方法
    });

    //选择日期回调函数
    function fnSelectDate(obj) {
        if(obj["data-date"])
        {
            switch(this.triggerNode.id) {
                case "DateEnd":
                    oBackCalTime1.endDate = this.endDate = obj["data-date"];
                    oBackCalTime1.render(this.endDate);
                    this.render(this.endDate);
                    break;
            }
        }
        else
        {
            this.oneMonthY(timeMonth);
            oBackCalTime1.endDate = oYear+'-'+lzc.zero(timeMonth)+'-'+oBackCalTime1.r;
        }
    }
    //关闭日历回调函数
    function fnClose() {
        this.hideMessage()
    }
    oBackCalTime1.eTime(oBackCalTime1);
};
﻿ZPIDC.ns("ZPIDC.addJob");

/**
 * 职位类别显隐
 * @constructor
 */
ZPIDC.addJob.ChangeJobTypeMinorSelDisplay = function () {
    var hasjobTypeMain = $('#jobTypeMain').val() != "";
    var hasjobTypeMinor = $('#jobTypeMinor').val() != "";
    if (hasjobTypeMinor) $("#divMinorJobTYpe").show();

    var visibleDivMinorJobTYpe = $("#divMinorJobTYpe").is(':hidden') == false;

    var showBtnAddJobTypeMinorSel = false;
    var showBtnDelJobTypeMinorSel = false;

    if (hasjobTypeMain) {
        if (visibleDivMinorJobTYpe) {
            if (hasjobTypeMinor) showBtnDelJobTypeMinorSel = true;
        }
        else {
            showBtnAddJobTypeMinorSel = true;
        }
    }

    if (showBtnAddJobTypeMinorSel)
        $("#btnAddJobTypeMinorSel").show();
    else
        $("#btnAddJobTypeMinorSel").hide();

    if (showBtnDelJobTypeMinorSel)
        $("#btnDelJobTypeMinorSel").show();
    else
        $("#btnDelJobTypeMinorSel").hide();

    var typeMain = $('#buttonSelJobTypeMain');
    var typeMinor = $('#buttonSelJobTypeMinor');
    typeMain.val(ZPIDC.addJob.subword(typeMain.val(),38));
    typeMinor.val(ZPIDC.addJob.subword(typeMinor.val(),38));
    //验证控件
    if (pageCheck) {
        pageCheck.checkSpecifiedCtrl('jobTypeMain');
        if (hasjobTypeMinor) pageCheck.checkSpecifiedCtrl('jobTypeMinor');
    }
};
/**
 * 1、弹出不能修改职位类别提示框;2、正在推广的职位不能修改职位类别！
 * @constructor
 */
ZPIDC.addJob.popSelJobTypeTip = function () {
    var dailogSelJobType = new ZPIDC.dialog({
        title: '提示',
        width: 590,
        isMask: true,
        buttons: [{
            text: '确认',
            callback: function () {
                dailogSelJobType.onclose();
            }
        }]
    });
    var body = Handlebars.compile('<div class="popup_text">{0}</div>'.zformat('正在推广的职位不能修改职位类别！'))();
    dailogSelJobType.optionBody(body);
};
/**
 * 选择职位类别 ，绑定主次要类别事件
 * @constructor
 */
ZPIDC.addJob.initJobTypeEvent = function () {
    var $mainType = $('#buttonSelJobTypeMain');
    var $minorType = $('#buttonSelJobTypeMinor');
    //Main JobType Select Event
    var bindBtnSelJobTypeMain = function () {
        //添加只读属性：当包含blockPopupForJiPin属性时，不显示下拉弹层
        if ($mainType.attr("blockPopupForJiPin") == "true") {
            ZPIDC.addJob.popSelJobTypeTip();
            return;
        }
        $mainType.unbind('click');
        seajs.use('rd2JobtType/creator', function (creator) {
            creator.createJobTypeSelector("buttonSelJobTypeMain");
        });
    };

    //Minor JobType Select Event
    var bindBtnSelJobTypeMinorClickEvent = function () {
        $minorType.on('click', function () {
            if(!$minorType.data('clicked')){
                $minorType.data('clicked',true);
            }else{
                return ;
            }
            $minorType.data('clicked',true);
            //添加只读属性：当包含blockPopupForJiPin属性时，不显示下拉弹层
            if ($minorType.attr("blockPopupForJiPin") == "true") {
                ZPIDC.addJob.popSelJobTypeTip();
                return;
            }
            var jobTypeMinor = document.getElementById('jobTypeMinor');
            var subJobTypeMinor = document.getElementById('subJobTypeMinor');
            $minorType.unbind('click');
            seajs.use('rd2JobtType/creator', function (creator) {
                creator.createJobTypeSelector("buttonSelJobTypeMinor", jobTypeMinor, subJobTypeMinor, '选择次要职位类别');
            });
        });
    };

    //Choose Main JobType
    $('#divMainJobTYpe .sj').bind("click", function(){
        $mainType.click();
    });
    $mainType.bind("click", bindBtnSelJobTypeMain);

    //Add Minor JobType
    $('#btnAddJobTypeMinorSel').on('click', function () {
        $('#divMinorJobTYpe').show();
        $minorType.val('请选择次要职位类别');
        $('#btnAddJobTypeMinorSel').hide();
        bindBtnSelJobTypeMinorClickEvent();
    });

    //Del Minor JobType
    $('#divMinorJobTYpe .sj').bind("click", function(){
        $minorType.click();
    });
    $('#btnDelJobTypeMinorSel').on('click', function () {
        $('#jobTypeMinor').val('');
        $('#subJobTypeMinor').val('');
        $minorType.val('').attr('title', '');
        $('#divMinorJobTYpe').hide();
        ZPIDC.addJob.ChangeJobTypeMinorSelDisplay();
    });

    if ($('#divMinorJobTYpe').is(":hidden") == false) bindBtnSelJobTypeMinorClickEvent();
    $mainType.attr('afterClickOK', 'ZPIDC.addJob.ChangeJobTypeMinorSelDisplay();');
    $minorType.attr('afterClickOK', 'ZPIDC.addJob.ChangeJobTypeMinorSelDisplay();');
};

/**
 * 为职位类别选择初始化文案显示
 */
ZPIDC.addJob.initJobTypeShowText = function () {
    initShowText($('#jobTypeMain'), $('#subJobTypeMain'), $('#buttonSelJobTypeMain'));
    initShowText($('#jobTypeMinor'), $('#subJobTypeMinor'), $('#buttonSelJobTypeMinor'));
    ZPIDC.addJob.ChangeJobTypeMinorSelDisplay();
    function initShowText(jobType, subJobType, textContainer) {
        var jobTypeValue = jobType.val();
        var showStr = '';
        if (jobTypeValue != '') {
            var jobTypeText = CONST_JOBTYPE.substring(CONST_JOBTYPE.indexOf(jobTypeValue), CONST_JOBTYPE.length);
            var subJobTypeText = '';
            jobTypeText = jobTypeText.substring(0, jobTypeText.indexOf('@'));
            var subJobTypeValue = subJobType.val();
            if (subJobTypeValue != '') {
                var subJobTypeText1 = CONST_SUBJOBTYPE.substring(CONST_SUBJOBTYPE.indexOf(jobTypeValue), CONST_SUBJOBTYPE.lastIndexOf(jobTypeValue) + jobTypeValue.length);
                var subJobTypeText2 = CONST_SUBJOBTYPE.substring(0, CONST_SUBJOBTYPE.indexOf(jobTypeValue));
                var subJobTypeText3 = subJobTypeText2.substring(subJobTypeText2.lastIndexOf('@'), subJobTypeText2.length);
                var subJobTypeText = subJobTypeText3 + subJobTypeText1;
                subJobTypeText = subJobTypeText.substring(subJobTypeText.indexOf("@"+subJobTypeValue),subJobTypeText.length);
                subJobTypeText = subJobTypeText.substring(0,subJobTypeText.indexOf(jobTypeValue));
                subJobTypeText = subJobTypeText.split('|')[1];
                showStr = "："+subJobTypeText;
            }
            jobTypeText = jobTypeText.split('|')[1];
            showStr = jobTypeText + showStr;
        }
        if (showStr != '') {
            textContainer.attr('title',showStr);
            textContainer.val(ZPIDC.addJob.subword(showStr,38));
        }
    }
};
/**
 * 截取指定长度的中英文字符串(中文长度以2计,不截半字)
 * 若超出指定长度则补后缀(默认为空)
 * @param str
 * @param len
 * @param affix
 * @returns {*}
 */
ZPIDC.addJob.subword = function(str, len, affix){
    var affix = affix || '...' ,
    str_length = 0  ,
    str_len = str.length,
    str_rel_len = str.zrealLength(),
    str_sub = '';
    if(str_rel_len < len || (str.indexOf('...') != -1 && str_rel_len <= len + 3)){
        return str;
    }
    for (var i = 0,m=1; i < str_len; i++) {
        var a = str.charAt(i);
        m = (escape(a).length > 4) ? 2 : 1; //中文字符的长度经编码之后大于4
        str_length = str_length + m;
        if (str_length > len)
            return str_sub.concat(affix);
        else if (str_length == len){
            if(str_length < str_rel_len)
                return str_sub.concat(a).concat(affix);
            else
                return str_sub.concat(a);
        }
        else
            str_sub = str_sub.concat(a);
    }
    if (str_length < len) return str;//若给定字符串小于指定长度，则返回源字符串
};﻿ZPIDC.ns("ZPIDC.addJob");
/**
 * 简历接收方式下拉框选择处理
 * @param receiveMethod
 */
ZPIDC.addJob.initEmailSetting = function () {
    var jqEmailList = $('#EmailList');
    var emailClose = function () {
        $('#resume_email').delegate('.re_i_close', 'click', function () {
            var delEmail = $(this).parent().text();
            $(this).parent().remove();
            var emailList = jqEmailList.val().replace(delEmail, '').replace(/^,|,$/, "").replace(/,,/, ",");
            jqEmailList.val(emailList);
            $("#emailTemp").show();
            $("#btnEmailTempAdd").show();
            ZPIDC.addJob.initEmail();
        });
    };
    var btnEmailAdd = function () {
        var isDiffEmail = function (mail) {
            var newjqEmailList = jqEmailList.val();
            if (newjqEmailList.match(new RegExp(mail, 'i')) == null) {
                return true;
            } else {
                return false;
            }
        };
        $("#btnEmailTempAdd").on('click', function () {

            var emailList = jqEmailList.val();
            var $emailTempErrorMsg = $('#emailTemp_error_msg');
            if (emailList && emailList.split(',').length > 5) {
                $emailTempErrorMsg.text('您最多可以添加5个邮箱');
                $emailTempErrorMsg.attr('class', 'error_tips');
                $emailTempErrorMsg.show();
                return;
            }

            var emailValue = $('#emailTemp').val();
            var result = ZPIDC.ValidateUtil.isEmail(emailValue);
            var diff = isDiffEmail(emailValue);
            if (result) {
                if (diff) {
                    $emailTempErrorMsg.text('');
                    $emailTempErrorMsg.hide();
                    $emailTempErrorMsg.attr('class', '');
                    $('#add_email_text').before('<p>' + emailValue + '<i class="re_i_close"></i></p>');
                    var newjqEmailList = jqEmailList.val().split(',');
                    newjqEmailList.push(emailValue)
                    newjqEmailList = newjqEmailList.join(',').replace(/^,|,$/, "").replace(/,,/, ",");
                    jqEmailList.val(newjqEmailList);
                    var emailList = jqEmailList.val().split(',');
                    ZPIDC.addJob.initEmail();
                    $('#emailTemp').val('');
                    $.ajax({
                        url: '/email/' + emailValue + '/add',
                        success: function () { },
                        error: function () { }
                    });
                } else {
                    $emailTempErrorMsg.text('该邮箱已经添加');
                    $emailTempErrorMsg.attr('class', 'error_tips');
                    $emailTempErrorMsg.show();
                }
            } else {
                $emailTempErrorMsg.text('您输入的邮箱格式不正确');
                $emailTempErrorMsg.attr('class', 'error_tips');
                $emailTempErrorMsg.show();
            }
        });
    };
    emailClose();
    btnEmailAdd();
};
ZPIDC.addJob.initEmail = function () {
    var emailList = $('#EmailList').val();
    var emailCount = 0;
    //同时转发简历到邮箱
    $("#resume_email").text('');

    $('#emailTemp_error_msg').hide().text('').attr('class', '');

    var hasNotValidEmail = false;

    if (emailList != "") {
        var emailArr = emailList.split(",");
        emailCount = emailArr.length;
        $.each(emailArr, function (index, email) {
            $("#resume_email").append("<p>" + email + "<i class=\"re_i_close\"></i></p>");
            if (!hasNotValidEmail) hasNotValidEmail = !ZPIDC.ValidateUtil.isEmail(email);
        });
        if (emailCount >= 5) {
            $("#emailTemp").hide();
            $("#btnEmailTempAdd").hide();
        }
    }

    var msg = '<span id="emailList_error_msg" class="" style="display: inline;margin-left:0;"></span>';
    if (hasNotValidEmail) {
        msg = '<span id="emailList_error_msg" class="error_tips" style="display: inline;margin-left:0;">您已经添加的转发邮箱中存在格式错误</span>';
    }
    else {
        if (emailCount < 5) {
            msg = '<span id="emailList_error_msg" class="right_tips" style="display: inline;margin-left:0;"><i class="re_i_ok"></i>您还可以添加{0}个邮箱</span>'.zformat(5 - emailCount);
        }
    }
    $("#resume_email").append('<p class="add_email_text" id="add_email_text">'+msg+'</p>');

    //$("#resume_email").append('<p class="add_email_text" id="add_email_text"><span id="emailList_error_msg" class="" style="display: inline;margin-left:0;"></span></p>');
    //if (pageCheck) pageCheck.checkSpecifiedCtrl('EmailList');
    //if (emailCount < 5) $('#emailList_error_msg .right_tips').html('<i class="re_i_ok"></i>您还可以添加{0}个邮箱'.zformat(5 - emailCount));

    if (emailCount < 5) {
        $("#emailTemp").show();
        $("#btnEmailTempAdd").show();
    }

};

ZPIDC.addJob.resumeReceiveMethodChange = function(dom){
    if(ZPIDC.isIE8){
        $('#applicationmethod_selector').parent().css({'margin-top':'11px'}).css({'margin-top':'10px'});
    }
    var receiveMethod = $(dom).attr('def-value');
    if (typeof dom == 'string') {
        receiveMethod = dom;
    }
    if (receiveMethod == "1" || receiveMethod == "5") {
        //仅通过智联系统接收简历
        $(".companyEmail").hide();
        $(".companySystem").hide();
    }
    else if (receiveMethod == "2") {
        $(".companyEmail").show();
        $(".companySystem").hide();
        ZPIDC.addJob.initEmail();
    }
    else if (receiveMethod == "4") {
        $(".companyEmail").hide();
        $(".companySystem").show();
        //转发简历到企业系统
        //转发简历到企业系统
        $("#systemHttp").on("focus",function () {
            $('#systemHttp_error_msg').hide().text('').attr('class', '');
        });
    }
};
$(function () {

    ZPIDC.addJob.initEmailSetting();
    ZPIDC.addJob.resumeReceiveMethodChange($("#ApplicationMethod").val());
    //初始化自动提示下拉框
    ZPIDC.addJob.addEvent.call(null, 'load', function () {
        ZPIDC.addJob.autoComplete.call(ZPIDC.addJob.getElementsByClassName('autoComplete'), {/* 使用call或apply调用此方法 */
            //source:['0123','023',123,1234,212,214,'033333','0352342',1987,17563,20932],/* 提示时在此数组中搜索 */
            ajax: {
                type: 'GET',
                url: '/email/list/{0}/like',
                success: function () { },
                error: function () { }
            },
            elemCSS: { focus: { 'color': 'black', 'background': '#ccc' }, blur: { 'color': 'black', 'background': 'transparent' } },/* 些对象中的key要js对象中的style属性支持 */
            input: 'input',/* 输入框使用input元素 */
            popup: 'ul'/* 提示框使用ul元素 */
        });
    });
});﻿
ZPIDC.ns("ZPIDC.addJob");
ZPIDC.addJob.getElementsByClassName = function (searchClass, node, tag) {
/* 兼容各浏览器的选择class的方法；(写法参考了博客园：http://www.cnblogs.com/rubylouvre/archive/2009/07/24/1529640.html，想了解更多请看这个地址) */
    node = node || document, tag = tag ? tag.toUpperCase() : "*";
    if(document.getElementsByClassName){/* 支持getElementsByClassName的浏览器 */
        var temp = node.getElementsByClassName(searchClass);
        if(tag=="*"){
            return temp;
        } else {
            var ret = new Array();
            for(var i=0; i<temp.length; i++)
                if(temp[i].nodeName==tag)
                    ret.push(temp[i]);
            return ret;
        }
    }else{/* 不支持getElementsByClassName的浏览器 */
        var classes = searchClass.split(" "),
            elements = (tag === "*" && node.all)? node.all : node.getElementsByTagName(tag),
            patterns = [], returnElements = [], current, match;
        var i = classes.length;
        while(--i >= 0)
            patterns.push(new RegExp("(^|\\s)" + classes[i] + "(\\s|$)"));
        var j = elements.length;
        while(--j >= 0){
            current = elements[j], match = false;
            for(var k=0, kl=patterns.length; k<kl; k++){
                match = patterns[k].test(current.className);
                if(!match) break;
            }
            if(match) returnElements.push(current);
        }
        return returnElements;
    }
};
ZPIDC.addJob.addEvent = (function () {/* 用此函数添加事件防止事件覆盖 */
    if(document.addEventListener){
        return function(type, fn){ this.addEventListener(type, fn, false); };
    }else if(document.attachEvent){
        return function(type,fn){
            this.attachEvent('on'+type, function () {
                return fn.call(this, window.event);/* 兼容IE */
            });
        };
    }
})();
(function(window){
/* 插件开始 */
 ZPIDC.addJob.autoComplete=function(o){
    var handler=(function(){
        var handler=function(e,o){ return new handler.prototype.init(e,o); };/* 为每个选择的dom都创建一个相对应的对象，这样选择多个dom时可以很方便地使用 */
        handler.prototype={
            e:null, o:null, timer:null, show:0, input:null, popup:null,
            init:function(e,o){/* 设置初始对象 */
                this.e=e, this.o=o,
                this.input=this.e.getElementsByTagName(this.o.input)[0],
                this.popup=this.e.getElementsByTagName(this.o.popup)[0],
                this.initEvent();/* 初始化各种事件 */
            },
            match:function(quickExpr,value,source){/* 生成提示 */
                var li = null;
                for(var i in source){
                    if( value.length>0 && quickExpr.exec(source[i])!=null ){
                        li = document.createElement('li');
                        li.innerHTML = '<a title="'+source[i]+'" href="javascript:;">'+source[i]+'</a>';
                        this.popup.appendChild(li);
                    }
                }
                if(this.popup.getElementsByTagName('a').length)
                    this.popup.style.display='block';
                else
                    this.popup.style.display='none';
            },
            ajax:function(type,url,quickExpr,search){/* ajax请求远程数据 */
                var xhr = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
                xhr.open(type,url,true);/* 同异步在此修改 */
                xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                var that=this;
                xhr.onreadystatechange = function(){
                    if(xhr.readyState==4) {
                        if(xhr.status==200) {
                            var data = eval(xhr.responseText);
                            that.match(quickExpr,search,data);/* 相同于成功的回调函数 */
                        }else{
                           var dialog = new ZPIDC.dialog({
                                    title : '提示',
                                    width : 490,
                                    containerid : "window_result_dialog" ,
                                    isMask : true,
                                    buttons: buttons || [{
                                        text : "关闭"
                                    }]
                                });
                                var publishPositionBody = Handlebars.compile('<div class="popup_text">{0}</div>'.zformat("请求页面异常!"))();
                                dialog.optionBody(publishPositionBody);
                        }
                    }
                };
                xhr.send(null);
            },
            fetch:function(ajax,search,quickExpr){
                var that=this;
                 this.ajax(ajax.type,ajax.url.zformat(search),quickExpr,search);
            },
            initEvent:function(){/* 各事件的集合 */
                var that=this;
                this.input.onfocus = function(){
                    if(this.inputValue && this.value != '') this.value = this.inputValue;
                    var value=this.value, quickExpr=RegExp('^'+value,'i'), self=this;
                    var els = that.popup.getElementsByTagName('a');
                    if(els.length>0) that.popup.style.display = 'block';
                    that.timer=setInterval(function(){
                        if(value!=self.value){/* 判断输入内容是否改变，兼容中文 */
                            value=self.value;
                            that.popup.innerHTML='';
                            var notEmailRe = /[^a-zA-Z0-9_\.\-\@]/g;
                            if(value!=''&& isEmailPart(value)){
                                quickExpr=RegExp('^'+value,'i');
                                if(that.o.source) that.match(quickExpr,value,that.o.source);
                                else if(that.o.ajax) that.fetch(that.o.ajax,value,quickExpr);
                            }
                        }
                    },1000);
                    //验证是否是邮件片段
                    function isEmailPart(mailStr) {
                        var filter  = /^([a-zA-Z0-9_\.\-])+(\@)?((([a-zA-Z0-9\-])+(\.)?)+)?(([a-zA-Z0-9])+)?$/;
                        if (filter.test(mailStr))
                        {
                            if(mailStr.indexOf("@") == 0|| mailStr.indexOf(".") == 0 || mailStr.indexOf(".") == mailStr.length-1 || mailStr.indexOf(mailStr.indexOf("@"),"@") > 0) return false;
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                };
                this.input.onblur = function(){/*  输入框添加事件 */
                    if(this.value!=this.defaultValue) this.inputValue = this.value;
                    clearInterval(that.timer);
                    var current=-1;/* 记住当前有焦点的选项 */
                    var els = that.popup.getElementsByTagName('a');
                    var len = els.length-1;
                    var aClick = function(){
                        that.input.inputValue = this.firstChild.nodeValue;
                        that.popup.innerHTML='';
                        that.popup.style.display='none';
                        that.input.focus();
                    };
                    var aFocus = function(){
                        for(var i=len; i>=0; i--){
                            if(this.parentNode===that.popup.children[i]){
                                current = i;
                                break;
                            }
                        }
                        //that.input.value = this.firstChild.nodeValue;
                        for(var k in that.o.elemCSS.focus){
                            this.style[k] = that.o.elemCSS.focus[k];
                        }
                    };
                    var aBlur= function(){
                        for(var k in that.o.elemCSS.blur)
                            this.style[k] = that.o.elemCSS.blur[k];
                    };
                    var aKeydown = function(event){
                        event = event || window.event;/* 兼容IE */
                        if(current === len && event.keyCode===9){/* tab键时popup隐藏 */
                            that.popup.style.display = 'none';
                        }else if(event.keyCode==40){/* 处理上下方向键事件方便选择提示的选项 */
                            current++;
                            if(current<-1) current=len;
                            if(current>len){
                                current=-1;
                                that.input.focus();
                            }else{
                                that.popup.getElementsByTagName('a')[current].focus();
                            }
                        }else if(event.keyCode==38){
                            current--;
                            if(current==-1){
                                that.input.focus();
                            }else if(current<-1){
                                current = len;
                                that.popup.getElementsByTagName('a')[current].focus();
                            }else{
                                that.popup.getElementsByTagName('a')[current].focus();
                            }
                        }
                    };
                    for(var i=0; i<els.length; i++){/* 为每个选项添加事件 */
                        els[i].onclick = aClick;
                        els[i].onfocus = aFocus;
                        els[i].onblur = aBlur;
                        els[i].onkeydown = aKeydown;
                    }
                };
                this.input.onkeydown = function(event){
                    event = event || window.event;/* 兼容IE */
                    var els = that.popup.getElementsByTagName('a');
                    if(event.keyCode==40){
                        if(els[0]) els[0].focus();
                    }else if(event.keyCode==38){
                        if(els[els.length-1]) els[els.length-1].focus();
                    }else if(event.keyCode==9){
                        if(event.shiftKey==true) that.popup.style.display = 'none';
                    }
                };
                this.e.onmouseover = function(){ that.show=1; };
                this.e.onmouseout = function(){ that.show=0; };
                ZPIDC.addJob.addEvent.call(document,'click',function(){
                    if(that.show==0){
                        that.popup.style.display='none';
                    }
                });/* 处理提示框dom元素不支持onblur的情况 */
            }
        };
        handler.prototype.init.prototype=handler.prototype;/* JQuery style，这样我们在处的时候就不用每个dom元素都用new来创建对象了 */
        return handler;/* 把内部的处理函数传到外部 */
    })();
    if(this.length){/* 处理选择多个dom元素 */
        for(var a=this.length-1; a>=0; a--){/* 调用方法为每个选择的dom生成一个处理对象，使它们不互相影响 */
            handler(this[a],o);
        }
    }else{/* 处理选择一个dom元素 */
        handler(this,o);
    }
    return this;
};
return window.ZPIDC.addJob.autoComplete = ZPIDC.addJob.autoComplete;/* 暴露方法给全局对象 */
/* 插件结束 */
})(window);﻿ZPIDC.ns("ZPIDC.addJob");
/**
 * 初始化过滤条件文案显示和按钮显示
 */
ZPIDC.addJob.initFilterValue = function () {
    var filterID = $('#filter_id');
    var parentP = $('[bind-hidden="filter_id"]').siblings();
    if (filterID.val() == "") {
        parentP.filter('span').addClass('hidden');
        $('[bind-hidden="filter_id"]').removeClass('rd_btn_110')
            .addClass('rd_btn_60').text('设置');
    }
    if (filterID.val() != "") {
        var filterText = ZPIDC.addJob.getFilterString(filterID.val());
        parentP.filter('span').removeClass('hidden').attr('title', filterText);
        if (filterText.length > 11) filterText = filterText.substr(0, 11) + "...";
        parentP.text('').html(filterText + '<i class="re_i_close"></i>');
        $('[bind-hidden="filter_id"]').removeClass('rd_btn_60')
            .addClass('rd_btn_110').text('修改过滤条件');
        parentP.find('.re_i_close').on('click', function () {
            parentP.filter('span').addClass('hidden');
            filterID.val("");
            ZPIDC.addJob.initFilterValue();
        });
    }
};
/**
 * 获取过滤器
 * @param vFilterId
 * @returns {string}
 */
ZPIDC.addJob.getFilterString = function (vFilterId) {
    var reqUrl = "/ApplyFilter/GetFilter";
    var filterDisplay = "无";
    if (vFilterId != "") {
        $.ajax({
            url: reqUrl,
            data: { filterId: vFilterId },
            cache: false,
            timeout: 10000,
            async: false,
            type: "GET",
            dataType: "json",
            success: function (retData) {
                if (retData) {
                    filterDisplay = ZPIDC.addJob.displayFilter(retData);
                }
            },
            error: function (xhrObj, textStatus, errObj) { }
        });
    }
    return filterDisplay;
};
ZPIDC.addJob.displayFilter = function (data) {
    var filterDisplay = "";
    if (data.MinAge != "" || data.MaxAge != "") {
        filterDisplay = "年龄：";
        filterDisplay += data.MinAge == "" ? "不限" : data.MinAge + "岁";
        filterDisplay += "--";
        filterDisplay += data.MaxAge == "" ? "不限" : data.MaxAge + "岁";
    }
    if (data.Sex != "0" && data.Sex != "") {
        if (filterDisplay != "") filterDisplay += "、";
        filterDisplay += "性别：";
        if (data.Sex == 1) {
            filterDisplay += "男";
        } else if (data.Sex == 2) {
            filterDisplay += "女";
        }
    }
    if (data.MinEducation != "" || data.MaxEducation != "") {
        if (filterDisplay != "") filterDisplay += "、";
        filterDisplay += "学历：";
        filterDisplay += data.MinEducation == "" ? "不限" : ZPIDC.addJob.getEduName(data.MinEducation);
        filterDisplay += "--";
        filterDisplay += data.MaxEducation == "" ? "不限" : ZPIDC.addJob.getEduName(data.MaxEducation);
    }
    if (data.MinExperience != "" || data.MaxExperience != "") {
        if (filterDisplay != "") filterDisplay += "、";
        filterDisplay += "工作年限：";
        if (data.MinExperience == "") {
            filterDisplay += "不限";
        } else if (data.MinExperience == "0") {
            filterDisplay += "无经验";
        } else {
            filterDisplay += data.MinExperience + "年";
        }
        filterDisplay += "--";
        if (data.MaxExperience == "") {
            filterDisplay += "不限";
        } else if (data.MaxExperience == "0") {
            filterDisplay += "无经验";
        } else {
            filterDisplay += data.MaxExperience + "年";
        }
    }
    if (data.ProvinceIdNow != "") {
        if (filterDisplay != "") filterDisplay += "、";
        filterDisplay += "现所在地区：" + CONST_ID_CITY[data.ProvinceIdNow][1];
    }
    if (data.ProvinceIdAccount != "") {
        if (filterDisplay != "") filterDisplay += "、";
        filterDisplay += "户口所在地：" + CONST_ID_CITY[data.ProvinceIdAccount][1];
    }
    if (data.Marriage != "0" && data.Marriage != "") {
        if (filterDisplay != "") filterDisplay += "、";
        filterDisplay += "婚姻状况：";
        if (data.Marriage == 1) {
            filterDisplay += "未婚";
        } else if (data.Marriage == 2) {
            filterDisplay += "已婚";
        }
    }
    if (data.ResumeType != "0" && data.ResumeType != "") {
        if (filterDisplay != "") filterDisplay += "、";
        filterDisplay += "简历版本：";
        if (data.ResumeType == 1) {
            filterDisplay += "中文";
        } else if (data.ResumeType == 2) {
            filterDisplay += "英文";
        } else if (data.ResumeType == 3) {
            filterDisplay += "中英文";
        }
    }
    return filterDisplay;
};
ZPIDC.addJob.getEduName = function (eduId) {
    for (var i = 0; i < CONST_REQUIRE_DEGREE.length; i++) {
        if (CONST_REQUIRE_DEGREE[i][0] == eduId) {
            return CONST_REQUIRE_DEGREE[i][1];
        }
    }
};/**
 * 文件描述：本文件函数主要目的是生成标签
 * 声明字符串格式化方法
 * 使用方式：“{0}课程已经开课{1}天”.format("汉语",“10”)
 */
String.prototype.format = function (args) {
    if (arguments.length > 0) {
        var result = this;
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                var reg = new RegExp("({" + key + "})", "g");
                result = result.replace(reg, args[key]);
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] == undefined) {
                    return "";
                }
                else {
                    var reg = new RegExp("({[" + i + "]})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
        return result;
    }
    else {
        return this;
    }
}
//  定义标签生成全局变量
var job_tags_factory = new Function();

//  定义基本属性和操作函数
$.extend(job_tags_factory, {
    welfaretab : {},
    selected_class: "light-selected",
    //  定义编辑标签生成模板
    enedit_tag_model_str: "<span onclick='job_tags_factory.tag_onclick(this)' class='{0}'  job_id='{1}' job_name='{2}'>{3}</span>",
    //  定义不可编辑标签生成模板
    notedit_tag_model_str: "<span  job_id='{0}' job_name='{1}'>{2}<i></i></span>",
    //  删除数组里的一个元素
    remove_one: function (arr, removeValue) {
        if (arr instanceof Array) {
            for (var step = 0 , len = arr.length; step < len; step++) {
                if (arr[step] == removeValue) {
                    arr.splice(step, 1);
                    return arr;
                }
            }
        }
        return [];
    }
});
//  定义元素生成、样式变换、等等函数
$.extend(job_tags_factory, {
    /**
     *     标签构造器，职位生成页和职位修改页传入参数true，职位预览和职位展示传入参数为false
     *     @param isEdit 此参数表示，true职位发布页和职位修改页，可点击
     *             false职位发布页和预览页，不可点击
     */
    create_tags_dom: function (isEdit) {
        var inHtml = "";
        var tag_model_str = isEdit ? this.enedit_tag_model_str : this.notedit_tag_model_str;
        if (welfareTabJson instanceof Array) {
            for (var step = 0, len = welfareTabJson.length; step < len; step++) {
                var job = welfareTabJson[step];
                var jobId = job.Id ? job.Id : "";
                var jobName = job.Name ? job.Name : "";
                jobName = unescape(jobName);
                var jobSelected = job.Selected ? job.Selected : "";
                var jobNameText = jobSelected ? jobName + '<i></i>' : jobName;
                var light_lab_selected = job.Selected == "False" ? "" : this.selected_class;
                if (isEdit) {
                    inHtml += tag_model_str.format(light_lab_selected, jobId, jobName, jobNameText);
                } else {
                    inHtml += tag_model_str.format(jobId, jobName, jobName);
                }
            }
            return inHtml;
        } else {
            return inHtml;
        }
    },
    //  定义标签点击事件
    tag_onclick: function (dom) {
        var _dom = dom;
        var jqContainerDom = $(_dom);
        var jqIDom = jqContainerDom.find("i");
        var jqWelfaretab = $("[name=welfaretab]");
        var oldTagValue = jqWelfaretab.val() == "" ? [] : jqWelfaretab.val().split(",");
        var click_job_id = jqContainerDom.attr("job_id");
        if (jqContainerDom.hasClass(this.selected_class)) {
            //  执行去勾选删除操作
            oldTagValue = this.remove_one(oldTagValue, click_job_id);
            delete this.welfaretab[click_job_id];
            jqWelfaretab.val(oldTagValue.join(","));
            this.select_tag_option(jqContainerDom,true);
        } else {
            //  执行选择插入操作
            if(oldTagValue.length >= 8){
                try{
                    if(window.ZPIDC && window.ZPIDC.dialog){
                        var dialog = new ZPIDC.dialog({
                            title: '提示',
                            width: 490,
                            height: 237,
                            containerid: "window_result_dialog",
                            isMask: true,
                            buttons: [{
                                text: "关闭"
                            }]
                        });
                        var errorMessage = '<div class="popup_text" style="line-height:35px;padding:60px 50px;">您最多可以选择8个标签，请先点击“√”删除已选择的标签，再添加标签。</div>';
                        dialog.optionBody(errorMessage);
                        $('#window_result_dialog .popup_text').css({
                            'line-height': '25px',
                            padding: '50px',
                            height : '40px',
                            'text-align':'left'
                        });
                    }else{
                        alert('您最多可以选择8个标签，请先点击“√”删除已选择的标签，再添加标签。');
                    }
                }catch(e){}
                return ;
            }
            if(!this.welfaretab[click_job_id]){
                oldTagValue.push(click_job_id)
                jqWelfaretab.val(oldTagValue.join(","));
                this.welfaretab[click_job_id] = click_job_id;
                this.select_tag_option(jqContainerDom,false);
            }

        }
        jqContainerDom.toggleClass(this.selected_class)
    },
    //  添加对号选择标识
    select_tag_option: function(jqdom,isDel){
        var re = "<i></i>";
        if(isDel){
            var _html =  jqdom.html();
            _html = _html.replace(new RegExp(re,"g"),"");
            jqdom.html(_html);
        }else{
            jqdom.append(re);
        }
    }
});ZPIDC.ns("ZPIDC.postion");
/**
 * 初始化地区数据
 */
(function(clazz){
    ZPIDC.copy(clazz,{
        _CONST_LAST_POSTION : 0,
        _CONST_MESSAGE : {
            UPER_LIMIT : "职位发布地区总数已达上限",
            CONCAT_USEUP : "合同剩余总点数为0个",
            EMPTY_WARNING : "请选择要添加的发布城市",
            EMPTY_CONTRY_WARNING : "请选择要添加的发布国家"
        },
        _CONST_DIRECT : {'530':'北京','538':'上海','531': '天津','551':'重庆',"561":"香港","562":"澳门","563":"台湾省"},
        _CONST_WARD : [['561','香港'],['562','澳门'],['563','台湾省'],['480', '国外']],
        /**
         * 合同数据省、城市列表
         * {pro1id:{city1id:city1id},pro2id:{}}
         */
        _ConcatePostionData : {},
        showErrorMessage : function(errorMessage){
            if(errorMessage){
                $('#postion-error-info')
                    .text(errorMessage).show();
            }else{
                $('#postion-error-info')
                    .text('').hide();
            }
        },
        initConstTotalPostion : function(){
            var $positionPubPlace = $('#PositionPubPlace');
            var totalPoints = clazz._TotalPoints;
            var nowValue = $positionPubPlace.val();
            var nowValueLen = nowValue == "" ? 0 : nowValue.split("|").length;
            var last = (totalPoints == 0 || totalPoints > 35) ? 35 : totalPoints;
            clazz._CONST_LAST_POSTION = (last - nowValueLen <= 0 ? 0 : last - nowValueLen);
        },
        /**
         * 初始化合同数据对应的省、城市
         */
        initConcatePostionData : function(){
            var havePermission = $('#HavePermissionToPubPosition').val();
            var contractCitys = $('#ContractCityList').val();
            contractCitys = contractCitys == '' ? [] : contractCitys.split('|');
            //合同点数没有、没权限、合同没指定城市，三种情况下城市都对应全国
            if(clazz._TotalPoints < 1
                || havePermission.toLocaleLowerCase() != 'true'
                || contractCitys.length == 0
                || contractCitys[0] == '489'){
                factoryConcateData(clazz._ConcatePostionData);
            }else{
                //把省、城市都放入到相应的json里
                for(var step = 0,len = contractCitys.length;step < len;step++){
                    var _id = contractCitys[step];
                    factoryConcateData(clazz._ConcatePostionData,_id);
                }
            }
            //把合同数据按一定格式构造
            function factoryConcateData(postions,idCity){
                //预处理已选数据，并json格式
                var selectedData = {};
                var _selectedData = $('#window_publish_position').data('selectedCityData');
                if(_selectedData){
                    for(var step = 0,len = _selectedData.length;step < len;step++){
                        var cityID = _selectedData[step].split("@")[0];
                        if(cityID != ''){
                            selectedData[cityID] = cityID;
                        }
                    }
                }
                for(var key in CONST_ID_CITY){
                    var _idCity = idCity || key;
                    if(key == _idCity){
                        //合同里是国内省ID
                        if(CONST_ID_CITY[key][0] == "489"){
                            //存省
                            if(clazz._CONST_DIRECT[key]){
                                if(!selectedData[key]){
                                    postions[key] = {name : CONST_ID_CITY[key][1]};
                                }
                            }else{
                                if(!postions[key]){
                                    postions[key] = {name : CONST_ID_CITY[key][1]};
                                }
                                var flag = false;
                                //存省下面所有城市
                                for(var cityID in CONST_ID_CITY){
                                    if(CONST_ID_CITY[cityID][0] == key && !selectedData[cityID]){
                                        flag = true;
                                        postions[key][cityID] = cityID;
                                    }
                                }
                                if(!flag){
                                    delete postions[key];
                                }
                            }
                        //合同里是国内城市
                        }else if(CONST_ID_CITY[key][0] != 0){
                            var _proID = CONST_ID_CITY[key][0];
                            //把城市存入json
                            if(!selectedData[key]){
                                //把城市对应的省放入省json
                                if(!postions[_proID]){
                                    postions[_proID] = {name : CONST_ID_CITY[_proID][1]};
                                }
                                postions[_proID][key] = key;
                            }
                        //存国外
                        }else if(CONST_ID_CITY[key][0] == '0' && key != '480' && key != '489'){
                            var _proID = '480';
                            //把城市存入json
                            if(!selectedData[key]){
                                //把外国名称存入“国外”子对象json
                                if(!postions[_proID]){
                                    postions[_proID] = {name : '国外'};
                                }
                                postions[_proID][key] = key;
                            }
                        }
                    }
                }
            }
        },
        /**
         * 为合同数据添加城市
         * @param cityId
         */
        addConcatePostionDataByCityId : function(cityId){
            var postions = clazz._ConcatePostionData;
            var proId = CONST_ID_CITY[cityId][0];
            if(cityId > 480 && cityId <= 529 || cityId >= 913 && cityId <= 919){
                proId = '480';
            }
            if(clazz._CONST_DIRECT[cityId]){
                postions[cityId] = {name : CONST_ID_CITY[cityId][1]};
            }else{
                if(!postions[proId]){
                    postions[proId] = {name : CONST_ID_CITY[proId][1]};
                }
                postions[proId][cityId] = cityId;
            }
        },
        /**
         * 删除合同数据里的城市
         * @param cityId
         */
        delConcatePostionDataByCityId : function(cityId){
            var postions = clazz._ConcatePostionData;
            var city = CONST_ID_CITY[cityId];
            var proId = city[0];
            if(cityId > 480 && cityId <= 529 || cityId >= 913 && cityId <= 919){
                proId = '480';
            }
            if(clazz._CONST_DIRECT[cityId]){
                delete postions[cityId];
            }else if(postions[proId]){
                delete postions[proId][cityId];
                var len = 0;
                for(var key in postions[proId]){
                    if(key != 'name')len++;
                }
                if(!len){
                    delete postions[proId];
                }
            }

        },
        /**
         * @param tpl
         * @param data
         * @param isDel 是否是带删除的图标
         * @returns {}
         */
        getProvinceMapCity : function(tpl,data,isDel){
            var cityStr = [];
            var getHotCityName = function(cityID){
                var cityName = clazz._CONST_DIRECT[cityID];
                return cityName || '';
            };
            var getCityName = function(cityID){
                var hotCityName = getHotCityName(cityID);
                if(hotCityName != ''){
                    //直辖市
                    return hotCityName;
                }else if(cityID == '489'){
                    return '全国';
                }else{
                    var city = CONST_ID_CITY[cityID];
                    var belongID = city[0],cityName = city[1];
                    if(belongID != '0' && belongID != '489'){
                        var provinceName =  CONST_ID_CITY[belongID][1];
                        return provinceName+'-'+cityName;
                    }
                }
                if(cityID >= 480 && cityID <= 529 || cityID >= 913 && cityID <= 919){
                    return '国外-'+CONST_ID_CITY[cityID][1];
                }
            };
            var getAreaName = function(cityID,areaID){
                var areaName = ''
                var cityAreaObj = CONST_DISTRICT[cityID];
                if(cityAreaObj){
                    areaName = cityAreaObj[areaID];
                }
                return areaName;
            };
            return (function(){
                if(data.length > 0){
                    for(var step = 0,len = data.length;step < len;step++){
                        if(data[step] == ''){
                            continue;
                        }
                        var cityObj = data[step].split('@');
                        var cityName = getCityName(cityObj[0]);
                        var showText =  cityName;
                        if(cityObj[1] && cityObj[1] != ''){
                            showText += '-' + getAreaName(cityObj[0],cityObj[1]);
                        }
                        if(showText != ''){
                            cityStr.push(tpl.zformat(showText,data[step]));
                        }
                    }
                }
                var _cityStr = [];
                for(var step = 0,len = cityStr.length;step < len;step++){
                    if(cityStr[step].ztrim() != ''){
                        _cityStr.push(cityStr[step].ztrim());
                    }
                }
                return _cityStr.join(",");
            })();
        },
        /**
         * 组装页面城市列表数据
         */
        initPageCityData : function(){
            var totalPoints = $('#PublicPoints').val();
            totalPoints = totalPoints == '' ? 0 : totalPoints * 1;
            clazz._TotalPoints = totalPoints;
            var showTemplate = '{0}';
            var citys = $('[name="PositionPubPlace"]').val().split("|");
            var content = clazz.getProvinceMapCity(showTemplate,citys);
            var cityCfg =  $('#set_publish_position').parent();
            if(content != ''){
                content = '<p class="address"><span class="mr10">'+content.replace(/,/g,',&nbsp;')+'</span></p>';
                cityCfg.parent().find('.address').remove();
                cityCfg.before(content);
            }else{
                cityCfg.parent().find('.address').remove();
            }
            clazz.initPointsDetail();
            $("#set_publish_position").unbind('click').on('click',function(){
                ZPIDC.postion.initConstTotalPostion();
                var publishPosition = new ZPIDC.dialog({
                    title : '设置职位发布地点<span style="font-size: 14px;">（每次发布最多选择35个城市）</span>',
                    width : 590,
                    containerid : "window_publish_position" ,
                    isMask : true,
                    buttons: [{
                        text : '确认',
                        cls : 'rd_btn rd_btn_110 fwb mr20 __ga__newJob_cityconfirm_001',
                        callback : function(){
                            if(clazz.initAddButtonEvent() == false){
                                return false;
                            }
                            var selectedCitys = $('#temp_PositionPubPlace').val();
                            $('[name="PositionPubPlace"]').val(selectedCitys);
                            clazz.initPageCityData();
                            if (pageCheck) pageCheck.checkSpecifiedCtrl('PositionPubPlace');//验证控件
                        }
                    },{
                        text : '取消',
                        cls : 'rd_btn rd_btn_110 fwb mr20 __ga__newJob_citycancel_001',
                        callback : function(){
                            publishPosition.onclose();
                        }
                    }]
                });

                var publishPositionBody = Handlebars.compile($("#publish_position-template").html())();
                publishPosition.optionBody(publishPositionBody);
                clazz.initOnEvent();
                //添加监控 __ga__newJob_cityconfirm_001  __ga__newJob_citycancel_001
                try{
                    var scope = $('#window_publish_position');
                    ZP.analysis.elements_analysis(scope);
                }catch(e){}
            });
        },
        /**
         * 组装弹出框城市列表数据
         * @param ctx
         */
        initSetPostionCityData : function(ctx){
            $('#select_area').parent().hide().removeClass('shadow_bg_gray');
            var showTemplate = '<span style="font-size: 12px;">{0}<i class="re_i_close" del-cityid="{1}"></i></span>';
            var citys = $('[name="temp_PositionPubPlace"]').val().split("|");
            ctx.data('selectedCityData',citys);
            var content = clazz.getProvinceMapCity(showTemplate,citys,true,ctx);
            $('.del_adress',ctx).text('').append(content.replace(/,/g,'&nbsp;'));
            $('.re_i_close',ctx).on('click',function(){
                var delCityId = $(this).attr('del-cityid');
                clazz.delCity(ctx,delCityId);
            });
            clazz.initPointsDetail(true);
        },
        /**
         * 判断城市是否在合同隐藏域中
         * @param cityId
         */
        isInContractCityList : function(cityId){
            var ContractCityList = $('#ContractCityList').val();
            if(ContractCityList != '489'){
                ContractCityList = ContractCityList.split('|')
                for(var step = 0 ,len = ContractCityList.length; step < len;step++){
                    if(ContractCityList[step] == cityId || ContractCityList[step] == CONST_ID_CITY[cityId][0]){
                        return true;
                    }
                }
                return false;
            }else{
                return true;
            }
        },
        /**
         * 根据ID删除城市
         * @param ctx
         * @param delID
         * @param isDelAll
         */
        delCity : function(ctx,delID,isDelAll){
            var tempCitys = '';
            var tempPosition = $('[name="temp_PositionPubPlace"]',ctx);
            tempCitys = tempPosition.val();

            if(!isDelAll){
                if(tempCitys.indexOf('|') == -1){
                    var re = new RegExp(delID);
                    tempCitys = tempCitys.replace(re,'');
                }else{
                    var rel = new RegExp('^('+delID+'[|])');
                    var rem = new RegExp('[|]'+delID+'[|]');
                    var rer = new RegExp('([|]'+delID+')$');
                    tempCitys = tempCitys.replace(rel,'').replace(rem,'|').replace(rer,'');
                }
                if(clazz.isInContractCityList(delID.split("@")[0])){
                    clazz.addConcatePostionDataByCityId(delID.split("@")[0]);
                }
                if(clazz._CONST_LAST_POSTION < clazz._TotalPoints){
                    clazz._CONST_LAST_POSTION++;
                }
            }else{
                tempCitys = tempCitys.split('|');
                for(var step = 0,len = tempCitys.length;step < len;step++){
                    delID = tempCitys[step].split("@")[0];
                    if(delID != '' && clazz.isInContractCityList(delID)){
                        clazz.addConcatePostionDataByCityId(delID);
                    }
                    if(clazz._CONST_LAST_POSTION < clazz._TotalPoints){
                        clazz._CONST_LAST_POSTION++;
                    }
                }
                tempCitys = '';
            }
            tempPosition.val(tempCitys);
            clazz.initSetPostionCityData(ctx);
            clazz.showErrorMessage();
        },
        /**
         * 获取省、直辖市、国外数据
         * @returns {{}}
         */
        getProvenceData : function(){
            var data = [];
            for(var step = 0,len = CONST_PROVINCES.length;step < len;step++){
                var pro = CONST_PROVINCES[step];
                if(pro[1] == '489'){
                    data.push([pro[0],pro[2]]);
                }
            }
            data = CONST_DIRECT.concat(data);
            return data;
        },
        /**
         * 获取合同里包含的省、直辖市、国外数据
         * @returns {{}}
         */
        getConcatProvenceData : function(){
            var postions = clazz._ConcatePostionData;
            var data = [];
            for(var key in postions){
                var pro = postions[key];
                if(!clazz._CONST_DIRECT[key] && key != '480')
                    data.push([key,pro['name']]);

            }
            //组装直辖市
            for(var step = CONST_DIRECT.length - 1,len = CONST_DIRECT.length;step > -1;step--){
                if(postions[CONST_DIRECT[step][0]]){
                    data.unshift(CONST_DIRECT[step]);
                }
            }
            //组装行政区
            for(var step = 0,len = clazz._CONST_WARD.length;step < len;step++){
                if(postions[clazz._CONST_WARD[step][0]]){
                    data.push(clazz._CONST_WARD[step]);
                }
            }
            return data;
        },
        /**
         * 由省ID获取下面所有的城市ID
         * @param provinceId
         * @returns {*}
         */
        getCitysByProvinceId : function(provinceId){
            var citys = [];
            for(var key in CONST_ID_CITY){
                if(CONST_ID_CITY[key][0] == provinceId){
                    citys.push([key,CONST_ID_CITY[key][1]]);
                }
            }
            return citys;
        },
        /**
         * 由省ID获取下面所有的城市ID,只在合同里取数据
         * @param provinceId
         * @returns {*}
         */
        getConcateCitysByProvinceId : function(provinceId){
            var postions = clazz._ConcatePostionData;
            var citys = [];
            var _city = [];
            var pro = postions[provinceId];
            for(var key in pro){
                if(key != 'name'){
                    if(key == '512'){
                        _city = ['512','其他'];
                    }else{
                        citys.push([key,CONST_ID_CITY[key][1]]);
                    }
                }
            }
            citys = clazz.sortCity(citys);
            if(provinceId != '480'){
                if($('#ContractCityList').val().indexOf(provinceId) != -1 && citys.length != 0){
                    citys.unshift(['不限','不限']);
                }else{
                    var havePermission = $('#HavePermissionToPubPosition').val();
                    var contractCitys = $('#ContractCityList').val();
                    contractCitys = contractCitys == '' ? [] : contractCitys.split('|');
                    //合同点数没有、没权限、合同没指定城市，三种情况下城市都对应全国
                    if(clazz._TotalPoints < 1
                        || havePermission.toLocaleLowerCase() != 'true'
                        || contractCitys.length == 0
                        || contractCitys[0] == '489'){
                        citys.unshift(['不限','不限']);
                    }
                }
            }else if(provinceId == '480'){
                citys.push(_city);
            }
            return citys;
        },
        sortCity : function(citys){
            citys.sort(function compare(a,b){
               return a[0] - b[0];
            })
            return citys;
        },
        /**
         * 由城区ID获取城区名称
         * @param provinceId
         */
        getAerasByCityId : function(cityId){
            var aeras = [];
            var cityA = CONST_DISTRICT[cityId];
            for(var key in cityA){
                aeras.push([key,cityA[key]]);
            }
            if(aeras.length > 0){
                aeras.unshift(['不限','不限']);
            }
            return aeras;
        },
        /**
         * 操作扣点详细信息
         */
        initPointsDetail : function(isInitWindow){
            var totalPoints = clazz._TotalPoints;
            var canPublicTpl = '<i class="re_i_ok"></i>您已选择{0}个城市，将扣除{1}个点数，合同剩余总点数为{2}个';
            var canPublicNorightTpl = '<i class="re_i_ok"></i>您已选择{0}个城市，将扣除{1}个点数，请您尽快购买职位发布点数或开通发布权限';
            var canPublicNotEnghPointTpl = '<i class="re_i_ok"></i>您已选择{0}个城市，合同剩余总点数不足，请尽快购买发布点数或删除部分城市';
            var totalPublicTpl = '<i class="re_i_ok"></i>合同剩余总点数为{0}个';
            var uper35PublicTpl = '<i class="error_tips"></i>职位发布地区总数超过上限，请删除部分已选地点';
            var citys = $('#PositionPubPlace').val();
            var textDom = $('#set_publish_position').siblings().filter('.add_email_text');
            var ctx = $('#window_publish_position');
            if(isInitWindow){
                citys = $('#temp_PositionPubPlace').val();
                textDom = $('.add_email_text',ctx).filter('span');
                textDom.parent().find('a').remove();
            }
            citys = (citys == "" ? [] : citys.split('|'));
            textDom.text('');
            var citysLen = citys.length,totalPoints = totalPoints >= 35 ? 35 : totalPoints;
            var _havePermission = $('#HavePermissionToPubPosition').val().toLocaleLowerCase();
            var _totalPoints = clazz._TotalPoints;
            if(citysLen == 0){
                textDom.html(totalPublicTpl.zformat(_totalPoints));
            }else if(citysLen > 35){
                textDom.html(uper35PublicTpl);
                addClear(textDom);
            }else if(citysLen <= totalPoints){
                textDom.html(canPublicTpl.zformat(citysLen,citysLen,_totalPoints - citysLen));
                addClear(textDom);
            }else  if(_havePermission != 'true' || _totalPoints == 0){
                textDom.html(canPublicNorightTpl.zformat(citysLen,citysLen));
                addClear(textDom);
            }else if(totalPoints != 0 && citysLen > totalPoints){
                textDom.html(canPublicNotEnghPointTpl.zformat(citysLen));
                addClear(textDom);
            }
            function addClear(textDom){
                if(textDom.siblings().filter('a').length == 0){
                    var $clear = $('<a href="javascript:void(0);" style="font-size:12px;margin-left:15px;">清空</a>');
                    textDom.parent().append($clear);
                    $clear.on('click',function(){
                        clazz.delCity(ctx,'',true);
                        $('.del_adress',ctx).html('');
                        $clear.remove();
                    });
                }
            }
        },
        /**
         * 添加至已选函数
         */
        initAddButtonEvent : function(){
            var ctx = $('#window_publish_position');
            $('.pop_select',ctx).remove();
            clazz.showErrorMessage();
            var select_pro = $('#select_pro'),
                select_city = $('#select_city'),
                select_area = $('#select_area'),
                proID = select_pro.attr("select-id") || '',
                cityID = select_city.attr("select-id") || '',
                areaID = select_area.attr("select-id") || '';
            function selectorReset(){
                select_pro.attr('select-id',null).find('h3').text('省/直辖市');;
                select_city.attr('select-id',null).parent().unbind('click')
                    .addClass('shadow_bg_gray').find('h3').text('城市');
                select_area.attr('select-id','不限').parent().hide().unbind('click').find('h3').text('不限');
            };
            if(cityID != ''){
                var cityIDs = [cityID];
                if(cityID == '不限'){
                    cityIDs = [];
                    for(var key in clazz._ConcatePostionData[proID]){
                        if(key != 'name'){
                            cityIDs.push(key);
                        }
                    }
                }
                var tempPlace = $('#temp_PositionPubPlace');
                var selectedCityStr = tempPlace.val();
                for(var step = 0,len = cityIDs.length;step < len;step++){
                    if(clazz._CONST_LAST_POSTION <= 0){
                        if(clazz._TotalPoints > 35 || clazz._TotalPoints == 0){
                            clazz.showErrorMessage(clazz._CONST_MESSAGE.UPER_LIMIT);
                        }else{
                            clazz.showErrorMessage(clazz._CONST_MESSAGE.CONCAT_USEUP);
                        }
                        tempPlace.val(selectedCityStr);
                        clazz.initSetPostionCityData(ctx);
                        selectorReset();
                        return false;
                    }else{
                        if(clazz._CONST_LAST_POSTION > 0){
                            clazz._CONST_LAST_POSTION--;
                        }
                    }
                    var selectID = restr = cityIDs[step];
                    if(areaID != '' && areaID != '不限'){
                        restr += "@";
                        selectID += '@'+areaID;
                    }
                    var re = new RegExp(restr);
                    var rel = new RegExp('^('+restr+'[|])');
                    var rem = new RegExp('[|]'+restr+'[|]');
                    var rer = new RegExp('([|]'+restr+')$');
                    //重复判断
                    if(re.test(selectedCityStr) || rel.test(selectedCityStr) || rem.test(selectedCityStr) ||rer.test(selectedCityStr)){

                    }else{
                        if(selectedCityStr != ''){
                            selectedCityStr += '|';
                        }
                        selectedCityStr += selectID;
                        clazz.delConcatePostionDataByCityId(cityIDs[step]);
                    }
                }
                tempPlace.val(selectedCityStr);
                clazz.initSetPostionCityData(ctx);
                selectorReset();
            }else{
                if(proID == '480'){
                    clazz.showErrorMessage(clazz._CONST_MESSAGE.EMPTY_CONTRY_WARNING);
                }else{
                    clazz.showErrorMessage(clazz._CONST_MESSAGE.EMPTY_WARNING);
                }
            }
        },
        /**
         * 为地区选择设置默认的城市，默认城市来源于后端给出
         */
        setDefaultSeletorCity : function(){
            var seletedCitys = $("#PositionPubPlace").val();
            //默认城市，以@符号隔开，后半部分是城市ID，前半部分是上级ID
            var defaultCityDatas = $("#positionPubPlaceInitCityId").val().split('@');
            if(seletedCitys != '' || defaultCityDatas.length < 2) return ;
            //设置省默认值
            function setProValue(selectId,selectText){
                $("#select_pro").attr("select-id",selectId).attr("select-text",selectText).find('h3').text(selectText);;
                clazz.initCity();
            };
            //设置城市默认值
            function setCityValue(selectId,selectText){
                $("#select_city").attr("select-id",selectId).attr("select-text",selectText).find('h3').text(selectText);;
                clazz.initAera();
            };
            if(defaultCityDatas[0] == '489'){
                defaultCityDatas[0] = defaultCityDatas[1];
            }
            setProValue(defaultCityDatas[0],CONST_ID_CITY[defaultCityDatas[0]][1]);
            setCityValue(defaultCityDatas[1],CONST_ID_CITY[defaultCityDatas[1]][1]);
        },
        /**
         * 地区选择、修改初始化函数集合
         */
        initOnEvent : function(){
            var td = '<td width="90px" align="center"><a href="javascript:;" select-id="{0}">{1}</a></td>';
            var ctx = $('#window_publish_position');
            var getSelectTpl = function(tdTpl,datas){
                var trs = [],tr = [];
                var td = tdTpl;
                for(var step = 0,len = datas.length;step < len;step++){
                    var data = datas[step];
                    if(step != 0 && step%5 == 0 ){
                        trs.push('<tr>'+tr.join('')+'</tr>');
                        tr = [];
                    }
                    tr.push(td.zformat(data[0],data[1]));
                    if(step == datas.length -1){
                        trs.push('<tr>'+tr.join('')+'</tr>');
                    }
                }
                return trs.join("");
            };
            /**
             * 初始化table里所有的a标签事件
             * @param currentID
             * @param clickFun
             */
            var initOptionEvent = function(currentID,initNextFun){
                $('table td',ctx).on('click',function(){
                    var seletedDom = $(this).find('a');
                    var selectID = seletedDom.attr("select-id");
                    var selectText = seletedDom.text();
                    $('#'+currentID)
                       .attr("select-id",selectID)
                       .attr("select-text",selectText)
                       .find('h3').text(selectText);
                    $('.pop_select',ctx).remove();
                    if(initNextFun){
                        initNextFun();
                    }
                });
                $('#window_publish_position td').on('mouseover',function(){
                    $(this).find('a').css({color:'#fff'});
                    if(ZPIDC.isIE6){
                        $(this).css('background-color','#2C91D5');
                    }
                }).on('mouseout',function(){
                    $(this).find('a').css({color:'#315AAA'});
                    if(ZPIDC.isIE6){
                        $(this).css('background-color','#F6FBFF');
                    }
                });
            };
            /**
             * 根据生成好的tr、td模板填充table
             * @param tableID
             * @param tpl
             */
            var createTable = function(tpl,tableID){
                var $TableContainer = $('.publish_jobAddress_table',ctx);
                if($('#position_selector_'+(tableID || '')).length > 0){
                    $TableContainer.hide();
                    $TableContainer.children().remove();
                    return ;
                }
                var $table = $('<table width="449" border="0" class="pop_select" id="position_selector_'+(tableID || '')+'"></table>');
                $table.append(tpl);
                $TableContainer.children().remove();
                $TableContainer.append($table);
                $TableContainer.show();
                $(document).unbind('click').on('click',function(event){
                    var targetID = $(event.target).parent().attr('id');
                    if(targetID == 'select_'+tableID){
                        return ;
                    }
                    $TableContainer.hide();
                    $TableContainer.children().remove();
                });
            };
            /**
             * 点击省选择时，出现省选择框
             * 选择后，如果有城市选择，城市选择使能，并可选
             */
            var initProvence = function(){
                var proData = clazz.getConcatProvenceData();
                var tpl = getSelectTpl(td,proData);
                if(tpl != ''){
                    createTable(tpl,'pro');
                    initOptionEvent('select_pro',initCity);
                }
            };
            /**
             * 点击城市选择时，出现城市选择框,
             * 选择后，如果有区域选择，区域选择使能，并可选
             */
            var initCity = clazz.initCity = function(){
                var $selectPro = $("#select_pro");
                var selectedProID = $selectPro.attr("select-id");
                var $selectCity = $('#select_city');
                //如果是直辖市则直接给市选择器赋值
                if(clazz._CONST_DIRECT[selectedProID]){
                    var selectText = $selectPro.attr("select-text");
                    $selectCity.attr("select-id",selectedProID)
                        .attr("select-text",selectText)
                        .parent().unbind('click').removeClass('shadow_bg_gray')
                        .find('h3').text(selectText);
                    $('#select_area').parent().show();
                    initAera();
                }else{
                    if(selectedProID != '480'){
                        $selectCity.attr("select-id","不限")
                            .attr("select-text","不限")
                            .find('h3').text("不限");
                    }else{
                        $selectCity.attr("select-id","")
                            .attr("select-text","请选择国家")
                            .find('h3').text("请选择国家");
                    }
                    $('#select_area').parent().hide().unbind('click');
                    $selectCity.parent().removeClass('shadow_bg_gray')
                        .unbind('click').on('click',function(){
                            var cityData = clazz.getConcateCitysByProvinceId(selectedProID);
                            var tpl = getSelectTpl(td,cityData);
                            if(tpl != ''){
                                createTable(tpl,'city');
                                initOptionEvent('select_city',initAera);
                            }
                        });
                }
                $('#select_area')
                    .attr("select-id",'不限')
                    .attr("select-text",null)
                    .find('h3').text('不限');
            };
            /**
             * 点击区域选择时，出现区域选择框
             */
            var initAera = clazz.initAera = function(){
                var cityID = $("#select_city").attr("select-id");
                var cityData = clazz.getAerasByCityId(cityID);
                var jqSelectArea = $('#select_area');
                if(cityData.length > 0){
                    jqSelectArea.parent().show().unbind('click').on('click',function(){
                            var tpl = getSelectTpl(td,cityData);
                            if(tpl != ''){
                                createTable(tpl,'area');
                                initOptionEvent('select_area');
                            }
                    });
                }else{
                    jqSelectArea.parent().hide().unbind('click');
                }
                jqSelectArea.attr("select-id",'不限').find('h3').text('不限');
            };
            $('#select_pro').on('click',initProvence);
            $('.postion_add_adress',ctx).on('click',clazz.initAddButtonEvent);
            $('#temp_PositionPubPlace').val($('#PositionPubPlace').val());
            //设置已选数据
            clazz.initSetPostionCityData(ctx);
            //设置合同扣点数
            clazz.initConcatePostionData();
            //设置默认地区
            clazz.setDefaultSeletorCity();
        }
    });
})(ZPIDC.postion);
$(function(){
    ZPIDC.postion.initPageCityData();
});﻿ZPIDC.ns("ZPIDC.addJob");

/**
 * 职位新增、修改配置页面提交按钮事件初始化
 */
ZPIDC.addJob.initSubmmitFunction = function () {
    var positionForm = null;
    /**
     * 判断当前合同点数是否可以发布职位,
     * @param isButInit
     * @returns {boolean}
     */
    var checkContractor = function (isButInit) {
        var citys = $('#PositionPubPlace').val();
        var contractor = $('#PublicPoints').val();
        if (contractor == "") {
            contractor = 0;
        }
        if (isButInit && contractor > 0) {
            return true;
        } else if (isButInit) {
            return false;
        }
        if (citys != '') {
            citys = citys.split('|');
            if (contractor < citys.length) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    };
    /**
     * 判断当前人员是否有权限
     * @returns {boolean}
     */
    var checkAuthority = function () {
        var authority = $('#HavePermissionToPubPosition').val();
        if (authority == 'False') {
            return false;
        }
        return true;
    };

    //根据 错误提示控件Id 获得 展示控件Id
    var getViewableCtrlId = function (eorrctrlId) {
        var viewCtrlId = '';

        if (eorrctrlId.toLowerCase() == 'jobtypemain_error_msg') {
            viewCtrlId = 'jobTypeMain';
        }
        if (eorrctrlId.toLowerCase() == 'jobtypeminor_error_msg') {
            viewCtrlId = 'jobTypeMinor';
        }
        else if (eorrctrlId.toLowerCase() == 'jobdescription_error_msg') {
            viewCtrlId = 'Editor';
        }
        else if (eorrctrlId.toLowerCase() == 'positionpubplace_error_msg') {
            viewCtrlId = 'set_publish_position';
        }
        else {
            var t = eorrctrlId.replace('_error_msg', '');
            if ($("#" + t).length > 0) {
                viewCtrlId = t;
            }
        }

        return viewCtrlId;
    };

    var focus1Tb = function () {
        $('input[type=text]')[0].focus();
        $('input[type=text]')[0].blur();
    };

    //设置焦点至 展示控件
    var focusViewCtrlId = function (viewCtrlId) {
        var removeEorrBor = function () { $(this).removeClass('error_bor'); };
        if (viewCtrlId.toLowerCase() == 'jobtypemain') {
            focus1Tb();
            $('#buttonSelJobTypeMain').addClass('error_bor').one('click', removeEorrBor).focus();
            return;
        }
        if (viewCtrlId.toLowerCase() == 'jobtypeminor') {
            focus1Tb();
            $('#buttonSelJobTypeMinor').addClass('error_bor').one('click', removeEorrBor).focus();
            return;
        }
        if (viewCtrlId.toLowerCase() == 'editor') {
            focus1Tb();
            UE.getEditor('Editor').focus();
            $('#Editor').addClass('error_bor');
            //UE.getEditor('Editor').blur(function () { alert(1121);});
            return;
        }
        if (viewCtrlId.toLowerCase() == 'set_publish_position') {
            $('#set_publish_position').focus();
            return;
        }

        if (viewCtrlId.toLowerCase() == 'emaillist') {
            var $emailTemp = $('#emailTemp');
            if ($emailTemp.is(":hidden")) {
                var $applicationmethod = $('#applicationmethod_selector');
                $applicationmethod.focus();
                $applicationmethod.blur();
            }
            else {
                $emailTemp.addClass('error_bor').one('click', removeEorrBor).one('blur', removeEorrBor);
                $emailTemp.focus();
            }
            return;
        }

        if (viewCtrlId.toLowerCase() == 'systemhttp') {
            var $systemHttp = $('#systemHttp')
            $systemHttp.addClass('error_bor').one('click', removeEorrBor).one('blur', removeEorrBor);
            $systemHttp.focus();
            return;
        }
        var _$viewCtrlId = $("#" + viewCtrlId);
        if (_$viewCtrlId.is("input[type='text']")) {
            _$viewCtrlId.focus();
        } else {
            var _selectBox = $('.selectBox[bind_hidden="' + viewCtrlId + '"]');
            if (_selectBox.length > 0) {
                _selectBox.focus();
                _selectBox.addClass('error_bor');
                _selectBox.one('click', removeEorrBor);
                _selectBox.one('blur', removeEorrBor);
            }
        }
    };

    /**
     * 页面表单验证
     * @returns {boolean}
     */
    var checkPositionForm = function () {
        try {
            UE.getEditor('Editor').fireEvent('wordcount');//触发UE插件事件
        } catch (e) { }
        var flag = positionForm.validate();
        if (!flag) {
            var arrmsg = new Array(),msg = '',viewCtrlId = '';
            $.each($('.error_tips').filter('[id$="_error_msg"]'), function () {
                msg = $(this).text() || '';
                if (msg != '') viewCtrlId = getViewableCtrlId($(this).attr("id"));
                return msg == '';
            });
            //弹出框提示为****为必填项，红色提示为：****不能为空；所以在这里弹出框里对整体提示做替换
            msg = msg.replace(/(不能为空)$/,'为必填项');
            resultDialogFactory(null, msg, [{
                text: "返回修改",
                callback: function () {
                    if (viewCtrlId != '') focusViewCtrlId(viewCtrlId);
                }
            }]);
        }
        return flag
    };
    /**
     * 表单保存并发布
     */
    var submmit_pub = function () {
        ZPIDC.Mask.loadingMask('发布中,请稍后...');
        var flag = checkPositionForm();
        if (!flag) {
            ZPIDC.Mask.unLoadingMask();
            return false;
        }
        //校验权限和点数是否足够
        if (!checkAuthority()) {
            ZPIDC.Mask.unLoadingMask();
            resultDialogFactory(null, '您没有权限发布职位');
            return false;
        }
        if (!checkContractor()) {
            ZPIDC.Mask.unLoadingMask();
            resultDialogFactory(null, '您的合同点数不足');
            return false;
        }
        $("#btnAddClick").val("saveandpub");
        var $addvacancyForm = $("form[name=addvacancyForm]");
        var ajax_url = $addvacancyForm.attr('action');//"/Position/PositionAdd";  //表单目标
        var ajax_data = $addvacancyForm.serialize(); //表单数据
        $.ajax({
            type: "POST", //表单提交类型
            url: ajax_url, //表单提交目标
            data: ajax_data, //表单数据
            dataType: "json",
            success: function (msg) {
                var jsonmsg = msg;
                if (jsonmsg != null) {
                    if (jsonmsg.Code == 200 && jsonmsg.Data != null) {
                        //post到成功页
                        function routeToResult(){
                            var temp = document.createElement("form");
                            temp.action = "/Position/Result";
                            temp.method = "post";
                            temp.style.display = "none";
                            var opt = document.createElement("textarea");
                            opt.name = "result";
                            var datastr = JSON.stringify(jsonmsg.Data);
                            opt.value = datastr;
                            temp.appendChild(opt);
                            document.body.appendChild(temp);
                            temp.submit();
                        };
                        seajs.use('commJs/json2', function () {
                            routeToResult();
                        });
                    } else {
                        ZPIDC.Mask.unLoadingMask();
                        var message = jsonmsg.Messages + '【错误码：' + jsonmsg.Code + '】';
                        if (jsonmsg.Code == '2001') {
                            message = jsonmsg.Messages;
                        }
                        resultDialogFactory(null, message);
                    }
                } else {
                    ZPIDC.Mask.unLoadingMask();
                    resultDialogFactory(null, "请求失败");
                }
                /*var error ={   500 : "操作失败",1001 : "职位数据验证失败",1002 : "职位有效性验证失败",1003:"职位修改验证失败",1004:"职位修改验证失败",1005:"职位违规词验证失败",1050:"职位修改失败",1060:"职位发布失败",2001:"合同验证失败"}*/
            },
            error: function () {
                ZPIDC.Mask.unLoadingMask();
                resultDialogFactory('提示', '由于网络发生异常导致本次操作失败，请稍后重试！');
            }
        });
    };
    /**
     * 保存为未发布
     */
    var submmit_not_pub = function () {
        ZPIDC.Mask.loadingMask('保存中,请稍后...');
        var flag = checkPositionForm();
        if (!flag) {
            ZPIDC.Mask.unLoadingMask();
            return false;
        }

        $("#btnAddClick").val("saveasnotpub");
        var $addvacancyForm = $("form[name=addvacancyForm]");
        var ajax_url = $addvacancyForm.attr('action');  //表单目标

        var ajax_data = $addvacancyForm.serialize(); //表单数据
        $.ajax({
            type: "POST", //表单提交类型
            url: ajax_url, //表单提交目标
            data: ajax_data, //表单数据
            dataType: "json",
            success: function (msg) {
                ZPIDC.Mask.unLoadingMask();
                var json = msg;
                if (json != null) {
                    if (json.Code == 200) {
                        var result = function(msg,url){
                            resultDialogFactory('提示', msg, [{
                                text: "关闭"
                            }]);
                            setTimeout(function () {
                                window.location.href = url;
                            }, 1500);
                        };
                        if(json.Data && json.Data.JsResult!=null){
                            if(json.Data.JsResult.StatusCode==300){
                                json.Messages="该职位含有敏感词,需要智联客服诊断通过后，才能正式发布，请耐心等待。";
                                result(json.Messages,"http://rd2.zhaopin.com/s/vacainfo/PositionManage.asp?ok=2");
                            } else {
                                result(json.Messages,"http://rd2.zhaopin.com/s/vacainfo/PositionManage.asp");
                            }
                        }
                        else{
                            result(json.Messages,"http://rd2.zhaopin.com/s/vacainfo/PositionManage.asp");
                        }
                    } else {
                        resultDialogFactory(null, json.Messages);
                    }
                } else {
                    resultDialogFactory(null, "请求失败");
                }
            },
            error: function () {
                ZPIDC.Mask.unLoadingMask();
                resultDialogFactory('提示', '由于网络发生异常导致本次操作失败，请稍后重试！');
            }
        });
    };
    /**
     * 提示信息生成器
     * @param title
     * @param errorMessage
     * @param buttons
     * @returns {dialog}
     */
    var resultDialogFactory = function (title, errorMessage, buttons) {
        var dialog = new ZPIDC.dialog({
            title: title || '错误',
            width: 490,
            height: 237,
            containerid: "window_result_dialog",
            isMask: true,
            buttons: buttons || [{
                text: "返回修改"
            }]
        });
        var errorMessage = Handlebars.compile('<div class="popup_text">{0}</div>'.zformat(errorMessage))();
        dialog.optionBody(errorMessage);
        return dialog;
    };
    $('#save_and_pub_submit').unbind('click').on('click', submmit_pub);
    $('#save_not_pub_submit ,.__ga__newJob_save_002').unbind('click').on('click', submmit_not_pub);

    //初始化按钮显示，如果没有权限和点数，显示保存
    if (checkAuthority() && checkContractor(true)) {
        $('.__ga__newJob_save_001').parent().show();
        $('.__ga__newJob_save_002').parent().hide();
    } else {
        $('.__ga__newJob_save_001').parent().hide();
        $('.__ga__newJob_save_002').parent().show();
    }

    ///计算纯文本长度,1个英文的长度为1,1个汉字的长度为2
    var plainTextCount = function (contentTxt) {
        var con = $(contentTxt).text(); //获取纯文本
        var count = 0;
        for (var i = 0; i < con.length; i++) {
            var code = con.charCodeAt(i);
            if (code > 0 && code < 255) {
                count++;
            } else {
                count = count + 2;
            }
        }
        return count;
    };

    var positionCheck = {
        ///检查是否有性别歧视词语
        dontHaveSexismWords: function (str) {
            if (str != null && str.length > 0 && CONST_SENSITIVE_WORDS)
                for (var i = 0; i < CONST_SENSITIVE_WORDS.length; i++)
                    if (str.indexOf(CONST_SENSITIVE_WORDS[i]) > -1) return false;
            return true;
        },
        ///检查职位描述是否写得足够
        hadWriteJobDesc: function (str) {
            if (str && str.length > 0) {
                if ($(str).text() == "岗位职责：任职要求：") return false;
            }
            return true;
        },
        isJobDescContentNotLess: function (str) {
            if (str && str.length != 0 && plainTextCount(str) < 40) return false;//您输入的内容过于简单
            return true;
        },
        isJobDescContentNotMore: function (str) {
            if (str && str.length != 0 && plainTextCount(str) > 6000) return false;//您输入的文字不能超过6000个字符
            return true;
        },
        jobTypeAndSubJobTypeDontBeSame: function (str) {

            if ($('#jobTypeMinor').val() != "") {
                if ($('#jobTypeMain').val() == $('#jobTypeMinor').val() && $('#subJobTypeMain').val() == $('#subJobTypeMinor').val())
                    return false;
            }
            return true;
        },
        haveNoSelectMonthlyPay: function (str) {
            if (!str || str.ztrim() == '' || str == '-1') return false;
            return true;
        },
        validForwardEmailTemp: function (str) {
            if ($('#ApplicationMethod').val() == '2') {
                if (str && str != '') {
                    if (!ZPIDC.ValidateUtil.isEmail(str)){
                        return false;
                    }else{
                        $('#btnEmailTempAdd').click();
                    }
                }
            }
            return true;
        },
        isNotEmptyForwardEmailList: function (str) {
            if ($('#ApplicationMethod').val() == '2') {
                if (!str || str.ztrim() == '') return false;
            }
            return true;
        },
        validForwardEmailList: function (str) {
            if ($('#ApplicationMethod').val() == '2') {
                if (!str || str == '') {
                    setTimeout(function(){
                        $('#emailList_error_msg').addClass('right_tips').html('<i class="re_i_ok"></i>您还可以添加5个邮箱');
                    },10);
                    return true;
                }
                var emails = str.split(',');
                if (emails.length == 0) return false;
                for (var i = 0; i < emails.length; i++)
                    if (!ZPIDC.ValidateUtil.isEmail(emails[i])) return false;
            }
            return true;
        },
        isForwardEmailListNotMore: function (str) {
            if ($('#ApplicationMethod').val() == '2') {
                if (!str || str == '') {
                    setTimeout(
                        function(){
                            $('#emailList_error_msg').addClass('right_tips').html('<i class="re_i_ok"></i>您还可以添加5个邮箱');
                        },10);
                    return true;
                }
                if (str && str > '' && str.split(',').length > 5) return false;
            }
            return true;
        },
        isNotEmptyESUrl: function (str) {
            if ($('#ApplicationMethod').val() == '4') {
                if (!str || str.ztrim() == '') return false;
            }
            return true;
        },
        validESUrl: function (str) {
            if ($('#ApplicationMethod').val() == '4') {
                return ZPValidate.check.isUrl(str);
            }
            return true;
        },
        isNotEmptyPubPlace:function(str){
            var $pointMsg = $('#set_publish_position').siblings().filter('.add_email_text');
            if (str.ztrim() == '') {
                $pointMsg.hide();
                return false;
            }
            $pointMsg.show();
            return true;
        },
        uper35PubPlace:function(str){
            if($('#Status').val() == '3'){
                return true;
            }
            var $pointMsg = $('#set_publish_position').siblings().filter('.add_email_text');
            var citys = (str == "" ? [] : str.split('|'));
            if (citys.length > 35) {
                $pointMsg.hide();
                return false;
            }
            $pointMsg.show();
            return true;
        },
        rangeTitleName : function(str){
            if(str.zrealLength() > 60){
                return false;
            }else{
                return true;
            }
        }
    };
    //验证指定的控件
    this.checkSpecifiedCtrl = function (ctrlId) {
        if (positionForm) positionForm.valiedateSpecifiedCtrl(ctrlId);
    };

    this.checkForm = function () {
        return checkPositionForm();
    };

    $(function () {

        ZPValidate.addRule("dontHaveSexismWords", positionCheck.dontHaveSexismWords, true);
        ZPValidate.addRule("rangeTitleName", positionCheck.rangeTitleName, true);
        ZPValidate.addRule("hadWriteJobDesc", positionCheck.hadWriteJobDesc, true);
        ZPValidate.addRule("isJobDescContentNotLess", positionCheck.isJobDescContentNotLess, true);
        ZPValidate.addRule("isJobDescContentNotMore", positionCheck.isJobDescContentNotMore, true);
        ZPValidate.addRule("jobTypeAndSubJobTypeDontBeSame", positionCheck.jobTypeAndSubJobTypeDontBeSame, true);
        ZPValidate.addRule("haveNoSelectMonthlyPay", positionCheck.haveNoSelectMonthlyPay, true);
        ZPValidate.addRule("validForwardEmailTemp", positionCheck.validForwardEmailTemp, true);
        ZPValidate.addRule("isNotEmptyForwardEmailList", positionCheck.isNotEmptyForwardEmailList, true);
        ZPValidate.addRule("validForwardEmailList", positionCheck.validForwardEmailList, true);
        ZPValidate.addRule("isForwardEmailListNotMore", positionCheck.isForwardEmailListNotMore, true);
        ZPValidate.addRule("isNotEmptyESUrl", positionCheck.isNotEmptyESUrl, true);
        ZPValidate.addRule("validESUrl", positionCheck.validESUrl, true);
        ZPValidate.addRule("isNotEmptyPubPlace", positionCheck.isNotEmptyPubPlace, true);
        ZPValidate.addRule("uper35PubPlace", positionCheck.uper35PubPlace, true);


        positionForm = new ZPValidate();
        positionForm.info.ok = "right_tips";
        positionForm.info.error = "error_tips";
        positionForm.verifier.ok = "";
        positionForm.verifier.error = "error_bor";
        positionForm.focusCls = "focus_bor";

        positionForm.add({
            id: "JobTitle", msgid: "JobTitle_error_msg",
            rule: {
                datatype: "isNotEmpty,rangeTitleName,dontHaveSexismWords",
                isNotEmpty: "职位名称不能为空",
                rangeTitleName : '职位名称长度不能超过30个汉字、60个英文字符',
                dontHaveSexismWords: "职位名称：请不要使用性别歧视词语"
            }
        });
        positionForm.add({
            id: "jobTypeMain", msgid: "JobTypeMain_error_msg",
            rule: {
                datatype: "isNotEmpty",
                isNotEmpty: "职位类别不能为空"
            }
        });
        positionForm.add({
            id: "jobTypeMinor", msgid: "JobTypeMinor_error_msg",
            rule: {
                datatype: "jobTypeAndSubJobTypeDontBeSame",
                jobTypeAndSubJobTypeDontBeSame: "首要职位类别与次要职位类别不可重复"
            }
        });
        positionForm.add({
            id: "Quantity", msgid: "Quantity_error_msg",
            rule: {
                datatype: "isNotEmpty,range:1|999",
                isNotEmpty: "招聘人数不能为空",
                range: "请填入1-999内的数字"
            }
        });
        positionForm.add({
            id: "MonthlyPay", msgid: "MonthlyPay_error_msg",
            rule: {
                datatype: "haveNoSelectMonthlyPay",
                haveNoSelectMonthlyPay: "职位月薪不能为空"
            }
        });
        positionForm.add({
            id: "JobDescription", msgid: "JobDescription_error_msg",
            rule: {
                datatype: "isNotEmpty,hadWriteJobDesc,isJobDescContentNotLess,isJobDescContentNotMore,dontHaveSexismWords",
                isNotEmpty: "职位描述不能为空",
                hadWriteJobDesc: "职位描述：您输入的内容过于简单",
                isJobDescContentNotLess: "职位描述：您输入的内容过于简单",
                isJobDescContentNotMore: "职位描述：您输入的文字不能超过6000个字符",
                dontHaveSexismWords: "职位描述：请不要使用性别歧视词语"
            }
        });
        positionForm.add({
            id: "WorkAddress", msgid: "WorkAddress_error_msg",
            rule: {
                datatype: "isNotEmpty,dontHaveSexismWords",
                isNotEmpty: "请填写工作地址",
                dontHaveSexismWords: "工作地址：请不要使用性别歧视词语"
            }
        });
        positionForm.add({
            id: "PositionPubPlace", msgid: "PositionPubPlace_error_msg",
            rule: {
                datatype: "isNotEmptyPubPlace,uper35PubPlace",
                isNotEmptyPubPlace: "请选择职位发布地点",
                uper35PubPlace:'职位发布地区总数超过上限，请删除部分已选地点'
            }
        });

        positionForm.add({
            id: "emailTemp", msgid: "emailTemp_error_msg",
            blur: false,
            rule: {
                datatype: "validForwardEmailTemp",
                validForwardEmailTemp: "输入邮箱格式不正确"
            }
        });

        positionForm.add({
            id: "EmailList", msgid: "emailList_error_msg",
            rule: {
                datatype: "validForwardEmailList,isForwardEmailListNotMore",
                validForwardEmailList: "您已经添加的转发邮箱中存在格式错误",
                isForwardEmailListNotMore: "您最多可以添加5个邮箱"
            }
        });
        positionForm.add({
            id: "systemHttp", msgid: "systemHttp_error_msg",
            rule: {
                datatype: "isNotEmptyESUrl,validESUrl",
                isNotEmptyESUrl: "企业网址不能为空",
                validESUrl: "您输入的企业网址格式不正确"
            }
        });

    });
};

var pageCheck = null;
$(function () {
    pageCheck = new ZPIDC.addJob.initSubmmitFunction();
});

function UEditor_onTextChange() {
    $("#JobDescription").val(getContent());
    //验证控件
    if (pageCheck) pageCheck.checkSpecifiedCtrl('JobDescription');
    $('#Editor').removeClass('error_bor');
};
﻿ZPIDC.ns("ZPIDC.addJob");

function DontUsePositionTemplate() {
    location.replace(location.href);
};
function ViewSexismWords() {
    var viewPop = new ZPIDC.dialog({
        title: '职位性别歧视词语<b class="sexism_b">（这些词语强烈建议不要出现在职位信息中）',
        width: 592,
        isMask: true,
        buttons: [{
            text: '关闭',
            callback: function () {
                viewPop.onclose();
            }
        }]
    });
    $.ajax({
        url: '/Position/SexismWords',
        success: function (htmlSegment) {
            viewPop.optionBody(htmlSegment);
        }
    });
};

//查看合同
function ViewPoints() {
    var contracts = new ZPIDC.dialog({
        containerid : 'window_contract_points',
        title: '您可以使用以下合同点数发布职位',
        width: 590,
        height : 346,
        isMask: true,
        buttons: [{
            text: '确认',
            callback: function () {
                contracts.onclose();
            }
        }]
    });
    $.ajax({
        url: '/Position/ContractDetail',
        success: function (htmlSegment) {
            contracts.optionBody(htmlSegment);
            $.ajax({
                url: '/Position/GetContractLeftPoints',
                success: function (data) {
                    for (var i = 0; i < data.length; i++) {
                        $("#ulContracts").append('<li><span class="span128 fwb">' + data[i].conId
                            + '</span><span class="span200">' + data[i].area + '</span><span class="span124 fwb">' +
                            data[i].endT + '</span><span class="span94 fwb">' + data[i].leftP + '</span></li>');
                    }
                }
            });
        }
    });
};

//高级设置
function AdvancedSetting() {
    var advancedSetting = new ZPIDC.dialog({
        containerid : 'window_advance_setting',
        title: '高级发布设置',
        width: 590,
        height: 257,
        isMask: true,
        buttons: [{
            text: '确定',
            callback: function () {
                //窗口控件值设置到隐藏域
                $("#hidJobNo").val($("#advancedJobNo").val());
                $("#hidSeqNumber").val($("#advancedJobSort").val());
                //if ($("#spanIsPub").hasClass('checkbox_checked')) {
                //    $("#hidIsCommonPosition").val("true");
                //} else {
                //    $("#hidIsCommonPosition").val("false");
                //}
                advancedSetting.onclose();
            }
        }, {
            text: '取消',
            callback: function () {
                advancedSetting.onclose();
            }
        }]
    });
    $.ajax({
        url: '/Position/AdvancedSetting',
        success: function (htmlSegment) {
            advancedSetting.optionBody(htmlSegment);
            ZPIDC.PlaceHolder($('#window_advance_setting'));
            //隐藏域值设置到窗口
            $("#advancedJobNo").val($("#hidJobNo").val());
            $("#advancedJobSort").keyup(function () {
                var me = this;
                me.value = me.value.replace(/^0/g, '').replace(/\D/g, '');
            }).attr('maxLength','4').val($("#hidSeqNumber").val());
        }
    });
};

//职位预览
function btnpreview() {
    ZPIDC.Mask.loadingMask('处理中,请稍后...');
    if (pageCheck) if (!pageCheck.checkForm()){
        ZPIDC.Mask.unLoadingMask();
        return;
    }
    $("#btnAddClick").val("preview");
    var ajax_url = "/Position/PositionPreview"; //表单目标 
    var ajax_data = $("form").serialize(); //表单数据 
    $.ajax({
        type: "POST",
        url: ajax_url,
        data: ajax_data,
        success: function (msg) {
            ZPIDC.Mask.unLoadingMask();
            try{
            var windowconfig = windowConfig(1030, 900);
            var pop = window.open('', "_blank", windowconfig);
            pop.document.open('text/html', 'replace');
            pop.opener = null; // 防止代码对页面修改
            pop.document.write(msg);
            pop.document.close();

            }catch(e){}
        }
    });
    //return false;
};
function windowConfig(w, h) {

    var intTop = 0;
    var intLeft = 0;
    var winWidth = window.screen.availWidth - 12;
    var winHeight = window.screen.availHeight - 50;
    var scrollNorY = 'no';
    if (parseInt(h) == 8888) {
        //如果高度为8888,那么全屏显示
        w = window.screen.availWidth - 12;
        h = window.screen.availHeight - 50;
    }
    else { //从中间呈现

        intTop = (window.screen.availHeight - parseInt(h)) / 2;
        intLeft = (window.screen.availWidth - parseInt(w)) / 2;
        if (intTop < 30) intTop = 0;
        if (intLeft < 30) intLeft = 0;
    }
    if (w > winWidth) {
        w = winWidth;
        scrollNorY = 'yes';
    }
    if (h > 699) scrollNorY = 'yes';
    if (h > winHeight) {
        if (h == 5555) scrollNorY = 'no';
        else scrollNorY = 'yes';
        h = winHeight;
    }
    var windowconfig = "status=no,scrollbars=" + scrollNorY + ",top=" + intTop + ",left=" + intLeft + ",resizable=0,width=" + w + ",height=" + h;
    return windowconfig;
};

/**
*初始化模板下拉框
*/
ZPIDC.addJob.initJobTemplateSelector = function () {
    $(".select_txt .txt", $("#template_selector")).click(function () {
        var list = $("#template_selector").data('list');
        var loadOption = function (data) {
            var newdata = [];
            if (data instanceof Array) {
                for (var step = 0, len = data.length; step < len; step++) {
                    var templateNumber = data[step].PositionTemplateNumber;
                    var templateName = data[step].TemplateName;
                    var x = [templateNumber, templateName];
                    newdata.push(x);
                }
            } 
            var templateSelector = {
                'selectID': 'template_selector',
                'defOption': '',
                'optionData': newdata
            }
            if (newdata.length == 0) {
                $("#template_selector .select_txt h3").html("您还没有设置职位模板");
            }else{
                ZPIDC.addJob.InitSelector(templateSelector);

                $(".select", $("#template_selector")).show();
                $("#template_selector").attr("loaded", "loaded");
                if (newdata.length != 0) {
                    var ie6 = !-[1, ] && !window.XMLHttpRequest;
                    if (ie6) {
                        $(".select a", $("#template_selector")).each(function () {
                            var url = "/Position/ChoosePositionTemplate?templateId=" + ($(this).attr("def-value") || '');
                            $(this).attr('href', url);
                            $(this).attr('target', '_self');
                        });
                    }
                    else {
                        $(".select a", $("#template_selector")).click(function () {
                            var url = "/Position/ChoosePositionTemplate?templateId=" + ($(this).attr("def-value") || '');
                            window.location.href = url;
                        });//end-选项点击事件
                    }
                }
            }
        }
        if (!list) {
            var simpleListUrl = "/Position/Template/SimpleList?t="+(+new Date());
            $.ajax({
                url: simpleListUrl,
                data: null,
                dataType: "json",
                success: function (response) {
                    if (response) {
                        loadOption(response);
                        $("#template_selector").data("list", response);
                    } //end-load
                }
            });
        } else {
            loadOption(list);
        }
    });
};
ZPIDC.addJob.FilterApplicationMethodData = function () {
    var data = {};
    var reseve = CONST_REQUIRE_APPLICATIONMETHODLIST;
    var optionsLists = $("#ApplicationMethodOptionsList").val();
    if (optionsLists != '') {
        var arr = optionsLists.split(',');
        for (var step = 0, len = arr.length; step < len; step++) {
            if (reseve[arr[step]]) {
                data[arr[step]] = reseve[arr[step]];
            }
        }
        return data;
    } else {
        return reseve;
    }
};
function ViewSexismWords() {
    var viewPop = new ZPIDC.dialog({
        title: '职位性别歧视词语<b class="sexism_b">（这些词语强烈建议不要出现在职位信息中）',
        width: 592,
        isMask: true,
        buttons: [{
            text: '关闭',
            callback: function () {
                viewPop.onclose();
            }
        }]
    });
    $.ajax({
        url: '/Position/SexismWords',
        success: function (htmlSegment) {
            viewPop.optionBody(htmlSegment);
        }
    });
};
/**
 * 打开窗口后，初始化起始坐标
 * @constructor
 */
ZPIDC.addJob.DimWorkAddressCoordinate = function () {
    var $workAddress = $("#WorkAddress");
    if ($workAddress.val().length == 0) {
        var dialog = new ZPIDC.dialog({
            title: '错误',
            width: 490,
            height: 237,
            containerid: "window_result_dialog",
            isMask: true,
            buttons: [{
                text: "返回修改"
            }]
        });
        var errorMessage = Handlebars.compile('<div class="popup_text">{0}</div>'.zformat('请先填写工作地址'))();
        dialog.optionBody(errorMessage);
        return;
    }
    var $workAddressCoordinate = ($("#WorkAddressCoordinate").val() || "").split(',');
    if ($workAddressCoordinate.length != 2) return;
    var lat = $workAddressCoordinate[0];//纬度
    var lon = $workAddressCoordinate[1];//经度
    var pX =lat;//纬度
    var pY =lon;//经度
    var workAddressMap = new ZPIDC.dialog({
        containerid: 'window_sign_location',
        title: '标注地理位置',
        width: 548,
        height: 520,
        isMask: true,
        buttons: [{
            text: '保存',
            callback: function () {
                window.frames['window_sign_location_iframe'].fnGet();
                var latNew = parseFloat($("[name=positionX]", window.frames['window_sign_location_iframe'].document).val());
                var lonNew = parseFloat($("[name=positionY]", window.frames['window_sign_location_iframe'].document).val());
                $("#WorkAddressCoordinate").val(latNew + "," + lonNew);
                workAddressMap.onclose();
            }
        }]
    });
    var workMapUrl = '/Position/WorkAddressMap' + "?lat=" + lat + "&lon=" + lon + "&workAddress=" + escape($workAddress.val())+"&companyAddress="+escape($('#CompanyAddress').val());
    if(!ZPIDC.isIE6){
		workAddressMap.optionBody('<iframe id="window_sign_location_iframe"   name="window_sign_location_iframe" frameborder="0" hspace="0" scrolling="no" src="' + workMapUrl + '" width="548" height="420"></iframe>');
		if(ZPIDC.isIE7){
			$('#window_sign_location #popup_body').css({'height':'auto'});
		}
	}else{
		var iframe = document.createElement('iframe');
		iframe.id = "window_sign_location_iframe";
		iframe.name="window_sign_location_iframe";
		iframe.frameborder="0";
		iframe.hspace="0" ;
		iframe.scrolling="no";
		iframe.width="548";
		iframe.height="420";
		workAddressMap.optionBody(iframe);		
		iframe.onreadystatechange=function(){		   
			  if(iframe.readyState == "complete"){			  
				  setTimeout(function(){				
					var flag = parseFloat($("[name=positionX]", window.frames['window_sign_location_iframe'].document).val());					
					if(isNaN(flag)){	
						getUrl();					 
					}			 			 
				  },50);				
			  }				
		 };		
		function getUrl(){		 
			setTimeout(function(){$('#window_sign_location_iframe').attr('src',workMapUrl+"&rnd="+(new Date()).toUTCString());}, 100); 
		}
		getUrl();
	}	
};
$(function () {
    try {
        try{
            seajs.use('http://img01.zhaopin.cn/2014/rd2/js/jobAdd/initUeEditor');
        } catch (e) {}

        ZPIDC.addJob.initJobTypeShowText();
        ZPIDC.addJob.initJobTypeEvent();

        ZPIDC.addJob.InitCheckBox();
        ZPIDC.addJob.InitSquareRadio();

        //begin:InitSelector
        var jobSelectorDatas = [{
            'selectID': 'experience_selector', //工作经验
            'defOption': '<a def-value="-1" href="javascript:void(0);">经验不限</a>',
            'optionData': CONST_REQUIRE_EXPERIENCE
        },
        {
            'selectID': 'education_selector', //教育水平
            'defOption': '<a def-value="-1" href="javascript:void(0);">学历不限</a>',
            'optionData': CONST_REQUIRE_DEGREE
        }, {
            'selectID': 'salary_selector', //职位月薪
            'defOption': '',
            'optionCallback': function(){
                 $('#MonthlyPay').blur();
            },
            'optionData': CONST_REQUIRE_SALARY
        }, {
            'selectID': 'dept_selector', //部门
            'defOption': '',
            'optionData': REQUIRE_DEPTS
        }, {
            'selectID': 'positionapplyreply_selector', //职位申请回复
            'defOption': '',
            'optionData': CONST_REQUIRE_POSITIONAPPLYREPLY
        }, {
            'selectID': 'applicationmethod_selector', //简历接收方式
                'defOption': '',
                'optionCallback': ZPIDC.addJob.resumeReceiveMethodChange,
                'optionData': ZPIDC.addJob.FilterApplicationMethodData()
        }];
        for (var step = 0, len = jobSelectorDatas.length; step < len; step++) {
            ZPIDC.addJob.InitSelector(jobSelectorDatas[step]);
        }
        //end:InitSelector
        //init Choose Template
        ZPIDC.addJob.initJobTemplateSelector();

        $('#Quantity').keyup(function () {
            var me = this;
            me.value = me.value.replace(/^0/g, '').replace(/\D/g, '');
        });

        //init tags show
        $(".welfare-tab-box").html(job_tags_factory.create_tags_dom(true) || '');

        //init position coordinate
        $('#position_coordinate_setting').on('click',function(){
            ZPIDC.addJob.DimWorkAddressCoordinate();
        });

        //init Time Selector
        var $dateEnd = $("#DateEnd");
        if (!$("#DateEnd:hidden").length && $dateEnd.attr("textOnly") != "true") {
            ZPIDC.addJob.initTimeSelector($dateEnd.attr("maxdate"));
            $dateEnd.siblings().filter('span').on('click',function(){
                try{ZP.analysis.init_monitor_analy(this,'newJob','offdate','001');}catch(e){}
            });
            if(ZPIDC.isIE6){
                $dateEnd.parent().filter('.parent').css('position','absolute');
            }
            $dateEnd.parent().siblings('span').on('click',function(){
                $dateEnd[0].focus();
            });
            if(ZPIDC.isIE7){
                setTimeout(function(){
                    $dateEnd.parent().siblings('span').css('z-index',"1");
                },500);
            }
        }
        //init filter showText
        $('#resume_filter_setting').on('click',function(){
            seajs.use('http://img01.zhaopin.cn/2014/rd2/js/jobAdd/initFilterDailog', function () {
                ZPIDC.addJob.SetResumeFilter();
            });
        });
        ZPIDC.addJob.initFilterValue();
    } catch (e) {}
});/*!************The current page JS file list:
images.zhaopin.com\2014\common\js\widgets\sea.cfg.js
images.zhaopin.com\2014\rd2\js\time.js
images.zhaopin.com\2014\rd2\js\jobAdd\initJobTypeSetting.js
images.zhaopin.com\2014\rd2\js\jobAdd\initEmailSetting.js
images.zhaopin.com\2014\rd2\js\jobAdd\initTipAutoComplete.js
images.zhaopin.com\2014\rd2\js\jobAdd\initFilterValue.js
images.zhaopin.com\2012\js\jobs\job-tags-factory.js
images.zhaopin.com\2014\rd2\js\jobAdd\initPublishPosition.js
images.zhaopin.com\2014\rd2\js\jobAdd\initAddJobSubmit.js
images.zhaopin.com\2014\rd2\js\jobAdd\initPositionPage.js
***********!*/
ZPIDC.ns("ZPIDC.addJob");
ZPIDC.addJob.InitSquareRadio = function(cfg){
    var def = {
        containerCheckedCls : 'dh_current',
        containerUnCheckedCls : 'cur'
    };
    ZPIDC.copy(def,cfg);
    var $tabDh = $(".tab_dh");
    $("label",$tabDh).click(function () {
        var $this = $(this);
        $this.find('span').addClass(def.containerCheckedCls);
        $this.siblings().find('span').removeClass(def.containerCheckedCls);
        $('#'+$this.attr('bind_hidden'))[0].click();
    }).hover(
        function(){
            $(this).addClass(def.containerUnCheckedCls);
        },
        function(){
            if($(this).hasClass(def.containerCheckedCls)){
                return false;
            }else{
                $(this).removeClass(def.containerUnCheckedCls);
            }
        }
    );
    $.each($('.hidden',$tabDh).filter('input'),function(){
        var id = this.id;
        if($(this).attr('checked') == 'checked'){
            $('[bind_hidden="'+id+'"] span').addClass(def.containerCheckedCls);
        }
    });
};
ZPIDC.addJob.InitRadio = function(cfg){
    var def = {
        radioContainerCls : 'radio_group_container',
        radioCls : 'jqTransformRadio',
        radioCheckedCls : 'jqTransformChecked'
    };
    ZPIDC.copy(def,cfg);
    $radioGroupContainer = $('.'+def.radioContainerCls);
    $.each($radioGroupContainer,function(){
        var $that = $(this);
        $that.find('.'+def.radioCls+',label').on('click',function(){
            var $this = $(this);
            var attrBindHidden = $this.attr('bind_hidden');
            var $radio = $this.siblings().filter('[type="radio"]')
                .filter('[name="'+attrBindHidden+'"]');
            if($radio[0].checked == true){
                return ;
            }else{
                $that.find('.'+def.radioCls).removeClass(def.radioCheckedCls);
                $radio[0].click();
                $radio.siblings().filter('.'+def.radioCls).addClass(def.radioCheckedCls);
            }
        });
    });
};
/**
 * 初始化复选框
 * @constructor
 */
ZPIDC.addJob.InitCheckBox = function(cfg){
    var def = {
        boxCheckedCls : 'checkbox_checked',
        boxCls : 'checkbox'
    };
    ZPIDC.copy(def,cfg);
    var jqCheckBox = $('.'+def.boxCls).filter('[bind_hidden!=""]');
    jqCheckBox.on('click',function(){
        var jqDom = $(this);
        if(jqDom.attr('readonly')){
            return true;
        }
        var bindDom = $('[name='+jqDom.attr('bind_hidden')+']');
        if(jqDom.hasClass(def.boxCheckedCls)){
            jqDom.removeClass(def.boxCheckedCls);
            bindDom[0].checked = false;
            bindDom.val(false);
        }else{
            jqDom.addClass(def.boxCheckedCls);
            bindDom[0].checked = true;
            bindDom.val(true);
        }
    });
    $.each(jqCheckBox,function(){
        var jqThis = $(this);
        var bindName = jqThis.attr('bind_hidden');
        var bindVal = $('[name='+bindName+']').val();
        if(bindVal.toLocaleLowerCase() == 'true'){
            jqThis.addClass(def.boxCheckedCls);
        }
    });
};
/**
 * 下拉框总体初始化，得到option并附上
 * @constructor
 */
ZPIDC.addJob.InitSelector = function(cfg){
    var me = new Object();
    me.optionData = null;
    me.selectID = '';
    ZPIDC.copy(me,cfg);
    me.afterInit = function(){
        var ctx = $('#'+me.selectID);
        var jqDoma = $('.select a',ctx);
        var hideDom = $('[name="'+me.hideInputName+'"]');
        if(hideDom.val() != ''){
            var selectTxt = jqDoma.filter('[def-value='+hideDom.val()+']').text();
            ctx.find('h3').css({color:'#333'}).text(selectTxt);
        }
        me.addOptionEvent();
    };
    me.addOptionEvent = function(){
        var ctx = $('#'+me.selectID);
        var jqDoma = $('.select a',ctx);
        var hideDom = $('[name="'+me.hideInputName+'"]');
        var enterflag=true;
        $('.select_txt',ctx).on('click',function(){
            if(ctx.find('.select:hidden').length){
                if(jqDoma.length > 0){
                    ctx.find('.select').show();
                }
            }else{
                ctx.find('.select').hide();
            }
        });
        ctx.filter('.selectBox').on('blur',function(){
            if(enterflag){
                $(this).children('.select').hide();
            }
        });
        $('.select',ctx).hover(function(){
            enterflag=false
        },function(){
            enterflag=true
        });
        jqDoma.on('click',function(){
            var _text = $(this).text();
            $(this).parent().hide();
            ctx.find('h3').css({color:'#333'}).text(_text).attr('title',_text);
            hideDom.val($(this).attr('def-value'));
            if(typeof me.optionCallback == 'function'){
                me.optionCallback(this);
            }
        });
    };
    me.createTpl = function(tpls,val,text){
        var tpl = '<a def-value="{0}" href="javascript:void(0);" title="{1}">{1}</a>';
        tpls.push(tpl.zformat(val,text));
    };
    me.createOptions = function(){
        var data = me.optionData;
        var tpls = [];
        if(data instanceof Array){
            for(var step = 0,len = data.length;step < len;step++){
                me.createTpl(tpls,data[step][0],data[step][1]);
            }
        }else if(data instanceof Object){
            for(var key in data){
                me.createTpl(tpls,key,data[key]);
            }
        }
        if(me.defOption){
            tpls.unshift(me.defOption);
        }
        return tpls.join("");
    };
    me.init = function(){
        var jqSelector = $('#'+me.selectID);
        me.hideInputName = jqSelector.attr('bind_hidden');
        me.selector = jqSelector;
        if($('.select',jqSelector).length == 0){
            var tpl = me.createOptions();
            var selctorOption = $('<div class="select" ></div>').width(jqSelector.width()+20).append(tpl);
            if(tpl == ''){
                selctorOption.css({'display':'none'});
            }
            $('#'+me.selectID).append(selctorOption);
        }
        me.afterInit();
    };
    me.init();
};
/**
 * PlaceHolder 插件方法 ZPIDC.PlaceHolder，窗口生成后，如有placeholder，需要调用ZPIDC.PlaceHolder一下
 * @param scope 元素所处上下文范围
 */
$(function(){
    ZPIDC.PlaceHolder = new Function();
    if (!('placeholder' in document.createElement('input'))){
        var PlaceHolder = function(scope){
            var ctx = scope || document;
            var ranNum = function(){
                return Math.floor(Math.random() * 1000);
            };
            $.each($('[type="text"]',ctx).filter('[placeholder!=""]'),function(){
                var $element = $(this), placeholder = $element.attr('placeholder');
                if (placeholder) {
                    // 文本框ID
                    var elementId = $element.attr('id');
                    if (!elementId) {
                        var now = new Date();
                        elementId = 'lbl_placeholder' + ranNum() + now.getMilliseconds();
                        $element.attr('id', elementId);
                    }
                    // 添加label标签，用于显示placeholder的值
                    var $label = $('<label>', {
                        html: $element.val() ? '' : placeholder,
                        'for': elementId,
                        css:
                        {
                            position: 'absolute',
                            display : 'inline-block',
                            width : $element.width(),
                            height : $element.height(),
                            lineHeight :$element.height()+'px',
                            cursor: 'text',
                            color: '#a9a9a9',
                            fontSize: $element.css('fontSize'),
                            fontFamily: $element.css('fontFamily'),
                            'text-align' : 'left'
                        }
                    }).insertAfter($element);
                    // 绑定事件
                    var _setPosition = function () {
                        $label.css(
                            { marginTop: parseInt($element.css('marginTop'))+'px',
                                marginLeft: (-parseInt($element.css('width')) - 10)+ 'px' });
                    }
                    var flag = true;
                    var _resetPlaceholder = function () {
                        var  eleValue = $element.val();
                        if (eleValue) {
                            flag = true;
                            $label.html(null);
                        }else {
                            flag = false;
                            _setPosition();
                            $label.html(placeholder);
                        }
                    }
                    _setPosition();
                    $element.on('focus blur input keyup propertychange resetplaceholder', _resetPlaceholder);
                }
            });
            return PlaceHolder;
        };
        ZPIDC.PlaceHolder = PlaceHolder();
    }
});
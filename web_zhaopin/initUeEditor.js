define(function(require, exports, module){
    seajs.use('http://img01.zhaopin.cn/2014/rd2/js/ueditor.config',function(){
        seajs.use('http://img01.zhaopin.cn/2014/rd2/js/ueditor.all',function(){
            seajs.use('http://img01.zhaopin.cn/2014/rd2/js/lang/zh-cn/zh-cn',function(){
                function initUeEditor(){
                    try{
                        /* 一直放最后   加载编辑器的容器 */
                        var editflag = document.forms['addvacancyForm'].action;
                        editflag = editflag.substr(editflag.lastIndexOf('/')+1,editflag.length-1);
                        editflag = editflag=='PositionModify' ? false : true;

                        var _jobval = $("#JobDescription").val();
                        _jobval = _jobval==''||_jobval==undefined ? '<p>岗位职责：</p><p></p><p>任职要求：</p>' : _jobval;

                        window.ueid = 'Editor';
                        document.getElementById(''+ueid).style.display = 'inline-block';

                        var cfgInit = {
                            //按钮配置
                            toolbars: [[ 'fontsize','forecolor','backcolor','bold','underline','justifyleft','justifyright','justifycenter','undo','redo']],
                            //默认宽度
                            initialFrameWidth:570,
                            //默认高度
                            initialFrameHeight:200,
                            //字号设置
                            fontsize:[12,14,16],
                            //允许输入最大字符数
                            maximumWords:6000,
                            //超出最大字符数的提示
                            wordOverFlowMsg:'<span style="color:red;">您输入的文字不能超过6000个字符</span>',
                            //允许输入最小字符数
                            minimumWords:40,
                            //小于最小字符数的提示
                            wordOverFlowMsgMin:'<span style="color:red;">您输入的内容过于简单</span>',
                            //修改默认样式
                            initialStyle:'p{line-height:1.5; font-size: 14px;}',
                            //右键功能
                            //enableContextMenu:false,
                            //元素路径
                            elementPathEnabled:false,
                            //初始化时默认内容
                            initialContent:_jobval,
                            //设置层级
                            zIndex:0,
                            //设置滚动条
                            autoHeightEnabled: false,
                            //纯文本粘贴
                            pasteplain:editflag,
                            //初始化时得到焦点
                            focus:false,
                            //转化为P
                            allowDivTransToP:false
                        };
                        var JobDescription_temp = document.getElementById('JobDescription_temp');
                        if(JobDescription_temp){
                            JobDescription_temp.style.display='none';
                        }
                        window.ue = UE.getEditor(''+ueid,cfgInit);
                        UE.getEditor(''+ueid).ready(function(){
                            UE.getEditor(''+ueid).fireEvent('selectionchange');
                        });
                    }catch(e){try{console.log(e)}catch(e){}};
                };
                initUeEditor();

                window.getContent = function(){
                    return UE.getEditor(''+ueid).getContent();
                };

                window.EditorsetFocus = function() {
                    UE.getEditor(''+ueid).focus();
                };

                window.Editorsetblur = function(e){
                    UE.getEditor(''+ueid).blur();
                    UE.dom.domUtils.preventDefault(e)
                };
                //isAppendTo为true时 追加 否则为替换
                window.EditorsetContent = function(value,isAppendTo) {
                    UE.getEditor(''+ueid).setContent(value,isAppendTo);
                };
            });
        });
    });
});



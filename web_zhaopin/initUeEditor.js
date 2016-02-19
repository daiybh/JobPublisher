define(function(require, exports, module){
    seajs.use('http://img01.zhaopin.cn/2014/rd2/js/ueditor.config',function(){
        seajs.use('http://img01.zhaopin.cn/2014/rd2/js/ueditor.all',function(){
            seajs.use('http://img01.zhaopin.cn/2014/rd2/js/lang/zh-cn/zh-cn',function(){
                function initUeEditor(){
                    try{
                        /* һֱ�����   ���ر༭�������� */
                        var editflag = document.forms['addvacancyForm'].action;
                        editflag = editflag.substr(editflag.lastIndexOf('/')+1,editflag.length-1);
                        editflag = editflag=='PositionModify' ? false : true;

                        var _jobval = $("#JobDescription").val();
                        _jobval = _jobval==''||_jobval==undefined ? '<p>��λְ��</p><p></p><p>��ְҪ��</p>' : _jobval;

                        window.ueid = 'Editor';
                        document.getElementById(''+ueid).style.display = 'inline-block';

                        var cfgInit = {
                            //��ť����
                            toolbars: [[ 'fontsize','forecolor','backcolor','bold','underline','justifyleft','justifyright','justifycenter','undo','redo']],
                            //Ĭ�Ͽ��
                            initialFrameWidth:570,
                            //Ĭ�ϸ߶�
                            initialFrameHeight:200,
                            //�ֺ�����
                            fontsize:[12,14,16],
                            //������������ַ���
                            maximumWords:6000,
                            //��������ַ�������ʾ
                            wordOverFlowMsg:'<span style="color:red;">����������ֲ��ܳ���6000���ַ�</span>',
                            //����������С�ַ���
                            minimumWords:40,
                            //С����С�ַ�������ʾ
                            wordOverFlowMsgMin:'<span style="color:red;">����������ݹ��ڼ�</span>',
                            //�޸�Ĭ����ʽ
                            initialStyle:'p{line-height:1.5; font-size: 14px;}',
                            //�Ҽ�����
                            //enableContextMenu:false,
                            //Ԫ��·��
                            elementPathEnabled:false,
                            //��ʼ��ʱĬ������
                            initialContent:_jobval,
                            //���ò㼶
                            zIndex:0,
                            //���ù�����
                            autoHeightEnabled: false,
                            //���ı�ճ��
                            pasteplain:editflag,
                            //��ʼ��ʱ�õ�����
                            focus:false,
                            //ת��ΪP
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
                //isAppendToΪtrueʱ ׷�� ����Ϊ�滻
                window.EditorsetContent = function(value,isAppendTo) {
                    UE.getEditor(''+ueid).setContent(value,isAppendTo);
                };
            });
        });
    });
});



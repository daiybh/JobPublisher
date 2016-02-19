var loginArray = new Array(
    ["username", "m21865388ucj"],
   ["password", "zxcv1234"],
   ["Validate", ""]);

var anArrayOfStrings = new Array(
["JobTitle", "HR"],
["jobTypeMain", "4010200"],
["Quantity", "20"],
["EducationLevel", "4"],
["WorkYears", "0"],
["MonthlyPay", "0200104000"],
//["JobDescription"	,@"岗位职责：xxxfdfc<p>任职要求：yyyyyiop嗨嗨幼儿"],
["welfaretab", "10001,10000,10009,10010,10019,10000,10001,10009"],
["DateEnd", "2015-05-12"],
["WorkAddress", "上海市徐汇区天钥桥路333号26楼2638室ccdff"],
["PositionPubPlace", "538"]
);
var bHadSetValues = false;
function showlog(content) {
  //  console.log((new Date()).getTime() + "__" + content);
  //  alert(content);
}
function setItemValues() {

    if (bHadSetValues) return;
    bHadSetValues = true;
    showlog("setItemValues");
    for (i = 0; i < anArrayOfStrings.length; i++) {
        document.getElementById(anArrayOfStrings[i][0]).value = anArrayOfStrings[i][1];
    }
    /*
    
    UE.getEditor('Editor').addListener('afterSetContent', function (editor) {

        showlog("afterSetContent:" );//+ UE.getEditor('Editor').getContent());
    });
    UE.getEditor('Editor').addListener('ready', function (editor) {
        showlog("ready:" + UE.getEditor('Editor').getContent());
        UE.getEditor('Editor').setContent('岗位职责：xxxfdfc<p>任职要求：yyyyyiop嗨嗨幼儿thisis javascript hack ');
    });
   /* */

    { showlog("ue is undefined2222;"); }
    UE.getEditor('Editor').setContent('岗位职责：xxxfdfc<p>任职要求：yyyyyiop嗨嗨幼儿thisis javascript hack ');
    showlog("setvalue over");
    external.Alert();
}
function waitForUE() {   
    showlog("waitForUE==" + typeof (UE));
    if (typeof (UE) != 'undefined') {
        var getE = typeof (UE.getEditor);
        showlog("getEditor===" + getE);
        if (getE!= 'undefined') {          
            setTimeout(setItemValues, 1000);
            return;
        }
    }
    setTimeout(waitForUE, 100);
}

$(document).ready(function () {
    setTimeout(waitForUE, 100);
});

function auto_Login(textBox_MASKCode)
{
    //  "username", "m21865388ucj"
    window.document.form1.username.value = loginArray[0][1];
    window.document.form1.password.value = loginArray[1][1];
    window.document.form1.Validate.value = textBox_MASKCode;
    if (checknull())
    {
        window.document.form1.submit();
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IPublisher
{
   public  class JobInfo
    {
        //参考 http://img02.zhaopin.cn/2014/rd2/js/jobBaseData.js

        //   ["JobTitle", "HR"],
        string JobTitle { get; set; }
        //["jobTypeMain", "4010200"],
        string jobTypeMain { get; set; }
        //["Quantity", "20"],
        string Quantity { get; set; }
        //["EducationLevel", "4"],
        string EducationLevel { get; set; }
        //["WorkYears", "0"],
        string WorkYears { get; set; }
        //["MonthlyPay", "0200104000"],
        string MonthlyPay { get; set; }
        //["JobDescription"	,@"岗位职责：xxxfdfc<p>任职要求：yyyyyiop嗨嗨幼儿"],
        string JobDescription { get; set; }
        //["welfaretab", "10001,10000,10009,10010,10019,10000,10001,10009"],
        string welfaretab { get; set; }
        //["DateEnd", "2015-05-12"],
        string DateEnd { get; set; }
        //["WorkAddress", "上海市徐汇区天钥桥路333号26楼2638室ccdff"],
        string WorkAddress { get; set; }
        //["PositionPubPlace", "538"]
        string PositionPubPlace { get; set; }

    }
    
}

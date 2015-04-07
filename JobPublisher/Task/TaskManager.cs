using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobPublisher.Task
{
    public class TaskManager
    {
        public static IList<string> _UrlList = new List<string>();

        public static void LoadTask()
        {
            _UrlList.Add("www.51job.com");
            _UrlList.Add("www.zhaopin.com");
            _UrlList.Add("www.liepin.com");
            _UrlList.Add("www.carjob.com");
            _UrlList.Add("www.chinahr.com");
        }
    }
}

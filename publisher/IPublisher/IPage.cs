using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
namespace IPublisher
{
    public interface IPage
    {
        IPage getThis();
        void setWebBrowser(WebBrowser webBrowser);
        bool Login(string username,string password);
        int doPublish(JobInfo jobInfo);
        WebBrowser webBrowser { get; set; }
    }    
}

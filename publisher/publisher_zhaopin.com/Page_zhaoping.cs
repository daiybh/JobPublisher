using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using IPublisher;
using mshtml;
namespace publisher
{
     [System.Runtime.InteropServices.ComVisibleAttribute(true)]
    class Page_zhaoping: IPage
    {
       public  void setWebBrowser(WebBrowser webBrowser)
        {
            this.webBrowser = webBrowser;
            this.webBrowser.DocumentCompleted += new WebBrowserDocumentCompletedEventHandler(this.webBrowser_DocumentCompleted);
            
        }
        const string loginURL = @"http://rd2.zhaopin.com/portal/myrd/regnew.asp?za=2";
        string username = "";
        string password = "";
        public bool Login( string username, string password)
        {
            this.username = username;
            this.password = password;
            this.webBrowser.Navigate(loginURL);
           // autologin();
            return true;
        }
        public void Alert()
        {
                if(MessageBox.Show("dkkkkkk","ddd",MessageBoxButtons.YesNo)==DialogResult.Yes)
                { }
            //button_Preview_Click(null, null);
        }
        public int doPublish(JobInfo jobInfo)
        {
         //   throw new NotImplementedException();
            return 1;
        }
        public WebBrowser webBrowser { get; set; }
        bool bLogined = false;
        private void webBrowser_DocumentCompleted(object sender, WebBrowserDocumentCompletedEventArgs e)
        {
            if ("http://rd2.zhaopin.com/loginmgr/loginproc.asp?DYWE=Date.parse(new Date())" == e.Url.ToString())
            {
                this.webBrowser.Navigate(loginURL);
                return;
            }
        
           // WriteLog(this.webBrowser1.Url.ToString() + "___" + e.Url.ToString() + "___" + e.ToString());
           // WriteLog("state:" + this.webBrowser1.ReadyState.ToString() + "___" + WebBrowserReadyState.Complete.ToString());
            if (this.webBrowser.Url.ToString() == e.Url.ToString())
            {
                appendJS();
            }
            if (e.Url.ToString() == loginURL)
            {
                bLogined = true;
                autologin();
            }
            if (this.webBrowser.Url.ToString().CompareTo(@"http://rd2.zhaopin.com/s/homepage.asp") == 0)
            {
                this.webBrowser.Navigate(@"http://jobads.zhaopin.com/Position/PositionAdd");
            }
        }

        public IPage getThis()
        {
            return new Page_zhaoping();
            throw new NotImplementedException();
        }
        private void appendJS()
        {
            IHTMLDocument2 vDocument = (IHTMLDocument2)webBrowser.Document.DomDocument;
            StreamReader reader = new StreamReader(System.Windows.Forms.Application.StartupPath + @"\js\setvalue.js");
            string jsText = reader.ReadToEnd();
            //MessageBox.Show(jsText);
            reader.Close();
            vDocument.parentWindow.execScript(jsText, "javascript");            
        }
        void setItemValue(string itemName,string value)
        {
            HtmlElement el=  this.webBrowser.Document.GetElementById(itemName);
            el.SetAttribute("value", value);
        }
        private void autologin()
        {
            object[] objects = new object[1];

            NewMasker nm = new NewMasker();
            bool bOK = false;
            try
            {
                string strVimg = nm.getVimg(this.webBrowser.Document, "vimg");
                if (strVimg != "" && strVimg.Length>3)
                {
                    /*
                    setItemValue("username",this.username);
                    setItemValue("password", this.password);

                    setItemValue("Validate",strVimg);

                    HtmlElement buttonSubmit = this.webBrowser.Document.GetElementById("submit");
                    if (buttonSubmit != null) buttonSubmit.InvokeMember("click");
                    /**/

                    objects[0] = strVimg;
                  this.webBrowser.Document.InvokeScript("auto_Login", objects);
                    bOK = true;
                }
            }
            catch (Exception es)
            {
            }
            if (!bOK)
            {
                MessageBox.Show("login failed");
                this.webBrowser.Navigate(loginURL);
            }
        }
    }
}

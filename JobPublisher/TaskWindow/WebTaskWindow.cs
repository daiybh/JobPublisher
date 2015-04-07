using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using JobPublisher.Task;

namespace JobPublisher.TaskWindow
{
    public partial class WebTaskWindow : JobWindowControl
    {        
        private PanelEvent _pe;
        private bool _show = false;
        public WebTaskWindow()
        {
            InitializeComponent();
            tweb.ScriptErrorsSuppressed = true;
        }

        private void btnStart_Click(object sender, EventArgs e)
        {
            //tweb.Navigate("www.baidu.com");
        }

        public void NavigateUrl(string url)
        {
            tweb.Navigate(url);
        }

        private void WebTaskWindow_Load(object sender, EventArgs e)
        {

            lblStatusPic.Image = imageSource.Images[1];
           // tweb.Navigate("www.51job.com");
           // webView.Height = (int)（this.Height * 0.8）;
        }

        private void Show_Click(object sender, EventArgs e)
        {
            _show = !_show;
            if (_show)
            {
                btnShow.Text = "Hide";                
                _pe.showPanel(this,this.Parent);
            }
            else
            {
                btnShow.Text = "Show";
                _pe.hidePanel(this);
            }
            //this.Size = this.Parent.Parent.Size;
           // this.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
        }

        public void SetPanelEvent(PanelEvent pe)
        {
            _pe = pe;
        }

       
    }
}

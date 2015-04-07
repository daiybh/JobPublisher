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
    public partial class ClientBar : UserControl
    {
        private PanelEvent _pe;
        public ClientBar()
        {
            InitializeComponent();
        }

        private void ClientBar_Load(object sender, EventArgs e)
        {
            webWindows.AutoScroll = true;
            webWindows.HorizontalScroll.Visible = true;
            webWindows.VerticalScroll.Visible = false;
            this.Dock = System.Windows.Forms.DockStyle.Fill;
            webWindows.ColumnStyles.Clear();
            webWindows.RowStyles.Clear();
            //ContentPanel.c
            webWindows.ColumnCount = 5;
            webWindows.RowCount = 1;
            webWindows.Refresh();
            for (int i = 0; i < 5; i++)
            {
                WebTaskWindow web = new WebTaskWindow();
                web.SetPanelEvent(_pe);
                web.Position = i;
                web.NavigateUrl(TaskManager._UrlList[i]);
                //web.Height = (int)ContentTable.RowStyles[i].Height;
                webWindows.Controls.Add(web);
                //ColumnStyles sty =  new ColumnStyle();
                //ColumnStyles
                //ontentTable.ColumnStyles.Add(
            }
        }

        public void SetPanelEvent(PanelEvent pe)
        {
            _pe = pe;
        }
    }
}

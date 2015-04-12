using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using JobPublisher.TaskWindow;
using System.Collections;
using JobPublisher.Task;

namespace JobPublisher
{
    public partial class MonitorForm : Form
    {
        private Hashtable _webList = new Hashtable();
        private Panel _backPanel = new Panel();
        private PanelEvent _panelEvent;
        private Control _parentPanel;
        public MonitorForm()
        {
            InitializeComponent();
            _panelEvent = new PanelEvent();
            _panelEvent.showPanel = new PanelEvent.ShowPanel(ShowWebWindow);
            _panelEvent.hidePanel = new PanelEvent.HidePanel(CloseWebWindow);
        }

        private void MonitorForm_Load(object sender, EventArgs e)
        {
            btnHome.Image = btnImages.Images[0];
            _backPanel.Dock = DockStyle.Fill;
            BodyContainer.Panel2.Controls.Add(_backPanel);

            TaskManager.LoadTask();
            //ContentPanel
            ContentTable.ColumnStyles.Clear();
            ContentTable.RowStyles.Clear();
            //ContentPanel.c
            ContentTable.ColumnCount = 1;
            ContentTable.RowCount = 2;
            ContentTable.Refresh();
            
            //ContentTable.RowStyles.
            //ContentTable.Width = splitContainer2.Panel2.Width;

            for (int i = 0; i < 1; i++)
            {
                ContentTable.RowStyles.Add(new RowStyle(SizeType.Percent, 100F));
                ClientBar client = new ClientBar();
                client.SetPanelEvent(_panelEvent);
                //web.Height = (int)ContentTable.RowStyles[i].Height;
                ContentTable.Controls.Add(client);
                _webList.Add(i, client);
                //ColumnStyles sty =  new ColumnStyle();
                //ColumnStyles
                //ontentTable.ColumnStyles.Add(
            }
                        
        }

        private void ShowWebWindow(JobWindowControl control, Control parent)
        {
            _parentPanel = parent;
            _backPanel.Controls.Clear();
            _backPanel.Controls.Add(control);
            control.Dock = DockStyle.Fill;
            ContentTable.SendToBack();
            _backPanel.BringToFront();
            _backPanel.Refresh();
        }

        private void CloseWebWindow(JobWindowControl control)
        {            
            _backPanel.Controls.Clear();
            _parentPanel.Controls.Add(control);
            _parentPanel.Controls.SetChildIndex(control, control.Position);
            _backPanel.SendToBack();
            ContentTable.BringToFront();
        }
    }
}

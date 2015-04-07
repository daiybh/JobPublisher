using JobPublisher.TaskWindow;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace JobPublisher.Task
{
    public class PanelEvent
    {
        public delegate void ShowPanel(JobWindowControl u, Control parent);
        public delegate void HidePanel(JobWindowControl u);
        public ShowPanel showPanel;
        public HidePanel hidePanel; 
    }
}

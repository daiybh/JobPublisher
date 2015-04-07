using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace JobPublisher.TaskWindow
{
    public class JobWindowControl:UserControl
    {
        public JobWindowControl()
        {
        }

        private int _position = 0;

        public int Position
        {
            get { return _position; }
            set { _position = value; }
        }
    }
}

namespace JobPublisher.TaskWindow
{
    partial class WebTaskWindow
    {
        /// <summary> 
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary> 
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Component Designer generated code

        /// <summary> 
        /// Required method for Designer support - do not modify 
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(WebTaskWindow));
            this.webView = new System.Windows.Forms.GroupBox();
            this.tweb = new System.Windows.Forms.WebBrowser();
            this.btnStart = new System.Windows.Forms.Button();
            this.btnShow = new System.Windows.Forms.Button();
            this.lblTaskNumber = new System.Windows.Forms.Label();
            this.lblStatusPic = new System.Windows.Forms.PictureBox();
            this.imageSource = new System.Windows.Forms.ImageList(this.components);
            this.webContainor = new System.Windows.Forms.SplitContainer();
            this.webView.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.lblStatusPic)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.webContainor)).BeginInit();
            this.webContainor.Panel1.SuspendLayout();
            this.webContainor.Panel2.SuspendLayout();
            this.webContainor.SuspendLayout();
            this.SuspendLayout();
            // 
            // webView
            // 
            this.webView.Controls.Add(this.tweb);
            this.webView.Dock = System.Windows.Forms.DockStyle.Fill;
            this.webView.Location = new System.Drawing.Point(0, 0);
            this.webView.Name = "webView";
            this.webView.Size = new System.Drawing.Size(250, 163);
            this.webView.TabIndex = 0;
            this.webView.TabStop = false;
            this.webView.Text = "51Job";
            // 
            // tweb
            // 
            this.tweb.Dock = System.Windows.Forms.DockStyle.Fill;
            this.tweb.Location = new System.Drawing.Point(3, 16);
            this.tweb.MinimumSize = new System.Drawing.Size(20, 20);
            this.tweb.Name = "tweb";
            this.tweb.Size = new System.Drawing.Size(244, 144);
            this.tweb.TabIndex = 0;
            // 
            // btnStart
            // 
            this.btnStart.Location = new System.Drawing.Point(4, 3);
            this.btnStart.Name = "btnStart";
            this.btnStart.Size = new System.Drawing.Size(50, 30);
            this.btnStart.TabIndex = 1;
            this.btnStart.Text = "Start";
            this.btnStart.UseVisualStyleBackColor = true;
            this.btnStart.Click += new System.EventHandler(this.btnStart_Click);
            // 
            // btnShow
            // 
            this.btnShow.Location = new System.Drawing.Point(60, 3);
            this.btnShow.Name = "btnShow";
            this.btnShow.Size = new System.Drawing.Size(50, 30);
            this.btnShow.TabIndex = 2;
            this.btnShow.Text = "Show";
            this.btnShow.UseVisualStyleBackColor = true;
            this.btnShow.Click += new System.EventHandler(this.Show_Click);
            // 
            // lblTaskNumber
            // 
            this.lblTaskNumber.AutoSize = true;
            this.lblTaskNumber.Location = new System.Drawing.Point(127, 12);
            this.lblTaskNumber.Name = "lblTaskNumber";
            this.lblTaskNumber.Size = new System.Drawing.Size(42, 13);
            this.lblTaskNumber.TabIndex = 3;
            this.lblTaskNumber.Text = "10/100";
            // 
            // lblStatusPic
            // 
            this.lblStatusPic.Location = new System.Drawing.Point(195, 3);
            this.lblStatusPic.Name = "lblStatusPic";
            this.lblStatusPic.Size = new System.Drawing.Size(28, 28);
            this.lblStatusPic.TabIndex = 4;
            this.lblStatusPic.TabStop = false;
            // 
            // imageSource
            // 
            this.imageSource.ImageStream = ((System.Windows.Forms.ImageListStreamer)(resources.GetObject("imageSource.ImageStream")));
            this.imageSource.TransparentColor = System.Drawing.Color.Transparent;
            this.imageSource.Images.SetKeyName(0, "red.jpg");
            this.imageSource.Images.SetKeyName(1, "green.png");
            // 
            // webContainor
            // 
            this.webContainor.Dock = System.Windows.Forms.DockStyle.Fill;
            this.webContainor.FixedPanel = System.Windows.Forms.FixedPanel.Panel2;
            this.webContainor.IsSplitterFixed = true;
            this.webContainor.Location = new System.Drawing.Point(0, 0);
            this.webContainor.Name = "webContainor";
            this.webContainor.Orientation = System.Windows.Forms.Orientation.Horizontal;
            // 
            // webContainor.Panel1
            // 
            this.webContainor.Panel1.Controls.Add(this.webView);
            // 
            // webContainor.Panel2
            // 
            this.webContainor.Panel2.Controls.Add(this.lblStatusPic);
            this.webContainor.Panel2.Controls.Add(this.btnStart);
            this.webContainor.Panel2.Controls.Add(this.lblTaskNumber);
            this.webContainor.Panel2.Controls.Add(this.btnShow);
            this.webContainor.Size = new System.Drawing.Size(250, 202);
            this.webContainor.SplitterDistance = 163;
            this.webContainor.TabIndex = 5;
            // 
            // WebTaskWindow
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.Controls.Add(this.webContainor);
            this.Margin = new System.Windows.Forms.Padding(0);
            this.Name = "WebTaskWindow";
            this.Size = new System.Drawing.Size(250, 202);
            this.Load += new System.EventHandler(this.WebTaskWindow_Load);
            this.webView.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.lblStatusPic)).EndInit();
            this.webContainor.Panel1.ResumeLayout(false);
            this.webContainor.Panel2.ResumeLayout(false);
            this.webContainor.Panel2.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.webContainor)).EndInit();
            this.webContainor.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.GroupBox webView;
        private System.Windows.Forms.Button btnStart;
        private System.Windows.Forms.WebBrowser tweb;
        private System.Windows.Forms.Button btnShow;
        private System.Windows.Forms.Label lblTaskNumber;
        private System.Windows.Forms.PictureBox lblStatusPic;
        private System.Windows.Forms.ImageList imageSource;
        private System.Windows.Forms.SplitContainer webContainor;
    }
}

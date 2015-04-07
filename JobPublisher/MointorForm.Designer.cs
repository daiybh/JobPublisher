namespace JobPublisher
{
    partial class MonitorForm
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

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(MonitorForm));
            this.ServerStatus = new System.Windows.Forms.StatusStrip();
            this.toolStripStatusLabel1 = new System.Windows.Forms.ToolStripStatusLabel();
            this.FileMenu = new System.Windows.Forms.MenuStrip();
            this.fileMenuToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.MainContainer = new System.Windows.Forms.SplitContainer();
            this.BodyContainer = new System.Windows.Forms.SplitContainer();
            this.ContentTable = new System.Windows.Forms.TableLayoutPanel();
            this.btnImages = new System.Windows.Forms.ImageList(this.components);
            this.btnHome = new System.Windows.Forms.Button();
            this.ServerStatus.SuspendLayout();
            this.FileMenu.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.MainContainer)).BeginInit();
            this.MainContainer.Panel2.SuspendLayout();
            this.MainContainer.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.BodyContainer)).BeginInit();
            this.BodyContainer.Panel1.SuspendLayout();
            this.BodyContainer.Panel2.SuspendLayout();
            this.BodyContainer.SuspendLayout();
            this.SuspendLayout();
            // 
            // ServerStatus
            // 
            this.ServerStatus.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.toolStripStatusLabel1});
            this.ServerStatus.Location = new System.Drawing.Point(0, 708);
            this.ServerStatus.Name = "ServerStatus";
            this.ServerStatus.Size = new System.Drawing.Size(1350, 22);
            this.ServerStatus.TabIndex = 0;
            this.ServerStatus.Text = "Stop";
            // 
            // toolStripStatusLabel1
            // 
            this.toolStripStatusLabel1.Name = "toolStripStatusLabel1";
            this.toolStripStatusLabel1.Size = new System.Drawing.Size(74, 17);
            this.toolStripStatusLabel1.Text = "Server Status";
            // 
            // FileMenu
            // 
            this.FileMenu.BackColor = System.Drawing.SystemColors.ControlDarkDark;
            this.FileMenu.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.fileMenuToolStripMenuItem});
            this.FileMenu.Location = new System.Drawing.Point(0, 0);
            this.FileMenu.Name = "FileMenu";
            this.FileMenu.Size = new System.Drawing.Size(1350, 24);
            this.FileMenu.TabIndex = 1;
            this.FileMenu.Text = "文件";
            // 
            // fileMenuToolStripMenuItem
            // 
            this.fileMenuToolStripMenuItem.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.fileMenuToolStripMenuItem.Name = "fileMenuToolStripMenuItem";
            this.fileMenuToolStripMenuItem.Size = new System.Drawing.Size(37, 20);
            this.fileMenuToolStripMenuItem.Text = "File";
            // 
            // MainContainer
            // 
            this.MainContainer.Dock = System.Windows.Forms.DockStyle.Fill;
            this.MainContainer.FixedPanel = System.Windows.Forms.FixedPanel.Panel1;
            this.MainContainer.IsSplitterFixed = true;
            this.MainContainer.Location = new System.Drawing.Point(0, 24);
            this.MainContainer.Name = "MainContainer";
            this.MainContainer.Orientation = System.Windows.Forms.Orientation.Horizontal;
            // 
            // MainContainer.Panel1
            // 
            this.MainContainer.Panel1.BackColor = System.Drawing.SystemColors.GradientInactiveCaption;
            // 
            // MainContainer.Panel2
            // 
            this.MainContainer.Panel2.Controls.Add(this.BodyContainer);
            this.MainContainer.Size = new System.Drawing.Size(1350, 684);
            this.MainContainer.SplitterDistance = 63;
            this.MainContainer.TabIndex = 2;
            // 
            // BodyContainer
            // 
            this.BodyContainer.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.BodyContainer.Dock = System.Windows.Forms.DockStyle.Fill;
            this.BodyContainer.Location = new System.Drawing.Point(0, 0);
            this.BodyContainer.Name = "BodyContainer";
            // 
            // BodyContainer.Panel1
            // 
            this.BodyContainer.Panel1.Controls.Add(this.btnHome);
            // 
            // BodyContainer.Panel2
            // 
            this.BodyContainer.Panel2.AutoScroll = true;
            this.BodyContainer.Panel2.Controls.Add(this.ContentTable);
            this.BodyContainer.Panel2.Padding = new System.Windows.Forms.Padding(3);
            this.BodyContainer.Size = new System.Drawing.Size(1350, 617);
            this.BodyContainer.SplitterDistance = 185;
            this.BodyContainer.TabIndex = 0;
            // 
            // ContentTable
            // 
            this.ContentTable.AutoScroll = true;
            this.ContentTable.CellBorderStyle = System.Windows.Forms.TableLayoutPanelCellBorderStyle.InsetDouble;
            this.ContentTable.ColumnCount = 1;
            this.ContentTable.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.ContentTable.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.ContentTable.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.ContentTable.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.ContentTable.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 20F));
            this.ContentTable.Dock = System.Windows.Forms.DockStyle.Fill;
            this.ContentTable.Location = new System.Drawing.Point(3, 3);
            this.ContentTable.Margin = new System.Windows.Forms.Padding(10);
            this.ContentTable.Name = "ContentTable";
            this.ContentTable.RowCount = 1;
            this.ContentTable.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 400F));
            this.ContentTable.Size = new System.Drawing.Size(1151, 607);
            this.ContentTable.TabIndex = 0;
            // 
            // btnImages
            // 
            this.btnImages.ImageStream = ((System.Windows.Forms.ImageListStreamer)(resources.GetObject("btnImages.ImageStream")));
            this.btnImages.TransparentColor = System.Drawing.Color.Transparent;
            this.btnImages.Images.SetKeyName(0, "Home.png");
            // 
            // btnHome
            // 
            this.btnHome.Location = new System.Drawing.Point(38, 30);
            this.btnHome.Name = "btnHome";
            this.btnHome.Size = new System.Drawing.Size(86, 75);
            this.btnHome.TabIndex = 0;
            this.btnHome.UseVisualStyleBackColor = true;
            // 
            // MonitorForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1350, 730);
            this.Controls.Add(this.MainContainer);
            this.Controls.Add(this.ServerStatus);
            this.Controls.Add(this.FileMenu);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.MainMenuStrip = this.FileMenu;
            this.Name = "MonitorForm";
            this.Text = "Monitor Screen";
            this.WindowState = System.Windows.Forms.FormWindowState.Maximized;
            this.Load += new System.EventHandler(this.MonitorForm_Load);
            this.ServerStatus.ResumeLayout(false);
            this.ServerStatus.PerformLayout();
            this.FileMenu.ResumeLayout(false);
            this.FileMenu.PerformLayout();
            this.MainContainer.Panel2.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.MainContainer)).EndInit();
            this.MainContainer.ResumeLayout(false);
            this.BodyContainer.Panel1.ResumeLayout(false);
            this.BodyContainer.Panel2.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.BodyContainer)).EndInit();
            this.BodyContainer.ResumeLayout(false);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.StatusStrip ServerStatus;
        private System.Windows.Forms.MenuStrip FileMenu;
        private System.Windows.Forms.ToolStripMenuItem fileMenuToolStripMenuItem;
        private System.Windows.Forms.ToolStripStatusLabel toolStripStatusLabel1;
        private System.Windows.Forms.SplitContainer MainContainer;
        private System.Windows.Forms.SplitContainer BodyContainer;
        private System.Windows.Forms.TableLayoutPanel ContentTable;
        private System.Windows.Forms.ImageList btnImages;
        private System.Windows.Forms.Button btnHome;
    }
}


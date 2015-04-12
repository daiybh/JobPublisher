using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using mshtml;
using Tesseract;

namespace publisher
{
    public class NewMasker
    {
        string dataPath = @"D:\Program Files\Tesseract-OCR\tessdata\";
        string language = "zhaopin";
        TesseractEngine engine = null;
        public NewMasker()
        {
            engine = new TesseractEngine(dataPath, language);
        }
        public string getVimg(HtmlDocument document, string vimgID)
        {
            HtmlElement vimg = document.GetElementById(vimgID);
            HTMLDocument doc = (HTMLDocument)document.DomDocument;
            HTMLBody body = (HTMLBody)doc.body;
            IHTMLControlRange rang = (IHTMLControlRange)body.createControlRange();
            IHTMLControlElement img = (IHTMLControlElement)vimg.DomElement;
            try
            {
                Image oldImage = Clipboard.GetImage();
                rang.add(img);
                rang.execCommand("Copy", false, null);
                Image numImage = Clipboard.GetImage();
                Clipboard.SetImage(oldImage);
                using (Page page = engine.Process(new Bitmap(numImage)))
                {
                    return page.GetText();
                }
            }catch(Exception ex)
            {
                return "";
            }
        }
    }
}

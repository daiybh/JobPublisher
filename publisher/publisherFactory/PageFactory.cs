using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using IPublisher;
namespace publisherFactory
{
   public  class PublisherFactory
    {
       public class PlugInfo
       {
           public PlugInfo(string path,Object o,Type t)
           {
               this.plugPath = path;
               this.instance = o;
               this.t = t;
           }
           public IPage GetIPage()
           {
               MethodInfo getthis = this.t.GetMethod("getThis");
               return (IPage)getthis.Invoke(this.instance, null);
           }
           public string plugPath;
           public Object instance;
           public Type t;
       }
       public static List<PlugInfo> plugPaths = new List<PlugInfo>();
       public static  void LoadAllPlugs()
        {
            if (plugPaths.Count>0)
                return;

            string[] files = Directory.GetFiles(System.AppDomain.CurrentDomain.SetupInformation.ApplicationBase);
            foreach (string file in files)
            {
                if(file.ToUpper().EndsWith(".DLL"))
                {
                    try
                    {
                        Assembly ab = Assembly.LoadFrom(file);
                        
                        Type[] types = ab.GetTypes();
                        foreach(Type t in types)
                        {
                            if(t.GetInterface("IPage")!=null)
                            {
                                plugPaths.Add(new PlugInfo(file, ab.CreateInstance(t.FullName), t));
                            }
                        }
                    }catch(Exception ex)
                    {
                      //  System.Windows.Forms.MessageBox.Show(ex.ToString());
                    }
                }
            }
        }
        public static IPage CreatePage(string url)
        {
            LoadAllPlugs();
            if (plugPaths.Count < 0) return null;

            if (url.IndexOf(".zhaopin.com") > 0)
            {
                //publisher_zhaopin.com.dll
                foreach(PlugInfo pi in plugPaths)
                {
                    if(pi.plugPath.EndsWith("publisher_zhaopin.com.dll"))
                    {
                        return pi.GetIPage();
                    }
                }
             //   return new Page_zhaoping();
            }
            return null;
        }
    }
}

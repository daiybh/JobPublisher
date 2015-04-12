using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using IPublisher;
using publisherFactory;
namespace UnitTestProject
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
           IPage pp =  PublisherFactory.CreatePage(@"http://rd2.zhaopin.com/portal/myrd/regnew.asp?za=2");

           pp.setWebBrowser(null);
        }
    }
}

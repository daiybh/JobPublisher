var _dywe=Object({c:"length",lb:"4.3.18",m:"cookie",b:void 0,cb:function(b,c){this.zb=b;this.Nb=c},r:"dywea=",W:"dyweb=",ma:"dywec=",Ta:"dywek=",na:"dywev=",oa:"dywex=",Sa:"GASO=",X:"dywez=",u:"dywem=",lc:"http://l.zhaopin.com/track.gif",mc:"https://l.zhaopin.com/track.gif",mc_pv:"http://l.zhaopin.com/track_pv.gif",mc_rv:"http://l.zhaopin.com/track_rv.gif",Wa:"dywecid=",Ya:"dywecsr=",$a:"dywegclid=",Ua:"dyweccn=",Xa:"dywecmd=",Za:"dywectr=",Va:"dywecct=",Hb:!1,_gasoDomain:void 0,_gasoCPath:void 0,
e:window,a:document,k:navigator,t:function(b){var c=1,d=0,e;if(!_dywe.q(b)){c=0;for(e=b[_dywe.c]-1;e>=0;e--)d=b.charCodeAt(e),c=(c<<6&268435455)+d+(d<<14),d=c&266338304,c=d!=0?c^d>>21:c}return c},C:function(b,c,d){var e=_dywe,k="-",h;h=e.q;!h(b)&&!h(c)&&!h(d)&&(h=e.w(b,c),h>-1&&(d=b.indexOf(d,h),d<0&&(d=b[e.c]),k=e.F(b,h+e.w(c,"=")+1,d)));return k},Ea:function(b){var c=!1,d=0,e,k;if(!_dywe.q(b)){c=!0;for(e=0;e<b[_dywe.c];e++)k=b.charAt(e),d+="."==k?1:0,c=c&&d<=1&&(0==e&&"-"==k||_dywe.P(".0123456789",
k))}return c},d:function(b,c){var d=encodeURIComponent;return d instanceof Function?c?encodeURI(b):d(b):escape(b)},J:function(b,c){var d=decodeURIComponent,e,b=b.split("+").join(" ");if(d instanceof Function)try{e=c?decodeURI(b):d(b)}catch(k){e=unescape(b)}else e=unescape(b);return e},Db:function(b){return b&&b.hash?_dywe.F(b.href,_dywe.w(b.href,"#")):""},q:function(b){return _dywe.b==b||"-"==b||""==b},Lb:function(b){return b[_dywe.c]>0&&_dywe.P(" \n\r\t",b)},P:function(b,c){return _dywe.w(b,c)>-1},
h:function(b,c){b[b[_dywe.c]]=c},T:function(b){return b.toLowerCase()},z:function(b,c){return b.split(c)},w:function(b,c){return b.indexOf(c)},F:function(b,c,d){d=_dywe.b==d?b[_dywe.c]:d;return b.substring(c,d)},uc:function(){var b=_dywe.b,c=window;c&&c.gaGlobal&&c.gaGlobal.hid?b=c.gaGlobal.hid:(b=Math.round(Math.random()*2147483647),c.gaGlobal=c.gaGlobal?c.gaGlobal:{},c.gaGlobal.hid=b);return b},wa:function(){return Math.round(Math.random()*2147483647)},su:function(){return getCookie("JsNewlogin")||
""},Gc:function(){return(_dywe.wa()^_dywe.vc())*2147483647},vc:function(){var b=_dywe.k,c=_dywe.a,d=_dywe.e,e=c[_dywe.m]?c[_dywe.m]:"",k=d.history[_dywe.c],b=[b.appName,b.version,b.language?b.language:b.browserLanguage,b.platform,b.userAgent,b.javaEnabled()?1:0].join("");d.screen?b+=d.screen.width+"x"+d.screen.height+d.screen.colorDepth:d.java&&(d=java.awt.Toolkit.getDefaultToolkit().getScreenSize(),b+=d.screen.width+"x"+d.screen.height);b+=e;b+=c.referrer?c.referrer:"";for(c=b[_dywe.c];k>0;)b+=k--^
c++;return _dywe.t(b)}});
_dywe.hc=function(){function b(b,e){return new c(b,e)}var c=_dywe.cb;this.db="utm_campaign";this.eb="utm_content";this.fb="utm_id";this.gb="utm_medium";this.hb="utm_nooverride";this.ib="utm_source";this.jb="utm_term";this.kb="gclid";this.I=this.pa=0;this.wb="15768000";this.Tb="1800";this.ea=[];this.ga=[];this.Ic="cse";this.Gb="q";this.ab="google";this.fa=[b(this.ab,this.Gb),b("yahoo","p"),b("msn","q"),b("bing","q"),b("aol","query"),b("aol","encquery"),b("lycos","query"),b("ask","q"),b("altavista",
"q"),b("netscape","query"),b("cnn","query"),b("looksmart","qt"),b("about","terms"),b("mamma","query"),b("alltheweb","q"),b("gigablast","q"),b("voila","rdata"),b("virgilio","qs"),b("live","q"),b("baidu","wd"),b("alice","qs"),b("yandex","text"),b("najdi","q"),b("aol","q"),b("club-internet","query"),b("mama","query"),b("seznam","q"),b("search","q"),b("wp","szukaj"),b("onet","qt"),b("netsprint","q"),b("google.interia","q"),b("szukacz","q"),b("yam","k"),b("pchome","q"),b("kvasir","searchExpr"),b("sesam",
"q"),b("ozu","q"),b("terra","query"),b("nostrum","query"),b("mynet","q"),b("ekolay","q"),b("search.ilse","search_for"),b("youdao","q"),b("sogou","query"),b("soso","w")];this.B=void 0;this.Kb=!1;this.p="/";this.ha=100;this.Da="/track.gif";this.ua=this.ta=1;this.G="|";this.pb=this.qa=this.sa=1;this.g="auto";this.D=1;this.Ga=1E3;this.nc=this.Yc=10;this.Zc=0.2};
_dywe.Y=function(b,c){function d(a){a=a instanceof Array?a.join("."):"";return v(a)?"-":a}function e(a,q){var b=[],c;if(!v(a)&&(b=o.z(a,"."),q))for(c=0;c<b[s];c++)o.Ea(b[c])||(b[c]="-");return b}function k(a){return"expires="+(new Date((new Date).getTime()+a)).toGMTString()+"; "}function h(a,q){j.a[o.m]=a+"; path="+g.p+"; "+q+j.Cc()}function i(a,q,b){var c=j.V,d,f;for(d=0;d<c[s];d++)f=c[d][0],f+=v(q)?q:q+c[d][4],c[d][2](o.C(a,f,b))}var a,f,l,m,p,n,r,j=this,o=_dywe,v=o.q,s=o.c,t,g=c;j.a=b;j.Jb=function(){return o.b==
t||t==j.t()};j.Ba=function(){return p?p:"-"};j.Wb=function(a){p=a};j.Ma=function(a){t=o.Ea(a)?a*1:"-"};j.Aa=function(){return d(n)};j.Na=function(a){n=e(a)};j.Hc=function(){return t?t:"-"};j.Cc=function(){return v(g.g)?"":"domain="+g.g+";"};j.ya=function(){return d(a)};j.Ub=function(b){a=e(b,1)};j.K=function(){return d(f)};j.La=function(a){f=e(a,1)};j.za=function(){return d(l)};j.Vb=function(a){l=e(a,1)};j.Ca=function(){return d(m)};j.Xb=function(a){m=e(a);for(a=0;a<m[s];a++)a<4&&!o.Ea(m[a])&&(m[a]=
"-")};j.Dc=function(){return r};j.Uc=function(a){r=a};j.pc=function(){a=[];f=[];l=[];m=[];p=o.b;n=[];t=o.b};j.t=function(){var a="",q;for(q=0;q<j.V[s];q++)a+=j.V[q][1]();return o.t(a)};j.Ha=function(a){var q=j.a[o.m],b=!1;q&&(i(q,a,";"),j.Ma(j.t()),b=!0);return b};j.Rc=function(a){i(a,"","&");j.Ma(o.C(a,o.Ta,"&"))};j.Wc=function(){var a=j.V,q=[],b;for(b=0;b<a[s];b++)o.h(q,a[b][0]+a[b][1]());o.h(q,o.Ta+j.t());return q.join("&")};j.bd=function(a,q){var b=j.V,c=g.p,d;j.Ha(a);g.p=q;for(d=0;d<b[s];d++)if(!v(b[d][1]()))b[d][3]();
g.p=c};j.dc=function(){h(o.r+j.ya(),k(63072E6))};j.Pa=function(){h(o.W+j.K(),k(g.Tb*1E3))};j.ec=function(){h(o.ma+j.za(),"")};j.um=function(){h(o.u+j.za()+".y",k(63072E6))};j.Ra=function(){h(o.X+j.Ca(),k(g.wb*1E3))};j.fc=function(){h(o.oa+j.Ba(),k(63072E6))};j.Qa=function(){h(o.na+j.Aa(),k(63072E6))};j.cd=function(){h(o.Sa+j.Dc(),"")};j.V=[[o.r,j.ya,j.Ub,j.dc,"."],[o.W,j.K,j.La,j.Pa,""],[o.ma,j.za,j.Vb,j.ec,""],[o.oa,j.Ba,j.Wb,j.fc,""],[o.X,j.Ca,j.Xb,j.Ra,"."],[o.na,j.Aa,j.Na,j.Qa,"."]]};
_dywe.jc=function(b){var c=this,d=_dywe,e,k=function(c){var d=(new Date).getTime(),a;a=(d-c[3])*(b.Zc/1E3);a>=1&&(c[2]=Math.min(Math.floor(c[2]*1+a),b.nc),c[3]=d);return c};c.O=function(h,i,a,f,l,m,p){var n,r=b.D,j=a.location;e||(e=new d.Y(a,b));e.Ha(f);n=d.z(e.K(),".");if(n[1]<500||l)if(m&&(n=k(n)),l||!m||n[2]>=1){!l&&m&&(n[2]=n[2]*1-1);n[1]=n[1]*1+1;h="?dywewv="+_dywe.lb+"&dywen="+d.wa()+"&dywesu="+d.su()+(d.q(j.hostname)?"":"&dywehn="+d.d(j.hostname))+(b.ha==100?"":"&dywesp="+d.d(b.ha))+h;if(0==
r||2==r)l=new Image(1,1),l.src=b.Da+h,l.onload=2==r?function(){}:p||function(){};if(1==r||2==r)r=new Image(1,1),r.src=("https:"==j.protocol?d.mc:d.lc)+h+"&dyweac="+i+"&dywecc="+c.wc(a,f)+c.wc2(a),r.onload=p||function(){}}e.La(n.join("."));e.Pa()};c.O_pv=function(b,c){for(var a=d.a.getElementsByTagName("iframe"),f=null,e=0;e<a.length;e++)if(a[e].src.toString().indexOf("http://jobs.zhaopin.com/pv.htm")==0&&a[e].src.toString().toLowerCase().indexOf("pid=cc")>0){f=a[e];break}if(f!=null)a=d.C(b[d.m],d.r+
c,";"),e=d.a.location.search,f=d.C(f.src,"pid=","&"),f=d.d("?"+d.r+a+"&"+(!d.q(e)?e.substring(1)+"&":"")+"pid="+f,!0),(new Image(1,1)).src=d.mc_pv+f};c.O_rv=function(){try{if(typeof window.trackResumeViewFlag!="undefined"&&window.trackResumeViewFlag&&document.ifm_f&&window.ifm_url&&d.w(window.ifm_url,".htm")>0){var b=d.C(document.ifm_f.location.href,"ext_id=","&").split("_"),c=window.ifm_url.lastIndexOf("_"),a=d.d("?extid="+b[0]+"&vernum="+b[1]+"&langid="+window.ifm_url.substr(c+1,1)+"&compid="+window.compid+
"&loginid="+window.loginid+"&comptype="+window.comptype,!0);(new Image(1,1)).src=d.mc_rv+a}}catch(f){}};c.wc=function(b,c){var a=[],f=[d.r,d.X,d.u,d.na,d.oa],e,k=b[d.m],p;for(e=0;e<f[d.c];e++)p=d.C(k,f[e]+c,";"),d.q(p)||d.h(a,f[e]+p+";");return d.d(a.join("+"))};c.wc2=function(b){for(var c=[],a=["urlfrom=","adfcid="],f=b[d.m],e,b=0;b<a[d.c];b++)e=d.C(f,a[b],";"),d.q(e)||d.h(c,a[b]+d.d(e));return"&"+c.join("&")}};_dywe.i=function(){this.la=[]};
_dywe.i.bb=function(b,c,d,e,k,h){this.cc=b;this.Oa=c;this.L=d;this.sb=e;this.Pb=k;this.Qb=h};_dywe.i.bb.prototype.S=function(){var b=_dywe.d;return"&"+["dywet=item","dywetid="+b(this.cc),"dyweipc="+b(this.Oa),"dyweipn="+b(this.L),"dyweiva="+b(this.sb),"dyweipr="+b(this.Pb),"dyweiqt="+b(this.Qb)].join("&")};_dywe.i.$=function(b,c,d,e,k,h,i,a){this.v=b;this.ob=c;this.bc=d;this.ac=e;this.Yb=k;this.ub=h;this.$b=i;this.xb=a;this.ca=[]};
_dywe.i.$.prototype.mb=function(b,c,d,e,k){var h=this.Eb(b),i=this.v,a=_dywe;a.b==h?a.h(this.ca,new a.i.bb(i,b,c,d,e,k)):(h.cc=i,h.Oa=b,h.L=c,h.sb=d,h.Pb=e,h.Qb=k)};_dywe.i.$.prototype.Eb=function(b){var c,d=this.ca,e;for(e=0;e<d[_dywe.c];e++)c=b==d[e].Oa?d[e]:c;return c};
_dywe.i.$.prototype.S=function(){var b=_dywe.d;return"&"+["dywet=tran","dywetid="+b(this.v),"dywetst="+b(this.ob),"dywetto="+b(this.bc),"dywettx="+b(this.ac),"dywetsp="+b(this.Yb),"dywetci="+b(this.ub),"dywetrg="+b(this.$b),"dywetco="+b(this.xb)].join("&")};_dywe.i.prototype.nb=function(b,c,d,e,k,h,i,a){var f=_dywe,l=this.xa(b);f.b==l?(l=new f.i.$(b,c,d,e,k,h,i,a),f.h(this.la,l)):(l.ob=c,l.bc=d,l.ac=e,l.Yb=k,l.ub=h,l.$b=i,l.xb=a);return l};
_dywe.i.prototype.xa=function(b){var c,d=this.la,e;for(e=0;e<d[_dywe.c];e++)c=b==d[e].v?d[e]:c;return c};
_dywe.gc=function(b){var c=this,d=_dywe;c.Ja=screen;c.qb=!self.screen&&self.java?java.awt.Toolkit.getDefaultToolkit():d.b;c.a=document;c.e=window;c.k=navigator;c.Ka="-";c.Sb="-";c.tb="-";c.Ob="-";c.Mb=1;c.Bb="-";c.xc=function(){var e;if(self.screen)c.Ka=c.Ja.width+"x"+c.Ja.height,c.Sb=c.Ja.colorDepth+"-bit";else if(c.qb)try{e=c.qb.getScreenSize(),c.Ka=e.width+"x"+e.height}catch(k){}c.Ob=d.T(c.k&&c.k.language?c.k.language:c.k&&c.k.browserLanguage?c.k.browserLanguage:"-");c.Mb=c.k&&c.k.javaEnabled()?
1:0;var h;if(b){var i,a;a="ShockwaveFlash";if((e=c.k?c.k.plugins:d.b)&&e[d.c]>0)for(i=0;i<e[d.c]&&!h;i++)a=e[i],d.P(a.name,"Shockwave Flash")&&(h=d.z(a.description,"Shockwave Flash ")[1]);else{a=a+"."+a;try{i=new ActiveXObject(a+".7"),h=i.GetVariable("$version")}catch(f){}if(!h)try{i=new ActiveXObject(a+".6"),h="WIN 6,0,21,0",i.AllowScriptAccess="always",h=i.GetVariable("$version")}catch(l){}if(!h)try{i=new ActiveXObject(a),h=i.GetVariable("$version")}catch(m){}h&&(h=d.z(d.z(h," ")[1],","),h=h[0]+
"."+h[1]+" r"+h[2])}h=h?h:"-"}else h="-";c.Bb=h;c.tb=d.d(c.a.characterSet?c.a.characterSet:c.a.charset?c.a.charset:"-")};c.Xc=function(){return"&"+["dywecs="+d.d(c.tb),"dywesr="+c.Ka,"dywesc="+c.Sb,"dyweul="+c.Ob,"dyweje="+c.Mb,"dywefl="+d.d(c.Bb)].join("&")}};
_dywe.n=function(b,c,d,e,k){function h(a){var b="",b=n(r(a,"://")[1]);m(b,"/")&&(b=r(b,"/")[0]);return b}var i=this,a=_dywe,f=a.q,l=a.b,m=a.P,p=a.C,n=a.T,r=a.z,j=a.c;i.a=c;i.f=b;i.Rb=d;i.ja=e;i.o=k;i.Fc=function(b){var c=i.Fb(),d=i.o;return new a.n.s(p(b,d.fb+"=","&"),p(b,d.ib+"=","&"),p(b,d.kb+"=","&"),i.ba(b,d.db,"(not set)"),i.ba(b,d.gb,"(not set)"),i.ba(b,d.jb,c&&!f(c.R)?a.J(c.R):l),i.ba(b,d.eb,l))};i.Ib=function(a){var b=h(a),c,d="";c=n(r(a,"://")[1]);m(c,"/")&&(c=r(c,"/")[1],m(c,"?")&&(d=r(c,
"?")[0]));c=d;return m(b,i.o.ab)&&(a=r(a,"?").join("&"),m(a,"&"+i.o.Gb+"=")&&c==i.o.Ic)?!0:!1};i.Fb=function(){var b,c=i.Rb,d,e,g=i.o.fa;if(!f(c)&&"0"!=c&&m(c,"://")&&!i.Ib(c)){b=h(c);for(d=0;d<g[j];d++)if(e=g[d],m(b,n(e.zb))&&(c=r(c,"?").join("&"),m(c,"&"+e.Nb+"=")))return b=r(c,"&"+e.Nb+"=")[1],m(b,"&")&&(b=r(b,"&")[0]),new a.n.s(l,e.zb,l,"(organic)","organic",b,l)}};i.ba=function(b,c,d){b=p(b,c+"=","&");return!f(b)?a.J(b):!f(d)?d:"-"};i.Nc=function(b){var c=i.o.ea,d=!1,f;if(b&&"organic"==b.da){b=
n(a.J(b.R));for(f=0;f<c[j];f++)d=d||n(c[f])==b}return d};i.Ec=function(){var b="",c="",b=i.Rb;if(!f(b)&&"0"!=b&&m(b,"://")&&!i.Ib(b))return b=n(r(b,"://")[1]),m(b,"/")&&(c=a.F(b,a.w(b,"/")),m(c,"?")&&(c=r(c,"?")[0]),b=r(b,"/")[0]),0==a.w(b,"www.")&&(b=a.F(b,4)),new a.n.s(l,b,l,"(referral)","referral",l,c)};i.sc=function(b){var c="";i.o.pa&&(c=a.Db(b),c=""!=c?c+"&":c);c+=b.search;return c};i.zc=function(){return new a.n.s(l,"(direct)",l,"(direct)","(none)",l,l)};i.Oc=function(b){var c=!1,d,f=i.o.ga;
if(b&&"referral"==b.da){b=n(a.d(b.ia));for(d=0;d<f[j];d++)c=c||m(b,n(f[d]))}return c};i.U=function(a){return l!=a&&a.Fa()};i.yc=function(b,c){var d="",e="-",g,j=0,q,w,h=i.f;if(!b)return"";w=i.a[a.m]?i.a[a.m]:"";d=i.sc(i.a.location);if(i.o.I&&b.Jb()&&(e=b.Ca(),!f(e)&&!m(e,";")))return b.Ra(),"";e=p(w,a.X+h+".",";");g=i.Fc(d);if(i.U(g)&&(d=p(d,i.o.hb+"=","&"),"1"==d&&!f(e)))return"";if(!i.U(g)&&(g=i.Fb(),!f(e)&&i.Nc(g)))return"";if(!i.U(g)&&c&&(g=i.Ec(),!f(e)&&i.Oc(g)))return"";i.U(g)||f(e)&&c&&(g=
i.zc());if(!i.U(g))return"";f(e)||(j=r(e,"."),q=new a.n.s,q.Cb(j.slice(4).join(".")),q=n(q.ka())==n(g.ka()),j=j[3]*1);return!q||c?(w=p(w,a.r+h+".",";"),q=w.lastIndexOf("."),w=q>9?a.F(w,q+1)*1:0,j++,b.Xb([h,i.ja,0==w?1:w,j,g.ka()].join(".")),b.Ra(),"&dywecn=1"):"&dywecr=1"}};_dywe.n.s=function(b,c,d,e,k,h,i){this.v=b;this.ia=c;this.ra=d;this.L=e;this.da=k;this.R=h;this.vb=i};
_dywe.n.s.prototype.ka=function(){var b=_dywe,c=[],d=[[b.Wa,this.v],[b.Ya,this.ia],[b.$a,this.ra],[b.Ua,this.L],[b.Xa,this.da],[b.Za,_dywe.d(this.R)],[b.Va,this.vb]],e,k;if(this.Fa())for(e=0;e<d[b.c];e++)b.q(d[e][1])||(k=d[e][1].split("+").join("%20"),k=k.split(" ").join("%20"),b.h(c,d[e][0]+k));return c.join("|")};_dywe.n.s.prototype.Fa=function(){var b=_dywe.q;return!(b(this.v)&&b(this.ia)&&b(this.ra))};
_dywe.n.s.prototype.Cb=function(b){var c=_dywe,d=function(d){return c.J(c.C(b,d,"|"))};this.v=d(c.Wa);this.ia=d(c.Ya);this.ra=d(c.$a);this.L=d(c.Ua);this.da=d(c.Xa);this.R=d(c.Za);this.vb=d(c.Va)};
_dywe.Z=function(){function b(a,b,c,d){k.b==h[a]&&(h[a]={});k.b==h[a][b]&&(h[a][b]=[]);h[a][b][c]=d}function c(a,b){if(k.b!=h[a]&&k.b!=h[a][b]){h[a][b]=k.b;var c=!0,d;for(d=0;d<i[k.c];d++)if(k.b!=h[a][i[d]]){c=!1;break}if(c)h[a]=k.b}}function d(b){var c="",d=!1,e,h;for(e=0;e<i[k.c];e++)if(h=b[i[e]],k.b!=h){d&&(c+=i[e]);for(var d=[],t=void 0,g=void 0,g=0;g<h[k.c];g++)if(k.b!=h[g]){t="";g!=n&&k.b==h[g-1]&&(t+=g.toString(),t+=m);for(var y=h[g],q="",w=void 0,A=void 0,B=void 0,w=0;w<y[k.c];w++)A=y.charAt(w),
B=p[A],q+=k.b!=B?B:A;t+=q;k.h(d,t)}h=a+d.join(l)+f;c+=h;d=!1}else d=!0;return c}var e=this,k=_dywe,h={},i=["k","v"],a="(",f=")",l="*",m="!",p={"'":"'0"};p[f]="'1";p[l]="'2";p[m]="'3";var n=1;e.Kc=function(a){return k.b!=h[a]};e.N=function(){var a=[],b;for(b in h)k.b!=h[b]&&k.h(a,b.toString()+d(h[b]));return a.join("")};e.Sc=function(a){if(a==k.b)return e.N();var b=[a.N()],c;for(c in h)k.b!=h[c]&&!a.Kc(c)&&k.h(b,c.toString()+d(h[c]));return b.join("")};e._setKey=function(a,c,d){if(typeof d!="string")return!1;
b(a,"k",c,d);return!0};e._setValue=function(a,c,d){if(typeof d!="number"&&(k.b==Number||!(d instanceof Number)))return!1;if(Math.round(d)!=d||d==NaN||d==Infinity)return!1;b(a,"v",c,d.toString());return!0};e._getKey=function(a,b){return k.b!=h[a]&&k.b!=h[a].k?h[a].k[b]:k.b};e._getValue=function(a,b){return k.b!=h[a]&&k.b!=h[a].v?h[a].v[b]:k.b};e._clearKey=function(a){c(a,"k")};e._clearValue=function(a){c(a,"v")}};
_dywe.ic=function(b,c){var d=this;d.jd=c;d.Pc=b;d._trackEvent=function(b,k,h){return c._trackEvent(d.Pc,b,k,h)}};
_dywe.kc=function(b){function c(){var a=g.g;return p(a,"www.google.")*p(a,".google.")*p(a,"google.")||"/"!=g.p||p(a,"google.org")>-1}function d(b,c,d){if(m(b)||m(c)||m(d))return"-";b=r(b,f.r+a.f+".",c);m(b)||(b=o(b,"."),b[5]=b[5]?b[5]*1+1:1,b[3]=b[4],b[4]=d,b=b.join("."));return b}function e(){return"file:"!=a.a[v].protocol&&c()}function k(a){if(!a||""==a)return"";for(;f.Lb(a.charAt(0));)a=n(a,1);for(;f.Lb(a.charAt(a[s]-1));)a=n(a,0,a[s]-1);return a}function h(a,b,c){m(a())||(b(f.J(a())),j(a(),";")||
c())}function i(b){var c,d=""!=b&&a.a[v].host!=b;if(d)for(c=0;c<g.B[s];c++)d=d&&p(f.T(b),f.T(g.B[c]))==-1;return d}var a=this,f=_dywe,l=f.b,m=f.q,p=f.w,n=f.F,r=f.C,j=f.P,o=f.z,v="location",s=f.c,t=l,g=new f.hc,y=!1;a.a=document;a.e=window;a.ja=Math.round((new Date).getTime()/1E3);a.H=b;a.yb=a.a.referrer;a.va=l;a.va2=l;a.j=l;a.A=l;a.M=!1;a.aa=l;a.rb="";a.l=l;a.Ab=l;a.f=l;a.u=l;a.Bc=function(){if(!g.g||""==g.g||"none"==g.g)return g.g="",1;if("auto"==g.g){var b=a.a.domain;"www."==n(b,0,4)&&(b=n(b,4));
g.g=b}g.g=f.T(g.g);return g.pb?f.t(g.g):1};a.tc=function(a,b){if(m(a))a="-";else{b+=g.p&&"/"!=g.p?g.p:"";var c=p(a,b),a=c>=0&&c<=8?"0":"["==a.charAt(0)&&"]"==a.charAt(a[s]-1)?"-":a}return a};a.tc2=function(a){m(a)&&(a="-");return a=f.d(a,!1)};a.Ia=function(b){var c="",d=a.a;c+=a.aa?a.aa.Xc():"";c+=g.qa?a.rb:"";c+=g.ta&&!m(d.title)?"&dywedt="+f.d(d.title):"";c+="&dywehid="+f.uc()+"&dywere="+a.va2+"&dywep="+a.Tc(b);return c};a.Tc=function(b){var c=a.a[v];return b=l!=b&&""!=b?f.d(b,!0):f.d(c.pathname+
c.search,!0)};a.$c=function(b){if(a.Q()){var c="";a.l!=l&&a.l.N().length>0&&(c+="&dywee="+f.d(a.l.N()));c+=a.Ia(b);t.O(c,a.H,a.a,a.f);t.O_pv(a.a,a.f);t.O_rv()}};a.qc=function(){var b=new f.Y(a.a,g);return b.Ha(a.f)?b.Wc():l};a._getLinkerUrl=function(b,c){var d=o(b,"#"),f=b,e=a.qc();if(e)if(c&&1>=d[s])f+="#"+e;else if(!c||1>=d[s])1>=d[s]?f+=(j(b,"?")?"&":"?")+e:f=d[0]+(j(b,"?")?"&":"?")+e+"#"+d[1];return f};a.Zb=function(){var b;if(a.A&&a.A[s]>=10&&!j(a.A,"="))a.u.Uc(a.A),a.u.cd(),f._gasoDomain=g.g,
f._gasoCPath=g.p,b=a.a.createElement("script"),b.type="text/javascript",b.id="_gasojs",b.src="https://www.google.com/analytics/reporting/overlay_js?gaso="+a.A+"&"+f.wa(),a.a.getElementsByTagName("head")[0].appendChild(b)};a.Jc=function(){var b=a.a[f.m],c=a.ja,e=a.u,i=a.f+"",k=a.e,n=k?k.gaGlobal:l,p,s=j(b,f.r+i+"."),t=j(b,f.u+"y"),y=j(b,f.W+i),D=j(b,f.ma+i),u,x=[],z="",C=!1,b=m(b)?"":b;g.I&&(p=f.Db(a.a[v]),g.pa&&!m(p)&&(z=p+"&"),z+=a.a[v].search,!m(z)&&j(z,f.r)&&(e.Rc(z),e.Jb()||e.pc(),u=e.ya()),h(e.Ba,
e.Wb,e.fc),h(e.Aa,e.Na,e.Qa));m(u)?s?!y||!D?(u=d(b,";",c),a.M=!0):(u=r(b,f.r+i+".",";"),x=o(r(b,f.W+i,";"),".")):(u=[i,f.Gc(),c,c,c,1].join("."),C=a.M=!0):m(e.K())||m(e.za())?(u=d(z,"&",c),a.M=!0):(x=o(e.K(),"."),i=x[0]);u=o(u,".");k&&n&&n.dh==i&&(u[4]=n.sid?n.sid:u[4],C&&(u[3]=n.sid?n.sid:u[4],n.vid&&(c=o(n.vid,"."),u[1]=c[0],u[2]=c[1])));e.Ub(u.join("."));x[0]=i;x[1]=x[1]?x[1]:0;x[2]=void 0!=x[2]?x[2]:g.Yc;x[3]=x[3]?x[3]:u[4];e.La(x.join("."));e.Vb(i);m(e.Hc())||e.Ma(e.t());e.dc();e.Pa();e.ec();
(t||!t&&j(b,"JSsUserInfo="))&&e.um()};a.Lc=function(){t=new f.jc(g)};a._initData=function(){var b;if(!y)a.Lc(),a.f=a.Bc(),a.u=new f.Y(a.a,g);e()&&a.Jc();if(!y){if(e()){a.va=a.tc(a.Ac(),a.a.domain);a.va2=a.tc2(a.Ac());if(g.sa)a.aa=new f.gc(g.ua),a.aa.xc();if(g.qa)b=new f.n(a.f,a.a,a.va,a.ja,g),a.rb=b.yc(a.u,a.M)}a.l=new f.Z;a.Ab=new f.Z;y=!0}f.Hb||a.Mc()};a._visitCode=function(){a._initData();var b=r(a.a[f.m],f.r+a.f+".",";"),b=o(b,".");return b[s]<4?"":b[1]};a._cookiePathCopy=function(b){a._initData();
a.u&&a.u.bd(a.f,b)};a.Mc=function(){var b=a.a[v].hash,b=b&&""!=b&&0==p(b,"#gaso=")?r(b,"gaso=","&"):r(a.a[f.m],f.Sa,";");if(b[s]>=10)a.A=b,a.e.addEventListener?a.e.addEventListener("load",a.Zb,!1):a.e.attachEvent("onload",a.Zb);f.Hb=!0};a.Q=function(){return a._visitCode()%1E4<g.ha*100};a.Vc=function(){var b,c,d=a.a.links;if(!g.Kb)b=a.a.domain,"www."==n(b,0,4)&&(b=n(b,4)),g.B.push("."+b);for(b=0;b<d[s]&&(g.Ga==-1||b<g.Ga);b++)if(c=d[b],i(c.host)&&!c.gatcOnclick)c.gatcOnclick=c.onclick?c.onclick:a.Qc,
c.onclick=function(b){var c=!this.target||this.target=="_self"||this.target=="_top"||this.target=="_parent",c=c&&!a.oc(b);a.ad(b,this,c);return c?!1:this.gatcOnclick?this.gatcOnclick(b):!0}};a.Qc=function(){};a._trackPageview=function(b){if(e())a._initData(),g.B&&a.Vc(),a.$c(b),a.M=!1};a._trackTrans=function(){var b=a.f,c=[],d,e,g;a._initData();if(a.j&&a.Q()){for(d=0;d<a.j.la[s];d++){e=a.j.la[d];f.h(c,e.S());for(g=0;g<e.ca[s];g++)f.h(c,e.ca[g].S())}for(d=0;d<c[s];d++)t.O(c[d],a.H,a.a,b,!0)}};a._setTrans=
function(){var b=a.a,c,d,e,b=b.getElementById?b.getElementById("dywetrans"):b.dyweform&&b.dyweform.dywetrans?b.dyweform.dywetrans:l;a._initData();if(b&&b.value){a.j=new f.i;e=o(b.value,"UTM:");g.G=!g.G||""==g.G?"|":g.G;for(b=0;b<e[s];b++){e[b]=k(e[b]);c=o(e[b],g.G);for(d=0;d<c[s];d++)c[d]=k(c[d]);"T"==c[0]?a._addTrans(c[1],c[2],c[3],c[4],c[5],c[6],c[7],c[8]):"I"==c[0]&&a._addItem(c[1],c[2],c[3],c[4],c[5],c[6])}}};a._addTrans=function(b,c,d,e,g,i,h,j){a.j=a.j?a.j:new f.i;return a.j.nb(b,c,d,e,g,i,
h,j)};a._addItem=function(b,c,d,e,g,i){var h;a.j=a.j?a.j:new f.i;(h=a.j.xa(b))||(h=a._addTrans(b,"","","","","","",""));h.mb(c,d,e,g,i)};a._setVar=function(b){if(b&&""!=b&&c()){a._initData();var d=new f.Y(a.a,g);d.Na(a.f+"."+f.d(b));d.Qa();a.Q()&&t.O("&dywet=var",a.H,a.a,a.f)}};a._link=function(b,c){if(g.I&&b)a._initData(),a.a[v].href=a._getLinkerUrl(b,c)};a._linkByPost=function(b,c){if(g.I&&b&&b.action)a._initData(),b.action=a._getLinkerUrl(b.action,c)};a._setXKey=function(b,c,d){a.l._setKey(b,c,
d)};a._setXValue=function(b,c,d){a.l._setValue(b,c,d)};a._getXKey=function(b,c){return a.l._getKey(b,c)};a._getXValue=function(b,c){return a.l.getValue(b,c)};a._clearXKey=function(b){a.l._clearKey(b)};a._clearXValue=function(b){a.l._clearValue(b)};a._createXObj=function(){a._initData();return new f.Z};a._sendXEvent=function(b){var c="";a._initData();a.Q()&&(c+="&dywet=event&dywee="+f.d(a.l.Sc(b))+a.Ia(),t.O(c,a.H,a.a,a.f,!1,!0))};a._sendXEventReqVacOk=function(b,c,d,e){var g="";a._initData();if(a.Q()){for(var i=
f.C("&"+a.a[v].search.substring(1),"VanMsg","&"),h=0;i!="-"&&i.indexOf("_")<0&&h<10;)i=f.J(i),h++;i.indexOf("_")>0&&(i=i.split("_")[1]);g+="&dywet=event&dywee="+f.d(a.l.Sc(b))+a.Ia()+"&jap="+d+"&jar="+c+"&jan="+e+(i?"&cityid="+i:"");t.O(g,a.H,a.a,a.f,!1,!0)}};a._createEventTracker=function(b){a._initData();return new f.ic(b,a)};a._trackEvent=function(b,c,d,e){var f=!0,i=a.Ab;l!=b&&l!=c&&""!=b&&""!=c?(i._clearKey(5),i._clearValue(5),f=i._setKey(5,1,b)?f:!1,f=i._setKey(5,2,c)?f:!1,f=l==d||i._setKey(5,
3,d)?f:!1,(f=l==e||i._setValue(5,1,e)?f:!1)&&a._sendXEvent(i)):f=!1;return f};a._trackEventReqVacOk=function(b,c,d,e,f,i,g){var h=!0,j=a.Ab;l!=b&&l!=c&&""!=b&&""!=c?(j._clearKey(5),j._clearValue(5),h=j._setKey(5,1,b)?h:!1,h=j._setKey(5,2,c)?h:!1,h=l==d||j._setKey(5,3,d)?h:!1,(h=l==e||j._setValue(5,1,e)?h:!1)&&a._sendXEventReqVacOk(j,f,i,g)):h=!1;return h};a.ad=function(b,c,d){a._initData();if(a.Q()){var e=new f.Z;e._setKey(6,1,c.href);t.O("&dywet=event&dywee="+f.d(e.N())+a.Ia(),a.H,a.a,a.f,!1,!0,
d?function(){a.rc(b,c)}:void 0)}};a.rc=function(b,c){if(!b)b=a.e.event;var d=!0;c.gatcOnclick&&(d=c.gatcOnclick(b));if(d||typeof d=="undefined")if(!c.target||c.target=="_self")a.e.location=c.href;else if(c.target=="_top")a.e.top.document.location=c.href;else if(c.target=="_parent")a.e.parent.document.location=c.href};a.oc=function(b){if(!b)b=a.e.event;var c=b.shiftKey||b.ctrlKey||b.altKey;c||b.modifiers&&a.e.Event&&(c=b.modifiers&a.e.Event.CONTROL_MASK||b.modifiers&a.e.Event.SHIFT_MASK||b.modifiers&
a.e.Event.ALT_MASK);return c};a._setDomainName=function(a){g.g=a};a.dd=function(){return g.g};a._addOrganic=function(a,b){f.h(g.fa,new f.cb(a,b))};a._clearOrganic=function(){g.fa=[]};a.hd=function(){return g.fa};a._addIgnoredOrganic=function(a){f.h(g.ea,a)};a._clearIgnoredOrganic=function(){g.ea=[]};a.ed=function(){return g.ea};a._addIgnoredRef=function(a){f.h(g.ga,a)};a._clearIgnoredRef=function(){g.ga=[]};a.fd=function(){return g.ga};a._setAllowHash=function(a){g.pb=a?1:0};a._setCampaignTrack=function(a){g.qa=
a?1:0};a._setClientInfo=function(a){g.sa=a?1:0};a._getClientInfo=function(){return g.sa};a._setCookiePath=function(a){g.p=a};a._setTransactionDelim=function(a){g.G=a};a._setCookieTimeout=function(a){g.wb=a};a._setDetectFlash=function(a){g.ua=a?1:0};a._getDetectFlash=function(){return g.ua};a._setDetectTitle=function(a){g.ta=a?1:0};a._getDetectTitle=function(){return g.ta};a._setLocalGifPath=function(a){g.Da=a};a._getLocalGifPath=function(){return g.Da};a._setLocalServerMode=function(){g.D=0};a._setRemoteServerMode=
function(){g.D=1};a._setLocalRemoteServerMode=function(){g.D=2};a.gd=function(){return g.D};a._getServiceMode=function(){return g.D};a._setSampleRate=function(a){g.ha=a};a._setSessionTimeout=function(a){g.Tb=a};a._setAllowLinker=function(a){g.I=a?1:0};a._setAllowAnchor=function(a){g.pa=a?1:0};a._setCampNameKey=function(a){g.db=a};a._setCampContentKey=function(a){g.eb=a};a._setCampIdKey=function(a){g.fb=a};a._setCampMediumKey=function(a){g.gb=a};a._setCampNOKey=function(a){g.hb=a};a._setCampSourceKey=
function(a){g.ib=a};a._setCampTermKey=function(a){g.jb=a};a._setCampCIdKey=function(a){g.kb=a};a._getAccount=function(){return a.H};a._setAccount=function(b){a.H=b};a._getVersion=function(){return _dywe.lb};a.kd=function(a){g.B=[];if(a)g.B=a};a.md=function(a){g.Kb=a};a.ld=function(a){g.Ga=a};a._setReferrerOverride=function(b){a.yb=b};a.Ac=function(){return a.yb}};_dywe._getTracker=function(b){return new _dywe.kc(b)};
(function(){var b=new function(){var b=[];this.Dc=function(a){b[a]=!0};this.Vb=function(){for(var a=[],c=0;c<b.length;c++)b[c]&&(a[Math.floor(c/6)]^=1<<c%6);for(c=0;c<a.length;c++)a[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]||0);return a.join("")}},c=function(c){return function(a,d,e){c[a]=function(){b.Dc(d);return e.apply(c,arguments)};return e}},d=new function(){var e=this,a=c(e);e.Qa=!1;e.Db={};e.Rc=0;e._gasoDomain=void 0;e._gasoCPath=void 0;e.sd=a("_getTracker",
0,function(a,b){return e.Y(a,void 0,b)});e.Y=a("_createTracker",55,function(a,c,e){c&&b.Dc(23);e&&b.Dc(67);c==void 0&&(c="~"+d.Rc++);return d.Db[c]=_dywe._getTracker(a)});e.Xa=a("_getTrackerByName",51,function(a){a=a||"";return d.Db[a]||d.Y(void 0,a)});e.Tc=function(){var a=window._gaUserPrefs;return a&&a.ioo&&a.ioo()};e.Zc=a("_anonymizeIp",16,function(){e.Qa=!0})},e=window._dywet;e&&typeof e._getTracker=="function"?d=e:window._dywet=d;var k=new function(){c(this);this.push=function(){b.Dc(5);for(var c=
arguments,a=0,e=0;e<c.length;e++)try{if(typeof c[e]==="function")c[e]();else{var h="",m=c[e][0],p=m.lastIndexOf(".");p>0&&(h=m.substring(0,p),m=m.substring(p+1));var n=h=="_dywe"?d:h=="_dyweq"?k:d.Xa(h);n[m].apply(n,c[e].slice(1))}}catch(r){a++}return a}};a:{var e=window._dyweq,h=!1;if(e&&typeof e.push=="function"&&(h=Object.prototype.toString.call(Object(e))=="[object Array]",!h))break a;window._dyweq=k;h&&k.push.apply(k,e)}})();
function getCookie(b){var c=document.cookie;b+="=";var d=c.indexOf("; "+b);if(d==-1){if(d=c.indexOf(b),d!=0)return null}else d+=2;var e=document.cookie.indexOf(";",d);if(e==-1)e=c.length;return c.substring(d+b.length,e).replace(/\+/g," ")}
var sidmap={"www.baidu.com":"121114583","www.google.com":"121114584","www.g.cn":"121114584","www.google.cn":"121114584","www.google.com.hk":"121114584","www.yahoo.cn":"121114585","www.yahoo.com.cn":"121114585","www.yahoo.com":"121114585","cn.yahoo.com":"121114585","www.youdao.com":"121114586","www.sogou.com":"121114587","www.soso.com":"121114588","www.bing.com":"121114589","www.hao123.com":"121114603","www.2345.com":"121114485","www.9991.com":"121114485","www.7322.com":"121114485","www.6781.com":"121114485",
"www.i2255.com":"121114485","www.m4455.com":"121114485","www.my133.net":"121114485","www.pp2345.com":"121114485","www.dh818.com":"121114485","www.537.com":"121114485","www.cc62.com":"121114485","www.k986.com":"121114485","www.yes115.com":"121114485","www.asp51.com":"121114485","www.3567.com":"121114485","www.2487.com":"121114485","www.g3456.com":"121114485","www.y7749.com":"121114485","hao.91ok.com":"121114485","hao.i3636.com":"121114485","www.7345.com":"121114485","www.71314.com":"121114485","www.4453.com":"121114485",
"www.tt5000.com":"121114485","www.4585.com":"121114485","www.fa3000.com":"121114485","www.4312.com":"121114485","www.yy5000.com":"121114485","www.7556.com":"121114485","www.skywz.com":"121114485","www.94135.com":"121114485","www.1155y.com":"121114485","www.u1155.com":"121114485","www.1155k.com":"121114485","www.hao111.com":"121114485","www.5500w.com":"121114485","www.p1155.com":"121114485","www.wealink.com":"121122243","www.so.com":"121122244","so.360.cn":"121122244"},ref=document.referrer,ref_domain=ref.substring(7),ref_domain=ref_domain.substring(0,ref_domain.indexOf("/")>
-1?ref_domain.indexOf("/"):ref_domain.length);if(ref_domain in sidmap&&getCookie("urlfrom")==null)document.cookie="urlfrom="+sidmap[ref_domain]+";path=/;domain=zhaopin.com",document.cookie="adfcid="+ref_domain.replace(/\./gi,"")+";path=/;domain=zhaopin.com",document.cookie="adfbid=0;path=/;domain=zhaopin.com",(new Image).src="http://cnt.zhaopin.com/market/adpv.html?sid="+sidmap[ref_domain]+"&site="+ref_domain.replace(/\./gi,"")+"&smid=&random="+Math.random();
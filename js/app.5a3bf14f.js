(function(e){function t(t){for(var a,o,s=t[0],i=t[1],l=t[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);p&&p(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},r={app:0},c=[];function s(e){return i.p+"js/"+({company:"company",info:"info"}[e]||e)+"."+{company:"30c3b547",info:"c268288e"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={company:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({company:"company",info:"info"}[e]||e)+"."+{company:"9726b3c0",info:"31d6cfe0"}[e]+".css",r=i.p+a,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var l=c[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete o[e],p.parentNode.removeChild(p),n(c)},p.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(p)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"3e6e":function(e,t,n){"use strict";n("f2f5")},4133:function(e,t,n){},"5e04":function(e,t,n){"use strict";n("4133")},"6a2a":function(e,t,n){},"807f":function(e){e.exports=JSON.parse('{"name":"lucy","email":"loveyou_06@naver.com","github":"https://github.com/lucy-y","location":"Seoul, Korea","company":[{"order":4,"name":"엔픽셀","startDate":"2021.05","endDate":"재직중","desc":"그랑사가 개발사에서 운영툴 관련 업무를 담당하였습니다.","logo":"npixel.png","project":[{"name":"그랑사가 운영툴 개발(Frontend)","desc":"GMTool, Event, QATool, DataTemplate, Globalization, Forum 등 개발","skill":["angular2","typescript","node","Git","Jira","Confluence","Slack"]},{"name":"그랑사가 운영툴 개발(Backend)","desc":"Web, Forum, GameData Template Tool 개발","skill":["Java","Spring Boot","MSSQL","MariaDB","ES","Redis","scouter","Jenkins","Git","Jira","Confluence","Slack"]},{"name":"그랑사가 일본 CS 개발(Backend)","desc":"일본 고객센터 API 개발(FAQ, CS 접수)","skill":["Java","Spring Boot","MSSQL","Jenkins","Git","Jira","Confluence","Slack"]}]},{"order":3,"name":"카카오게임즈","startDate":"2021.01","endDate":"2021.04","desc":"앨리스크로젯 이벤트 페이지 개발 및 운영을 진행하였습니다.","logo":"kakaogames.png","project":[{"name":"앨리스크로젯 이벤트 페이지 개발 및 운영","desc":"mbti 이벤트 페이지 개발 및 운영 진행","skill":["react","AWS S3","AWS Lambda","Google Analytics","MySQL","Git","Spring boot"]}]},{"order":2,"name":"원더피플","startDate":"2020.01","endDate":"2021.01","desc":"RPG, FPS PC운영툴 개발을 담당하였습니다.","logo":"wonderpeople.png","project":[{"name":"운영툴 B 개발","desc":"FPS 게임 운영툴 개발","skill":["spring","bootstrap","MySQL","Apache Cassandra","BigQuery","Git","Vue.js"]},{"name":"운영툴 A 개발","desc":"RPG 운영툴 개발","skill":["spring","bootstrap","MySQL","Redis","Jenkins","Git","Docker"]}]},{"order":1,"name":"IGS","startDate":"2017.07","endDate":"2019.12","desc":"넷마블의 자회사이며 전사 게임 운영지원툴 및 구글플레이 크롤러 개발 및 CS 프로젝트, 성능QA 업무 등을 담당하였습니다.","logo":"igs.png","project":[{"name":"TOP","desc":"커뮤니티 운영툴","skill":["Spring boot","MySQL","Python3","Vue.js","Node.js","Bootstrap","Nginx","Tomcat"]},{"name":"CS(고객센터)","desc":"고객센터 개설 작업, 데이터 추출 작업, 외부 개발사(천백십일, 넷마블온라인스토어) 연동 API 개발, 웹 방화벽 설정 작업 등을 진행하였습니다.","skill":["Spring Boot","MySQL","Python3","Flask","nginx","tomcat"]},{"name":"성능QA","desc":"모바일게임 성능QA 진행","skill":["C++","pCenter","LoadRunner"]},{"name":"GSP","desc":"Global Service Portal: 게임 글로벌 서비스 플랫폼","skill":["Spring Boot","thymeleaf","MySQL","d3","highchart","nginx","tomcat"]},{"name":"IGSUS","desc":"크롤링 및 형태소파악 솔루션","skill":["Java","Spring Boot","Javascript","d3","highchart","python3","MySQL","Nginx","Tomcat"]},{"name":"CM (v2.0)","desc":"커뮤니티 분석 운영툴","skill":["Spring boot","Vue.js","MySQL","Bootstrap","Nginx","Tomcat"]},{"name":"CM (v1.0)","desc":"커뮤니티 분석 운영툴","skill":["php","MySQL","Bootstrap","Nginx","Tomcat"]}]}]}')},9703:function(e,t,n){"use strict";n.r(t);var a=n("7a23");const o={class:"not-found"},r=Object(a["j"])("h1",null,"404",-1),c=[r];function s(e,t,n,r,s,i){return Object(a["D"])(),Object(a["i"])("div",o,c)}var i=n("9ab4"),l=n("ce1f");let u=class extends l["b"]{};u=Object(i["a"])([Object(l["a"])({components:{}})],u);var d=u,p=n("6b0d"),b=n.n(p);const f=b()(d,[["render",s]]);t["default"]=f},cd49:function(e,t,n){"use strict";n.r(t);var a=n("7a23");function o(e,t){const n=Object(a["M"])("router-view");return Object(a["D"])(),Object(a["g"])(n)}n("5e04");var r=n("6b0d"),c=n.n(r);const s={},i=c()(s,[["render",o]]);var l=i,u=n("9483");Object(u["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var d=n("6605");const p={class:"wrapper"},b={class:"flex-shrink-0"},f={class:"container"};function m(e,t,n,o,r,c){const s=Object(a["M"])("dashboard-navbar"),i=Object(a["M"])("router-view"),l=Object(a["M"])("content-footer");return Object(a["D"])(),Object(a["i"])("div",p,[Object(a["m"])(s),Object(a["j"])("main",b,[Object(a["j"])("div",f,[Object(a["m"])(i)])]),Object(a["m"])(l)])}var v=n("9ab4"),j=n("ce1f");const g={class:"navbar navbar-expand-md fixed-top navbar-light bg-light"},h={class:"container-fluid"},O=Object(a["j"])("a",{class:"navbar-brand",href:"/"},"Lucy",-1),y=Object(a["j"])("button",{class:"navbar-toggler collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["j"])("span",{class:"navbar-toggler-icon"})],-1),S={class:"navbar-collapse collapse",id:"navbarCollapse",style:{}},k={class:"navbar-nav me-auto mb-2 mb-md-0"},w={class:"nav-item"},C=Object(a["l"])("Info"),M={class:"nav-item"},x=Object(a["l"])("Company");function P(e,t,n,o,r,c){const s=Object(a["M"])("router-link");return Object(a["D"])(),Object(a["i"])("div",null,[Object(a["j"])("header",null,[Object(a["j"])("nav",g,[Object(a["j"])("div",h,[O,y,Object(a["j"])("div",S,[Object(a["j"])("ul",k,[Object(a["j"])("li",w,[Object(a["m"])(s,{class:Object(a["v"])(["nav-link",[{active:"/"==e.url}]]),onClick:t[0]||(t[0]=t=>e.clickMenu("/")),to:"/"},{default:Object(a["X"])(()=>[C]),_:1},8,["class"])]),Object(a["j"])("li",M,[Object(a["m"])(s,{class:Object(a["v"])(["nav-link",[{active:"/company"==e.url}]]),onClick:t[1]||(t[1]=t=>e.clickMenu("/company")),to:"/company"},{default:Object(a["X"])(()=>[x]),_:1},8,["class"])])])])])])])])}let D=class extends j["b"]{constructor(){super(...arguments),this.url="/"}clickMenu(e){this.url=e}};D=Object(v["a"])([Object(j["a"])({components:{}})],D);var A=D;const L=c()(A,[["render",P]]);var Q=L;const T=e=>(Object(a["H"])("data-v-71cc0e2c"),e=e(),Object(a["E"])(),e),B={class:"footer mt-auto py-3 bg-light bg-gradient"},_={class:"container"},G={class:"text-muted"},N=T(()=>Object(a["j"])("a",{href:"https://github.com/lucy-y",target:"_blank"},"Lucy",-1));function E(e,t,n,o,r,c){return Object(a["D"])(),Object(a["i"])("footer",B,[Object(a["j"])("div",_,[Object(a["j"])("span",G,[Object(a["l"])("© "+Object(a["Q"])(e.year)+" ",1),N])])])}let J=class extends j["b"]{};J=Object(v["a"])([Object(j["a"])({components:{},data(){return{year:(new Date).getFullYear()}}})],J);var F=J;n("d487");const I=c()(F,[["render",E],["__scopeId","data-v-71cc0e2c"]]);var R=I;let q=class extends j["b"]{};q=Object(v["a"])([Object(j["a"])({components:{DashboardNavbar:Q,ContentFooter:R}})],q);var V=q;n("3e6e");const W=c()(V,[["render",m],["__scopeId","data-v-53458e28"]]);var H=W;const K={class:"wrapper"};function U(e,t,n,o,r,c){const s=Object(a["M"])("router-view");return Object(a["D"])(),Object(a["i"])("div",K,[Object(a["j"])("div",null,[Object(a["m"])(s)])])}let X=class extends j["b"]{};X=Object(v["a"])([Object(j["a"])({components:{}})],X);var z=X;const Y=c()(z,[["render",U]]);var Z=Y,$=n("9703");const ee=[{path:"/",redirect:"info",component:H,children:[{path:"/info",name:"Info",component:()=>n.e("info").then(n.bind(null,"2469"))},{path:"/company",name:"Company",component:()=>n.e("company").then(n.bind(null,"8799"))}]},{path:"/",redirect:"404",component:Z,children:[{path:"/404",name:"NotPage",component:()=>Promise.resolve().then(n.bind(null,"9703"))},{path:"*",component:$["default"]}]}],te=Object(d["a"])({history:Object(d["b"])("/"),routes:ee});var ne=te,ae=n("5502"),oe=n("807f"),re=Object(ae["a"])({state:{route:"/",data:oe},mutations:{},actions:{},modules:{}}),ce=n("b80d");n("f9e3"),n("1a26");Object(a["f"])(l).use(re).use(ne).use(ce["a"]).mount("#app")},d487:function(e,t,n){"use strict";n("6a2a")},f2f5:function(e,t,n){}});
//# sourceMappingURL=app.5a3bf14f.js.map
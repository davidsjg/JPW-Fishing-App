(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{104:function(e,t,n){e.exports={colClass:"Col_colClass__1Ymxe"}},110:function(e,t,n){e.exports={dropContainer:"LakeContainer_dropContainer__WgJJR",ddBar:"LakeContainer_ddBar__3M7db","nav-dropdown":"LakeContainer_nav-dropdown__kVsQF",dropdown:"LakeContainer_dropdown__tb0U8",colClass:"LakeContainer_colClass__Jbk4Y"}},113:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(31),r=n.n(s),i=(n(84),n(2)),j=(n(85),n(76)),l=n(9),o=n(3),d=n(60),b=n.n(d),h=function(){return b.a.get("/api/lakes")},O=function(){return b.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=39.8917&lon=-105.7631&exclude=minutely,hourly,alerts&appid=9a8ffa538213bc6a16a74f0af587d5fe")},x=(n(57),n(20)),u=n(25),m=n(28),p=(n(104),n(0));var f=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return e.cname,Object(p.jsx)("div",{className:"".concat(e.cname," ").concat(t),children:e.children})},g=n.p+"static/media/JPWlogo.56bcda57.png",k=n(38),v=n.n(k);function _(e){return Object(p.jsx)("div",{className:"".concat(e.cname," row").concat(e.fluid?"-fluid":""),children:e.children})}var L=n(36);function C(){return Object(p.jsx)(x.a,{className:v.a.navBorder,children:Object(p.jsx)(m.a,{children:Object(p.jsxs)(_,{children:[Object(p.jsxs)(f,{size:"md-4",children:[Object(p.jsx)(x.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(x.a.Collapse,{children:Object(p.jsxs)(x.a.Collapse,{children:[Object(p.jsx)(u.a.Link,{className:v.a.dividerLink,href:"/",children:"Home"}),Object(p.jsx)(u.a.Link,{className:v.a.navColor,href:"/lakes",children:"Lakes"})]})})]}),Object(p.jsx)(f,{size:"md-4",children:Object(p.jsx)(L.a,{src:g,fluid:!0,rounded:!0})}),Object(p.jsx)(f,{size:"md-4",children:Object(p.jsxs)(x.a.Collapse,{className:"justify-content-end",children:[Object(p.jsx)(u.a.Link,{className:v.a.navColor,href:"/table",children:"Data"}),Object(p.jsx)(u.a.Link,{onClick:function(){return window.open("https://cpw.state.co.us/thingstodo/Fishery%20Survey%20Summaries/JamesPeakWildernessLakes.pdf","_blank")},className:v.a.dividerLink2,children:"JPW Info"})]})})]})})})}var w=n(72),y=n.n(w);var N=function(e){return e.img,Object(p.jsx)("div",{className:"".concat(e.mainContain," container").concat(e.fluid?"-fluid":""),children:e.children})},B=n(7),S=n(24),z=n(61),A=n.n(z),D=a.a.createContext({lake:{},fish:[],lakeNames:[],selectedLake:{}});function F(e){var t,n=Object(c.useContext)(D),a=(n.lake,n.fish,n.lakeNames);n.selectedLake;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(S.a,{className:A.a.center2,children:[Object(p.jsx)(S.a.Toggle,(t={style:{width:"100%"},variant:"secondary",id:"dropdown-basic"},Object(B.a)(t,"style",{backgroundColor:"white",color:"black",width:"100%"}),Object(B.a)(t,"children","SELECT A LAKE!"),t)),Object(p.jsx)(S.a.Menu,{style:{width:"100%"},className:A.a.ddBar,children:a.map((function(e,t){return Object(p.jsx)(S.a.Item,{eventKey:e,href:"/"+e,children:e},t)}))})]})})}var T=n(62),E=n.n(T);function R(e){var t;return Object(p.jsx)("div",(t={className:"card text-center"},Object(B.a)(t,"className",E.a.myCard),Object(B.a)(t,"children",Object(p.jsx)(F,{props:e,id:E.a.ddBar1})),t))}var I=a.a.createContext({selectedLake:{},fish:[],lake:{},lakeNames:[],weather:{},forecast:[]}),J=n(74),W=n.n(J);function P(e){var t=Object(c.useContext)(I),n=(t.lake,t.fish,t.selectedLake);return console.log(n),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(L.a,{src:n.img,rounded:!0,className:W.a.imgContain})})}function H(){return Object(p.jsx)("br",{})}n(110);var K=n(12),M=n(75),q=n.n(M);function Q(){return Object(p.jsx)(K.a,{className:q.a.homeCard,style:{width:"18rem"},children:Object(p.jsxs)(K.a.Body,{children:[Object(p.jsx)(K.a.Title,{children:"JAMES PEAK WILDNERESS LAKE FINDER"}),Object(p.jsx)(K.a.Text,{children:"Please select a lake from the dropdown below!"})]})})}function U(e){return Object(p.jsxs)(N,{mainContain:"mainContain",children:[Object(p.jsx)(m.a,{children:Object(p.jsxs)(_,{cname:"justify-content-md-center",children:[Object(p.jsx)(f,{size:"md-3"}),Object(p.jsx)(f,{size:"md-6",cname:"align-content-center",children:Object(p.jsx)(Q,{})}),Object(p.jsx)(f,{size:"md-3"})]})}),Object(p.jsxs)(_,{children:[Object(p.jsx)(f,{size:"md-3"}),Object(p.jsx)(f,{size:"md-6",children:Object(p.jsx)(R,{props:e})}),Object(p.jsx)(f,{size:"md-3"})]}),Object(p.jsxs)(_,{children:[Object(p.jsx)(f,{size:"md-3"}),Object(p.jsx)(f,{size:"md-6"}),Object(p.jsx)(f,{size:"md-3"})]})]})}var Y=function(e){var t=Object(c.useState)({lake:{},fish:["Cutthroat"],lakeNames:["Heart"],selectedLake:{}}),n=Object(o.a)(t,2),a=n[0],s=n[1];return Object(c.useEffect)((function(){h().then((function(e){var t=e.data[0].fish,n=[],c=e.data[0];e.data.map((function(e){n.push(e.lake)})),s({lake:e,fish:t,lakeNames:n,selectedLake:c})})).catch((function(e){return console.log(e)}))}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(C,{}),Object(p.jsxs)("div",{className:y.a.homeContain,children:[Object(p.jsx)(D.Provider,{value:a,children:Object(p.jsx)(U,{setFishArray:function(e,t){}})}),Object(p.jsx)(H,{}),Object(p.jsx)(H,{}),Object(p.jsx)(H,{}),Object(p.jsx)(H,{}),Object(p.jsx)(H,{}),Object(p.jsx)(H,{}),Object(p.jsx)(H,{}),Object(p.jsx)(H,{}),Object(p.jsx)(H,{}),Object(p.jsx)(H,{}),Object(p.jsx)(H,{}),Object(p.jsx)(H,{}),Object(p.jsx)(H,{}),Object(p.jsx)(H,{}),Object(p.jsx)(H,{}),Object(p.jsx)(H,{}),Object(p.jsx)(H,{}),Object(p.jsx)(H,{})]})]})};var V=n(33);function X(e){var t,n=Object(c.useContext)(I);n.lake,n.fish,n.lakeNames,n.selectedLake,n.LakesArray;return Object(p.jsxs)(K.a,(t={style:{width:"18rem"}},Object(B.a)(t,"style",{justifyContent:"center"}),Object(B.a)(t,"style",{marginBottom:5}),Object(B.a)(t,"children",[Object(p.jsx)(K.a.Img,{variant:"top",src:e.props.img}),Object(p.jsxs)(K.a.Body,{style:{backgroundColor:"moccasin",textAlign:"center"},children:[Object(p.jsx)(K.a.Title,{children:e.props.lake}),Object(p.jsx)(K.a.Text,{}),Object(p.jsx)(V.a,{href:"/"+e.props.lake,variant:"secondary",children:"View Lake"})]})]),t))}var Z=n.p+"static/media/JPWlogo.56bcda57.png",G=n(39),$=n.n(G),ee=n(63),te=n.n(ee);function ne(e){var t=Object(c.useContext)(I),n=(t.lake,t.fish,t.lakeNames);t.selectedLake;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(S.a,{className:te.a.center1,style:{marginTop:1},children:[Object(p.jsx)(S.a.Toggle,{style:{width:"100%"},variant:"secondary",id:"dropdown-basic",children:"SELECT A LAKE!"}),Object(p.jsx)(S.a.Menu,{style:{width:"100%"},className:te.a.ddBar,children:n.map((function(e,t){return Object(p.jsx)(S.a.Item,{eventKey:e,href:"/"+e,children:e},t)}))})]})})}function ce(){return Object(p.jsx)(x.a,{className:$.a.navBorder,children:Object(p.jsx)(m.a,{children:Object(p.jsxs)(_,{children:[Object(p.jsxs)(f,{size:"md-4",children:[Object(p.jsx)(x.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(x.a.Collapse,{children:Object(p.jsxs)(x.a.Collapse,{children:[Object(p.jsx)(u.a.Link,{className:$.a.dividerLink,href:"/",children:"Home"}),Object(p.jsx)(u.a.Link,{className:$.a.navColor,href:"/lakes",children:"Lakes"})]})})]}),Object(p.jsxs)(f,{size:"md-4",children:[Object(p.jsx)(L.a,{src:Z,fluid:!0,rounded:!0}),Object(p.jsx)(ne,{})]}),Object(p.jsx)(f,{size:"md-4",children:Object(p.jsxs)(x.a.Collapse,{className:"justify-content-end",children:[Object(p.jsx)(u.a.Link,{className:$.a.navColor,href:"/table",children:"Data"}),Object(p.jsx)(u.a.Link,{onClick:function(){return window.open("https://cpw.state.co.us/thingstodo/Fishery%20Survey%20Summaries/JamesPeakWildernessLakes.pdf","_blank")},className:$.a.dividerLink2,children:"JPW Info"})]})})]})})})}function ae(){var e,t,n,a=Object(c.useState)({}),s=Object(o.a)(a,2),r=(s[0],s[1]),i=Object(c.useState)([]),j=Object(o.a)(i,2),l=(j[0],j[1],Object(c.useState)([])),d=Object(o.a)(l,2),b=(d[0],d[1]),O=Object(c.useState)({}),x=Object(o.a)(O,2),u=(x[0],x[1]),m=Object(c.useState)([]),g=Object(o.a)(m,2),k=g[0],v=g[1],L=[];return Object(c.useEffect)((function(){!function(){var c=[];h().then((function(a){u({lake:a}),console.log(a),n=a.data.filter((function(e){return e.lake===t})),e=n[0],console.log(n[0]),r(e),a.data.map((function(e){c.push(e.lake)})),a.data.map((function(e){L.push(e)})),v(L),b(c)})).catch((function(e){return console.log(e)}))}()}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(ce,{}),Object(p.jsx)(N,{children:Object(p.jsx)(_,{children:k.map((function(e,t){var n;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(f,(n={size:"md-4",style:{justifyContent:"center"}},Object(B.a)(n,"style",{display:"flex"}),Object(B.a)(n,"children",Object(p.jsx)(X,{props:e},e)),n),e.id)})}))})})]})}var se=function(e){return Object(p.jsx)("div",{className:"container".concat(e.fluid?"-fluid":""),children:e.children})},re=n(37);function ie(e){var t,n=Object(c.useContext)(I),a=(n.lake,n.fish,n.selectedLake);n.lakeNames;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(K.a,(t={style:{width:"18rem"}},Object(B.a)(t,"style",{marginTop:5}),Object(B.a)(t,"children",[Object(p.jsx)(K.a.Img,{variant:"top",src:"http://westernnativetrout.org/wp-content/uploads/2019/07/greenback-cutthroat.jpg"}),Object(p.jsx)(re.a,{bordered:!0,children:Object(p.jsxs)("tbody",{style:{fontSize:13},children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Number of Cutthroat Trout:"}),Object(p.jsx)("td",{style:{textAlign:"center"},children:a.numCuts})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Size Range:"}),Object(p.jsx)("td",{style:{textAlign:"center"},children:a.cutRange})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Average Size:"}),Object(p.jsx)("td",{style:{textAlign:"center"},children:a.cutAvgLength})]})]})})]),t))})}function je(e){var t,n=Object(c.useContext)(I),a=(n.lake,n.fish,n.selectedLake);n.lakeNames;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(K.a,(t={style:{width:"18rem"}},Object(B.a)(t,"style",{marginTop:5}),Object(B.a)(t,"children",[Object(p.jsx)(K.a.Img,{variant:"top",src:"https://www.pourvoiries.com/wp-content/uploads/2010/11/OmbleFontaine.jpg"}),Object(p.jsx)(re.a,{bordered:!0,children:Object(p.jsxs)("tbody",{style:{fontSize:13},children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Number of Brook Trout:"}),Object(p.jsx)("td",{style:{textAlign:"center"},children:a.numBrooks})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Size Range:"}),Object(p.jsx)("td",{style:{textAlign:"center"},children:a.brkRange})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Average Size:"}),Object(p.jsx)("td",{style:{textAlign:"center"},children:a.brkAvgLength})]})]})})]),t))})}var le=n(26),oe=n.n(le);function de(e){var t,n=Object(c.useState)({}),a=Object(o.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)([]),j=Object(o.a)(i,2),l=j[0],d=(j[1],Object(c.useState)([])),b=Object(o.a)(d,2),x=b[0],u=b[1],m=Object(c.useState)({}),g=Object(o.a)(m,2),k=g[0],v=g[1],L=Object(c.useState)({}),C=Object(o.a)(L,2),w=C[0],y=C[1],B=Object(c.useState)([]),S=Object(o.a)(B,2),z=S[0],A=S[1],D=Object(c.useState)(),F=Object(o.a)(D,2),T=F[0],E=F[1],R=Object(c.useState)(""),J=Object(o.a)(R,2),W=J[0],K=J[1],M=Object(c.useState)(""),q=Object(o.a)(M,2),Q=q[0],U=q[1],Y=[];console.log("process.env.node_env below"),console.log("production"),Object(c.useEffect)((function(){!function(){var e=[];h().then((function(n){v({lake:n}),X=n.data.filter((function(e){return e.lake===ne})),t=X[0],r(t),n.data.map((function(t){e.push(t.lake)})),u(e)})).catch((function(e){return console.log(e)}))}(),function(){var e,t;O().then((function(n){var c,a;y({data:n}),n.data.daily.map((function(e){Y.push(e)})),A(Y),e=n.data.daily[0].wind_speed,E(e),t=n.data.daily[0].weather[0].main,U(t),c=n.data.daily[0].wind_deg,a=n.data.daily[0].wind_speed,E(a.toFixed(0)),K(c>270?"NW":c<270&&c>180?"SW":c>180&&c>90?"SE":"NE")}))}()}),[]);var X,Z,G,$,ee,te,ne=e.match.params.lake;return z.length>0&&(G="http://openweathermap.org/img/w/".concat(z[0].weather[0].icon,".png")),z.length>0&&console.log(G),z.length>0&&($="http://openweathermap.org/img/w/".concat(z[1].weather[0].icon,".png")),z.length>0&&console.log(G),z.length>0&&(ee=z[0].temp.day),z.length>0&&console.log(ee),z.length>0&&void 0!==ee&&(te=1.8*(ee-273)+32),"undefined"!==typeof Z?Z=z[0].weather[0].icon:console.log(),console.log("wind direction ="+W),console.log("wind speed ="+T),Object(p.jsxs)(I.Provider,{value:{selectedLake:s,lake:k,fish:l,lakeNames:x,weather:w,forecast:z,windSpeed:T,windDirection:W},children:[Object(p.jsx)(ce,{}),Object(p.jsxs)(N,{children:[Object(p.jsxs)(_,{cname:"topRow",children:[Object(p.jsx)(f,{size:"md-3",cname:"align-content-center",children:Object(p.jsxs)("span",{className:oe.a.aBorder,children:[Object(p.jsxs)("span",{className:oe.a.bigDisp,children:["Survey Year: ",s.year]}),Object(p.jsx)("br",{})]})}),Object(p.jsx)(f,{size:"md-6",cname:"lakeDataDisp",children:Object(p.jsxs)("span",{className:oe.a.aBorder,children:[Object(p.jsx)("span",{className:oe.a.bigDisp1,children:s.lake}),Object(p.jsx)("br",{})]})}),Object(p.jsx)(f,{size:"md-3",children:Object(p.jsxs)("span",{className:oe.a.aBorder,style:{float:"right"},children:[Object(p.jsxs)("span",{className:oe.a.bigDisp,children:["Acres: ",s.acres]}),Object(p.jsx)("br",{})]})})]}),Object(p.jsxs)(_,{children:[Object(p.jsxs)(f,{size:"md-3",children:[Object(p.jsx)(_,{children:Object(p.jsx)(ie,{lake:k,fish:l,selectedLake:s})}),Object(p.jsx)(_,{children:Object(p.jsx)(je,{lake:k,fish:l,selectedLake:s})})]}),Object(p.jsx)(f,{size:"md-8",children:Object(p.jsx)(_,{children:Object(p.jsx)(se,{children:Object(p.jsx)(P,{style:{float:"left"}})})})}),Object(p.jsx)(f,{cname:"buttonContain",size:"md-1",children:Object(p.jsxs)(_,{children:[Object(p.jsx)(H,{}),Object(p.jsx)(H,{}),Object(p.jsx)(H,{}),Object(p.jsxs)("div",{className:oe.a.weather,style:{textAlign:"center"},children:[Object(p.jsx)("i",{style:{textAlign:"center",textDecoration:"underline"},children:"Current Weather"}),z.length>0&&console.log(z),z.length>0&&Object(p.jsx)("img",{src:G}),Q,Object(p.jsx)(H,{}),Object(p.jsx)(H,{}),"Temp:",Object(p.jsx)(H,{}),z.length>0&&Object(p.jsxs)("span",{children:[te.toFixed(0),"F"]}),"Wind:",z.length>0&&Object(p.jsxs)("span",{children:[T," MPH, ",W]}),"Tomorrow:",z.length>0&&Object(p.jsx)("img",{src:$})]}),Object(p.jsx)(V.a,{className:oe.a.linkButton,variant:"secondary",onClick:function(){return window.open(s.trail,"_blank")},children:"Trail Info"}),Object(p.jsx)(V.a,{className:oe.a.linkButton,onClick:function(){return window.open(s.map,"_blank")},variant:"secondary",children:"Trail Map"})]})})]})]})]})}function be(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=(t[0],t[1]),a=Object(c.useState)([]),s=Object(o.a)(a,2),r=s[0],i=s[1];return Object(c.useEffect)((function(){!function(){var e=[];h().then((function(t){n([t.data]),console.log(t),t.data.length>0&&t.data.map((function(t){e.push(t)})),console.log(e),i(e)})).catch((function(e){return console.log(e)}))}()}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(C,{}),Object(p.jsxs)(m.a,{children:[Object(p.jsxs)(_,{cname:"justify-content-md-center",children:[Object(p.jsx)(f,{size:"md-3"}),Object(p.jsx)(f,{size:"md-6",cname:"topHeading",children:"James Peak Wilderness Fishing Data"}),Object(p.jsx)(f,{size:"md-3"})]}),Object(p.jsxs)(_,{cname:"justify-content-md-center",children:[Object(p.jsx)(f,{size:"md-2"}),Object(p.jsx)(f,{size:"md-8",cname:"dataTable",children:Object(p.jsxs)(re.a,{striped:!0,bordered:!0,hover:!0,children:[Object(p.jsxs)("thead",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Lake"}),Object(p.jsx)("th",{children:"S. Acres"}),Object(p.jsx)("th",{children:"Year"}),Object(p.jsx)("th",{children:"#CUTTs"}),Object(p.jsx)("th",{children:"Ave. Length"}),Object(p.jsx)("th",{children:"Cutt Range"}),Object(p.jsx)("th",{children:"#BRK"}),Object(p.jsx)("th",{children:"Ave. Length"}),Object(p.jsx)("th",{children:"Brook Range"})]}),r.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:Object(p.jsx)("a",{href:"/"+e.lake,children:e.lake})}),Object(p.jsx)("th",{children:0===e.acres?"-":e.acres}),Object(p.jsx)("th",{children:0===e.year?"-":e.year}),Object(p.jsx)("th",{children:0===e.numCuts?"-":e.numCuts}),Object(p.jsx)("th",{children:0===e.cutAvgLength?"-":e.cutAvgLength}),Object(p.jsx)("th",{children:""===e.cutRange?"-":e.cutRange}),Object(p.jsx)("th",{children:0===e.numBrooks?"-":e.numBrooks}),Object(p.jsx)("th",{children:0===e.brkAvgLength?"-":e.brkAvgLength}),Object(p.jsx)("th",{children:"0"===e.brkRange?"-":e.brkRange})]})}))]}),Object(p.jsx)("tbody",{})]})}),Object(p.jsx)(f,{size:"md-2"})]})]})]})}var he=function(){return Object(p.jsx)(j.a,{children:Object(p.jsx)(N,{children:Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{exact:!0,path:"/",render:function(e){return Object(p.jsx)(Y,Object(i.a)({},e))}}),Object(p.jsx)(l.a,{path:"/table",component:be}),Object(p.jsx)(l.a,{path:"/lakes",component:ae}),Object(p.jsx)(l.a,{exact:!0,path:"/:lake",render:function(e){return Object(p.jsx)(de,Object(i.a)({},e))}})]})})})};r.a.render(Object(p.jsx)(he,{}),document.getElementById("root"))},26:function(e,t,n){e.exports={imgContain:"LakeData_imgContain__1lblF",aBorder:"LakeData_aBorder__1JMqE",bigDisp:"LakeData_bigDisp__2LiTE",smallDisp:"LakeData_smallDisp__2gF6o",bigDisp1:"LakeData_bigDisp1__2xrqK",linkButton:"LakeData_linkButton__2VFSo",weather:"LakeData_weather__1_DqI"}},38:function(e,t,n){e.exports={Navbar:"NavigationBar_Navbar__3SjLU",Collapse:"NavigationBar_Collapse__15m-l",navColor:"NavigationBar_navColor__3A3Qf",navBorder:"NavigationBar_navBorder__2bFR7",dividerLink:"NavigationBar_dividerLink__2vO-A",dividerLink2:"NavigationBar_dividerLink2__mro5B"}},39:function(e,t,n){e.exports={Navbar:"NavBarLake_Navbar__186Ra",Collapse:"NavBarLake_Collapse__39Z9z",navColor:"NavBarLake_navColor__2Blgh",navBorder:"NavBarLake_navBorder__1F-HB",dividerLink:"NavBarLake_dividerLink__mnfQw",dividerLink2:"NavBarLake_dividerLink2__1mKqI"}},61:function(e,t,n){e.exports={center2:"DropdownBar_center2__2z3hd",wtf:"DropdownBar_wtf__1kHRd"}},62:function(e,t,n){e.exports={ddBar1:"DropdownCard_ddBar1__2XM2a",center3:"DropdownCard_center3__2qxhD"}},63:function(e,t,n){e.exports={center2:"LakeDropdown_center2__1kMct",wtf:"LakeDropdown_wtf__2CLEF"}},72:function(e,t,n){e.exports={homeContain:"Home_homeContain__6rUQ0"}},74:function(e,t,n){e.exports={imgContain:"LakeImage_imgContain__260Ao"}},75:function(e,t,n){e.exports={homeCard:"HomeCard_homeCard__mtRfx"}},84:function(e,t,n){},85:function(e,t,n){}},[[113,1,2]]]);
//# sourceMappingURL=main.9b78ccd3.chunk.js.map
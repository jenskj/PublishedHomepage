(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){},23:function(e,t,n){e.exports=n(52)},28:function(e,t,n){},31:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),o=n.n(i),l=(n(28),n(2)),c=n(3),s=n(6),d=n(4),m=n(5),u=(n(18),n(7)),h=(n(31),n(22)),p=function(e){var t=e.href,n=e.name;return r.a.createElement("li",null,r.a.createElement("a",null,r.a.createElement(h.Link,{to:t,spy:!0,smooth:!0,duration:500,offset:-54},n)))},g=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).myRef=r.a.createRef(),n.state={currentNavLink:""},n.handleScroll=n.handleScroll.bind(Object(u.a)(Object(u.a)(n))),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var e=document.querySelector("#navbar"),t=document.querySelector(".hiddenNav").offsetTop;window.scrollY>=t?(e.style.position="",e.classList.add("sticky")):(e.style.position="relative",e.style.bottom=0,e.classList.remove("sticky"))}},{key:"render",value:function(){return r.a.createElement("div",{id:"navWrapper"},r.a.createElement("div",{className:"hiddenNav"}),r.a.createElement("div",{id:"navbar"},r.a.createElement("ul",null,r.a.createElement(p,{href:"parallax",name:"Home"}),r.a.createElement(p,{href:"projectsWrapperOuter",name:"Projects"}),r.a.createElement(p,{href:"skillsWrapper",name:"Skills"}),r.a.createElement(p,{href:"cvWrapper",name:"Curriculum Vitae"}),r.a.createElement(p,{href:"contactMe",name:"Contact Me"}))))}}]),t}(r.a.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:300,height:300,position:"absolute",border:"1px solid whitesmoke",transform:"skew(-2deg) rotate(2deg)",top:111,right:10,zIndex:5,borderRadius:3,backgroundSize:"cover",overflow:"hidden"}},r.a.createElement("img",{src:"https://lh3.googleusercontent.com/PrWwnlpz0hhy-QhbX20u4-DN4kJ-65KhG7V1xCFPxe2XF0tZo5g2h48s1TflzlF8VcnpiIxSIjCFCCYzUKLnPUVDY1OzQ8gFSZeHk07k9wd7OlZvKqW_79aaPXLSXsek2XmFq7AnrqbcnJ701LaOGXBvQeFhrfBpjV-RID8frv8C-T862FYcxnXHphR-UNCjcllzeUARx2Nu49QMGSd3NMcyeD-DVn9cYNvxUEb-FdZGX7EUWYZX9GYLeenTyyBtEtiPvvezpvN2um7SadR-QeQjG5x_KHbwi3R7Rt_lt51lVCP9iIGCEkmnw6oumbR59luEwoGfAJfDx0RNov-u5lWy_Xi7Q2D6ieSwix4sHRILYIda5rPPUzK2b8vjMZDk72PdBTv8XnRfw_UCXbPb3zskMjkFxHR6fD5hesW61tbKol8Sqr9OdWcEzRjuv-wQh_vRexIZFZSNmxnjy1EsAyMB1DV3Ck_ygQESk7mwZ1WEExsIPVhg-5UsUf8WfzDc_IRFcywADtr2_WozGYb9r4qxYOfi0gG7MI2eVkqknqJh7K-bSZJClyDILyYyjNEAA4bs7tFMRJeGLAPJMFAKtetTHarrwp4w7Xr69rOGho1nWNdGkRW88zP5EZWKMPGI0U_6rdL9Ply-70_FveEgAZvZqFsE1IZ7BTO1ss0zHAgXrHSnUdIsqUM896LkPhvv9o8b5BsIlNWU1NGchg=w653-h869-no",style:{width:"110%",position:"absolute",top:200,transform:"skew(2deg) rotate(-2deg) translateY(-50%)"},alt:"JensPhoto"}))}}]),t}(r.a.Component),b=(n(43),a.Component,{height:60,width:"100%",backgroundColor:"#dad878",display:"flex",justifyContent:"center",alignItems:"center",padding:"30px 0px",border:"2px solid",margin:"20px 0px"}),v={color:"#111",fontFamily:"Open Sans Condensed, sans-serif",fontSize:64,fontWeight:"700",textShadow:"5px 4px 2px rgb(161, 161, 161)",margin:"0 0 0",textAlign:"center",textTransform:"uppercase",position:"relative"},y=function(e){var t=e.name;return r.a.createElement("div",{className:t.toLowerCase().replace(/\s/g,"")+"Wrapper",style:b},r.a.createElement("h2",{className:"header2",style:v},t))},E=(n(45),function(e){var t=e.gridExpand,n=e.gridLetter,a=e.projectTitle;return r.a.createElement("div",{onClick:t,className:n+" box"},r.a.createElement("h2",{className:"projectTitle"},a))}),j={a:"https://codepen.io/jenskj/pen/wQyLLp",b:"AnimalSounds",c:"",d:"https://codepen.io/jenskj/pen/yGymQe",e:"",f:"",g:""},w=function(e){var t=e.svgShow,n=e.svgHide,a=e.svgToggle,i=e.gridLetter;return r.a.createElement("div",{className:"viewDiv"},r.a.createElement("a",{onMouseOver:function(e){var n=e.target;n.addEventListener("transitionend",function e(){109===n.offsetHeight&&(t(),n.removeEventListener("transitionend",e))})},onMouseLeave:n,href:function(){var e={};for(var t in j)t[0]===i&&(e[t]=j[t]);return Object.values(e)}(),target:"_blank",className:"viewProject"},"view project"),r.a.createElement("svg",{className:a?"svgShow":"hidden",id:"codepen",xmlns:"https://www.w3.org/2000/svg",viewBox:"-380 0 900 26",fill:"none",stroke:"#000",strokeWidth:"2.3",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("path",{d:"M80 6h-9v14h9 M114 6h-9 v14h9 M111 13h-6 M77 13h-6 M122 20V6l11 14V6 M22 16.7L33 24l11-7.3V9.3L33 2L22 9.3V16.7z M44 16.7L33 9.3l-11 7.4 M22 9.3l11 7.3 l11-7.3 M33 2v7.3 M33 16.7V24 M88 14h6c2.2 0 4-1.8 4-4s-1.8-4-4-4h-6v14 M15 8c-1.3-1.3-3-2-5-2c-4 0-7 3-7 7s3 7 7 7 c2 0 3.7-0.8 5-2 M64 13c0 4-3 7-7 7h-5V6h5C61 6 64 9 64 13z"})))},O={top:"",left:"",width:"",height:""},k={top:"",left:"",width:"",height:""},C=(document.querySelector(".tile"),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).gridExpand=n.gridExpand.bind(Object(u.a)(Object(u.a)(n))),n.handleClick=n.handleClick.bind(Object(u.a)(Object(u.a)(n))),n.handleProjectViewToggle=n.handleProjectViewToggle.bind(Object(u.a)(Object(u.a)(n))),n.svgShow=n.svgShow.bind(Object(u.a)(Object(u.a)(n))),n.svgHide=n.svgHide.bind(Object(u.a)(Object(u.a)(n))),n.state={toggle:!1,projectViewToggle:!1,svgToggle:!1,currentLetter:"a",currentTitle:"",tileFull:!1},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(){var e=this.state.toggle;this.setState({toggle:!e})}},{key:"handleHover",value:function(){var e=this.state.svgToggle;this.setState({svgToggle:!e})}},{key:"handleProjectViewToggle",value:function(){var e=this.state.projectViewToggle;this.setState({projectViewToggle:!e})}},{key:"gridRetract",value:function(e){var t=document.querySelector(".tile"),n=document.querySelector("#projectsWrapper"),a=document.querySelector(".contentWrapper");document.documentElement.style.setProperty("--tile-top","".concat(O.top,"px")),document.documentElement.style.setProperty("--tile-left","".concat(O.left,"px")),document.documentElement.style.setProperty("--tile-width","".concat(O.width,"px")),document.documentElement.style.setProperty("--tile-height","".concat(O.height,"px")),t.className="".concat(this.state.currentLetter," tile retract"),this.handleProjectViewToggle(),t.addEventListener("animationend",function e(){a.style.display="none";n.style.display="block";t.removeEventListener("animationend",e)})}},{key:"gridExpand",value:function(e){var t,n=this,a=(t=1===e.target.classList[0].length?e.target:e.target.parentElement).classList[0],r=document.querySelector(".grid"),i=document.querySelector(".tile"),o=document.querySelector(".contentWrapper");this.setState({currentLetter:a}),O.top=t.offsetTop,O.left=t.getBoundingClientRect().left,O.width=t.getBoundingClientRect().width,O.height=t.getBoundingClientRect().height,k.top=r.offsetTop,k.left=r.getBoundingClientRect().left,k.width=r.getBoundingClientRect().width,k.height=r.getBoundingClientRect().height,o.style.display="block",i.className="".concat(a," expand tile"),o.style.width=k.width+"px",i.style.top=O.top+"px",i.style.left=O.left+"px",i.style.width=O.width+"px",i.style.height=O.height+"px",document.documentElement.style.setProperty("--grid-top","".concat(k.top,"px")),document.documentElement.style.setProperty("--grid-left","".concat(k.left,"px")),document.documentElement.style.setProperty("--grid-width","".concat(k.width,"px")),document.documentElement.style.setProperty("--grid-height","".concat(k.height,"px"));i.addEventListener("animationend",function e(){1200===i.offsetWidth&&(n.handleProjectViewToggle(),i.removeEventListener("animationend",e))})}},{key:"svgShow",value:function(){this.setState({svgToggle:!0})}},{key:"svgHide",value:function(){this.setState({svgToggle:!1})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{id:"projectsWrapper"},r.a.createElement("div",{className:"grid unclicked"},r.a.createElement(E,{getLetter:this.getLetter,gridExpand:this.gridExpand,gridLetter:"a",projectTitle:"Literary Timeline from Raw Data"}),r.a.createElement(E,{getLetter:this.getLetter,gridExpand:this.gridExpand,gridLetter:"b",projectTitle:"Animal Sounds"}),r.a.createElement(E,{getLetter:this.getLetter,gridExpand:this.gridExpand,gridLetter:"c",projectTitle:"Coming Soon"}),r.a.createElement(E,{getLetter:this.getLetter,gridExpand:this.gridExpand,gridLetter:"d",projectTitle:"Personality Traits - Flexbox visual"}),r.a.createElement(E,{getLetter:this.getLetter,gridExpand:this.gridExpand,gridLetter:"e",projectTitle:"Coming Soon"}),r.a.createElement(E,{getLetter:this.getLetter,gridExpand:this.gridExpand,gridLetter:"f",projectTitle:"Coming Soon"}),r.a.createElement(E,{getLetter:this.getLetter,gridExpand:this.gridExpand,gridLetter:"g",projectTitle:"Coming Soon"}))),r.a.createElement("div",{className:"contentWrapper"},r.a.createElement("div",{className:"tile",onClick:function(t){return 1200===t.target.offsetWidth?e.gridRetract():null}},this.state.projectViewToggle?r.a.createElement(w,{svgShow:this.svgShow,svgHide:this.svgHide,svgToggle:this.state.svgToggle,gridLetter:this.state.currentLetter,projectTitle:this.state.currentTitle}):null)))}}]),t}(a.Component)),S=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{position:"relative",left:"11%",top:25,width:"80%",zIndex:"10",textShadow:"-1px 0 whitesmoke, 0 1px whitesmoke, 1px 0 whitesmoke, 0 -1px whitesmoke"}},r.a.createElement("p",null,"Jens Kj\xe6r Jensen")))}}]),t}(r.a.Component),x=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:900,bottom:15,display:"flex",flexDirection:"row",justifyContent:"space-between",position:"relative",top:160}},r.a.createElement("i",{className:"devicon-html5-plain-wordmark"}),r.a.createElement("i",{className:"devicon-css3-plain-wordmark"}),r.a.createElement("i",{className:"devicon-javascript-plain"}),r.a.createElement("i",{className:"devicon-react-original-wordmark"}),r.a.createElement("i",{className:"devicon-jquery-plain-wordmark"}),r.a.createElement("i",{className:"devicon-git-plain-wordmark"}))}}]),t}(r.a.Component),T=n(1),A={container:{position:"relative",fontSize:"80%",fontWeight:300,padding:"10px 0",width:"95%",margin:"0 auto"},containerBefore:{content:"",position:"absolute",top:0,height:"100%",width:3,background:"#a0b2b8",left:"16px",zIndex:"-1"},containerAfter:{content:"",display:"table",clear:"both"},event:{position:"relative",margin:"10px 0"},"event--left":{paddingLeft:45,textAlign:"left"},"event--right":{paddingRight:45,textAlign:"right"},eventAfter:{clear:"both",content:"",display:"table"},eventType:{position:"absolute",top:0,borderRadius:"50%",width:30,height:30,marginLeft:1,background:"#e9f0f5",border:"2px solid #6fba1c",display:"flex"},"eventType--left":{left:0},"eventType--right":{right:0},materialIcons:{display:"flex",width:32,height:32,position:"relative",justifyContent:"center",alignSelf:"center",alignItems:"center"},eventContainer:{position:"relative"},eventContainerBefore:{top:24,left:"100%",borderColor:"transparent",borderLeftColor:"#ffffff"},time:{marginBottom:3},subtitle:{marginTop:2,fontSize:"85%",color:"#777"},message:{width:"98%",backgroundColor:"#ffffff",boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1)",marginTop:"1em",marginBottom:"1em",lineHeight:1.6,padding:"0.5em 1em"},messageAfter:{clear:"both",content:"",display:"table"},actionButtons:{marginTop:-20},"actionButtons--left":{float:"left",textAlign:"left"},"actionButtons--right":{float:"right",textAlign:"right"},card:{boxShadow:"rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px",backgroundColor:"rgb(255, 255, 255)"},cardTitle:{backgroundColor:"#7BB1EA",padding:10,color:"#fff"},cardBody:{backgroundColor:"#ffffff",marginBottom:"1em",lineHeight:1.6,padding:10,minHeight:40},blipStyle:{position:"absolute",top:"50%",marginTop:"9px"},toggleEnabled:{cursor:"pointer"}},L=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.children,t=r.a.Children.map(e,function(e){return r.a.cloneElement(e)});return r.a.createElement("div",null,r.a.createElement("section",{style:Object(T.a)({},A.container)},r.a.createElement("div",null),t,r.a.createElement("div",{style:Object(T.a)({},A.containerBefore)})))}}]),t}(a.Component),N=n(8),B=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={showContent:n.props.showContent},n.toggleContent=n.toggleContent.bind(Object(u.a)(Object(u.a)(n))),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.showContent!==e.showContent&&this.state({showContent:this.props.showContent})}},{key:"mergeNotificationStyle",value:function(e,t,n){var a=e?Object(T.a)({},A.eventType,{color:e,borderColor:e}):A.eventType,r="right"===n?Object(T.a)({},A["eventType--right"]):Object(T.a)({},A["eventType--left"]);return Object(T.a)({},a,r,t)}},{key:"mergeContentStyle",value:function(e){var t=this.showAsCard()?A.cardBody:A.message;return e?Object(T.a)({},t,e):t}},{key:"timeStyle",value:function(){return this.showAsCard()?A.time:Object(T.a)({},A.time,{color:"#303e49"})}},{key:"showAsCard",value:function(){return"card"===this.props.container}},{key:"containerStyle",value:function(){var e=this.props.style,t=Object(T.a)({},A.eventContainer,e);return this.showAsCard()?Object(T.a)({},A.card,t):t}},{key:"toggleStyle",value:function(){var e=this.props,t=e.container,n=e.cardHeaderStyle,a=e.collapsible,r="card"===t?Object(T.a)({},A.cardTitle,n):{};return a?Object(T.a)({},A.toggleEnabled,r):r}},{key:"toggleContent",value:function(){this.setState({showContent:!this.state.showContent})}},{key:"renderChildren",value:function(){var e=this.props,t=e.collapsible,n=e.contentStyle;return t&&this.state.showContent||!t?r.a.createElement("div",{style:this.mergeContentStyle(n)},this.props.children,r.a.createElement("div",{style:A.messageAfter})):r.a.createElement("span",{style:{fontWeight:500,fontSize:16,cursor:"pointer"},onClick:this.toggleContent},"\u2026")}},{key:"render",value:function(){var e=this.props,t=e.createdAt,n=(e.title,e.subtitle,e.iconStyle),a=e.bubbleStyle,i=(e.buttons,e.icon),o=e.iconColor,l=(e.titleStyle,e.subtitleStyle,e.orientation),c=e.collapsible,s=Object(N.a)(e,["createdAt","title","subtitle","iconStyle","bubbleStyle","buttons","icon","iconColor","titleStyle","subtitleStyle","orientation","collapsible"]),d="right"===l?Object(T.a)({},A["event--right"]):Object(T.a)({},A["event--left"]);"left"===l?Object(T.a)({},A["actionButtons--right"]):Object(T.a)({},A["actionButtons--left"]);return r.a.createElement("div",{style:Object(T.a)({},A.event,d)},r.a.createElement("div",{style:this.mergeNotificationStyle(o,a,l)},r.a.createElement("span",{style:Object(T.a)({},A.materialIcons,n)},i)),r.a.createElement("div",Object.assign({},s,{style:this.containerStyle()}),r.a.createElement("div",{style:A.eventContainerBefore}),r.a.createElement("div",{style:this.toggleStyle(),onClick:c&&this.toggleContent},t),this.props.children&&this.renderChildren()),r.a.createElement("div",{style:A.eventAfter}))}}]),t}(a.Component),W=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(L,null,r.a.createElement(B,{createdAt:"2012-2013",icon:r.a.createElement("i",{className:"material-icons md-18"},"school")},"Exchange student at the University of Washington"),r.a.createElement(B,{createdAt:"2010-2015",icon:r.a.createElement("i",{className:"material-icons md-18"},"school")},"MA in English and Philosophy at Aarhus University"),r.a.createElement(B,{createdAt:"2008",icon:r.a.createElement("i",{className:"material-icons md-18"},"music_note")},"London Music School"),r.a.createElement(B,{createdAt:"2004-2007",icon:r.a.createElement("i",{className:"material-icons md-18"},"school")},"Skanderborg Gymnasium"))}}]),t}(r.a.Component),P={container:{position:"relative",fontSize:"80%",fontWeight:300,padding:"10px 0",width:"95%",margin:"0 auto"},containerBefore:{content:"",position:"absolute",top:0,height:"100%",width:3,background:"#a0b2b8"},"containerBefore--left":{left:"16px"},"containerBefore--right":{right:"14px"},containerAfter:{content:"",display:"table",clear:"both"},event:{position:"relative",margin:"10px 0"},"event--left":{paddingLeft:45,textAlign:"left"},"event--right":{paddingRight:45,textAlign:"right"},eventAfter:{clear:"both",content:"",display:"table"},eventType:{position:"absolute",top:0,borderRadius:"50%",width:30,height:30,marginLeft:1,background:"#e9f0f5",border:"2px solid #6fba1c",display:"flex"},"eventType--left":{left:0},"eventType--right":{right:0},materialIcons:{display:"flex",width:32,height:32,position:"relative",justifyContent:"center",alignSelf:"center",alignItems:"center"},eventContainer:{position:"relative"},eventContainerBefore:{top:24,left:"100%",borderColor:"transparent",borderLeftColor:"#ffffff"},time:{marginBottom:3},subtitle:{marginTop:2,fontSize:"85%",color:"#777"},message:{width:"98%",backgroundColor:"#ffffff",boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1)",marginTop:"1em",marginBottom:"1em",lineHeight:1.6,padding:"0.5em 1em"},messageAfter:{clear:"both",content:"",display:"table"},actionButtons:{marginTop:-20},"actionButtons--left":{float:"left",textAlign:"left"},"actionButtons--right":{float:"right",textAlign:"right"},card:{boxShadow:"rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px",backgroundColor:"rgb(255, 255, 255)"},cardTitle:{backgroundColor:"#7BB1EA",padding:10,color:"#fff"},cardBody:{backgroundColor:"#ffffff",marginBottom:"1em",lineHeight:1.6,padding:10,minHeight:40},blipStyle:{position:"absolute",top:"50%",marginTop:"9px"},toggleEnabled:{cursor:"pointer"}},R=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.orientation,n=void 0===t?"left":t,a=e.children,i=e.lineColor,o=e.lineStyle,l=e.style,c=Object(N.a)(e,["orientation","children","lineColor","lineStyle","style"]),s=r.a.Children.map(a,function(e){return r.a.cloneElement(e,{orientation:n})}),d="right"===n?Object(T.a)({},P["containerBefore--right"]):Object(T.a)({},P["containerBefore--left"]),m=Object(T.a)({},d,o);return m=i?Object(T.a)({},m,{background:i}):m,r.a.createElement("div",null,r.a.createElement("section",Object.assign({style:Object(T.a)({},P.container,l)},c),r.a.createElement("div",{style:Object(T.a)({},P.containerBefore,m)}),s,r.a.createElement("div",{style:P.containerAfter})))}}]),t}(a.Component);R.defaultProps={style:{},lineStyle:{}};var M=R,I=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={showContent:n.props.showContent},n.toggleContent=n.toggleContent.bind(Object(u.a)(Object(u.a)(n))),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.showContent!==e.showContent&&this.state({showContent:this.props.showContent})}},{key:"mergeNotificationStyle",value:function(e,t,n){var a=e?Object(T.a)({},P.eventType,{color:e,borderColor:e}):P.eventType,r="right"===n?Object(T.a)({},P["eventType--right"]):Object(T.a)({},P["eventType--left"]);return Object(T.a)({},a,r,t)}},{key:"mergeContentStyle",value:function(e){var t=this.showAsCard()?P.cardBody:P.message;return e?Object(T.a)({},t,e):t}},{key:"timeStyle",value:function(){return this.showAsCard()?P.time:Object(T.a)({},P.time,{color:"#303e49"})}},{key:"showAsCard",value:function(){return"card"===this.props.container}},{key:"containerStyle",value:function(){var e=this.props.style,t=Object(T.a)({},P.eventContainer,e);return this.showAsCard()?Object(T.a)({},P.card,t):t}},{key:"toggleStyle",value:function(){var e=this.props,t=e.container,n=e.cardHeaderStyle,a=e.collapsible,r="card"===t?Object(T.a)({},P.cardTitle,n):{};return a?Object(T.a)({},P.toggleEnabled,r):r}},{key:"toggleContent",value:function(){this.setState({showContent:!this.state.showContent})}},{key:"renderChildren",value:function(){var e=this.props,t=e.collapsible,n=e.contentStyle;return t&&this.state.showContent||!t?r.a.createElement("div",{style:this.mergeContentStyle(n)},this.props.children,r.a.createElement("div",{style:P.messageAfter})):r.a.createElement("span",{style:{fontWeight:500,fontSize:16,cursor:"pointer"},onClick:this.toggleContent},"\u2026")}},{key:"render",value:function(){var e=this.props,t=e.createdAt,n=e.title,a=e.subtitle,i=e.iconStyle,o=e.bubbleStyle,l=e.buttons,c=e.icon,s=e.iconColor,d=e.titleStyle,m=e.subtitleStyle,u=e.orientation,h=e.collapsible,p=Object(N.a)(e,["createdAt","title","subtitle","iconStyle","bubbleStyle","buttons","icon","iconColor","titleStyle","subtitleStyle","orientation","collapsible"]),g="right"===u?Object(T.a)({},P["event--right"]):Object(T.a)({},P["event--left"]),f="left"===u?Object(T.a)({},P["actionButtons--right"]):Object(T.a)({},P["actionButtons--left"]);return r.a.createElement("div",{style:Object(T.a)({},P.event,g)},r.a.createElement("div",{style:this.mergeNotificationStyle(s,o,u)},r.a.createElement("span",{style:Object(T.a)({},P.materialIcons,i)},c)),r.a.createElement("div",Object.assign({},p,{style:this.containerStyle()}),r.a.createElement("div",{style:P.eventContainerBefore}),r.a.createElement("div",{style:this.toggleStyle(),onClick:h&&this.toggleContent},t&&r.a.createElement("div",{style:this.timeStyle()},t),r.a.createElement("div",{style:d},n),a&&r.a.createElement("div",{style:Object(T.a)({},P.subtitle,m)},a),r.a.createElement("div",{style:Object(T.a)({},P.actionButtons,f)},l)),this.props.children&&this.renderChildren()),r.a.createElement("div",{style:P.eventAfter}))}}]),t}(a.Component);I.defaultProps={createdAt:void 0,iconStyle:{},bubbleStyle:{},contentStyle:{},cardHeaderStyle:{},style:{},titleStyle:{},subtitleStyle:{},orientation:"left",showContent:!1};var H=I,V=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"mergeNotificationStyle",value:function(e){return e?Object(T.a)({},P.eventType,{color:e,borderColor:e}):P.eventType}},{key:"iconStyle",value:function(e){return Object(T.a)({},P.materialIcons,e)}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.iconStyle,a=e.icon,i=e.orientation,o=e.iconColor,l=e.style,c=Object(N.a)(e,["title","iconStyle","icon","orientation","iconColor","style"]),s="right"===i?Object(T.a)({},P["event--right"]):Object(T.a)({},P["event--left"]);return r.a.createElement("div",{style:Object(T.a)({},P.event,{marginBottom:50},l)},r.a.createElement("div",{style:this.mergeNotificationStyle(o)},r.a.createElement("span",{style:this.iconStyle(n)},a)),r.a.createElement("div",Object.assign({},c,{style:Object(T.a)({},P.blipStyle,s)}),r.a.createElement("div",null,t)),r.a.createElement("div",{style:P.eventAfter}))}}]),t}(a.Component);V.defaultProps={iconStyle:{},style:{}};var z=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(M,null,r.a.createElement(H,{createdAt:"2018-2019",icon:r.a.createElement("i",{className:"material-icons md-18"},"work")},"Teacher at Randers Statsskole \u2013 English"),r.a.createElement(H,{createdAt:"2017-2018",icon:r.a.createElement("i",{className:"material-icons md-18"},"work")},"Teacher at Ikast-Brande Gymnasium \u2013 English and Theory of Knowledge"),r.a.createElement(H,{createdAt:"2016-2017",icon:r.a.createElement("i",{className:"material-icons md-18"},"work")},"Teacher at Vestjysk Gymnasium Tarm \u2013 English"),r.a.createElement(H,{createdAt:"2015-2016",icon:r.a.createElement("i",{className:"material-icons md-18"},"work")},"Teacher at Ikast-Brande Gymnasium \u2013 English"),r.a.createElement(H,{createdAt:"2014-2016",icon:r.a.createElement("i",{className:"material-icons md-18"},"work")},"Volunteer translator and editor at the publishing company Philosophia"),r.a.createElement(H,{createdAt:"2011",icon:r.a.createElement("i",{className:"material-icons md-18"},"work")},"Instructor in academic research at Aarhus University"),r.a.createElement(H,{createdAt:"2011",icon:r.a.createElement("i",{className:"material-icons md-18"},"work")},"Mentor for exchange students at Aarhus University"))}}]),t}(r.a.Component),U=(n(47),function(e){var t=e.percent,n=e.titleColor,a=e.icon,i=e.name,o=e.barColor;return r.a.createElement("div",{className:"skillbar","data-percent":t},r.a.createElement("div",{className:"skillbar-title",style:{background:n}},r.a.createElement("span",null,r.a.createElement("i",{className:a})," ",i)),r.a.createElement("div",{className:"skillbar-bar",style:{background:o}}),r.a.createElement("div",{className:"skill-bar-percent"},t))}),D=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={isInViewport:!1},n.handleSroll=n.handleSroll.bind(Object(u.a)(Object(u.a)(n))),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleSroll),window.addEventListener("scroll",this.handleSroll)}},{key:"handleSroll",value:function(){var e=document.querySelectorAll(".skillbar"),t=Array.from(e);function n(e){var t=e.offsetTop,n=t+e.offsetHeight,a=window.scrollY,r=a+window.innerHeight;return t>=a&&n<=r}!function(){for(var e,a=0;a<t.length;a++)n(t[a])&&(e=t[a]);if(void 0!==e){var r=e.children[1],i=e.getAttribute("data-percent");r.style.width=i}}()}},{key:"render",value:function(){return r.a.createElement("div",{id:"skillsWrapper"},r.a.createElement(U,{percent:"90%",titleColor:"#d35400",icon:"devicon-html5-plain-wordmark",name:"HTML5",barColor:"#e67e22"}),r.a.createElement(U,{percent:"70%",titleColor:"#2980b9",icon:"devicon-css3-plain-wordmark",name:"CSS3",barColor:"#3498db"}),r.a.createElement(U,{percent:"50%",titleColor:"#90832f",icon:"devicon-javascript-plain",name:"JavaScript",barColor:"#f0db4f"}),r.a.createElement(U,{percent:"60%",titleColor:"#2c3e50",icon:"devicon-jquery-plain-wordmark",name:"JQuery",barColor:"#2c3e50"}),r.a.createElement(U,{percent:"50%",titleColor:"#008199",icon:"devicon-react-original-wordmark",name:"React.js",barColor:"#00d8ff"}),r.a.createElement(U,{percent:"30%",titleColor:"#782817",icon:"devicon-git-plain-wordmark",name:"Git",barColor:"#f1502f"}))}}]),t}(r.a.Component),q=(n(49),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"cont"},r.a.createElement("ul",{class:"contact"},r.a.createElement("li",{style:{textAlign:"left"}},r.a.createElement("p",null,r.a.createElement("i",{class:"fa fa-map-marker fa-3x"})),r.a.createElement("p",null,r.a.createElement("strong",null,"Location"),r.a.createElement("br",null),"Aarhus, Denmark")),r.a.createElement("li",{style:{textAlign:"left"}},r.a.createElement("p",null,r.a.createElement("i",{class:"fa fa-phone fa-3x"})),r.a.createElement("p",null,r.a.createElement("strong",null,"Phone"),r.a.createElement("br",null),"+45 40 95 71 91")),r.a.createElement("a",{href:"mailto:jens_kj@hotmail.com"},r.a.createElement("li",{style:{textAlign:"left",paddingRight:10}},r.a.createElement("p",null,r.a.createElement("i",{class:"fa fa-envelope fa-3x"})),r.a.createElement("p",null,r.a.createElement("strong",null,"E-mail"),r.a.createElement("br",null),r.a.createElement("p",{style:{visibility:"hidden"}},"fake text")))),r.a.createElement("a",{href:"https://www.linkedin.com/in/jens-k-jensen/"},r.a.createElement("li",{style:{textAlign:"left",color:"#0077B5"}},r.a.createElement("p",null,r.a.createElement("i",{class:"fa fa-linkedin fa-3x"})),r.a.createElement("p",null,r.a.createElement("strong",null,"LinkedIn"),r.a.createElement("br",null),r.a.createElement("p",{style:{visibility:"hidden"}},"fake text"))))))}}]),t}(r.a.Component)),F={position:"relative",top:0,margin:"auto",paddingTop:30,marginTop:-40,padding:"25px 0px",width:"100%",height:"100%",textAlign:"center",background:"#dad878"},G={display:"inline-block",font:'400 50px/1.3 "Oleo Script", Helvetica, sans-serif',color:"#2b2b2b"},J=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"aboutMeWrapper",style:F},r.a.createElement("p",{style:G},"Hello, I'm Jens - a frontend developer from Aarhus, Denmark"))}}]),t}(a.Component),X=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{id:"main"},r.a.createElement("div",{id:"parallax"},r.a.createElement(S,null),r.a.createElement(x,null),r.a.createElement(f,null)),r.a.createElement(J,null),r.a.createElement(g,{id:"navbar"}),r.a.createElement("div",{id:"content"},r.a.createElement("div",{id:"projectsWrapperOuter"},r.a.createElement(y,{name:"Projects"}),r.a.createElement(C,null)),r.a.createElement("div",{id:"skillsWrapper"},r.a.createElement(y,{name:"Skills"}),r.a.createElement(D,null)),r.a.createElement(y,{name:"CV"}),r.a.createElement("div",{id:"timelineWrapper"},r.a.createElement("div",{id:"educationTimeline"},r.a.createElement(W,null)),r.a.createElement("div",{id:"workTimeline"},r.a.createElement(z,null)),r.a.createElement("div",{id:"faderWrapper"},r.a.createElement("div",{className:"scrollFaderTop"}),r.a.createElement("div",{className:"scrollFaderBottom"}))),r.a.createElement("div",{id:"contactMe"},r.a.createElement(y,{name:"Contact Me"}),r.a.createElement(q,null)))))}}]),t}(a.Component),Z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(X,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");Z?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):_(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):_(t,e)})}}()}},[[23,2,1]]]);
//# sourceMappingURL=main.c093d14d.chunk.js.map
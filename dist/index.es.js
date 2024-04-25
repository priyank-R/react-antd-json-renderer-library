import e,{useState as r,useEffect as a}from"react";import{List as n,Form as t,Button as l,Input as f,Collapse as o,Tabs as c}from"antd";import i,{isArray as u,get as d,has as s,isObject as h,keys as g,omit as m}from"lodash";import{Comment as b}from"@ant-design/compatible";const{TextArea:p}=f,y=({children:a,...f})=>{const[o,c]=r("");return e.createElement("div",null,e.createElement(n,{className:"comment-list",header:`${a.length} comments`,itemLayout:"horizontal",dataSource:a,renderItem:r=>e.createElement("li",null,e.createElement(b,{author:r.user,content:r.content}))}),e.createElement(t.Item,null,e.createElement(p,{rows:2,onChange:e=>{""!==e.target.value.trim()&&c(e.target.value)},value:o})),e.createElement(t.Item,null,e.createElement(l,{htmlType:"submit",onClick:e=>{a=[...a,{content:o,author:"User"}],f?.onDataChange(a),c("")},type:"primary"},"Add Comment")))};function v(e,r){(function(e){return"string"==typeof e&&-1!==e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");var a=function(e){return"string"==typeof e&&-1!==e.indexOf("%")}(e);return e=360===r?e:Math.min(r,Math.max(0,parseFloat(e))),a&&(e=parseInt(String(e*r),10)/100),Math.abs(e-r)<1e-6?1:e=360===r?(e<0?e%r+r:e%r)/parseFloat(String(r)):e%r/parseFloat(String(r))}function x(e){return e<=1?"".concat(100*Number(e),"%"):e}function k(e){return 1===e.length?"0"+e:String(e)}function E(e,r,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?e+6*a*(r-e):a<.5?r:a<2/3?e+(r-e)*(2/3-a)*6:e}function w(e){return F(e)/255}function F(e){return parseInt(e,16)}var A={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function C(e){var r,a,n,t={r:0,g:0,b:0},l=1,f=null,o=null,c=null,i=!1,u=!1;return"string"==typeof e&&(e=function(e){if(0===(e=e.trim().toLowerCase()).length)return!1;var r=!1;if(A[e])e=A[e],r=!0;else if("transparent"===e)return{r:0,g:0,b:0,a:0,format:"name"};var a=S.rgb.exec(e);if(a)return{r:a[1],g:a[2],b:a[3]};if(a=S.rgba.exec(e))return{r:a[1],g:a[2],b:a[3],a:a[4]};if(a=S.hsl.exec(e))return{h:a[1],s:a[2],l:a[3]};if(a=S.hsla.exec(e))return{h:a[1],s:a[2],l:a[3],a:a[4]};if(a=S.hsv.exec(e))return{h:a[1],s:a[2],v:a[3]};if(a=S.hsva.exec(e))return{h:a[1],s:a[2],v:a[3],a:a[4]};if(a=S.hex8.exec(e))return{r:F(a[1]),g:F(a[2]),b:F(a[3]),a:w(a[4]),format:r?"name":"hex8"};if(a=S.hex6.exec(e))return{r:F(a[1]),g:F(a[2]),b:F(a[3]),format:r?"name":"hex"};if(a=S.hex4.exec(e))return{r:F(a[1]+a[1]),g:F(a[2]+a[2]),b:F(a[3]+a[3]),a:w(a[4]+a[4]),format:r?"name":"hex8"};if(a=S.hex3.exec(e))return{r:F(a[1]+a[1]),g:F(a[2]+a[2]),b:F(a[3]+a[3]),format:r?"name":"hex"};return!1}(e)),"object"==typeof e&&(D(e.r)&&D(e.g)&&D(e.b)?(r=e.r,a=e.g,n=e.b,t={r:255*v(r,255),g:255*v(a,255),b:255*v(n,255)},i=!0,u="%"===String(e.r).substr(-1)?"prgb":"rgb"):D(e.h)&&D(e.s)&&D(e.v)?(f=x(e.s),o=x(e.v),t=function(e,r,a){e=6*v(e,360),r=v(r,100),a=v(a,100);var n=Math.floor(e),t=e-n,l=a*(1-r),f=a*(1-t*r),o=a*(1-(1-t)*r),c=n%6;return{r:255*[a,f,l,l,o,a][c],g:255*[o,a,a,f,l,l][c],b:255*[l,l,o,a,a,f][c]}}(e.h,f,o),i=!0,u="hsv"):D(e.h)&&D(e.s)&&D(e.l)&&(f=x(e.s),c=x(e.l),t=function(e,r,a){var n,t,l;if(e=v(e,360),r=v(r,100),a=v(a,100),0===r)t=a,l=a,n=a;else{var f=a<.5?a*(1+r):a+r-a*r,o=2*a-f;n=E(o,f,e+1/3),t=E(o,f,e),l=E(o,f,e-1/3)}return{r:255*n,g:255*t,b:255*l}}(e.h,f,c),i=!0,u="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(l=e.a)),l=function(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}(l),{ok:i,format:e.format||u,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:l}}var M="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),T="[\\s|\\(]+(".concat(M,")[,|\\s]+(").concat(M,")[,|\\s]+(").concat(M,")\\s*\\)?"),$="[\\s|\\(]+(".concat(M,")[,|\\s]+(").concat(M,")[,|\\s]+(").concat(M,")[,|\\s]+(").concat(M,")\\s*\\)?"),S={CSS_UNIT:new RegExp(M),rgb:new RegExp("rgb"+T),rgba:new RegExp("rgba"+$),hsl:new RegExp("hsl"+T),hsla:new RegExp("hsla"+$),hsv:new RegExp("hsv"+T),hsva:new RegExp("hsva"+$),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function D(e){return Boolean(S.CSS_UNIT.exec(String(e)))}var I=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function V(e){var r=function(e,r,a){e=v(e,255),r=v(r,255),a=v(a,255);var n=Math.max(e,r,a),t=Math.min(e,r,a),l=0,f=n,o=n-t,c=0===n?0:o/n;if(n===t)l=0;else{switch(n){case e:l=(r-a)/o+(r<a?6:0);break;case r:l=(a-e)/o+2;break;case a:l=(e-r)/o+4}l/=6}return{h:l,s:c,v:f}}(e.r,e.g,e.b);return{h:360*r.h,s:r.s,v:r.v}}function N(e){var r=e.r,a=e.g,n=e.b;return"#".concat(function(e,r,a,n){var t=[k(Math.round(e).toString(16)),k(Math.round(r).toString(16)),k(Math.round(a).toString(16))];return n&&t[0].startsWith(t[0].charAt(1))&&t[1].startsWith(t[1].charAt(1))&&t[2].startsWith(t[2].charAt(1))?t[0].charAt(0)+t[1].charAt(0)+t[2].charAt(0):t.join("")}(r,a,n,!1))}function q(e,r,a){var n=a/100;return{r:(r.r-e.r)*n+e.r,g:(r.g-e.g)*n+e.g,b:(r.b-e.b)*n+e.b}}function O(e,r,a){var n;return(n=Math.round(e.h)>=60&&Math.round(e.h)<=240?a?Math.round(e.h)-2*r:Math.round(e.h)+2*r:a?Math.round(e.h)+2*r:Math.round(e.h)-2*r)<0?n+=360:n>=360&&(n-=360),n}function P(e,r,a){return 0===e.h&&0===e.s?e.s:((n=a?e.s-.16*r:4===r?e.s+.16:e.s+.05*r)>1&&(n=1),a&&5===r&&n>.1&&(n=.1),n<.06&&(n=.06),Number(n.toFixed(2)));var n}function R(e,r,a){var n;return(n=a?e.v+.05*r:e.v-.15*r)>1&&(n=1),Number(n.toFixed(2))}function j(e){for(var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=[],n=C(e),t=5;t>0;t-=1){var l=V(n),f=N(C({h:O(l,t,!0),s:P(l,t,!0),v:R(l,t,!0)}));a.push(f)}a.push(N(n));for(var o=1;o<=4;o+=1){var c=V(n),i=N(C({h:O(c,o),s:P(c,o),v:R(c,o)}));a.push(i)}return"dark"===r.theme?I.map((function(e){var n=e.index,t=e.opacity;return N(q(C(r.backgroundColor||"#141414"),C(a[n]),100*t))})):a}var L={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1677FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},B={},z={};Object.keys(L).forEach((function(e){B[e]=j(L[e]),B[e].primary=B[e][5],z[e]=j(L[e],{theme:"dark",backgroundColor:"#141414"}),z[e].primary=z[e][5]}));var U=B.red,W=B.yellow,_=B.green;const{Panel:K}=o,G=e=>{if(e)return"COMPLETED"===e?_[1]:"IN-PROGRESS"===e?W[1]:"INCOMPLETE"===e?U[1]:void 0},H=({children:n,...t})=>{const[l,f]=r([]),[c,i]=r([]);return a((()=>{(()=>{let r=[],a=u(n)?n.map(((a,n)=>{let[t,l,f]=[d(a,"props.name",d(a,"name",`Panel ${n+1}`)),d(a,"props.status",d(a,"status",null)),d(a,"props.expanded",!1)];return f&&r.push(t),e.createElement(K,{header:t,key:t,style:{backgroundColor:G(l)}},null!==d(a,"props",null)?a:null)})):e.createElement(e.Fragment,null);f(r),i(a)})()}),[]),e.createElement(o,{onChange:e=>f(e),activeKey:l},c)},J=({children:r})=>e.createElement(c,{onChange:e=>{console.log(e)}},r.map(((r,a)=>{let n=d(r,"props.name",d(r,"name",`Tab ${a+1}`));return e.createElement(c.TabPane,{key:n,tabKey:n,tab:n},s(r,"props")?r:null)}))),Q=({children:t})=>{let[l,f]=r([]);a((()=>{i.isArray(t)&&f(t)}),[t]);let[o,c,u]=[null,null,null];return e.createElement(n,{size:"small",bordered:!0,dataSource:l,renderItem:(r,a)=>(o=i.get(r,"id",i.random()),c=i.get(r,"name",`File ${a+1}`),u=i.get(r,"link",null),e.createElement(n.Item,{key:o},c," ",u?e.createElement("a",{href:u,target:"_blank"},"Link"):e.createElement(e.Fragment,null)))})},X=({children:r,...a})=>e.createElement(e.Fragment,null),Y=({children:r,...a})=>e.createElement(e.Fragment,null,e.Children.map(r,(r=>e.cloneElement(r,{...a}))));const Z=({data:r,onDataChange:a=((e,r)=>{}),sortOrder:n=[]})=>{const t=(e,f="$",o={})=>{if(u(e))return e.map(((e,r)=>({...e,pathTrace:f+`[${r}]`,...o,onDataChange:e=>a(f+`[${r}]`,e)})));if(h(e)&&g(e).length>0){if(s(e,"renderType",!1)){if("custom"==d(e,"renderType",!1))return l(d(e,"renderType",null),d(e,"renderValue"),{...m(e,"renderValue"),pathTrace:f,...o,onDataChange:e=>a(f,e)});if("ref"==d(e,"renderType",!1)){let n=d(e,"renderValue","").split("$."),c=null;if(2==n.length){if(c=d(r,n[1],null),null==c)throw new Error("Path not found: "+d(e,"renderValue",""));return l(d(c,"renderType",null),t(d(c,"renderValue",{}),f+".renderValue"),{pathTrace:f,...o,...m(c,"renderValue"),onDataChange:e=>a(f,e)})}throw new Error("Provided ref not in valid format. Eg value: '$.path.to.object'")}return l(d(e,"renderType",null),t(e.renderValue,f+".renderValue"),{...m(e,"renderValue"),pathTrace:f,...o,onDataChange:e=>a(f,e)})}return function(e,r){const a=new Map;return r.forEach(((e,r)=>{a.set(e,r)})),e.sort(((e,r)=>a.has(e)||a.has(r)?a.has(e)?a.has(r)?a.get(e)-a.get(r):-1:1:0)),e}(g(e),n).map((r=>s(e[r],"renderType")?t(e[r],f+`.${r}`,{name:r,...m(e[r],"renderValue")}):h(e)?l(null,[],{name:r,...e[r],pathTrace:f+`.${r}`,onDataChange:e=>a(f+`.${r}`,e)}):l(null,[],{name:r,pathTrace:f+`.${r}`,onDataChange:e=>a(f+`.${r}`,e)})))}return l(null,[],{...o,pathTrace:f})},l=(r,a=[],n={})=>{switch(r){case"stages":return e.createElement(H,n,a);case"tabs":return e.createElement(J,n,a);case"text":return e.createElement("p",null,"This is a text");case"conversations":return e.createElement(y,n,a);case"files":return e.createElement(Q,n,a);case"custom":return e.createElement(Y,n,a);default:return e.createElement(X,n,a)}};return t(r)};export{Z as GlobalRender};

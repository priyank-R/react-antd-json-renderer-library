import e,{useState as a,useEffect as r}from"react";import{List as t,Form as n,Button as l,Input as f,Collapse as o,Tabs as c}from"antd";import i,{isArray as d,get as u,has as s,isObject as h,keys as g,omit as m}from"lodash";import{Comment as b}from"@ant-design/compatible";const{TextArea:p}=f,y=({children:r,...f})=>{const[o,c]=a("");return e.createElement("div",null,e.createElement(t,{className:"comment-list",header:`${r.length} comments`,itemLayout:"horizontal",dataSource:r,renderItem:a=>e.createElement("li",null,e.createElement(b,{author:a.user,content:a.content}))}),e.createElement(n.Item,null,e.createElement(p,{rows:2,onChange:e=>{""!==e.target.value.trim()&&c(e.target.value)},value:o})),e.createElement(n.Item,null,e.createElement(l,{htmlType:"submit",onClick:e=>{r=[...r,{content:o,author:"User"}],f?.onDataChange(r),c("")},type:"primary"},"Add Comment")))};function v(e,a){(function(e){return"string"==typeof e&&-1!==e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");var r=function(e){return"string"==typeof e&&-1!==e.indexOf("%")}(e);return e=360===a?e:Math.min(a,Math.max(0,parseFloat(e))),r&&(e=parseInt(String(e*a),10)/100),Math.abs(e-a)<1e-6?1:e=360===a?(e<0?e%a+a:e%a)/parseFloat(String(a)):e%a/parseFloat(String(a))}function x(e){return e<=1?"".concat(100*Number(e),"%"):e}function k(e){return 1===e.length?"0"+e:String(e)}function E(e,a,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*r*(a-e):r<.5?a:r<2/3?e+(a-e)*(2/3-r)*6:e}function w(e){return F(e)/255}function F(e){return parseInt(e,16)}var A={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function C(e){var a,r,t,n={r:0,g:0,b:0},l=1,f=null,o=null,c=null,i=!1,d=!1;return"string"==typeof e&&(e=function(e){if(0===(e=e.trim().toLowerCase()).length)return!1;var a=!1;if(A[e])e=A[e],a=!0;else if("transparent"===e)return{r:0,g:0,b:0,a:0,format:"name"};var r=$.rgb.exec(e);if(r)return{r:r[1],g:r[2],b:r[3]};if(r=$.rgba.exec(e))return{r:r[1],g:r[2],b:r[3],a:r[4]};if(r=$.hsl.exec(e))return{h:r[1],s:r[2],l:r[3]};if(r=$.hsla.exec(e))return{h:r[1],s:r[2],l:r[3],a:r[4]};if(r=$.hsv.exec(e))return{h:r[1],s:r[2],v:r[3]};if(r=$.hsva.exec(e))return{h:r[1],s:r[2],v:r[3],a:r[4]};if(r=$.hex8.exec(e))return{r:F(r[1]),g:F(r[2]),b:F(r[3]),a:w(r[4]),format:a?"name":"hex8"};if(r=$.hex6.exec(e))return{r:F(r[1]),g:F(r[2]),b:F(r[3]),format:a?"name":"hex"};if(r=$.hex4.exec(e))return{r:F(r[1]+r[1]),g:F(r[2]+r[2]),b:F(r[3]+r[3]),a:w(r[4]+r[4]),format:a?"name":"hex8"};if(r=$.hex3.exec(e))return{r:F(r[1]+r[1]),g:F(r[2]+r[2]),b:F(r[3]+r[3]),format:a?"name":"hex"};return!1}(e)),"object"==typeof e&&(D(e.r)&&D(e.g)&&D(e.b)?(a=e.r,r=e.g,t=e.b,n={r:255*v(a,255),g:255*v(r,255),b:255*v(t,255)},i=!0,d="%"===String(e.r).substr(-1)?"prgb":"rgb"):D(e.h)&&D(e.s)&&D(e.v)?(f=x(e.s),o=x(e.v),n=function(e,a,r){e=6*v(e,360),a=v(a,100),r=v(r,100);var t=Math.floor(e),n=e-t,l=r*(1-a),f=r*(1-n*a),o=r*(1-(1-n)*a),c=t%6;return{r:255*[r,f,l,l,o,r][c],g:255*[o,r,r,f,l,l][c],b:255*[l,l,o,r,r,f][c]}}(e.h,f,o),i=!0,d="hsv"):D(e.h)&&D(e.s)&&D(e.l)&&(f=x(e.s),c=x(e.l),n=function(e,a,r){var t,n,l;if(e=v(e,360),a=v(a,100),r=v(r,100),0===a)n=r,l=r,t=r;else{var f=r<.5?r*(1+a):r+a-r*a,o=2*r-f;t=E(o,f,e+1/3),n=E(o,f,e),l=E(o,f,e-1/3)}return{r:255*t,g:255*n,b:255*l}}(e.h,f,c),i=!0,d="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(l=e.a)),l=function(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}(l),{ok:i,format:e.format||d,r:Math.min(255,Math.max(n.r,0)),g:Math.min(255,Math.max(n.g,0)),b:Math.min(255,Math.max(n.b,0)),a:l}}var M="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),T="[\\s|\\(]+(".concat(M,")[,|\\s]+(").concat(M,")[,|\\s]+(").concat(M,")\\s*\\)?"),S="[\\s|\\(]+(".concat(M,")[,|\\s]+(").concat(M,")[,|\\s]+(").concat(M,")[,|\\s]+(").concat(M,")\\s*\\)?"),$={CSS_UNIT:new RegExp(M),rgb:new RegExp("rgb"+T),rgba:new RegExp("rgba"+S),hsl:new RegExp("hsl"+T),hsla:new RegExp("hsla"+S),hsv:new RegExp("hsv"+T),hsva:new RegExp("hsva"+S),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function D(e){return Boolean($.CSS_UNIT.exec(String(e)))}var I=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function N(e){var a=function(e,a,r){e=v(e,255),a=v(a,255),r=v(r,255);var t=Math.max(e,a,r),n=Math.min(e,a,r),l=0,f=t,o=t-n,c=0===t?0:o/t;if(t===n)l=0;else{switch(t){case e:l=(a-r)/o+(a<r?6:0);break;case a:l=(r-e)/o+2;break;case r:l=(e-a)/o+4}l/=6}return{h:l,s:c,v:f}}(e.r,e.g,e.b);return{h:360*a.h,s:a.s,v:a.v}}function q(e){var a=e.r,r=e.g,t=e.b;return"#".concat(function(e,a,r,t){var n=[k(Math.round(e).toString(16)),k(Math.round(a).toString(16)),k(Math.round(r).toString(16))];return t&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}(a,r,t,!1))}function R(e,a,r){var t=r/100;return{r:(a.r-e.r)*t+e.r,g:(a.g-e.g)*t+e.g,b:(a.b-e.b)*t+e.b}}function O(e,a,r){var t;return(t=Math.round(e.h)>=60&&Math.round(e.h)<=240?r?Math.round(e.h)-2*a:Math.round(e.h)+2*a:r?Math.round(e.h)+2*a:Math.round(e.h)-2*a)<0?t+=360:t>=360&&(t-=360),t}function P(e,a,r){return 0===e.h&&0===e.s?e.s:((t=r?e.s-.16*a:4===a?e.s+.16:e.s+.05*a)>1&&(t=1),r&&5===a&&t>.1&&(t=.1),t<.06&&(t=.06),Number(t.toFixed(2)));var t}function V(e,a,r){var t;return(t=r?e.v+.05*a:e.v-.15*a)>1&&(t=1),Number(t.toFixed(2))}function j(e){for(var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=[],t=C(e),n=5;n>0;n-=1){var l=N(t),f=q(C({h:O(l,n,!0),s:P(l,n,!0),v:V(l,n,!0)}));r.push(f)}r.push(q(t));for(var o=1;o<=4;o+=1){var c=N(t),i=q(C({h:O(c,o),s:P(c,o),v:V(c,o)}));r.push(i)}return"dark"===a.theme?I.map((function(e){var t=e.index,n=e.opacity;return q(R(C(a.backgroundColor||"#141414"),C(r[t]),100*n))})):r}var L={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1677FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},B={},z={};Object.keys(L).forEach((function(e){B[e]=j(L[e]),B[e].primary=B[e][5],z[e]=j(L[e],{theme:"dark",backgroundColor:"#141414"}),z[e].primary=z[e][5]}));var U=B.red,W=B.yellow,_=B.green;const{Panel:G}=o,K=e=>{if(e)return"COMPLETED"===e?_[1]:"IN-PROGRESS"===e?W[1]:"INCOMPLETE"===e?U[1]:void 0},H=({children:a,...r})=>e.createElement(o,null,d(a)?a.map(((a,r)=>{let[t,n]=[u(a,"props.name",u(a,"name",`Panel ${r+1}`)),u(a,"props.status",u(a,"status",null))];return e.createElement(G,{header:t,key:t,style:{backgroundColor:K(n)}},null!==u(a,"props",null)?a:null)})):e.createElement(e.Fragment,null)),J=({children:a})=>e.createElement(c,{onChange:e=>{console.log(e)}},a.map(((a,r)=>{let t=u(a,"props.name",u(a,"name",`Tab ${r+1}`));return e.createElement(c.TabPane,{key:t,tabKey:t,tab:t},s(a,"props")?a:null)}))),Q=({children:n})=>{let[l,f]=a([]);r((()=>{i.isArray(n)&&f(n)}),[n]);let[o,c,d]=[null,null,null];return e.createElement(t,{size:"small",bordered:!0,dataSource:l,renderItem:(a,r)=>(o=i.get(a,"id",i.random()),c=i.get(a,"name",`File ${r+1}`),d=i.get(a,"link",null),e.createElement(t.Item,{key:o},c," ",d?e.createElement("a",{href:d,target:"_blank"},"Link"):e.createElement(e.Fragment,null)))})},X=({children:a,...r})=>e.createElement(e.Fragment,null),Y=({children:a,...r})=>e.createElement(e.Fragment,null,e.Children.map(a,(a=>e.cloneElement(a,{...r})))),Z=({data:a,onDataChange:r=((e,a)=>{})})=>{const[t,n]=e.useState(a),l=(e,a="$",t={})=>d(e)?e.map(((e,n)=>({...e,pathTrace:a+`[${n}]`,...t,onDataChange:e=>r(a+`[${n}]`,e)}))):h(e)&&g(e).length>0?s(e,"renderType",!1)?"custom"==u(e,"renderType",!1)?f(u(e,"renderType",null),u(e,"renderValue"),{...m(e,"renderValue"),pathTrace:a,pass:1,...t,onDataChange:e=>r(a,e)}):f(u(e,"renderType",null),l(e.renderValue,a+".renderValue"),{...m(e,"renderValue"),pathTrace:a,pass:1,...t,onDataChange:e=>r(a,e)}):g(e).map((t=>s(e[t],"renderType")?l(e[t],a+`.${t}`,{name:t,...m(e[t],"renderValue"),pass:2}):h(e)?f(null,[],{name:t,...e[t],pathTrace:a+`.${t}`,pass:3,onDataChange:e=>r(a+`.${t}`,e)}):f(null,[],{name:t,pathTrace:a+`.${t}`,pass:4,onDataChange:e=>r(a+`.${t}`,e)}))):f(null,[],{...t,pathTrace:a}),f=(a,r=[],t={})=>{switch(a){case"stages":return e.createElement(H,t,r);case"tabs":return e.createElement(J,t,r);case"text":return e.createElement("p",null,"This is a text");case"conversations":return e.createElement(y,t,r);case"files":return e.createElement(Q,t,r);case"custom":return e.createElement(Y,t,r);default:return e.createElement(X,t,r)}};return l(t)};export{Z as GlobalRender};

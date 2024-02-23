"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),a=require("antd"),r=require("lodash"),t=require("@ant-design/compatible");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=n(e),f=n(r);const{TextArea:u}=a.Input,o=({children:r,...n})=>{const[f,o]=e.useState("");return l.default.createElement("div",null,l.default.createElement(a.List,{className:"comment-list",header:`${r.length} comments`,itemLayout:"horizontal",dataSource:r,renderItem:e=>l.default.createElement("li",null,l.default.createElement(t.Comment,{author:e.user,content:e.content}))}),l.default.createElement(a.Form.Item,null,l.default.createElement(u,{rows:2,onChange:e=>{""!==e.target.value.trim()&&o(e.target.value)},value:f})),l.default.createElement(a.Form.Item,null,l.default.createElement(a.Button,{htmlType:"submit",onClick:e=>{r=[...r,{content:f,author:"User"}],n?.onDataChange(r),o("")},type:"primary"},"Add Comment")))};function d(e,a){(function(e){return"string"==typeof e&&-1!==e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");var r=function(e){return"string"==typeof e&&-1!==e.indexOf("%")}(e);return e=360===a?e:Math.min(a,Math.max(0,parseFloat(e))),r&&(e=parseInt(String(e*a),10)/100),Math.abs(e-a)<1e-6?1:e=360===a?(e<0?e%a+a:e%a)/parseFloat(String(a)):e%a/parseFloat(String(a))}function c(e){return e<=1?"".concat(100*Number(e),"%"):e}function i(e){return 1===e.length?"0"+e:String(e)}function s(e,a,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*r*(a-e):r<.5?a:r<2/3?e+(a-e)*(2/3-r)*6:e}function h(e){return g(e)/255}function g(e){return parseInt(e,16)}var m={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function b(e){var a,r,t,n={r:0,g:0,b:0},l=1,f=null,u=null,o=null,i=!1,b=!1;return"string"==typeof e&&(e=function(e){if(0===(e=e.trim().toLowerCase()).length)return!1;var a=!1;if(m[e])e=m[e],a=!0;else if("transparent"===e)return{r:0,g:0,b:0,a:0,format:"name"};var r=x.rgb.exec(e);if(r)return{r:r[1],g:r[2],b:r[3]};if(r=x.rgba.exec(e))return{r:r[1],g:r[2],b:r[3],a:r[4]};if(r=x.hsl.exec(e))return{h:r[1],s:r[2],l:r[3]};if(r=x.hsla.exec(e))return{h:r[1],s:r[2],l:r[3],a:r[4]};if(r=x.hsv.exec(e))return{h:r[1],s:r[2],v:r[3]};if(r=x.hsva.exec(e))return{h:r[1],s:r[2],v:r[3],a:r[4]};if(r=x.hex8.exec(e))return{r:g(r[1]),g:g(r[2]),b:g(r[3]),a:h(r[4]),format:a?"name":"hex8"};if(r=x.hex6.exec(e))return{r:g(r[1]),g:g(r[2]),b:g(r[3]),format:a?"name":"hex"};if(r=x.hex4.exec(e))return{r:g(r[1]+r[1]),g:g(r[2]+r[2]),b:g(r[3]+r[3]),a:h(r[4]+r[4]),format:a?"name":"hex8"};if(r=x.hex3.exec(e))return{r:g(r[1]+r[1]),g:g(r[2]+r[2]),b:g(r[3]+r[3]),format:a?"name":"hex"};return!1}(e)),"object"==typeof e&&(k(e.r)&&k(e.g)&&k(e.b)?(a=e.r,r=e.g,t=e.b,n={r:255*d(a,255),g:255*d(r,255),b:255*d(t,255)},i=!0,b="%"===String(e.r).substr(-1)?"prgb":"rgb"):k(e.h)&&k(e.s)&&k(e.v)?(f=c(e.s),u=c(e.v),n=function(e,a,r){e=6*d(e,360),a=d(a,100),r=d(r,100);var t=Math.floor(e),n=e-t,l=r*(1-a),f=r*(1-n*a),u=r*(1-(1-n)*a),o=t%6;return{r:255*[r,f,l,l,u,r][o],g:255*[u,r,r,f,l,l][o],b:255*[l,l,u,r,r,f][o]}}(e.h,f,u),i=!0,b="hsv"):k(e.h)&&k(e.s)&&k(e.l)&&(f=c(e.s),o=c(e.l),n=function(e,a,r){var t,n,l;if(e=d(e,360),a=d(a,100),r=d(r,100),0===a)n=r,l=r,t=r;else{var f=r<.5?r*(1+a):r+a-r*a,u=2*r-f;t=s(u,f,e+1/3),n=s(u,f,e),l=s(u,f,e-1/3)}return{r:255*t,g:255*n,b:255*l}}(e.h,f,o),i=!0,b="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(l=e.a)),l=function(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}(l),{ok:i,format:e.format||b,r:Math.min(255,Math.max(n.r,0)),g:Math.min(255,Math.max(n.g,0)),b:Math.min(255,Math.max(n.b,0)),a:l}}var p="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),y="[\\s|\\(]+(".concat(p,")[,|\\s]+(").concat(p,")[,|\\s]+(").concat(p,")\\s*\\)?"),v="[\\s|\\(]+(".concat(p,")[,|\\s]+(").concat(p,")[,|\\s]+(").concat(p,")[,|\\s]+(").concat(p,")\\s*\\)?"),x={CSS_UNIT:new RegExp(p),rgb:new RegExp("rgb"+y),rgba:new RegExp("rgba"+v),hsl:new RegExp("hsl"+y),hsla:new RegExp("hsla"+v),hsv:new RegExp("hsv"+y),hsva:new RegExp("hsva"+v),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function k(e){return Boolean(x.CSS_UNIT.exec(String(e)))}var E=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function w(e){var a=function(e,a,r){e=d(e,255),a=d(a,255),r=d(r,255);var t=Math.max(e,a,r),n=Math.min(e,a,r),l=0,f=t,u=t-n,o=0===t?0:u/t;if(t===n)l=0;else{switch(t){case e:l=(a-r)/u+(a<r?6:0);break;case a:l=(r-e)/u+2;break;case r:l=(e-a)/u+4}l/=6}return{h:l,s:o,v:f}}(e.r,e.g,e.b);return{h:360*a.h,s:a.s,v:a.v}}function F(e){var a=e.r,r=e.g,t=e.b;return"#".concat(function(e,a,r,t){var n=[i(Math.round(e).toString(16)),i(Math.round(a).toString(16)),i(Math.round(r).toString(16))];return t&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}(a,r,t,!1))}function A(e,a,r){var t=r/100;return{r:(a.r-e.r)*t+e.r,g:(a.g-e.g)*t+e.g,b:(a.b-e.b)*t+e.b}}function C(e,a,r){var t;return(t=Math.round(e.h)>=60&&Math.round(e.h)<=240?r?Math.round(e.h)-2*a:Math.round(e.h)+2*a:r?Math.round(e.h)+2*a:Math.round(e.h)-2*a)<0?t+=360:t>=360&&(t-=360),t}function M(e,a,r){return 0===e.h&&0===e.s?e.s:((t=r?e.s-.16*a:4===a?e.s+.16:e.s+.05*a)>1&&(t=1),r&&5===a&&t>.1&&(t=.1),t<.06&&(t=.06),Number(t.toFixed(2)));var t}function T(e,a,r){var t;return(t=r?e.v+.05*a:e.v-.15*a)>1&&(t=1),Number(t.toFixed(2))}function S(e){for(var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=[],t=b(e),n=5;n>0;n-=1){var l=w(t),f=F(b({h:C(l,n,!0),s:M(l,n,!0),v:T(l,n,!0)}));r.push(f)}r.push(F(t));for(var u=1;u<=4;u+=1){var o=w(t),d=F(b({h:C(o,u),s:M(o,u),v:T(o,u)}));r.push(d)}return"dark"===a.theme?E.map((function(e){var t=e.index,n=e.opacity;return F(A(b(a.backgroundColor||"#141414"),b(r[t]),100*n))})):r}var $={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1677FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},q={},D={};Object.keys($).forEach((function(e){q[e]=S($[e]),q[e].primary=q[e][5],D[e]=S($[e],{theme:"dark",backgroundColor:"#141414"}),D[e].primary=D[e][5]}));var I=q.red,R=q.yellow,O=q.green;const{Panel:N}=a.Collapse,j=e=>{if(e)return"COMPLETED"===e?O[1]:"IN-PROGRESS"===e?R[1]:"INCOMPLETE"===e?I[1]:void 0},L=({children:e,...t})=>l.default.createElement(a.Collapse,null,r.isArray(e)?e.map(((e,a)=>{let[t,n]=[r.get(e,"props.name",r.get(e,"name",`Panel ${a+1}`)),r.get(e,"props.status",r.get(e,"status",null))];return l.default.createElement(N,{header:t,key:t,style:{backgroundColor:j(n)}},null!==r.get(e,"props",null)?e:null)})):l.default.createElement(l.default.Fragment,null)),P=({children:e})=>l.default.createElement(a.Tabs,{onChange:e=>{console.log(e)}},e.map(((e,t)=>{let n=r.get(e,"props.name",r.get(e,"name",`Tab ${t+1}`));return l.default.createElement(a.Tabs.TabPane,{key:n,tabKey:n,tab:n},r.has(e,"props")?e:null)}))),V=({children:r})=>{let[t,n]=e.useState([]);e.useEffect((()=>{f.default.isArray(r)&&n(r)}),[r]);let[u,o,d]=[null,null,null];return l.default.createElement(a.List,{size:"small",bordered:!0,dataSource:t,renderItem:(e,r)=>(u=f.default.get(e,"id",f.default.random()),o=f.default.get(e,"name",`File ${r+1}`),d=f.default.get(e,"link",null),l.default.createElement(a.List.Item,{key:u},o," ",d?l.default.createElement("a",{href:d,target:"_blank"},"Link"):l.default.createElement(l.default.Fragment,null)))})},B=({children:e,...a})=>l.default.createElement(l.default.Fragment,null),_=({children:e,...a})=>React.createElement(React.Fragment,null,e);exports.GlobalRender=({data:e,onDataChange:a=((e,a)=>{})})=>{const[t,n]=l.default.useState(e),f=(e,t="$",n={})=>r.isArray(e)?e.map(((e,r)=>({...e,pathTrace:t+`[${r}]`,...n,onDataChange:e=>a(t+`[${r}]`,e)}))):r.isObject(e)&&r.keys(e).length>0?r.has(e,"renderType",!1)?"custom"==r.get(e,"renderType",!1)?u(r.get(e,"renderType",null),r.get(e,"renderValue"),{...r.omit(e,"renderValue"),pathTrace:t,pass:1,...n,onDataChange:e=>a(t,e)}):u(r.get(e,"renderType",null),f(e.renderValue,t+".renderValue"),{...r.omit(e,"renderValue"),pathTrace:t,pass:1,...n,onDataChange:e=>a(t,e)}):r.keys(e).map((n=>r.has(e[n],"renderType")?f(e[n],t+`.${n}`,{name:n,...r.omit(e[n],"renderValue"),pass:2}):r.isObject(e)?u(null,[],{name:n,...e[n],pathTrace:t+`.${n}`,pass:3,onDataChange:e=>a(t+`.${n}`,e)}):u(null,[],{name:n,pathTrace:t+`.${n}`,pass:4,onDataChange:e=>a(t+`.${n}`,e)}))):u(null,[],{...n,pathTrace:t}),u=(e,a=[],r={})=>{switch(e){case"stages":return l.default.createElement(L,r,a);case"tabs":return l.default.createElement(P,r,a);case"text":return l.default.createElement("p",null,"This is a text");case"conversations":return l.default.createElement(o,r,a);case"files":return l.default.createElement(V,r,a);case"custom":return l.default.createElement(_,r,a);default:return l.default.createElement(B,r,a)}};return f(t)};

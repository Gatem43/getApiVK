import{v as u,i as c,j as p}from"./Ripple.d421ecee.js";import{u as a,o as f,m as y,g as m}from"./index.03d5b017.js";let l,r=0;const n=new Array(256);for(let t=0;t<256;t++)n[t]=(t+256).toString(16).substring(1);const v=(()=>{const t=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(t!==void 0){if(t.randomBytes!==void 0)return t.randomBytes;if(t.getRandomValues!==void 0)return e=>{const o=new Uint8Array(e);return t.getRandomValues(o),o}}return e=>{const o=[];for(let i=e;i>0;i--)o.push(Math.floor(Math.random()*256));return o}})(),d=4096;function x(){(l===void 0||r+16>d)&&(r=0,l=v(d));const t=Array.prototype.slice.call(l,r,r+=16);return t[6]=t[6]&15|64,t[8]=t[8]&63|128,n[t[0]]+n[t[1]]+n[t[2]]+n[t[3]]+"-"+n[t[4]]+n[t[5]]+"-"+n[t[6]]+n[t[7]]+"-"+n[t[8]]+n[t[9]]+"-"+n[t[10]]+n[t[11]]+n[t[12]]+n[t[13]]+n[t[14]]+n[t[15]]}function T(){let t;const e=m();function o(){t=void 0}return a(o),f(o),{removeTick:o,registerTick(i){t=i,y(()=>{t===i&&(u(e)===!1&&t(),t=void 0)})}}}function E(){let t=null;const e=m();function o(){t!==null&&(clearTimeout(t),t=null)}return a(o),f(o),{removeTimeout:o,registerTimeout(i,w){o(),u(e)===!1&&(t=setTimeout(i,w))}}}const g=[null,document,document.body,document.scrollingElement,document.documentElement];function S(t,e){let o=p(e);if(o===void 0){if(t==null)return window;o=t.closest(".scroll,.scroll-y,.overflow-auto")}return g.includes(o)?window:o}function L(t){return t===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:t.scrollTop}function B(t){return t===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:t.scrollLeft}let s;function C(){if(s!==void 0)return s;const t=document.createElement("p"),e=document.createElement("div");c(t,{width:"100%",height:"200px"}),c(e,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);const o=t.offsetWidth;e.style.overflow="scroll";let i=t.offsetWidth;return o===i&&(i=e.clientWidth),e.remove(),s=o-i,s}function W(t,e=!0){return!t||t.nodeType!==Node.ELEMENT_NODE?!1:e?t.scrollHeight>t.clientHeight&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-y"])):t.scrollWidth>t.clientWidth&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-x"]))}export{T as a,E as b,L as c,B as d,C as e,S as g,W as h,x as u};

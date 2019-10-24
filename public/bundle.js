var app=function(){"use strict";function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function c(e){e.forEach(n)}function s(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(e,t,n){if(e){const r=u(e,t,n);return e[0](r)}}function u(e,n,r){return e[1]?t({},t(n.$$scope.ctx,e[1](r?r(n):{}))):n.$$scope.ctx}function i(e,n,r,c){return e[1]?t({},t(n.$$scope.changed||{},e[1](c?c(r):{}))):n.$$scope.changed||{}}function l(e,t){e.appendChild(t)}function d(e,t,n){e.insertBefore(t,n||null)}function f(e){e.parentNode.removeChild(e)}function $(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function m(){return p(" ")}function g(){return p("")}function h(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function v(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function T(e){return""===e?void 0:+e}function b(e,t){t=""+t,e.data!==t&&(e.data=t)}function C(e,t){(null!=t||e.value)&&(e.value=t)}function y(e,t){for(let n=0;n<e.options.length;n+=1){const r=e.options[n];if(r.__value===t)return void(r.selected=!0)}}let _;function x(e){_=e}function O(e){(function(){if(!_)throw new Error("Function called outside component initialization");return _})().$$.on_mount.push(e)}function w(){const e=_;return(t,n)=>{const r=e.$$.callbacks[t];if(r){const c=function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(t,n);r.slice().forEach(t=>{t.call(e,c)})}}}const F=[],E=[],k=[],j=[],N=Promise.resolve();let U=!1;function S(e){k.push(e)}function A(e){j.push(e)}function D(){const e=new Set;do{for(;F.length;){const e=F.shift();x(e),L(e.$$)}for(;E.length;)E.pop()();for(let t=0;t<k.length;t+=1){const n=k[t];e.has(n)||(n(),e.add(n))}k.length=0}while(F.length);for(;j.length;)j.pop()();U=!1}function L(e){e.fragment&&(e.update(e.dirty),c(e.before_update),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_update.forEach(S))}const q=new Set;let R;function z(){R={r:0,c:[],p:R}}function I(){R.r||c(R.c),R=R.p}function J(e,t){e&&e.i&&(q.delete(e),e.i(t))}function P(e,t,n,r){if(e&&e.o){if(q.has(e))return;q.add(e),R.c.push(()=>{q.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}function B(e,t,n){-1!==e.$$.props.indexOf(t)&&(e.$$.bound[t]=n,n(e.$$.ctx[t]))}function G(e,t,r){const{fragment:o,on_mount:a,on_destroy:u,after_update:i}=e.$$;o.m(t,r),S(()=>{const t=a.map(n).filter(s);u?u.push(...t):c(t),e.$$.on_mount=[]}),i.forEach(S)}function M(e,t){e.$$.fragment&&(c(e.$$.on_destroy),e.$$.fragment.d(t),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={})}function W(e,t){e.$$.dirty||(F.push(e),U||(U=!0,N.then(D)),e.$$.dirty=r()),e.$$.dirty[t]=!0}function Y(t,n,s,o,a,u){const i=_;x(t);const l=n.props||{},d=t.$$={fragment:null,ctx:null,props:u,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:r(),dirty:null};let f=!1;var $;d.ctx=s?s(t,l,(e,n,r=n)=>(d.ctx&&a(d.ctx[e],d.ctx[e]=r)&&(d.bound[e]&&d.bound[e](r),f&&W(t,e)),n)):l,d.update(),f=!0,c(d.before_update),d.fragment=o(d.ctx),n.target&&(n.hydrate?d.fragment.l(($=n.target,Array.from($.childNodes))):d.fragment.c(),n.intro&&J(t.$$.fragment),G(t,n.target,n.anchor),D()),x(i)}class H{$destroy(){M(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function K(t){var n,r,c;return{c(){n=$("header"),r=$("h1"),c=p(t.title),v(n,"class","svelte-1d27zk1")},m(e,t){d(e,n,t),l(n,r),l(r,c)},p(e,t){e.title&&b(c,t.title)},i:e,o:e,d(e){e&&f(n)}}}function Q(e,t,n){let{title:r}=t;return e.$set=(e=>{"title"in e&&n("title",r=e.title)}),{title:r}}class V extends H{constructor(e){super(),Y(this,e,Q,K,o,["title"])}}const X=({data:e})=>({data:e}),Z=({data:e})=>({data:e});function ee(e){var t;const n=e.$$slots.default,r=a(n,e,Z);return{c(){r&&r.c()},l(e){r&&r.l(e)},m(e,n){r&&r.m(e,n),t=!0},p(e,t){r&&r.p&&(e.$$scope||e.data)&&r.p(i(n,t,e,X),u(n,t,Z))},i(e){t||(J(r,e),t=!0)},o(e){P(r,e),t=!1},d(e){r&&r.d(e)}}}function te(e,t,n){let r,{baseUrl:c,params:s={}}=t;const o=w();O(async function(){const e=function(){if(c){const e=new URL(c);return Object.keys(s).forEach(t=>e.searchParams.append(t,s[t])),e.toString()}}();if(e){let t=await fetch(e,{method:"GET"});if(!t.ok)throw new Error(`Error fetching ${e} > ${t.status}`);n("data",r=await t.json()),o("data",r)}});let{$$slots:a={},$$scope:u}=t;return e.$set=(e=>{"baseUrl"in e&&n("baseUrl",c=e.baseUrl),"params"in e&&n("params",s=e.params),"$$scope"in e&&n("$$scope",u=e.$$scope)}),{baseUrl:c,params:s,data:r,$$slots:a,$$scope:u}}class ne extends H{constructor(e){super(),Y(this,e,te,ee,o,["baseUrl","params"])}}const re="rates";const ce=({rates:e})=>({rates:e}),se=({rates:e})=>({rates:e});function oe(e){var t,n=new ne({props:{params:{base:e.baseCurrency,target:Array.from(e.targetCurrencies).join(","),apikey:"T0272d9a397f6cf710dd40c09df0626c"},baseUrl:"https://api.currencystack.io/currency",$$slots:{default:[ae]},$$scope:{ctx:e}}});return n.$on("data",e.handleData),{c(){n.$$.fragment.c()},m(e,r){G(n,e,r),t=!0},p(e,t){var r={};(e.baseCurrency||e.targetCurrencies)&&(r.params={base:t.baseCurrency,target:Array.from(t.targetCurrencies).join(","),apikey:"T0272d9a397f6cf710dd40c09df0626c"}),(e.$$scope||e.rates)&&(r.$$scope={changed:e,ctx:t}),n.$set(r)},i(e){t||(J(n.$$.fragment,e),t=!0)},o(e){P(n.$$.fragment,e),t=!1},d(e){M(n,e)}}}function ae(e){var t;const n=e.$$slots.default,r=a(n,e,se);return{c(){r&&r.c()},l(e){r&&r.l(e)},m(e,n){r&&r.m(e,n),t=!0},p(e,t){r&&r.p&&(e.$$scope||e.rates)&&r.p(i(n,t,e,ce),u(n,t,se))},i(e){t||(J(r,e),t=!0)},o(e){P(r,e),t=!1},d(e){r&&r.d(e)}}}function ue(e){var t,n,r=e.baseCurrency&&e.targetCurrencies&&oe(e);return{c(){r&&r.c(),t=g()},m(e,c){r&&r.m(e,c),d(e,t,c),n=!0},p(e,n){n.baseCurrency&&n.targetCurrencies?r?(r.p(e,n),J(r,1)):((r=oe(n)).c(),J(r,1),r.m(t.parentNode,t)):r&&(z(),P(r,1,1,()=>{r=null}),I())},i(e){n||(J(r),n=!0)},o(e){P(r),n=!1},d(e){r&&r.d(e),e&&f(t)}}}function ie(e,t,n){let r=function(){const e=localStorage.getItem(re);return e?JSON.parse(e):{}}(),{baseCurrency:c,targetCurrencies:s}=t;let{$$slots:o={},$$scope:a}=t;return e.$set=(e=>{"baseCurrency"in e&&n("baseCurrency",c=e.baseCurrency),"targetCurrencies"in e&&n("targetCurrencies",s=e.targetCurrencies),"$$scope"in e&&n("$$scope",a=e.$$scope)}),{rates:r,baseCurrency:c,targetCurrencies:s,handleData:function(e){e&&e.detail.rates&&(n("rates",r=e.detail.rates),function(e){localStorage.setItem(re,JSON.stringify(e))}(r))},$$slots:o,$$scope:a}}class le extends H{constructor(e){super(),Y(this,e,ie,ue,o,["baseCurrency","targetCurrencies"])}}const de=({currencies:e})=>({currencies:e}),fe=({currencies:e})=>({currencies:e});function $e(e){var t;const n=e.$$slots.default,r=a(n,e,fe);return{c(){r&&r.c()},l(e){r&&r.l(e)},m(e,n){r&&r.m(e,n),t=!0},p(e,t){r&&r.p&&(e.$$scope||e.currencies)&&r.p(i(n,t,e,de),u(n,t,fe))},i(e){t||(J(r,e),t=!0)},o(e){P(r,e),t=!1},d(e){r&&r.d(e)}}}function pe(e){var t,n=new ne({props:{params:{access_key:"e17dca7d1c71d7f2b48eceb15311b604"},baseUrl:"http://data.fixer.io/api/symbols",$$slots:{default:[$e]},$$scope:{ctx:e}}});return n.$on("data",e.handleData),{c(){n.$$.fragment.c()},m(e,r){G(n,e,r),t=!0},p(e,t){var r={};(e.$$scope||e.currencies)&&(r.$$scope={changed:e,ctx:t}),n.$set(r)},i(e){t||(J(n.$$.fragment,e),t=!0)},o(e){P(n.$$.fragment,e),t=!1},d(e){M(n,e)}}}function me(e,t,n){let{currencies:r}=t;let{$$slots:c={},$$scope:s}=t;return e.$set=(e=>{"currencies"in e&&n("currencies",r=e.currencies),"$$scope"in e&&n("$$scope",s=e.$$scope)}),{currencies:r,handleData:function(e){e&&e.detail.symbols&&n("currencies",r=e.detail.symbols)},$$slots:c,$$scope:s}}class ge extends H{constructor(e){super(),Y(this,e,me,pe,o,["currencies"])}}function he(e,t,n){const r=Object.create(e);return r.code=t[n][0],r.name=t[n][1],r}function ve(t){var n;return{c(){(n=$("p")).textContent="Loading..."},m(e,t){d(e,n,t)},p:e,d(e){e&&f(n)}}}function Te(e){var t,n;let r=Object.entries(e.currencies),c=[];for(let t=0;t<r.length;t+=1)c[t]=be(he(e,r,t));return{c(){t=$("select");for(let e=0;e<c.length;e+=1)c[e].c();void 0===e.selected&&S(()=>e.select_change_handler.call(t)),n=h(t,"change",e.select_change_handler)},m(n,r){d(n,t,r);for(let e=0;e<c.length;e+=1)c[e].m(t,null);y(t,e.selected)},p(e,n){if(e.currencies){let s;for(r=Object.entries(n.currencies),s=0;s<r.length;s+=1){const o=he(n,r,s);c[s]?c[s].p(e,o):(c[s]=be(o),c[s].c(),c[s].m(t,null))}for(;s<c.length;s+=1)c[s].d(1);c.length=r.length}e.selected&&y(t,n.selected)},d(e){e&&f(t),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(c,e),n()}}}function be(e){var t,n,r,c=e.name+"";return{c(){t=$("option"),n=p(c),t.__value=r=e.code,t.value=t.__value},m(e,r){d(e,t,r),l(t,n)},p(e,s){e.currencies&&c!==(c=s.name+"")&&b(n,c),e.currencies&&r!==(r=s.code)&&(t.__value=r),t.value=t.__value},d(e){e&&f(t)}}}function Ce(t){var n;function r(e,t){return t.currencies?Te:ve}var c=r(0,t),s=c(t);return{c(){s.c(),n=g()},m(e,t){s.m(e,t),d(e,n,t)},p(e,t){c===(c=r(0,t))&&s?s.p(e,t):(s.d(1),(s=c(t))&&(s.c(),s.m(n.parentNode,n)))},i:e,o:e,d(e){s.d(e),e&&f(n)}}}function ye(e,t,n){let{currencies:r,selected:c="EUR"}=t;return e.$set=(e=>{"currencies"in e&&n("currencies",r=e.currencies),"selected"in e&&n("selected",c=e.selected)}),{currencies:r,selected:c,select_change_handler:function(){c=function(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}(this),n("selected",c),n("currencies",r)}}}class _e extends H{constructor(e){super(),Y(this,e,ye,Ce,o,["currencies","selected"])}}function xe(e){var t,n,r,c,s,o,a,u,i,l=!1;function p(n){e.selectcurrencies0_selected_binding.call(null,n),t=!0,A(()=>t=!1)}let T={currencies:e.currencies};void 0!==e.selectedFrom&&(T.selected=e.selectedFrom);var b=new _e({props:T});function y(t){e.selectcurrencies1_selected_binding.call(null,t),r=!0,A(()=>r=!1)}E.push(()=>B(b,"selected",p));let _={currencies:e.currencies};void 0!==e.selectedTo&&(_.selected=e.selectedTo);var x=new _e({props:_});function O(){l=!0,e.input_input_handler.call(s)}E.push(()=>B(x,"selected",y));var w=e.selectedFrom&&e.selectedFrom!==e.selectedTo&&Oe(e);return{c(){b.$$.fragment.c(),n=m(),x.$$.fragment.c(),c=m(),s=$("input"),o=m(),w&&w.c(),a=g(),v(s,"type","number"),v(s,"min","0"),v(s,"placeholder","Rate offered"),i=h(s,"input",O)},m(t,r){G(b,t,r),d(t,n,r),G(x,t,r),d(t,c,r),d(t,s,r),C(s,e.rateOffered),d(t,o,r),w&&w.m(t,r),d(t,a,r),u=!0},p(e,n){var c={};e.currencies&&(c.currencies=n.currencies),!t&&e.selectedFrom&&(c.selected=n.selectedFrom),b.$set(c);var o={};e.currencies&&(o.currencies=n.currencies),!r&&e.selectedTo&&(o.selected=n.selectedTo),x.$set(o),!l&&e.rateOffered&&C(s,n.rateOffered),l=!1,n.selectedFrom&&n.selectedFrom!==n.selectedTo?w?(w.p(e,n),J(w,1)):((w=Oe(n)).c(),J(w,1),w.m(a.parentNode,a)):w&&(z(),P(w,1,1,()=>{w=null}),I())},i(e){u||(J(b.$$.fragment,e),J(x.$$.fragment,e),J(w),u=!0)},o(e){P(b.$$.fragment,e),P(x.$$.fragment,e),P(w),u=!1},d(e){M(b,e),e&&f(n),M(x,e),e&&(f(c),f(s),f(o)),w&&w.d(e),e&&f(a),i()}}}function Oe(e){var t,n=new le({props:{baseCurrency:e.selectedFrom,targetCurrencies:Object.keys(e.currencies),$$slots:{default:[Ee,({rates:e})=>({rates:e})]},$$scope:{ctx:e}}});return{c(){n.$$.fragment.c()},m(e,r){G(n,e,r),t=!0},p(e,t){var r={};e.selectedFrom&&(r.baseCurrency=t.selectedFrom),e.currencies&&(r.targetCurrencies=Object.keys(t.currencies)),(e.$$scope||e.selectedTo||e.amountToChange||e.rateOffered||e.selectedFrom)&&(r.$$scope={changed:e,ctx:t}),n.$set(r)},i(e){t||(J(n.$$.fragment,e),t=!0)},o(e){P(n.$$.fragment,e),t=!1},d(e){M(n,e)}}}function we(e){var t,n,r,c,s,o,a,u=e.rates[e.selectedTo]*e.amountToChange+"",i=e.rateOffered&&Fe(e);return{c(){t=$("p"),n=p("Expected amount: "),r=p(u),c=m(),s=p(e.selectedTo),o=m(),i&&i.c(),a=g()},m(e,u){d(e,t,u),l(t,n),l(t,r),l(t,c),l(t,s),d(e,o,u),i&&i.m(e,u),d(e,a,u)},p(e,t){(e.rates||e.selectedTo||e.amountToChange)&&u!==(u=t.rates[t.selectedTo]*t.amountToChange+"")&&b(r,u),e.selectedTo&&b(s,t.selectedTo),t.rateOffered?i?i.p(e,t):((i=Fe(t)).c(),i.m(a.parentNode,a)):i&&(i.d(1),i=null)},d(e){e&&(f(t),f(o)),i&&i.d(e),e&&f(a)}}}function Fe(e){var t,n,r,c,s,o,a,u,i,g,h,v,T,C,y,_=e.rateOffered*e.amountToChange+"",x=(e.rates[e.selectedTo]-e.rateOffered)*e.amountToChange+"",O=(e.rates[e.selectedTo]-e.rateOffered)*e.amountToChange/e.rates[e.selectedTo]+"";return{c(){t=$("p"),n=p("What you get: "),r=p(_),c=m(),s=p(e.selectedTo),o=m(),a=$("p"),u=p("You are lossing "),i=p(x),g=m(),h=p(e.selectedTo),v=p("\n\t\t\t\t\t\t= "),T=p(O),C=m(),y=p(e.selectedFrom)},m(e,f){d(e,t,f),l(t,n),l(t,r),l(t,c),l(t,s),d(e,o,f),d(e,a,f),l(a,u),l(a,i),l(a,g),l(a,h),l(a,v),l(a,T),l(a,C),l(a,y)},p(e,t){(e.rateOffered||e.amountToChange)&&_!==(_=t.rateOffered*t.amountToChange+"")&&b(r,_),e.selectedTo&&b(s,t.selectedTo),(e.rates||e.selectedTo||e.rateOffered||e.amountToChange)&&x!==(x=(t.rates[t.selectedTo]-t.rateOffered)*t.amountToChange+"")&&b(i,x),e.selectedTo&&b(h,t.selectedTo),(e.rates||e.selectedTo||e.rateOffered||e.amountToChange)&&O!==(O=(t.rates[t.selectedTo]-t.rateOffered)*t.amountToChange/t.rates[t.selectedTo]+"")&&b(T,O),e.selectedFrom&&b(y,t.selectedFrom)},d(e){e&&(f(t),f(o),f(a))}}}function Ee(e){var t,n,r,c,s,o,a,u=!1,i=e.rates[e.selectedTo]+"";function g(){u=!0,e.input_input_handler_1.call(t)}var T=e.amountToChange&&we(e);return{c(){t=$("input"),n=m(),T&&T.c(),r=m(),c=$("p"),s=p("Current rate: "),o=p(i),v(t,"type","number"),v(t,"placeholder","Amount to change"),v(t,"min","0"),a=h(t,"input",g)},m(a,u){d(a,t,u),C(t,e.amountToChange),d(a,n,u),T&&T.m(a,u),d(a,r,u),d(a,c,u),l(c,s),l(c,o)},p(e,n){!u&&e.amountToChange&&C(t,n.amountToChange),u=!1,n.amountToChange?T?T.p(e,n):((T=we(n)).c(),T.m(r.parentNode,r)):T&&(T.d(1),T=null),(e.rates||e.selectedTo)&&i!==(i=n.rates[n.selectedTo]+"")&&b(o,i)},d(e){e&&(f(t),f(n)),T&&T.d(e),e&&(f(r),f(c)),a()}}}function ke(e){var t,n,r=e.currencies&&xe(e);return{c(){r&&r.c(),t=g()},m(e,c){r&&r.m(e,c),d(e,t,c),n=!0},p(e,n){n.currencies?r?(r.p(e,n),J(r,1)):((r=xe(n)).c(),J(r,1),r.m(t.parentNode,t)):r&&(z(),P(r,1,1,()=>{r=null}),I())},i(e){n||(J(r),n=!0)},o(e){P(r),n=!1},d(e){r&&r.d(e),e&&f(t)}}}function je(e){var t,n,r,c=new V({props:{title:"Currency loss"}}),s=new ge({props:{$$slots:{default:[ke,({currencies:e})=>({currencies:e})]},$$scope:{ctx:e}}});return{c(){c.$$.fragment.c(),t=m(),n=$("main"),s.$$.fragment.c(),v(n,"class","main svelte-gidnlq")},m(e,o){G(c,e,o),d(e,t,o),d(e,n,o),G(s,n,null),r=!0},p(e,t){var n={};(e.$$scope||e.selectedFrom||e.selectedTo||e.amountToChange||e.rateOffered)&&(n.$$scope={changed:e,ctx:t}),s.$set(n)},i(e){r||(J(c.$$.fragment,e),J(s.$$.fragment,e),r=!0)},o(e){P(c.$$.fragment,e),P(s.$$.fragment,e),r=!1},d(e){M(c,e),e&&(f(t),f(n)),M(s)}}}function Ne(e,t,n){let r,c,s,o,{name:a}=t;return e.$set=(e=>{"name"in e&&n("name",a=e.name)}),{name:a,selectedFrom:r,selectedTo:c,amountToChange:s,rateOffered:o,selectcurrencies0_selected_binding:function(e){n("selectedFrom",r=e)},selectcurrencies1_selected_binding:function(e){n("selectedTo",c=e)},input_input_handler:function(){o=T(this.value),n("rateOffered",o)},input_input_handler_1:function(){s=T(this.value),n("amountToChange",s)}}}return new class extends H{constructor(e){super(),Y(this,e,Ne,je,o,["name"])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map

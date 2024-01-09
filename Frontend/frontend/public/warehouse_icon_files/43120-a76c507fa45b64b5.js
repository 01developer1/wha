(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43120],{74833:function(t,n,e){var r=e(256127),o=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(o,""):t}},256127:function(t){var n=/\s/;t.exports=function(t){for(var e=t.length;e--&&n.test(t.charAt(e)););return e}},266726:function(t,n,e){var r=e(911611),o=e(882846),i=e(491936),a=Math.max,c=Math.min;t.exports=function(t,n,e){var u,s,l,f,p,d,h=0,F=!1,g=!1,v=!0;if("function"!=typeof t)throw TypeError("Expected a function");function m(n){var e=u,r=s;return u=s=void 0,h=n,f=t.apply(r,e)}function D(t){var e=t-d,r=t-h;return void 0===d||e>=n||e<0||g&&r>=l}function b(){var t,e,r,i=o();if(D(i))return x(i);p=setTimeout(b,(t=i-d,e=i-h,r=n-t,g?c(r,l-e):r))}function x(t){return(p=void 0,v&&u)?m(t):(u=s=void 0,f)}function E(){var t,e=o(),r=D(e);if(u=arguments,s=this,d=e,r){if(void 0===p)return h=t=d,p=setTimeout(b,n),F?m(t):f;if(g)return clearTimeout(p),p=setTimeout(b,n),m(d)}return void 0===p&&(p=setTimeout(b,n)),f}return n=i(n)||0,r(e)&&(F=!!e.leading,l=(g="maxWait"in e)?a(i(e.maxWait)||0,n):l,v="trailing"in e?!!e.trailing:v),E.cancel=function(){void 0!==p&&clearTimeout(p),h=0,u=d=s=p=void 0},E.flush=function(){return void 0===p?f:x(o())},E}},911611:function(t){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},882846:function(t,n,e){var r=e(377400);t.exports=function(){return r.Date.now()}},819783:function(t,n,e){var r=e(266726),o=e(911611);t.exports=function(t,n,e){var i=!0,a=!0;if("function"!=typeof t)throw TypeError("Expected a function");return o(e)&&(i="leading"in e?!!e.leading:i,a="trailing"in e?!!e.trailing:a),r(t,n,{leading:i,maxWait:n,trailing:a})}},491936:function(t,n,e){var r=e(74833),o=e(911611),i=e(455193),a=0/0,c=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return a;if(o(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=o(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var e=u.test(t);return e||s.test(t)?l(t.slice(2),e?2:8):c.test(t)?a:+t}},275264:function(t,n,e){"use strict";e.d(n,{Z:function(){return a}});var r=e(282522),o=e(632165),i=/-([a-z]{2})\.json$/;function a(t){var n={},e={},a=[];return t.keys().forEach(function(t){t.match(i)?a.push(t):a=[t].concat(a)}),a.forEach(function(c){var u=c.match(i),s=null!==u?u[1]:"en",l=t(c)||null;if(null!==l&&l.componentDescription){var f=[],p=(0,r.createRender)({headingHashes:n,toc:f,userLanguage:s,location:a,options:{ignoreLanguagePages:o.LANGUAGES_IGNORE_PAGES,env:{SOURCE_CODE_REPO:""}}});l.componentDescription=p(l.componentDescription),l.componentDescriptionToc=f}e[s]=l}),e}},282522:function(t,n,e){var r=e(62839),o=r.createRender,i=r.getHeaders,a=r.getTitle,c=r.renderMarkdown;t.exports={createRender:o,getHeaders:i,getTitle:a,renderMarkdown:c}},62839:function(t,n,e){var r=e(361802).default,o=e(696138),i=e(956436).default,a=e(744384).default,c=e(318335).marked,u=e(554759),s=e(875472),l={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,headerPrefix:!1,headerIds:!1,mangle:!1},f=/---[\r\n]([\s\S]*)[\r\n]---/,p=/# (.*)[\r\n]/,d=/<p class="description">([\s\S]*?)<\/p>/,h=/(.*?):[\r\n]?\s+(\[[^\]]+\]|.*)/g,F=/^\s*$/,g=/[&<>"']/,v=/[&<>"']/g,m=/[<>"']|&(?!#?\w+;)/,D=/[<>"']|&(?!#?\w+;)/g,b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},x=function(t){return b[t]};function E(t,n){if(n){if(g.test(t))return t.replace(v,x)}else if(m.test(t))return t.replace(D,x);return t}var y=["https://m2.material.io/","https://m3.material.io/","https://material.io/","https://getbootstrap.com/","https://icons.getbootstrap.com/","https://pictogrammers.com/","https://www.w3.org/","https://tailwindcss.com/","https://heroicons.com/","https://react-icons.github.io/","https://fontawesome.com/","https://www.radix-ui.com/","https://react-spectrum.adobe.com/","https://headlessui.com/"];t.exports={createRender:function(t){var n=t.headingHashes,e=t.toc,i=t.userLanguage,a=t.options,f={},p=-1;return function(d){var h=new c.Renderer;return h.heading=function(t,r){if(1===r||r>=4)return"<h".concat(r,">").concat(t,"</h").concat(r,">");var a,c=t.replace(/<a\b[^>]*>/gi,"").replace(/<\/a>/gi,"");c=c.replace(/<code\b[^>]*>/gi,"").replace(/<\/code>/gi,""),"en"===i?a=u(c,n):(p+=1,(a=o(n)[p])||(a=u(c,f)));var s=c.replace(/([^\s]\()/g,"$1&#8203;");if(2===r)e.push({text:s,level:r,hash:a,children:[]});else if(3===r){if(!e[e.length-1])throw Error("docs-infra: Missing parent level for: ".concat(c,"\n"));e[e.length-1].children.push({text:s,level:r,hash:a})}return["<h".concat(r,' id="').concat(a,'">'),t,'<a aria-labelledby="'.concat(a,'" class="anchor-link" href="#').concat(a,'" tabindex="-1">'),'<svg><use xlink:href="#anchor-link-icon" /></svg>',"</a>",'<button title="Post a comment" class="comment-link" data-feedback-hash="'.concat(a,'">'),'<svg><use xlink:href="#comment-link-icon" /></svg>',"</button>","</h".concat(r,">")].join("")},h.link=function(n,e,r){var o="";e&&(o+=' title="'.concat(e,'"')),y.some(function(t){return -1!==n.indexOf(t)})&&(o=' target="_blank" rel="noopener nofollow"');var c=n;return function(t,n,e){var r=new URL(t,"https://mui.com/");if(/\/{2,}$/.test(r.pathname))throw Error(["docs-infra: Duplicated trailing slashes. The following link:","[".concat(n,"](").concat(t,") in ").concat(e.location," has duplicated trailing slashes, please only add one."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("mui.com"===r.host){if("/"!==r.pathname[r.pathname.length-1])throw Error(["docs-infra: Missing trailing slash. The following link:","[".concat(n,"](").concat(t,") in ").concat(e.location," is missing a trailing slash, please add it."),"","See https://ahrefs.com/blog/trailing-slash/ for more details.",""].join("\n"));if("#"!==t[0]&&!(t.startsWith("https://")||t.startsWith("http://"))&&"/"!==t[0])throw Error(["docs-infra: Missing leading slash. The following link:","[".concat(n,"](").concat(t,") in ").concat(e.location," is missing a leading slash, please add it."),""].join("\n"))}}(n,r,t),"en"===i||0!==n.indexOf("/")||a.ignoreLanguagePages(n)||(c="/".concat(i).concat(n)),c.startsWith("".concat(a.env.SOURCE_CODE_REPO,"/blob/-/"))&&(c=c.replace("".concat(a.env.SOURCE_CODE_REPO,"/blob/-/"),"".concat(a.env.SOURCE_CODE_REPO,"/blob/v").concat(a.env.LIB_VERSION,"/"))),'<a href="'.concat(c,'"').concat(o,">").concat(r,"</a>")},h.code=function(t,n,e){var r=(n||"").match(/\S*/)[0],o=s(t,r);return(null!=o&&o!==t&&(e=!0,t=o),t="".concat(t.replace(/\n$/,""),"\n"),r)?'<div class="MuiCode-root"><pre><code class="language-'.concat(E(r,!0),'">').concat(e?t:E(t,!0),"</code></pre>").concat('<button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><use class="MuiCode-copy-icon" xlink:href="#copy-icon" /><use class="MuiCode-copied-icon" xlink:href="#copied-icon" /></svg><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>',"\n"):"<pre><code>".concat(e?t:E(t,!0),"</code></pre>\n")},c.use({extensions:[{name:"callout",level:"block",start:function(t){var n=t.match(/:::/);return n?n.index:void 0},tokenizer:function(t){var n=/^ {0,3}(:{3,}(?=[^:\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~:]* *(?=\n|$)|$)/.exec(t);if(n){var e={type:"callout",raw:n[0],text:n[3].trim(),severity:n[2],tokens:[]};return this.lexer.blockTokens(e.text,e.tokens),e}},renderer:function(t){return'<aside class="MuiCallout-root MuiCallout-'.concat(t.severity,'">\n            ').concat(["info","success","warning","error"].includes(t.severity)?['<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">','<use class="MuiCode-copied-icon" xlink:href="#'.concat(t.severity,'-icon" />'),"</svg>"].join("\n"):"",'\n            <div class="MuiCallout-content">\n            ').concat(this.parser.parse(t.tokens),"\n</div></aside>")}}]}),c(d,r(r({},l),{},{renderer:h}))}},getContents:function(t){return t.replace(f,"").split(/^{{("(?:demo|component)":.*)}}$/gm).flatMap(function(t){return t.split(/^(<codeblock(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?<\/codeblock>)$/gm)}).filter(function(t){return!F.test(t)})},getDescription:function(t){var n=t.match(d);if(null!==n)return n[1].trim().replace(/`/g,"")},getCodeblock:function(t){if(t.startsWith("<codeblock")){var n,e=null===(n=t.match(/^<codeblock [^>]*storageKey=["|'](\S*)["|'].*>/m))||void 0===n?void 0:n[1];return{type:"codeblock",data:a(t.matchAll(/^```((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*) ((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)\n((?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\n```/gm)).map(function(t){var n=i(t,4);return{language:n[1],tab:n[2],code:n[3]}}).filter(function(t){return void 0!==t.tab&&!F.test(t.code)}),storageKey:e}}},getHeaders:function(t){var n=t.match(f);if(!n)return{components:[]};n=n[1];try{for(var e,r={};null!==(e=h.exec(n));){var o=e[1],i=e[2].replace(/(.*)/,"$1");"["===i[0]?(i=(i=i.replace(/'/g,'"')).replace(/,\s+\]$/g,"]"),r[o]=JSON.parse(i)):r[o]=i.replace(/^'|'$/g,"")}return r.components?r.components=r.components.split(",").map(function(t){return t.trim()}).sort():r.components=[],r.hooks?r.hooks=r.hooks.split(",").map(function(t){return t.trim()}).sort():r.hooks=[],r}catch(t){throw Error("docs-infra: ".concat(t.message," in getHeader(markdown) with markdown: \n\n").concat(n,"\n"))}},getTitle:function(t){var n=t.match(p);return null===n?"":n[1].replace(/`/g,"")},renderMarkdown:function(t){return/[-*+] `([A-Za-z]+)`/g.test(t)?c.parse(t,l):c.parseInline(t,l).replace(/(\r?\n){2}/g,"<br>").replace(/\r?\n/g," ")}}},554759:function(t){t.exports=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function t(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=1===r?n:"".concat(n,"-").concat(r);return e[o]?t(n,e,r+1):(e[o]=!0,o)}(encodeURI(t.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g,"").replace(/[!@#$%^&*()=_+[\]{}`~;:'"|,.<>/?\s]+/g,"-").replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])\uFE0F?/g,"").replace(/-+/g,"-").replace(/^-|-$/g,"")),n)}},309318:function(t,n,e){"use strict";function r(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}e.d(n,{Z:function(){return r}})},564800:function(t,n,e){"use strict";e.d(n,{Z:function(){return u}});var r=e(280990),o=e(705918),i=e(636927),a=e(884509),c=e(309318);function u(t){var n=(0,i.Z)();return function(){var e,i=(0,o.Z)(t);if(n){var u=(0,o.Z)(this).constructor;e=r(i,arguments,u)}else e=i.apply(this,arguments);return function(t,n){if(n&&("object"===(0,a.Z)(n)||"function"==typeof n))return n;if(void 0!==n)throw TypeError("Derived constructors may only return object or undefined");return(0,c.Z)(t)}(this,e)}}},705918:function(t,n,e){"use strict";e.d(n,{Z:function(){return i}});var r=e(57629),o=e(558473);function i(t){return(i=r?o.bind():function(t){return t.__proto__||o(t)})(t)}},650432:function(t,n,e){"use strict";e.d(n,{Z:function(){return a}});var r=e(469043),o=e(653679),i=e(654601);function a(t,n){if("function"!=typeof n&&null!==n)throw TypeError("Super expression must either be null or a function");t.prototype=r(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),o(t,"prototype",{writable:!1}),n&&(0,i.Z)(t,n)}},636927:function(t,n,e){"use strict";e.d(n,{Z:function(){return o}});var r=e(280990);function o(){if("undefined"==typeof Reflect||!r||r.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(r(Boolean,[],function(){})),!0}catch(t){return!1}}},654601:function(t,n,e){"use strict";e.d(n,{Z:function(){return o}});var r=e(57629);function o(t,n){return(o=r?r.bind():function(t,n){return t.__proto__=n,t})(t,n)}}}]);
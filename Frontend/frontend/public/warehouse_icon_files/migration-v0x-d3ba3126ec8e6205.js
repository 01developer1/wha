(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25539],{627986:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return d}});var s={};a.r(s),a.d(s,{demoComponents:function(){return c},demos:function(){return l},docs:function(){return i},srcComponents:function(){return p}});var t=a(295649);a(827378);var o=a(30733),i={en:{description:"Yeah, v1 has been released! Take advantage of 2 years worth of effort.",location:"/docs/data/material/migration/migration-v0x/migration-v0x.md",rendered:['<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="error-icon" viewBox="0 0 20 20">\n      <path fill-rule="evenodd" d="M2 7.4v5.2a2 2 0 0 0 .586 1.414l3.4 3.4A2 2 0 0 0 7.4 18h5.2a2 2 0 0 0 1.414-.586l3.4-3.4A2 2 0 0 0 18 12.6V7.4a2 2 0 0 0-.586-1.414l-3.4-3.4A2 2 0 0 0 12.6 2H7.4a2 2 0 0 0-1.414.586l-3.4 3.4A2 2 0 0 0 2 7.4Zm11.03-.43a.75.75 0 0 1 0 1.06L11.06 10l1.97 1.97a.75.75 0 1 1-1.06 1.06L10 11.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L8.94 10 6.97 8.03a.75.75 0 0 1 1.06-1.06L10 8.94l1.97-1.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="warning-icon" viewBox="0 0 20 20">\n      <path d="M2.33 17a.735.735 0 0 1-.665-.375.631.631 0 0 1-.094-.375.898.898 0 0 1 .115-.396L9.353 3.062a.621.621 0 0 1 .281-.27.85.85 0 0 1 .729 0 .622.622 0 0 1 .281.27l7.667 12.792c.07.125.108.257.114.396a.63.63 0 0 1-.093.375.842.842 0 0 1-.271.27.728.728 0 0 1-.394.105H2.33Zm7.664-2.5c.211 0 .39-.072.536-.214a.714.714 0 0 0 .218-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.531-.22.736.736 0 0 0-.536.215.714.714 0 0 0-.219.531c0 .212.072.39.215.536.143.146.32.219.531.219Zm0-2.5c.211 0 .39-.072.536-.216a.72.72 0 0 0 .218-.534v-2.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.531-.216.734.734 0 0 0-.536.216.72.72 0 0 0-.219.534v2.5c0 .212.072.39.215.534a.72.72 0 0 0 .531.216Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="success-icon" viewBox="0 0 20 20">\n      <path d="m8.938 10.875-1.25-1.23a.718.718 0 0 0-.521-.228.718.718 0 0 0-.521.229.73.73 0 0 0 0 1.062l1.77 1.771c.153.153.327.23.521.23a.718.718 0 0 0 .521-.23l3.896-3.896a.73.73 0 0 0 0-1.062.718.718 0 0 0-.52-.23.718.718 0 0 0-.521.23l-3.376 3.354ZM10 18a7.796 7.796 0 0 1-3.104-.625 8.065 8.065 0 0 1-2.552-1.719 8.064 8.064 0 0 1-1.719-2.552A7.797 7.797 0 0 1 2 10c0-1.111.208-2.15.625-3.115a8.064 8.064 0 0 1 4.27-4.26A7.797 7.797 0 0 1 10 2c1.111 0 2.15.208 3.115.625a8.096 8.096 0 0 1 4.26 4.26C17.792 7.851 18 8.89 18 10a7.797 7.797 0 0 1-.625 3.104 8.066 8.066 0 0 1-4.26 4.271A7.774 7.774 0 0 1 10 18Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="info-icon" viewBox="0 0 20 20">\n      <path d="M9.996 14c.21 0 .39-.072.535-.216a.72.72 0 0 0 .219-.534v-3.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.532-.216.734.734 0 0 0-.535.216.72.72 0 0 0-.219.534v3.5c0 .213.071.39.214.534a.72.72 0 0 0 .532.216Zm0-6.5c.21 0 .39-.071.535-.214a.714.714 0 0 0 .219-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.532-.219.736.736 0 0 0-.535.214.714.714 0 0 0-.219.532c0 .21.071.39.214.535.143.146.32.219.532.219Zm.01 10.5a7.81 7.81 0 0 1-3.11-.625 8.065 8.065 0 0 1-2.552-1.719 8.066 8.066 0 0 1-1.719-2.551A7.818 7.818 0 0 1 2 9.99c0-1.104.208-2.14.625-3.105a8.066 8.066 0 0 1 4.27-4.26A7.818 7.818 0 0 1 10.009 2a7.75 7.75 0 0 1 3.106.625 8.083 8.083 0 0 1 4.26 4.265A7.77 7.77 0 0 1 18 9.994a7.81 7.81 0 0 1-.625 3.11 8.066 8.066 0 0 1-1.719 2.552 8.083 8.083 0 0 1-2.546 1.719 7.77 7.77 0 0 1-3.104.625Z"/>\n      </symbol>\n      </svg>','\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n        <symbol id="anchor-link-icon" viewBox="0 0 12 6">\n          <path d="M8.9176 0.083252H7.1676C6.84677 0.083252 6.58427 0.345752 6.58427 0.666585C6.58427 0.987419 6.84677 1.24992 7.1676 1.24992H8.9176C9.8801 1.24992 10.6676 2.03742 10.6676 2.99992C10.6676 3.96242 9.8801 4.74992 8.9176 4.74992H7.1676C6.84677 4.74992 6.58427 5.01242 6.58427 5.33325C6.58427 5.65409 6.84677 5.91659 7.1676 5.91659H8.9176C10.5276 5.91659 11.8343 4.60992 11.8343 2.99992C11.8343 1.38992 10.5276 0.083252 8.9176 0.083252ZM3.6676 2.99992C3.6676 3.32075 3.9301 3.58325 4.25094 3.58325H7.75094C8.07177 3.58325 8.33427 3.32075 8.33427 2.99992C8.33427 2.67909 8.07177 2.41659 7.75094 2.41659H4.25094C3.9301 2.41659 3.6676 2.67909 3.6676 2.99992ZM4.83427 4.74992H3.08427C2.12177 4.74992 1.33427 3.96242 1.33427 2.99992C1.33427 2.03742 2.12177 1.24992 3.08427 1.24992H4.83427C5.1551 1.24992 5.4176 0.987419 5.4176 0.666585C5.4176 0.345752 5.1551 0.083252 4.83427 0.083252H3.08427C1.47427 0.083252 0.167603 1.38992 0.167603 2.99992C0.167603 4.60992 1.47427 5.91659 3.08427 5.91659H4.83427C5.1551 5.91659 5.4176 5.65409 5.4176 5.33325C5.4176 5.01242 5.1551 4.74992 4.83427 4.74992Z" />\n        </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n      <path d="M5.025 14H6.95c.183 0 .35-.029.5-.087a1.24 1.24 0 0 0 .425-.288L13.65 7.9a.622.622 0 0 0 .2-.45.622.622 0 0 0-.2-.45l-2.3-2.3a.622.622 0 0 0-.45-.2.622.622 0 0 0-.45.2l-5.725 5.775a1.24 1.24 0 0 0-.287.425 1.37 1.37 0 0 0-.088.5v1.925c0 .184.067.342.2.475a.65.65 0 0 0 .475.2Zm5.325 0h5.725c.367 0 .68-.129.938-.387.258-.258.387-.57.387-.938 0-.366-.13-.679-.387-.937a1.277 1.277 0 0 0-.938-.388H13L10.35 14Zm-5.5 4.4-2.4 2.4c-.417.417-.896.509-1.437.275C.47 20.842.2 20.434.2 19.85V3.55c0-.733.258-1.358.775-1.875A2.554 2.554 0 0 1 2.85.9h16.3c.733 0 1.358.259 1.875.775.517.517.775 1.142.775 1.875v12.2c0 .734-.258 1.359-.775 1.875a2.554 2.554 0 0 1-1.875.775H4.85Z"/>\n      </symbol>\n      </svg>','<h1>Migration from v0.x to v1</h1><p class="description">Yeah, v1 has been released! Take advantage of 2 years worth of effort.</p>\n\n<h2 id="faq">FAQ<a aria-labelledby="faq" class="anchor-link" href="#faq" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="faq"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><h3 id="woah-the-api-is-way-different-does-that-mean-1-0-is-completely-different-ill-have-to-learn-the-basics-all-over-again-and-migrating-will-be-practically-impossible">Woah - the API is way different! Does that mean 1.0 is completely different, I&#39;ll have to learn the basics all over again, and migrating will be practically impossible?<a aria-labelledby="woah-the-api-is-way-different-does-that-mean-1-0-is-completely-different-ill-have-to-learn-the-basics-all-over-again-and-migrating-will-be-practically-impossible" class="anchor-link" href="#woah-the-api-is-way-different-does-that-mean-1-0-is-completely-different-ill-have-to-learn-the-basics-all-over-again-and-migrating-will-be-practically-impossible" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="woah-the-api-is-way-different-does-that-mean-1-0-is-completely-different-ill-have-to-learn-the-basics-all-over-again-and-migrating-will-be-practically-impossible"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>I&#39;m glad you asked! The answer is no. The core concepts haven&#39;t changed.\nYou will notice that the API provides more flexibility, but this has a cost –\nlower-level components that abstract less complexity.</p>\n<h3 id="what-motivated-such-a-large-change">What motivated such a large change?<a aria-labelledby="what-motivated-such-a-large-change" class="anchor-link" href="#what-motivated-such-a-large-change" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="what-motivated-such-a-large-change"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>Material UI was started <a href="https://github.com/mui/material-ui/commit/28b768913b75752ecf9b6bb32766e27c241dbc46">4 years ago</a>.\nThe ecosystem has evolved a lot since then, we have also learned a lot.\n<a href="https://github.com/nathanmarks/">@nathanmarks</a> started an ambitious task, rebuilding Material UI from the <strong>ground-up</strong>\ntaking advantage of this knowledge to address long-standing issues. To name some of the major changes:</p>\n<ul>\n<li>New styling solution using CSS-in-JS (better <a href="/material-ui/customization/how-to-customize/">customization</a> power, better performance)</li>\n<li>New theme handling (nesting, self-supporting, etc.)</li>\n<li>Blazing fast documentation thanks to <a href="https://github.com/vercel/next.js">Next.js</a></li>\n<li>Way better <a href="/material-ui/guides/testing/">test coverage</a> (99%+, run on all the major browsers, <a href="https://app.argos-ci.com/mui/material-ui/builds">visual regression tests</a>)</li>\n<li>Full <a href="/material-ui/guides/server-rendering/">server-side rendering</a> support</li>\n<li>Wide range of <a href="/material-ui/getting-started/supported-platforms/">supported browsers</a></li>\n</ul>\n<h3 id="where-should-i-start-in-a-migration">Where should I start in a migration?<a aria-labelledby="where-should-i-start-in-a-migration" class="anchor-link" href="#where-should-i-start-in-a-migration" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="where-should-i-start-in-a-migration"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><ol>\n<li>Start by installing the v1.x version of Material UI along side the v0.x version.</li>\n</ol>\n<p>With yarn:</p>\n<div class="MuiCode-root"><pre><code class="language-bash"><span class="token function">yarn</span> <span class="token function">add</span> material-ui\n<span class="token function">yarn</span> <span class="token function">add</span> @material-ui/core\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><use class="MuiCode-copy-icon" xlink:href="#copy-icon" /><use class="MuiCode-copied-icon" xlink:href="#copied-icon" /></svg><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<p>Or with npm:</p>\n<div class="MuiCode-root"><pre><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> material-ui\n<span class="token function">npm</span> <span class="token function">install</span> @material-ui/core\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><use class="MuiCode-copy-icon" xlink:href="#copy-icon" /><use class="MuiCode-copied-icon" xlink:href="#copied-icon" /></svg><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<p>then</p>\n<div class="MuiCode-root"><pre><code class="language-js"><span class="token keyword">import</span> FlatButton <span class="token keyword">from</span> <span class="token string">\'material-ui/FlatButton\'</span><span class="token punctuation">;</span> <span class="token comment">// v0.x</span>\n<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'@material-ui/core/Button\'</span><span class="token punctuation">;</span> <span class="token comment">// v1.x</span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><use class="MuiCode-copy-icon" xlink:href="#copy-icon" /><use class="MuiCode-copied-icon" xlink:href="#copied-icon" /></svg><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<ol start="2">\n<li>Run <a href="https://github.com/mui/material-ui/tree/master/packages/mui-codemod">the migration helper</a> on your project.</li>\n<li><code>MuiThemeProvider</code> is optional for v1.x., but if you have a custom theme, you are free to use v0.x and v1.x versions of the component at the same time, like this:</li>\n</ol>\n<div class="MuiCode-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> MuiThemeProvider<span class="token punctuation">,</span> createMuiTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@material-ui/core/styles\'</span><span class="token punctuation">;</span> <span class="token comment">// v1.x</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> MuiThemeProvider <span class="token keyword">as</span> V0MuiThemeProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'material-ui\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> getMuiTheme <span class="token keyword">from</span> <span class="token string">\'material-ui/styles/getMuiTheme\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token function">createMuiTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token comment">/* theme for v1.x */</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> themeV0 <span class="token operator">=</span> <span class="token function">getMuiTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token comment">/* theme for v0.x */</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MuiThemeProvider</span></span> <span class="token attr-name">theme</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>theme<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">V0MuiThemeProvider</span></span> <span class="token attr-name">muiTheme</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>themeV0<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token comment">/*Components*/</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">V0MuiThemeProvider</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MuiThemeProvider</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><use class="MuiCode-copy-icon" xlink:href="#copy-icon" /><use class="MuiCode-copied-icon" xlink:href="#copied-icon" /></svg><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<ol start="4">\n<li>After that, you are free to migrate one component instance at the time.</li>\n</ol>\n<h2 id="components">Components<a aria-labelledby="components" class="anchor-link" href="#components" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="components"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><h3 id="autocomplete">Autocomplete<a aria-labelledby="autocomplete" class="anchor-link" href="#autocomplete" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="autocomplete"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>Material UI doesn&#39;t provide a high-level API for solving this problem.\nYou&#39;re encouraged you to explore <a href="/material-ui/react-autocomplete/">the solutions the React community has built</a>.</p>\n<p>In the future, we will look into providing a simple component to solve the simple use cases: <a href="https://github.com/mui/material-ui/issues/9997">#9997</a>.</p>\n<h3 id="svg-icon">Svg Icon<a aria-labelledby="svg-icon" class="anchor-link" href="#svg-icon" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="svg-icon"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>Run <a href="https://github.com/mui/material-ui/tree/master/packages/mui-codemod">the migration helper</a> on your project.</p>\n<p>This will apply a change such as the following:</p>\n<div class="MuiCode-root"><pre><code class="language-diff"><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">import AddIcon from \'material-ui/svg-icons/Add\';\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">import AddIcon from \'@mui/icons-material/Add\';\n</span></span>\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">&lt;AddIcon /></span></span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><use class="MuiCode-copy-icon" xlink:href="#copy-icon" /><use class="MuiCode-copied-icon" xlink:href="#copied-icon" /></svg><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h3 id="flat-button">Flat Button<a aria-labelledby="flat-button" class="anchor-link" href="#flat-button" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="flat-button"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><div class="MuiCode-root"><pre><code class="language-diff"><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">import FlatButton from \'material-ui/FlatButton\';\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">import Button from \'@material-ui/core/Button\';\n</span></span>\n<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">&lt;FlatButton />\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">&lt;Button /></span></span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><use class="MuiCode-copy-icon" xlink:href="#copy-icon" /><use class="MuiCode-copied-icon" xlink:href="#copied-icon" /></svg><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h3 id="raised-button">Raised Button<a aria-labelledby="raised-button" class="anchor-link" href="#raised-button" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="raised-button"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>RaisedButton upgrade path:</p>\n<div class="MuiCode-root"><pre><code class="language-diff"><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">import RaisedButton from \'material-ui/RaisedButton\';\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">import Button from \'@material-ui/core/Button\';\n</span></span>\n<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">&lt;RaisedButton />\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">&lt;Button variant="contained" /></span></span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><use class="MuiCode-copy-icon" xlink:href="#copy-icon" /><use class="MuiCode-copied-icon" xlink:href="#copied-icon" /></svg><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h3 id="subheader">Subheader<a aria-labelledby="subheader" class="anchor-link" href="#subheader" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="subheader"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><div class="MuiCode-root"><pre><code class="language-diff"><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">import Subheader from \'material-ui/Subheader\';\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">import ListSubheader from \'@material-ui/core/ListSubheader\';\n</span></span>\n<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">&lt;Subheader>Sub Heading&lt;/Subheader>\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">&lt;ListSubheader>Sub Heading&lt;/ListSubheader></span></span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><use class="MuiCode-copy-icon" xlink:href="#copy-icon" /><use class="MuiCode-copied-icon" xlink:href="#copied-icon" /></svg><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h3 id="toggle">Toggle<a aria-labelledby="toggle" class="anchor-link" href="#toggle" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="toggle"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><div class="MuiCode-root"><pre><code class="language-diff"><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">import Toggle from \'material-ui/Toggle\';\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">import Switch from \'@material-ui/core/Switch\';\n</span></span>\n<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">&lt;Toggle\n</span><span class="token prefix deleted">-</span><span class="token line">  toggled={this.state.checkedA}\n</span><span class="token prefix deleted">-</span><span class="token line">  onToggle={this.handleToggle}\n</span><span class="token prefix deleted">-</span><span class="token line">/>\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">&lt;Switch\n</span><span class="token prefix inserted">+</span><span class="token line">  checked={this.state.checkedA}\n</span><span class="token prefix inserted">+</span><span class="token line">  onChange={this.handleSwitch}\n</span><span class="token prefix inserted">+</span><span class="token line">/></span></span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><use class="MuiCode-copy-icon" xlink:href="#copy-icon" /><use class="MuiCode-copied-icon" xlink:href="#copied-icon" /></svg><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h3 id="menu-item">Menu Item<a aria-labelledby="menu-item" class="anchor-link" href="#menu-item" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="menu-item"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><div class="MuiCode-root"><pre><code class="language-diff"><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">import MenuItem from \'material-ui/MenuItem\';\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">import MenuItem from \'@material-ui/core/MenuItem\';\n</span></span>\n<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">&lt;MenuItem primaryText="Profile" />\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">&lt;MenuItem>Profile&lt;/MenuItem></span></span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><use class="MuiCode-copy-icon" xlink:href="#copy-icon" /><use class="MuiCode-copied-icon" xlink:href="#copied-icon" /></svg><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h3 id="font-icon">Font Icon<a aria-labelledby="font-icon" class="anchor-link" href="#font-icon" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="font-icon"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><div class="MuiCode-root"><pre><code class="language-diff"><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">import FontIcon from \'material-ui/FontIcon\';\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">import Icon from \'@material-ui/core/Icon\';\n</span></span>\n<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">&lt;FontIcon>home&lt;/FontIcon>\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">&lt;Icon>home&lt;/Icon></span></span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><use class="MuiCode-copy-icon" xlink:href="#copy-icon" /><use class="MuiCode-copied-icon" xlink:href="#copied-icon" /></svg><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h3 id="circular-progress">Circular Progress<a aria-labelledby="circular-progress" class="anchor-link" href="#circular-progress" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="circular-progress"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><div class="MuiCode-root"><pre><code class="language-diff"><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">import CircularProgress from \'material-ui/CircularProgress\';\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">import CircularProgress from \'@material-ui/core/CircularProgress\';\n</span></span>\n<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">&lt;CircularProgress mode="indeterminate" />\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">&lt;CircularProgress variant="indeterminate" /></span></span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><use class="MuiCode-copy-icon" xlink:href="#copy-icon" /><use class="MuiCode-copied-icon" xlink:href="#copied-icon" /></svg><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h3 id="drop-down-menu">Drop Down Menu<a aria-labelledby="drop-down-menu" class="anchor-link" href="#drop-down-menu" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="drop-down-menu"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><div class="MuiCode-root"><pre><code class="language-diff"><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">import DropDownMenu from \'material-ui/DropDownMenu\';\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">import Select from \'@material-ui/core/Select\';\n</span></span>\n<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">&lt;DropDownMenu>&lt;/DropDownMenu>\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">&lt;Select value={this.state.value}>&lt;/Select></span></span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><use class="MuiCode-copy-icon" xlink:href="#copy-icon" /><use class="MuiCode-copied-icon" xlink:href="#copied-icon" /></svg><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h3 id="to-be-continued">To be continued…<a aria-labelledby="to-be-continued" class="anchor-link" href="#to-be-continued" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="to-be-continued"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>Have you successfully migrated your app, and wish to help the community?\nThere is an open issue in order to finish this migration guide <a href="https://github.com/mui/material-ui/issues/7195">#7195</a>. Any pull request is welcomed \uD83D\uDE0A.</p>\n'],toc:[{text:"FAQ",level:2,hash:"faq",children:[{text:"Woah - the API is way different! Does that mean 1.0 is completely different, I&#39;ll have to learn the basics all over again, and migrating will be practically impossible?",level:3,hash:"woah-the-api-is-way-different-does-that-mean-1-0-is-completely-different-ill-have-to-learn-the-basics-all-over-again-and-migrating-will-be-practically-impossible"},{text:"What motivated such a large change?",level:3,hash:"what-motivated-such-a-large-change"},{text:"Where should I start in a migration?",level:3,hash:"where-should-i-start-in-a-migration"}]},{text:"Components",level:2,hash:"components",children:[{text:"Autocomplete",level:3,hash:"autocomplete"},{text:"Svg Icon",level:3,hash:"svg-icon"},{text:"Flat Button",level:3,hash:"flat-button"},{text:"Raised Button",level:3,hash:"raised-button"},{text:"Subheader",level:3,hash:"subheader"},{text:"Toggle",level:3,hash:"toggle"},{text:"Menu Item",level:3,hash:"menu-item"},{text:"Font Icon",level:3,hash:"font-icon"},{text:"Circular Progress",level:3,hash:"circular-progress"},{text:"Drop Down Menu",level:3,hash:"drop-down-menu"},{text:"To be continued…",level:3,hash:"to-be-continued"}]}],title:"Migration from v0.x to v1",headers:{components:[]}}},l={};l.scope={process:{},import:{}};var c={},p={},r=a(824246);function d(){return(0,r.jsx)(o.Z,(0,t.Z)({},s))}},30733:function(e,n,a){"use strict";a.d(n,{Z:function(){return y}});var s,t=a(295649),o=a(827378),i=a(723615),l=a.n(i),c=a(686677),p=a(486925),r=a(228319),d=a(791963),u=a(807716),h=a(5105),m=a(274087),k=a(957904),g=a(853403),f=a(54775),v=a(824246);function b(e){var n=e.mode,a=(0,r.tv)().setMode;return o.useEffect(function(){a(n)},[n,a]),null}function y(e){var n=(0,p.Z)(),a=(0,c.useRouter)(),i=(0,u.ln)(a.asPath).canonicalAs,l=e.disableAd,y=void 0!==l&&l,x=e.disableToc,C=e.disableCssVarsProvider,w=e.demos,M=void 0===w?{}:w,I=e.docs,P=e.demoComponents,B=e.srcComponents,T=I[(0,m.useUserLanguage)()]||I.en,A=i.startsWith("/joy-ui/")&&!(void 0!==C&&C),S=A?r.lL:o.Fragment,Z=A?k.default:o.Fragment,R=(0,t.Z)({},A&&{mode:n.palette.mode});return(0,v.jsxs)(h.Z,{description:T.description,disableAd:y,disableToc:void 0!==x&&x,location:T.location,title:T.title,toc:T.toc,children:[y?null:s||(s=(0,v.jsx)(k.default,{children:(0,v.jsx)(f.Z,{children:(0,v.jsx)(g.ZP,{})})})),(0,v.jsxs)(S,{children:[A&&(0,v.jsx)(b,{mode:n.palette.mode}),T.rendered.map(function(e,a){return(0,v.jsx)(d.Z,{demoComponents:P,demos:M,disableAd:y,localizedDoc:T,renderedMarkdownOrDemo:e,srcComponents:B,theme:n,WrapperComponent:Z,wrapperProps:R},"demos-section-".concat(a))})]})]})}b.propTypes={mode:l().oneOf(["light","dark"])}},773849:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/migration/migration-v0x",function(){return a(627986)}])}},function(e){e.O(0,[2581,39456,54472,74048,93526,55308,15794,20933,45038,14738,58849,79125,19158,92807,53280,37853,12094,90565,51147,89150,42522,38665,91963,49774,92888,40179],function(){return e(e.s=773849)}),_N_E=e.O()}]);
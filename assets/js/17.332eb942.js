(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{225:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("You can use the "),s("code",[t._v("CDN")]),t._v(" link to introduce these third-party libraries, which can greatly increase the speed of the build (the resources introduced through the CDN are not packaged by webpack). If your project does not have its own "),s("code",[t._v("CDN")]),t._v(" service, use some third-party "),s("code",[t._v("CDN")]),t._v(" services, such as "),s("a",{attrs:{href:"https://unpkg.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("unpkg"),s("OutboundLink")],1),t._v(", etc. It is a good choice, it has provided free Resource acceleration. At the same time, it provides cache optimization. Since your third-party resources are introduced in "),s("code",[t._v("html")]),t._v(" through "),s("code",[t._v("script")]),t._v(", its cache update strategy is controlled by you manually, eliminating the need to optimize the cache strategy.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),s("p",[t._v("There is also a small detail. If you use the global object method to introduce vue, you don't need to manually Vue.use(Vuex), it will be mounted automatically. "),s("a",{attrs:{href:"https://github.com/vuejs/vuex/issues/731",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Complete "),s("a",{attrs:{href:"https://github.com/PanJiaChen/vue-admin-template/commit/0e6a5c72fa1905d0a51b1a1cbf4fb1e9ac1a6f7e",target:"_blank",rel:"noopener noreferrer"}},[t._v("code modification"),s("OutboundLink")],1)]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("By the same token, other third-party dependencies can be handled in the same way. Of course, you can also choose to use "),s("a",{attrs:{href:"https://webpack.docschina.org/plugins/dll-plugin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("DLLPlugin"),s("OutboundLink")],1),t._v(" to handle third-party dependencies to optimize the build.")])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"cdn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cdn","aria-hidden":"true"}},[this._v("#")]),this._v(" CDN")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("You can analyze the results of the "),s("code",[t._v("webpack")]),t._v(" package by executing "),s("code",[t._v("npm run preview -- --report")]),t._v(" and observe the size of each static resource. You can find that the most occupied space is the dependence of third parties. Such as "),s("code",[t._v("vue")]),t._v(", "),s("code",[t._v("element-ui")]),t._v(", "),s("code",[t._v("ECharts")]),t._v(", etc.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Many articles say that the use of "),s("code",[t._v("CDN")]),t._v(" can greatly reduce the size of the code, which is impossible. Although the packaged "),s("code",[t._v("bundle")]),t._v(" is small. But that part of the code was just removed by you, and it was introduced using the "),s("code",[t._v("CDN")]),t._v(" method. The most efficient solution you want to reduce the size is to enable "),s("code",[t._v("GZIP")]),t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"i-personally-do-not-use-cdn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#i-personally-do-not-use-cdn","aria-hidden":"true"}},[this._v("#")]),this._v(" I personally do not use "),e("code",[this._v("CDN")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("There is no problem with the temporary build speed, and there is no need to strip some of the third-party dependencies separately. Using "),s("code",[t._v("CDN")]),t._v(" equals some third-party dependent versions you control through "),s("code",[t._v("package.json")]),t._v(", some dependencies require manual maintenance, adding some maintenance costs. At present, the webpack-based "),s("code",[t._v("optimization.splitChunks")]),t._v(" has been optimized for the caching of resources, and the caching of static resources has been done very well. And all current static resources will be uploaded to their own "),s("code",[t._v("CDN")]),t._v(" service, there is no need to use a third-party "),s("code",[t._v("CDN")]),t._v(" service.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Of course, all optimizations need to be adjusted in conjunction with their specific business!")]),this._v(" If you feel that the use of "),e("code",[this._v("CDN")]),this._v(" is beneficial for your project, you can follow these steps:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"way-of-use"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#way-of-use","aria-hidden":"true"}},[this._v("#")]),this._v(" Way of use")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("First find "),s("code",[t._v("public/index.html")]),t._v(".\nIntroducing css and js of "),s("code",[t._v("ElementUI")]),t._v(" and introducing "),s("code",[t._v("vue")]),t._v(". Because "),s("code",[t._v("ElementUI")]),t._v(" is dependent on "),s("code",[t._v("vue")]),t._v(", it must be introduced before it "),s("code",[t._v("vue")]),t._v(".")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- style --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/element-ui/lib/theme-chalk/index.css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Vue --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/vue/dist/vue.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Other --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/element-ui/lib/index.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Then find "),s("code",[t._v("vue.config.js")]),t._v(" and add "),s("code",[t._v("externals")]),t._v(" to make "),s("code",[t._v("webpack")]),t._v(" not package "),s("code",[t._v("vue")]),t._v(" and "),s("code",[t._v("element")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("externals"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'element-ui'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ELEMENT'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Finally you can use "),e("code",[this._v("npm run preview -- --report")]),this._v(" to see the effect as shown:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://camo.githubusercontent.com/0c5bdc47aeaecc340b9a5a88325b49885538bf90/68747470733a2f2f70616e6a69616368656e2e6769746875622e696f2f696d616765732f656c656d656e742d63646e2e706e67",alt:""}})])}],!1,null,null,null);e.default=n.exports}}]);
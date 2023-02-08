import __nuxt_component_0 from './index-0ad9cbe7.mjs';
import { _ as __nuxt_component_0$1 } from './app.config-d99d58fe.mjs';
import _sfc_main$1 from './FlatCard-21621c86.mjs';
import { defineComponent, withAsyncContext, withCtx, createTextVNode, unref, createVNode, useSSRContext } from 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/vue/index.mjs';
import { u as useAsyncData, q as queryContent } from './query-aca7ac1f.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/@vue/reactivity/index.js';
import '../server.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/unctx/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/h3/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/ufo/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/unenv/runtime/npm/cross-fetch.mjs';
import 'events';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/unenv/runtime/npm/debug.mjs';
import 'util';
import 'crypto';
import 'url';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/bufferutil/index.js';
import 'buffer';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/utf-8-validate/index.js';
import 'http';
import 'https';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/typedarray-to-buffer/index.js';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/yaeti/index.js';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/nitropack/node_modules/defu/dist/defu.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/@fortawesome/fontawesome-svg-core/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/@fortawesome/vue-fontawesome/index.js';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/@fortawesome/free-solid-svg-icons/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/@fortawesome/free-brands-svg-icons/index.mjs';
import '../../nitro/config.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/destr/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/scule/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/ohash/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/hookable/dist/index.mjs';
import './query-13b6418e.mjs';
import './utils-16ea5da4.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("article", () => queryContent("/article").sort({ date: -1 }).find())), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Text = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ArticleFlatCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><br>`);
      _push(ssrRenderComponent(_component_Text, { hero: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Articles. `);
          } else {
            return [
              createTextVNode(" Articles. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid grid-cols-2 gap-12 &lt;sm:grid-cols-1"><!--[-->`);
      ssrRenderList(unref(data), (article, idx) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: idx,
          to: article._path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ArticleFlatCard, {
                title: article.title,
                description: article.description,
                date: article.date,
                "img-src": article.image.src
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ArticleFlatCard, {
                  title: article.title,
                  description: article.description,
                  date: article.date,
                  "img-src": article.image.src
                }, null, 8, ["title", "description", "date", "img-src"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><br></div><br><br></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/article/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-461ab7f4.mjs.map

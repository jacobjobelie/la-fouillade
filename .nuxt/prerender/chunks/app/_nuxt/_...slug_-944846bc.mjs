import _sfc_main$1 from './Title-5bda246b.mjs';
import _sfc_main$3 from './ContentDoc-34fa3ea1.mjs';
import { _ as _sfc_main$2 } from './index-b592cdb4.mjs';
import { i as useRoute } from './app.config-d99d58fe.mjs';
import { defineComponent, withAsyncContext, unref, useSSRContext } from 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/vue/index.mjs';
import { q as queryContent } from './query-aca7ac1f.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/vue/server-renderer/index.mjs';
import './index-17c13956.mjs';
import './index-0ad9cbe7.mjs';
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
import './ContentRenderer-2926bc8c.mjs';
import './ContentRendererMarkdown-dd063866.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/property-information/index.js';
import './ContentQuery-c1f20701.mjs';
import './query-13b6418e.mjs';
import './utils-16ea5da4.mjs';
import './index-76e6c31d.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const articleInfo = ([__temp, __restore] = withAsyncContext(() => queryContent(route.path).findOne()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArticleTitle = _sfc_main$1;
      const _component_ContentDoc = _sfc_main$3;
      const _component_PrevNext = _sfc_main$2;
      _push(`<main${ssrRenderAttrs(_attrs)}><br>`);
      _push(ssrRenderComponent(_component_ArticleTitle, {
        title: unref(articleInfo).title,
        date: unref(articleInfo).date,
        description: unref(articleInfo).description,
        cover: unref(articleInfo).image.src,
        tags: unref(articleInfo).tags
      }, null, _parent));
      _push(ssrRenderComponent(_component_ContentDoc, null, null, _parent));
      _push(`<div class="h-80px"></div>`);
      _push(ssrRenderComponent(_component_PrevNext, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/article/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-944846bc.mjs.map

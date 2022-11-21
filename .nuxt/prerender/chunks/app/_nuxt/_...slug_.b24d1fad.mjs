import _sfc_main$1 from './Title.459cffeb.mjs';
import _sfc_main$3 from './ContentDoc.0e7d164e.mjs';
import { _ as _sfc_main$2 } from './index.a706262f.mjs';
import { b as useRoute } from '../server.mjs';
import { defineComponent, withAsyncContext, unref, useSSRContext } from 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/vue/index.mjs';
import { q as queryContent } from './query.28bcdfca.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/vue/server-renderer/index.mjs';
import './index.5bfb0df8.mjs';
import './index.f0cb68bc.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/@vue/reactivity/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/hookable/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unctx/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/destr/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/ufo/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/h3/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/ohash/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unenv/runtime/npm/cross-fetch.mjs';
import 'events';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unenv/runtime/npm/debug.mjs';
import 'util';
import 'crypto';
import 'url';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/bufferutil/index.js';
import 'buffer';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/utf-8-validate/index.js';
import 'http';
import 'https';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/typedarray-to-buffer/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/yaeti/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/defu/dist/defu.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/@fortawesome/fontawesome-svg-core/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/@fortawesome/vue-fontawesome/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/@fortawesome/free-solid-svg-icons/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/@fortawesome/free-brands-svg-icons/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/scule/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unstorage/dist/drivers/fs.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/radix3/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/pathe/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unified/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/micromark/lib/preprocess.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/micromark/lib/postprocess.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/micromark-util-character/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/remark-emoji/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/rehype-slug/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/remark-squeeze-paragraphs/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/rehype-external-links/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/remark-gfm/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/rehype-raw/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/remark-parse/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/remark-rehype/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/mdast-util-to-hast/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/detab/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unist-builder/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/mdurl/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/slugify/slugify.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unist-util-position/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/html-tags/index.js';
import './ContentRenderer.c8a5e15a.mjs';
import './ContentRendererMarkdown.91f8dd3a.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/property-information/index.js';
import './ContentQuery.b268c5ac.mjs';
import './utils.e67eb962.mjs';
import './index.ce8762a7.mjs';

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
//# sourceMappingURL=_...slug_.b24d1fad.mjs.map

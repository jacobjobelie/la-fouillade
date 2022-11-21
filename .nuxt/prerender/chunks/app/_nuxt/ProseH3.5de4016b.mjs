import { u as useRuntimeConfig } from '../server.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot } from 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/vue/server-renderer/index.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProseH3",
  __ssrInlineRender: true,
  props: {
    id: null
  },
  setup(__props) {
    const heading = 3;
    const { anchorLinks } = useRuntimeConfig().public.content;
    const generate = (anchorLinks == null ? void 0 : anchorLinks.depth) >= heading && !(anchorLinks == null ? void 0 : anchorLinks.exclude.includes(heading));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h3${ssrRenderAttrs(mergeProps({ id: __props.id }, _attrs))}>`);
      if (unref(generate)) {
        _push(`<a${ssrRenderAttr("href", `#${__props.id}`)}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
      _push(`</h3>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ProseH3.5de4016b.mjs.map

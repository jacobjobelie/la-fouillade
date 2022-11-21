import { useSSRContext, defineComponent, mergeProps, unref } from 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot } from 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/vue/server-renderer/index.mjs';
import { computed } from 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/@vue/reactivity/index.js';
import { _ as _export_sfc } from '../server.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  props: {
    hero: { type: Boolean },
    h1: { type: Boolean },
    h2: { type: Boolean },
    h3: { type: Boolean },
    h4: { type: Boolean },
    base: { type: Boolean },
    sm: { type: Boolean },
    p: { type: Boolean },
    em: { type: Boolean },
    b: { type: Boolean },
    code: { type: Boolean },
    title: { type: Boolean },
    size: null,
    weight: null,
    gradient: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const styleList = computed(() => {
      const list = [];
      if (props.hero) {
        list.push("hero");
      } else if (props.h1) {
        list.push("h1");
      } else if (props.h2) {
        list.push("h2");
      } else if (props.h3) {
        list.push("h3");
      } else if (props.h4) {
        list.push("h4");
      } else if (props.base) {
        list.push("base");
      } else if (props.sm) {
        list.push("sm");
      } else {
        list.push("p");
      }
      if (props.code)
        list.push("code");
      if (props.title)
        list.push("title");
      if (props.em)
        list.push("em");
      if (props.b)
        list.push("b");
      if (props.gradient)
        list.push("gradient");
      return list;
    });
    console.log();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({ class: unref(styleList) }, _attrs))} data-v-d3c5a864>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Text/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d3c5a864"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=index.e22a7eff.mjs.map

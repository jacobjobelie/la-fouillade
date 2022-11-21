import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { computed } from "@vue/reactivity";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "ufo";
import "h3";
import "@unhead/vue";
import "@unhead/dom";
import "vue-router";
import "cookie-es";
import "ohash";
import "cross-fetch";
import "events";
import "debug";
import "util";
import "crypto";
import "url";
import "bufferutil";
import "buffer";
import "utf-8-validate";
import "http";
import "https";
import "typedarray-to-buffer";
import "yaeti";
import "defu";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
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
const index_vue_vue_type_style_index_0_scoped_d3c5a864_lang = "";
const index_vue_vue_type_style_index_1_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Text/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d3c5a864"]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=index.b81898ae.js.map

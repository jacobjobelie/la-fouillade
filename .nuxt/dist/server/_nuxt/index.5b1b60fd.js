import __nuxt_component_0 from "./index.b81898ae.js";
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "gifloop";
import { _ as _export_sfc } from "../server.mjs";
import "@vue/reactivity";
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
  setup(__props) {
    const welcom = ref("Destination: La Fouillade - July 1-8 2023");
    ref();
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Text = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full mx-auto" }, _attrs))} data-v-d9805895><div class="relative w-full h-full grid items-center place-items-center" data-v-d9805895>`);
      _push(ssrRenderComponent(_component_Text, { h1: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(welcom.value)}`);
          } else {
            return [
              createTextVNode(toDisplayString(welcom.value), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="absolute top-0 left-0 h-full w-full opacity-30 pointer-events-none" data-v-d9805895></div></div></div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_d9805895_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d9805895"]]);
export {
  index as default
};
//# sourceMappingURL=index.5b1b60fd.js.map

import __nuxt_component_0 from "./index.e22a7eff.js";
import { u as useRuntimeConfig } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, unref, openBlock, createBlock, renderSlot, useSSRContext } from "vue";
import "destr";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import "@vue/reactivity";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
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
  __name: "ProseH1",
  __ssrInlineRender: true,
  props: {
    id: null
  },
  setup(__props) {
    const heading = 1;
    const { anchorLinks } = useRuntimeConfig().public.content;
    const generate = (anchorLinks == null ? void 0 : anchorLinks.depth) >= heading && !(anchorLinks == null ? void 0 : anchorLinks.exclude.includes(heading));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Text = __nuxt_component_0;
      _push(ssrRenderComponent(_component_Text, mergeProps({
        h1: "",
        id: __props.id
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(generate)) {
              _push2(`<a${ssrRenderAttr("href", `#${__props.id}`)}${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</a>`);
            } else {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            }
          } else {
            return [
              unref(generate) ? (openBlock(), createBlock("a", {
                key: 0,
                href: `#${__props.id}`
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 8, ["href"])) : renderSlot(_ctx.$slots, "default", { key: 1 })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/ProseH1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ProseH1.bc0c054b.js.map

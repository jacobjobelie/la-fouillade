import _sfc_main$1 from "./index.ce8762a7.js";
import { mergeProps, withCtx, createVNode, renderSlot, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Card = _sfc_main$1;
  _push(`<blockquote${ssrRenderAttrs(mergeProps({ class: "my-4" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Card, { variant: "flat" }, {
    body: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="px-4 py-4"${_scopeId}><div class="pl-4 border-l-2"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "px-4 py-4" }, [
            createVNode("div", { class: "pl-4 border-l-2" }, [
              renderSlot(_ctx.$slots, "default")
            ])
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</blockquote>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/ProseBlockquote.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProseBlockquote = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ProseBlockquote as default
};
//# sourceMappingURL=ProseBlockquote.15666352.js.map

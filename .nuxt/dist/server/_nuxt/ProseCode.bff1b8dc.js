import _sfc_main$1 from "./index.ce8762a7.js";
import { defineComponent, mergeProps, createSlots, withCtx, createVNode, renderSlot, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
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
const _sfc_main = defineComponent({
  props: {
    code: {
      type: String,
      default: ""
    },
    language: {
      type: String,
      default: null
    },
    filename: {
      type: String,
      default: null
    },
    highlights: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    isHeader() {
      return this.language || this.filename;
    },
    isRounded() {
      if (this.language || this.filename)
        return "rounded-b-1rem";
      else
        return "rounded-1rem";
    }
  }
});
const ProseCode_vue_vue_type_style_index_0_lang = "";
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Card = _sfc_main$1;
  _push(ssrRenderComponent(_component_Card, mergeProps({ class: "my-6" }, _attrs), createSlots({
    body: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="${ssrRenderClass([_ctx.isRounded, "px-4 py-2 bg-dark-700 overflow-auto"])}"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", {
            class: ["px-4 py-2 bg-dark-700 overflow-auto", _ctx.isRounded]
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)
        ];
      }
    }),
    _: 2
  }, [
    _ctx.isHeader ? {
      name: "header",
      fn: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="flex-between px-4 py-2 rounded-t-1rem bg-dark-300 text-gray-300"${_scopeId}><div class="flex items-center gap-2 flex-1"${_scopeId}><div class="w-3 h-3 rounded-1 bg-red-500"${_scopeId}></div><div class="w-3 h-3 rounded-1 bg-yellow-500"${_scopeId}></div><div class="w-3 h-3 rounded-1 bg-green-500"${_scopeId}></div></div><div class="flex-1 text-center"${_scopeId}>${ssrInterpolate(_ctx.filename ? _ctx.filename : "")}</div><div class="flex-1 text-right"${_scopeId}>${ssrInterpolate(_ctx.language)}</div></div>`);
        } else {
          return [
            createVNode("div", { class: "flex-between px-4 py-2 rounded-t-1rem bg-dark-300 text-gray-300" }, [
              createVNode("div", { class: "flex items-center gap-2 flex-1" }, [
                createVNode("div", { class: "w-3 h-3 rounded-1 bg-red-500" }),
                createVNode("div", { class: "w-3 h-3 rounded-1 bg-yellow-500" }),
                createVNode("div", { class: "w-3 h-3 rounded-1 bg-green-500" })
              ]),
              createVNode("div", { class: "flex-1 text-center" }, toDisplayString(_ctx.filename ? _ctx.filename : ""), 1),
              createVNode("div", { class: "flex-1 text-right" }, toDisplayString(_ctx.language), 1)
            ])
          ];
        }
      }),
      key: "0"
    } : void 0
  ]), _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/ProseCode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProseCode = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ProseCode as default
};
//# sourceMappingURL=ProseCode.bff1b8dc.js.map

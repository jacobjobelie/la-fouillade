import _sfc_main$1 from './index-76e6c31d.mjs';
import { defineComponent, useSSRContext, mergeProps, createSlots, withCtx, createVNode, renderSlot, toDisplayString } from 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/ofetch/dist/node.mjs';
import './app.config-d99d58fe.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/h3/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/destr/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/ohash/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/ufo/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/hookable/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/unctx/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/vue-router/dist/vue-router.node.mjs';
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
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/scule/dist/index.mjs';

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

export { ProseCode as default };
//# sourceMappingURL=ProseCode-c5a72f72.mjs.map

import __nuxt_component_0 from './index-0ad9cbe7.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/@vue/reactivity/index.js';
import '../server.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Hpic",
  __ssrInlineRender: true,
  props: {
    src: null,
    alt: null,
    date: null,
    place: null,
    detail: null
  },
  setup(__props) {
    const imgInfo = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Text = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-6 text-right" }, _attrs))}><div class="rounded-2rem overflow-hidden"><img${ssrRenderAttr("src", imgInfo.src)}${ssrRenderAttr("alt", imgInfo.alt)}></div><div class="flex-1 mt-2">`);
      _push(ssrRenderComponent(_component_Text, { sm: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(imgInfo.date)} / <b${_scopeId}>${ssrInterpolate(imgInfo.alt)}</b> / ${ssrInterpolate(imgInfo.place)}`);
          } else {
            return [
              createTextVNode(toDisplayString(imgInfo.date) + " / ", 1),
              createVNode("b", null, toDisplayString(imgInfo.alt), 1),
              createTextVNode(" / " + toDisplayString(imgInfo.place), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, {
        sm: "",
        class: "text-gray-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(imgInfo.detail)}`);
          } else {
            return [
              createTextVNode(toDisplayString(imgInfo.detail), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Gallery/Hpic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Hpic = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$1
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Vpic",
  __ssrInlineRender: true,
  props: {
    src: null,
    alt: null,
    date: null,
    place: null,
    detail: null
  },
  setup(__props) {
    const imgInfo = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Text = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group flex items-center gap-4 mt-6" }, _attrs))}><div class="flex-[0.7] rounded-2rem overflow-hidden max-h-[100px] filter blur-sm transition-all duration-500 transform group-hover:max-h-[1000px] group-hover:filter-none"><img${ssrRenderAttr("src", imgInfo.src)}${ssrRenderAttr("alt", imgInfo.alt)}></div><div class="flex flex-col justify-between"><div class="mt-2 pl-2 border-l-black border-l-2">`);
      _push(ssrRenderComponent(_component_Text, { sm: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(imgInfo.date)}`);
          } else {
            return [
              createTextVNode(toDisplayString(imgInfo.date), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, { sm: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<b${_scopeId}>${ssrInterpolate(imgInfo.alt)}</b>`);
          } else {
            return [
              createVNode("b", null, toDisplayString(imgInfo.alt), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, { sm: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(imgInfo.place)}`);
          } else {
            return [
              createTextVNode(toDisplayString(imgInfo.place), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, {
        sm: "",
        class: "text-gray-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(imgInfo.detail)}`);
          } else {
            return [
              createTextVNode(toDisplayString(imgInfo.detail), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Gallery/Vpic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Vpic = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main
});

export { Hpic as H, Vpic as V, _sfc_main as _, _sfc_main$1 as a };
//# sourceMappingURL=Vpic-3d2c15c3.mjs.map

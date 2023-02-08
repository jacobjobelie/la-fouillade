import { p as publicAssetsURL } from '../../paths.mjs';
import __nuxt_component_0 from './index-0ad9cbe7.mjs';
import __nuxt_component_1 from './NavItemB-3e471c8c.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createTextVNode, toDisplayString } from 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/ufo/dist/index.mjs';
import '../../nitro/config.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/destr/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/scule/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/@vue/reactivity/index.js';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/ofetch/dist/node.mjs';
import './app.config-d99d58fe.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/h3/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/ohash/dist/index.mjs';
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

const _imports_0 = "" + publicAssetsURL("img/IMG_3434.jpeg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const welcom = ref("Destination: La Fouillade - July 1-8 2023");
    ref();
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Text = __nuxt_component_0;
      const _component_NavItemB = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full mx-auto p-4" }, _attrs))} data-v-c1698600><div class="relative w-full h-full grid items-center place-items-center" data-v-c1698600><div class="w-full h-full grid gap-2 grid-rows-[auto,auto,1fr]" data-v-c1698600>`);
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
      _push(`<div class="w-full h-full" data-v-c1698600>`);
      _push(ssrRenderComponent(_component_NavItemB, {
        icon: "fa-feather-pointed",
        text: "Directions",
        to: "/article/directions",
        activated: ""
      }, null, _parent));
      _push(`</div><div class="relative w-full h-full grid items-center place-items-center" data-v-c1698600><div class="grid grid-cols-2 gap-2 grid-rows-1 w-full h-full" data-v-c1698600><div class="w-full h-full" data-v-c1698600><img class="w-full h-full object-cover"${ssrRenderAttr("src", _imports_0)} data-v-c1698600></div><div class="relative grid gap-2 grid-cols-1 grid-rows-[1fr,1fr,auto] w-full h-full" data-v-c1698600><div class="relative w-full h-full" data-v-c1698600></div><div class="relative w-full h-full" data-v-c1698600><div class="absolute top-0 left-0 h-full w-full" data-v-c1698600></div></div><p class="italic m-0" data-v-c1698600>le chate\xE2u Longcol</p></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c1698600"]]);

export { index as default };
//# sourceMappingURL=index-93b28b29.mjs.map

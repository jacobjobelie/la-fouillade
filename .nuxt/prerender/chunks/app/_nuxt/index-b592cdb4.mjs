import { i as useRoute, _ as __nuxt_component_0 } from './app.config-d99d58fe.mjs';
import _sfc_main$2 from './index-76e6c31d.mjs';
import { useSSRContext, defineComponent, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, computed, resolveComponent, renderSlot } from 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderSlot } from 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/vue/server-renderer/index.mjs';
import { q as queryContent } from './query-aca7ac1f.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/h3/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/destr/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/ohash/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/ufo/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/hookable/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/unctx/dist/index.mjs';
import '../server.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/ofetch/dist/node.mjs';
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
import './query-13b6418e.mjs';
import './utils-16ea5da4.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "button",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      validator(value) {
        return ["prev", "next"].includes(value);
      }
    }
  },
  setup(__props) {
    const props = __props;
    const btn = computed(() => {
      if (props.type === "prev") {
        return {
          iconSide: "flex-row",
          iconMv: "translate-x-2",
          icon: "arrow-left"
        };
      } else {
        return {
          iconSide: "flex-row-reverse",
          iconMv: "-translate-x-2",
          icon: "arrow-right"
        };
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = _sfc_main$2;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Card, {
        variant: "bordered",
        class: "group hover:border-purple-500"
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([unref(btn).iconSide, "flex items-center h-full px-4 py-6 gap-6"])}"${_scopeId}><div class="${ssrRenderClass([unref(btn).iconMv, "flex-center transition-all transform group-hover:text-purple-500 group-hover:translate-x-0"])}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: ["fas", unref(btn).icon]
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", {
                class: ["flex items-center h-full px-4 py-6 gap-6", unref(btn).iconSide]
              }, [
                createVNode("div", {
                  class: ["flex-center transition-all transform group-hover:text-purple-500 group-hover:translate-x-0", unref(btn).iconMv]
                }, [
                  createVNode(_component_font_awesome_icon, {
                    icon: ["fas", unref(btn).icon]
                  }, null, 8, ["icon"])
                ], 2),
                createVNode("div", null, [
                  renderSlot(_ctx.$slots, "default")
                ])
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PrevNext/button.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const button = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$1
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const [prev, next] = ([__temp, __restore] = withAsyncContext(() => queryContent("/article").only(["_path", "title"]).sort({ date: -1 }).findSurround(route.path)), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_PrevNextButton = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-between pt-8 pb-6 border-t-gray-200" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(prev) ? unref(prev)._path : "/article"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PrevNextButton, { type: "prev" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(prev) ? unref(prev).title : "Back to Article")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(prev) ? unref(prev).title : "Back to Article"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PrevNextButton, { type: "prev" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(prev) ? unref(prev).title : "Back to Article"), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(next) ? unref(next)._path : "/article"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PrevNextButton, { type: "next" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(next) ? unref(next).title : "Back to Article")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(next) ? unref(next).title : "Back to Article"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PrevNextButton, { type: "next" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(next) ? unref(next).title : "Back to Article"), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PrevNext/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main
});

export { _sfc_main as _, button as b, index as i };
//# sourceMappingURL=index-b592cdb4.mjs.map

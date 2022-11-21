import { b as useRoute, a as __nuxt_component_0 } from "../server.mjs";
import _sfc_main$2 from "./index.ce8762a7.js";
import { defineComponent, computed, resolveComponent, withCtx, unref, createVNode, renderSlot, useSSRContext, withAsyncContext, mergeProps, createTextVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import "destr";
import { q as queryContent } from "./query.a4f9a6f2.js";
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
const button = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
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
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
export {
  _sfc_main as _,
  button as b,
  index as i
};
//# sourceMappingURL=index.803cdebe.js.map

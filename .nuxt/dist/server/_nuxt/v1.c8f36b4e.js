import { a as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, useSSRContext, unref } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NavItem",
  __ssrInlineRender: true,
  props: {
    icon: null,
    to: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: __props.to,
        class: "flex justify-center items-center w-45px h-45px mx-2 border-2 rounded-xl border-white transition-all duration-200 hover:border-secondary hover:text-secondary transform active:translate-y-2px"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: `fa-solid fa-${__props.icon} fa-lg`
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_font_awesome_icon, {
                icon: `fa-solid fa-${__props.icon} fa-lg`
              }, null, 8, ["icon"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBar/NavItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const NavItem = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const TianyuIcon = "" + globalThis.__publicAssetsURL("svg/yty.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "v1",
  __ssrInlineRender: true,
  setup(__props) {
    const linkList = [
      {
        icon: "cubes",
        to: "/components"
      },
      {
        icon: "user",
        to: "/about"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-15 rounded-xl bg-gray-100 flex justify-between items-center <sm:rounded-none" }, _attrs))}><div class="px-1.5rem">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="w-70px transition-all duration-200 filter hover:contrast-150"${ssrRenderAttr("src", unref(TianyuIcon))}${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "w-70px transition-all duration-200 filter hover:contrast-150",
                src: unref(TianyuIcon)
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex justify-center items-center pr-2"><!--[-->`);
      ssrRenderList(linkList, (linkProps, idx) => {
        _push(ssrRenderComponent(_sfc_main$1, {
          key: idx,
          icon: linkProps.icon,
          to: linkProps.to
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBar/v1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const v1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
export {
  NavItem as N,
  _sfc_main as _,
  v1 as v
};
//# sourceMappingURL=v1.c8f36b4e.js.map

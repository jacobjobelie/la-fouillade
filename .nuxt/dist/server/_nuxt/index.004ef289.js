import { a as __nuxt_component_0$1, _ as _export_sfc, i as useState, b as useRoute, c as useHead } from "../server.mjs";
import { _ as __nuxt_component_1 } from "./index.d288e808.js";
import { defineComponent, computed, mergeProps, withCtx, unref, createVNode, toDisplayString, useSSRContext, ref, resolveComponent } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
import { Switch } from "@headlessui/vue";
import "destr";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NavItemB",
  __ssrInlineRender: true,
  props: {
    icon: null,
    text: null,
    to: null,
    activated: null
  },
  setup(__props) {
    const props = __props;
    const activatedStyles = computed(() => {
      if (props.to === props.activated) {
        return "activate";
      } else
        return "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: props.to
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([unref(activatedStyles), "group flex-centertransition-all transform hover:bg-gradient-to-br hover:from-yellow-300 hover:to-orange-400 active:scale-95"])}" data-v-b18a1127${_scopeId}><span data-v-b18a1127${_scopeId}>${ssrInterpolate(__props.text)}</span></div>`);
          } else {
            return [
              createVNode("div", {
                class: ["group flex-centertransition-all transform hover:bg-gradient-to-br hover:from-yellow-300 hover:to-orange-400 active:scale-95", unref(activatedStyles)]
              }, [
                createVNode("span", null, toDisplayString(__props.text), 1)
              ], 2)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const NavItemB_vue_vue_type_style_index_0_scoped_b18a1127_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBar/NavItemB.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b18a1127"]]);
const NavItemB = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = defineComponent({
  components: { HSwitch: Switch },
  emits: {
    changd: (v) => v
  },
  setup() {
    const enabled = ref(false);
    return {
      enabled
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HSwitch = resolveComponent("HSwitch");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-16" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HSwitch, {
    onClick: ($event) => _ctx.$emit("changd", !_ctx.enabled),
    modelValue: _ctx.enabled,
    "onUpdate:modelValue": ($event) => _ctx.enabled = $event,
    class: [_ctx.enabled ? "bg-teal-900" : "bg-teal-700", "relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="sr-only"${_scopeId}>Use setting</span><span aria-hidden="true" class="${ssrRenderClass([_ctx.enabled ? "translate-x-9" : "translate-x-0", "pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"])}"${_scopeId}></span>`);
      } else {
        return [
          createVNode("span", { class: "sr-only" }, "Use setting"),
          createVNode("span", {
            "aria-hidden": "true",
            class: [_ctx.enabled ? "translate-x-9" : "translate-x-0", "pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"]
          }, null, 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Switch/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_3
}, Symbol.toStringTag, { value: "Module" }));
const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main = defineComponent({
  setup() {
    const routeActivated = computed(() => {
      const route = useRoute();
      const rootRoute = `/${route.path.split("/")[1]}`;
      return rootRoute;
    });
    useHead({
      title: "My App",
      meta: [{ name: "description", content: "My amazing site." }],
      bodyAttrs: { class: "test" },
      script: [{ children: "console.log('Hello world')" }]
    });
    const homeActivatedStyles = computed(() => {
      if (routeActivated.value === "/") {
        return "drop-shadow-lg";
      } else
        return "";
    });
    const c = useColorMode();
    function changeMode(v) {
      if (!v) {
        c.preference = "light";
      } else {
        c.preference = "dark";
      }
    }
    return {
      routeActivated,
      homeActivatedStyles,
      changeMode
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_Sparkle = __nuxt_component_1;
  const _component_NavItemB = __nuxt_component_2;
  const _component_Switch = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-18 w-full flex justify-between items-center" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Sparkle, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Sparkle)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div id="links" class="flex gap-4 px-3">`);
  _push(ssrRenderComponent(_component_NavItemB, {
    icon: "fa-feather-pointed",
    text: "Findings",
    to: "/article",
    activated: _ctx.routeActivated
  }, null, _parent));
  _push(`</div><div id="links" class="flex gap-4 pl-3">`);
  _push(ssrRenderComponent(_component_Switch, { onChangd: _ctx.changeMode }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBar/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_0
}, Symbol.toStringTag, { value: "Module" }));
export {
  NavItemB as N,
  __nuxt_component_0 as _,
  index as a,
  index$1 as i
};
//# sourceMappingURL=index.004ef289.js.map

import { useSSRContext, defineComponent, ref, computed, mergeProps, resolveComponent, withCtx, createVNode } from 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/vue/index.mjs';
import { Switch } from 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/@headlessui/vue/dist/headlessui.esm.js';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass } from 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, c as useRoute, d as useHead, a as useState } from '../server.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  components: { HSwitch: Switch },
  emits: {
    changd: (v) => v
  },
  setup() {
    let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const enabled = ref(dark);
    return {
      enabled
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  const _component_HSwitch = resolveComponent("HSwitch");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-2" }, _attrs))}><span class="w-4 h-4">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: `fa-solid fa-${_ctx.enabled ? "moon" : "sun"} fa-lg`
  }, null, _parent));
  _push(`</span>`);
  _push(ssrRenderComponent(_component_HSwitch, {
    onClick: ($event) => _ctx.$emit("changd", !_ctx.enabled),
    modelValue: _ctx.enabled,
    "onUpdate:modelValue": ($event) => _ctx.enabled = $event,
    class: [_ctx.enabled ? "bg-teal-900" : "bg-teal-700", "relative inline-flex h-4 w-8 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="sr-only"${_scopeId}>Use setting</span><span aria-hidden="true" class="${ssrRenderClass([_ctx.enabled ? "translate-x-4" : "translate-x-0", "pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"])}"${_scopeId}></span>`);
      } else {
        return [
          createVNode("span", { class: "sr-only" }, "Use setting"),
          createVNode("span", {
            "aria-hidden": "true",
            class: [_ctx.enabled ? "translate-x-4" : "translate-x-0", "pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"]
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
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup() {
    const routeActivated = computed(() => {
      const route = useRoute();
      `/${route.path.split("/")[1]}`;
      return route.path;
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
  const _component_Switch = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-18 w-full flex justify-between items-center px-2" }, _attrs))}><div id="links" class="flex gap-4 px-3"></div><div class="flex gap-4 pl-3 ml-3">`);
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

export { __nuxt_component_0 as _ };
//# sourceMappingURL=index-a44584fa.mjs.map

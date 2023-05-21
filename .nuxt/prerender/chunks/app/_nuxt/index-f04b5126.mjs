import { p as publicAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-6bdec6f5.mjs';
import { useSSRContext, defineComponent, computed, ref, mergeProps, withCtx, createVNode, resolveComponent } from 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/vue/index.mjs';
import { _ as _export_sfc, b as useRoute, d as useHead, f as useState } from '../server.mjs';
import { Switch } from 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/@headlessui/vue/dist/headlessui.esm.js';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass } from 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/vue/server-renderer/index.mjs';

const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  components: { HSwitch: Switch },
  props: {
    enabled: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    changd: (v) => v
  },
  setup(props, ctx) {
    const colorMode = useColorMode();
    const enabled = computed(() => colorMode.value === "dark");
    const value = ref(enabled.value);
    function changeMode() {
      value.value = !value.value;
      if (!value.value) {
        colorMode.value = "light";
      } else {
        colorMode.value = "dark";
      }
    }
    return {
      value,
      changeMode
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  const _component_HSwitch = resolveComponent("HSwitch");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-2" }, _attrs))}><span class="w-4 h-4">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: `fa-solid fa-${_ctx.value ? "moon" : "sun"} fa-lg`
  }, null, _parent));
  _push(`</span>`);
  _push(ssrRenderComponent(_component_HSwitch, {
    onClick: _ctx.changeMode,
    modelValue: _ctx.value,
    "onUpdate:modelValue": ($event) => _ctx.value = $event,
    class: [_ctx.value ? "bg-teal-900" : "bg-teal-700", "relative inline-flex h-4 w-8 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="sr-only"${_scopeId}>Use setting</span><span aria-hidden="true" class="${ssrRenderClass([_ctx.value ? "translate-x-4" : "translate-x-0", "pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"])}"${_scopeId}></span>`);
      } else {
        return [
          createVNode("span", { class: "sr-only" }, "Use setting"),
          createVNode("span", {
            "aria-hidden": "true",
            class: [_ctx.value ? "translate-x-4" : "translate-x-0", "pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"]
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
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup() {
    const routeActivated = computed(() => {
      const route = useRoute();
      `/${route.path.split("/")[1]}`;
      return route.path;
    });
    useHead({
      title: "SamSteph",
      meta: [{ name: "description", content: "Wedding time." }, {
        name: "viewport",
        content: "width=device-width, user-scalable=no"
      }],
      bodyAttrs: { class: "test" },
      script: [{ children: "console.log('Hello world')" }]
    });
    const colorMode = useColorMode();
    const darkMode = computed(() => colorMode.preference === "dark");
    function changeMode({ v }) {
      if (!v) {
        colorMode.preference = "light";
      } else {
        colorMode.preference = "dark";
      }
    }
    return {
      routeActivated,
      changeMode,
      enabled: darkMode
    };
  }
});
const _imports_0 = "" + publicAssetsURL("img/longcol.svg");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_Switch = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full w-full flex justify-between items-center px-2" }, _attrs))} data-v-0a643f54>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="w-18 h-18 rounded rounded-svg"${ssrRenderAttr("src", _imports_0)} data-v-0a643f54${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            class: "w-18 h-18 rounded rounded-svg",
            src: _imports_0
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div id="links" class="flex gap-4 px-3" data-v-0a643f54></div><div class="flex gap-4 pl-3 ml-3" data-v-0a643f54>`);
  _push(ssrRenderComponent(_component_Switch, {
    enabled: _ctx.enabled,
    onChangd: _ctx.changeMode
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBar/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0a643f54"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=index-f04b5126.mjs.map

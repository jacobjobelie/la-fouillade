import { b as useRoute, c as useHead, _ as _export_sfc, i as useState, a as __nuxt_component_0$1 } from '../server.mjs';
import { _ as __nuxt_component_1 } from './index.92832046.mjs';
import { useSSRContext, defineComponent, ref, computed, mergeProps, withCtx, unref, createVNode, toDisplayString, resolveComponent } from 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttrs } from 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/vue/server-renderer/index.mjs';
import { Switch } from 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/@headlessui/vue/dist/headlessui.esm.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/hookable/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unctx/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/destr/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/ufo/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/h3/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/ohash/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unenv/runtime/npm/cross-fetch.mjs';
import 'events';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unenv/runtime/npm/debug.mjs';
import 'util';
import 'crypto';
import 'url';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/bufferutil/index.js';
import 'buffer';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/utf-8-validate/index.js';
import 'http';
import 'https';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/typedarray-to-buffer/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/yaeti/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/defu/dist/defu.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/@fortawesome/fontawesome-svg-core/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/@fortawesome/vue-fontawesome/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/@fortawesome/free-solid-svg-icons/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/@fortawesome/free-brands-svg-icons/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/scule/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unstorage/dist/drivers/fs.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/radix3/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/pathe/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unified/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/micromark/lib/preprocess.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/micromark/lib/postprocess.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/micromark-util-character/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/remark-emoji/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/rehype-slug/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/remark-squeeze-paragraphs/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/rehype-external-links/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/remark-gfm/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/rehype-raw/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/remark-parse/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/remark-rehype/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/mdast-util-to-hast/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/detab/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unist-builder/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/mdurl/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/slugify/slugify.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unist-util-position/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/html-tags/index.js';

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

export { NavItemB as N, __nuxt_component_0 as _, index as a, index$1 as i };
//# sourceMappingURL=index.7377f952.mjs.map

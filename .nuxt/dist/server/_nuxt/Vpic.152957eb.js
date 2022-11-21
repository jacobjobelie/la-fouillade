import __nuxt_component_0 from "./index.e22a7eff.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
const Hpic = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
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
const Vpic = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
export {
  Hpic as H,
  Vpic as V,
  _sfc_main as _,
  _sfc_main$1 as a
};
//# sourceMappingURL=Vpic.152957eb.js.map

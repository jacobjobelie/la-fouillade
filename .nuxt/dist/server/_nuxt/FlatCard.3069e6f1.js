import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FlatCard",
  __ssrInlineRender: true,
  props: {
    imgSrc: null,
    title: null,
    date: null,
    description: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group" }, _attrs))}><div class="h-250px bg-center bg-no-repeat bg-cover rounded-1rem transition-all group-hover:rounded-3rem" style="${ssrRenderStyle(`background-image: url(${props.imgSrc})`)}"></div><p class="text-3xl font-thin">${ssrInterpolate(props.title)}</p><div class="flex gap-4 transition-all"><p class="code-family text-sm">${ssrInterpolate(props.date)}</p><p class="text-gray-400 font-thin text-base">${ssrInterpolate(props.description)}</p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Article/FlatCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=FlatCard.3069e6f1.js.map

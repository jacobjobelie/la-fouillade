import { defineComponent, mergeProps, useSSRContext } from 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot } from 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ColorLink",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "primary",
      validator(value) {
        return ["primary", "secondary", "success", "warning", "error"].includes(
          value
        );
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: `inline-block px-0.3rem rounded-1rem transition-all transform hover:text-white hover:-translate-y-2px hover:cursor-pointer active:translate-y-1px ${__props.type}`
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</a>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ColorLink.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ColorLink.39f07d4b.mjs.map

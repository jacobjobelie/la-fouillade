import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot } from 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    variant: {
      type: String,
      default: "shadow",
      validator(value) {
        return ["shadow", "flat", "bordered"].includes(value);
      }
    },
    isHoverable: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const styleList = computed(() => {
      const styles = [];
      if (props.variant === "flat") {
        styles.push("bg-gray-100");
      } else if (props.variant === "bordered") {
        styles.push("border");
      } else {
        styles.push("shadow-nsm");
      }
      if (props.isHoverable)
        styles.push("hover:shadow-xl hover:-translate-y-2px");
      return styles;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["rounded-1rem flex flex-col transition-all duration-300 transform", unref(styleList)]
      }, _attrs))}><div class="card-header">`);
      ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
      _push(`</div><div class="flex-1">`);
      ssrRenderSlot(_ctx.$slots, "body", {}, () => {
        _push(`body`);
      }, _push, _parent);
      _push(`</div><div class="card-footer">`);
      ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=index-18375f30.mjs.map

import { useSSRContext, defineComponent, mergeProps, unref } from 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot } from 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/vue/server-renderer/index.mjs';
import { computed } from 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/@vue/reactivity/index.js';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    hero: { type: Boolean },
    h1: { type: Boolean },
    h2: { type: Boolean },
    h3: { type: Boolean },
    h4: { type: Boolean },
    base: { type: Boolean },
    sm: { type: Boolean },
    p: { type: Boolean },
    em: { type: Boolean },
    link: { type: Boolean },
    b: { type: Boolean },
    code: { type: Boolean },
    title: { type: Boolean },
    size: null,
    weight: null,
    gradient: { type: Boolean },
    bg: null
  },
  setup(__props) {
    const props = __props;
    const styleList = computed(() => {
      const list = [];
      if (props.hero) {
        list.push("hero");
      } else if (props.h1) {
        list.push("h1");
      } else if (props.h2) {
        list.push("h2");
      } else if (props.h3) {
        list.push("h3");
      } else if (props.h4) {
        list.push("h4");
      } else if (props.base) {
        list.push("base");
      } else if (props.sm) {
        list.push("sm");
      } else if (props.bg) {
        list.push("bg");
      } else if (props.link) {
        list.push("link");
      } else {
        list.push("p");
      }
      if (props.code)
        list.push("code");
      if (props.title)
        list.push("title");
      if (props.em)
        list.push("em");
      if (props.b)
        list.push("b");
      if (props.gradient)
        list.push("gradient");
      return list;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({ class: unref(styleList) }, _attrs))} data-v-3655eafd>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Text/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3655eafd"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=index-914e3ae6.mjs.map

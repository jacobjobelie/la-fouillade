import __nuxt_component_0 from "./index.e22a7eff.js";
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { computed } from "@vue/reactivity";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "ufo";
import "h3";
import "@unhead/vue";
import "@unhead/dom";
import "vue-router";
import "cookie-es";
import "ohash";
import "cross-fetch";
import "events";
import "debug";
import "util";
import "crypto";
import "url";
import "bufferutil";
import "buffer";
import "utf-8-validate";
import "http";
import "https";
import "typedarray-to-buffer";
import "yaeti";
import "defu";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    src: {
      type: String,
      default: "/img/sample.jpg"
    },
    reverse: {
      type: Boolean,
      default: false
    },
    imgSize: {
      type: Number,
      default: 1
    },
    textSize: {
      type: Number,
      default: 1
    }
  },
  setup(__props) {
    const props = __props;
    const reverseSection = computed(() => {
      if (props.reverse) {
        return "flex-row-reverse <sm:flex-col-reverse";
      } else
        return "";
    });
    const imgAreaStyle = computed(() => {
      return {
        flex: props.imgSize
      };
    });
    const textAreaStyle = computed(() => {
      return {
        flex: props.textSize
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Text = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex my-4 w-full gap-4 <md:flex-col-reverse", unref(reverseSection)]
      }, _attrs))}><div class="flex items-center rounded-2xl" style="${ssrRenderStyle(unref(imgAreaStyle))}"><img class="max-w-full rounded-2xl transition-all hover:rounded-4xl"${ssrRenderAttr("src", props.src)} alt="images"></div><div class="p-4 &lt;md:p-0 &lt;md:mb-2" style="${ssrRenderStyle(unref(textAreaStyle))}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(ssrRenderComponent(_component_Text, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Hi there!`);
            } else {
              return [
                createTextVNode("Hi there!")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Text, { h3: "" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Dignissimos asperiores`);
            } else {
              return [
                createTextVNode("Dignissimos asperiores")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Text, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis fugit earum voluptas officia, quasi saepe et commodi, dolores cumque quam fuga ullam, itaque ea dignissimos asperiores adipisci ad eveniet repellendus `);
            } else {
              return [
                createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis fugit earum voluptas officia, quasi saepe et commodi, dolores cumque quam fuga ullam, itaque ea dignissimos asperiores adipisci ad eveniet repellendus ")
              ];
            }
          }),
          _: 1
        }, _parent));
      }, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Description/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index.37619ba1.js.map

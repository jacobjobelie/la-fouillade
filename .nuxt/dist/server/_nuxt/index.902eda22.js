import __nuxt_component_0 from "./index.e22a7eff.js";
import { a as __nuxt_component_0$1 } from "../server.mjs";
import _sfc_main$1 from "./FlatCard.3069e6f1.js";
import { defineComponent, withAsyncContext, withCtx, createTextVNode, unref, createVNode, useSSRContext } from "vue";
import { u as useAsyncData, q as queryContent } from "./query.37fcdf32.js";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import "@vue/reactivity";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
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
import "./utils.1cd441ea.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("article", () => queryContent("/article").sort({ date: -1 }).find())), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Text = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ArticleFlatCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><br>`);
      _push(ssrRenderComponent(_component_Text, { hero: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Articles. `);
          } else {
            return [
              createTextVNode(" Articles. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid grid-cols-2 gap-12 &lt;sm:grid-cols-1"><!--[-->`);
      ssrRenderList(unref(data), (article, idx) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: idx,
          to: article._path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ArticleFlatCard, {
                title: article.title,
                description: article.description,
                date: article.date,
                "img-src": article.image.src
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ArticleFlatCard, {
                  title: article.title,
                  description: article.description,
                  date: article.date,
                  "img-src": article.image.src
                }, null, 8, ["title", "description", "date", "img-src"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><br></div><br><br></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/article/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index.902eda22.js.map

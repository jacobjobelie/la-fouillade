import _sfc_main$1 from "./Title.f6174a9a.js";
import _sfc_main$2 from "./ContentDoc.9642a8c6.js";
import { _ as _sfc_main$3 } from "./index.90d3b313.js";
import { b as useRoute } from "../server.mjs";
import { defineComponent, withAsyncContext, unref, useSSRContext } from "vue";
import "destr";
import { q as queryContent } from "./query.37fcdf32.js";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "./index.37619ba1.js";
import "./index.e22a7eff.js";
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
import "./ContentRenderer.b4fc043b.js";
import "./ContentRendererMarkdown.19034a6c.js";
import "scule";
import "property-information";
import "html-tags";
import "./ContentQuery.e992990c.js";
import "./utils.1cd441ea.js";
import "./index.ce8762a7.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const articleInfo = ([__temp, __restore] = withAsyncContext(() => queryContent(route.path).findOne()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArticleTitle = _sfc_main$1;
      const _component_ContentDoc = _sfc_main$2;
      const _component_PrevNext = _sfc_main$3;
      _push(`<main${ssrRenderAttrs(_attrs)}><br>`);
      _push(ssrRenderComponent(_component_ArticleTitle, {
        title: unref(articleInfo).title,
        date: unref(articleInfo).date,
        description: unref(articleInfo).description,
        cover: unref(articleInfo).image.src,
        tags: unref(articleInfo).tags
      }, null, _parent));
      _push(ssrRenderComponent(_component_ContentDoc, null, null, _parent));
      _push(`<div class="h-80px"></div>`);
      _push(ssrRenderComponent(_component_PrevNext, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/article/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_...slug_.ef44097d.js.map

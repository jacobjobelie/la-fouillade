import _sfc_main$1 from "./ContentDoc.7c8607be.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "destr";
import "ufo";
import "./ContentRenderer.7a1d50fb.js";
import "./ContentRendererMarkdown.04aa768c.js";
import "scule";
import "property-information";
import "html-tags";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
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
import "./ContentQuery.7f69e367.js";
import "./query.a4f9a6f2.js";
import "./utils.10742fcf.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ContentDoc = _sfc_main$1;
  _push(`<main${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_ContentDoc, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ____slug_ as default
};
//# sourceMappingURL=_...slug_.43f1902b.js.map
import __nuxt_component_0 from "./index.b81898ae.js";
import _sfc_main$1 from "./index.ce8762a7.js";
import { withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "@vue/reactivity";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Text = __nuxt_component_0;
  const _component_Card = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><br>`);
  _push(ssrRenderComponent(_component_Text, { hero: "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Projects.`);
      } else {
        return [
          createTextVNode("Projects.")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Card, {
    variant: "flat",
    "is-hoverable": ""
  }, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="px-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Text, { h3: "" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Data Manager `);
            } else {
              return [
                createTextVNode(" Data Manager ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "px-4" }, [
            createVNode(_component_Text, { h3: "" }, {
              default: withCtx(() => [
                createTextVNode(" Data Manager ")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    body: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="px-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Text, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` DM(Data Manager)\u662F\u4E00\u4E2AQA-Algorithm\u5C0F\u7EC4\u7684\u6570\u636E\u96C6\u7BA1\u7406\u5E73\u53F0\uFF0C\u65E8\u5728\u5B9E\u73B0\u6570\u636E\u591A\u7EF4\u6807\u7B7E\u7684\u7BA1\u7406\u3002 \u517C\u987E\u7528\u6237\u6743\u9650\u7BA1\u7406\u3001\u6570\u636E\u5907\u4EFD\u3001\u6570\u636E\u7248\u672C\u56DE\u6EDA\u7B49\u529F\u80FD\u3002 \u540C\u65F6\u8FD8\u63D0\u4F9B\u4E00\u5957\u4FBF\u4E8E\u7528\u6237\u4F7F\u7528\u7684Python SDK\u3001CLI `);
            } else {
              return [
                createTextVNode(" DM(Data Manager)\u662F\u4E00\u4E2AQA-Algorithm\u5C0F\u7EC4\u7684\u6570\u636E\u96C6\u7BA1\u7406\u5E73\u53F0\uFF0C\u65E8\u5728\u5B9E\u73B0\u6570\u636E\u591A\u7EF4\u6807\u7B7E\u7684\u7BA1\u7406\u3002 \u517C\u987E\u7528\u6237\u6743\u9650\u7BA1\u7406\u3001\u6570\u636E\u5907\u4EFD\u3001\u6570\u636E\u7248\u672C\u56DE\u6EDA\u7B49\u529F\u80FD\u3002 \u540C\u65F6\u8FD8\u63D0\u4F9B\u4E00\u5957\u4FBF\u4E8E\u7528\u6237\u4F7F\u7528\u7684Python SDK\u3001CLI ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "px-4" }, [
            createVNode(_component_Text, null, {
              default: withCtx(() => [
                createTextVNode(" DM(Data Manager)\u662F\u4E00\u4E2AQA-Algorithm\u5C0F\u7EC4\u7684\u6570\u636E\u96C6\u7BA1\u7406\u5E73\u53F0\uFF0C\u65E8\u5728\u5B9E\u73B0\u6570\u636E\u591A\u7EF4\u6807\u7B7E\u7684\u7BA1\u7406\u3002 \u517C\u987E\u7528\u6237\u6743\u9650\u7BA1\u7406\u3001\u6570\u636E\u5907\u4EFD\u3001\u6570\u636E\u7248\u672C\u56DE\u6EDA\u7B49\u529F\u80FD\u3002 \u540C\u65F6\u8FD8\u63D0\u4F9B\u4E00\u5957\u4FBF\u4E8E\u7528\u6237\u4F7F\u7528\u7684Python SDK\u3001CLI ")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    footer: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="px-4 pb-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Text, { class: "text-gray-500" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<b${_scopeId2}>Tech Stack</b>: JavaScript, HTML, CSS, Python, Express, MongoDB, React, Airflow`);
            } else {
              return [
                createVNode("b", null, "Tech Stack"),
                createTextVNode(": JavaScript, HTML, CSS, Python, Express, MongoDB, React, Airflow")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "px-4 pb-4" }, [
            createVNode(_component_Text, { class: "text-gray-500" }, {
              default: withCtx(() => [
                createVNode("b", null, "Tech Stack"),
                createTextVNode(": JavaScript, HTML, CSS, Python, Express, MongoDB, React, Airflow")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projects = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  projects as default
};
//# sourceMappingURL=projects.a0a10153.js.map

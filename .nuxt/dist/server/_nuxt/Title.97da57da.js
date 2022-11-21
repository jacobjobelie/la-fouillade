import _sfc_main$1 from "./index.d1cf99d6.js";
import __nuxt_component_0 from "./index.b81898ae.js";
import { defineComponent, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import "@vue/reactivity";
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
  __name: "Title",
  __ssrInlineRender: true,
  props: {
    title: null,
    date: null,
    description: null,
    cover: null,
    tags: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Description = _sfc_main$1;
      const _component_Text = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Description, {
        src: props.cover,
        reverse: "",
        textSize: 1.5
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Text, { hero: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(props.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(props.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Text, {
              base: "",
              class: "text-gray-700 code-family"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(props.date)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(props.date), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Text, {
              base: "",
              class: "text-gray-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(props.description)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(props.description), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (props.tags) {
              _push2(`<div class="py-4 flex gap-2"${_scopeId}><!--[-->`);
              ssrRenderList(props.tags, (tag, idx) => {
                _push2(`<div class="px-0.3rem rounded-0.5rem bg-slate-500 text-white code-family"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Text, { sm: "" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(tag)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(tag), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_Text, { hero: "" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(props.title), 1)
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "flex gap-4" }, [
                  createVNode(_component_Text, {
                    base: "",
                    class: "text-gray-700 code-family"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.date), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Text, {
                    base: "",
                    class: "text-gray-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.description), 1)
                    ]),
                    _: 1
                  })
                ]),
                props.tags ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "py-4 flex gap-2"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(props.tags, (tag, idx) => {
                    return openBlock(), createBlock("div", {
                      key: idx,
                      class: "px-0.3rem rounded-0.5rem bg-slate-500 text-white code-family"
                    }, [
                      createVNode(_component_Text, { sm: "" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(tag), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]);
                  }), 128))
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<br><br></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Article/Title.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Title.97da57da.js.map

import { _ as __nuxt_component_0 } from './index-914e3ae6.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode } from 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/vue/server-renderer/index.mjs';
import { computed } from 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/@vue/reactivity/index.js';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Description/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
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
              class: "dark:text-gray-200 text-gray-700 code-family"
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
                    class: "dark:text-gray-200 text-gray-700 code-family"
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

export { _sfc_main as _, _sfc_main$1 as a };
//# sourceMappingURL=Title-d113dc65.mjs.map

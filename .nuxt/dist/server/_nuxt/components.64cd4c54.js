import __nuxt_component_0 from "./index.e22a7eff.js";
import _sfc_main$1 from "./ColorLink.39f07d4b.js";
import _sfc_main$2 from "./index.ce8762a7.js";
import { _ as _sfc_main$3 } from "./v1.c8f36b4e.js";
import { _ as __nuxt_component_0$1 } from "./index.7377f952.js";
import { _ as __nuxt_component_1 } from "./index.92832046.js";
import _sfc_main$4 from "./index.37619ba1.js";
import _sfc_main$5 from "./Title.f6174a9a.js";
import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
import "@headlessui/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "components",
  __ssrInlineRender: true,
  setup(__props) {
    const NextUILink = "https://nextui.org/docs/components/text";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Text = __nuxt_component_0;
      const _component_ColorLink = _sfc_main$1;
      const _component_Code = resolveComponent("Code");
      const _component_Card = _sfc_main$2;
      const _component_NavBarV1 = _sfc_main$3;
      const _component_NavBar = __nuxt_component_0$1;
      const _component_Sparkle = __nuxt_component_1;
      const _component_Description = _sfc_main$4;
      const _component_ArticleTitle = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "divide-y w-full" }, _attrs))}><div><br>`);
      _push(ssrRenderComponent(_component_Text, { hero: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Components.`);
          } else {
            return [
              createTextVNode("Components.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` The DIY components used in this website, inspired by `);
            _push2(ssrRenderComponent(_component_ColorLink, { href: NextUILink }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Next UI`);
                } else {
                  return [
                    createTextVNode("Next UI")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`. `);
          } else {
            return [
              createTextVNode(" The DIY components used in this website, inspired by "),
              createVNode(_component_ColorLink, { href: NextUILink }, {
                default: withCtx(() => [
                  createTextVNode("Next UI")
                ]),
                _: 1
              }),
              createTextVNode(". ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<br></div><section>`);
      _push(ssrRenderComponent(_component_Text, {
        h3: "",
        title: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<code${_scopeId}>Text</code>`);
          } else {
            return [
              createVNode("code", null, "Text")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, { p: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Rich text with well-defined typographic styles. `);
          } else {
            return [
              createTextVNode(" Rich text with well-defined typographic styles. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, { hero: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`This is a <em${_scopeId}>hero</em> text.`);
          } else {
            return [
              createTextVNode("This is a "),
              createVNode("em", null, "hero"),
              createTextVNode(" text.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, { h1: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`h1: This is a h1 text.`);
          } else {
            return [
              createTextVNode("h1: This is a h1 text.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, { h2: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`h2: This is a h2 text.`);
          } else {
            return [
              createTextVNode("h2: This is a h2 text.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, { h3: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`h3: This is a h3 text.`);
          } else {
            return [
              createTextVNode("h3: This is a h3 text.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, { h4: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`h4: This is a h4 text.`);
          } else {
            return [
              createTextVNode("h4: This is a h4 text.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, { p: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`p: This is a <code${_scopeId}>p</code> text.`);
          } else {
            return [
              createTextVNode("p: This is a "),
              createVNode("code", null, "p"),
              createTextVNode(" text.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, { sm: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`sm: This is a <code${_scopeId}>sm</code> text.`);
          } else {
            return [
              createTextVNode("sm: This is a "),
              createVNode("code", null, "sm"),
              createTextVNode(" text.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, { p: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`b: This is a <b${_scopeId}>bolded</b> text.`);
          } else {
            return [
              createTextVNode("b: This is a "),
              createVNode("b", null, "bolded"),
              createTextVNode(" text.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, { p: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`em: This is a <em${_scopeId}>emphasized</em> text.`);
          } else {
            return [
              createTextVNode("em: This is a "),
              createVNode("em", null, "emphasized"),
              createTextVNode(" text.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section>`);
      _push(ssrRenderComponent(_component_Text, {
        h3: "",
        title: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Code, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`ColorLink`);
                } else {
                  return [
                    createTextVNode("ColorLink")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Code, null, {
                default: withCtx(() => [
                  createTextVNode("ColorLink")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`The links would be rendered by different color according to its `);
            _push2(ssrRenderComponent(_component_Code, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`type`);
                } else {
                  return [
                    createTextVNode("type")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` attribute.`);
          } else {
            return [
              createTextVNode("The links would be rendered by different color according to its "),
              createVNode(_component_Code, null, {
                default: withCtx(() => [
                  createTextVNode("type")
                ]),
                _: 1
              }),
              createTextVNode(" attribute.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ColorLink, { type: "primary" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`primary`);
                } else {
                  return [
                    createTextVNode("primary")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ColorLink, { type: "secondary" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`secondary`);
                } else {
                  return [
                    createTextVNode("secondary")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ColorLink, { type: "success" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`success`);
                } else {
                  return [
                    createTextVNode("success")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ColorLink, { type: "warning" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`warning`);
                } else {
                  return [
                    createTextVNode("warning")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ColorLink, { type: "error" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`error`);
                } else {
                  return [
                    createTextVNode("error")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ColorLink, { type: "primary" }, {
                default: withCtx(() => [
                  createTextVNode("primary")
                ]),
                _: 1
              }),
              createVNode(_component_ColorLink, { type: "secondary" }, {
                default: withCtx(() => [
                  createTextVNode("secondary")
                ]),
                _: 1
              }),
              createVNode(_component_ColorLink, { type: "success" }, {
                default: withCtx(() => [
                  createTextVNode("success")
                ]),
                _: 1
              }),
              createVNode(_component_ColorLink, { type: "warning" }, {
                default: withCtx(() => [
                  createTextVNode("warning")
                ]),
                _: 1
              }),
              createVNode(_component_ColorLink, { type: "error" }, {
                default: withCtx(() => [
                  createTextVNode("error")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section>`);
      _push(ssrRenderComponent(_component_Text, { h3: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Code, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Card`);
                } else {
                  return [
                    createTextVNode("Card")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Code, null, {
                default: withCtx(() => [
                  createTextVNode("Card")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` The <code${_scopeId}>Card</code> component has three parts: header, body, and footer, which can be separately defined by <code${_scopeId}>slot</code> tags. `);
          } else {
            return [
              createTextVNode(" The "),
              createVNode("code", null, "Card"),
              createTextVNode(" component has three parts: header, body, and footer, which can be separately defined by "),
              createVNode("code", null, "slot"),
              createTextVNode(" tags. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Card, { class: "p-1.5rem" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Text, { h4: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Card header`);
                } else {
                  return [
                    createTextVNode("Card header")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Text, { h4: "" }, {
                default: withCtx(() => [
                  createTextVNode("Card header")
                ]),
                _: 1
              })
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis fugit earum voluptas officia, quasi saepe et commodi, dolores cumque quam fuga ullam, itaque ea dignissimos asperiores adipisci ad eveniet repellendus `);
                } else {
                  return [
                    createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis fugit earum voluptas officia, quasi saepe et commodi, dolores cumque quam fuga ullam, itaque ea dignissimos asperiores adipisci ad eveniet repellendus ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Text, null, {
                default: withCtx(() => [
                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis fugit earum voluptas officia, quasi saepe et commodi, dolores cumque quam fuga ullam, itaque ea dignissimos asperiores adipisci ad eveniet repellendus ")
                ]),
                _: 1
              })
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Text, { class: "text-gray-400" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Card footer`);
                } else {
                  return [
                    createTextVNode("Card footer")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Text, { class: "text-gray-400" }, {
                default: withCtx(() => [
                  createTextVNode("Card footer")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<br>`);
      _push(ssrRenderComponent(_component_Text, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Cards&#39; visual styles can be defined by <code${_scopeId}>variant</code> attribute. There are three variants: <code${_scopeId}>shadow</code>(default), <code${_scopeId}>flat</code>, and <code${_scopeId}>bordered</code>`);
          } else {
            return [
              createTextVNode(" Cards' visual styles can be defined by "),
              createVNode("code", null, "variant"),
              createTextVNode(" attribute. There are three variants: "),
              createVNode("code", null, "shadow"),
              createTextVNode("(default), "),
              createVNode("code", null, "flat"),
              createTextVNode(", and "),
              createVNode("code", null, "bordered")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex gap-2 &lt;sm:flex-col">`);
      _push(ssrRenderComponent(_component_Card, {
        class: "p-1rem flex-1",
        variant: "shadow"
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`This is a <code${_scopeId2}>shadow</code> card`);
                } else {
                  return [
                    createTextVNode("This is a "),
                    createVNode("code", null, "shadow"),
                    createTextVNode(" card")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Text, null, {
                default: withCtx(() => [
                  createTextVNode("This is a "),
                  createVNode("code", null, "shadow"),
                  createTextVNode(" card")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Card, {
        class: "p-1rem flex-1",
        variant: "flat"
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`This is a <code${_scopeId2}>flat</code> card`);
                } else {
                  return [
                    createTextVNode("This is a "),
                    createVNode("code", null, "flat"),
                    createTextVNode(" card")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Text, null, {
                default: withCtx(() => [
                  createTextVNode("This is a "),
                  createVNode("code", null, "flat"),
                  createTextVNode(" card")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Card, {
        class: "p-1rem flex-1",
        variant: "bordered"
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`This is a <code${_scopeId2}>bordered</code> card`);
                } else {
                  return [
                    createTextVNode("This is a "),
                    createVNode("code", null, "bordered"),
                    createTextVNode(" card")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Text, null, {
                default: withCtx(() => [
                  createTextVNode("This is a "),
                  createVNode("code", null, "bordered"),
                  createTextVNode(" card")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><br>`);
      _push(ssrRenderComponent(_component_Text, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` If <code${_scopeId}>isHoverable</code> attribute is enabled, the card will have shadow effect while mouse is hovering over it. `);
          } else {
            return [
              createTextVNode(" If "),
              createVNode("code", null, "isHoverable"),
              createTextVNode(" attribute is enabled, the card will have shadow effect while mouse is hovering over it. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Card, {
        class: "p-1rem",
        variant: "flat",
        isHoverable: ""
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Hover effect enabled`);
                } else {
                  return [
                    createTextVNode("Hover effect enabled")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Text, null, {
                default: withCtx(() => [
                  createTextVNode("Hover effect enabled")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<br>`);
      _push(ssrRenderComponent(_component_Text, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Additionally, you can also design a fine looking card with image cover. `);
          } else {
            return [
              createTextVNode(" Additionally, you can also design a fine looking card with image cover. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<br><div class="flex gap-4 &lt;sm:flex-col">`);
      _push(ssrRenderComponent(_component_Card, {
        class: "min-h-300px flex-1 test",
        variant: "flat"
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-1.5rem pt-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Text, {
              class: "text-gray-400",
              sm: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`TO EXPORE`);
                } else {
                  return [
                    createTextVNode("TO EXPORE")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "px-1.5rem pt-5" }, [
                createVNode(_component_Text, {
                  class: "text-gray-400",
                  sm: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode("TO EXPORE")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-1.5rem"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Text, {
              h4: "",
              class: "text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`The breathtaking scene in nature`);
                } else {
                  return [
                    createTextVNode("The breathtaking scene in nature")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "px-1.5rem" }, [
                createVNode(_component_Text, {
                  h4: "",
                  class: "text-white"
                }, {
                  default: withCtx(() => [
                    createTextVNode("The breathtaking scene in nature")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-1rem backdrop-filter backdrop-blur-md rounded-b-1rem border-t-gray-400 border-t-1"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Text, {
              sm: "",
              class: "text-gray-300"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Travel App `);
                } else {
                  return [
                    createTextVNode("Travel App ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><button class="px-2 py-1 bg-cyan-100 bg-opacity-30 rounded-16px"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Text, {
              sm: "",
              b: "",
              class: "text-cyan-500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Download`);
                } else {
                  return [
                    createTextVNode("Download")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</button></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-1rem backdrop-filter backdrop-blur-md rounded-b-1rem border-t-gray-400 border-t-1" }, [
                createVNode("div", { class: "flex justify-between items-center" }, [
                  createVNode("div", null, [
                    createVNode(_component_Text, {
                      sm: "",
                      class: "text-gray-300"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Travel App ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", null, [
                    createVNode("button", { class: "px-2 py-1 bg-cyan-100 bg-opacity-30 rounded-16px" }, [
                      createVNode(_component_Text, {
                        sm: "",
                        b: "",
                        class: "text-cyan-500"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Download")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Card, {
        class: "min-h-300px flex-[2] test2",
        variant: "flat"
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-1.5rem pt-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Text, {
              class: "text-gray-300",
              sm: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`DIVE INTO`);
                } else {
                  return [
                    createTextVNode("DIVE INTO")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "px-1.5rem pt-5" }, [
                createVNode(_component_Text, {
                  class: "text-gray-300",
                  sm: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode("DIVE INTO")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-1.5rem"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Text, {
              h4: "",
              class: "text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Life is best spent by the sea`);
                } else {
                  return [
                    createTextVNode("Life is best spent by the sea")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "px-1.5rem" }, [
                createVNode(_component_Text, {
                  h4: "",
                  class: "text-white"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Life is best spent by the sea")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-1rem backdrop-filter backdrop-blur-md rounded-b-1rem border-t-gray-400 border-t-1"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Text, {
              sm: "",
              class: "text-gray-300"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Travel App `);
                } else {
                  return [
                    createTextVNode("Travel App ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><button class="px-2 py-1 bg-cyan-100 bg-opacity-30 rounded-16px"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Text, {
              sm: "",
              b: "",
              class: "text-sky-700"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Download`);
                } else {
                  return [
                    createTextVNode("Download")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</button></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-1rem backdrop-filter backdrop-blur-md rounded-b-1rem border-t-gray-400 border-t-1" }, [
                createVNode("div", { class: "flex justify-between items-center" }, [
                  createVNode("div", null, [
                    createVNode(_component_Text, {
                      sm: "",
                      class: "text-gray-300"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Travel App ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", null, [
                    createVNode("button", { class: "px-2 py-1 bg-cyan-100 bg-opacity-30 rounded-16px" }, [
                      createVNode(_component_Text, {
                        sm: "",
                        b: "",
                        class: "text-sky-700"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Download")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section>`);
      _push(ssrRenderComponent(_component_Text, {
        h3: "",
        code: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`NavBar`);
          } else {
            return [
              createTextVNode("NavBar")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NavBarV1, null, null, _parent));
      _push(`<br>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(`</section><section>`);
      _push(ssrRenderComponent(_component_Text, {
        h3: "",
        code: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sparkle`);
          } else {
            return [
              createTextVNode("Sparkle")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` This is `);
            _push2(ssrRenderComponent(_component_Sparkle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`sparking text`);
                } else {
                  return [
                    createTextVNode("sparking text")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`. You can use it to wrap some text or img elements. Also, it has some interesting effect, like: `);
            _push2(ssrRenderComponent(_component_Sparkle, { rainbow: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` rainbow sparkles `);
                } else {
                  return [
                    createTextVNode(" rainbow sparkles ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`. You can also choose whatever color you like: `);
            _push2(ssrRenderComponent(_component_Sparkle, { color: "lightseagreen" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` lightseagreen sparkle.`);
                } else {
                  return [
                    createTextVNode(" lightseagreen sparkle.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" This is "),
              createVNode(_component_Sparkle, null, {
                default: withCtx(() => [
                  createTextVNode("sparking text")
                ]),
                _: 1
              }),
              createTextVNode(". You can use it to wrap some text or img elements. Also, it has some interesting effect, like: "),
              createVNode(_component_Sparkle, { rainbow: "" }, {
                default: withCtx(() => [
                  createTextVNode(" rainbow sparkles ")
                ]),
                _: 1
              }),
              createTextVNode(". You can also choose whatever color you like: "),
              createVNode(_component_Sparkle, { color: "lightseagreen" }, {
                default: withCtx(() => [
                  createTextVNode(" lightseagreen sparkle.")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section>`);
      _push(ssrRenderComponent(_component_Text, {
        h3: "",
        code: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Description`);
          } else {
            return [
              createTextVNode("Description")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` The `);
            _push2(ssrRenderComponent(_component_Code, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Description`);
                } else {
                  return [
                    createTextVNode("Description")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` component contains an image and it&#39;s description. The corners of the image have been rounded. The image is defined by `);
            _push2(ssrRenderComponent(_component_Code, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`src`);
                } else {
                  return [
                    createTextVNode("src")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` prop. The description could be defined as a child components. `);
          } else {
            return [
              createTextVNode(" The "),
              createVNode(_component_Code, null, {
                default: withCtx(() => [
                  createTextVNode("Description")
                ]),
                _: 1
              }),
              createTextVNode(" component contains an image and it's description. The corners of the image have been rounded. The image is defined by "),
              createVNode(_component_Code, null, {
                default: withCtx(() => [
                  createTextVNode("src")
                ]),
                _: 1
              }),
              createTextVNode(" prop. The description could be defined as a child components. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Description, null, null, _parent));
      _push(ssrRenderComponent(_component_Text, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`The image and text&#39;s order could be reversed when you pass `);
            _push2(ssrRenderComponent(_component_Code, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`reverse`);
                } else {
                  return [
                    createTextVNode("reverse")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` props. Additionally, the width proportion of the image and text area can be modified by given number to `);
            _push2(ssrRenderComponent(_component_Code, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`textSize`);
                } else {
                  return [
                    createTextVNode("textSize")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` or `);
            _push2(ssrRenderComponent(_component_Code, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`imgSize`);
                } else {
                  return [
                    createTextVNode("imgSize")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` props. `);
          } else {
            return [
              createTextVNode("The image and text's order could be reversed when you pass "),
              createVNode(_component_Code, null, {
                default: withCtx(() => [
                  createTextVNode("reverse")
                ]),
                _: 1
              }),
              createTextVNode(" props. Additionally, the width proportion of the image and text area can be modified by given number to "),
              createVNode(_component_Code, null, {
                default: withCtx(() => [
                  createTextVNode("textSize")
                ]),
                _: 1
              }),
              createTextVNode(" or "),
              createVNode(_component_Code, null, {
                default: withCtx(() => [
                  createTextVNode("imgSize")
                ]),
                _: 1
              }),
              createTextVNode(" props. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Description, {
        reverse: "",
        src: "/img/sample2.jpg",
        textSize: 3
      }, null, _parent));
      _push(`</section><section>`);
      _push(ssrRenderComponent(_component_Text, {
        h3: "",
        code: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ArticleTitle`);
          } else {
            return [
              createTextVNode("ArticleTitle")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ArticleTitle, {
        title: "Cyberpunk 2077 is now released",
        date: "2077/10/13",
        description: "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification",
        cover: "/img/cyberpunk.png",
        tags: ["Game", "RPG", "Cyberpunk", "CDPR"]
      }, null, _parent));
      _push(`</section></div>`);
    };
  }
});
const components_vue_vue_type_style_index_0_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=components.64cd4c54.js.map

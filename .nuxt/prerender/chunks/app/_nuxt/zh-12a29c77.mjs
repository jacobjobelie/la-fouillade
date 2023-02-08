import __nuxt_component_0 from './index-0ad9cbe7.mjs';
import { _ as __nuxt_component_0$1 } from './app.config-d99d58fe.mjs';
import _sfc_main$1 from './index-17c13956.mjs';
import _sfc_main$2 from './ColorLink-9a795a83.mjs';
import _sfc_main$3 from './index-76e6c31d.mjs';
import { defineComponent, ref, resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/@vue/reactivity/index.js';
import '../server.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/unctx/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/h3/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/ufo/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/unenv/runtime/npm/cross-fetch.mjs';
import 'events';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/unenv/runtime/npm/debug.mjs';
import 'util';
import 'crypto';
import 'url';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/bufferutil/index.js';
import 'buffer';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/utf-8-validate/index.js';
import 'http';
import 'https';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/typedarray-to-buffer/index.js';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/yaeti/index.js';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/nitropack/node_modules/defu/dist/defu.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/@fortawesome/fontawesome-svg-core/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/@fortawesome/vue-fontawesome/index.js';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/@fortawesome/free-solid-svg-icons/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/@fortawesome/free-brands-svg-icons/index.mjs';
import '../../nitro/config.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/destr/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/scule/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/ohash/dist/index.mjs';
import 'file:///Users/sam/Documents/Work/la-fouillade/node_modules/hookable/dist/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "zh",
  __ssrInlineRender: true,
  setup(__props) {
    const title = ref("Resume.");
    const faissLink = "https://engineering.fb.com/2017/03/29/data-infrastructure/faiss-a-library-for-efficient-similarity-search/";
    const bctcLink = "https://www.bctest.com/content/32.html";
    const uobLink = "https://en.wikipedia.org/wiki/University_of_Bristol";
    const scutLink = "https://zh.wikipedia.org/wiki/%E5%8D%8E%E5%8D%97%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6";
    const skillList = [
      {
        name: "\u6D4B\u8BD5\u6280\u672F",
        contentList: [
          "\u57FA\u672C\u6280\u80FD: Python, Shell, Docker",
          "\u81EA\u52A8\u5316: Airflow, GitLab-CI",
          "\u6570\u636E\u5206\u6790\u548C\u53EF\u89C6\u5316: Numpy, Pandas, Opencv, Plotly"
        ]
      },
      {
        name: "\u5168\u6808\u5F00\u53D1",
        contentList: [
          "\u57FA\u672C\u6280\u80FD: HTML, CSS, JavaScript",
          "\u540E\u7AEF: Express, MongoDB",
          "\u524D\u7AEF: Vue3, Nuxt"
        ]
      },
      {
        name: "\u5176\u4ED6",
        contentList: [
          "\u8BED\u8A00\u80FD\u529B: \u4E2D\u6587\uFF08\u6BCD\u8BED\uFF09,\u82F1\u8BED\uFF08\u96C5\u601D: 7\uFF09",
          "2D\u8BBE\u8BA1: Figma",
          "3D\u8BBE\u8BA1: Blender, CATIA"
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Text = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_Description = _sfc_main$1;
      const _component_ColorLink = _sfc_main$2;
      const _component_Card = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex justify-between items-center">`);
      _push(ssrRenderComponent(_component_Text, { h1: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(title.value)}`);
          } else {
            return [
              createTextVNode(toDisplayString(title.value), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="group w-12 h-12 flex-center transition filter hover:drop-shadow-md"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: "fa-solid fa-language",
              class: "text-3xl transition group-hover:text-[#4f71d1]"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "group w-12 h-12 flex-center transition filter hover:drop-shadow-md" }, [
                createVNode(_component_font_awesome_icon, {
                  icon: "fa-solid fa-language",
                  class: "text-3xl transition group-hover:text-[#4f71d1]"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><section>`);
      _push(ssrRenderComponent(_component_Description, {
        src: "/img/london_selfi.jpeg",
        imgSize: 2,
        reverse: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Text, {
              h3: "",
              b: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u4F60\u597D\u554A\uFF0C\u670B\u53CB\uFF01`);
                } else {
                  return [
                    createTextVNode("\u4F60\u597D\u554A\uFF0C\u670B\u53CB\uFF01")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u6211\u662F<b${_scopeId2}>\u8881\u5929\u5B87</b>\uFF0C\u662F\u4E00\u540D\u7B97\u6CD5\u6D4B\u8BD5\u5F00\u53D1\u5DE5\u7A0B\u5E08\uFF0C\u6211\u76EE\u524D\u5C31\u804C\u4E8E\u4E00\u5BB6\u53EB\u505A `);
                  _push3(ssrRenderComponent(_component_ColorLink, {
                    type: "warning",
                    href: "https://www.aibee.cn/"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Aibee \u{1F41D} `);
                      } else {
                        return [
                          createTextVNode(" Aibee \u{1F41D} ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` \u7684\u4EBA\u5DE5\u667A\u80FD\u4F01\u4E1A\uFF0C\u6211\u4E3B\u8981\u8D1F\u8D23\u4FDD\u8BC1\u7B97\u6CD5\u6A21\u578B\u7684\u8D28\u91CF\u5E76\u8F85\u52A9\u63D0\u5347\u5176\u6027\u80FD\u3002 \u6700\u8FD1\uFF0C\u6211\u5BF9\u4E8E\u5168\u6808\u6280\u672F\u3001UI\u8BBE\u8BA1\u30013D\u7F8E\u672F\u5F88\u611F\u5174\u8DA3\uFF08\u5F53\u7136\uFF0C\u540C\u65F6\u4E5F\u662F\u4E00\u540D\u5FE0\u5B9E\u7684Steam\u73A9\u5BB6\uFF09 `);
                } else {
                  return [
                    createTextVNode(" \u6211\u662F"),
                    createVNode("b", null, "\u8881\u5929\u5B87"),
                    createTextVNode("\uFF0C\u662F\u4E00\u540D\u7B97\u6CD5\u6D4B\u8BD5\u5F00\u53D1\u5DE5\u7A0B\u5E08\uFF0C\u6211\u76EE\u524D\u5C31\u804C\u4E8E\u4E00\u5BB6\u53EB\u505A "),
                    createVNode(_component_ColorLink, {
                      type: "warning",
                      href: "https://www.aibee.cn/"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Aibee \u{1F41D} ")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" \u7684\u4EBA\u5DE5\u667A\u80FD\u4F01\u4E1A\uFF0C\u6211\u4E3B\u8981\u8D1F\u8D23\u4FDD\u8BC1\u7B97\u6CD5\u6A21\u578B\u7684\u8D28\u91CF\u5E76\u8F85\u52A9\u63D0\u5347\u5176\u6027\u80FD\u3002 \u6700\u8FD1\uFF0C\u6211\u5BF9\u4E8E\u5168\u6808\u6280\u672F\u3001UI\u8BBE\u8BA1\u30013D\u7F8E\u672F\u5F88\u611F\u5174\u8DA3\uFF08\u5F53\u7136\uFF0C\u540C\u65F6\u4E5F\u662F\u4E00\u540D\u5FE0\u5B9E\u7684Steam\u73A9\u5BB6\uFF09 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Text, { b: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u8054\u7CFB\u65B9\u5F0F: `);
                } else {
                  return [
                    createTextVNode("\u8054\u7CFB\u65B9\u5F0F: ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<a href="mailto:tim3-yuan@foxmail.com" class="w-12 h-12 flex-center rounded-1 transition-all hover:shadow-nsm"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: "fa-solid fa-envelope",
              class: "text-2xl"
            }, null, _parent2, _scopeId));
            _push2(`</a><a href="https://github.com/paperplane110" target="_blank" class="w-12 h-12 flex-center rounded-1 transition-all hover:shadow-nsm"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: "fa-brands fa-github",
              class: "text-2xl transition"
            }, null, _parent2, _scopeId));
            _push2(`</a></div>`);
          } else {
            return [
              createVNode(_component_Text, {
                h3: "",
                b: ""
              }, {
                default: withCtx(() => [
                  createTextVNode("\u4F60\u597D\u554A\uFF0C\u670B\u53CB\uFF01")
                ]),
                _: 1
              }),
              createVNode(_component_Text, null, {
                default: withCtx(() => [
                  createTextVNode(" \u6211\u662F"),
                  createVNode("b", null, "\u8881\u5929\u5B87"),
                  createTextVNode("\uFF0C\u662F\u4E00\u540D\u7B97\u6CD5\u6D4B\u8BD5\u5F00\u53D1\u5DE5\u7A0B\u5E08\uFF0C\u6211\u76EE\u524D\u5C31\u804C\u4E8E\u4E00\u5BB6\u53EB\u505A "),
                  createVNode(_component_ColorLink, {
                    type: "warning",
                    href: "https://www.aibee.cn/"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Aibee \u{1F41D} ")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" \u7684\u4EBA\u5DE5\u667A\u80FD\u4F01\u4E1A\uFF0C\u6211\u4E3B\u8981\u8D1F\u8D23\u4FDD\u8BC1\u7B97\u6CD5\u6A21\u578B\u7684\u8D28\u91CF\u5E76\u8F85\u52A9\u63D0\u5347\u5176\u6027\u80FD\u3002 \u6700\u8FD1\uFF0C\u6211\u5BF9\u4E8E\u5168\u6808\u6280\u672F\u3001UI\u8BBE\u8BA1\u30013D\u7F8E\u672F\u5F88\u611F\u5174\u8DA3\uFF08\u5F53\u7136\uFF0C\u540C\u65F6\u4E5F\u662F\u4E00\u540D\u5FE0\u5B9E\u7684Steam\u73A9\u5BB6\uFF09 ")
                ]),
                _: 1
              }),
              createVNode("div", { class: "flex items-center gap-2" }, [
                createVNode(_component_Text, { b: "" }, {
                  default: withCtx(() => [
                    createTextVNode("\u8054\u7CFB\u65B9\u5F0F: ")
                  ]),
                  _: 1
                }),
                createVNode("a", {
                  href: "mailto:tim3-yuan@foxmail.com",
                  class: "w-12 h-12 flex-center rounded-1 transition-all hover:shadow-nsm"
                }, [
                  createVNode(_component_font_awesome_icon, {
                    icon: "fa-solid fa-envelope",
                    class: "text-2xl"
                  })
                ]),
                createVNode("a", {
                  href: "https://github.com/paperplane110",
                  target: "_blank",
                  class: "w-12 h-12 flex-center rounded-1 transition-all hover:shadow-nsm"
                }, [
                  createVNode(_component_font_awesome_icon, {
                    icon: "fa-brands fa-github",
                    class: "text-2xl transition"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section>`);
      _push(ssrRenderComponent(_component_Text, { h3: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-solid fa-bolt" }, null, _parent2, _scopeId));
            _push2(` \u6280\u80FD\u901F\u89C8 `);
          } else {
            return [
              createVNode(_component_font_awesome_icon, { icon: "fa-solid fa-bolt" }),
              createTextVNode(" \u6280\u80FD\u901F\u89C8 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid grid-cols-3 gap-2 &lt;md:grid-cols-1"><!--[-->`);
      ssrRenderList(skillList, (skillInfo, idx) => {
        _push(ssrRenderComponent(_component_Card, {
          class: "px-1.25rem pt-3 pb-6",
          variant: "flat",
          "is-hoverable": "",
          key: idx
        }, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Text, {
                h4: "",
                b: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(skillInfo.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(skillInfo.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Text, {
                  h4: "",
                  b: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(skillInfo.name), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          body: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Text, { base: "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<ul class="pl-0"${_scopeId2}><!--[-->`);
                    ssrRenderList(skillInfo.contentList, (s, idx2) => {
                      _push3(`<li${_scopeId2}>${ssrInterpolate(s)}</li>`);
                    });
                    _push3(`<!--]--></ul>`);
                  } else {
                    return [
                      createVNode("ul", { class: "pl-0" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(skillInfo.contentList, (s, idx2) => {
                          return openBlock(), createBlock("li", { key: idx2 }, toDisplayString(s), 1);
                        }), 128))
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Text, { base: "" }, {
                  default: withCtx(() => [
                    createVNode("ul", { class: "pl-0" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(skillInfo.contentList, (s, idx2) => {
                        return openBlock(), createBlock("li", { key: idx2 }, toDisplayString(s), 1);
                      }), 128))
                    ])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section><section>`);
      _push(ssrRenderComponent(_component_Text, { h3: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-solid fa-briefcase" }, null, _parent2, _scopeId));
            _push2(` \u5DE5\u4F5C\u7ECF\u5386 `);
          } else {
            return [
              createVNode(_component_font_awesome_icon, { icon: "fa-solid fa-briefcase" }),
              createTextVNode(" \u5DE5\u4F5C\u7ECF\u5386 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, {
        h4: "",
        b: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u7B97\u6CD5\u6D4B\u8BD5\u5F00\u53D1\u5DE5\u7A0B\u5E08`);
          } else {
            return [
              createTextVNode("\u7B97\u6CD5\u6D4B\u8BD5\u5F00\u53D1\u5DE5\u7A0B\u5E08")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 2020.4-\u73B0\u5728`);
            _push2(ssrRenderComponent(_component_ColorLink, {
              type: "warning",
              href: "https://www.aibee.cn/"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`@Aibee \u{1F41D}`);
                } else {
                  return [
                    createTextVNode("@Aibee \u{1F41D}")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" 2020.4-\u73B0\u5728"),
              createVNode(_component_ColorLink, {
                type: "warning",
                href: "https://www.aibee.cn/"
              }, {
                default: withCtx(() => [
                  createTextVNode("@Aibee \u{1F41D}")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, {
        b: "",
        em: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u4E3B\u8981\u804C\u80FD\u4E0E\u804C\u8D23`);
          } else {
            return [
              createTextVNode("\u4E3B\u8981\u804C\u80FD\u4E0E\u804C\u8D23")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul${_scopeId}><li${_scopeId}> \u66FE\u524D\u540E\u8D1F\u8D235\u4E2A\u4EE5\u4E0A\u4E0D\u540C\u7C7B\u578B\u7684\u6A21\u578B\u6D4B\u8BD5\uFF0C\u4E3B\u8981\u6D4B\u8BD5\u5206\u7C7B\u6A21\u578B\u3002 \u8D1F\u8D23\u6309\u65F6\u4EA7\u51FA\u6D4B\u8BD5\u62A5\u544A\u3001\u5BF9\u7B97\u6CD5\u7ED3\u679C\u8FDB\u884C\u6570\u636E\u53EF\u89C6\u5316\u3001\u5E76\u5206\u6790\u7B97\u6CD5badcase\u3002 \u63A5\u624B\u8FC7\u7684\u6A21\u578B\u5982\u4E0B\uFF1A </li><ul${_scopeId}><li${_scopeId}>\u4EBA\u8138\u8BC6\u522B\u6A21\u578B</li><li${_scopeId}>\u4EBA\u8138\u6D3B\u4F53\u68C0\u6D4B\u6A21\u578B</li><li${_scopeId}>\u4EBA\u8138\u53E3\u7F69\u5206\u7C7B\u6A21\u578B</li><li${_scopeId}>\u4EBA\u4F53\u591A\u5C5E\u6027\u6A21\u578B</li><li${_scopeId}>\u8F66\u8F86\u54C1\u724C\u53CA\u5B50\u54C1\u724C\u6A21\u578B</li></ul><li${_scopeId}>\u540C\u7B97\u6CD5\u5DE5\u7A0B\u5E08\u7D27\u5BC6\u5408\u4F5C\uFF0C\u53CA\u65F6\u53CD\u9988\u7B97\u6CD5\u95EE\u9898\uFF0C\u8F85\u52A9\u63D0\u5347\u7B97\u6CD5\u6027\u80FD</li><li${_scopeId}>\u8BBE\u8BA1\u5E76\u7F16\u5199\u6D4B\u8BD5\u5DE5\u5177\uFF0C\u81EA\u52A8\u5316\u6A21\u578B\u6D4B\u8BD5\u6D41\u7A0B\uFF0C\u4E3A\u7B97\u6CD5\u9A8C\u8BC1\u63D0\u901F</li></ul>`);
          } else {
            return [
              createVNode("ul", null, [
                createVNode("li", null, " \u66FE\u524D\u540E\u8D1F\u8D235\u4E2A\u4EE5\u4E0A\u4E0D\u540C\u7C7B\u578B\u7684\u6A21\u578B\u6D4B\u8BD5\uFF0C\u4E3B\u8981\u6D4B\u8BD5\u5206\u7C7B\u6A21\u578B\u3002 \u8D1F\u8D23\u6309\u65F6\u4EA7\u51FA\u6D4B\u8BD5\u62A5\u544A\u3001\u5BF9\u7B97\u6CD5\u7ED3\u679C\u8FDB\u884C\u6570\u636E\u53EF\u89C6\u5316\u3001\u5E76\u5206\u6790\u7B97\u6CD5badcase\u3002 \u63A5\u624B\u8FC7\u7684\u6A21\u578B\u5982\u4E0B\uFF1A "),
                createVNode("ul", null, [
                  createVNode("li", null, "\u4EBA\u8138\u8BC6\u522B\u6A21\u578B"),
                  createVNode("li", null, "\u4EBA\u8138\u6D3B\u4F53\u68C0\u6D4B\u6A21\u578B"),
                  createVNode("li", null, "\u4EBA\u8138\u53E3\u7F69\u5206\u7C7B\u6A21\u578B"),
                  createVNode("li", null, "\u4EBA\u4F53\u591A\u5C5E\u6027\u6A21\u578B"),
                  createVNode("li", null, "\u8F66\u8F86\u54C1\u724C\u53CA\u5B50\u54C1\u724C\u6A21\u578B")
                ]),
                createVNode("li", null, "\u540C\u7B97\u6CD5\u5DE5\u7A0B\u5E08\u7D27\u5BC6\u5408\u4F5C\uFF0C\u53CA\u65F6\u53CD\u9988\u7B97\u6CD5\u95EE\u9898\uFF0C\u8F85\u52A9\u63D0\u5347\u7B97\u6CD5\u6027\u80FD"),
                createVNode("li", null, "\u8BBE\u8BA1\u5E76\u7F16\u5199\u6D4B\u8BD5\u5DE5\u5177\uFF0C\u81EA\u52A8\u5316\u6A21\u578B\u6D4B\u8BD5\u6D41\u7A0B\uFF0C\u4E3A\u7B97\u6CD5\u9A8C\u8BC1\u63D0\u901F")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, {
        b: "",
        em: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u5DE5\u4F5C\u4EAE\u70B9`);
          } else {
            return [
              createTextVNode("\u5DE5\u4F5C\u4EAE\u70B9")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul${_scopeId}><li${_scopeId}> \u5E26\u98864\u4EBA\u5C0F\u7EC4\u5F00\u53D1\u6570\u636E\u7BA1\u7406\u7CFB\u7EDF: `);
            _push2(ssrRenderComponent(_component_ColorLink, { type: "success" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Data Manager`);
                } else {
                  return [
                    createTextVNode("Data Manager")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`\u3002 \u8BE5\u7CFB\u7EDF\u7BA1\u7406\u4E86<strong${_scopeId}>\u5343\u4E07\u7EA7</strong>\u7684\u56FE\u7247\u6570\u636E\u4E0E<strong${_scopeId}>\u4E0A\u767E\u4E2A</strong>benchmark\uFF0C \u4FBF\u4E8E\u7B97\u6CD5\u6D4B\u8BD5\u7BA1\u7406\u6570\u636E\uFF0C\u964D\u4F4E\u4E86\u6570\u636E\u96C6\u7684\u7BA1\u7406\u6210\u672C\u548C\u6807\u6CE8\u6210\u672C </li><li${_scopeId}> \u4E0E\u7B97\u6CD5\u5DE5\u7A0B\u5E08\u7D27\u5BC6\u5408\u4F5C\uFF0C\u5728\u6D4B\u8BD5\u4E2D\u53D1\u73B0\u5E76\u603B\u7ED3\u4EBA\u8138\u6D3B\u4F53\u7B97\u6CD5\u5728\u5E94\u5BF9\u5B9E\u9645\u573A\u666F\u65F6\u6240\u66B4\u9732\u7684\u95EE\u9898\u3002 \u79EF\u6781\u534F\u8C03\u6570\u636E\u91C7\u96C6\u56E2\u961F\uFF0C\u4E3A\u7B97\u6CD5\u8BAD\u7EC3\u8865\u5145\u6570\u636E\u3002 \u5E76\u6700\u7EC8\u901A\u8FC7\u4E86\u91D1\u878D\u652F\u4ED8\u9886\u57DF\u7684\u5173\u952E\u8BA4\u8BC1 `);
            _push2(ssrRenderComponent(_component_ColorLink, {
              href: bctcLink,
              target: "_blank"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`BCTC \u94F6\u8054\u6D3B\u4F53\u8BA4\u8BC1 `);
                } else {
                  return [
                    createTextVNode("BCTC \u94F6\u8054\u6D3B\u4F53\u8BA4\u8BC1 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`\u3002\u5E76\u8FDB\u884C\u4E86\u56E2\u961F\u7ECF\u9A8C\u5206\u4EAB\u3002 </li><li${_scopeId}> \u9762\u5BF9\u5343\u4E07\u7EA7\u5E95\u5E93\u4EBA\u8138\u8BC6\u522B\u6D4B\u8BD5\u65F6\u95F4\u8FC7\u957F\u7684\u95EE\u9898\uFF0C\u4E3B\u52A8\u8FDB\u884C\u76F8\u5173\u8D44\u6599\u7684\u641C\u7D22\u548C\u5B66\u4E60\uFF0C \u6700\u7EC8\u4F7F\u7528 `);
            _push2(ssrRenderComponent(_component_ColorLink, {
              type: "secondary",
              href: faissLink,
              target: "_blank"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Faiss `);
                } else {
                  return [
                    createTextVNode(" Faiss ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` \u4EBA\u8138\u7279\u5F81\u641C\u7D22\u5E93\uFF0C\u5C06\u6D4B\u8BD5\u65F6\u95F4\u538B\u7F29 <em${_scopeId}><b${_scopeId}>4</b></em> \u500D </li></ul>`);
          } else {
            return [
              createVNode("ul", null, [
                createVNode("li", null, [
                  createTextVNode(" \u5E26\u98864\u4EBA\u5C0F\u7EC4\u5F00\u53D1\u6570\u636E\u7BA1\u7406\u7CFB\u7EDF: "),
                  createVNode(_component_ColorLink, { type: "success" }, {
                    default: withCtx(() => [
                      createTextVNode("Data Manager")
                    ]),
                    _: 1
                  }),
                  createTextVNode("\u3002 \u8BE5\u7CFB\u7EDF\u7BA1\u7406\u4E86"),
                  createVNode("strong", null, "\u5343\u4E07\u7EA7"),
                  createTextVNode("\u7684\u56FE\u7247\u6570\u636E\u4E0E"),
                  createVNode("strong", null, "\u4E0A\u767E\u4E2A"),
                  createTextVNode("benchmark\uFF0C \u4FBF\u4E8E\u7B97\u6CD5\u6D4B\u8BD5\u7BA1\u7406\u6570\u636E\uFF0C\u964D\u4F4E\u4E86\u6570\u636E\u96C6\u7684\u7BA1\u7406\u6210\u672C\u548C\u6807\u6CE8\u6210\u672C ")
                ]),
                createVNode("li", null, [
                  createTextVNode(" \u4E0E\u7B97\u6CD5\u5DE5\u7A0B\u5E08\u7D27\u5BC6\u5408\u4F5C\uFF0C\u5728\u6D4B\u8BD5\u4E2D\u53D1\u73B0\u5E76\u603B\u7ED3\u4EBA\u8138\u6D3B\u4F53\u7B97\u6CD5\u5728\u5E94\u5BF9\u5B9E\u9645\u573A\u666F\u65F6\u6240\u66B4\u9732\u7684\u95EE\u9898\u3002 \u79EF\u6781\u534F\u8C03\u6570\u636E\u91C7\u96C6\u56E2\u961F\uFF0C\u4E3A\u7B97\u6CD5\u8BAD\u7EC3\u8865\u5145\u6570\u636E\u3002 \u5E76\u6700\u7EC8\u901A\u8FC7\u4E86\u91D1\u878D\u652F\u4ED8\u9886\u57DF\u7684\u5173\u952E\u8BA4\u8BC1 "),
                  createVNode(_component_ColorLink, {
                    href: bctcLink,
                    target: "_blank"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("BCTC \u94F6\u8054\u6D3B\u4F53\u8BA4\u8BC1 ")
                    ]),
                    _: 1
                  }),
                  createTextVNode("\u3002\u5E76\u8FDB\u884C\u4E86\u56E2\u961F\u7ECF\u9A8C\u5206\u4EAB\u3002 ")
                ]),
                createVNode("li", null, [
                  createTextVNode(" \u9762\u5BF9\u5343\u4E07\u7EA7\u5E95\u5E93\u4EBA\u8138\u8BC6\u522B\u6D4B\u8BD5\u65F6\u95F4\u8FC7\u957F\u7684\u95EE\u9898\uFF0C\u4E3B\u52A8\u8FDB\u884C\u76F8\u5173\u8D44\u6599\u7684\u641C\u7D22\u548C\u5B66\u4E60\uFF0C \u6700\u7EC8\u4F7F\u7528 "),
                  createVNode(_component_ColorLink, {
                    type: "secondary",
                    href: faissLink,
                    target: "_blank"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Faiss ")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" \u4EBA\u8138\u7279\u5F81\u641C\u7D22\u5E93\uFF0C\u5C06\u6D4B\u8BD5\u65F6\u95F4\u538B\u7F29 "),
                  createVNode("em", null, [
                    createVNode("b", null, "4")
                  ]),
                  createTextVNode(" \u500D ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section>`);
      _push(ssrRenderComponent(_component_Text, { h3: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-solid fa-graduation-cap" }, null, _parent2, _scopeId));
            _push2(` \u6559\u80B2\u7ECF\u5386 `);
          } else {
            return [
              createVNode(_component_font_awesome_icon, { icon: "fa-solid fa-graduation-cap" }),
              createTextVNode(" \u6559\u80B2\u7ECF\u5386 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, {
        h4: "",
        b: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u673A\u5668\u4EBA\u5B66\xB7\u7855\u58EB`);
          } else {
            return [
              createTextVNode("\u673A\u5668\u4EBA\u5B66\xB7\u7855\u58EB")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 2019.10-2020.10 `);
            _push2(ssrRenderComponent(_component_ColorLink, { href: uobLink }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`@\u5E03\u91CC\u65AF\u6258\u5927\u5B66 `);
                } else {
                  return [
                    createTextVNode("@\u5E03\u91CC\u65AF\u6258\u5927\u5B66 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`, \u82F1\u56FD\u5E03\u91CC\u65AF\u6258 `);
          } else {
            return [
              createTextVNode(" 2019.10-2020.10 "),
              createVNode(_component_ColorLink, { href: uobLink }, {
                default: withCtx(() => [
                  createTextVNode("@\u5E03\u91CC\u65AF\u6258\u5927\u5B66 ")
                ]),
                _: 1
              }),
              createTextVNode(", \u82F1\u56FD\u5E03\u91CC\u65AF\u6258 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u6838\u5FC3\u8BFE\u7A0B\uFF1A\u56FE\u50CF\u5904\u7406\u4E0E\u8BA1\u7B97\u673A\u89C6\u89C9\uFF0C\u4EBA\u5DE5\u667A\u80FD\u5BFC\u8BBA\uFF0C\u667A\u80FD\u4FE1\u606F\u7CFB\u7EDF\uFF0C\u673A\u5668\u4EBA\u5B66\u5BFC\u8BBA `);
          } else {
            return [
              createTextVNode(" \u6838\u5FC3\u8BFE\u7A0B\uFF1A\u56FE\u50CF\u5904\u7406\u4E0E\u8BA1\u7B97\u673A\u89C6\u89C9\uFF0C\u4EBA\u5DE5\u667A\u80FD\u5BFC\u8BBA\uFF0C\u667A\u80FD\u4FE1\u606F\u7CFB\u7EDF\uFF0C\u673A\u5668\u4EBA\u5B66\u5BFC\u8BBA ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<br>`);
      _push(ssrRenderComponent(_component_Text, {
        h4: "",
        b: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u8F66\u8F86\u5DE5\u7A0B\xB7\u5B66\u58EB`);
          } else {
            return [
              createTextVNode("\u8F66\u8F86\u5DE5\u7A0B\xB7\u5B66\u58EB")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 2015.9-2019.6 `);
            _push2(ssrRenderComponent(_component_ColorLink, {
              type: "secondary",
              href: scutLink
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`@\u534E\u5357\u7406\u5DE5\u5927\u5B66 `);
                } else {
                  return [
                    createTextVNode("@\u534E\u5357\u7406\u5DE5\u5927\u5B66 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`, \u4E2D\u56FD\u5E7F\u5DDE `);
          } else {
            return [
              createTextVNode(" 2015.9-2019.6 "),
              createVNode(_component_ColorLink, {
                type: "secondary",
                href: scutLink
              }, {
                default: withCtx(() => [
                  createTextVNode("@\u534E\u5357\u7406\u5DE5\u5927\u5B66 ")
                ]),
                _: 1
              }),
              createTextVNode(", \u4E2D\u56FD\u5E7F\u5DDE ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u6838\u5FC3\u8BFE\u7A0B\uFF1A\u6C7D\u8F66\u6784\u9020\uFF0C\u6C7D\u8F66\u53D1\u52A8\u673A\u539F\u7406\uFF0C\u6C7D\u8F66\u7406\u8BBA\uFF0C\u5355\u7247\u673A\u539F\u7406`);
          } else {
            return [
              createTextVNode("\u6838\u5FC3\u8BFE\u7A0B\uFF1A\u6C7D\u8F66\u6784\u9020\uFF0C\u6C7D\u8F66\u53D1\u52A8\u673A\u539F\u7406\uFF0C\u6C7D\u8F66\u7406\u8BBA\uFF0C\u5355\u7247\u673A\u539F\u7406")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/zh.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=zh-12a29c77.mjs.map

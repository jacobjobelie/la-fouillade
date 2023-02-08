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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const title = ref("\u4E2A\u4EBA\u7B80\u5386.");
    const faissLink = "https://engineering.fb.com/2017/03/29/data-infrastructure/faiss-a-library-for-efficient-similarity-search/";
    const bctcLink = "https://www.bctest.com/content/32.html";
    const uobLink = "https://en.wikipedia.org/wiki/University_of_Bristol";
    const scutLink = "https://zh.wikipedia.org/wiki/%E5%8D%8E%E5%8D%97%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6";
    const skillList = [
      {
        name: "Test skills",
        contentList: [
          "Basic: Python, Shell, Docker",
          "Automation: Airflow, GitLab-CI",
          "Analysis & Visualization: Numpy, Pandas, Opencv, Plotly"
        ]
      },
      {
        name: "Full-Stack",
        contentList: [
          "Basic: HTML, CSS, JavaScript",
          "Back-End: Express, MongoDB",
          "Front-End: Vue3, Nuxt"
        ]
      },
      {
        name: "Others",
        contentList: [
          "Language: Chinese(Mother tongue), English(IELTS: 7)",
          "2D Design: Figma",
          "3D Design: Blender, CATIA"
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
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/about/zh" }, {
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
            _push2(ssrRenderComponent(_component_Text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Hi there!`);
                } else {
                  return [
                    createTextVNode(" Hi there!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Text, {
              h3: "",
              b: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`I&#39;m Tianyu \u{1F44B}`);
                } else {
                  return [
                    createTextVNode("I'm Tianyu \u{1F44B}")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` I&#39;m currently doing algorithm testing at `);
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
                  _push3(` to ensure and improve the quality of image algorithms. Recently, I&#39;m interested in Full-Stack technology, UI design, 3D arts, and games of course. `);
                } else {
                  return [
                    createTextVNode(" I'm currently doing algorithm testing at "),
                    createVNode(_component_ColorLink, {
                      type: "warning",
                      href: "https://www.aibee.cn/"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Aibee \u{1F41D} ")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" to ensure and improve the quality of image algorithms. Recently, I'm interested in Full-Stack technology, UI design, 3D arts, and games of course. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Text, { b: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Contacts: `);
                } else {
                  return [
                    createTextVNode("Contacts: ")
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
              createVNode(_component_Text, null, {
                default: withCtx(() => [
                  createTextVNode(" Hi there!")
                ]),
                _: 1
              }),
              createVNode(_component_Text, {
                h3: "",
                b: ""
              }, {
                default: withCtx(() => [
                  createTextVNode("I'm Tianyu \u{1F44B}")
                ]),
                _: 1
              }),
              createVNode(_component_Text, null, {
                default: withCtx(() => [
                  createTextVNode(" I'm currently doing algorithm testing at "),
                  createVNode(_component_ColorLink, {
                    type: "warning",
                    href: "https://www.aibee.cn/"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Aibee \u{1F41D} ")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" to ensure and improve the quality of image algorithms. Recently, I'm interested in Full-Stack technology, UI design, 3D arts, and games of course. ")
                ]),
                _: 1
              }),
              createVNode("div", { class: "flex items-center gap-2" }, [
                createVNode(_component_Text, { b: "" }, {
                  default: withCtx(() => [
                    createTextVNode("Contacts: ")
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
            _push2(` Skills `);
          } else {
            return [
              createVNode(_component_font_awesome_icon, { icon: "fa-solid fa-bolt" }),
              createTextVNode(" Skills ")
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
            _push2(` Work Experience `);
          } else {
            return [
              createVNode(_component_font_awesome_icon, { icon: "fa-solid fa-briefcase" }),
              createTextVNode(" Work Experience ")
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
            _push2(`Software Engineer in Algorithm Test`);
          } else {
            return [
              createTextVNode("Software Engineer in Algorithm Test")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, { p: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 2020.4-Current`);
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
              createTextVNode(" 2020.4-Current"),
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
            _push2(`Key Qualifications &amp; Responsibilities`);
          } else {
            return [
              createTextVNode("Key Qualifications & Responsibilities")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul${_scopeId}><li${_scopeId}> Responsible for 5+ models&#39; testing and giving test reports including badcase analysis and data visualization </li><ul${_scopeId}><li${_scopeId}>Face recognition model</li><li${_scopeId}>Face anti-spoofing model</li><li${_scopeId}>Face mask classification model</li><li${_scopeId}>Body 21-attributes model</li><li${_scopeId}>Car brand classification model</li></ul><li${_scopeId}> Liases with algorithm researchers and improve the performance of models </li><li${_scopeId}> Design, write and debugged dev-tools to automate model test procedures, and boost the model verification flow </li></ul>`);
          } else {
            return [
              createVNode("ul", null, [
                createVNode("li", null, " Responsible for 5+ models' testing and giving test reports including badcase analysis and data visualization "),
                createVNode("ul", null, [
                  createVNode("li", null, "Face recognition model"),
                  createVNode("li", null, "Face anti-spoofing model"),
                  createVNode("li", null, "Face mask classification model"),
                  createVNode("li", null, "Body 21-attributes model"),
                  createVNode("li", null, "Car brand classification model")
                ]),
                createVNode("li", null, " Liases with algorithm researchers and improve the performance of models "),
                createVNode("li", null, " Design, write and debugged dev-tools to automate model test procedures, and boost the model verification flow ")
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
            _push2(`Key Achivements`);
          } else {
            return [
              createTextVNode("Key Achivements")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul${_scopeId}><li${_scopeId}> Leading a four people group, developing a data management system called `);
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
            _push2(`, which helps testers managing millions of images&#39; data and hundreds of benchmarks. Increasing dataset management efficiency by 20%. </li><li${_scopeId}> Cooperating with algorithms researchers, pass the key algorithm certification: `);
            _push2(ssrRenderComponent(_component_ColorLink, {
              href: bctcLink,
              target: "_blank"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`BCTC face anti-spoofing`);
                } else {
                  return [
                    createTextVNode("BCTC face anti-spoofing")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`certification. </li><li${_scopeId}> Optimized the face recognition test tools with `);
            _push2(ssrRenderComponent(_component_ColorLink, {
              type: "secondary",
              href: faissLink,
              target: "_blank"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Faiss`);
                } else {
                  return [
                    createTextVNode("Faiss")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`, shortening test time nearly 4X. </li></ul>`);
          } else {
            return [
              createVNode("ul", null, [
                createVNode("li", null, [
                  createTextVNode(" Leading a four people group, developing a data management system called "),
                  createVNode(_component_ColorLink, { type: "success" }, {
                    default: withCtx(() => [
                      createTextVNode("Data Manager")
                    ]),
                    _: 1
                  }),
                  createTextVNode(", which helps testers managing millions of images' data and hundreds of benchmarks. Increasing dataset management efficiency by 20%. ")
                ]),
                createVNode("li", null, [
                  createTextVNode(" Cooperating with algorithms researchers, pass the key algorithm certification: "),
                  createVNode(_component_ColorLink, {
                    href: bctcLink,
                    target: "_blank"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("BCTC face anti-spoofing")
                    ]),
                    _: 1
                  }),
                  createTextVNode("certification. ")
                ]),
                createVNode("li", null, [
                  createTextVNode(" Optimized the face recognition test tools with "),
                  createVNode(_component_ColorLink, {
                    type: "secondary",
                    href: faissLink,
                    target: "_blank"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Faiss")
                    ]),
                    _: 1
                  }),
                  createTextVNode(", shortening test time nearly 4X. ")
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
            _push2(` Education `);
          } else {
            return [
              createVNode(_component_font_awesome_icon, { icon: "fa-solid fa-graduation-cap" }),
              createTextVNode(" Education ")
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
            _push2(`MSc. Robotics`);
          } else {
            return [
              createTextVNode("MSc. Robotics")
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
                  _push3(`@University of Bristol `);
                } else {
                  return [
                    createTextVNode("@University of Bristol ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`, UK `);
          } else {
            return [
              createTextVNode(" 2019.10-2020.10 "),
              createVNode(_component_ColorLink, { href: uobLink }, {
                default: withCtx(() => [
                  createTextVNode("@University of Bristol ")
                ]),
                _: 1
              }),
              createTextVNode(", UK ")
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
            _push2(`BSc. Vehicle Engineering`);
          } else {
            return [
              createTextVNode("BSc. Vehicle Engineering")
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
                  _push3(`@South China University of Technology `);
                } else {
                  return [
                    createTextVNode("@South China University of Technology ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`, China `);
          } else {
            return [
              createTextVNode(" 2015.9-2019.6 "),
              createVNode(_component_ColorLink, {
                type: "secondary",
                href: scutLink
              }, {
                default: withCtx(() => [
                  createTextVNode("@South China University of Technology ")
                ]),
                _: 1
              }),
              createTextVNode(", China ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-1c4f56b7.mjs.map

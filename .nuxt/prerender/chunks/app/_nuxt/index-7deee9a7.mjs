import { useSSRContext, defineComponent, mergeProps, ref, withCtx, createVNode, createTextVNode, toDisplayString } from 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderSlot, ssrRenderComponent, ssrInterpolate } from 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_0 } from './index-914e3ae6.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-6bdec6f5.mjs';
import { u as useAsyncData } from './asyncData-8beb4a1e.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/@vue/reactivity/index.js';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/ufo/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/hookable/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/unctx/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/unhead/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/h3/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/@fortawesome/fontawesome-svg-core/index.mjs';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/@fortawesome/vue-fontawesome/index.js';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/@fortawesome/free-solid-svg-icons/index.mjs';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/@fortawesome/free-brands-svg-icons/index.mjs';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/destr/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/scule/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/ohash/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/radix3/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/pathe/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/unified/index.js';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/micromark/lib/preprocess.js';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/micromark/lib/postprocess.js';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/micromark-util-character/index.js';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/remark-emoji/index.js';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/rehype-slug/index.js';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/remark-squeeze-paragraphs/index.js';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/rehype-external-links/index.js';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/remark-gfm/index.js';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/rehype-raw/index.js';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/remark-parse/index.js';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/remark-rehype/index.js';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/mdast-util-to-hast/index.js';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/detab/index.js';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/unist-builder/index.js';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/mdurl/index.js';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/slugify/slugify.js';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/unist-util-position/index.js';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/unist-util-visit/index.js';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/shiki-es/dist/shiki.node.mjs';
import 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/unenv/runtime/npm/consola.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    marble: null,
    imgClass: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center relative" }, _attrs))}><div class="absolute h-full w-full bg-clip-border overflow-hidden"><img class="${ssrRenderClass(`w-full h-full object-cover ${__props.imgClass}`)}"${ssrRenderAttr("src", __props.marble)}></div><div class="z-10">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PictureSlot/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    srcset: null,
    marble: null,
    borderColor: null,
    iw: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center relative" }, _attrs))}><div class="w-full h-full"><div class="${ssrRenderClass(`absolute h-full w-full ${__props.borderColor} border-4 rounded-xl`)}"></div><div class="absolute h-full w-full rounded-3rem bg-clip-border overflow-hidden"><img class="w-full h-full object-cover"${ssrRenderAttr("src", __props.marble)}></div><div class="${ssrRenderClass(`relative w-11/12 h-full z-10 ${__props.iw} flex items-center justify-center mx-auto py-4`)}"><img class="h-full self-center object-cover"${ssrRenderAttr("src", __props.srcset)}></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Picture/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const links = {
  gLongcolNajac: "https://www.google.com/maps/dir/Najac,+France/Longcol,+12270+La+Fouillade,+France/@44.2374129,1.9867011,14z/data=!3m1!4b1!4m18!4m17!1m5!1m1!1s0x12adb0122e4f1ddd:0xbef6d72b530e68e7!2m2!1d1.978425!2d44.21953!1m5!1m1!1s0x12ada56e9a449f53:0xa821f094d293877b!2m2!1d2.0022233!2d44.2554001!2m3!6e0!7e2!8j1680769680!3e0",
  longcol: "https://www.chateaudelongcol.com/galerie-photos"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref("Destination: La Fouillade - July 1-8 2023");
    ref();
    const linksRef = ref(links);
    ref();
    const wassapText = ref("\u{1F517} Click to get Invite link");
    function b64_to_utf8(str) {
      return decodeURIComponent(escape(window.atob(str)));
    }
    async function fetchWassap() {
      if (wassapText.value.includes("https://"))
        return;
      const { data } = await useAsyncData("count", () => $fetch("/api/wassap"));
      wassapText.value = data.value || b64_to_utf8("aHR0cHM6Ly9jaGF0LndoYXRzYXBwLmNvbS9HODF0bXNhbjNKeTdSaVg0NkFQOHJa") || "failed to get the link :(";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PictureSlot = _sfc_main$2;
      const _component_Picture = _sfc_main$1;
      const _component_Text = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full mx-auto py-6" }, _attrs))} data-v-0b44868f><div class="relative w-full h-full grid items-center place-items-center" data-v-0b44868f><div class="w-full h-full grid gap-2" data-v-0b44868f><section class="relative w-full flex text-center justify-center flex-col mb-6" data-v-0b44868f><div class="w-full h-full text-light-500" data-v-0b44868f>`);
      _push(ssrRenderComponent(_component_PictureSlot, {
        class: "w-full",
        marble: "/img/marble/IMG_4643.jpg",
        imgClass: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative flex-col flex items-center justify-center org rounded-4xl text-green-200 px-4 py-8" data-v-0b44868f${_scopeId}><div class="absolute w-full h-full header-border" data-v-0b44868f${_scopeId}></div><h1 class="m-0 header-text header-color extrabold" data-v-0b44868f${_scopeId}>F\xEAte Fou</h1><h3 class="m-0 header-text neon-color header-neon extrabold" data-v-0b44868f${_scopeId}>(crazy party)</h3><h2 class="m-0 mt-6 header-text header-color extrabold" data-v-0b44868f${_scopeId}>La Fouillade - Ch\xE2teau du Longcol</h2></div>`);
          } else {
            return [
              createVNode("div", { class: "relative flex-col flex items-center justify-center org rounded-4xl text-green-200 px-4 py-8" }, [
                createVNode("div", { class: "absolute w-full h-full header-border" }),
                createVNode("h1", { class: "m-0 header-text header-color extrabold" }, "F\xEAte Fou"),
                createVNode("h3", { class: "m-0 header-text neon-color header-neon extrabold" }, "(crazy party)"),
                createVNode("h2", { class: "m-0 mt-6 header-text header-color extrabold" }, "La Fouillade - Ch\xE2teau du Longcol")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="w-full h-full px-4" data-v-0b44868f>`);
      _push(ssrRenderComponent(_component_Picture, {
        class: "w-full h-600px",
        srcset: "/img/longcol-1.webp",
        marble: "/img/marble/SKM_C65823022714120.pdf.png",
        borderColor: "border-yellow-400"
      }, null, _parent));
      _push(`</section><section class="w-full px-4 flex items-center justify-center gap-4" data-v-0b44868f><a target="_blank" class="h3 link"${ssrRenderAttr("href", linksRef.value.gLongcolNajac)} data-v-0b44868f>\u{1F517} google maps</a><a target="_blank" class="h3 link"${ssrRenderAttr("href", linksRef.value.longcol)} data-v-0b44868f>\u{1F517} the Ch\xE2teau </a></section><section class="w-full h-full flex flex-col items-center justify-center gap-4" data-v-0b44868f><div class="relative w-full flex items-center justify-center flex-col gap-4" data-v-0b44868f><div class="absolute w-11/12 h-1/2 bg-yellow-300 bg-opacity-50 translate-y-1/2 rounded-2xl" data-v-0b44868f></div><div class="absolute w-11/12 h-1/2 bg-green-500 bg-opacity-20 translate-y-1/2 rounded-2xl" data-v-0b44868f></div><div class="w-9/12 py-8 bg-gray-800 text-light-800 rounded-2xl flex items-center justify-center border-green-300 border-4 z-10" data-v-0b44868f>`);
      _push(ssrRenderComponent(_component_Text, { h1: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`July 1 - July 8`);
          } else {
            return [
              createTextVNode("July 1 - July 8")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-9/12 py-4 bg-green-200 text-gray-700 rounded-2xl flex items-center justify-center flex-col border-gray-800 border-4 z-10 text-center" data-v-0b44868f>`);
      _push(ssrRenderComponent(_component_Text, { h2: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Check-in 5pm, `);
          } else {
            return [
              createTextVNode("Check-in 5pm, ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, { h2: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Check-out 11am`);
          } else {
            return [
              createTextVNode("Check-out 11am")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="w-full h-full px-4" data-v-0b44868f><div class="w-full h-full" data-v-0b44868f>`);
      _push(ssrRenderComponent(_component_Picture, {
        iw: "max-w-300px",
        class: "w-full",
        srcset: "/img/whatsapp.png",
        marble: "/img/marble/SKM_C65823022714100.pdf.png",
        borderColor: "border-green-400"
      }, null, _parent));
      _push(`</div></section><section class="w-full px-4 flex items-center justify-center" data-v-0b44868f>`);
      _push(ssrRenderComponent(_component_Text, {
        onClick: fetchWassap,
        h3: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(wassapText.value)}`);
          } else {
            return [
              createTextVNode(toDisplayString(wassapText.value), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="w-full h-full px-4" data-v-0b44868f><div class="relative w-full flex items-center justify-center flex-col gap-4" data-v-0b44868f><div class="absolute w-11/12 h-1/2 bg-yellow-300 bg-opacity-50 translate-y-1/2 rounded-2xl" data-v-0b44868f></div><div class="absolute w-11/12 h-1/2 bg-green-500 bg-opacity-20 translate-y-1/2 rounded-2xl" data-v-0b44868f></div><div class="w-9/12 py-8 bg-gray-800 text-light-800 rounded-2xl flex items-center justify-center border-green-300 border-4 z-10" data-v-0b44868f>`);
      _push(ssrRenderComponent(_component_Text, { h1: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Travel`);
          } else {
            return [
              createTextVNode("Travel")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-9/12 py-4 bg-green-200 text-gray-700 rounded-2xl flex items-center justify-center flex-col border-purple-300 border-4 z-10 text-center gap-8" data-v-0b44868f>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/travel/toulouse",
        class: "underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Text, { h2: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u{1F517} Toulouse \u2192 `);
                } else {
                  return [
                    createTextVNode("\u{1F517} Toulouse \u2192 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Text, { h2: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Ch\xE2teau de Longcol`);
                } else {
                  return [
                    createTextVNode("Ch\xE2teau de Longcol")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Text, { h2: "" }, {
                default: withCtx(() => [
                  createTextVNode("\u{1F517} Toulouse \u2192 ")
                ]),
                _: 1
              }),
              createVNode(_component_Text, { h2: "" }, {
                default: withCtx(() => [
                  createTextVNode("Ch\xE2teau de Longcol")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-9/12 py-8 bg-gray-800 text-light-800 rounded-2xl flex items-center justify-center border-green-300 border-4 z-10" data-v-0b44868f>`);
      _push(ssrRenderComponent(_component_Text, { h1: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Meals`);
          } else {
            return [
              createTextVNode("Meals")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-9/12 py-4 bg-green-200 text-gray-700 rounded-2xl flex items-center justify-center flex-col border-purple-300 border-4 z-10 text-center gap-8" data-v-0b44868f>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/meals/menu",
        class: "underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Text, { h2: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u{1F517} 1st Night Menu `);
                } else {
                  return [
                    createTextVNode("\u{1F517} 1st Night Menu ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Text, { h2: "" }, {
                default: withCtx(() => [
                  createTextVNode("\u{1F517} 1st Night Menu ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/meals/wedding",
        class: "underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Text, { h2: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u{1F517} Wednesday Wedding Celebration`);
                } else {
                  return [
                    createTextVNode("\u{1F517} Wednesday Wedding Celebration")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Text, { h2: "" }, {
                default: withCtx(() => [
                  createTextVNode("\u{1F517} Wednesday Wedding Celebration")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/meals/groceries",
        class: "underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Text, { h2: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u{1F517} Groceries`);
                } else {
                  return [
                    createTextVNode("\u{1F517} Groceries")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Text, { h2: "" }, {
                default: withCtx(() => [
                  createTextVNode("\u{1F517} Groceries")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-9/12 py-8 bg-gray-800 text-light-800 rounded-2xl flex items-center justify-center border-green-300 border-4 z-10" data-v-0b44868f>`);
      _push(ssrRenderComponent(_component_Text, { h1: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Excursions`);
          } else {
            return [
              createTextVNode("Excursions")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-9/12 py-4 bg-green-200 text-gray-700 rounded-2xl flex items-center justify-center flex-col border-purple-300 border-4 z-10 text-center gap-8" data-v-0b44868f>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/travel/bikes",
        class: "underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Text, { h2: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u{1F517} Bike Rental`);
                } else {
                  return [
                    createTextVNode("\u{1F517} Bike Rental")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Text, { h2: "" }, {
                default: withCtx(() => [
                  createTextVNode("\u{1F517} Bike Rental")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/travel/daytrips",
        class: "underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Text, { h2: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u{1F517} Day Trips`);
                } else {
                  return [
                    createTextVNode("\u{1F517} Day Trips")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Text, { h2: "" }, {
                default: withCtx(() => [
                  createTextVNode("\u{1F517} Day Trips")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="w-full" data-v-0b44868f></div></section></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0b44868f"]]);

export { index as default };
//# sourceMappingURL=index-7deee9a7.mjs.map

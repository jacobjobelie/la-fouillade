import __nuxt_component_0 from "./index.e22a7eff.js";
import { _ as __nuxt_component_1 } from "./index.92832046.js";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./Vpic.152957eb.js";
import { getCurrentInstance, nextTick, getCurrentScope, onScopeDispose, unref, ref, watch, defineComponent, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
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
const isClient = false;
const isString = (val) => typeof val === "string";
const noop = () => {
};
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function identity(arg) {
  return arg;
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function tryOnMounted(fn, sync = true) {
  if (getCurrentInstance())
    ;
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function unrefElement(elRef) {
  var _a;
  const plain = resolveUnref(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = isClient ? window : void 0;
isClient ? window.document : void 0;
isClient ? window.navigator : void 0;
isClient ? window.location : void 0;
function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (isString(args[0]) || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener) => {
    el.addEventListener(event, listener, options);
    return () => el.removeEventListener(event, listener, options);
  };
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (!el)
      return;
    cleanups.push(...events.flatMap((event) => {
      return listeners.map((listener) => register(el, event, listener));
    }));
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
_global[globalKey];
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
__spreadValues({
  linear: identity
}, _TransitionPresets);
function useWindowSize(options = {}) {
  const {
    window: window2 = defaultWindow,
    initialWidth = Infinity,
    initialHeight = Infinity,
    listenOrientation = true,
    includeScrollbar = true
  } = options;
  const width = ref(initialWidth);
  const height = ref(initialHeight);
  const update = () => {
    if (window2) {
      if (includeScrollbar) {
        width.value = window2.innerWidth;
        height.value = window2.innerHeight;
      } else {
        width.value = window2.document.documentElement.clientWidth;
        height.value = window2.document.documentElement.clientHeight;
      }
    }
  };
  update();
  tryOnMounted(update);
  useEventListener("resize", update, { passive: true });
  if (listenOrientation)
    useEventListener("orientationchange", update, { passive: true });
  return { width, height };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "gallery",
  __ssrInlineRender: true,
  setup(__props) {
    const { width, height } = useWindowSize();
    const imgList = [
      {
        src: "/img/gallery/2022_bj_red_leaf.jpeg",
        alt: "\u5730\u575B\u7EA2\u53F6(Red Leaves in Ditan Park)",
        date: "2022.11",
        place: "Photoed at Beijing, Ditan Park"
      },
      {
        src: "/img/gallery/2022_bj_tree.jpeg",
        alt: "\u79CB\u65E5\u7684\u5730\u575B (Ditan park in Autumn)",
        date: "2022.11",
        place: "Photoed at Beijing, Ditan Park"
      },
      {
        src: "/img/gallery/2022_bj_child.jpeg",
        alt: "\u5B69\u5B50\u7684\u5730\u575B (The Child in Ditan Park)",
        date: "2022.11",
        place: "Photoed at Beijing, Ditan Park"
      },
      {
        src: "/img/gallery/2022_bj_ditan.jpeg",
        alt: "\u753B\u4E2D\u7684\u5730\u575B (Ditan park in the painting)",
        date: "2022.11",
        place: "Photoed at Beijing, the North Gate of Ditan Park",
        detail: "\u4EBA\u751F\u6D77\u6D77\uFF0C\u4F60\u6211\u4EA6\u662F\u753B\u4E2D\u4EBA",
        layout: "v"
      },
      {
        src: "/img/kidDog.jpeg",
        alt: "The Kid and His Friend",
        date: "2020.04",
        place: "Photoed at Bristol Brandon hill"
      },
      {
        src: "/img/park.jpeg",
        alt: "A Chair in Spring",
        date: "2020.04",
        place: "Photoed at Bristol Brandon hill",
        detail: "\u6625\u65E5\u7684\u5E03\u91CC\u65AF\u6258\uFF0C\u843D\u82F1\u7F24\u7EB7\uFF0C\u7F8E\u4E0D\u80DC\u6536"
      }
    ];
    const isShowV = (layout) => {
      if (layout === "v" && width.value > 640) {
        return true;
      } else {
        return false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Text = __nuxt_component_0;
      const _component_Sparkle = __nuxt_component_1;
      const _component_GalleryVpic = _sfc_main$1;
      const _component_GalleryHpic = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><br>`);
      _push(ssrRenderComponent(_component_Text, { hero: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Gallery.`);
          } else {
            return [
              createTextVNode("Gallery.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(width))} * ${ssrInterpolate(unref(height))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(width)) + " * " + toDisplayString(unref(height)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u8FD9\u91CC\u6C47\u96C6\u4E86\u6240\u6709\u6211\u559C\u7231\u7684\u4F5C\u54C1\uFF1A\u4ECE\u5B66\u9662\u6D3E\u5230\u5370\u8C61\u6D3E\u3001\u4ECE\u6444\u5F71\u5230 3D \u827A\u672F\u3002 \u751F\u673A\u52C3\u52C3\u7684\u7EFF\u3001\u751C\u7F8E\u7684\u7C89\u3001\u6E29\u6696\u7684\u6A59\u9EC4\u3001\u51B7\u9759\u7684\u84DD\uFF0C\u514B\u5236\u7684\u9ED1\u767D\uFF0C \u8FD9`);
            _push2(ssrRenderComponent(_component_Sparkle, { rainbow: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u4E00\u5207\u7684\u8272\u5F69`);
                } else {
                  return [
                    createTextVNode("\u4E00\u5207\u7684\u8272\u5F69")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`\u7EC4\u6210\u4E86\u6211\u4EEC\u751F\u6D3B\u7684\u5168\u90E8 `);
          } else {
            return [
              createTextVNode(" \u8FD9\u91CC\u6C47\u96C6\u4E86\u6240\u6709\u6211\u559C\u7231\u7684\u4F5C\u54C1\uFF1A\u4ECE\u5B66\u9662\u6D3E\u5230\u5370\u8C61\u6D3E\u3001\u4ECE\u6444\u5F71\u5230 3D \u827A\u672F\u3002 \u751F\u673A\u52C3\u52C3\u7684\u7EFF\u3001\u751C\u7F8E\u7684\u7C89\u3001\u6E29\u6696\u7684\u6A59\u9EC4\u3001\u51B7\u9759\u7684\u84DD\uFF0C\u514B\u5236\u7684\u9ED1\u767D\uFF0C \u8FD9"),
              createVNode(_component_Sparkle, { rainbow: "" }, {
                default: withCtx(() => [
                  createTextVNode("\u4E00\u5207\u7684\u8272\u5F69")
                ]),
                _: 1
              }),
              createTextVNode("\u7EC4\u6210\u4E86\u6211\u4EEC\u751F\u6D3B\u7684\u5168\u90E8 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, { class: "text-gray-500" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` From academic to impressionism, from photographs to 3D arts, here collects all of my favorite artworks. Vibrant green, sweet pink, warm orange, calm blue, rustic black &amp; white, that&#39;s all about `);
            _push2(ssrRenderComponent(_component_Sparkle, { rainbow: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`life `);
                } else {
                  return [
                    createTextVNode("life ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`. `);
          } else {
            return [
              createTextVNode(" From academic to impressionism, from photographs to 3D arts, here collects all of my favorite artworks. Vibrant green, sweet pink, warm orange, calm blue, rustic black & white, that's all about "),
              createVNode(_component_Sparkle, { rainbow: "" }, {
                default: withCtx(() => [
                  createTextVNode("life ")
                ]),
                _: 1
              }),
              createTextVNode(". ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<br><!--[-->`);
      ssrRenderList(imgList, (imgInfo, idx) => {
        _push(`<div>`);
        if (isShowV(imgInfo.layout)) {
          _push(ssrRenderComponent(_component_GalleryVpic, imgInfo, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_GalleryHpic, imgInfo, null, _parent));
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=gallery.6b482e07.js.map

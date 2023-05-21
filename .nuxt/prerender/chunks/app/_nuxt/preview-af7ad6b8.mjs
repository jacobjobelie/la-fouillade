import { ref } from 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/vue/index.mjs';
import { b as useRoute, e as useNuxtApp } from '../server.mjs';
import { parse, serialize } from 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/cookie-es/dist/index.mjs';
import { appendHeader } from 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/h3/dist/index.mjs';
import destr from 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/destr/dist/index.mjs';
import { isEqual } from 'file:///Users/selie/Documents/Hacks/la-fouillade/node_modules/ohash/dist/index.mjs';
import { u as useRequestEvent } from './ssr-b54361f8.mjs';

const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a2;
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  const cookie = ref((_a2 = cookies[name]) != null ? _a2 : (_a = opts.default) == null ? void 0 : _a.call(opts));
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!isEqual(cookie.value, cookies[name])) {
        writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    const writeAndUnhook = () => {
      unhook();
      return writeFinalCookieValue();
    };
    nuxtApp.hooks.hookOnce("app:error", writeAndUnhook);
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  var _a;
  {
    return parse(((_a = useRequestEvent()) == null ? void 0 : _a.node.req.headers.cookie) || "", opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return serialize(name, value, { ...opts, maxAge: -1 });
  }
  return serialize(name, value, opts);
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
const useContentPreview = () => {
  const getPreviewToken = () => {
    return useCookie("previewToken").value || false || void 0;
  };
  const setPreviewToken = (token) => {
    useCookie("previewToken").value = token;
    useRoute().query.preview = token || "";
  };
  const isEnabled = () => {
    const query = useRoute().query;
    if (Object.prototype.hasOwnProperty.call(query, "preview") && !query.preview) {
      return false;
    }
    if (query.preview || useCookie("previewToken").value) {
      return true;
    }
    return false;
  };
  return {
    isEnabled,
    getPreviewToken,
    setPreviewToken
  };
};

export { useContentPreview as u };
//# sourceMappingURL=preview-af7ad6b8.mjs.map

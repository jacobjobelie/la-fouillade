import { j as defineNuxtRouteMiddleware, k as useSupabaseUser, n as navigateTo } from "../server.mjs";
import "vue";
import "destr";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
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
import "vue/server-renderer";
const auth = defineNuxtRouteMiddleware(() => {
  const user = useSupabaseUser();
  if (!user.value) {
    return navigateTo("/");
  }
});
export {
  auth as default
};
//# sourceMappingURL=auth.69f4249c.js.map

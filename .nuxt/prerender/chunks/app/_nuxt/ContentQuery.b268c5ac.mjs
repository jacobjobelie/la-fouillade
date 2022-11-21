import { defineComponent, toRefs, computed, watch, useSlots, useSSRContext, h } from 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/vue/index.mjs';
import { u as useAsyncData, q as queryContent } from './query.28bcdfca.mjs';
import { hash } from 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/ohash/dist/index.mjs';
import '../server.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/hookable/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unctx/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/destr/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/ufo/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/h3/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unenv/runtime/npm/cross-fetch.mjs';
import 'events';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unenv/runtime/npm/debug.mjs';
import 'util';
import 'crypto';
import 'url';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/bufferutil/index.js';
import 'buffer';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/utf-8-validate/index.js';
import 'http';
import 'https';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/typedarray-to-buffer/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/yaeti/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/defu/dist/defu.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/@fortawesome/fontawesome-svg-core/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/@fortawesome/vue-fontawesome/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/@fortawesome/free-solid-svg-icons/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/@fortawesome/free-brands-svg-icons/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/vue/server-renderer/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/scule/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unstorage/dist/drivers/fs.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/radix3/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/pathe/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unified/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/micromark/lib/preprocess.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/micromark/lib/postprocess.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/micromark-util-character/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/remark-emoji/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/rehype-slug/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/remark-squeeze-paragraphs/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/rehype-external-links/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/remark-gfm/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/rehype-raw/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/remark-parse/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/remark-rehype/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/mdast-util-to-hast/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/detab/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unist-builder/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/mdurl/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/slugify/slugify.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/unist-util-position/index.js';
import 'file:///Users/selie/Documents/Hacks/NuxtSupabaseApp/node_modules/html-tags/index.js';
import './utils.e67eb962.mjs';

const _sfc_main = defineComponent({
  name: "ContentQuery",
  props: {
    path: {
      type: String,
      required: false,
      default: void 0
    },
    only: {
      type: Array,
      required: false,
      default: void 0
    },
    without: {
      type: Array,
      required: false,
      default: void 0
    },
    where: {
      type: Object,
      required: false,
      default: void 0
    },
    sort: {
      type: Object,
      required: false,
      default: void 0
    },
    limit: {
      type: Number,
      required: false,
      default: void 0
    },
    skip: {
      type: Number,
      required: false,
      default: void 0
    },
    locale: {
      type: String,
      required: false,
      default: void 0
    },
    find: {
      type: String,
      required: false,
      default: void 0
    }
  },
  async setup(props) {
    const {
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find
    } = toRefs(props);
    const isPartial = computed(() => {
      var _a;
      return (_a = path.value) == null ? void 0 : _a.includes("/_");
    });
    const { data, refresh } = await useAsyncData(
      `content-query-${hash(props)}`,
      () => {
        let queryBuilder;
        if (path.value) {
          queryBuilder = queryContent(path.value);
        } else {
          queryBuilder = queryContent();
        }
        if (only.value) {
          queryBuilder = queryBuilder.only(only.value);
        }
        if (without.value) {
          queryBuilder = queryBuilder.without(without.value);
        }
        if (where.value) {
          queryBuilder = queryBuilder.where(where.value);
        }
        if (sort.value) {
          queryBuilder = queryBuilder.sort(sort.value);
        }
        if (limit.value) {
          queryBuilder = queryBuilder.limit(limit.value);
        }
        if (skip.value) {
          queryBuilder = queryBuilder.skip(skip.value);
        }
        if (locale.value) {
          queryBuilder = queryBuilder.where({ _locale: locale.value });
        }
        if (find.value === "one") {
          return queryBuilder.findOne();
        }
        if (find.value === "surround") {
          if (!path.value) {
            console.warn("[Content] Surround queries requires `path` prop to be set.");
            console.warn("[Content] Query without `path` will return regular `find()` results.");
            return queryBuilder.find();
          }
          return queryBuilder.findSurround(path);
        }
        return queryBuilder.find();
      }
    );
    watch(() => props, () => refresh(), { deep: true });
    return {
      isPartial,
      data,
      refresh
    };
  },
  render(ctx) {
    var _a;
    const slots = useSlots();
    const {
      data,
      refresh,
      isPartial,
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find
    } = ctx;
    const props = {
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find
    };
    if (props.find === "one") {
      if (!data && (slots == null ? void 0 : slots["not-found"])) {
        return slots["not-found"]({ props, ...this.$attrs });
      }
      if ((slots == null ? void 0 : slots.empty) && (data == null ? void 0 : data._type) === "markdown" && !((_a = data == null ? void 0 : data.body) == null ? void 0 : _a.children.length)) {
        return slots.empty({ props, ...this.$attrs });
      }
    } else if (!data || !data.length) {
      if (slots == null ? void 0 : slots["not-found"]) {
        return slots["not-found"]({ props, ...this.$attrs });
      }
    }
    if (slots == null ? void 0 : slots.default) {
      return slots.default({ data, refresh, isPartial, props, ...this.$attrs });
    }
    const emptyNode = (slot, data2) => h("pre", null, JSON.stringify({ message: "You should use slots with <ContentQuery>!", slot, data: data2 }, null, 2));
    return emptyNode("default", { data, props, isPartial });
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ContentQuery.b268c5ac.mjs.map

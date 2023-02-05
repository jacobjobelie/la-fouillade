// Generated by nitro
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/__nuxt_error': {
      'default': Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>
    }
<<<<<<< HEAD
=======
    '/api/_supabase/session': {
      'default': Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/supabase/dist/runtime/server/api/session').default>>
    }
>>>>>>> 22dc1ffed1854d8de6b0ab873a62dea0b200fefe
    '/api/_content/query/:qid/**:params': {
      'get': Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/query').default>>
    }
    '/api/_content/query/:qid': {
      'get': Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/query').default>>
    }
    '/api/_content/query': {
      'get': Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/query').default>>
    }
<<<<<<< HEAD
    '/api/_content/cache.json': {
=======
    '/api/_content/cache.1675554199121.json': {
>>>>>>> 22dc1ffed1854d8de6b0ab873a62dea0b200fefe
      'get': Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/cache').default>>
    }
    '/api/_content/navigation/:qid/**:params': {
      'get': Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/navigation').default>>
    }
    '/api/_content/navigation/:qid': {
      'get': Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/navigation').default>>
    }
    '/api/_content/navigation': {
      'get': Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/navigation').default>>
    }
  }
}
declare global {
<<<<<<< HEAD
  const __buildAssetsURL: typeof import('/Users/sam/Documents/Projects/la-fouillade/node_modules/nuxt/dist/core/runtime/nitro/paths')['buildAssetsURL']
  const __publicAssetsURL: typeof import('/Users/sam/Documents/Projects/la-fouillade/node_modules/nuxt/dist/core/runtime/nitro/paths')['publicAssetsURL']
=======
  const __buildAssetsURL: typeof import('/Users/sam/Documents/Work/la-fouillade/node_modules/nuxt/dist/core/runtime/nitro/paths')['buildAssetsURL']
  const __publicAssetsURL: typeof import('/Users/sam/Documents/Work/la-fouillade/node_modules/nuxt/dist/core/runtime/nitro/paths')['publicAssetsURL']
>>>>>>> 22dc1ffed1854d8de6b0ab873a62dea0b200fefe
  const appendHeader: typeof import('h3')['appendHeader']
  const appendHeaders: typeof import('h3')['appendHeaders']
  const appendResponseHeader: typeof import('h3')['appendResponseHeader']
  const appendResponseHeaders: typeof import('h3')['appendResponseHeaders']
  const assertMethod: typeof import('h3')['assertMethod']
<<<<<<< HEAD
  const cachedEventHandler: typeof import('/Users/sam/Documents/Projects/la-fouillade/node_modules/nitropack/dist/runtime')['cachedEventHandler']
  const cachedFunction: typeof import('/Users/sam/Documents/Projects/la-fouillade/node_modules/nitropack/dist/runtime')['cachedFunction']
=======
  const cachedEventHandler: typeof import('/Users/sam/Documents/Work/la-fouillade/node_modules/nitropack/dist/runtime')['cachedEventHandler']
  const cachedFunction: typeof import('/Users/sam/Documents/Work/la-fouillade/node_modules/nitropack/dist/runtime')['cachedFunction']
>>>>>>> 22dc1ffed1854d8de6b0ab873a62dea0b200fefe
  const callNodeListener: typeof import('h3')['callNodeListener']
  const createApp: typeof import('h3')['createApp']
  const createAppEventHandler: typeof import('h3')['createAppEventHandler']
  const createError: typeof import('h3')['createError']
  const createEvent: typeof import('h3')['createEvent']
  const createRouter: typeof import('h3')['createRouter']
  const defaultContentType: typeof import('h3')['defaultContentType']
<<<<<<< HEAD
  const defineCachedEventHandler: typeof import('/Users/sam/Documents/Projects/la-fouillade/node_modules/nitropack/dist/runtime')['defineCachedEventHandler']
  const defineCachedFunction: typeof import('/Users/sam/Documents/Projects/la-fouillade/node_modules/nitropack/dist/runtime')['defineCachedFunction']
  const defineEventHandler: typeof import('h3')['defineEventHandler']
  const defineLazyEventHandler: typeof import('h3')['defineLazyEventHandler']
  const defineNitroPlugin: typeof import('/Users/sam/Documents/Projects/la-fouillade/node_modules/nitropack/dist/runtime')['defineNitroPlugin']
  const defineNodeListener: typeof import('h3')['defineNodeListener']
  const defineNodeMiddleware: typeof import('h3')['defineNodeMiddleware']
  const defineRenderHandler: typeof import('/Users/sam/Documents/Projects/la-fouillade/node_modules/nitropack/dist/runtime')['defineRenderHandler']
=======
  const defineCachedEventHandler: typeof import('/Users/sam/Documents/Work/la-fouillade/node_modules/nitropack/dist/runtime')['defineCachedEventHandler']
  const defineCachedFunction: typeof import('/Users/sam/Documents/Work/la-fouillade/node_modules/nitropack/dist/runtime')['defineCachedFunction']
  const defineEventHandler: typeof import('h3')['defineEventHandler']
  const defineLazyEventHandler: typeof import('h3')['defineLazyEventHandler']
  const defineNitroPlugin: typeof import('/Users/sam/Documents/Work/la-fouillade/node_modules/nitropack/dist/runtime')['defineNitroPlugin']
  const defineNodeListener: typeof import('h3')['defineNodeListener']
  const defineNodeMiddleware: typeof import('h3')['defineNodeMiddleware']
  const defineRenderHandler: typeof import('/Users/sam/Documents/Work/la-fouillade/node_modules/nitropack/dist/runtime')['defineRenderHandler']
>>>>>>> 22dc1ffed1854d8de6b0ab873a62dea0b200fefe
  const deleteCookie: typeof import('h3')['deleteCookie']
  const dynamicEventHandler: typeof import('h3')['dynamicEventHandler']
  const eventHandler: typeof import('h3')['eventHandler']
  const fromNodeMiddleware: typeof import('h3')['fromNodeMiddleware']
  const getCookie: typeof import('h3')['getCookie']
  const getHeader: typeof import('h3')['getHeader']
  const getHeaders: typeof import('h3')['getHeaders']
  const getMethod: typeof import('h3')['getMethod']
  const getQuery: typeof import('h3')['getQuery']
  const getRequestHeader: typeof import('h3')['getRequestHeader']
  const getRequestHeaders: typeof import('h3')['getRequestHeaders']
  const getResponseHeader: typeof import('h3')['getResponseHeader']
  const getResponseHeaders: typeof import('h3')['getResponseHeaders']
  const getResponseStatus: typeof import('h3')['getResponseStatus']
  const getResponseStatusText: typeof import('h3')['getResponseStatusText']
<<<<<<< HEAD
  const getRouteRules: typeof import('/Users/sam/Documents/Projects/la-fouillade/node_modules/nitropack/dist/runtime')['getRouteRules']
=======
  const getRouteRules: typeof import('/Users/sam/Documents/Work/la-fouillade/node_modules/nitropack/dist/runtime')['getRouteRules']
>>>>>>> 22dc1ffed1854d8de6b0ab873a62dea0b200fefe
  const getRouterParam: typeof import('h3')['getRouterParam']
  const getRouterParams: typeof import('h3')['getRouterParams']
  const handleCacheHeaders: typeof import('h3')['handleCacheHeaders']
  const isError: typeof import('h3')['isError']
  const isEvent: typeof import('h3')['isEvent']
  const isEventHandler: typeof import('h3')['isEventHandler']
  const isMethod: typeof import('h3')['isMethod']
  const isStream: typeof import('h3')['isStream']
  const lazyEventHandler: typeof import('h3')['lazyEventHandler']
<<<<<<< HEAD
  const nitroPlugin: typeof import('/Users/sam/Documents/Projects/la-fouillade/node_modules/nitropack/dist/runtime')['nitroPlugin']
=======
  const nitroPlugin: typeof import('/Users/sam/Documents/Work/la-fouillade/node_modules/nitropack/dist/runtime')['nitroPlugin']
>>>>>>> 22dc1ffed1854d8de6b0ab873a62dea0b200fefe
  const parseCookies: typeof import('h3')['parseCookies']
  const promisifyNodeListener: typeof import('h3')['promisifyNodeListener']
  const proxyRequest: typeof import('h3')['proxyRequest']
  const readBody: typeof import('h3')['readBody']
  const readMultipartFormData: typeof import('h3')['readMultipartFormData']
  const readRawBody: typeof import('h3')['readRawBody']
  const send: typeof import('h3')['send']
  const sendError: typeof import('h3')['sendError']
  const sendNoContent: typeof import('h3')['sendNoContent']
  const sendProxy: typeof import('h3')['sendProxy']
  const sendRedirect: typeof import('h3')['sendRedirect']
  const sendStream: typeof import('h3')['sendStream']
  const setCookie: typeof import('h3')['setCookie']
  const setHeader: typeof import('h3')['setHeader']
  const setHeaders: typeof import('h3')['setHeaders']
  const setResponseHeader: typeof import('h3')['setResponseHeader']
  const setResponseHeaders: typeof import('h3')['setResponseHeaders']
  const setResponseStatus: typeof import('h3')['setResponseStatus']
  const toEventHandler: typeof import('h3')['toEventHandler']
  const toNodeListener: typeof import('h3')['toNodeListener']
  const useBase: typeof import('h3')['useBase']
<<<<<<< HEAD
  const useNitroApp: typeof import('/Users/sam/Documents/Projects/la-fouillade/node_modules/nitropack/dist/runtime')['useNitroApp']
  const useRuntimeConfig: typeof import('/Users/sam/Documents/Projects/la-fouillade/node_modules/nitropack/dist/runtime')['useRuntimeConfig']
  const useStorage: typeof import('/Users/sam/Documents/Projects/la-fouillade/node_modules/nitropack/dist/runtime')['useStorage']
=======
  const useNitroApp: typeof import('/Users/sam/Documents/Work/la-fouillade/node_modules/nitropack/dist/runtime')['useNitroApp']
  const useRuntimeConfig: typeof import('/Users/sam/Documents/Work/la-fouillade/node_modules/nitropack/dist/runtime')['useRuntimeConfig']
  const useStorage: typeof import('/Users/sam/Documents/Work/la-fouillade/node_modules/nitropack/dist/runtime')['useStorage']
>>>>>>> 22dc1ffed1854d8de6b0ab873a62dea0b200fefe
  const writeEarlyHints: typeof import('h3')['writeEarlyHints']
}
export {}
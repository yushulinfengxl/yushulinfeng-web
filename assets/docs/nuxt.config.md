Nuxt Configuration
Discover all the options you can use in your nuxt.config.ts file.
This file is auto-generated from Nuxt source code.
alias
You can improve your DX by defining additional aliases to access custom directories within your JavaScript and CSS.

Type: object
Default

{
  "~": "/<srcDir>",
  "@": "/<srcDir>",
  "~~": "/<rootDir>",
  "@@": "/<rootDir>",
  "#shared": "/<rootDir>/shared",
  "assets": "/<srcDir>/assets",
  "public": "/<srcDir>/public",
  "#build": "/<rootDir>/.nuxt",
  "#internal/nuxt/paths": "/<rootDir>/.nuxt/paths.mjs"
}
Note: Within a webpack context (image sources, CSS - but not JavaScript) you must access your alias by prefixing it with ~.
Note: These aliases will be automatically added to the generated .nuxt/tsconfig.json so you can get full type support and path auto-complete. In case you need to extend options provided by ./.nuxt/tsconfig.json further, make sure to add them here or within the typescript.tsConfig property in nuxt.config.
Example:


export default {
  alias: {
    'images': fileURLToPath(new URL('./assets/images', import.meta.url)),
    'style': fileURLToPath(new URL('./assets/style', import.meta.url)),
    'data': fileURLToPath(new URL('./assets/other/data', import.meta.url))
  }
}
analyzeDir
The directory where Nuxt will store the generated files when running nuxt analyze.

If a relative path is specified, it will be relative to your rootDir.

Type: string
Default: "/<rootDir>/.nuxt/analyze"
app
Nuxt App configuration.

baseURL
The base path of your Nuxt application.

For example:

Type: string
Default: "/"
Example:


export default defineNuxtConfig({
  app: {
    baseURL: '/prefix/'
  }
})
Example:


NUXT_APP_BASE_URL=/prefix/ node .output/server/index.mjs
buildAssetsDir
The folder name for the built site assets, relative to baseURL (or cdnURL if set). This is set at build time and should not be customized at runtime.

Type: string
Default: "/_nuxt/"
cdnURL
An absolute URL to serve the public folder from (production-only).

For example:

Type: string
Default: ""
Example:


export default defineNuxtConfig({
  app: {
    cdnURL: 'https://mycdn.org/'
  }
})
Example:


NUXT_APP_CDN_URL=https://mycdn.org/ node .output/server/index.mjs
head
Set default configuration for <head> on every page.

Type: object
Default

{
  "meta": [
    {
      "name": "viewport",
      "content": "width=device-width, initial-scale=1"
    },
    {
      "charset": "utf-8"
    }
  ],
  "link": [],
  "style": [],
  "script": [],
  "noscript": []
}
Example:


app: {
  head: {
    meta: [
      // <meta name="viewport" content="width=device-width, initial-scale=1">
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    script: [
      // <script src="https://myawesome-lib.js"></script>
      { src: 'https://awesome-lib.js' }
    ],
    link: [
      // <link rel="stylesheet" href="https://myawesome-lib.css">
      { rel: 'stylesheet', href: 'https://awesome-lib.css' }
    ],
    // please note that this is an area that is likely to change
    style: [
      // <style type="text/css">:root { color: red }</style>
      { children: ':root { color: red }', type: 'text/css' }
    ],
    noscript: [
      // <noscript>JavaScript is required</noscript>
      { children: 'JavaScript is required' }
    ]
  }
}
keepalive
Default values for KeepAlive configuration between pages.

This can be overridden with definePageMeta on an individual page. Only JSON-serializable values are allowed.

Type: boolean
Default: false
See: Vue KeepAlive

layoutTransition
Default values for layout transitions.

This can be overridden with definePageMeta on an individual page. Only JSON-serializable values are allowed.

Type: boolean
Default: false
See: Vue Transition docs

pageTransition
Default values for page transitions.

This can be overridden with definePageMeta on an individual page. Only JSON-serializable values are allowed.

Type: boolean
Default: false
See: Vue Transition docs

rootAttrs
Customize Nuxt root element id.

Type: object
Default

{
  "id": "__nuxt"
}
rootId
Customize Nuxt root element id.

Type: string
Default: "__nuxt"
rootTag
Customize Nuxt root element tag.

Type: string
Default: "div"
teleportAttrs
Customize Nuxt Teleport element attributes.

Type: object
Default

{
  "id": "teleports"
}
teleportId
Customize Nuxt Teleport element id.

Type: string
Default: "teleports"
teleportTag
Customize Nuxt root element tag.

Type: string
Default: "div"
viewTransition
Default values for view transitions.

This only has an effect when experimental support for View Transitions is enabled in your nuxt.config file. This can be overridden with definePageMeta on an individual page.

Type: boolean
Default: false
See: Nuxt View Transition API docs

appConfig
Additional app configuration

For programmatic usage and type support, you can directly provide app config with this option. It will be merged with app.config file as default value.

nuxt
appId
For multi-app projects, the unique id of the Nuxt application.

Defaults to nuxt-app.

Type: string
Default: "nuxt-app"
build
Shared build configuration.

analyze
Nuxt allows visualizing your bundles and how to optimize them.

Set to true to enable bundle analysis, or pass an object with options: for webpack or for vite.

Type: object
Default

{
  "template": "treemap",
  "projectRoot": "/<rootDir>",
  "filename": "/<rootDir>/.nuxt/analyze/{name}.html"
}
Example:


analyze: {
  analyzerMode: 'static'
}
templates
You can provide your own templates which will be rendered based on Nuxt configuration. This feature is specially useful for using with modules.

Templates are rendered using lodash/template.

Type: array
Example:


templates: [
  {
    src: '~/modules/support/plugin.js', // `src` can be absolute or relative
    dst: 'support.js', // `dst` is relative to project `.nuxt` dir
    options: {
      // Options are provided to template as `options` key
      live_chat: false
    }
  }
]
transpile
If you want to transpile specific dependencies with Babel, you can add them here. Each item in transpile can be a package name, a function, a string or regex object matching the dependency's file name.

You can also use a function to conditionally transpile. The function will receive an object ({ isDev, isServer, isClient, isModern, isLegacy }).

Type: array
Example:


transpile: [({ isLegacy }) => isLegacy && 'ky']
buildDir
Define the directory where your built Nuxt files will be placed.

Many tools assume that .nuxt is a hidden directory (because it starts with a .). If that is a problem, you can use this option to prevent that.

Type: string
Default: "/<rootDir>/.nuxt"
Example:


export default {
  buildDir: 'nuxt-build'
}
buildId
A unique identifier matching the build. This may contain the hash of the current state of the project.

Type: string
Default: "ed9f97d5-a946-4f44-9729-21fe99d109cd"
builder
The builder to use for bundling the Vue part of your application.

Type: string
Default: "@nuxt/vite-builder"
compatibilityDate
Specify a compatibility date for your app.

This is used to control the behavior of presets in Nitro, Nuxt Image and other modules that may change behavior without a major version bump. We plan to improve the tooling around this feature in the future.

components
Configure Nuxt component auto-registration.

Any components in the directories configured here can be used throughout your pages, layouts (and other components) without needing to explicitly import them.

Type: object
Default

{
  "dirs": [
    {
      "path": "~/components/global",
      "global": true
    },
    "~/components"
  ]
}
See: components/ directory documentation

css
You can define the CSS files/modules/libraries you want to set globally (included in every page).

Nuxt will automatically guess the file type by its extension and use the appropriate pre-processor. You will still need to install the required loader if you need to use them.

Type: array
Example:


css: [
  // Load a Node.js module directly (here it's a Sass file).
  'bulma',
  // CSS file in the project
  '~/assets/css/main.css',
  // SCSS file in the project
  '~/assets/css/main.scss'
]
debug
Set to true to enable debug mode.

At the moment, it prints out hook names and timings on the server, and logs hook arguments as well in the browser.

Type: boolean
Default: false
dev
Whether Nuxt is running in development mode.

Normally, you should not need to set this.

Type: boolean
Default: false
devServer
host
Dev server listening host

https
Whether to enable HTTPS.

Type: boolean
Default: false
Example:


export default defineNuxtConfig({
  devServer: {
    https: {
      key: './server.key',
      cert: './server.crt'
    }
  }
})
loadingTemplate
Template to show a loading screen

Type: function
port
Dev server listening port

Type: number
Default: 3000
url
Listening dev server URL.

This should not be set directly as it will always be overridden by the dev server with the full URL (for module and internal use).

Type: string
Default: "http://localhost:3000"
devServerHandlers
Nitro development-only server handlers.

Type: array
See: Nitro server routes documentation

devtools
Enable Nuxt DevTools for development.

Breaking changes for devtools might not reflect on the version of Nuxt.

See: Nuxt DevTools for more information.

dir
Customize default directory structure used by Nuxt.

It is better to stick with defaults unless needed.

app
Type: string
Default: "app"
assets
The assets directory (aliased as ~assets in your build).

Type: string
Default: "assets"
layouts
The layouts directory, each file of which will be auto-registered as a Nuxt layout.

Type: string
Default: "layouts"
middleware
The middleware directory, each file of which will be auto-registered as a Nuxt middleware.

Type: string
Default: "middleware"
modules
The modules directory, each file in which will be auto-registered as a Nuxt module.

Type: string
Default: "modules"
pages
The directory which will be processed to auto-generate your application page routes.

Type: string
Default: "pages"
plugins
The plugins directory, each file of which will be auto-registered as a Nuxt plugin.

Type: string
Default: "plugins"
public
The directory containing your static files, which will be directly accessible via the Nuxt server and copied across into your dist folder when your app is generated.

Type: string
Default: "public"
shared
The shared directory. This directory is shared between the app and the server.

Type: string
Default: "shared"
static
Type: string
Default: "public"
experimental
appManifest
Use app manifests to respect route rules on client-side.

Type: boolean
Default: true
asyncContext
Enable native async context to be accessible for nested composables

Type: boolean
Default: false
See: Nuxt PR #20918

asyncEntry
Set to true to generate an async entry point for the Vue bundle (for module federation support).

Type: boolean
Default: false
buildCache
Cache Nuxt/Nitro build artifacts based on a hash of the configuration and source files.

This only works for source files within srcDir and serverDir for the Vue/Nitro parts of your app.

Type: boolean
Default: false
checkOutdatedBuildInterval
Set the time interval (in ms) to check for new builds. Disabled when experimental.appManifest is false.

Set to false to disable.

Type: number
Default: 3600000
clientFallback
Whether to enable the experimental <NuxtClientFallback> component for rendering content on the client if there's an error in SSR.

Type: boolean
Default: false
clientNodeCompat
Automatically polyfill Node.js imports in the client build using unenv.

Type: boolean
Default: false
See: unenv

compileTemplate
Whether to use lodash.template to compile Nuxt templates.

This flag will be removed with the release of v4 and exists only for advance testing within Nuxt v3.12+ or in the nightly release channel.

Type: boolean
Default: true
componentIslands
Experimental component islands support with <NuxtIsland> and .island.vue files.

By default it is set to 'auto', which means it will be enabled only when there are islands, server components or server pages in your app.

Type: string
Default: "auto"
configSchema
Config schema support

Type: boolean
Default: true
See: Nuxt Issue #15592

cookieStore
Enables CookieStore support to listen for cookie updates (if supported by the browser) and refresh useCookie ref values.

Type: boolean
Default: true
See: CookieStore

crossOriginPrefetch
Enable cross-origin prefetch using the Speculation Rules API.

Type: boolean
Default: false
defaults
This allows specifying the default options for core Nuxt components and composables.

These options will likely be moved elsewhere in the future, such as into app.config or into the app/ directory.

nuxtLink
componentName
Type: string
Default: "NuxtLink"
prefetch
Type: boolean
Default: true
prefetchOn
visibility
Type: boolean
Default: true
useAsyncData
Options that apply to useAsyncData (and also therefore useFetch)

deep
Type: boolean
Default: true
errorValue
Type: string
Default: "null"
value
Type: string
Default: "null"
useFetch
emitRouteChunkError
Emit app:chunkError hook when there is an error loading vite/webpack chunks.

By default, Nuxt will also perform a reload of the new route when a chunk fails to load when navigating to a new route (automatic). Setting automatic-immediate will lead Nuxt to perform a reload of the current route right when a chunk fails to load (instead of waiting for navigation). You can disable automatic handling by setting this to false, or handle chunk errors manually by setting it to manual.

Type: string
Default: "automatic"
See: Nuxt PR #19038

externalVue
Externalize vue, @vue/* and vue-router when building.

Type: boolean
Default: true
See: Nuxt Issue #13632

headNext
Use new experimental head optimisations:

Add the capo.js head plugin in order to render tags in of the head in a more performant way. - Uses the hash hydration plugin to reduce initial hydration
Type: boolean
Default: true
See: Nuxt Discussion #22632

inlineRouteRules
Allow defining routeRules directly within your ~/pages directory using defineRouteRules.

Rules are converted (based on the path) and applied for server requests. For example, a rule defined in ~/pages/foo/bar.vue will be applied to /foo/bar requests. A rule in ~/pages/foo/[id].vue will be applied to /foo/** requests. For more control, such as if you are using a custom path or alias set in the page's definePageMeta, you should set routeRules directly within your nuxt.config.

Type: boolean
Default: false
localLayerAliases
Resolve ~, ~~, @ and @@ aliases located within layers with respect to their layer source and root directories.

Type: boolean
Default: true
navigationRepaint
Wait for a single animation frame before navigation, which gives an opportunity for the browser to repaint, acknowledging user interaction.

It can reduce INP when navigating on prerendered routes.

Type: boolean
Default: true
noVueServer
Disable vue server renderer endpoint within nitro.

Type: boolean
Default: false
normalizeComponentNames
Ensure that auto-generated Vue component names match the full component name you would use to auto-import the component.

Type: boolean
Default: false
payloadExtraction
When this option is enabled (by default) payload of pages that are prerendered are extracted

Type: boolean
Default: true
polyfillVueUseHead
Whether or not to add a compatibility layer for modules, plugins or user code relying on the old @vueuse/head API.

This is disabled to reduce the client-side bundle by ~0.5kb.

Type: boolean
Default: false
relativeWatchPaths
Whether to provide relative paths in the builder:watch hook.

This flag will be removed with the release of v4 and exists only for advance testing within Nuxt v3.12+ or in the nightly release channel.

Type: boolean
Default: true
renderJsonPayloads
Render JSON payloads with support for revivifying complex types.

Type: boolean
Default: true
resetAsyncDataToUndefined
Whether clear and clearNuxtData should reset async data to its default value or update it to null/undefined.

Type: boolean
Default: true
respectNoSSRHeader
Allow disabling Nuxt SSR responses by setting the x-nuxt-no-ssr header.

Type: boolean
Default: false
restoreState
Whether to restore Nuxt app state from sessionStorage when reloading the page after a chunk error or manual reloadNuxtApp() call.

To avoid hydration errors, it will be applied only after the Vue app has been mounted, meaning there may be a flicker on initial load. Consider carefully before enabling this as it can cause unexpected behavior, and consider providing explicit keys to useState as auto-generated keys may not match across builds.

Type: boolean
Default: false
scanPageMeta
Allow exposing some route metadata defined in definePageMeta at build-time to modules (alias, name, path, redirect).

This only works with static or strings/arrays rather than variables or conditional assignment.

Type: boolean
Default: true
See: Nuxt Issues #24770

sharedPrerenderData
Automatically share payload data between pages that are prerendered. This can result in a significant performance improvement when prerendering sites that use useAsyncData or useFetch and fetch the same data in different pages.

It is particularly important when enabling this feature to make sure that any unique key of your data is always resolvable to the same data. For example, if you are using useAsyncData to fetch data related to a particular page, you should provide a key that uniquely matches that data. (useFetch should do this automatically for you.)

Type: boolean
Default: false
Example:


// This would be unsafe in a dynamic page (e.g. `[slug].vue`) because the route slug makes a difference
// to the data fetched, but Nuxt can't know that because it's not reflected in the key.
const route = useRoute()
const { data } = await useAsyncData(async () => {
  return await $fetch(`/api/my-page/${route.params.slug}`)
})
// Instead, you should use a key that uniquely identifies the data fetched.
const { data } = await useAsyncData(route.params.slug, async () => {
  return await $fetch(`/api/my-page/${route.params.slug}`)
})
templateRouteInjection
By default the route object returned by the auto-imported useRoute() composable is kept in sync with the current page in view in <NuxtPage>. This is not true for vue-router's exported useRoute or for the default $route object available in your Vue templates.

By enabling this option a mixin will be injected to keep the $route template object in sync with Nuxt's managed useRoute().

Type: boolean
Default: true
templateUtils
Whether to provide a legacy templateUtils object (with serialize, importName and importSources) when compiling Nuxt templates.

This flag will be removed with the release of v4 and exists only for advance testing within Nuxt v3.12+ or in the nightly release channel.

Type: boolean
Default: true
treeshakeClientOnly
Tree shakes contents of client-only components from server bundle.

Type: boolean
Default: true
See: Nuxt PR #5750

typedPages
Enable the new experimental typed router using unplugin-vue-router.

Type: boolean
Default: false
viewTransition
Enable View Transition API integration with client-side router.

Type: boolean
Default: false
See: View Transitions API

watcher
Set an alternative watcher that will be used as the watching service for Nuxt.

Nuxt uses 'chokidar-granular' if your source directory is the same as your root directory . This will ignore top-level directories (like node_modules and .git) that are excluded from watching. You can set this instead to parcel to use @parcel/watcher, which may improve performance in large projects or on Windows platforms. You can also set this to chokidar to watch all files in your source directory.

Type: string
Default: "chokidar"
See: chokidar

See: @parcel/watcher

writeEarlyHints
Write early hints when using node server.

Type: boolean
Default: false
Note: nginx does not support 103 Early hints in the current version.
extends
Extend project from multiple local or remote sources.

Value should be either a string or array of strings pointing to source directories or config path relative to current config. You can use github:, gh: gitlab: or bitbucket:

Default: null
See: c12 docs on extending config layers

See: giget documentation

extensions
The extensions that should be resolved by the Nuxt resolver.

Type: array
Default

[
  ".js",
  ".jsx",
  ".mjs",
  ".ts",
  ".tsx",
  ".vue"
]
features
Some features of Nuxt are available on an opt-in basis, or can be disabled based on your needs.

devLogs
Stream server logs to the client as you are developing. These logs can be handled in the dev:ssr-logs hook.

If set to silent, the logs will not be printed to the browser console.

Type: boolean
Default: false
inlineStyles
Inline styles when rendering HTML (currently vite only).

You can also pass a function that receives the path of a Vue component and returns a boolean indicating whether to inline the styles for that component.

Type: boolean
Default: true
noScripts
Turn off rendering of Nuxt scripts and JS resource hints. You can also disable scripts more granularly within routeRules.

Type: boolean
Default: false
future
future is for early opting-in to new features that will become default in a future (possibly major) version of the framework.

compatibilityVersion
Enable early access to Nuxt v4 features or flags.

Setting compatibilityVersion to 4 changes defaults throughout your Nuxt configuration, but you can granularly re-enable Nuxt v3 behaviour when testing (see example). Please file issues if so, so that we can address in Nuxt or in the ecosystem.

Type: number
Default: 3
Example:


export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  // To re-enable _all_ Nuxt v3 behaviour, set the following options:
  srcDir: '.',
  dir: {
    app: 'app'
  },
  experimental: {
    compileTemplate: true,
    templateUtils: true,
    relativeWatchPaths: true,
    resetAsyncDataToUndefined: true,
    defaults: {
      useAsyncData: {
        deep: true
      }
    }
  },
  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false
    }
  }
})
multiApp
This enables early access to the experimental multi-app support.

Type: boolean
Default: false
See: Nuxt Issue #21635

typescriptBundlerResolution
This enables 'Bundler' module resolution mode for TypeScript, which is the recommended setting for frameworks like Nuxt and Vite.

It improves type support when using modern libraries with exports. You can set it to false to use the legacy 'Node' mode, which is the default for TypeScript.

Type: boolean
Default: true
See: TypeScript PR implementing bundler module resolution

generate
exclude
This option is no longer used. Instead, use nitro.prerender.ignore.

Type: array
routes
The routes to generate.

If you are using the crawler, this will be only the starting point for route generation. This is often necessary when using dynamic routes. It is preferred to use nitro.prerender.routes.

Type: array
Example:


routes: ['/users/1', '/users/2', '/users/3']
hooks
Hooks are listeners to Nuxt events that are typically used in modules, but are also available in nuxt.config.

Internally, hooks follow a naming pattern using colons (e.g., build:done). For ease of configuration, you can also structure them as an hierarchical object in nuxt.config (as below).

Default: null
Example:


import fs from 'node:fs'
import path from 'node:path'
export default {
  hooks: {
    build: {
      done(builder) {
        const extraFilePath = path.join(
          builder.nuxt.options.buildDir,
          'extra-file'
        )
        fs.writeFileSync(extraFilePath, 'Something extra')
      }
    }
  }
}
ignore
More customizable than ignorePrefix: all files matching glob patterns specified inside the ignore array will be ignored in building.

Type: array
Default

[
  "**/*.stories.{js,cts,mts,ts,jsx,tsx}",
  "**/*.{spec,test}.{js,cts,mts,ts,jsx,tsx}",
  "**/*.d.{cts,mts,ts}",
  "**/.{pnpm-store,vercel,netlify,output,git,cache,data}",
  ".nuxt/analyze",
  ".nuxt",
  "**/-*.*"
]
ignoreOptions
Pass options directly to node-ignore (which is used by Nuxt to ignore files).

See: node-ignore

Example:


ignoreOptions: {
  ignorecase: false
}
ignorePrefix
Any file in pages/, layouts/, middleware/, and public/ directories will be ignored during the build process if its filename starts with the prefix specified by ignorePrefix. This is intended to prevent certain files from being processed or served in the built application. By default, the ignorePrefix is set to '-', ignoring any files starting with '-'.

Type: string
Default: "-"
imports
Configure how Nuxt auto-imports composables into your application.

See: Nuxt documentation

dirs
An array of custom directories that will be auto-imported. Note that this option will not override the default directories (~/composables, ~/utils).

Type: array
Example:


imports: {
  // Auto-import pinia stores defined in `~/stores`
  dirs: ['stores']
}
global
Type: boolean
Default: false
logLevel
Log level when building logs.

Defaults to 'silent' when running in CI or when a TTY is not available. This option is then used as 'silent' in Vite and 'none' in Webpack

Type: string
Default: "info"
modules
Modules are Nuxt extensions which can extend its core functionality and add endless integrations.

Each module is either a string (which can refer to a package, or be a path to a file), a tuple with the module as first string and the options as a second object, or an inline module function. Nuxt tries to resolve each item in the modules array using node require path (in node_modules) and then will be resolved from project srcDir if ~ alias is used.

Type: array
Note: Modules are executed sequentially so the order is important. First, the modules defined in nuxt.config.ts are loaded. Then, modules found in the modules/ directory are executed, and they load in alphabetical order.
Example:


modules: [
  // Using package name
  '@nuxtjs/axios',
  // Relative to your project srcDir
  '~/modules/awesome.js',
  // Providing options
  ['@nuxtjs/google-analytics', { ua: 'X1234567' }],
  // Inline definition
  function () {}
]
modulesDir
Used to set the modules directories for path resolving (for example, webpack's resolveLoading, nodeExternals and postcss).

The configuration path is relative to options.rootDir (default is current working directory). Setting this field may be necessary if your project is organized as a yarn workspace-styled mono-repository.

Type: array
Default

[
  "/<rootDir>/node_modules"
]
Example:


export default {
  modulesDir: ['../../node_modules']
}
nitro
Configuration for Nitro.

See: Nitro configuration docs

routeRules
Type: object
runtimeConfig
Type: object
Default

{
  "public": {},
  "app": {
    "buildId": "ed9f97d5-a946-4f44-9729-21fe99d109cd",
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_"
  }
}
optimization
Build time optimization configuration.

asyncTransforms
Options passed directly to the transformer from unctx that preserves async context after await.

asyncFunctions
Type: array
Default

[
  "defineNuxtPlugin",
  "defineNuxtRouteMiddleware"
]
objectDefinitions
defineNuxtComponent
Type: array
Default

[
  "asyncData",
  "setup"
]
defineNuxtPlugin
Type: array
Default

[
  "setup"
]
definePageMeta
Type: array
Default

[
  "middleware",
  "validate"
]
keyedComposables
Functions to inject a key for.

As long as the number of arguments passed to the function is less than argumentLength, an additional magic string will be injected that can be used to deduplicate requests between server and client. You will need to take steps to handle this additional key. The key will be unique based on the location of the function being invoked within the file.

Type: array
Default

[
  {
    "name": "useId",
    "argumentLength": 1
  },
  {
    "name": "callOnce",
    "argumentLength": 2
  },
  {
    "name": "defineNuxtComponent",
    "argumentLength": 2
  },
  {
    "name": "useState",
    "argumentLength": 2
  },
  {
    "name": "useFetch",
    "argumentLength": 3
  },
  {
    "name": "useAsyncData",
    "argumentLength": 3
  },
  {
    "name": "useLazyAsyncData",
    "argumentLength": 3
  },
  {
    "name": "useLazyFetch",
    "argumentLength": 3
  }
]
treeShake
Tree shake code from specific builds.

composables
Tree shake composables from the server or client builds.

Example:


treeShake: { client: { myPackage: ['useServerOnlyComposable'] } }
client
Type: object
Default

{
  "vue": [
    "onRenderTracked",
    "onRenderTriggered",
    "onServerPrefetch"
  ],
  "#app": [
    "definePayloadReducer",
    "definePageMeta",
    "onPrehydrate"
  ]
}
server
Type: object
Default

{
  "vue": [
    "onMounted",
    "onUpdated",
    "onUnmounted",
    "onBeforeMount",
    "onBeforeUpdate",
    "onBeforeUnmount",
    "onRenderTracked",
    "onRenderTriggered",
    "onActivated",
    "onDeactivated"
  ],
  "#app": [
    "definePayloadReviver",
    "definePageMeta"
  ]
}
pages
Whether to use the vue-router integration in Nuxt 3. If you do not provide a value it will be enabled if you have a pages/ directory in your source folder.

Type: boolean
plugins
An array of nuxt app plugins.

Each plugin can be a string (which can be an absolute or relative path to a file). If it ends with .client or .server then it will be automatically loaded only in the appropriate context. It can also be an object with src and mode keys.

Type: array
Note: Plugins are also auto-registered from the ~/plugins directory and these plugins do not need to be listed in nuxt.config unless you need to customize their order. All plugins are deduplicated by their src path.
See: plugins/ directory documentation

Example:


plugins: [
  '~/plugins/foo.client.js', // only in client side
  '~/plugins/bar.server.js', // only in server side
  '~/plugins/baz.js', // both client & server
  { src: '~/plugins/both-sides.js' },
  { src: '~/plugins/client-only.js', mode: 'client' }, // only on client side
  { src: '~/plugins/server-only.js', mode: 'server' } // only on server side
]
postcss
order
A strategy for ordering PostCSS plugins.

Type: function
plugins
Options for configuring PostCSS plugins.

See: PostCSS docs

autoprefixer
Plugin to parse CSS and add vendor prefixes to CSS rules.

See: autoprefixer

cssnano
Type: object
See: cssnano configuration options

rootDir
Define the root directory of your application.

This property can be overwritten (for example, running nuxt ./my-app/ will set the rootDir to the absolute path of ./my-app/ from the current/working directory. It is normally not needed to configure this option.

Type: string
Default: "/<rootDir>"
routeRules
Global route options applied to matching server routes.

Experimental: This is an experimental feature and API may change in the future.

See: Nitro route rules documentation

router
options
Additional router options passed to vue-router. On top of the options for vue-router, Nuxt offers additional options to customize the router (see below).

Note: Only JSON serializable options should be passed by Nuxt config. For more control, you can use app/router.options.ts file.
See: Vue Router documentation.

hashMode
You can enable hash history in SPA mode. In this mode, router uses a hash character (#) before the actual URL that is internally passed. When enabled, the URL is never sent to the server and SSR is not supported.

Type: boolean
Default: false
Default: false

scrollBehaviorType
Customize the scroll behavior for hash links.

Type: string
Default: "auto"
Default: 'auto'

runtimeConfig
Runtime config allows passing dynamic config and environment variables to the Nuxt app context.

The value of this object is accessible from server only using useRuntimeConfig. It mainly should hold private configuration which is not exposed on the frontend. This could include a reference to your API secret tokens. Anything under public and app will be exposed to the frontend as well. Values are automatically replaced by matching env variables at runtime, e.g. setting an environment variable NUXT_API_KEY=my-api-key NUXT_PUBLIC_BASE_URL=/foo/ would overwrite the two values in the example below.

Type: object
Default

{
  "public": {},
  "app": {
    "buildId": "ed9f97d5-a946-4f44-9729-21fe99d109cd",
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  }
}
Example:


export default {
 runtimeConfig: {
    apiKey: '', // Default to an empty string, automatically set at runtime using process.env.NUXT_API_KEY
    public: {
       baseURL: '' // Exposed to the frontend as well.
    }
  }
}
serverDir
Define the server directory of your Nuxt application, where Nitro routes, middleware and plugins are kept.

If a relative path is specified, it will be relative to your rootDir.

Type: string
Default: "/<srcDir>/server"
serverHandlers
Nitro server handlers.

Each handler accepts the following options:

handler: The path to the file defining the handler. - route: The route under which the handler is available. This follows the conventions of rou3. - method: The HTTP method of requests that should be handled. - middleware: Specifies whether it is a middleware handler. - lazy: Specifies whether to use lazy loading to import the handler.
Type: array
See: server/ directory documentation

Note: Files from server/api, server/middleware and server/routes will be automatically registered by Nuxt.
Example:


serverHandlers: [
  { route: '/path/foo/**:name', handler: '~/server/foohandler.ts' }
]
sourcemap
Whether to generate sourcemaps.

Type: object
Default

{
  "server": true,
  "client": false
}
spaLoadingTemplate
Boolean or a path to an HTML file with the contents of which will be inserted into any HTML page rendered with ssr: false.

If it is unset, it will use ~/app/spa-loading-template.html file in one of your layers, if it exists. - If it is false, no SPA loading indicator will be loaded. - If true, Nuxt will look for ~/app/spa-loading-template.html file in one of your layers, or a default Nuxt image will be used. Some good sources for spinners are SpinKit or SVG Spinners.
Default: null
Example: ~/app/spa-loading-template.html


<!-- https://github.com/barelyhuman/snips/blob/dev/pages/css-loader.md -->
<div class="loader"></div>
<style>
.loader {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  border: solid 2px transparent;
  border-top-color: #000;
  border-left-color: #000;
  border-bottom-color: #efefef;
  border-right-color: #efefef;
  border-radius: 50%;
  -webkit-animation: loader 400ms linear infinite;
  animation: loader 400ms linear infinite;
}

\@-webkit-keyframes loader {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
  }
}
\@keyframes loader {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
srcDir
Define the source directory of your Nuxt application.

If a relative path is specified, it will be relative to the rootDir.

Type: string
Default: "/<srcDir>"
Example:


export default {
  srcDir: 'src/'
}
This would work with the following folder structure:


-| app/
---| node_modules/
---| nuxt.config.js
---| package.json
---| src/
------| assets/
------| components/
------| layouts/
------| middleware/
------| pages/
------| plugins/
------| public/
------| store/
------| server/
------| app.config.ts
------| app.vue
------| error.vue
ssr
Whether to enable rendering of HTML - either dynamically (in server mode) or at generate time. If set to false generated pages will have no content.

Type: boolean
Default: true
telemetry
Manually disable nuxt telemetry.

See: Nuxt Telemetry for more information.

test
Whether your app is being unit tested.

Type: boolean
Default: false
theme
Extend project from a local or remote source.

Value should be a string pointing to source directory or config path relative to current config. You can use github:, gitlab:, bitbucket: or https:// to extend from a remote git repository.

Type: string
Default: null
typescript
Configuration for Nuxt's TypeScript integration.

builder
Which builder types to include for your project.

By default Nuxt infers this based on your builder option (defaulting to 'vite') but you can either turn off builder environment types (with false) to handle this fully yourself, or opt for a 'shared' option. The 'shared' option is advised for module authors, who will want to support multiple possible builders.

Default: null
hoist
Modules to generate deep aliases for within compilerOptions.paths. This does not yet support subpaths. It may be necessary when using Nuxt within a pnpm monorepo with shamefully-hoist=false.

Type: array
Default

[
  "nitropack/types",
  "nitropack",
  "defu",
  "h3",
  "consola",
  "ofetch",
  "@unhead/vue",
  "@nuxt/devtools",
  "vue",
  "@vue/runtime-core",
  "@vue/compiler-sfc",
  "vue-router",
  "vue-router/auto-routes",
  "unplugin-vue-router/client",
  "@nuxt/schema",
  "nuxt"
]
includeWorkspace
Include parent workspace in the Nuxt project. Mostly useful for themes and module authors.

Type: boolean
Default: false
shim
Generate a *.vue shim.

We recommend instead letting the official Vue extension generate accurate types for your components. Note that you may wish to set this to true if you are using other libraries, such as ESLint, that are unable to understand the type of .vue files.

Type: boolean
Default: false
strict
TypeScript comes with certain checks to give you more safety and analysis of your program. Once you’ve converted your codebase to TypeScript, you can start enabling these checks for greater safety. Read More

Type: boolean
Default: true
tsConfig
You can extend generated .nuxt/tsconfig.json using this option.

Type: object
Default

{
  "compilerOptions": {}
}
typeCheck
Enable build-time type checking.

If set to true, this will type check in development. You can restrict this to build-time type checking by setting it to build. Requires to install typescript and vue-tsc as dev dependencies.

Type: boolean
Default: false
See: Nuxt TypeScript docs

unhead
An object that allows us to configure the unhead nuxt module.

renderSSRHeadOptions
An object that will be passed to renderSSRHead to customize the output.

Type: object
Default

{
  "omitLineBreaks": false
}
See: unhead options documentation

Example:


export default defineNuxtConfig({
 unhead: {
  renderSSRHeadOptions: {
   omitLineBreaks: true
  }
})
vite
Configuration that will be passed directly to Vite.

See: Vite configuration docs for more information. Please note that not all vite options are supported in Nuxt.

build
assetsDir
Type: string
Default: "_nuxt/"
emptyOutDir
Type: boolean
Default: false
cacheDir
Type: string
Default: "/<rootDir>/node_modules/.cache/vite"
clearScreen
Type: boolean
Default: true
define
Type: object
Default

{
  "__VUE_PROD_HYDRATION_MISMATCH_DETAILS__": false,
  "process.dev": false,
  "import.meta.dev": false,
  "process.test": false,
  "import.meta.test": false
}
esbuild
jsxFactory
Type: string
Default: "h"
jsxFragment
Type: string
Default: "Fragment"
tsconfigRaw
Type: string
Default: "{}"
mode
Type: string
Default: "production"
optimizeDeps
exclude
Type: array
Default

[
  "vue-demi"
]
publicDir
Type: boolean
Default: false
resolve
extensions
Type: array
Default

[
  ".mjs",
  ".js",
  ".ts",
  ".jsx",
  ".tsx",
  ".json",
  ".vue"
]
root
Type: string
Default: "/<srcDir>"
server
fs
allow
Type: array
Default

[
  "/<rootDir>/.nuxt",
  "/<srcDir>",
  "/<rootDir>",
  "/<workspaceDir>",
  "/<rootDir>/node_modules"
]
vue
features
propsDestructure
Type: boolean
Default: true
isProduction
Type: boolean
Default: true
script
hoistStatic
template
compilerOptions
Type: object
transformAssetUrls
Type: object
Default

{
  "video": [
    "src",
    "poster"
  ],
  "source": [
    "src"
  ],
  "img": [
    "src"
  ],
  "image": [
    "xlink:href",
    "href"
  ],
  "use": [
    "xlink:href",
    "href"
  ]
}
vueJsx
Type: object
vue
Vue.js config

compilerOptions
Options for the Vue compiler that will be passed at build time.

See: Vue documentation

propsDestructure
Enable reactive destructure for defineProps

Type: boolean
Default: true
runtimeCompiler
Include Vue compiler in runtime bundle.

Type: boolean
Default: false
transformAssetUrls
image
Type: array
Default

[
  "xlink:href",
  "href"
]
img
Type: array
Default

[
  "src"
]
source
Type: array
Default

[
  "src"
]
use
Type: array
Default

[
  "xlink:href",
  "href"
]
video
Type: array
Default

[
  "src",
  "poster"
]
watch
The watch property lets you define patterns that will restart the Nuxt dev server when changed.

It is an array of strings or regular expressions. Strings should be either absolute paths or relative to the srcDir (and the srcDir of any layers). Regular expressions will be matched against the path relative to the project srcDir (and the srcDir of any layers).

Type: array
watchers
The watchers property lets you overwrite watchers configuration in your nuxt.config.

chokidar
Options to pass directly to chokidar.

See: chokidar

ignoreInitial
Type: boolean
Default: true
rewatchOnRawEvents
An array of event types, which, when received, will cause the watcher to restart.

webpack
watchOptions to pass directly to webpack.

See: webpack@4 watch options.

aggregateTimeout
Type: number
Default: 1000
webpack
aggressiveCodeRemoval
Hard-replaces typeof process, typeof window and typeof document to tree-shake bundle.

Type: boolean
Default: false
analyze
Nuxt uses webpack-bundle-analyzer to visualize your bundles and how to optimize them.

Set to true to enable bundle analysis, or pass an object with options: for webpack or for vite.

Type: object
Default

{
  "template": "treemap",
  "projectRoot": "/<rootDir>",
  "filename": "/<rootDir>/.nuxt/analyze/{name}.html"
}
Example:


analyze: {
  analyzerMode: 'static'
}
cssSourceMap
Enables CSS source map support (defaults to true in development).

Type: boolean
Default: false
devMiddleware
See webpack-dev-middleware for available options.

stats
Type: string
Default: "none"
experiments
Configure webpack experiments

extractCSS
Enables Common CSS Extraction.

Using mini-css-extract-plugin under the hood, your CSS will be extracted into separate files, usually one per component. This allows caching your CSS and JavaScript separately.

Type: boolean
Default: true
Example:


export default {
  webpack: {
    extractCSS: true,
    // or
    extractCSS: {
      ignoreOrder: true
    }
  }
}
Example:


export default {
  webpack: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  }
}
filenames
Customize bundle filenames.

To understand a bit more about the use of manifests, take a look at webpack documentation.

Note: Be careful when using non-hashed based filenames in production as most browsers will cache the asset and not detect the changes on first load.
Example:


filenames: {
  chunk: ({ isDev }) => (isDev ? '[name].js' : '[id].[contenthash].js')
}
app
Type: function
chunk
Type: function
css
Type: function
font
Type: function
img
Type: function
video
Type: function
friendlyErrors
Set to false to disable the overlay provided by FriendlyErrorsWebpackPlugin.

Type: boolean
Default: true
hotMiddleware
See webpack-hot-middleware for available options.

loaders
Customize the options of Nuxt's integrated webpack loaders.

css
esModule
Type: boolean
Default: false
importLoaders
Type: number
Default: 0
url
filter
Type: function
cssModules
esModule
Type: boolean
Default: false
importLoaders
Type: number
Default: 0
modules
localIdentName
Type: string
Default: "[local]_[hash:base64:5]"
url
filter
Type: function
esbuild
See: esbuild loader

jsxFactory
Type: string
Default: "h"
jsxFragment
Type: string
Default: "Fragment"
tsconfigRaw
Type: string
Default: "{}"
file
See: file-loader Options

Default:


{ esModule: false }
esModule
Type: boolean
Default: false
fontUrl
See: file-loader Options

Default:


{ esModule: false, limit: 1000  }
esModule
Type: boolean
Default: false
limit
Type: number
Default: 1000
imgUrl
See: file-loader Options

Default:


{ esModule: false, limit: 1000  }
esModule
Type: boolean
Default: false
limit
Type: number
Default: 1000
less
Default

{
  "sourceMap": false
}
See: less-loader Options

pugPlain
See: pug options

sass
See: sass-loader Options

Default:


{
  sassOptions: {
    indentedSyntax: true
  }
}
sassOptions
indentedSyntax
Type: boolean
Default: true
scss
Default

{
  "sourceMap": false
}
See: sass-loader Options

stylus
Default

{
  "sourceMap": false
}
See: stylus-loader Options

vue
See vue-loader for available options.

Type: object
Default

{
  "transformAssetUrls": {},
  "compilerOptions": {},
  "propsDestructure": {}
}
vueStyle
Default

{
  "sourceMap": false
}
optimization
Configure webpack optimization.

minimize
Set minimize to false to disable all minimizers. (It is disabled in development by default).

Type: boolean
Default: true
minimizer
You can set minimizer to a customized array of plugins.

runtimeChunk
Type: string
Default: "single"
splitChunks
automaticNameDelimiter
Type: string
Default: "/"
cacheGroups
chunks
Type: string
Default: "all"
optimizeCSS
OptimizeCSSAssets plugin options.

Defaults to true when extractCSS is enabled.

Type: boolean
Default: false
See: css-minimizer-webpack-plugin documentation.

plugins
Add webpack plugins.

Type: array
Example:


import webpack from 'webpack'
import { version } from './package.json'
// ...
plugins: [
  new webpack.DefinePlugin({
    'process.VERSION': version
  })
]
postcss
Customize PostCSS Loader. same options as postcss-loader options

postcssOptions
config
plugins
Type: object
Default

{
  "autoprefixer": {},
  "cssnano": {}
}
profile
Enable the profiler in webpackbar.

It is normally enabled by CLI argument --profile.

Type: boolean
Default: false
See: webpackbar.

serverURLPolyfill
The polyfill library to load to provide URL and URLSearchParams.

Defaults to 'url' (see package).

Type: string
Default: "url"
warningIgnoreFilters
Filters to hide build warnings.

Type: array
workspaceDir
Define the workspace directory of your application.

Often this is used when in a monorepo setup. Nuxt will attempt to detect your workspace directory automatically, but you can override it here. It is normally not needed to configure this option.

Type: string
Default: "/<workspaceDir>"
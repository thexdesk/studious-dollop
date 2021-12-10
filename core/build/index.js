var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// route-module:/Volumes/βτεsηΘω./Projects/CNXT/cnxt/app/routes/tags/tag/$hash.tsx
var require_hash = __commonJS({
  "route-module:/Volumes/\u03B2\u03C4\u03B5s\u03B7\u0398\u03C9./Projects/CNXT/cnxt/app/routes/tags/tag/$hash.tsx"() {
    init_react();
  }
});

// route-module:/Volumes/βτεsηΘω./Projects/CNXT/cnxt/app/routes/tags/$userId.tsx
var require_userId = __commonJS({
  "route-module:/Volumes/\u03B2\u03C4\u03B5s\u03B7\u0398\u03C9./Projects/CNXT/cnxt/app/routes/tags/$userId.tsx"() {
    init_react();
  }
});

// route-module:/Volumes/βτεsηΘω./Projects/CNXT/cnxt/app/routes/tags/mint.tsx
var require_mint = __commonJS({
  "route-module:/Volumes/\u03B2\u03C4\u03B5s\u03B7\u0398\u03C9./Projects/CNXT/cnxt/app/routes/tags/mint.tsx"() {
    init_react();
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require("remix"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Volumes/βτεsηΘω./Projects/CNXT/cnxt/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
init_react();
var React3 = __toModule(require("react"));
var import_remix2 = __toModule(require("remix"));

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-QQBXXD2P.css";

// app/styles/demos/remix.css
var remix_default = "/build/_assets/remix-5PPS2YMF.css";

// app/styles/global.css
var global_default = "/build/_assets/global-AKFP5T7A.css";

// app/styles/dark.css
var dark_default = "/build/_assets/dark-CTJYSER5.css";

// app/styles/cnxt/tags.css
var tags_default = "/build/_assets/tags-KA4XVJPV.css";

// app/utils/contexts/gun/gun.provider.tsx
init_react();
var import_react = __toModule(require("react"));
var import_gun = __toModule(require("gun"));
var import_radix = __toModule(require("gun/lib/radix"));
var import_radisk = __toModule(require("gun/lib/radisk"));
var import_store = __toModule(require("gun/lib/store"));
var import_rindexed = __toModule(require("gun/lib/rindexed"));
var import_gundb_react_auth = __toModule(require("@altrx/gundb-react-auth"));
var sea = import_gun.default.SEA;
var asyncFn = (fn) => (...args) => {
  return new Promise((resolve) => {
    resolve(fn.call(void 0, ...args));
  });
};
var storage = {
  setItem: asyncFn(localStorage.setItem.bind(localStorage)),
  getItem: asyncFn(localStorage.getItem.bind(localStorage)),
  removeItem: asyncFn(localStorage.removeItem.bind(localStorage))
};
var peers = ["http://0.0.0.0:3000/gun"];
var AppProvider = ({ children }) => {
  return /* @__PURE__ */ import_react.default.createElement(import_gundb_react_auth.GunProvider, {
    peers,
    sea,
    Gun: import_gun.default,
    keyFieldName: "app/keys",
    storage,
    gunOpts: {
      localStorage: false,
      radisk: true,
      peers
    }
  }, children);
};
var gun_provider_default = AppProvider;

// route-module:/Volumes/βτεsηΘω./Projects/CNXT/cnxt/app/root.tsx
var links = () => {
  return [
    { rel: "stylesheet", href: global_default },
    { rel: "stylesheet", href: tags_default },
    {
      rel: "stylesheet",
      href: dark_default,
      media: "(prefers-color-scheme: dark)"
    },
    { rel: "stylesheet", href: remix_default },
    { rel: "stylesheet", href: tailwind_default },
    {
      rel: "stylesheet",
      href: "https://use.fontawesome.com/releases/v5.15.4/css/all.css"
    }
  ];
};
function App() {
  return /* @__PURE__ */ React3.createElement(gun_provider_default, null, /* @__PURE__ */ React3.createElement(Document, null, /* @__PURE__ */ React3.createElement(Layout, null, /* @__PURE__ */ React3.createElement(import_remix2.Outlet, null))));
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ React3.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React3.createElement("head", null, /* @__PURE__ */ React3.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React3.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React3.createElement("title", null, title) : null, /* @__PURE__ */ React3.createElement(import_remix2.Meta, null), /* @__PURE__ */ React3.createElement(import_remix2.Links, null)), /* @__PURE__ */ React3.createElement("body", null, children, /* @__PURE__ */ React3.createElement(RouteChangeAnnouncement, null), /* @__PURE__ */ React3.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React3.createElement(import_remix2.Scripts, null), process.env.NODE_ENV === "development" && /* @__PURE__ */ React3.createElement(import_remix2.LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React3.createElement("div", {
    className: "remix-app"
  }, /* @__PURE__ */ React3.createElement("header", {
    className: "remix-app__header"
  }, /* @__PURE__ */ React3.createElement("div", {
    className: "container remix-app__header-content"
  }, /* @__PURE__ */ React3.createElement(import_remix2.Link, {
    to: "/",
    title: "Remix",
    className: "remix-app__header-home-link"
  }, /* @__PURE__ */ React3.createElement(Logo, null)), /* @__PURE__ */ React3.createElement("nav", {
    "aria-label": "Main navigation",
    className: "remix-app__header-nav"
  }))), /* @__PURE__ */ React3.createElement("div", {
    className: "remix-app__main"
  }, /* @__PURE__ */ React3.createElement("div", {
    className: "container remix-app__main-content"
  }, children)), /* @__PURE__ */ React3.createElement("footer", {
    className: "remix-app__footer"
  }, /* @__PURE__ */ React3.createElement("div", {
    className: "container remix-app__footer-content"
  }, /* @__PURE__ */ React3.createElement("p", {
    className: "font-medium"
  }, "\xA9 CN\u274CT | THE\u274CDESK"))));
}
function CatchBoundary() {
  let caught = (0, import_remix2.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React3.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React3.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React3.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React3.createElement(Layout, null, /* @__PURE__ */ React3.createElement("h1", null, caught.status, ": ", caught.statusText), message));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React3.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React3.createElement(Layout, null, /* @__PURE__ */ React3.createElement("div", null, /* @__PURE__ */ React3.createElement("h1", null, "There was an error"), /* @__PURE__ */ React3.createElement("p", null, error.message), /* @__PURE__ */ React3.createElement("hr", null), /* @__PURE__ */ React3.createElement("p", null, "TODO: FIX BUG IN CODE"))));
}
function Logo(props) {
  return /* @__PURE__ */ React3.createElement("svg", __spreadValues({
    viewBox: "0 0 1061 253",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    "aria-labelledby": "remix-run-logo-title",
    role: "img",
    width: "106",
    height: "30",
    fill: "currentColor"
  }, props), /* @__PURE__ */ React3.createElement("g", {
    transform: "matrix(1,0,0,1,-249,-135)"
  }, /* @__PURE__ */ React3.createElement("g", {
    transform: "matrix(1,0,0,1,-88,-816)"
  }, /* @__PURE__ */ React3.createElement("g", {
    transform: "matrix(4.53085,0,0,4.53085,337.554,376.39)"
  }, /* @__PURE__ */ React3.createElement("g", {
    transform: "matrix(0.149307,0,0,0.149307,-653.047,-29.1861)"
  }, /* @__PURE__ */ React3.createElement("path", {
    fill: "rgb(52,151,250)",
    d: "M5940.91,1047.05L5940.91,1048.26L5856.67,1125.74L5823.39,1125.74L5856.67,1125.74L5832.17,1148.26L5815.53,1148.26L5810,1142.25L5815.53,1148.26L5723.87,1148.26L5723.87,1417.65L5569.22,1417.65L5569.22,1395.12L5583.51,1395.12L5583.51,1148.26L5478.51,1148.26L5478.51,1126.03L5531.65,1126.03C5546.35,1112.59 5562.41,1100.8 5579.32,1090.23C5595.83,1079.9 5602.32,1061.15 5617.05,1049.62L5621.75,1049.62L5621.75,1047.05L5940.91,1047.05ZM5605.74,1392.05C5608.25,1393.17 5611.11,1394.2 5614.25,1395.12L5605.74,1395.12L5605.74,1392.05ZM5701.63,1394.61L5701.63,1395.12L5700.41,1395.12C5700.82,1394.95 5701.23,1394.78 5701.63,1394.61ZM5826.96,1145.08C5827.54,1145.08 5828.12,1145.09 5828.69,1145.09L5828.57,1145.09C5828.03,1145.09 5827.5,1145.08 5826.96,1145.08ZM5830.39,1145.07L5830.23,1145.07L5830.39,1145.07ZM5831.15,1145.04L5831.12,1145.05L5831.15,1145.04L5831.21,1145.04L5831.15,1145.04ZM5831.39,1145.03L5831.34,1145.04L5831.39,1145.03ZM5831.64,1145.02L5831.58,1145.02L5831.52,1145.03C5831.56,1145.03 5831.6,1145.02 5831.64,1145.02ZM5822.99,1144.99L5823.12,1144.99L5822.99,1144.99ZM5821.14,1144.97L5821.49,1144.97L5821.14,1144.97ZM5820.68,1144.97L5820.89,1144.97L5820.68,1144.97ZM5832.67,1144.95C5832.62,1144.96 5832.58,1144.96 5832.53,1144.96C5832.6,1144.96 5832.66,1144.95 5832.73,1144.95L5832.67,1144.95ZM5833.53,1144.88C5833.34,1144.9 5833.15,1144.91 5832.96,1144.93C5833.15,1144.91 5833.34,1144.9 5833.53,1144.88ZM5834,1144.83L5833.97,1144.83C5834,1144.83 5834.03,1144.82 5834.06,1144.82L5834,1144.83ZM5834.24,1144.8L5834.18,1144.8L5834.12,1144.81L5834.18,1144.8L5834.24,1144.8ZM5834.36,1144.78L5834.42,1144.77C5834.4,1144.78 5834.38,1144.78 5834.36,1144.78L5834.3,1144.79C5834.32,1144.79 5834.34,1144.78 5834.36,1144.78ZM5835.19,1144.66L5835.14,1144.67L5835.19,1144.66L5835.25,1144.65L5835.19,1144.66Z"
  })), /* @__PURE__ */ React3.createElement("g", {
    transform: "matrix(0.149307,0,0,0.149307,-653.047,-29.1861)"
  }, /* @__PURE__ */ React3.createElement("path", {
    fill: "rgb(255,255,255)",
    d: "M5047.86,1253.48L4821.11,1044.95L4820.49,1045.62L4820.49,1044.95L4643.86,1044.95L4643.86,1045.16C4606.52,1045.92 4569.31,1048.83 4532.4,1055.36C4437.34,1072.17 4379.47,1135.86 4374.11,1220.85C4369.3,1297.17 4433.24,1397.97 4545.32,1410.93C4592.41,1416.37 4639.6,1416.87 4686.82,1416.42L4822.81,1416.42L4824.26,1416.65L4823.57,1416.42L4834.4,1416.42L4834.4,1416.05L4835.17,1416.05L4835.17,1224.73L5043.86,1416.65L5043.86,1417.36L5157.49,1417.36L5157.49,1395.12L5087.07,1395.12C5091.98,1389.89 5097.27,1385.07 5102.77,1380.48L5161.49,1380.48L5161.49,1047.05L5047.86,1047.05L5047.86,1253.48ZM4710.22,1319C4708.3,1319.43 4706.05,1319.56 4703.45,1319.42C4700.06,1319.23 4696.66,1319.1 4693.26,1319L4661.75,1319C4639.77,1319.41 4617.76,1320.28 4595.79,1319L4574.86,1319L4574.86,1318.9C4528.12,1316.64 4490.86,1277.98 4490.86,1230.68C4490.86,1183.39 4528.12,1144.73 4574.86,1142.47L4574.86,1142.37L4724.82,1142.37L4724.82,1319L4710.22,1319Z"
  })), /* @__PURE__ */ React3.createElement("g", {
    transform: "matrix(0.220709,0,0,0.220709,-55.0788,97.0259)"
  }, /* @__PURE__ */ React3.createElement("path", {
    fill: "rgb(202,37,37)",
    d: "M982.147,136.535L982.147,136.467L1106.12,136.467L1091.24,150.09L1091.12,150.091L969.733,261.725L1093.74,375.763L1093.7,375.805L1106.12,387.176L982.147,387.177L982.147,386.911L982.082,386.981L907.807,318.674L833.539,386.973L833.539,387.177L709.564,387.176L721.951,375.84L721.88,375.763L845.882,261.726L724.492,150.09L724.448,150.09L709.564,136.467L833.539,136.467L833.539,136.476L907.808,204.777L982.086,136.468L982.147,136.535Z"
  }))))));
}
var RouteChangeAnnouncement = React3.memo(() => {
  let [hydrated, setHydrated] = React3.useState(false);
  let [innerHtml, setInnerHtml] = React3.useState("");
  let location = (0, import_remix2.useLocation)();
  React3.useEffect(() => {
    setHydrated(true);
  }, []);
  let firstRenderRef = React3.useRef(true);
  React3.useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    let pageTitle = location.pathname === "/" ? "Home" : document.title;
    setInnerHtml(`Navigated to ${pageTitle}`);
  }, [location.pathname]);
  if (!hydrated) {
    return null;
  }
  return /* @__PURE__ */ React3.createElement("div", {
    "aria-live": "assertive",
    "aria-atomic": true,
    id: "route-change-region",
    style: {
      border: "0",
      clipPath: "inset(100%)",
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: "0",
      position: "absolute",
      width: "1px",
      whiteSpace: "nowrap",
      wordWrap: "normal"
    }
  }, innerHtml);
});

// <stdin>
var route1 = __toModule(require_hash());

// mdx:/Volumes/βτεsηΘω./Projects/CNXT/cnxt/app/routes/posts/updates.md
var updates_exports = {};
__export(updates_exports, {
  default: () => updates_default,
  filename: () => filename,
  headers: () => headers,
  links: () => links2,
  meta: () => meta
});
init_react();
var import_react2 = __toModule(require("react"));
function MDXContent(props = {}) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement(_components.h1, null, "Chris"), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "Okay bubba it's time for a little assesment overview. It's been less than a month and we have made quite a bit of progress in my opinion. There was a recent 3-4 day period after thanksgiving where i hit a block, and a wall at the same time but there has been recent strides as of yesterday."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "The tags are writing to the database and I have found the perfect app framework that allows us to manipulate the server as flexible as we need it to. It's called Remix.run and I dont think I'll be using another framework in a while."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "Now that all the storage reads/writes are happening. We will have a working mvp by the end of next week if the skies stay blue. Tomorrow im gonna start loading actual tag data for searching and categorizing."), "\n", /* @__PURE__ */ import_react2.default.createElement(_components.p, null, "If you didn't send me any coin recently we're looking at 80 hours flat (4k) since the last payment. There was some hours of research and redos that i dont feel comfy billing you for."));
  return MDXLayout ? /* @__PURE__ */ import_react2.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var updates_default = MDXContent;
var filename = "updates.md";
var headers = typeof attributes !== "undefined" && attributes.headers;
var meta = typeof attributes !== "undefined" && attributes.meta;
var links2 = void 0;

// <stdin>
var route3 = __toModule(require_userId());

// route-module:/Volumes/βτεsηΘω./Projects/CNXT/cnxt/app/routes/posts/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => PostSlug,
  loader: () => loader
});
init_react();
var import_remix4 = __toModule(require("remix"));

// app/post.ts
init_react();
var import_path = __toModule(require("path"));
var import_promises = __toModule(require("fs/promises"));
var import_front_matter = __toModule(require("front-matter"));
var import_tiny_invariant = __toModule(require("tiny-invariant"));
var import_marked = __toModule(require("marked"));
var postsPath = import_path.default.join(__dirname, "..", "posts");
function isValidPostAttributes(attributes2) {
  return attributes2 == null ? void 0 : attributes2.title;
}
async function getPost(slug) {
  const filepath = import_path.default.join(postsPath, slug + ".md");
  const file = await import_promises.default.readFile(filepath);
  const { attributes: attributes2, body } = (0, import_front_matter.default)(file.toString());
  (0, import_tiny_invariant.default)(isValidPostAttributes(attributes2), `Post ${filepath} is missing attributes`);
  const html = (0, import_marked.marked)(body);
  console.log(html);
  return { slug, html, title: attributes2.title };
}

// route-module:/Volumes/βτεsηΘω./Projects/CNXT/cnxt/app/routes/posts/$slug.tsx
var import_tiny_invariant2 = __toModule(require("tiny-invariant"));
var loader = async ({ params }) => {
  (0, import_tiny_invariant2.default)(params.slug, "expected params.slug");
  return getPost(params.slug);
};
function PostSlug() {
  const post = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "text-center text-md"
  }, /* @__PURE__ */ React.createElement("div", {
    dangerouslySetInnerHTML: { __html: post.html }
  }));
}

// <stdin>
var route5 = __toModule(require_mint());

// route-module:/Volumes/βτεsηΘω./Projects/CNXT/cnxt/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader2,
  meta: () => meta2
});
init_react();
var import_remix5 = __toModule(require("remix"));
var loader2 = () => {
  let data = {
    resources: [
      {
        name: "Remix Docs",
        url: "https://docs.remix.run"
      },
      {
        name: "React Router Docs",
        url: "reactrouter.com/docs"
      },
      {
        name: "Remix Discord",
        url: "https://discord.gg/VBePs6d"
      }
    ],
    demos: [
      {
        to: "demos/actions",
        name: "Actions"
      },
      {
        to: "demos/about",
        name: "Nested Routes, CSS loading/unloading"
      },
      {
        to: "demos/params",
        name: "URL Params and Error Boundaries"
      }
    ]
  };
  return (0, import_remix5.json)(data);
};
var meta2 = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
};
function Index() {
  let data = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h2", null, "Welcome to Remix!"), /* @__PURE__ */ React.createElement("p", null, "We're stoked that you're here. \u{1F973}"), /* @__PURE__ */ React.createElement("p", null, "Feel free to take a look around the code to see how Remix does things, it might be a bit different than what you\u2019re used to. When you're ready to dive deeper, we've got plenty of resources to get you up-and-running quickly."), /* @__PURE__ */ React.createElement("p", null, "Check out all the demos in this starter, and then just delete the", " ", /* @__PURE__ */ React.createElement("code", null, "app/routes/demos"), " and ", /* @__PURE__ */ React.createElement("code", null, "app/styles/demos"), " ", "folders when you're ready to turn this into your next project.")), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("h2", null, "Demos In This App"), /* @__PURE__ */ React.createElement("ul", null, data.demos.map((demo) => /* @__PURE__ */ React.createElement("li", {
    key: demo.to,
    className: "remix__page__resource"
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: demo.to,
    prefetch: "intent"
  }, demo.name)))), /* @__PURE__ */ React.createElement("h2", null, "Resources"), /* @__PURE__ */ React.createElement("ul", null, data.resources.map((resource) => /* @__PURE__ */ React.createElement("li", {
    key: resource.url,
    className: "remix__page__resource"
  }, /* @__PURE__ */ React.createElement("a", {
    href: resource.url
  }, resource.name))))));
}

// route-module:/Volumes/βτεsηΘω./Projects/CNXT/cnxt/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action,
  default: () => LoginView
});
init_react();
var import_remix6 = __toModule(require("remix"));
var import_gundb_react_auth2 = __toModule(require("@altrx/gundb-react-auth"));
var action = async ({ request }) => {
  let formData = await request.formData();
  let username = formData.get("user");
  let password = formData.get("password");
  let errors = {};
  if (!username)
    errors.user = true;
  if (!password)
    errors.passwd = true;
  if (Object.keys(errors).length) {
    return errors;
  }
  return (0, import_remix6.redirect)("tags/mint");
};
function LoginView() {
  let errors = (0, import_remix6.useActionData)();
  let transition = (0, import_remix6.useTransition)();
  const { login } = (0, import_gundb_react_auth2.useAuth)();
  async function getApp(type, value) {
    try {
      let keys;
      if (type !== "new") {
        if (typeof value === "string") {
          keys = JSON.parse(value);
        } else {
          keys = value;
        }
      }
      login(keys);
    } catch (e) {
    }
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-gray-900 w-3/4 shadow justify-items-center rounded p-8 sm:p-12 m-12",
    id: "splash"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("button", {
    className: "new-list",
    onClick: (e) => {
      getApp("new");
    }
  }, "New user"))), /* @__PURE__ */ React.createElement("h2", null, "Already have one?"), /* @__PURE__ */ React.createElement("input", {
    type: "password",
    className: "bg-gray-100 m-5 bg-opacity-20 placeholder-gray-400 text-gray-400 text-sm py-1 px-5 rounded-md outline-none w-3/4 focus:outline-none focus:ring",
    placeholder: "Paste keys here",
    name: "password",
    onChange: (e) => {
      const { target } = e;
      getApp("existing", target.value);
    }
  }));
}

// route-module:/Volumes/βτεsηΘω./Projects/CNXT/cnxt/app/routes/start.tsx
var start_exports = {};
__export(start_exports, {
  default: () => Boundaries
});
init_react();
var import_remix7 = __toModule(require("remix"));
function Boundaries() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Params"), /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "/login"
  }, /* @__PURE__ */ React.createElement("h1", null, "Login")), /* @__PURE__ */ React.createElement("p", null, "When you name a route segment with $ like", " ", /* @__PURE__ */ React.createElement("code", null, "routes/users/$userId.js"), ", the $ segment will be parsed from the URL and sent to your loaders and actions by the same name."), /* @__PURE__ */ React.createElement("h2", null, "Errors"), /* @__PURE__ */ React.createElement("p", null, "When a route throws an error in it's action, loader, or component, Remix automatically catches it, won't even try to render the component, but it will render the route's ErrorBoundary instead. If the route doesn't have one, it will bubble up to the routes above it until it hits the root."), /* @__PURE__ */ React.createElement("p", null, "So be as granular as you want with your error handling."), /* @__PURE__ */ React.createElement("h2", null, "Not Found"), /* @__PURE__ */ React.createElement("p", null, "(and other", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses"
  }, "client errors"), ")"), /* @__PURE__ */ React.createElement("p", null, "Loaders and Actions can throw a ", /* @__PURE__ */ React.createElement("code", null, "Response"), " instead of an error and Remix will render the CatchBoundary instead of the component. This is great when loading data from a database isn't found. As soon as you know you can't render the component normally, throw a 404 response and send your app into the catch boundary. Just like error boundaries, catch boundaries bubble, too."));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/tags/tag/$hash": {
    id: "routes/tags/tag/$hash",
    parentId: "root",
    path: "tags/tag/:hash",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/posts/updates": {
    id: "routes/posts/updates",
    parentId: "root",
    path: "posts/updates",
    index: void 0,
    caseSensitive: void 0,
    module: updates_exports
  },
  "routes/tags/$userId": {
    id: "routes/tags/$userId",
    parentId: "root",
    path: "tags/:userId",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/posts/$slug": {
    id: "routes/posts/$slug",
    parentId: "root",
    path: "posts/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/tags/mint": {
    id: "routes/tags/mint",
    parentId: "root",
    path: "tags/mint",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/start": {
    id: "routes/start",
    parentId: "root",
    path: "start",
    index: void 0,
    caseSensitive: void 0,
    module: start_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=/build/index.js.map

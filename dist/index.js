import { createRequire } from 'module';

createRequire(import.meta.url);
var l;
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Math.random().toString(8);

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  return l.vnode && l.vnode(l2), l2;
}

// node_modules/@quartz-community/utils/dist/index.js
function simplifySlug(fp) {
  const res = stripSlashes(trimSuffix(fp, "index"), true);
  return res.length === 0 ? "/" : res;
}
function joinSegments(...args) {
  if (args.length === 0) {
    return "";
  }
  let joined = args.filter((segment) => segment !== "" && segment !== "/").map((segment) => stripSlashes(segment)).join("/");
  const first = args[0];
  const last = args[args.length - 1];
  if (first?.startsWith("/")) {
    joined = "/" + joined;
  }
  if (last?.endsWith("/")) {
    joined = joined + "/";
  }
  return joined;
}
function endsWith(s2, suffix) {
  return s2 === suffix || s2.endsWith("/" + suffix);
}
function trimSuffix(s2, suffix) {
  if (endsWith(s2, suffix)) {
    s2 = s2.slice(0, -suffix.length);
  }
  return s2;
}
function stripSlashes(s2, onlyStripPrefix) {
  if (s2.startsWith("/")) {
    s2 = s2.substring(1);
  }
  if (!onlyStripPrefix && s2.endsWith("/")) {
    s2 = s2.slice(0, -1);
  }
  return s2;
}
function pathToRoot(slug2) {
  let rootPath = slug2.split("/").filter((x2) => x2 !== "").slice(0, -1).map((_2) => "..").join("/");
  if (rootPath.length === 0) {
    rootPath = ".";
  }
  return rootPath;
}
function resolveRelative(current, target) {
  const res = joinSegments(pathToRoot(current), simplifySlug(target));
  return res;
}

// src/script.inline.ts
var script_inline_default = 'function d(){let e=document.getElementById("random-page-btn");if(e){let n=JSON.parse(e.getAttribute("data-urls")||"[]"),t=()=>{n.length>0&&(window.location.href=n[Math.floor(Math.random()*n.length)])};e.addEventListener("click",t),window.addCleanup(()=>e.removeEventListener("click",t))}}document.addEventListener("nav",d);document.addEventListener("render",d);\n';

// src/index.tsx
var hasExcludedTag = (tags, excludedTags) => {
  const pageTags = Array.isArray(tags) ? tags : typeof tags === "string" ? [tags] : [];
  return pageTags.some((tag) => typeof tag === "string" && excludedTags.has(tag));
};
var hasExcludedPath = (slug2, excludedPrefixes) => {
  const normalizedSlug = slug2.replace(/^\/+/, "");
  return excludedPrefixes.some((prefix) => {
    const normalizedPrefix = prefix.replace(/^\/+|\/+$/g, "");
    return normalizedSlug === normalizedPrefix || normalizedSlug.startsWith(`${normalizedPrefix}/`);
  });
};
var RandomPage = (options = {}) => {
  const excludedTags = new Set(options.excludeTags ?? []);
  const excludedPrefixes = options.excludePathPrefixes ?? [];
  const Component = ({ fileData, allFiles }) => {
    const validSlugs = allFiles.filter(
      (f3) => f3.slug && f3.slug !== "404" && !hasExcludedTag(f3.frontmatter?.tags, excludedTags) && !hasExcludedPath(f3.slug, excludedPrefixes)
    ).map((f3) => resolveRelative(fileData.slug, f3.slug));
    return /* @__PURE__ */ u2("button", { id: "random-page-btn", "data-urls": JSON.stringify(validSlugs), children: "Surprise Me!" });
  };
  Component.afterDOMLoaded = script_inline_default;
  return Component;
};
var src_default = RandomPage;

export { src_default as default };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
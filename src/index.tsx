import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types";
import { resolveRelative } from "@quartz-community/utils";
import type { RandomPageOptions } from "./types";
// @ts-expect-error - inline script import handled by Quartz bundler
import script from "./script.inline.ts";

const hasExcludedTag = (tags: unknown, excludedTags: Set<string>): boolean => {
  const pageTags = Array.isArray(tags) ? tags : typeof tags === "string" ? [tags] : [];
  return pageTags.some((tag) => typeof tag === "string" && excludedTags.has(tag));
};

const hasExcludedPath = (slug: string, excludedPrefixes: string[]): boolean => {
  const normalizedSlug = slug.replace(/^\/+/, "");
  return excludedPrefixes.some((prefix) => {
    const normalizedPrefix = prefix.replace(/^\/+|\/+$/g, "");
    return normalizedSlug === normalizedPrefix || normalizedSlug.startsWith(`${normalizedPrefix}/`);
  });
};

const RandomPage: QuartzComponentConstructor<RandomPageOptions> = (options = {}) => {
  const excludedTags = new Set(options.excludeTags ?? []);
  const excludedPrefixes = options.excludePathPrefixes ?? [];

  const Component: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
    const validSlugs = allFiles
      .filter(
        (f) =>
          f.slug &&
          f.slug !== "404" &&
          !hasExcludedTag(f.frontmatter?.tags, excludedTags) &&
          !hasExcludedPath(f.slug, excludedPrefixes),
      )
      .map((f) => resolveRelative(fileData.slug!, f.slug!));

    return (
      <button id="random-page-btn" data-urls={JSON.stringify(validSlugs)}>
        Surprise Me!
      </button>
    );
  };

  Component.afterDOMLoaded = script;
  return Component;
};

export default RandomPage;

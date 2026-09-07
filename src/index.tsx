import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types"
import { resolveRelative } from "@quartz-community/utils"
// @ts-expect-error - inline script import handled by Quartz bundler
import script from "./script.inline.ts"

const RandomPage: QuartzComponentConstructor = () => {
  const Component: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
    const validSlugs = allFiles
      .filter((f) => f.slug && f.slug !== "404")
      .map((f) => resolveRelative(fileData.slug!, f.slug!))

    return (
      <button id="random-page-btn" data-urls={JSON.stringify(validSlugs)}>
        Surprise Me!
      </button>
    )
  }

  Component.afterDOMLoaded = script
  return Component
}

export default RandomPage

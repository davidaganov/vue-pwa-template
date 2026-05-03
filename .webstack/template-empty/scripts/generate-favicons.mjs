import { favicons } from "favicons"
import fs from "fs/promises"
import path from "path"

const source = "public/favicon.src.png"
const dest = "public/favicons"

const configuration = {
  path: "/favicons/",
  appName: "Vue PWA Template",
  appShortName: "VuePWA",
  appDescription: "A modern Vue 3 PWA template with offline support",
  background: "#ffffff",
  theme_color: "#42b883",
  manifestMaskable: true,
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: false,
    favicons: true,
    windows: true,
    yandex: true
  }
}

async function generate() {
  try {
    console.log(`Generating favicons from ${source}...`)

    await fs.mkdir(dest, { recursive: true })

    try {
      await fs.access(source)
    } catch (e) {
      console.error(
        `Error: Source file ${source} not found. Please place your master icon there.`
      )
      return
    }

    const response = await favicons(source, configuration)

    const KEEP_IMAGES = [
      "favicon.ico",
      "favicon-16x16.png",
      "favicon-32x32.png",
      "favicon-48x48.png",
      "apple-touch-icon.png",
      "apple-touch-icon-120x120.png",
      "apple-touch-icon-152x152.png",
      "apple-touch-icon-167x167.png",
      "apple-touch-icon-180x180.png",
      "android-chrome-192x192.png",
      "android-chrome-512x512.png",
      "mstile-70x70.png",
      "mstile-144x144.png",
      "mstile-150x150.png",
      "mstile-310x310.png"
    ]

    for (const image of response.images) {
      if (KEEP_IMAGES.includes(image.name)) {
        await fs.writeFile(path.join(dest, image.name), image.contents)
        console.log(`Generated: ${image.name}`)
      }
    }

    for (const file of response.files) {
      let fileName = file.name
      if (fileName === "manifest.webmanifest") fileName = "site.webmanifest"

      if (fileName === "site.webmanifest") {
        const manifest = JSON.parse(file.contents)
        manifest.icons = manifest.icons.filter((icon) =>
          ["192x192", "512x512"].includes(icon.sizes)
        )
        await fs.writeFile(
          path.join(dest, fileName),
          JSON.stringify(manifest, null, 2)
        )
        console.log(`Generated: ${fileName} (filtered)`)
      } else {
        await fs.writeFile(path.join(dest, fileName), file.contents)
        console.log(`Generated: ${fileName}`)
      }
    }

    console.log("Favicons generated successfully! (Optimized set)")
  } catch (error) {
    console.error("Error generating favicons:", error)
  }
}

generate()

import glob from 'fast-glob'
import * as path from 'path'

async function importMedia(mediaItemFileName) {
  let { meta, default: component } = await import(
    `../pages/media/${mediaItemFileName}`
  )
  return {
    slug: mediaItemFileName.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllMedia() {
  let mediaFileNames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/media'),
  })

  let media = await Promise.all(mediaFileNames.map(importMedia))

  return media.sort((a, z) => new Date(z.date) - new Date(a.date))
}

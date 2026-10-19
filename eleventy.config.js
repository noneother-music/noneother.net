import path from 'node:path'
import * as sass from 'sass'

async function compileSass(inputContent, inputPath) {
  const parsedPath = path.parse(inputPath)
  if (parsedPath.name.startsWith('_')) { return }
  const result = sass.compileString(inputContent, {
    loadPaths: [
      parsedPath.dir || '.',
      this.config.dir.includes,
    ]
  })
  this.addDependencies(inputPath, result.loadedUrls)
  return async () => result.css
}

export default function (config)
{
  config.addExtension('scss', {
    outputFileExtension: 'css',
    useLayouts: false,
    compile: compileSass
  })

  config.addPassthroughCopy('_src/favicon.svg')
  config.addPassthroughCopy('_src/script.js')
  config.addPassthroughCopy('_src/assets')
  config.addPassthroughCopy('_src/tristris')

  config.addWatchTarget('_src/styles/')
  config.addWatchTarget('_src/*.js')

  config.addCollection('portfolio', async collection => {
    return collection.getFilteredByGlob('./_src/portfolio/*')
      .filter(entry => !entry.data.draft)
      .sort((a, b) => b.date - a.date) // reverse chornologic order
  })

  return {
    dir: {
      input: '_src',
      output: '_site',
      includes: '_includes',
      layouts: '_layouts'
    },
    dataTemplateEngine: 'liquid',
    htmlTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid',
    templateFormats: [ 'scss', 'html', 'md', 'njk' ],
  }
}

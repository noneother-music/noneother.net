export default function (config) {
  return {
    layout: 'portfolio-entry.html',
    tags: ['portfolio'],
    permalink: data => `/portfolio/${data.page.fileSlug}/`
  }
}

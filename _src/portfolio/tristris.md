---
title: Tristris
date: 2017-07-01
tags: portfolio
fileSlug: tristris
image:
  url: /assets/images/portfolio/tristris/tristris.png
  alt: The Tristris title screen
---

{%-
  include "media/media.html",
  type: "image",
  url: image.url,
  alt: image.alt
-%}

A Tetris clone written in JavaScript + WebGL &mdash; currently runs best in Firefox 157 or newer (see known issues below)! If you want to try it out, check the controls below then click <a href="/tristris" target="_blank">here!</a>

### Controls

- Move: `←`, `↑`, `→`, `↓`
- Slam: `Space`
- Hold: `Shift`
- Pause: `P`
- Mute music: `M`
- Skip track: `S`

### Attributions

Music used includes songs from the album **8-bit Run 'n Pun**, written by **Ozzed**, and provided under a Creative Commons license (CC BY-SA). You can find a copy of this amazing album for yourself at [OZZED.net](http://ozzed.net/music/8-bit-run-and-pun.shtml).

### Known Issues

- `Shift` key presses not registered in some browsers
- Sound may not work in Brave or in browsers with autoplay disabled

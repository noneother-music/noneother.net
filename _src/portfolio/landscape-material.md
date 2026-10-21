---
title: Procedural landscape material
date: 2026-08-30
tags: portfolio
fileSlug: landscape-material
asset_dir: /assets/images/portfolio/landscape-material
image:
  url: /assets/images/portfolio/landscape-material/04-foliage-pcg.png
  alt: Landscape material
---

This entry features the procedural landscape material I made while following the *UE5: Step-by-Step Landscape Material* course on YouTube, which includes over 11 hours of instruction by UnrealityBites.

{%-
  render "media/media.html",
  type: "figure",
  url: "/assets/images/portfolio/landscape-material/01-heightmap-terrain+slope-based-material-masking.png",
  alt: "Procedurally generated terrain with slope-based material masking",
  caption: "Fig. 1 - Procedurally generated terrain using heightmap and slope-based material masking."
-%}

First, a heightmap was used to generate the landscape before creating a basic material using the terrain's slope to mask between several different base materials &mdash; namely ground, mid-low (grass), mid-high (rocks), and cliffs.

{%-
  render "media/media.html",
  type: "figure",
  url: "/assets/images/portfolio/landscape-material/02-snow+texture-colour-and-tiling-variation.png",
  alt: "Added snow material and ground texture variation",
  caption: "Fig. 2 - Added snow material and ground texture variation."
-%}

Next, an elevation dependent snow layer was added, followed by variation in the ground material by way of texture tiling and colour variation. Tiling varies by rotation and scaling and is dependent on camera distance.

{%-
  render "media/media.html",
  type: "figure",
  url: "/assets/images/portfolio/landscape-material/03-top-down-vs-triplanar-texture-projection.png",
  alt: "Top-down vs triplanar texture projection",
  caption: "Fig. 3 - Top-down (left) vs triplanar (right) texture projection."
-%}

Triplanar projection mapping was added to the cliff material, which reduces texture skew, but at a cost of three times the number of texture lookups (i.e. one per axis).

{%-
  render "media/media.html",
  type: "figure",
  url: "/assets/images/portfolio/landscape-material/04-foliage-pcg.png",
  alt: "Puddles and PCG foliage and rock placement",
  caption: "Fig. 4 - Added puddles and used PCG for rock and foliage placement."
-%}

Puddles were added to the ground layer using a noise texture for masking, then setting the specularity to 1.0 and the normal to the positive z-axis for regions with puddles. PCG was also set up for procedural placement of rocks and foliage within the grass layer.

{%-
  render "media/media.html",
  type: "figure",
  url: "/assets/images/portfolio/landscape-material/05-layer-painting-with-exclusion-zone-for-pcg-content.png",
  alt: "Layer painting with exclusion zone for PCG content",
  caption: "Fig. 5 - Layer painting with exclusion zone for PCG content."
-%}

A landscape paint layer was set up for manually painting footpaths. This layer was then used to filter out PCG content within the painted regions.

{%-
  render "media/media.html",
  type: "figure",
  url: "/assets/images/portfolio/landscape-material/06-using-rvts-to-blend-between-ground-and-foliage.png",
  alt: "RVTs used to blend between ground and foliage colour",
  caption: "Fig. 6 - RVTs used to blend between ground and foliage colour (right) vs without (left)."
-%}

A runtime virtual texture was set up for projecting the ground texture onto. The RVT was then used to blend between the ground and foliage colour.

{%-
  render "media/media.html",
  type: "figure",
  url: "/assets/images/portfolio/landscape-material/07-improved-rvts-using-accurate-normals.png",
  alt: "Improved RVTs using normal blending",
  caption: "Fig. 7 - Improved RVT using normal blending (right) vs without RVT blending (left)."
-%}

RVT blending was then improved by adding normal blending, including the option to toggle between projected and world space normals.

{%-
  render "media/media.html",
  type: "figure",
  url: "/assets/images/portfolio/landscape-material/08-nanite-height-displacement-exaggerated.png",
  alt: "Nanite height displacement (exaggerated)",
  caption: "Fig. 8 - Nanite height displacement on ground texture (exaggerated)."
-%}

Nanite height displacement was added to improve ground texture, although the required processing overhead outweighed the benefits in my opinion.

{%-
  render "media/media.html",
  type: "figure",
  url: "/assets/images/portfolio/landscape-material/09-texture-variation-using-noise-map-to-blend-between-two-ground-materials.png",
  alt: "Noise map texture variation",
  caption: "Fig. 9 - Before and after using a noise map to vary between two ground materials."
-%}

Additional texture variation was added to the ground material by way of a noise map used to mix between two different materials.

{%-
  render "media/media.html",
  type: "figure",
  url: "/assets/images/portfolio/landscape-material/10-ambient-occlusion-on-ground-material.png",
  alt: "Ambient occlusion on ground material",
  caption: "Fig. 10 - Before and after adding ambient occlusion to ground material."
-%}

Ambient occlusion was also added to the ground material, which helps give a better sense of depth.

{%-
  render "media/media.html",
  type: "figure",
  url: "/assets/images/portfolio/landscape-material/11-using-roughness-map+constant-specularity-to-create-wetness-effect.png",
  alt: "Roughness map plus constant specularity to create wetness effect",
  caption: "Fig. 11 - Using a roughness map with constant specularity to create a wet ground effect. Here we see the specularity set to different values (top-left: 0, top-right: -0.01, bottom-left: 0.05, bottom-right: 0.15) with a fixed bias applied to the roughness (all: -0.25)."
-%}

Finally, a ground roughness texture was used in combination with a constant specularity setting to create a sense of wetness for the ground material. Only small values of specularity were are required before the ground begins to appear completely saturated.

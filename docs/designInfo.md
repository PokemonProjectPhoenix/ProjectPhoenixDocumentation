---
id: designInfo
title: Design Choices and Information
---

There are a lot of GameObjects and Components in the Project Phoenix framework. This doc will guide you through them.

### Map Handling
Maps are GameObjects with a **Map Controller** Component and a size of _preferrably_ `32x32`. Every _Map Controller_ has a Biome, a Weather (can be changed in runtime, but will only update after *re-entering* the map), two background music references, one for Day and one for Night, and a List of **Neighbours**. The default Neighbour is a _void_ map based on the chosen _Biome_ (i.e. a new Map with a **Forest** Biome will have only the _"void\_Trees"_ as neighbour, for all four neighbours).
Being that there are only _four_ Neighbours, the diagonal Neighbour of a map will be retrieved from an adjacent Neighbour (either Up, Down, Left or Right).

<table>
  <tr>
    <td><center><b>Top Left Map</b><br />(Retrieved from either the Top Map or the Left Map)</center></td>
    <td><center><b>Top Map</b><br />(Retrieved from the Center Map)</center></td>
    <td><center><b>Top Right Map</b><br />(Retrieved from either the Top Map or the Right Map)</center></td>
  </tr>
  <tr>
    <td><center><b>Left Map</b><br />(Retrieved from the Center Map)</center></td>
    <td><center><b>Center Map</b></center></td>
    <td><center><b>Right Map</b><br />(Retrieved from the Center Map)</center></td>
  </tr>
  <tr>
    <td><center><b>Bottom Left Map</b><br />(Retrieved from either the Bottom Map or the Left Map)</center></td>
    <td><center><b>Bottom Map</b><br />(Retrieved from the Center Map)</center></td>
    <td><center><b>Bottom Right Map</b><br />(Retrieved from either the Bottom Map or the Right Map)</center></td>
  </tr>
</table>

This way you should always have a maximum of **9** maps at once while you're playing, greatly improving performace. Only maps that weren't previously in the scene gets instantiated when changing Maps, allowing for a lower impact on performance when moving between them.

### Camera Handling
Project Phoenix uses a _combo_ of the **Cinemachine** package and render textures. Cinemachine allows for great camera handling, including Cutscenes, and the Render Textures are an easy way to keep the game looking good at multiple resolutions, providing an image without pixel-stretching. **Transitions** are also handled through the Render texture, and are made to work with grayscale cutoff.

### Resolution
The framework was developed to work with a standard `384x216`, being large enough to show enough information and scaling perfectly into 1080p.

### 
# 🌯 Shaverma is a collection of utility classes that make layouts simpler

It came from one project to another, as a tail that was pulled out from a codebase, so it was called `hvost`, which is `tail` in Russian. I quickly understood that I could not live without `hvost`, and what I can't also live without is Shaverma, aka Asian burrito. So, behold ✨

Shaverma is written in styl, is modular and doesn't fight with existing stylesheets.

## What's inside

* rules that gently make elements' look uniform across platforms but don't reset default styles;
* common animations with classes `.rotate`, `.rotateccw`, `.wiggle`, `.shake`, `.popout`, `.appear`.
* tons of modifiers like `.nopaddingleft` with shorthands, for box layout, text, colors;
* ye olde 12-column float-based grid with flex support, with 10-column and 9-column grids as well. Configurable gutter width with `$gutterWidth`;
* utility classes for flex, with `.flexfix` collection to create beautiful modals, full-height pages, and scrolling containers;
* handy classes like `.hideon640` and `.breakon1024` to quickly create responsive layouts;
* perfect containers for videos and other embeds with 16:9, 21:9, 4:3 and 2:1 ratios with `.video` class.

## Usage

Full weight: ~9.5kb minified.

### The stylus-way 🔮

Till there is no npm module yet, a good way of embedding Shaverma into your project is making it a git submodule (assuming you have a `stylus/3rdparty` folder):

```sh
git submodule add https://github.com/CosmoMyzrailGorynych/shaverma.git ./stylus/3rdparty/shaverma
```

```css
/* in your ./stylus/index.styl */

@require './shaverma/index.styl'
```

Or include particular files (better approach for websites):

```css
/* in your ./stylus/index.styl */

@require './shaverma/lib/boxes.styl'
@require './shaverma/lib/textFormatting.styl'
@require './shaverma/lib/flex.styl'
@require './shaverma/lib/responsiveness.styl'
```

### The css-way

Download `shaverma.min.css` from the `dist` folder, put to your `css` folder, and link it to your html page:

```
<link rel="stylesheet" href="/css/shaverma.min.css"></link>
```

## Development

```sh
npm install
gulp
```
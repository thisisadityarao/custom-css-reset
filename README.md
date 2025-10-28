# Custom CSS Reset

This project takes inspiration from some well known and other lesser known
resets, like:

- Josh Comeau's [modern CSS reset](https://www.joshwcomeau.com/css/custom-css-reset/)
- Andy Bell a (more) [modern CSS reset](https://piccalil.li/blog/a-more-modern-css-reset/)
- Chris Coyer [CSS Starter](https://frontendmasters.com/blog/the-coyier-css-starter/)
- Jen Simmon's [CSS Remedy](https://github.com/jensimmons/cssremedy)
- and more...

Everyone has their opinion on what should be included in a **reset**. Every ruleset that is part of this reset, is there to override the user-agent styles and provide a baseline styles that improves the UX (user experience) across user-agents. I have not included certain rulesets, which I think, although useful, should not be part of a reset; like `.sr-only {}` or `.visually-hidden {}` set of declarations. They should be part of helper class utilities.

## Installation

```bash
npm install --save @aditya_r/css-reset.css
```

or

```bash
yarn add @aditya_r/css-reset.css
```

## Download

```txt
https://raw.githubusercontent.com/thisisadityarao/custom-css-reset/refs/heads/main/src/reset.css
```

## CDN

### UNPKG

```txt
https://unpkg.com/@aditya_r/css-reset/dist/reset.min.css
```

### jsDelivr

```txt
https://cdn.jsdelivr.net/npm/@aditya_r/css-reset@0.0.3/dist/reset.min.css
```

## License

MIT © Aditya Rao

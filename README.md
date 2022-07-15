# ember-assembly

Currently WIP.

A collection of UI components built by [Goods](https://www.goods.co.uk).

## Installation

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v12 or above

## Installation

```
ember install ember-assembly
```

## Usage

See components full list of components.

By default the base scale is 5px. This can be adjusted by setting the value in `environment.js`.

Example

```

module.exports = function (environment) {
  let ENV = {
    ...,
    "ember-assembly": {
      layout: {
        "base-scale": 8,
      },
    },
    ...
  }
```

## Theming

Theming is managed through CSS variables.

- Palette variables live in `/addon/styles/palette.css`
- Typography variables live in `/addon/styles/palette.css`
- Component specific variables live in the component css

## License

This project is licensed under the [MIT License](LICENSE.md).

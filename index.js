"use strict";

let typography = {};
typography.display = `"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
typography.ui = `"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
typography.mono = `"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace`;

let layout = {};
module.exports = {
  name: require("./package").name,

  isDevelopingAddon() {
    return true;
  },

  included() {
    let config = this.project.config()["ember-assembly"] || {};
    let virtualModules = Object.assign(
      {},
      { typography: typography, palette: {}, layout: layout },
      config.styles
    );

    this.options = Object.assign({}, this.options, {
      cssModules: { virtualModules: virtualModules }
    });

    this._super.included.apply(this, arguments);
  }
};

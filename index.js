"use strict";

let typography = {};
typography.display = `"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
typography.ui = `"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
typography.mono = `"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace`;

let layout = {};
layout["scale-1"] = "2px";
layout["scale-2"] = "4px";
layout["scale-3"] = "8px";
layout["scale-4"] = "16px";
layout["scale-5"] = "32px";
layout["scale-6"] = "64px";
layout["scale-7"] = "128px";
layout["scale-8"] = "256px";
layout["scale-9"] = "512px";
layout["scale-10"] = "1024px";

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

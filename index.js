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

let palette = {};
palette["neutral-tint"] = "#F9F9FB";
palette["neutral-lightest"] = "#F5F6F7";
palette["neutral-light"] = "#E4E7EB";
palette["neutral-base"] = "#3c4346";
palette["neutral-dark"] = "#234361";

palette["blue-tint"] = "rgba(67, 91, 200, 0.14)";
palette["blue-lightest"] = "#f8f9fb";
palette["blue-light"] = "#eef0f5";
palette["blue-base"] = "#435BC8";
palette["blue-dark"] = "#1d36a2";

palette["red-tint"] = "rgba(236, 76, 71, 0.4)";
palette["red-lightest"] = "#FEF6F6";
palette["red-light"] = "#FAE2E2";
palette["red-base"] = "#e22525";
palette["red-dark"] = "#bb1414";

palette["yellow-tint"] = "rgba(238, 153, 19, 0.4)";
palette["yellow-lightest"] = "#FEF8E7";
palette["yellow-light"] = "#FBE6A2";
palette["yellow-base"] = "#f5be58";
palette["yellow-dark"] = "#e2a228";

palette["green-tint"] = "rgba(35, 194, 119, 0.4)";
palette["green-lightest"] = "#F1FAF5";
palette["green-light"] = "#D4EEE2";
palette["green-base"] = "#47B881";
palette["green-dark"] = "#00783E";

/* Scales */
palette["neutral-n0"] = "#ffffff";
palette["neutral-n1"] = "#F9F9FB";
palette["neutral-n2"] = "#F5F6F7";
palette["neutral-n3"] = "#EDF0F2";
palette["neutral-n4"] = "#E4E7EB";
palette["neutral-n5"] = "#C7CED4";
palette["neutral-n6"] = "#A6B1BB";
palette["neutral-n7"] = "#7B8B9A";
palette["neutral-n8"] = "#66788A";
palette["neutral-n9"] = "#425A70";
palette["neutral-n10"] = "#234361";

palette["neutral-n1a"] = "rgba(67, 90, 111, 0.04)";
palette["neutral-n2a"] = "rgba(67, 90, 111, 0.06)";
palette["neutral-n3a"] = "rgba(67, 90, 111, 0.09)";
palette["neutral-n4a"] = "rgba(67, 90, 111, 0.14)";
palette["neutral-n5a"] = "rgba(67, 90, 111, 0.3)";
palette["neutral-n6a"] = "rgba(67, 90, 111, 0.47)";
palette["neutral-n7a"] = "rgba(67, 90, 111, 0.7)";
palette["neutral-n8a"] = "rgba(67, 90, 111, 0.81)";

palette["blue-b1"] = "#FBFCFD";
palette["blue-b2"] = "#f7f9fb";
palette["blue-b3"] = "#ECEEF3";

palette["blue-b1a"] = "rgba(67, 91, 200, 0.04)";
palette["blue-b2a"] = "rgba(67, 91, 200, 0.06)";
palette["blue-b3a"] = "rgba(67, 91, 200, 0.09)";
palette["blue-b4a"] = "rgba(67, 91, 200, 0.14)";
palette["blue-b5a"] = "rgba(67, 91, 200, 0.3)";
palette["blue-b6a"] = "rgba(67, 91, 200, 0.47)";
palette["blue-b7a"] = "rgba(67, 91, 200, 0.7)";
palette["blue-b8a"] = "rgba(67, 91, 200, 0.81)";

palette["white-w1a"] = "rgba(256, 256, 256, 0.04)";
palette["white-w2a"] = "rgba(256, 256, 256, 0.06)";
palette["white-w3a"] = "rgba(256, 256, 256, 0.09)";
palette["white-w4a"] = "rgba(256, 256, 256, 0.14)";
palette["white-w5a"] = "rgba(256, 256, 256, 0.3)";
palette["white-w6a"] = "rgba(256, 256, 256, 0.47)";
palette["white-w7a"] = "rgba(256, 256, 256, 0.7)";
palette["white-w8a"] = "rgba(256, 256, 256, 0.81)";

palette["black-b1a"] = "rgba(0, 0, 0, 0.04)";
palette["black-b2a"] = "rgba(0, 0, 0, 0.06)";
palette["black-b3a"] = "rgba(0, 0, 0, 0.09)";
palette["black-b4a"] = "rgba(0, 0, 0, 0.14)";
palette["black-b5a"] = "rgba(0, 0, 0, 0.3)";
palette["black-b6a"] = "rgba(0, 0, 0, 0.47)";
palette["black-b7a"] = "rgba(0, 0, 0, 0.7)";
palette["black-b8a"] = "rgba(0, 0, 0, 0.81)";

/* Functional colours */
palette["border-muted"] = palette["neutral-n3"];
palette["border-default"] = palette["neutral-light"];
palette["border-error"] = palette["red-base"];

palette["text-muted"] = palette["neutral-n8"];
palette["text-default"] = palette["neutral-base"];
palette["text-dark"] = palette["neutral-dark"];
palette["text-danger"] = palette["red-dark"];

palette["icon-danger"] = palette["red-base"];

/* Intents */
palette["intent-none"] = palette["blue-base"];
palette["intent-success"] = palette["green-base"];
palette["intent-danger"] = palette["red-base"];
palette["intent-warning"] = palette["yellow-base"];

module.exports = {
  name: require("./package").name,

  isDevelopingAddon() {
    return true;
  },

  included() {
    let config = this.project.config()["ember-assembly"] || {};

    let virtualModules = {
      typography: Object.assign({}, typography, config.styles.typography),
      palette: Object.assign({}, palette, config.styles.palette),
      layout: Object.assign({}, layout, config.styles.layout)
    };

    this.options = Object.assign({}, this.options, {
      cssModules: { virtualModules: virtualModules }
    });

    this._super.included.apply(this, arguments);
  }
};

"use strict";

const EmberAddon = require("ember-cli/lib/broccoli/ember-addon");

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    cssModules: {
      headerModules: [
        "ember-assembly/styles/palette",
        "ember-assembly/styles/typography",
      ],
    },
  });

  return app.toTree();
};

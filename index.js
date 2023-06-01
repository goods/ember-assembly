'use strict';

let layout = {};
layout['base-scale'] = 5; // Base scale in px

module.exports = {
  name: require('./package').name,

  config(environment, appConfig) {
    let initialConfig = Object.assign({}, appConfig);
    let updatedConfig = this.addons.reduce((config, addon) => {
      if (addon.config) {
        Object.assign(config, addon.config(environment, config));
      }
      return config;
    }, initialConfig);
    return updatedConfig;
  },

  isDevelopingAddon() {
    return true;
  },

  included() {
    let config = this.project.config()['ember-assembly'] || { styles: {} };

    let virtualModules = {
      layout: Object.assign({}, layout, config.styles.layout),
    };

    this.options = Object.assign({}, this.options, {
      cssModules: {
        virtualModules,
        plugins: [
          require('postcss-functions')({
            functions: {
              scale: function (value) {
                return value * virtualModules['layout']['base-scale'] + 'px';
              },
            },
          }),
        ],
      },
    });

    this._super.included.apply(this, arguments);
  },
};

import { App } from 'vue';
import Plausible from 'plausible-tracker';
import { PlausibleModuleOptions } from './module-options';

export const Vue3Plausible = {
  /**
   * Install the plugin
   * @param app The Vue app instance
   * @param options The plugin options
   * @returns void
   * @example
   * ```ts
   * import { createApp } from 'vue';
   * import { Vue3Plausible } from 'vue3-plausible';
   * import App from './App.vue';
   * 
   * createApp(App)
   *  .use(Vue3Plausible, {
   *    domain: 'example.com',
   *    enableAutoPageviews: true,
   *    enableAutoOutboundTracking: true,
   * })
   * .mount('#app');
   * ```
   * @see {@link PlausibleModuleOptions}
   * @see {@link Plausible}
   */
  install: (app: App, options: PlausibleModuleOptions) => {
    const plausible = Plausible(options);

    if (options.enableAutoPageviews) {
      plausible.enableAutoPageviews();
    }
    if (options.enableAutoOutboundTracking) {
      plausible.enableAutoOutboundTracking();
    }

    app.config.globalProperties.$plausible = plausible;
  }
}

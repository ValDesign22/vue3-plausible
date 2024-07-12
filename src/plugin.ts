import Plausible from 'plausible-tracker';
import type { PluginOptions, ReturnUsePlausible } from './types';
import type { App } from 'vue';
import { inject } from 'vue'

interface ScriptLoaderOption extends Partial<HTMLScriptElement> {
  'data-domain': string;
}

function loadScript(source: string, options: ScriptLoaderOption = {} as ScriptLoaderOption) {
  return new Promise((resolve, reject) => {
    const head = document.head || document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    const {
      src,
      type = 'text/javascript',
      defer = false,
      async = false,
      ...restAttrs
    } = options;
    script.type = type;
    script.defer = defer;
    script.async = async;
    script.src = src || source;
    script.setAttribute('data-domain', options['data-domain']);

    Object.keys(restAttrs).forEach((attr) => {
      (script as any)[attr] = (restAttrs as any)[attr];
    });

    head.appendChild(script);
    script.onload = resolve;
    script.onerror = reject;
  });
}

export function createPlausible(options: PluginOptions) {
  const plausible = {
    install(app: App): void {
      const plausibleOptions = {
        ...options.init,
        apiHost: 'https://plausible.io',
        enableAutoPageviews: true,
      } as PluginOptions['init'];
      const plausibleInstance = Plausible(plausibleOptions);

      if (options.settings.enableAutoOutboundTracking)
        plausibleInstance.enableAutoOutboundTracking();
      if (options.settings.enableAutoPageviews)
        plausibleInstance.enableAutoPageviews();

      loadScript(`${plausibleOptions.apiHost}/js/script.js`, {
        'defer': true,
        'data-domain': plausibleOptions.domain || 'https://plausible.io',
      });

      app.config.globalProperties.$plausible = plausibleInstance;
      app.provide('$plausible', plausibleInstance);
    }
  }
  return plausible;
}

export function usePlausible() {
  const plausible = inject('$plausible') as ReturnUsePlausible;

  return {
    ...plausible,
  }
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $plausible: ReturnType<typeof Plausible>;
  }
}

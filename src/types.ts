import Plausible, { PlausibleOptions } from 'plausible-tracker';

export type IPlausible = typeof Plausible;
export type ReturnUsePlausible = Omit<
  ReturnType<typeof Plausible>,
  'enableAutoPageviews' | 'enableAutoOutboundTracking'
>;

export interface SettingsOptions {
  /**
   * Enables automatic pageview tracking
   * @default false
   * @see https://github.com/plausible/plausible-tracker
   * @type boolean
   */
  enableAutoPageviews?: boolean

  /**
   * Enables automatic outbound link tracking
   * @default false
   * @see https://plausible.io/docs/outbound-link-click-tracking
   * @type boolean
   */
  enableAutoOutboundTracking?: boolean
}

export interface PluginOptions {
  /**
   * Plausible options
   * @type PlausibleOptions
   */
  init: PlausibleOptions

  /**
   * Plugin options
   * @type InstallOptions
   */
  settings: SettingsOptions
}

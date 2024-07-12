import { PlausibleInitOptions } from 'plausible-tracker/build/module/lib/tracker';

export declare type PlausibleModuleOptions = PlausibleInitOptions & {
  /**
   * If true, pageviews will be tracked automatically.
   */
  readonly enableAutoPageviews?: boolean;
  
  /**
   * If true, outbound link clicks will be tracked automatically
   */
  readonly enableAutoOutboundTracking?: boolean;
}

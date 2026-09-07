import { QuartzComponent } from '@quartz-community/types';
export { default as RandomPage } from '../index.js';
export { RandomPageOptions } from '../types.js';

interface ExampleComponentOptions {
    prefix?: string;
    suffix?: string;
    className?: string;
}
declare const _default: (opts?: ExampleComponentOptions) => QuartzComponent;

export { _default as ExampleComponent, type ExampleComponentOptions };

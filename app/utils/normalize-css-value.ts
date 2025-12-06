import type { CssValueType } from '../types/css-value.type';

/**
 * Normalizes CSS value to string format
 * @param value - CSS value as string or number
 * @returns Normalized CSS value as string
 */
export const normalizeCssValue = (value: CssValueType): string => {
    return typeof value === 'number' ? `${value}px` : value;
};


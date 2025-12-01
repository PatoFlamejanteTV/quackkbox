
// Copyright (c) John Nesky and contributing authors, distributed under the MIT license, see accompanying the LICENSE.md file.

// Debounce function to limit the rate of function execution
export function debounce(func: (...args: any[]) => void, wait: number): (...args: any[]) => void {
    let timeout: any;
    return function(this: any, ...args: any[]): void {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

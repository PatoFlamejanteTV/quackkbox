
// Copyright (c) John Nesky and contributing authors, distributed under the MIT license, see accompanying the LICENSE.md file.

// Debounce function to limit the rate of function execution
export function debounce<T extends (...args: any[]) => void>(func: T, wait: number): T & { cancel: () => void } {
    let timeout: ReturnType<typeof setTimeout> | undefined;

    const debounced = function(this: any, ...args: Parameters<T>): void {
        clearTimeout(timeout);
        if (wait > 0) {
            timeout = setTimeout(() => func.apply(this, args), wait);
        } else {
            func.apply(this, args);
        }
    } as T & { cancel: () => void };

    debounced.cancel = function(): void {
        clearTimeout(timeout);
    };

    return debounced;
}

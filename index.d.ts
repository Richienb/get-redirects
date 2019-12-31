/**
 * Get the urls redirected to when loading a url.
 * @param url The URL to check.
 * @example
 * ```
 * const getRedirects = require("get-redirects");
 *
 * (async () => {
 *     await getRedirects("https://google.com")
 *     //=> ['https://www.google.com/']
 *
 *     await getRedirects("http://richienb.github.io")
 *     //=> ['http://www.richie-bendall.ml/', 'https://www.richie-bendall.ml/']
 * })()
 * ```
*/
declare function getRedirects(url: string): Promise<string[]>;

export = getRedirects;

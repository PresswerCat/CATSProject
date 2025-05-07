export class UrlHelper {
    static toAssetHref(url: string): string {
        return new URL(url, import.meta.url).href;
    }
}
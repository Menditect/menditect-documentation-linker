export function openWindow(link: string | undefined): void {
    if (!!window) {
      window.open(link, "_blank");
    }
}
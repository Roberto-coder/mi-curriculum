export { };

declare global {
    interface Window {
        gtag: (option: string, gaTrackingId: string, options: Record<string, any>) => void;
    }
}

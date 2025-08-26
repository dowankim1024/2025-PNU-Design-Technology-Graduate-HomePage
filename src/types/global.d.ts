// Global type augmentation for Google Maps loaded via script tag
/// <reference types="google.maps" />
export {};

declare global {
  interface Window {
    // Google Maps SDK 전역 객체(로드 전에는 undefined)
    google?: typeof google;
  }
}

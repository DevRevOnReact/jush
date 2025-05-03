/// <reference types="vite/client" />

interface StaticImageData {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
}

declare module "*.png" {
    const content: string | StaticImageData;
    export default content;
}

declare module "*.jpg" {
    const value: string;
    export default value;
}

declare module "*.jpeg" {
    const value: string;
    export default value;
}

declare module "*.gif" {
    const value: string;
    export default value;
}

declare module "*.svg" {
    const value: string;
    export default value;
} 
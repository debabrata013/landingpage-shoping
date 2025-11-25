export const basePath = process.env.NODE_ENV === 'production' ? '/landingpage-shoping' : '';

export function getImagePath(path: string) {
    return `${basePath}${path}`;
}

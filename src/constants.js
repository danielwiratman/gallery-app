const BASE_API = 'http://danielwiratman.xyz:1337'

export const API_URL = `${BASE_API}/api/paintings?populate=*`;

export function makeIntoUrl(url) {
    return `${BASE_API}${url}`;
}


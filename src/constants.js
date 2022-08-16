
// export const API_URL = "http://192.168.1.10:1337/api/items?populate=*";

// export function makeIntoUrl(url) {
//     return `http://192.168.1.10:1337${url}`;
// }

const BASE_API = 'https://74af-2001-448a-5020-51ab-211c-5d7e-68e5-8a46.ap.ngrok.io'

export const API_URL = `${BASE_API}/api/items?populate=*`;

export function makeIntoUrl(url) {
    return `${BASE_API}${url}`;
}
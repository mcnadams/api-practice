import { makeSearchUrl } from '../src/search-component.js';

const BASE_URL = 'https://strainapi.evanbusse.com/kFxeO3X/strains/data/';

export function getInfoFromQuery(urlQuery) {
    const searchParams = new URLSearchParams(urlQuery);
    const param = searchParams.get('id');
    const nameAndId = param.split('-');
    return nameAndId;
}

export function makeNameUrl(name) {
    const searchParams = { name: name };
    return makeSearchUrl(searchParams);
}


export function makeEffectsUrl(id) {
    return BASE_URL + 'effects/' + id;
}

export function makeFlavorsUrl(id) {
    return BASE_URL + 'flavors/' + id;
}
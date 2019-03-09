const API_KEY = 'kFxeO3X';

export function makeSearchUrl(searchParams) {
    const name = encodeURIComponent(searchParams.name);
    const effect = encodeURIComponent(searchParams.effect);
    const byName = `https://strainapi.evanbusse.com/${API_KEY}/strains/search/name/${name}`;
    const byEffect = `https://strainapi.evanbusse.com/${API_KEY}/strains/search/effect/${effect}`;

    if(searchParams.effect) {
        return byEffect;
    }
    if(searchParams.name) {
        return byName;
    }
    else {
        return '';
    }
}

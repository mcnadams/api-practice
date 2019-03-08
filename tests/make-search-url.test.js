const test = QUnit.test;
const API_KEY = 'kFxeO3X';

QUnit.module('make search url');

function makeSearchUrl(searchParams) {
    const name = encodeURIComponent(searchParams.name);
    const effect = encodeURIComponent(searchParams.effect);
    const byName = `strainapi.evanbusse.com/${API_KEY}/strains/search/name/${name}`;
    const byEffect = `strainapi.evanbusse.com/${API_KEY}/strains/search/effect/${effect}`;

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

test('if searchParams contains name and empty effect, search by name', assert => {
    const searchParams = {
        name: 'alpha blue', 
        effect: ''
    };
    const expected = `strainapi.evanbusse.com/${API_KEY}/strains/search/name/alpha%20blue`;

    const result = makeSearchUrl(searchParams);

    assert.equal(result, expected);
});

test('if searchParams contains effect and no name, search by effect', assert => {
    const searchParams = {
        name: '', 
        effect: 'happy'
    };
    const expected = `strainapi.evanbusse.com/${API_KEY}/strains/search/effect/happy`;

    const result = makeSearchUrl(searchParams);

    assert.equal(result, expected);
});

test('if searchParams contains effect and also name, search by effect', assert => {
    const searchParams = {
        name: 'alpha blue', 
        effect: 'happy'
    };
    const expected = `strainapi.evanbusse.com/${API_KEY}/strains/search/effect/happy`;

    const result = makeSearchUrl(searchParams);

    assert.equal(result, expected);
});
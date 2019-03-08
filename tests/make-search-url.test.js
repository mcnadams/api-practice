const test = QUnit.test;
const API_KEY = 'kFxeO3X';

QUnit.module('make search url');

function makeSearchUrl(searchParams) {
    const byName = `strainapi.evanbusse.com/${API_KEY}/strains/search/name/${searchParams.name}`;
    const byEffect = `strainapi.evanbusse.com/${API_KEY}/strains/search/effect/${searchParams.effect}`;

    if(searchParams.name) {
        return byName;
    }
    if(searchParams.effect) {
        return byEffect;
    }
    else {
        return '';
    }
}

test('if searchParams contains name and empty effect, search by name', assert => {
    const searchParams = {
        name: 'Bonnie', 
        effect: ''
    };
    const expected = `strainapi.evanbusse.com/${API_KEY}/strains/search/name/Bonnie`;

    const result = makeSearchUrl(searchParams);

    assert.equal(result, expected);
});


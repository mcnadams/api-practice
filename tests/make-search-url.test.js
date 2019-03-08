import { makeSearchUrl } from '../src/search-component.js';

const test = QUnit.test;

QUnit.module('make search url');

const API_KEY = 'kFxeO3X';

test('if searchParams contains name and empty effect, search by name', assert => {
    const searchParams = {
        name: 'alpha blue', 
        effect: ''
    };
    const expected = `http://strainapi.evanbusse.com/${API_KEY}/strains/search/name/alpha%20blue`;

    const result = makeSearchUrl(searchParams);

    assert.equal(result, expected);
});

test('if searchParams contains effect and no name, search by effect', assert => {
    const searchParams = {
        name: '', 
        effect: 'happy'
    };
    const expected = `http://strainapi.evanbusse.com/${API_KEY}/strains/search/effect/happy`;

    const result = makeSearchUrl(searchParams);

    assert.equal(result, expected);
});

test('if searchParams contains effect and also name, search by effect', assert => {
    const searchParams = {
        name: 'alpha blue', 
        effect: 'happy'
    };
    const expected = `http://strainapi.evanbusse.com/${API_KEY}/strains/search/effect/happy`;

    const result = makeSearchUrl(searchParams);

    assert.equal(result, expected);
});
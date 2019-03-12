import { getInfoFromQuery, makeNameUrl, makeEffectsUrl, makeFlavorsUrl } from '../src/strain-detail-query.js';

const test = QUnit.test;

QUnit.module('get strain details');

test('extract strain name from url', assert => {
    const urlQuery = '?id=Alaskan%20Thunder%20Fuck-11';

    const expected = 'Alaskan Thunder Fuck';

    const result = getInfoFromQuery(urlQuery)[0];

    assert.equal(result, expected);
});

test('extract strain ID from query', assert => {
    const urlQuery = '?id=Alaskan%20Thunder%20Fuck-11';

    const expected = '11';

    const result = getInfoFromQuery(urlQuery)[1];

    assert.equal(result, expected);
});

test('make search by name url', assert => {
    const expected = 'https://strainapi.evanbusse.com/kFxeO3X/strains/search/name/Alaskan%20Thunder%20Fuck';
    const name = 'Alaskan Thunder Fuck';

    const result = makeNameUrl(name);

    assert.equal(result, expected);
});

test('make search effects by id url', assert => {
    const id = 11;
    const expected = 'https://strainapi.evanbusse.com/kFxeO3X/strains/data/effects/11';

    const result = makeEffectsUrl(id);

    assert.equal(result, expected);
});

test('make search flavors by id url', assert => {
    const id = 11;
    const expected = 'https://strainapi.evanbusse.com/kFxeO3X/strains/data/flavors/11';

    const result = makeFlavorsUrl(id);

    assert.equal(result, expected);
});
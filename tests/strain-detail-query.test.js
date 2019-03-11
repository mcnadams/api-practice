import { getInfoFromQuery } from '../src/strain-detail-query.js';

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
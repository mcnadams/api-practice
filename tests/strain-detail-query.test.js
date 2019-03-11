const test = QUnit.test;

QUnit.module('get strain details');

function getNameFromQuery(urlQuery) {
    const searchParams = new URLSearchParams(urlQuery);
    const param = searchParams.get('id');
    const nameAndId = param.split('-');
    return nameAndId[0];
}

test('extract strain name from url', assert => {
    const urlQuery = '?id=Alaskan%20Thunder%20Fuck-11';

    const expected = 'Alaskan Thunder Fuck';

    const result = getNameFromQuery(urlQuery);

    assert.equal(result, expected);
});
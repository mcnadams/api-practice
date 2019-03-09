const test = QUnit.test;

QUnit.module('strain detail page');

function makeStrainHeader(strain) {
    const template = document.createElement('template');
    template.innerHTML = `
        <header id="strain-header">
            <h1>${strain.name}</h1>
            <h2>${strain.race}</h2>    
        </header>
    `;

    return template.content;
}

function makeDescription(strain) {
    const template = document.createElement('template');
    template.innerHTML = `
        <p>${strain.desc}</p>
    `;

    return template.content;
}

test('make strain header', assert => {
    const expected = `
        <header id="strain-header">
            <h1>Alaskan Thunder Fuck</h1>
            <h2>sativa</h2>    
        </header>
    `;
    const result = makeStrainHeader(fromNameSearch);

    assert.htmlEqual(result, expected);
});

test('make description p template', assert => {
    const expected = `
        <p>Alaskan Thunder Fuck (also referred to as ATF, Matanuska Thunder Fuck or Matanuska Tundra) is a legendary sativa-dominant strain originating in the Matanuska Valley area of Alaska.  According to the legend, it was originally a Northern California sativa crossed with a Russian ruderalis, but sometime in the late 70s it was crossed with Afghani genetics to make it heartier.  ATF usually presents large, beautifully frosted buds with incredibly strong odors of pine, lemon, menthol, and skunk.  Known for possessing a relaxing yet intensely euphoric high, it is also described as having a “creeper” effect as well as pronounced appetite enhancement.</p>
    `;
    const result = makeDescription(fromNameSearch);

    assert.htmlEqual(result, expected);
});


const fromNameSearch = {
    'id': 11,
    'name': 'Alaskan Thunder Fuck',
    'race': 'sativa',
    'desc': 'Alaskan Thunder Fuck (also referred to as ATF, Matanuska Thunder Fuck or Matanuska Tundra) is a legendary sativa-dominant strain originating in the Matanuska Valley area of Alaska.  According to the legend, it was originally a Northern California sativa crossed with a Russian ruderalis, but sometime in the late 70s it was crossed with Afghani genetics to make it heartier.  ATF usually presents large, beautifully frosted buds with incredibly strong odors of pine, lemon, menthol, and skunk.  Known for possessing a relaxing yet intensely euphoric high, it is also described as having a “creeper” effect as well as pronounced appetite enhancement.'
};
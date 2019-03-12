import { makeSingleLi, makeDescription, makeStrainHeader, makeFlavorLi } from '../src/strain-template.js';

const test = QUnit.test;

QUnit.module('strain detail page');

test('make strain header', assert => {
    const expected = `
        <div id="strain-header-info">
            <h1>Alaskan Thunder Fuck</h1>
            <h2>sativa</h2>    
        </div>
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


test('make single effect list item', assert => {
    const effect = allEffects.positive[0];
    const expected = /*html*/
    // eslint-disable-next-line quotes
    `<li id="effect-li">Happy</li>`;
    const result = makeSingleLi(effect);

    assert.htmlEqual(result, expected);
});


test('make flavor list item', assert => {
    const flavor = flavors[0];
    const expected = /*html*/
        // eslint-disable-next-line quotes
        `<li>Earthy</li>`;

    const result = makeFlavorLi(flavor);

    assert.htmlEqual(result, expected);

});

const fromNameSearch = {
    'id': 11,
    'name': 'Alaskan Thunder Fuck',
    'race': 'sativa',
    'desc': 'Alaskan Thunder Fuck (also referred to as ATF, Matanuska Thunder Fuck or Matanuska Tundra) is a legendary sativa-dominant strain originating in the Matanuska Valley area of Alaska.  According to the legend, it was originally a Northern California sativa crossed with a Russian ruderalis, but sometime in the late 70s it was crossed with Afghani genetics to make it heartier.  ATF usually presents large, beautifully frosted buds with incredibly strong odors of pine, lemon, menthol, and skunk.  Known for possessing a relaxing yet intensely euphoric high, it is also described as having a “creeper” effect as well as pronounced appetite enhancement.'
};

const allEffects = {
    'positive': [
        'Happy',
        'Euphoric',
        'Uplifted',
        'Energetic',
        'Relaxed'
    ],
    'negative': [
        'Dry Mouth',
        'Dry Eyes',
        'Paranoid',
        'Dizzy'
    ],
    'medical': [
        'Stress',
        'Depression',
        'Pain',
        'Fatigue',
        'Lack of Appetite',
        'Headache'
    ]
};

const flavors = [
    'Earthy',
    'Woody',
    'Pine'
];
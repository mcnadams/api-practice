import { makeStrainPage } from './strain-template.js';
import { getInfoFromQuery, makeNameUrl } from './strain-detail-query.js';

const back = document.getElementById('back');

back.addEventListener('click', () => {
    window.history.back();
});

const name = getInfoFromQuery(window.location.search)[0];
const id = getInfoFromQuery(window.location.search)[1];

// const nameUrl = makeNameUrl(name);
// const effectsUrl = makeEffectsUrl(id);
// const flavorsUrl = makeflavorsUrl(id);

const strain = {
    'name': name,
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

makeStrainPage(strain, allEffects, flavors);
import { makeSingleLi, makeStrainHeader, makeDescription } from './strain-template.js';

const back = document.getElementById('back');

back.addEventListener('click', () => {
    window.history.back();
});

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

const strain = {
    'id': 11,
    'name': 'Alaskan Thunder Fuck',
    'race': 'sativa',
    'desc': 'Alaskan Thunder Fuck (also referred to as ATF, Matanuska Thunder Fuck or Matanuska Tundra) is a legendary sativa-dominant strain originating in the Matanuska Valley area of Alaska.  According to the legend, it was originally a Northern California sativa crossed with a Russian ruderalis, but sometime in the late 70s it was crossed with Afghani genetics to make it heartier.  ATF usually presents large, beautifully frosted buds with incredibly strong odors of pine, lemon, menthol, and skunk.  Known for possessing a relaxing yet intensely euphoric high, it is also described as having a “creeper” effect as well as pronounced appetite enhancement.'
};

const header = document.getElementById('strain-header');
header.appendChild(makeStrainHeader(strain));

const description = document.getElementById('description');
description.appendChild(makeDescription(strain));

const positiveList = document.getElementById('positive-effects-list');
const negativeList = document.getElementById('negative-effects-list');
const medicalList = document.getElementById('medical-effects-list');

allEffects.positive.forEach(effect => {
    const dom = makeSingleLi(effect);
    positiveList.appendChild(dom);
});

allEffects.negative.forEach(effect => {
    const dom = makeSingleLi(effect);
    negativeList.appendChild(dom);
});

allEffects.medical.forEach(effect => {
    const dom = makeSingleLi(effect);
    medicalList.appendChild(dom);
});


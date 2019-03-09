import { makeSingleLi } from './strain-template.js';

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


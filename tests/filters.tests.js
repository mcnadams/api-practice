const test = QUnit.test;

QUnit.module('filter tests');

function filterByRace(results, race) {
    return results.filter(result => {
        return result.race === race;
    });
}

function filterByName(results, name) {
    return results.filter(result => {
        return result.name.toLowerCase().indexOf(name.toLowerCase()) >= 0;
    });
}

function filterResults(results, searchParams) {
    const name = searchParams.name;
    const effect = searchParams.effect;
    const race = searchParams.race;
    if(!name && effect && !race) {
        return results;
    }
    else if(!name && effect && race) {
        return filterByRace(results, race);
    }
    else if(name && !effect && race) {
        return filterByRace(results, race);
    }
    else if(name && effect && race) {
        const byRace = filterByRace(results, race);
        return filterByName(byRace, name);
    }
    else if(name && effect && !race) {
        return filterByName(results, name);
    }
    else if(name && !effect && !race) {
        return results;
    }
    else {
        return [];
    }
}

test('if !name, effect, !race return results', assert => {
    const searchParams = {
        name: '',
        effect: 'Dry Mouth',
        race: ''
    };

    const expected = [
        {
            'id': 2,
            'name': 'African',
            'race': 'sativa',
            'effect': 'Dry Mouth'
        },
        {
            'id': 3,
            'name': 'Afternoon Delight',
            'race': 'hybrid',
            'effect': 'Dry Mouth'
        },
        {
            'id': 4,
            'name': 'Afwreck',
            'race': 'hybrid',
            'effect': 'Dry Mouth'
        },
        {
            'id': 5,
            'name': 'Agent Orange',
            'race': 'hybrid',
            'effect': 'Dry Mouth'
        },
        {
            'id': 6,
            'name': 'Agent Tangie',
            'race': 'hybrid',
            'effect': 'Dry Mouth'
        },
        {
            'id': 10,
            'name': 'Alaskan Ice',
            'race': 'sativa',
            'effect': 'Dry Mouth'
        },
        {
            'id': 11,
            'name': 'Alaskan Thunder Fuck',
            'race': 'sativa',
            'effect': 'Dry Mouth'
        },
        {
            'id': 12,
            'name': 'Albert Walker',
            'race': 'hybrid',
            'effect': 'Dry Mouth'
        },
        {
            'id': 14,
            'name': 'Alf',
            'race': 'hybrid',
            'effect': 'Dry Mouth'
        },
        {
            'id': 15,
            'name': 'Alice in Wonderland',
            'race': 'sativa',
            'effect': 'Dry Mouth'
        }
    ];

    const results = filterResults(effectResults, searchParams);
    assert.deepEqual(results, expected);
});

test('if !name, effects, race return results filtered by race', assert => {
    const searchParams = {
        name: '',
        effect: 'Dry Mouth',
        race: 'hybrid'
    };
    const expected = [
        {
            'id': 3,
            'name': 'Afternoon Delight',
            'race': 'hybrid',
            'effect': 'Dry Mouth'
        },
        {
            'id': 4,
            'name': 'Afwreck',
            'race': 'hybrid',
            'effect': 'Dry Mouth'
        },
        {
            'id': 5,
            'name': 'Agent Orange',
            'race': 'hybrid',
            'effect': 'Dry Mouth'
        },
        {
            'id': 6,
            'name': 'Agent Tangie',
            'race': 'hybrid',
            'effect': 'Dry Mouth'
        },
        {
            'id': 12,
            'name': 'Albert Walker',
            'race': 'hybrid',
            'effect': 'Dry Mouth'
        },
        {
            'id': 14,
            'name': 'Alf',
            'race': 'hybrid',
            'effect': 'Dry Mouth'
        }
    ];
    
    const results = filterResults(effectResults, searchParams);
    assert.deepEqual(results, expected);
});

test('if name, !effects, race return results filtered by race', assert => {
    const searchParams = {
        name: 'Cookies',
        effect: '',
        race: 'indica'
    };

    const expected = [
        {
            'id': 597,
            'name': 'Cookies Kush',
            'race': 'indica',
            'desc': 'Cookies Kush from Barney\'s Coffeeshop combines Girl Scout Cookies with the Rolex phenotype of OG Kush, resulting in a potent indica cross worthy of 1st place in High Times\' 2014 Amsterdam Cannabis Cup in the "Best Coffeeshop Strain" category.'
        }
    ];

    const results = filterResults(nameResults, searchParams);
    assert.deepEqual(results, expected);
});

test('if name, effects, race return results filtered by race and name', assert => {
    const searchParams = {
        name: 'agent',
        effect: 'Dry Mouth',
        race: 'hybrid'
    };

    const expected = [
        {
            'id': 5,
            'name': 'Agent Orange',
            'race': 'hybrid',
            'effect': 'Dry Mouth'
        },
        {
            'id': 6,
            'name': 'Agent Tangie',
            'race': 'hybrid',
            'effect': 'Dry Mouth'
        }
    ];

    const results = filterResults(effectResults, searchParams);
    assert.deepEqual(results, expected);
});

test('if name, effects, !race return results filtered by name', assert => {
    const searchParams = {
        name: 'Af',
        effect: 'Dry Mouth',
        race: ''
    };
    const expected = [
        {
            'id': 2,
            'name': 'African',
            'race': 'sativa',
            'effect': 'Dry Mouth'
        },
        {
            'id': 3,
            'name': 'Afternoon Delight',
            'race': 'hybrid',
            'effect': 'Dry Mouth'
        },
        {
            'id': 4,
            'name': 'Afwreck',
            'race': 'hybrid',
            'effect': 'Dry Mouth'
        }
    ];

    const result = filterResults(effectResults, searchParams);

    assert.deepEqual(result, expected);
});

test('if name, !effect, !race return results', assert => {
    const searchParams = {
        name: 'cookies',
        effect: '',
        race: ''
    };
    const expected = nameResults;
    const results = filterResults(nameResults, searchParams);

    assert.deepEqual(results, expected);
});

const effectResults = [
    {
        'id': 2,
        'name': 'African',
        'race': 'sativa',
        'effect': 'Dry Mouth'
    },
    {
        'id': 3,
        'name': 'Afternoon Delight',
        'race': 'hybrid',
        'effect': 'Dry Mouth'
    },
    {
        'id': 4,
        'name': 'Afwreck',
        'race': 'hybrid',
        'effect': 'Dry Mouth'
    },
    {
        'id': 5,
        'name': 'Agent Orange',
        'race': 'hybrid',
        'effect': 'Dry Mouth'
    },
    {
        'id': 6,
        'name': 'Agent Tangie',
        'race': 'hybrid',
        'effect': 'Dry Mouth'
    },
    {
        'id': 10,
        'name': 'Alaskan Ice',
        'race': 'sativa',
        'effect': 'Dry Mouth'
    },
    {
        'id': 11,
        'name': 'Alaskan Thunder Fuck',
        'race': 'sativa',
        'effect': 'Dry Mouth'
    },
    {
        'id': 12,
        'name': 'Albert Walker',
        'race': 'hybrid',
        'effect': 'Dry Mouth'
    },
    {
        'id': 14,
        'name': 'Alf',
        'race': 'hybrid',
        'effect': 'Dry Mouth'
    },
    {
        'id': 15,
        'name': 'Alice in Wonderland',
        'race': 'sativa',
        'effect': 'Dry Mouth'
    }
];

const nameResults = [
    {
        'id': 597,
        'name': 'Cookies Kush',
        'race': 'indica',
        'desc': 'Cookies Kush from Barney\'s Coffeeshop combines Girl Scout Cookies with the Rolex phenotype of OG Kush, resulting in a potent indica cross worthy of 1st place in High Times\' 2014 Amsterdam Cannabis Cup in the "Best Coffeeshop Strain" category.'
    },
    {
        'id': 598,
        'name': 'Cookies and Cream',
        'race': 'hybrid',
        'desc': 'Bred by Exotic Genetix, Cookies and Cream is a hybrid cross between Starfighter and an undisclosed Girl Scout Cookies phenotype. This sweet-tasting variety provides long-lasting relief for patients treating symptoms throughout the day, but high doses can induce an early night’s sleep. Cookies and Cream took first place in the hybrid category of the 2014 Denver Cannabis Cup.'
    },
    {
        'id': 599,
        'name': 'Cookies and Dream',
        'race': 'hybrid',
        'desc': 'Cookies & Dream is a sativa-dominant hybrid strain that is a harmonious blend of fan favorites Blue Dream, also a favorite of lead artists Dominic and Jeremy of Big Gigantic, and combined with the robustly sweet flavors of Girl Scout Cookies. Ideal for social gatherings, this blend produces a euphoric body buzz and packs a strong sativa kick to keep your energy up. Cookies & Dream was curated in Colorado with love by Native Roots in collaboration with Big Gigantic to showcase this special blend. '
    },
    {
        'id': 625,
        'name': 'Critters Cookies',
        'race': 'hybrid',
        'desc': 'Critters Cookies blends the power of Cookies’ parentage with the energy driven hybrid White Fire Alien OG to offer an aroma of distinct lemon funk with a sweet cakiness that lingers in the air. The strain is a balanced 60/40 sativa-leaning cross that is equal parts energizing and relaxing, and is naturally suited for physical discomfort and pain.'
    },
    {
        'id': 728,
        'name': 'Durban Cookies',
        'race': 'sativa',
        'desc': 'Durban Cookies is the Durban Poison-dominant phenotype of Girl Scout Cookies. Known for its invigorating mental energy and medical-grade body buzz, Durban Cookies offers a more energizing experience with powerful pain relieving qualities, making this sativa-dominant strain a top choice for patients treating aches throughout the day.'
    }
];

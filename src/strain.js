import { makeStrainPage } from './strain-template.js';
import { getInfoFromQuery, makeNameUrl, makeEffectsUrl, makeFlavorsUrl } from './strain-detail-query.js';

const back = document.getElementById('back');

back.addEventListener('click', () => {
    window.history.back();
});

const name = getInfoFromQuery(window.location.search)[0];
const id = getInfoFromQuery(window.location.search)[1];

const nameUrl = makeNameUrl(name);
const effectsUrl = makeEffectsUrl(id);
const flavorsUrl = makeFlavorsUrl(id);

const strain = {
    name: name,
    race: '',
    desc: '',
};

fetch(nameUrl)
    .then(response => response.json())
    .then(results => {
        strain.race = results[0].race;
        strain.desc = results[0].desc;
        fetch(effectsUrl)
            .then(response => response.json())
            .then(results => {
                strain.allEffects = results;
                fetch(flavorsUrl)
                    .then(response => response.json())
                    .then(results => {
                        strain.flavors = results;
                        makeStrainPage(strain);            
                    })
                    .catch(error => {
                    // eslint-disable-next-line no-console
                        console.log(error);
                    });
            })
            .catch(error => {
                    // eslint-disable-next-line no-console
                console.log(error);
            });
    })
    .catch(error => {
            // eslint-disable-next-line no-console
        console.log(error);
    });



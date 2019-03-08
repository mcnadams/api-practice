import './form-component.js';

const API_KEY = 'kFxeO3X';

const allEffectsUrl = `https://strainapi.evanbusse.com/${API_KEY}/searchdata/effects`;

let effect = 'aroused';
const searchByEffectUrl = `https://strainapi.evanbusse.com/${API_KEY}/strains/search/effect/${effect}`;

// fetch(allEffectsUrl)
//     .then(response => {
//         //console.log(response);
//         return response.json();
//     })
//     .then(body => {
//         body.forEach(effect => {
//             if(effect.type === 'medical') {
//               //  console.log(effect.effect);
//             }
//         });
//     })
//     .catch((error) => {
//         console.log('Error!!!', error);
//     });

// fetch(searchByEffectUrl)
//     .then(response => {
//         return response.json();
//     })
//     .then(body => {
//         console.log(body);
//     })
//     .catch((error) => {
//         console.log('Error!!!', error);
//     });

const section = document.getElementById('selections');
console.log(section);
section.addEventListener('mouseover', () => {
    console.log('butts');
}); 
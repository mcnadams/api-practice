import './form-component.js';
import './search-component.js';
import { getSearchParams } from './form-component.js';
import { makeSearchUrl } from './search-component.js';
import loadStrainList, { noResults } from './make-strain-list.js';

// const API_KEY = 'kFxeO3X';

// const allEffectsUrl = `https://strainapi.evanbusse.com/${API_KEY}/searchdata/effects`;

// let effect = 'aroused';
// const searchByEffectUrl = `https://strainapi.evanbusse.com/${API_KEY}/strains/search/effect/${effect}`;

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

// let url = getUrl(searchParams);
// console.log('in index:', searchParams);
// console.log(url);


const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const searchParams = getSearchParams();
    console.log('INDEX submit clicked', searchParams);
    const url = makeSearchUrl(searchParams);
    console.log(url);
    if(!url) {
        window.alert('please choose a name and/or effect');
    }
    fetch(url)
        .then(response => response.json())
        .then(body => {
            if(body.length) {
                console.log(body[0]);
                loadStrainList(body);
            }
            else {
                noResults();
            }
        })
        .catch(error => {
            console.log(error);
        });
});
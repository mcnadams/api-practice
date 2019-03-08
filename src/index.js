import './form-component.js';
import './search-component.js';
import { getSearchParams } from './form-component.js';
import { makeSearchUrl } from './search-component.js';
import loadStrainList, { noResults } from './make-strain-list.js';
import filterResults from './filter-component.js';

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
            const results = filterResults(body, searchParams);
            if(results.length) {
                console.log(results.length);
                loadStrainList(results);
            }
            else {
                noResults();
            }
        })
        .catch(error => {
            console.log(error);
        });
});
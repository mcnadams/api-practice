const nameForm = document.getElementById('name-search-form');
const effectForm = document.getElementById('effect-search-form');
const medicalForm = document.getElementById('medical-search-form');
const effectFilter = document.getElementById('effect-filter');
const effectSelector = document.getElementById('effect');
const medicalSelector = document.getElementById('medical');

const nameSearch = nameForm.querySelector('input');

nameForm.addEventListener('submit', event => {
    event.preventDefault();
    console.log(nameSearch.value);
});

effectFilter.addEventListener('click', () => {
    const formData = new FormData(effectFilter);
    const effectType = formData.get('effect-type');
    if(effectType === 'rec') {
        effectSelector.classList.remove('hidden');
        medicalSelector.classList.add('hidden');
    }
    if(effectType === 'medical') {
        effectSelector.classList.add('hidden');
        medicalSelector.classList.remove('hidden');
    }
});
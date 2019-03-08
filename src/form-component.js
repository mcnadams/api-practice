const nameForm = document.getElementById('name-search-form');
const effectForm = document.getElementById('effect-search-form');
const medicalForm = document.getElementById('medical-search-form');
const effectFilter = document.getElementById('effect-filter');
const effectSelector = document.getElementById('effect');
const medicalSelector = document.getElementById('medical');

const nameSearch = nameForm.querySelector('input');
const searchParams = {
    name: '',
    effect: ''
}

nameForm.addEventListener('submit', event => {
    event.preventDefault();
    searchParams.name = nameSearch.value;
    console.log('name event listener:', searchParams);
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

effectSelector.addEventListener('change', () => {
    searchParams.effect = effectSelector.value;
    searchParams.name = nameSearch.value;
    console.log('effect event listener:', searchParams);
});

medicalSelector.addEventListener('change', () => {
    searchParams.effect = medicalSelector.value;
    searchParams.name = nameSearch.value;
    console.log('effect event listener:', searchParams);
});
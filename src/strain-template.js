export function makeSingleLi(effect) {
    const template = document.createElement('template');
    template.innerHTML = `<li id="effect-li">${effect}</li>`;
    return template.content;
}
 
export function makeStrainHeader(strain) {
    const template = document.createElement('template');
    template.innerHTML = `
        <div id="strain-header-info">
            <h1>${strain.name}</h1>
            <h2>${strain.race}</h2>    
        </div>
    `;

    return template.content;
}

export function makeDescription(strain) {
    const template = document.createElement('template');
    template.innerHTML = `
        <p>${strain.desc}</p>
    `;

    return template.content;
}

export function makeFlavorLi(flavor) {
    const template = document.createElement('template');
    template.innerHTML = `<li>${flavor}</li>`;
    return template.content;
}

const header = document.getElementById('strain-header');
const description = document.getElementById('description');
const positiveList = document.getElementById('positive-effects-list');
const negativeList = document.getElementById('negative-effects-list');
const medicalList = document.getElementById('medical-effects-list');
const flavorsList = document.getElementById('flavors');

export function makeStrainPage(strain) {
    header.appendChild(makeStrainHeader(strain));
    description.appendChild(makeDescription(strain));

    console.log(strain);

    strain.allEffects.positive.forEach(effect => {
        const dom = makeSingleLi(effect);
        positiveList.appendChild(dom);
    });
    strain.allEffects.negative.forEach(effect => {
        const dom = makeSingleLi(effect);
        negativeList.appendChild(dom);
    });
    strain.allEffects.medical.forEach(effect => {
        const dom = makeSingleLi(effect);
        medicalList.appendChild(dom);
    });
    
    strain.flavors.forEach(flavor => {
        const dom = makeFlavorLi(flavor);
        flavorsList.appendChild(dom);
    });
}



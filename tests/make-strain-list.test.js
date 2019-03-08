import { makeListTemplate } from '../src/make-strain-list.js';

const test = QUnit.test;

QUnit.module('list template');

test('make html template for strain', assert => {
    const strain = {
        'id':38,
        'name':'Alpha Blue',
        'race':'sativa',
        'desc':'Alpha Blue, also known as Dream Diesel (or DD), is a high-flying sativa that combines Blue Dream and NYC Diesel. In 2011 this compelling blend claimed two 2nd place prizes for a sativa at the High Times’ Medical Cup in Denver and San Francisco. Its buds are glazed with sugary trichomes and take on hues of deep red and violet. The aroma is a combination of tart blueberry and sour candy that create a pungent mixture of earthy berry and Haze upon exhale. The sweet fragrance of Alpha Blue brings with it uplifting effects that produce a calming, relaxed mood without putting you to sleep. The cerebral and happy buzz is a great tool when coping with stress and anxiety.'
    };

    const expected = `
        <li title="Alpha Blue, also known as Dream Diesel (or DD), is a high-flying sativa that combines Blue Dream and NYC Diesel. In 2011 this compelling blend claimed two 2nd place prizes for a sativa at the High Times’ Medical Cup in Denver and San Francisco. Its buds are glazed with sugary trichomes and take on hues of deep red and violet. The aroma is a combination of tart blueberry and sour candy that create a pungent mixture of earthy berry and Haze upon exhale. The sweet fragrance of Alpha Blue brings with it uplifting effects that produce a calming, relaxed mood without putting you to sleep. The cerebral and happy buzz is a great tool when coping with stress and anxiety.">
            <a href="./strain.html?id=38">
                Alpha Blue (sativa)
            </a>
        </li>
    `;

    const result = makeListTemplate(strain);

    assert.htmlEqual(result, expected);

});
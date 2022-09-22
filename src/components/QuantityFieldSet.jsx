import React, { useState } from 'react';
import '@styles/QuantityFieldSet.css';
import quantifiesData from '../data/quantifies';

const initialQuantifiers = {
    list: quantifiesData,
    placeholder: 'Artículo, Kilo, Caja, etc',
    completing: quantifiesData,
};

const QuantityFieldSet = () => {
    const [quantifiers, setQuantifiers] = useState(initialQuantifiers);
    const { list, placeholder, completing } = quantifiers;

    const updateQuantifiers = (event) => {
        const quantity = event.target.value;
        console.log('update');
        if (quantity > 1) {
            const listOfQuantifiersInPlural = list.map((name) => {
                const lastLetter = name[name.length - 1];
                const lastLetterIsAVowel =
                    lastLetter === 'a' ||
                    lastLetter === 'e' ||
                    lastLetter === 'i' ||
                    lastLetter === 'o' ||
                    lastLetter === 'u';

                if (lastLetterIsAVowel === true) {
                    return name + 's';
                }

                return name + 'es';
            });
            setQuantifiers({
                ...quantifiers,
                placeholder: 'Artículos, Kilos, Cajas',
                completing: listOfQuantifiersInPlural,
            });
        } else {
            setQuantifiers({
                ...quantifiers,
                placeholder: 'Artículo, Kilo, Caja, etc',
                completing: list,
            });
        }
    };

    return (
        <fieldset className="quantity">
            <legend className="quantity__title">
                <label htmlFor="quantity__number">Elegir cantidad</label>
            </legend>
            <input
                id="quantity__number"
                className="quantity__input"
                type="number"
                name="quantity"
                defaultValue={1}
                placeholder={1}
                min={1}
                maxLength={10}
                required
                onChange={updateQuantifiers}
            />
            <input
                id="quantity__quantify"
                className="quantity__input"
                type="text"
                name="quantifier"
                placeholder={placeholder}
                maxLength={21}
                autoComplete="on"
                required
                list="quantify-list"
            />
            <datalist id="quantify-list">
                {completing.map((quantify) => (
                    <option key={quantify} value={quantify} />
                ))}
            </datalist>
        </fieldset>
    );
};

export default QuantityFieldSet;

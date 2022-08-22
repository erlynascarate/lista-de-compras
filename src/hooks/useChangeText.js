import { useState } from 'react';
import quantifiesData from '../data/quantifies';

const useChangeText = (title, buttonText, refQuantityInput) => {
    const [text, setText] = useState({
        title: 'Agregar nuevo',
        buttonText: 'Agregar',
    });
    setText({
        title,
        buttonText,
    });

    const [quantifiersList, setQuantifiersList] = useState(quantifiesData);

    const [quantityPlaceholder, setQuantityPlaceholder] = useState(
        'Artículo, Kilo, Caja, etc'
    );
    const [completingQuantifiers, setCompletingQuantifiers] =
        useState(quantifiersList);

    const updateQuantifiers = () => {
        const quantity = refQuantityInput.current.value;
        if (quantity > 1) {
            setQuantityPlaceholder('Artículos, Kilos, Cajas');

            const listOfQuantifiersInPlural = quantifiersList.map((name) => {
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
            setCompletingQuantifiers(listOfQuantifiersInPlural);
        } else {
            setQuantityPlaceholder('Artículo, Kilo, Caja, etc');
            setCompletingQuantifiers(quantifiersList);
        }
    };
    updateQuantifiers();
    return { title, buttonText, quantityPlaceholder, completingQuantifiers };
};

export default useChangeText;

const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];


// const listToFilter = icons.map((icon) => {
//     return icon;
// });

const filterIcons = (chosenType, array) => {
    return array.filter((icon) => {
        if (chosenType === 'all') {
            return true
        };
        if (chosenType === icon.type) {
            return true
        };
        return false;
    });
};

const listFiltered = (filter) => {

    const listToFilter = filterIcons(filter, icons);

    const containerHTML = document.querySelector('.icons-container');

    containerHTML.innerHTML = '';

    listToFilter.forEach((icon) => {

        const { name, prefix, type, family } = icon;
        containerHTML.innerHTML +=
            `
         <div class="icon-card">
            <i class="${family} ${prefix}${name} ${type}"></i>
            <div class="name">${name}</div>
         </div>
        `
    });


};

listFiltered('all');

const selectorElement = document.querySelector('.type-selector');

selectorElement.addEventListener('change', (event) => {

    listFiltered(event.target.value);

});
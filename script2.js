const playlist = [
    ['Rocket', '6:31'],
    ['Hold Up', '5:09'],
    ['6 inch', '4:20'],
    ['Black Parade (Extended Version)', '5:13'],
    ['Rather Die Young', '3:42'],
    ['I Care', '3:59'],
    ['Dance For You', '6:17']
    ['Baby Boy', '4:04'],
    ['Speechless', '6:00'],
    ['Deja Vu', '4:00'],
    ['Blow', '5:09'],
    ['Brown Skin Girl', '4:08']
];

function createListItems( arr ) {
    let items = '';
    for ( let i = 0; i < arr.length; i++ ) {
        items+= `<li>${ arr[i][0] }, - ${ arr [i][1]}</li>`;
    }
    return items;
}

document.querySelector('main').innerHTML = 
    <ol>
        ${createListItems(playlist)}
    </ol>
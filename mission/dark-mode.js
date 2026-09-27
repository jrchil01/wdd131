
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

let topics = document.querySelector('#content');

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        logo.setAttribute('src', 'byui-logo-white.png');
        document.getElementById('content').style.color = 'white';
        document.body.style.backgroundColor = 'black';
        
    } else {
        // code for changes to colors and logo
        logo.setAttribute('src', 'byui-logo_blue.webp');
        document.getElementById('content').style.color = 'black';
        document.body.style.backgroundColor = 'white';
    }
}           
                    
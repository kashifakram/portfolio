import './style.css';
import Data from './data.xml';

function mainComponent(params) {
    const el = document.createElement('div');

    // el.innerHTML = 'Main Div';

    const h2 = document.createElement('h2');

    h2.innerHTML = 'Div Heading';
    h2.classList.add('header');

    el.appendChild(h2);

    console.log(Data);

    return el;
}

document.body.appendChild(mainComponent());
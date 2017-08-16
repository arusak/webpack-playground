import add from './add';
import multiply from './multiply';
import './style.css';

const x = 5;
const y = 13;

let p1 = document.createElement('p');
let txt1 = document.createTextNode(`${x} + ${y} = ${add(x, y)}`);
p1.appendChild(txt1);
document.body.appendChild(p1);

let p2 = document.createElement('p');
let txt2 = document.createTextNode(`${x} × ${y} = ${multiply(x, y)}`);
p2.appendChild(txt2);
document.body.appendChild(p2);



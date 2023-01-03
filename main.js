function myFunction(number) {
    console.log('Result ' + number);
    
}

const button = document.createElement('button');

button.textContent = "Clik me 3";
button.setAttribute('onclick', "myFunction('3')")

document.getElementById('button3').append(button);

const myNewButton = document.createElement('button');

myNewButton.textContent = "Clik me 4";
myNewButton.addEventListener('click', () => myFunction('4'));

document.body.appendChild(myNewButton)

function megusta(event) {
    console.log(event);
    
}

const myNewerButton = document.createElement('button');

myNewButton.textContent = "Clik me 5";
myNewButton.addEventListener('click', (evt) => megusta('evt'));

document.body.appendChild(myNewerButton)



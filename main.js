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
    console.log(event.target);
}

const myNewerButton = document.createElement('button');

myNewerButton.textContent = "Clik me 5";
myNewerButton.addEventListener('click', (evt) => megusta(evt));

document.body.appendChild(myNewerButton)

for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (let i = 6; i < 11; i++) {
    
    const myNewestButton = document.createElement('button');
    
    myNewestButton.textContent = "Clik me 6";
    myNewestButton.addEventListener('click', (evt) => megusta(evt));

    document.body.appendChild(myNewestButton);
}
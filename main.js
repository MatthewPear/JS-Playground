// function myFunction(number) {
//     console.log('Result ' + number);
    
// }

// const button = document.createElement('button');

// button.textContent = "Clik me 3";
// button.setAttribute('onclick', "myFunction('3')")

// document.getElementById('button3').append(button);

// const myNewButton = document.createElement('button');

// myNewButton.textContent = "Clik me 4";
// myNewButton.addEventListener('click', () => myFunction('4'));

// document.body.appendChild(myNewButton)

function buttonClickHandler(event, content) {
    console.log(event);
    console.log(event.target);
    console.log('Result ' + sayHello);
}

// const myNewerButton = document.createElement('button');

// myNewerButton.textContent = "Clik me 5";
// myNewerButton.addEventListener('click', (evt) => buttonClickHandler(evt));

// document.body.appendChild(myNewerButton)

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

for (let i = 6; i < 11; i++) {  
    function sayHello(number) {
        console.log(i);
    }
    const myNewestButton = document.createElement('button');
    
    myNewestButton.textContent = "Clik me " + i;
    myNewestButton.setAttribute('onclick', id= i)
    myNewestButton.addEventListener('click', (evt) => buttonClickHandler(evt));

    document.body.appendChild(myNewestButton);
}
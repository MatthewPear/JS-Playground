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
    sayHello(content)
}

// const myNewerButton = document.createElement('button');

// myNewerButton.textContent = "Clik me 5";
// myNewerButton.addEventListener('click', (evt) => buttonClickHandler(evt));

// document.body.appendChild(myNewerButton)

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

function sayHello(content) {
    console.log('Result ' + content);
}

for (let i = 6; i < 11; i++) {  
    
    const myNewestButton = document.createElement('button');
    
    myNewestButton.textContent = "Clik me " + i;
    myNewestButton.setAttribute("id", i);
    myNewestButton.addEventListener('click', (evt) => buttonClickHandler(evt, i));

    document.body.appendChild(myNewestButton);
}
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

// function buttonClickHandler(event, content) {
//     // console.log(event);
//     // console.log(event.target);
//     // sayHello(content)
//     logMyId(event)
// } 

// const myNewerButton = document.createElement('button');

// myNewerButton.textContent = "Clik me 5";
// myNewerButton.addEventListener('click', (evt) => buttonClickHandler(evt));

// document.body.appendChild(myNewerButton)

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// function sayHello(content) {
//     console.log('Result ' + content);
// }

// function logMyId(event) {
//         console.log('elo button id =', event.target.id)
    
//         let x = event.target.id;
        
//             if (x % 2 !== 0) {
//             console.log("id jest nieparzyste");
//             }else{
//             console.log("id jest parzyste");
//             }   
// }

// for (let i = 6; i < 11; i++) {  

//     const myNewestButton = document.createElement('button');
    
//     myNewestButton.textContent = "Clik me " + i;
//     myNewestButton.setAttribute("id", i);
//     myNewestButton.addEventListener('click', (evt) => buttonClickHandler(evt, i));

//     document.body.appendChild(myNewestButton);
// }

function createButton(x, name) {
    
    const myNextButton = document.createElement('button');

    myNextButton.textContent = "Clik me " + name;
    myNextButton.setAttribute("id", x);
    myNextButton.classList.add("button");
    myNextButton.addEventListener('click', () => createDot(x));

    document.body.appendChild(myNextButton)
}

// createButton("id1", "dupa");
// createButton("id2", "cipa");
// createButton("id3", "chuj");

for (let i = 0; i < 5; i++) { 
    createButton(i, "elo " + i)
}

function createDot(y) {
    
    const myDot = document.createElement('div');

    myDot.textContent = y;
    myDot.classList.add("dot", "color-"+ y);
    

    document.body.appendChild(myDot)
}


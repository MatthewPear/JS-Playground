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

const parzyste = [];
const nieparzyste = [];

function buttonClickHandler(event, x) {
    // createDot(x);
    if (x % 2 === 0) {
        parzyste.push(event.target.name);
        myCounter.innerText = "Parzyste " + parzyste.length;
    } else {
        nieparzyste.push(event.target.name);
        myCounter.innerText = "Nieparzyste " + nieparzyste.length;
        
    }
    console.log('parzyste, nieparzyste = ', parzyste, nieparzyste);
}

function createButton(x, name) {
    
    const myNextButton = document.createElement('button');

    myNextButton.textContent = "Clik me " + name;
    myNextButton.setAttribute("id", x);
    const btnName = 'btn-' + x
    myNextButton.setAttribute("name", btnName);
    myNextButton.classList.add("button");
    // myNextButton.addEventListener('click', () => createDot(x));
    myNextButton.addEventListener('click', (evt) => buttonClickHandler(evt, x));

    document.body.appendChild(myNextButton)
}

// createButton("id1", "dupa");
// createButton("id2", "cipa");
// createButton("id3", "chuj");

for (let i = 0; i < 5; i++) { 
    createButton(i, "elo " + i)
}

const myCounter = document.createElement('p');

    // myCounter.innerText = ();
    // myCounter.setAttribute(" ", );

document.body.appendChild(myCounter)

function createDot(y) {
    
    const myDot = document.createElement('div');

    const colorClass = "color-" + y;
    
    myDot.textContent = y;
    myDot.classList.add("dot", colorClass);

    document.body.appendChild(myDot)
}

//
// ARRAY
const myArr = ['dupa', 'cipa', 'chuj'];
console.log('my arr = ', myArr);
console.log('first elem  = ', myArr[0])
console.log('sec elem  = ', myArr[1])
console.log('third elem  = ', myArr[2])
console.log('4th elem  = ', myArr[3])

myArr.push('cwel');

console.log('my arr afetr add = ', myArr);
console.log('4th elem  = ', myArr[3])

// myArr.pop();
// console.log('my arr afetr pop = ', myArr);

// tu bedziemy wyjebywac 2 elem
const indexToRemove = myArr.indexOf('cipa');
console.log('index to remove = ', indexToRemove);
myArr.splice(indexToRemove, 1);
// myArr.splice(indexToRemove, 2);
console.log('my arr afetr splice = ', myArr);

myArr.forEach((el) => {
    console.log('here elem =', el);
})

myArr.forEach((el, index) => {
    console.log('here elem, my index =', el, index);
})
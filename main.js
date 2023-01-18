// function myFunction(number) {
//     console.log('Result ' + number);
    
// }

// const button = document.createElement('button');

// button.textContent = "Click me 3";
// button.setAttribute('onclick', "myFunction('3')")

// document.getElementById('button3').append(button);

// const myNewButton = document.createElement('button');

// myNewButton.textContent = "Click me 4";
// myNewButton.addEventListener('click', () => myFunction('4'));

// document.body.appendChild(myNewButton)

// function buttonClickHandler(event, content) {
//     // console.log(event);
//     // console.log(event.target);
//     // sayHello(content)
//     logMyId(event)
// } 

// const myNewerButton = document.createElement('button');

// myNewerButton.textContent = "Click me 5";
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
    
//     myNewestButton.textContent = "Click me " + i;
//     myNewestButton.setAttribute("id", i);
//     myNewestButton.addEventListener('click', (evt) => buttonClickHandler(evt, i));

//     document.body.appendChild(myNewestButton);
// }

const parzyste = [];
const nieparzyste = [];

function buttonClickHandler(event, x) {
    createDot(x);
    if (x % 2 === 0) {
        parzyste.push(event.target.name);
        
        
    } else {
        nieparzyste.push(event.target.name);
        
        
    }
    console.log('parzyste, nieparzyste = ', parzyste, nieparzyste);
    myCounter1.innerText = "Parzyste " + parzyste.length;
    myCounter2.innerText = "Nieparzyste " + nieparzyste.length;

}

function smallButtonHandler(p, n) {
        parzyste.forEach((el) => {
        createDot(el);
    })
        nieparzyste.forEach((el) => {
        createDot(el);
    })

}

function createButton(x, name) {
    
    const myNextButton = document.createElement('button');

    myNextButton.textContent = "Click me " + name;
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

const myCounter1 = document.createElement('div');

    myCounter1.innerText = "Parzyste " + parzyste.length;
    myCounter1.classList.add("counter");

document.body.appendChild(myCounter1)


    const smallButton1 = document.createElement('button');

    smallButton1.textContent = "Click";
    // smallButton1.setAttribute("id", p);
    // const smallBtnName1 = 'smallBtn-' + p
    // smallButton1.setAttribute("name", smallBtnName1);
    // smallButton1.classList.add("smallButton");
    // smallButton1.addEventListener('click', () => createDot(x));
    smallButton1.addEventListener('click', () => smallButtonHandler(p));

    document.body.appendChild(smallButton1)


const myCounter2 = document.createElement('div');

    myCounter2.innerText = "Nieparzyste " + nieparzyste.length;
    myCounter2.classList.add("counter");

document.body.appendChild(myCounter2)

const smallButton2 = document.createElement('button');

    smallButton2.textContent = "Click";
    // smallButton2.setAttribute("id", n);
    // const smallBtnName2 = 'smallBtn2-' + n
    // smallButton2.setAttribute("name", smallBtnName2);
    smallButton2.classList.add("smallButton");
    // smallButton1.addEventListener('click', () => createDot(x));
    smallButton2.addEventListener('click', () => smallButtonHandler(n));

    document.body.appendChild(smallButton2)

function createDot(y) {
    
    const myDot = document.createElement('div');

    const colorClass = "color-" + y;
    
    myDot.textContent = y;
    myDot.classList.add("dot", colorClass);

    document.body.appendChild(myDot)
}

//
// ARRAY
// const myArr = ['dupa', 'cipa', 'chuj'];
// console.log('my arr = ', myArr);
// console.log('first elem  = ', myArr[0])
// console.log('sec elem  = ', myArr[1])
// console.log('third elem  = ', myArr[2])
// console.log('4th elem  = ', myArr[3])

// myArr.push('cwel');

// console.log('my arr afetr add = ', myArr);
// console.log('4th elem  = ', myArr[3])

// myArr.pop();
// console.log('my arr afetr pop = ', myArr);

// tu bedziemy wyjebywac 2 elem
// const indexToRemove = myArr.indexOf('cipa');
// console.log('index to remove = ', indexToRemove);
// myArr.splice(indexToRemove, 1);
// // myArr.splice(indexToRemove, 2);
// console.log('my arr afetr splice = ', myArr);

// myArr.forEach((el) => {
//     console.log('here elem =', el);
// })

// myArr.forEach((el, index) => {
//     console.log('here elem, my index =', el, index);
// })
function myFunction(number) {
    console.log('Result ' + number);
    
}

const button = document.createElement('button');

button.textContent = "Clik me 3";
button.setAttribute('onclick', "myFunction('3')") 


document.getElementById('button3').append(button);

const doc = 'document'

console.log(doc)
 
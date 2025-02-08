let paragraph = document.querySelector('p');
paragraph.innerHTML = "I was able to change this through JS. Learning is Crucial"


document.getElementById('4').innerHTML = 'love is beautiful'

document.querySelector('h1').style.fontSize = '50px'

document.getElementById('3').style.backgroundColor = 'yellow';



let newSkill = document.createElement('li');

newSkill.id = '5';  

newSkill.innerHTML = 'this is a test of creating an element with JavaScript.'

document.getElementById('skills').appendChild(newSkill);

//new code for turning h1 into a red color font when clicking and releasing

let element = document.querySelector('h1');

element.onclick =function() {
    element.style.color = 'white';
    element.style.backgroundColor = 'red';
    element.innerHTML = 'This turns red when I click on the heading'
}





const topImage = document.querySelector('.top-image')
const topContent = document.querySelector('.top-content')
const navBar = document.querySelector('nav')
const changeText = document.querySelector('#change-text')
const letterType = document.querySelector('#letter-type')
const imageTag = document.querySelector('img')
const bodyStyle = document.querySelector('body')
const hamMenu = document.querySelector('.ham-menu-cross')
const navLink = document.querySelector('ul')
const imageBox = document.querySelector('.left-image')

let counter = 0;
const typeText = ['frontend developer', 'photographer', 'chess player', 'adventure seeker'];


document.addEventListener('DOMContentLoaded', () => {
    console.log('I was triggered')
    imageTag.style.opacity = 1;
})


const changeAnimation = setInterval(function(){
    letterType.innerHTML = 'a';
    let char = typeText[counter][0];
    if(!(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')){
        changeText.innerHTML = typeText[counter];
    }
    else{
        letterType.innerHTML = 'an';
        changeText.innerHTML = typeText[counter];
    }
    counter++;
    if(counter >= typeText.length){
        counter = 0;
    }
}, 1000)

hamMenu.addEventListener('click', function() {
    hamMenu.classList.toggle('active');
    navLink.classList.toggle('down');
    imageBox.classList.toggle('active');
})
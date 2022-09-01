const topImage = document.querySelector('.top-image')
const changeText = document.querySelector('#change-text')
const letterType = document.querySelector('#letter-type')
const imageTag = document.querySelector('img')

let counter = 0;
const typeText = ['frontend developer', 'photographer', 'chess player', 'adventure seeker'];


// document.addEventListener('DOMContentLoaded', function () {
//     topImage.style.transform = 'translateX(5%)';
// })
document.addEventListener('DOMContentLoaded', () => {
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
function hideLigth(element){
    element.classList.remove('show-img')
    element.classList.add('hide-img')
}
function showLigth(element){
    element.classList.remove('hide-img')
    element.classList.add('show-img')
}
function changeImg(img1,img2){
    hideLigth(img1)
    showLigth(img2)
}

const imgOff = document.querySelector('#img_off')
const imgOn = document.querySelector('#img_on')

document.querySelector('#button_off').addEventListener('click', () => changeImg(imgOn, imgOff))

document.querySelector('#button_on').addEventListener('click', () => changeImg(imgOff, imgOn))
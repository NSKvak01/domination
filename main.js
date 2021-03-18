

function lineThrough (){
    const unorderedItem = document.querySelector('#arguments li')
    unorderedItem.style.textDecoration = 'line-through'
}

lineThrough()

function setImage (id, url){
    const image = document.querySelector(id)
    image.src = url
}

setImage ("#image-1", "https://www.istockphoto.com/resources/images/PhotoFTLP/Color_theme_Green-1279001772.jpg")
setImage ("#image-2", "https://www.istockphoto.com/resources/images/PhotoFTLP/Abstract-Backgrounds-1226241649.jpg")
setImage ("#image-3", "https://www.istockphoto.com/resources/images/PhotoFTLP/Essentials-522001912.jpg")

function removesLastLi (){
    let unorderedItem2 =document.querySelector('ul')
    let last = unorderedItem2.lastChild;
    last.remove();
    last = unorderedItem2.lastChild;
    last.remove()
}

removesLastLi()
removesLastLi()

function changeSize (size, id){
    const text = document.querySelector(id)
    text.style.fontSize = size
}

changeSize ('20px', 'h1')

function passElement (element){
    const unorderedItem = document.querySelector('#arguments')
    unorderedItem.appendChild(element)
}

const image = document.createElement('img')
image.src = "https://images.unsplash.com/photo-1616062006327-e752899f4de0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"

passElement (image)

function imgSize (image){
    image.style.height = '30px'
}
const image1 = document.querySelector('#image-1')
imgSize (image1)

function invisible (element){
    element.classList.add('invisible')
}
const element1 = document.querySelector("#thing-1")
invisible (element1)

function addText(text){
    const newLi = document.createElement('li')
    newLi.innerText = text
    passElement(newLi)
}

addText('this is a new <li>')

function newHeader(headerSize, text){
    const size = 'h'+ headerSize
    const header = document.createElement(size)
    header.innerText = text
    passElement(header)
}

newHeader ('3', 'here is a new header')

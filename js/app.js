// console.log('hello, javascript!')

// adds an H2 element to the DOM
const addH2 = () => {
  // create a new H2 element
  const h2 = document.createElement('h2')
  // define the H2's properties (set the innerText)
  h2.innerText = 'Just Getting started 🚀'
  // attach the new element to the parent element (in this case -- the body)
  document.querySelector('body').append(h2)
}

// select the h2 element and change the inner text
const changeH2 = () => {
  // find the h2 and set the inner text to be something new
  // find an element and change a property
  document.querySelector('h2').innerText = 'my text got changed!'
}

// makes a random rgb value for us
const randomRGB = () => {
  // Math.random() -- returns 'semi-random' between 0 and 1
  // multiplying Math.random() * high value of the range
  // Math.floor -- rounds down
  // Math.ceil -- rounds up
  // Math.round -- does normal rouding (pivots at .5)
  // console.log('our random number is:',  Math.floor(Math.random() * 256))
  const red =  Math.floor(Math.random() * 256)
  const green =  Math.floor(Math.random() * 256)
  const blue =  Math.floor(Math.random() * 256)
  const rgbString = `rgb(${red},${green},${blue})`
  // const rgbString = 'rgb(' + red + ',' + green + ',' + blue + ')'
  // console.log('our random string:', rgbString)
  return rgbString
}

randomRGB() // just for testers

const generateQuilt = numberOfSquares => {
  // addding many divs to the DOM
  for (let i = 0; i < numberOfSquares; i++) {
    // create a new div
    const square = document.createElement('div')
    // add a css class to the div to give it some color
    square.classList.add('square')
    // add a one off style of background color of random color
    square.style.backgroundColor = randomRGB()
    square.innerText = i
    // append the div to the body
    document.querySelector('#quilt-div').append(square)
  }
}

// clear the quilt
const clearQuilt = () => {
  console.log('the button was clicked!')
  // check if there is a child node of the the quilt div
  const quiltDiv = document.querySelector('#quilt-div')
  while (quiltDiv.firstChild) {
    // if there is a child node -- remove it
    quiltDiv.removeChild(quiltDiv.firstChild)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#clear-button').addEventListener('click', clearQuilt)
  document.querySelector('#new-button').addEventListener('click', () => {
    // clear out the quilt
    clearQuilt()
    // generate new quilt
    generateQuilt(1000)
  })
  addH2()
  changeH2()
  generateQuilt(1000)
})
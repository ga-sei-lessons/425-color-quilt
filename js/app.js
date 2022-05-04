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

document.addEventListener('DOMContentLoaded', () => {
  addH2()
  changeH2()
  // addding 1000 divs to the DOM
  for (let i = 0; i < 1000; i++) {
    console.log(i)
  }
})
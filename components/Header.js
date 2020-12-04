// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
const entryPoint = document.querySelector('div.header-container');

function Header() {
    //elements
    const header = document.createElement('div');
    const date = document.createElement('span');
    const head1 = document.createElement('h1');
    const temp = document.createElement('span');
    //assign classes
    header.classList.add('header');
    date.classList.add('date');
    head1.classList.add('head1');
    temp.classList.add('temp');
    //appends
    entryPoint.appendChild(header);
    header.appendChild(date);
    header.appendChild(head1);
    header.appendChild(temp);
    //contents
    date.textContent = `March 28, 2020`;
    head1.textContent = `Lambda Times`;
    temp.textContent = `98°`;

    return header;
}
Header();
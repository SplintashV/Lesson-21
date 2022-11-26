let floorCell = document.querySelector('#floor')
let flatsCell = document.querySelector('#flats')
let floor = document.querySelectorAll('.floor')




//=> - function

console.log(floorCell);
console.log(flatsCell);
console.log(floor);


floor.forEach( path => {
    

    path.addEventListener('mouseover', ()=>{
        let dataFloor = path.getAttribute('data-floor');
        let dataFlats = path.getAttribute('data-flats');

        floorCell.innerText = dataFloor;
        flatsCell.innerText = dataFlats;

    })

});

let apart = document.querySelectorAll('.apart')
let apartCell = document.querySelector ('#aparts')
let flatCell = document.querySelector('#flat')

console.log(apart);
console.log(apartCell);
console.log(flatCell);

apart.forEach( Element => {

    Element.addEventListener('mouseover', () =>{
        
        
        let dataApart = Element.getAttribute('data-apart');
        let dataFlat = Element.getAttribute('data-flat');

        apartCell.innerText = dataApart;
        flatCell.innerText = dataFlat;

    })
});
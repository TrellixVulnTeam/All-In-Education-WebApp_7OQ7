let clickInfo = document.querySelector('#clg-sections-info')
let clickCnF = document.querySelector('#clg-sections-cnf')
let clickAdmi = document.querySelector('#clg-sections-admi')
let clickCO = document.querySelector('#clg-sections-cutoff')

let showInfo =document.querySelector('.selected-information');
let showCNF =document.querySelector('.selected-course-fees');
let showAdmi =document.querySelector('.selected-admission');
let showCuof =document.querySelector('.selected-cutoff');


clickInfo.addEventListener('click', function(){
    clickInfo.style.backgroundColor = "orange";
    clickCnF.style.backgroundColor = "white";
    clickAdmi.style.backgroundColor = "white";
    clickCO.style.backgroundColor = "white";

    showInfo.style.display= "block";
    showCNF.style.display= "none";
    showAdmi.style.display= "none";
    showCuof.style.display= "none";
})


clickCnF.addEventListener('click', function(){
    clickInfo.style.backgroundColor = "white";
    clickCnF.style.backgroundColor = "rgb(253, 178, 37)";
    clickAdmi.style.backgroundColor = "white";
    clickCO.style.backgroundColor = "white";

    showInfo.style.display= "none";
    showCNF.style.display= "grid";
    showAdmi.style.display= "none";
    showCuof.style.display= "none";
})


clickAdmi.addEventListener('click', function(){
    clickInfo.style.backgroundColor = "white";
    clickCnF.style.backgroundColor = "white";
    clickAdmi.style.backgroundColor = "rgb(253, 178, 37)";
    clickCO.style.backgroundColor = "white";

    showInfo.style.display= "none";
    showCNF.style.display= "none";
    showAdmi.style.display= "grid";
    showCuof.style.display= "none";
})


clickCO.addEventListener('click', function(){
    clickInfo.style.backgroundColor = "white";
    clickCnF.style.backgroundColor = "white";
    clickAdmi.style.backgroundColor = "white";
    clickCO.style.backgroundColor = "rgb(253, 178, 37)";

    showInfo.style.display= "none";
    showCNF.style.display= "none";
    showAdmi.style.display= "none";
    showCuof.style.display= "grid";
})
const compare1= document.querySelector('#college1')
const compare2= document.querySelector('#college2')
const clg1=document.querySelector('.compare_grid_1')
const clg2=document.querySelector('.compare_grid_2')
const compare_list=document.querySelector('.compare_list')


const butt= document.querySelector('.butt')

butt.addEventListener('click',()=>{
    const value1= String(compare1.value)
    const value2= String(compare2.value)

    const v1=document.querySelector(`.${value1}_1`)
    const v2=document.querySelector(`.${value2}_2`)
    console.log(value1,value2)
    console.log(v1,v2)

    document.querySelector('.compare_list').style.display="grid"
    v1.style.display="grid"
    v2.style.display="grid"
})
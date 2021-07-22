const ClgObj={
    sidebar_engi:{
        clg0:{
            name:"Ch. Devilal State Institute of Engineering and Technology <br><span>Panniwala Mota , Sirsa , Haryana</span>",
            img:"../img/cdlsiet.jpg",
            href:"colleges/cdlsiet.html"
        },
        clg1:{
            name:"Indian Institute of Technology,<br><span>Powai , Mumbai</span>",
            img:"../img/iitb.jpg",
            href:"colleges/iitm.html"
        },
        clg2:{
            name:"Indian Institute of Technology,<br><span> New Delhi </span>",
            img:"../img/iitd.jpeg"
        },
        clg3:{
            name:"AMITY , <br><span> Noida</span>",
            img:"../img/amitynoida.jpg"
        },
    },

    sidebar_agri:{
        clg0:{
            name:"G.B. Pant University Of Agriculture And Technology,<br><span>Pantnagar , Uttrakhand</span>",
            img:"../img/gbpau.jpg",
            href:"colleges/gbpant.html"
        },
        clg1:{
            name:"Acharya Nai G. Ranga Agricultural University,<br><span>Guntur, Andhra Pradesh</span> ",
            img:"../img/angrau.jpg"
        },
        clg2:{
            name:"Punjab Agricultural University,<br><span>Ludhaiana , Punjab</span>",
            img:"../img/pau.jpg"
        },
        clg3:{
            name:"Tamil Nadu Agricultural University,<br><span>Coimbatore , Tamil Nadu</span>",
            img:"../img/Tnau.jpg"
        },
    },

    sidebar_anim:{
        clg0:{
            name:"National Institute of Design, <br><span>Ahmedabad , Gujarat</span>",
            img:"../img/nid.png"
        },
        clg1:{
            name:"Picasso Animation Department,<br><span>Noida , Uttar Pradesh</span> ",
            img:"../img/pac.jpeg",
            href:"colleges/cdlsiet.html"
        },
        clg2:{
            name:"Whistling Woods International,<br><span> Mumbai , Maharashtra</span>",
            img:"../img/wwi.jpg"
        },
        clg3:{
            name:"Himalayan Institute of Technology,<br><span>Dehradun ,  Uttrakhand</span>",
            img:"../img/hit.jpg"
        },
    },

    sidebar_arch:{
        clg0:{
            name:"Birla Institute of Technology, Mesra, <br><span> Ranchi, Jharkhand</span>",
            img:"../img/bit.jpg"
        },
        clg1:{
            name:"NIT Calicut,<br><span>Kozhikode, Kerala</span> ",
            img:"../img/nit.jpg"
        },
        clg2:{
            name:"CEPT University,<br><span> Ahmedabad,Gujarat</span>",
            img:"../img/cept.jpg"
        },
        clg3:{
            name:"BMS College,<br><span> Bengaluru, Karnataka</span>",
            img:"../img/bms.jpg"
        },
        clg4:{
            name:"Maulana Azad National Institute of Technology<br><span>Bhopal, Madhya Pradesh</span>",
            img:"../img/manit.jpg"
        },
    },

    sidebar_arts:{
        clg0:{
            name:"Madras Christian College, <br><span>Chennai, Tamil Nadu</span>",
            img:"../img/madras.jpg"
        },
        clg1:{
            name:"Lady Shri Ram College for Women,<br><span>New Delhi</span> ",
            img:"../img/lsr.jpg"
        },
        clg2:{
            name:"Hindu College University Of Delhi,<br><span>New Delhi</span>",
            img:"../img/hcd.jpg"
        },
        clg3:{
            name:"Stella Maris,<br><span> Chennai,Tamil Nadu</span>",
            img:"../img/smc.jpg"
        },
        clg4:{
            name:"St. Xavier's College<br><span>Mumbai, Maharastra</span>",
            img:"../img/stx.jpg"
        },
        clg5:{
            name:"Miranda House University Of Delhi<br><span>New Delhi</span>",
            img:"../img/mhd.jpg"
        },
    },

    sidebar_avia:{
        clg0:{
            name:"PARUL UNIVERSITY, <br><span> VADODARA</span>",
            img:"../img/puv.jpg"
        },
        clg1:{
            name:"Kristu Jayanti College, Autonomous,<br><span>Bengaluru , Tamil Nadu/span> ",
            img:"../img/kjc.jpg"
        },
        clg2:{
            name:"JAMIA MILLIA ISLAMIA UNIVERSITY,<br><span>New Delhi</span>",
            img:"../img/jmu.jpg"
        },
    },

    sidebar_dent:{
        clg0:{
            name:"Institute of Medical Sciences, <br><span> BHU, Varanasi</span>",
            img:"../img/ims.jpg"
        },
        clg1:{
            name:"Post Graduate Institute of Dental Science,<br><span>Rohtak,Haryana</span> ",
            img:"../img/pid.jpg"
        },
        clg2:{
            name:"King George's Medical University,<br><span>Luckhnow,UP</span>",
            img:"../img/kgmu.jpg"
        },
        clg3:{
            name:"Maulana Azad Institute Of Dental Sciences,<br><span>Delhi</span>",
            img:"../img/mad.png"
        },
    },

    sidebar_scie:{
        clg0:{
            name:"University of Delhi, <br><span>New Delhi</span>",
            img:"../img/du.jpg"
        },
        clg1:{
            name:"St Stephen's College,<br><span>New Delhi</span> ",
            img:"../img/sts.jpg"
        },
        clg2:{
            name:"Madras Christian College,<br><span>Chennai,Tamil Nadu</span>",
            img:"../img/mcc.jpg"
        },
        
    },

    sidebar_tour:{
        clg0:{
            name:"Indira Gandhi National Open University , <br><span>New Delhi</span>",
            img:"../img/igno.jpg"
        },
        clg1:{
            name:" Guru Gobind Singh Indraprastha University<br><span>New Delhi</span> ",
            img:"../img/ggs.webp"
        },
        clg2:{
            name:"AMITY University,<br><span>Noida</span>",
            img:"../img/amitynoida.jpg"
        },
    },


}

const ClgSele=document.querySelector('.college-selection')
const clg_show_list=document.querySelector(".clg_show_list")
const sidebar_agri= document.querySelector('#sidebar_agri')
const sidebar_anim= document.querySelector('#sidebar_anim')
const sidebar_arch= document.querySelector('#sidebar_arch')
const sidebar_arts= document.querySelector('#sidebar_arts')
const sidebar_avia= document.querySelector('#sidebar_avia')
const sidebar_dent= document.querySelector('#sidebar_dent')
const sidebar_engi= document.querySelector('#sidebar_engi')
const sidebar_scie= document.querySelector('#sidebar_scie')
const sidebar_tour= document.querySelector('#sidebar_tour')


const agri_heading=document.querySelector(".agri_heading")
const anim_heading=document.querySelector(".anim_heading")
const arch_heading=document.querySelector(".arch_heading")
const arts_heading=document.querySelector(".arts_heading")
const avia_heading=document.querySelector(".avia_heading")
const dent_heading=document.querySelector(".dent_heading")
const engi_heading=document.querySelector(".engi_heading")
const scie_heading=document.querySelector(".scie_heading")
const tour_heading=document.querySelector(".tour_heading")


function removeVisibility(naming){
    if(document.querySelector(`.${naming}`)){
        document.querySelector(`.${naming}`).style.display="none"
    }
    else{return}
}


function removeCheck(naming){
    naming.checked=false
}

function forClgList(naming){
    let n= Object.keys(ClgObj[`${naming}`]).length

    let remove_this=document.createElement('div')
    remove_this.classList.add(`${naming}`)

    for(i=0;i<n;i++){

        clg_show_list.appendChild(remove_this)

        let one_clg=document.createElement('a')
        one_clg.classList.add('one_clg')
        one_clg.href=ClgObj[`${naming}`][`clg${i}`].href
        
        remove_this.appendChild(one_clg)

        let img=document.createElement('img')
        one_clg.appendChild(img)
        let p= document.createElement('p')
        one_clg.appendChild(p)

        img.src=ClgObj[`${naming}`][`clg${i}`].img
        p.innerHTML=ClgObj[`${naming}`][`clg${i}`].name
     
        clg_show_list.appendChild(remove_this)

        
    }
    console.log(clg_show_list)
}



sidebar_agri.addEventListener('click',()=>{
    forClgList('sidebar_agri')

    removeVisibility('sidebar_anim')
    removeCheck(sidebar_anim)
    removeVisibility('sidebar_arch')
    removeCheck(sidebar_arch)
    removeVisibility('sidebar_arts')
    removeCheck(sidebar_arts)
    removeVisibility('sidebar_avia')
    removeCheck(sidebar_avia)
    removeVisibility('sidebar_dent')
    removeCheck(sidebar_dent)
    removeVisibility('sidebar_engi')
    removeCheck(sidebar_engi)
    removeVisibility('sidebar_scie')
    removeCheck(sidebar_scie)
    removeVisibility('sidebar_tour')
    removeCheck(sidebar_tour)



})

sidebar_engi.addEventListener('click',()=>{
    forClgList('sidebar_engi')

    
    removeVisibility('sidebar_agri')
    removeCheck(sidebar_agri)
    removeVisibility('sidebar_anim')
    removeCheck(sidebar_anim)
    removeVisibility('sidebar_arch')
    removeCheck(sidebar_arch)
    removeVisibility('sidebar_arts')
    removeCheck(sidebar_arts)
    removeVisibility('sidebar_avia')
    removeCheck(sidebar_avia)
    removeVisibility('sidebar_dent')
    removeCheck(sidebar_dent)
    removeVisibility('sidebar_scie')
    removeCheck(sidebar_scie)
    removeVisibility('sidebar_tour')
    removeCheck(sidebar_tour)
    

})

sidebar_anim.addEventListener('click',()=>{
    forClgList('sidebar_anim')

    
    removeVisibility('sidebar_agri')
    removeCheck(sidebar_agri)
    removeVisibility('sidebar_arch')
    removeCheck(sidebar_arch)
    removeVisibility('sidebar_arts')
    removeCheck(sidebar_arts)
    removeVisibility('sidebar_avia')
    removeCheck(sidebar_avia)
    removeVisibility('sidebar_dent')
    removeCheck(sidebar_dent)
    removeVisibility('sidebar_engi')
    removeCheck(sidebar_engi)
    removeVisibility('sidebar_scie')
    removeCheck(sidebar_scie)
    removeVisibility('sidebar_tour')
    removeCheck(sidebar_tour)
})

sidebar_arch.addEventListener('click',()=>{
    forClgList('sidebar_arch')

    
    removeVisibility('sidebar_agri')
    removeCheck(sidebar_agri)
    removeVisibility('sidebar_anim')
    removeCheck(sidebar_anim)
    removeVisibility('sidebar_arts')
    removeCheck(sidebar_arts)
    removeVisibility('sidebar_avia')
    removeCheck(sidebar_avia)
    removeVisibility('sidebar_dent')
    removeCheck(sidebar_dent)
    removeVisibility('sidebar_engi')
    removeCheck(sidebar_engi)
    removeVisibility('sidebar_scie')
    removeCheck(sidebar_scie)
    removeVisibility('sidebar_tour')
    removeCheck(sidebar_tour)

})

sidebar_arts.addEventListener('click',()=>{
    forClgList('sidebar_arts')

    
    removeVisibility('sidebar_agri')
    removeCheck(sidebar_agri)
    removeVisibility('sidebar_anim')
    removeCheck(sidebar_anim)
    removeVisibility('sidebar_arch')
    removeCheck(sidebar_arch)
    removeVisibility('sidebar_avia')
    removeCheck(sidebar_avia)
    removeVisibility('sidebar_dent')
    removeCheck(sidebar_dent)
    removeVisibility('sidebar_engi')
    removeCheck(sidebar_engi)
    removeVisibility('sidebar_scie')
    removeCheck(sidebar_scie)
    removeVisibility('sidebar_tour')
    removeCheck(sidebar_tour)

})

sidebar_avia.addEventListener('click',()=>{
    forClgList('sidebar_avia')

    
    removeVisibility('sidebar_agri')
    removeCheck(sidebar_agri)
    removeVisibility('sidebar_anim')
    removeCheck(sidebar_anim)
    removeVisibility('sidebar_arch')
    removeCheck(sidebar_arch)
    removeVisibility('sidebar_arts')
    removeCheck(sidebar_arts)
    removeVisibility('sidebar_dent')
    removeCheck(sidebar_dent)
    removeVisibility('sidebar_engi')
    removeCheck(sidebar_engi)
    removeVisibility('sidebar_scie')
    removeCheck(sidebar_scie)
    removeVisibility('sidebar_tour')
    removeCheck(sidebar_tour)

})

sidebar_dent.addEventListener('click',()=>{
    forClgList('sidebar_dent')

    
    removeVisibility('sidebar_agri')
    removeCheck(sidebar_agri)
    removeVisibility('sidebar_anim')
    removeCheck(sidebar_anim)
    removeVisibility('sidebar_arch')
    removeCheck(sidebar_arch)
    removeVisibility('sidebar_arts')
    removeCheck(sidebar_arts)
    removeVisibility('sidebar_avia')
    removeCheck(sidebar_avia)
    removeVisibility('sidebar_engi')
    removeCheck(sidebar_engi)
    removeVisibility('sidebar_scie')
    removeCheck(sidebar_scie)
    removeVisibility('sidebar_tour')
    removeCheck(sidebar_tour)

})

sidebar_engi.addEventListener('click',()=>{
    forClgList('sidebar_engi')

    
    removeVisibility('sidebar_agri')
    removeCheck(sidebar_agri)
    removeVisibility('sidebar_anim')
    removeCheck(sidebar_anim)
    removeVisibility('sidebar_arch')
    removeCheck(sidebar_arch)
    removeVisibility('sidebar_arts')
    removeCheck(sidebar_arts)
    removeVisibility('sidebar_avia')
    removeCheck(sidebar_avia)
    removeVisibility('sidebar_dent')
    removeCheck(sidebar_dent)
    removeVisibility('sidebar_scie')
    removeCheck(sidebar_scie)
    removeVisibility('sidebar_tour')
    removeCheck(sidebar_tour)

})

sidebar_scie.addEventListener('click',()=>{
    forClgList('sidebar_scie')

    
    removeVisibility('sidebar_agri')
    removeCheck(sidebar_agri)
    removeVisibility('sidebar_anim')
    removeCheck(sidebar_anim)
    removeVisibility('sidebar_arch')
    removeCheck(sidebar_arch)
    removeVisibility('sidebar_arts')
    removeCheck(sidebar_arts)
    removeVisibility('sidebar_avia')
    removeCheck(sidebar_avia)
    removeVisibility('sidebar_dent')
    removeCheck(sidebar_dent)
    removeVisibility('sidebar_engi')
    removeCheck(sidebar_engi)
    removeVisibility('sidebar_tour')
    removeCheck(sidebar_tour)

})

sidebar_tour.addEventListener('click',()=>{
    forClgList('sidebar_tour')

    
    removeVisibility('sidebar_agri')
    removeCheck(sidebar_agri)
    removeVisibility('sidebar_anim')
    removeCheck(sidebar_anim)
    removeVisibility('sidebar_arch')
    removeCheck(sidebar_arch)
    removeVisibility('sidebar_arts')
    removeCheck(sidebar_arts)
    removeVisibility('sidebar_avia')
    removeCheck(sidebar_avia)
    removeVisibility('sidebar_dent')
    removeCheck(sidebar_dent)
    removeVisibility('sidebar_engi')
    removeCheck(sidebar_engi)
    removeVisibility('sidebar_scie')
    removeCheck(sidebar_scie)
})






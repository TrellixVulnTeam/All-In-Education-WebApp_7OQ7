// *************************************** quick-look**********************************************************
let main_data={
    'agri':{GRADUATION:'Bachelor of Science(B.Sc)',
       POSTGRADUATION:"Master of Science(M.Sc)",
       THIRD:"PH.D.",
       GRADUATION_LIST:["Agriculture","Horticulture","Fisheries","Agronomy"],
       POSTGRADUATION_LIST:["Agriculture","Horticulture","Fisheries","Agronomy","Forestry",
                                "Genetics and Plant Breeding"],
       THIRD_LIST:["Agriculture","Horticulture","Genetics and Plant Breeding","Agronomy" ] },

    'anim':{GRADUATION:'Bachelor of Science(B.Sc)',
    POSTGRADUATION:"Master of Science(M.Sc)",
    THIRD:"Diploma",
    GRADUATION_LIST:["Animation","Animation and VFX","Animation and Multimedia",
                    "Animation and Visual Effects"],
    POSTGRADUATION_LIST:["Animation","Animation and VFX","Animation and Graphics",
                    "Animation and Multimedia","Animation and Visual Effects"],
    THIRD_LIST:["Animation and Multimedia" ] },

    'arch':{GRADUATION:'Bachelor of Architecture(B.Arch)',
    POSTGRADUATION:"Master of Architecture(M.Arch)",
    THIRD:"PH.D",
    GRADUATION_LIST:["Architecture","Interior Designing"],
    POSTGRADUATION_LIST:["Architecture","Landscape Architecture","Urban Design"],
    THIRD_LIST:["Architecture","Planning" ] },

    'arts':{GRADUATION:'Bachelor of Arts(BA)',
    POSTGRADUATION:"Master of Arts(MA)",
    THIRD:"M.PHIL/PH.D",
    GRADUATION_LIST:["English","Economics","History","Political Science","Sociology","Hindi"],
    POSTGRADUATION_LIST:["English","Economics","History","Geography","Political Science","Sociology",
                        "Hindi"],
    THIRD_LIST:["English","Economics","Sociology" ] },

    'avia':{GRADUATION:'Bachelor of Science(B.Sc)',
    POSTGRADUATION:"BACHELOR OF BUSINESS ADMINISTRATION [BBA]",
    THIRD:"PH.D",
    GRADUATION_LIST:["Aviation"],
    POSTGRADUATION_LIST:["Aviation"],
    THIRD_LIST:["Aviation"] },

    'dent':{GRADUATION:'Bachelor of Dental Surgery(B.DS)',
    POSTGRADUATION:"Master of Dental Surgery(M.DS)",
    THIRD:"M.PHIL/PH.D",
    GRADUATION_LIST:["Dental"],
    POSTGRADUATION_LIST:["Conservative Dentistry and Endodontics","Oral and Maxillofacial Surgery",
"Oral Medicine and Radiology","Prosthodontics,Crown and Bridge","Periodontics","Preventive Dentistry"],
    THIRD_LIST:["Dental Science","Orthodontics" ] },

    'desi':{GRADUATION:'Bachelor of Design(B.DES)',
    POSTGRADUATION:"Master of Design(M.DES)",
    THIRD:"M.PHIL/PH.D",
    GRADUATION_LIST:["Fashion Design","Interior Design","Textile Design"],
    POSTGRADUATION_LIST:["Design","Fashion Management","Fashion Technology"],
    THIRD_LIST:["Design","Fashion Design" ] },

    'engi':{GRADUATION:'Bachelor of Technology(BE/B.Tech)',
    POSTGRADUATION:"Master of Technology(ME/M.Tech)",
    THIRD:"M.PHIL/PH.D",
    GRADUATION_LIST:["Mechnical","Computer Science","Civil","Electronics","Food Technology",
    "Electrical"],
    POSTGRADUATION_LIST:["Mechnical","Computer Science","Civil","Electronics","Food Technology",
    "Electrical"],
    THIRD_LIST:["Mechnical","Computer Science","Civil","Electronics","Food Technology",
    "Electrical","Information Technology" ] },

    'law':{GRADUATION:'LLB',
    POSTGRADUATION:"LLM",
    THIRD:"M.PHIL/PH.D",
    GRADUATION_LIST:["Laws","Arts and Laws","Science and Laws"],
    POSTGRADUATION_LIST:["Criminal Law","Intellectual property Rights","Constitutional Law",
    "Human Rights","Business Law"],
    THIRD_LIST:["Law","Doctorate","Legal Studies" ] },

    'mana':{GRADUATION:'Bachelor of Adminitration/Management(BBA/BBM)',
    POSTGRADUATION:"Master of Adminitration/Management(MBA/PGDM)",
    THIRD:"M.PHIL/PH.D",
    GRADUATION_LIST:["Marketing","Human Resource Management","Finance"],
    POSTGRADUATION_LIST:["Marketing","Human Resource Management","Finance","Information Technology",
"International Business"],
    THIRD_LIST:["Management Studies","Marketing","Business Administration","Finance","Management Studies" ] },

    'mass':{GRADUATION:'Bachelor of Mass Media(BMM)',
    POSTGRADUATION:"Master of  Mass Media(MMM)",
    THIRD:"M.PHIL/PH.D",
    GRADUATION_LIST:["Journalism and Mass Communication","Mass Communication"],
    POSTGRADUATION_LIST:["Journalism and Mass Communication","Mass Communication"],
    THIRD_LIST:["Journalism and Mass Communication","Mass Communication"] },

    'medi':{GRADUATION:'Bachelor of Science(B.Sc)',
    POSTGRADUATION:"MBBS",
    THIRD:"MS/MD",
    GRADUATION_LIST:["Operation Theatre Technology","Occupational Therapy","Audiology and Speech",
"Dialysis","Medical Imaging Technology","Perfusion Technology"],
    POSTGRADUATION_LIST:["Medicine and Surgery"],
    THIRD_LIST:["General Surgery","Orthopaedics","Obstetrics and Gynaecology","E.N.T.","Ophtalmology",
"Anatomy","Otorhinolaryngology" ] },

    'phar':{GRADUATION:'Bachelor of Pharmacy(B.Pharm)',
    POSTGRADUATION:"Master of Pharmacy(M.Pharm)",
    THIRD:"M.PHIL/PH.D",
    GRADUATION_LIST:["Pharmaceutics","Ayurveda","Pharmaceutical Chemistry","Pharmacology"],
    POSTGRADUATION_LIST:["Pharmaceutics","Ayurveda","Pharmaceutical Analysis",
    "Pharmaceutical Chemistry","Pharmacology","Quality Assurance","Pharmacognosy"],
    THIRD_LIST:["Pharmaceutics","Ayurveda","Pharmaceutical Chemistry","Pharmacology"] },

    'scie':{GRADUATION:'Bachelor of Science(B.Sc)',
    POSTGRADUATION:"Master of Science(M.Sc)",
    THIRD:"M.PHIL/PH.D",
    GRADUATION_LIST:["Physics","Chemistry","Computer SCience","Mathematics","Zoology","Botany"],
    POSTGRADUATION_LIST:["Physics","Chemistry","Computer SCience","Mathematics","Zoology","Botany"],
    THIRD_LIST:["Physics","Chemistry","Biotechnology","Computer SCience","Mathematics","Zoology","Botany" ] },

    
}



let agri = document.querySelector('.agri')
let anim = document.querySelector('.anim')
let arch = document.querySelector('.arch')
let arts = document.querySelector('.arts')
let avia = document.querySelector('.avia')
let dent = document.querySelector('.dent')
let desi = document.querySelector('.desi')
let engi = document.querySelector('.engi')
let law = document.querySelector('.law')
let mana = document.querySelector('.mana')
let mass = document.querySelector('.mass')
let medi = document.querySelector('.medi')
let scie = document.querySelector('.scie')
let phar = document.querySelector('.phar')

let GRADUATION = document.querySelector('.GRADUATION')
let POSTGRADUATION = document.querySelector('.POSTGRADUATION')
let THIRD = document.querySelector('.THIRD')
let GRADUATION_LIST = document.querySelector('.GRADUATION_LIST')
let POSTGRADUATION_LIST = document.querySelector('.POSTGRADUATION_LIST')
let THIRD_LIST = document.querySelector('.THIRD_LIST')


var callThis= ()=>{
    GRADUATION.classList.add('set_font')
    POSTGRADUATION.classList.add('set_font')
    THIRD.classList.add("set_font")
    GRADUATION_LIST.classList.add('set_font2')
    POSTGRADUATION_LIST.classList.add('set_font2')
    THIRD_LIST.classList.add("set_font2")
}


var toAddClass=()=>{
    agri.classList.remove("colorme")
    anim.classList.remove("colorme")
    arch.classList.remove("colorme")
    arts.classList.remove("colorme")
    avia.classList.remove("colorme")
    dent.classList.remove("colorme")
    desi.classList.remove("colorme")
    engi.classList.remove("colorme")
    law.classList.remove("colorme")
    mana.classList.remove("colorme")
    mass.classList.remove("colorme")
    medi.classList.remove("colorme")
    phar.classList.remove("colorme")
    scie.classList.remove("colorme")
}

var function1= function(vari){
    GRADUATION.innerHTML=main_data[vari].GRADUATION
    POSTGRADUATION.innerHTML=main_data[vari].POSTGRADUATION
    THIRD.innerHTML=main_data[vari].THIRD
    GRADUATION_LIST.innerHTML=main_data[vari].GRADUATION_LIST
    POSTGRADUATION_LIST.innerHTML=main_data[vari].POSTGRADUATION_LIST
    THIRD_LIST.innerHTML=main_data[vari].THIRD_LIST
}

agri.addEventListener('click',()=>{
    function1('agri');

    callThis();

    toAddClass();

    agri.classList.add("colorme")
    
})

anim.addEventListener('click',()=>{
    function1('anim');

    callThis();

    toAddClass();
    anim.classList.add("colorme")
    
})

arch.addEventListener('click',()=>{
    function1('arch');

    callThis();

    toAddClass();
    arch.classList.add("colorme")
    
})

arts.addEventListener('click',()=>{
    function1('arts');

    callThis();

    toAddClass();
    arts.classList.add("colorme")
    
})

avia.addEventListener('click',()=>{
    function1('avia');

    callThis();

    toAddClass();
    avia.classList.add("colorme")
})

dent.addEventListener('click',()=>{
    function1('dent');

    callThis();

    toAddClass();
    dent.classList.add("colorme")
    
})

desi.addEventListener('click',()=>{
    function1('desi');

    callThis();

    toAddClass();
    desi.classList.add("colorme")
   
})

engi.addEventListener('click',()=>{
    function1('engi');

    callThis();

    toAddClass();
    engi.classList.add("colorme")

})

law.addEventListener('click',()=>{
    function1('law');

    callThis();

    toAddClass();
    law.classList.add("colorme")
    
})

mana.addEventListener('click',()=>{
    function1('mana');

    callThis();

    toAddClass();
    mana.classList.add("colorme")
    
})

mass.addEventListener('click',()=>{
    function1('mass');

    callThis();

    toAddClass();
    mass.classList.add("colorme")
    
})

medi.addEventListener('click',()=>{
    function1('medi');

    callThis();

    toAddClass();
    medi.classList.add("colorme")
    
})

scie.addEventListener('click',()=>{
    function1('scie');

    callThis();

    toAddClass();
    scie.classList.add("colorme")
})

phar.addEventListener('click',()=>{
    function1('phar');

    callThis();

    toAddClass();
    phar.classList.add("colorme")
 
})
//*************************************************************************************************************** */


//******************************************** local storage*********************************************/



//*************************************************************************************************************** */

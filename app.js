function modeChange(){
    let bodyBack = document.querySelector('.body');
    let textOn = document.querySelector('.h1-3')
    let textOn2 = document.querySelector('.h1-4')
    let nav = document.querySelector('ul')
    let checkbox = document.querySelector('.check')
    let lighttext = document.querySelector('.h3')
    let icons = document.querySelector('#icons')

    if(checkbox.checked){
        lighttext.innerText=("โหมดกลางคืน")  
        icons.classList.replace('fa-sun','fa-moon')
    }
    else{
        lighttext.innerText=("โหมดกลางวัน")
        icons.classList.replace('fa-moon','fa-sun')
    }
    
    bodyBack.classList.toggle('darkBody');
    textOn.classList.toggle('darkh1-3')
    textOn2.classList.toggle('darkh1-4')
    nav.classList.toggle('darkul')

}


//              <i class="fa-solid fa-moon fa-xl"></i>

const jpBtn = document.getElementById('jpBtn');
const enBtn = document.getElementById('enBtn');
const resumeEn = document.getElementById('resumeEn');
const resumeJp = document.getElementById('resumeJp');
const mainIntro = document.getElementById('mainIntro');




document.addEventListener("DOMContentLoaded", function(){
    enBtn.addEventListener('click',
        ()=>{
            resumeJp.classList.remove('displayNone')
            resumeEn.classList.remove('displayNone')
            mainIntro.classList.add('displayNone')
            resumeJp.classList.toggle('displayNone')
        }
    )
    jpBtn.addEventListener('click',
        ()=>{
            resumeJp.classList.remove('displayNone')
            resumeEn.classList.remove('displayNone')
            mainIntro.classList.add('displayNone')
            resumeEn.classList.toggle('displayNone')
        }
    )
    
});







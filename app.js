const jpBtn = document.getElementById('jpBtn');
const enBtn = document.getElementById('enBtn');
const resumeEn = document.getElementById('resumeEn');
const resumeJp = document.getElementById('resumeJp');
const mainIntro = document.getElementById('mainIntro');
const introSvg = document.getElementById('introSvg');
const redCtrl = document.getElementById('redCtrl');
const greenCtrl = document.getElementById('greenCtrl');
const blueCtrl = document.getElementById('redCtrl');









document.addEventListener("DOMContentLoaded", function(){
    enBtn.addEventListener('click',
        ()=>{
            resumeJp.classList.remove('displayNone');
            resumeEn.classList.remove('displayNone');
            mainIntro.classList.add('displayNone');
            resumeJp.classList.toggle('displayNone');
        }
    )
    jpBtn.addEventListener('click',
        ()=>{
            resumeJp.classList.remove('displayNone');
            resumeEn.classList.remove('displayNone');
            mainIntro.classList.add('displayNone');
            resumeEn.classList.toggle('displayNone');
        }
    )

});


function changeColor(){
    const redCtrlVal= redCtrl.value;
    const greenCtrlVal= greenCtrl.value;
    const blueCtrlVal= blueCtrl.value;
    const rgb = `rgb(${redCtrlVal},${greenCtrlVal},${blueCtrlVal})`
    introSvg.setAttribute("fill", rgb)
}




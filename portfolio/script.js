const typingElement=document.getElementById("text");
const typingTexts=["Web Developer",];
function play(text1){
    for(let i=0;i<text1.length;i++){
        setTimeout(()=>{
            typingElement.textContent+=text1[i];
        },i*200);
    }
setTimeout(()=>{
    typingElement.textContent="";
    play(typingTexts[(typingTexts.indexOf(text1)+1)%typingTexts.length]);
},text1.length*200);
}
play(typingTexts[0]);
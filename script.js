 const genBtn=document.querySelector('#GenerateBtn');
 const passArea=document.querySelector('#textArea');
 const upperEl=document.querySelector('#upper');
 const lowerEl=document.querySelector('#lower');
 const specailEl=document.querySelector('#specail');
 var copyBtn=document.getElementById('clearBtn')
 var Lower = 'abcdefghijklmnopqrstuvwxyz';
 var Upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var Specail="!@#$%^&*()_+1234567890"

 var SavingArray;


 const lengthEl=document.getElementById('length');
genBtn.addEventListener('click',()=>{
    SavingArray=[]

    var saving='';


const lengthValue=lengthEl.value;
if(upperEl.checked){
    saving+=Upper
}if(lowerEl.checked){
    saving+=Lower
}if(specailEl.checked){
    saving+=Specail
}

console.log('saving',saving,lengthValue)

generatepass(saving,lengthValue)

})



function generatepass(saveing,lengthValue){

for(var i=0;i<lengthValue;i++){
chooseRand=Math.floor(Math.random()*saveing.length);

console.log('choose random',chooseRand)
SavingArray.push(saveing[chooseRand])
 passArea.textContent=SavingArray.join("")

}






}





// const SavingArray=[]
// var Numbers=[1,2,3,4,5,6,7,8,9,0];
// var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// var specailRan="!@#$%^&*()_+"
// genBtn.addEventListener('click',myfun)


// function myfun(){

//     var ranNo=Math.floor(Math.random()*Numbers.length);

//     while(SavingArray.length<8){
//         var ranNo=Math.floor(Math.random()*Numbers.length)+1;
// SavingArray.push(ranNo)


// var letterIndex=Math.floor(Math.random()*characters.length)
// SavingArray.push(characters[letterIndex])
// console.log('letter index',SavingArray);

// var specailIndex=Math.floor(Math.random()*specailRan.length);


// SavingArray.push(specailRan[specailIndex])
// console.log('specail index',specailRan[specailIndex]);


//     }
//     console.log('random number',SavingArray)

// let m=SavingArray.join("")
//     console.log('a',m)





// passArea.innerHTML=m;




// }
copyBtn.addEventListener('click',()=>{
   var valuePass=passArea.value;
    console.log('copies this value',valuePass)
   navigator.clipboard.writeText(valuePass)
   window.alert('copied')
})

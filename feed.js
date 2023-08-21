function feedback(){


    let feedback = document.getElementById("feedback").value
    let mail = document.getElementById("mail").value



    sessionStorage.setItem('sessionfeedback',feedback);
    sessionStorage.setItem('sessionmail',mail);

    console.log(feedback);
    console.log(mail);

   
}


/*function rating(){

    let st1=document.getElementById("st1").value
    let st2=document.getElementById("st2").value
 
    let st4=document.getElementById("st4").value
    let st5=document.getElementById("st5").value

    sessionStorage.setItem('sessionst1',st1);
    
    sessionStorage.setItem('sessionst2',st2);
    
   
 sessionStorage.setItem('sessionst4',st4);

    sessionStorage.setItem('sessionst5',st5);

    console.log(1);
    console.log(2);
    console.log(4);
    console.log(5);

}*/

function st1(){
    let st1 = document.getElementById("st1").value

    sessionStorage.setItem('sessionst1',st1);

    console.log(1);
}

function st2(){
    let st2= document.getElementById("st2").value

    sessionStorage.setItem('sessionst2',st2);

    console.log(2);
}

function st3(){
    let st3 = document.getElementById("st3").value

    sessionStorage.setItem('sessionst3',st3);

    console.log(3);
}

function st4(){
    let st4 = document.getElementById("st4").value

    sessionStorage.setItem('sessionst4',st4);

    console.log(4);
}

function st5(){
    let st5 = document.getElementById("st5").value

    sessionStorage.setItem('sessionst5',st5);

    console.log(5);
}
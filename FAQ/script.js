let content = document.querySelectorAll(".sub");

let btn1 = document.querySelector("#icon1");
let btn2 = document.querySelector("#icon2");
let btn3 = document.querySelector("#icon3");



let btns = document.querySelectorAll("i");
console.log(btns);
btns.forEach((btn,index) => {
    btn.addEventListener("click",() => {
      

        
        content[0].classList.add("dis_none");
        content[1].classList.add("dis_none");
        content[2].classList.add("dis_none");



        if(btn == btns[index])
        {
            content[index].classList.toggle("dis_none");
        }



        // if(btn == btn1){
        //     content[0].classList.toggle("dis_none");
        //     content[1].classList.add("dis_none");
        //     content[2].classList.add("dis_none");
        // }
        // else if(btn == btn2){
        //     content[1].classList.toggle("dis_none");
        //     content[0].classList.add("dis_none");
        //     content[2].classList.add("dis_none");
        // }
        // else{
        //     content[2].classList.toggle("dis_none");
        //     content[0].classList.add("dis_none");
        //     content[1].classList.add("dis_none");
        // }
    })
});
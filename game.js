let boxes=document.querySelectorAll(".box");
let resbtn=document.querySelector("#reset-btn");
let winningptn=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let turn0=true;
let msg=document.querySelector(".msg");
let msg_container=document.querySelector(".msg_container");
let hide=document.querySelector(".hide");
let newbtn=document.querySelector("#newbtn");
const enablebtn=()=>{
    for(let box of boxes){
    box.disabled=false;
    hide.classList.add("hide");
    box.innerText="";
    }
}
const disablebtn=()=>{
    for(let box of boxes){
    box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Winner is ${winner} Congratulations`;
    hide.classList.remove("hide");
    disablebtn();
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="O";
            
            turn0=false;
        }else{
            box.innerText="X";
            
            turn0=true;
        }
        box.disabled=true;
    checkWinner();
   

        
    });
});
const checkWinner=()=>{
    for(let pattern of winningptn){
       
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log(`Winner is ${pos1}`);
                showWinner(pos1);
            }
        }

    }
};
const resetbtn=()=>{
    turn0=true;
    enablebtn();
}
newbtn.addEventListener("click",resetbtn);
resbtn.addEventListener("click",resetbtn);
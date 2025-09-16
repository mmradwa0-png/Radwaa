let input =document.getElementById("taskinput");
let list=document.getElementById("tasklist");
let btn=document.getElementById("addBtn");

btn.onclick =function(){
    let task=input.value.trim();
if(task==="")
return;
let li=document.createElement("li");
li.textContent=task;

let delBtn=document.createElement("button");
delBtn.textContent="deletBtn";
delBtn.onclick=function(){
    li.remove();
};

li.appendChild(delBtn);
list.appendChild(li);
input.value="";

};
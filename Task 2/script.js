let createbtn=document.querySelector(".create-btn");
let listdiv=document.querySelector(".list-div");
let tasklist=document.querySelector(".tasklist");
let taskinput =document.querySelector("#newtask");
let deadlineinput =document.querySelector("#deadline");
let priorityinput =document.querySelector("#priority");
console.log(tasklist);
createbtn.addEventListener("click",()=>{
    let newtask =taskinput.value;
    let deadline =deadlineinput.value;
    let priority =priorityinput.value;
    console.log(newtask);
    let newli = document.createElement("li");
    newli.classList.add("list-item")
    let newliinnerHtml=`<span>${newtask}</span>
        <span>${deadline}</span>
        <span>${priority}</span>
        <div class="task-btn">
        <button class="done">Done</button>
        <button class="dlt">Delete</button>
    </div>`;
    newli.innerHTML=newliinnerHtml;
    tasklist.append(newli);
    taskinput.value="";
    deadlineinput.value="";
});

tasklist.addEventListener("click", (e)=>{
    if(e.target.classList.contains("done")){
        const liitem=e.target;
        const lispan = e.target.parentNode.parentNode.firstElementChild;
        console.log(lispan)
        lispan.style.color="green";
        liitem.innerHTML="Completed"
        lispan.style.textDecoration="line-through";
    }
    if(e.target.classList.contains("dlt")){
        const targetli = e.target.parentNode.parentNode;
        targetli.remove();
    }
});
"use strict"

const $ = selector => document.querySelector(selector);

const list= ["Do labs 1-5", "Go Jogging", "Study for Quizzes", "Clean Kitchen", "Clean Room"];


const displayList = () => {
let listDisplayed = "";
for(let i = 0; i < list.length; i++){
 listDisplayed += list[i] + "\n";
}
$("#list_display").value = listDisplayed;
}

const addToList = () => {
const itemAdded  = $("#addTask").value;
let isValid = true;
if(itemAdded == ""){
!isValid
} 
if(isValid){
 list[list.length] = itemAdded;
 $("#addTask").value = " "; 
 displayList();
  
 $("#addTask").focus();
}
}

const removeFromList = () => {
const itemRemove = $("#removeTask").value; 
for(let i = 0; i < list.length;i++){
    if(itemRemove == list[i]){
        list.splice(i,1);
        displayList();
    } else{
        displayList();
    }
} 

}



document.addEventListener("DOMContentLoaded", () => {
    
    displayList();
    $("#addButton").addEventListener("click", addToList);
    $("#removeButton").addEventListener("click",removeFromList);

});
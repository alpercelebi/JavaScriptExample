class UI{
    constructor(first,second){
        this.first=first;
        this.second=second;

        this.outputFirst=document.getElementById("outputFirst");
        this.outputSecond=document.getElementById("outputSecond");
        this.outputResult=document.getElementById("outputResult");


    }
    firstchange(){
        this.outputFirst.textContent=this.first.options[this.first.selectedIndex].textContent;
    }
    secondchange(){
        this.outputSecond.textContent=this.second.options[this.second.selectedIndex].textContent;
    }
    displayResult(result){
        this.outputResult.value=result;
    }
}
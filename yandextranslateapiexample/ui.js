function UI(){
    this.outputImage=document.getElementById("outputImage");
    this.outputLanguage=document.getElementById("outputLanguage");
    this.outputWord=document.getElementById("outputWord");

    this.languageList=document.getElementById("language");

}
UI.prototype.changeUI=function(){
    this.outputImage=`images/${this.languageList.value}.png`;
    this.outputLanguage.innerHTML=this.languageList.options[this.languageList.selectedIndex].textContent;

}

UI.displayTranslate=function(word){
    this.outputWord.word;
}
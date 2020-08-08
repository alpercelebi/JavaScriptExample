
eventListeners();

function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit",translateword);
    //change
    document.getElementById("language").onchange=function(){
        ui.changeUI();
    }

}
const ui=new UI();
const translate=new Translate(document.getElementById("word").value,document.getElementById("language").value);
function translateword(e){

    translate.changeParameters(document.getElementById("word".value,document.getElementById("language".value)));
    translate.translateword(function(err,response){
        if(err==null){
            console.log(err);
        }
        else{
            ui.displayTranslate(response);
        }
    });
    e.preventDefault();
}
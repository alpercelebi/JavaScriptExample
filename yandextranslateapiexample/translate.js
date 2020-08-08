function Translate(word,language){
    this.apikey='trnsl.1.1.20180930T080756Z.753c49142579b043.b2798189b8760e7b357c9d23a873ef0a54be481';
    this.word=word;
    this.language=language;

    //ajax xhr httprequest create
    this.xhr=new XMLHttpRequest();


}

Translate.prototype.translateword=function(callback){
    const endpoint=`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;
    this.xhr.open("GET",endpoint);
    this.xhr.onload=()=>{
        if(this.xhr.status===200){
            const json=JSON.parse(this.xhr.responseText);
            const text=json.text[0];
            callback(null,text);
        }
        else{
            callback("Hata Oluştu.",null);
        }
    }
    this.xhr.send();
}

Translate.prototype.changeParameters=function(newWord,newLanguage){
    this.word=newWord;
    this.language=newLanguage();
}


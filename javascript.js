var button = document.querySelector("#button");
var translate = document.querySelector(".output");
var text = document.querySelector("#textarea");
// var checkbox = document.querySelector("input[type='checkbox']");
// console.log(text);
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function urlCreater(serverURL) {
    return serverURL + "?text=" + text.value;
}

function errorHandling(error) {
    console.log("error occured",error.message);
    alert("Server is down")
}
function eventListener() {
        fetch(urlCreater(serverURL)).then(response => response.json()).then(json => {
        translate.innerText = json.contents.translated;
        // console.log(json.contents);
    }).catch(errorHandling)
}
button.addEventListener("click", eventListener);
// console.log(button);
// console.log("clicked");
// console.log(text.value);
// console.log(checkbox);
// translated.innerText = text.value;
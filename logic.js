start()

function start() {
    let question = document.getElementById("question");
    let noButton = document.getElementsByClassName("noButton")[0];
    let yesButton = document.getElementsByClassName("yesButton")[0];
    let picture = document.getElementById("cat");
    let happyCat = document.getElementById("happyCat");
    let yesResponse = document.getElementById("yesResponse");
    let backgroundImg = document.getElementById("backgroundIMG");

    let baseYesSize = 30;
   
    noButton.addEventListener('mouseover', function() {
        picture.style.visibility = 'visible';
        backgroundImg.style.visibility = "hidden";
        noButton.style.top = Math.floor(Math.random()*80) + '%'
        noButton.style.left = Math.floor(Math.random()*80) + '%'
        baseYesSize += 10;
        yesButton.style.fontSize =  `${baseYesSize}px`
    })
   
    yesButton.addEventListener('click', function() {
        question.style.visibility = "hidden";
        noButton.style.visibility = "hidden";
        yesButton.style.visibility = "hidden";
        happyCat.style.visibility = "visible";
        yesResponse.style.visibility = "visible";
        backgroundImg.style.visibility = "hidden";
    })
}
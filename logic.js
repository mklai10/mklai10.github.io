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
    let baseNoSize = 30;
   
    noButton.addEventListener('mouseover', function() {
        picture.style.visibility = 'visible';
        backgroundImg.style.visibility = "hidden";
        // noButton.style.top = Math.floor(Math.random()*80) + '%'
        // noButton.style.left = Math.floor(Math.random()*80) + '%'
        // baseYesSize += 100;
        yesButton.style.fontSize =  `${baseYesSize}px`
    })

    noButton.addEventListener('mouseover', function() {
        noButton.style.fontSize = `${baseNoSize * 1.2}px`
    })

    noButton.addEventListener('mouseout', function() {
        noButton.style.fontSize = `${baseNoSize}px`
    })
   
    yesButton.addEventListener('click', function() {
        question.style.visibility = "hidden";
        noButton.style.visibility = "hidden";
        yesButton.style.visibility = "hidden";
        happyCat.style.visibility = "visible";
        yesResponse.style.visibility = "visible";
        backgroundImg.style.visibility = "hidden";
    })

    yesButton.addEventListener('mouseover', function() {
        yesButton.style.fontSize = `${baseYesSize * 1.2}px`
    })

    yesButton.addEventListener('mouseout', function() {
        yesButton.style.fontSize = `${baseYesSize}px`
    })
}

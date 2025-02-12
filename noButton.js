

function moveNoButton(event) {
    let noButton = document.getElementsByClassName("noButton")[0];
    let currentLeft = window.getComputedStyle(noButton,null).getPropertyValue('left').match(/\d+/)[0];
    let currentTop = window.getComputedStyle(noButton,null).getPropertyValue('top').match(/\d+/)[0];

    let rect = noButton.getBoundingClientRect();
    let diffX = event.x - rect.x;
    let diffY = event.y - rect.y;

    let distance = Math.sqrt((diffX * diffX) + (diffY * diffY));

    // if (Math.abs(diffX) <= 50) {
    //     noButton.style.left = `${parseInt(currentLeft) + (diffX > 0 ? -1 : 1)}px`;
    // }

    // if (Math.abs(diffY) <= 50) {
    //     noButton.style.top = `${parseInt(currentTop) + (diffY > 0 ? -1 : 1)}px`;
    // }

    if (distance <= 50) {
        let rightVelocity = 1;
        let leftVelocity = 1;
        let upVelocity = 1;
        let downVelocity = 1;
        
        if (rect.x >= screen.availWidth - 50) {
            rightVelocity = 0;
        } 
        
        if (rect.x <= 50) {
            leftVelocity = 0;
        } 
        
        if (rect.y >= screen.availHeight - 120) {
            downVelocity = 0;
        }  
        
        if (rect.y <= 50) {
            upVelocity = 0;
        } 

        console.log(rightVelocity);

        noButton.style.left = `${parseInt(currentLeft) - (diffX > 0 ? (diffX * leftVelocity / 5) : (diffX * rightVelocity / 5))}px`;
        noButton.style.top = `${parseInt(currentTop) - (diffY > 0 ? (diffY * upVelocity / 5) : (diffY * downVelocity / 5))}px`;
    }
}
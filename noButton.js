

function moveNoButton(event) {
    let noButton = document.getElementsByClassName("noButton")[0];
    let currentLeft = window.getComputedStyle(noButton,null).getPropertyValue('left').match(/\d+/)[0];
    let currentTop = window.getComputedStyle(noButton,null).getPropertyValue('top').match(/\d+/)[0];

    let rect = noButton.getBoundingClientRect();
    // console.log(rect.x, event.x);
    let diffX = event.x - rect.x;
    let diffY = event.y - rect.y;

    let distance = Math.sqrt((diffX * diffX) + (diffY * diffY));

    // console.log(screen.availHeight);
    // console.log(rect.y);
    
    // if (Math.abs(diffX) <= 50) {
    //     noButton.style.left = `${parseInt(currentLeft) + (diffX > 0 ? -1 : 1)}px`;
    // }

    // if (Math.abs(diffY) <= 50) {
    //     noButton.style.top = `${parseInt(currentTop) + (diffY > 0 ? -1 : 1)}px`;
    // }

    if (distance <= 50) {
        // noButton.style.left = `${parseInt(currentLeft) + (diffX > 0 ? -(Math.abs(diffX)) : (Math.abs(diffX)))}px`;
        // noButton.style.top = `${parseInt(currentTop) + (diffY > 0 ? (-1 / diffY) : (1 / diffY))}px`;

        let onWall = false;
        
        if (rect.x >= screen.availWidth - 50) {
            onWall = true;
            onRightWall(event, noButton, currentTop, currentLeft);
        } 
        
        if (rect.x <= 50) {
            onWall = true;
            onLeftWall(event, noButton, currentTop, currentLeft);
        } 
        
        if (rect.y >= screen.availHeight - 120) {
            onWall = true;
            onBottomWall(event, noButton, currentTop, currentLeft);
        }  
        
        if (rect.y <= 50) {
            onWall = true;
            onTopWall(event, noButton, currentTop, currentLeft);
        } 
        
        if (!onWall) {
            noButton.style.left = `${parseInt(currentLeft) - (diffX / 5)}px`;
            noButton.style.top = `${parseInt(currentTop) - (diffY / 5)}px`;
        }
    }
}

function onRightWall(event, button, top, left) {
    let rect = button.getBoundingClientRect();
    let diffX = event.x - rect.x;
    let diffY = event.y - rect.y;

    console.log(diffX)
    button.style.top = `${parseInt(top) - (diffY / 5)}px`;
    if (diffX > 0) {
        button.style.left = `${parseInt(left) - (diffX / 5)}px`;
    }
}

function onLeftWall(event, button, top, left) {
    let rect = button.getBoundingClientRect();
    let diffX = event.x - rect.x;
    let diffY = event.y - rect.y;

    button.style.top = `${parseInt(top) - (diffY / 5)}px`;
    if (diffX < 0) {
        button.style.left = `${parseInt(left) - (diffX / 5)}px`;
    }
}

function onTopWall(event, button, top, left) {
    let rect = button.getBoundingClientRect();
    let diffX = event.x - rect.x;
    let diffY = event.y - rect.y;

    button.style.left = `${parseInt(left) - (diffX / 5)}px`;
    if (diffY < 0) {
        button.style.top = `${parseInt(top) - (diffY / 5)}px`;
    }
}

function onBottomWall(event, button, top, left) {
    let rect = button.getBoundingClientRect();
    let diffX = event.x - rect.x;
    let diffY = event.y - rect.y;

    button.style.left = `${parseInt(left) - (diffX / 5)}px`;
    if (diffY > 0) {
        button.style.top = `${parseInt(top) - (diffY / 5)}px`;
    }
}


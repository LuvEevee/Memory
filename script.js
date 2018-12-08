var arrOfImages = ["Nintendo_Banana.jpg", "Nintendo_BlueShell.jpg", "Nintendo_Coin.jpg", "Nintendo_GreenMushroom.png", "Nintendo_Mushroom.jpg", "Nintendo_MysteryBox.jpg", "Nintendo_RedShell.jpg", "Nintendo_Star.png", "Nintenodo_GreenShell.jpg"];

function doubleImages(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        arr.push(arr[i]);
    }
    return arr;
}
console.log(doubleImages(arrOfImages));

function displayCards(arr) {
    // instead of a list, we're going to grab the empty div so we can add to it later
    var container = document.getElementById("container");
    
    // for each image in our array
    for (var i = 0; i < arr.length; i++) {
        // create a new HTML image element
        var newImgElement = document.createElement("img");
        // set the src of the img tag to be the name of the file
        newImgElement.src =  arr[i];
        // give the element an id 
        newImgElement.id = i;
        // give the element a class so CSS can be applied to it
        newImgElement.className = "card";
        // add the element to the container div
        container.appendChild(newImgElement);
    }
}


function shuffleCards(arr) {
    for (var i = 0; i < arr.length; i++) {
        // get 2 random index values
        var idx1 = Math.floor(Math.random()*arr.length);
        var idx2 = Math.floor(Math.random()*arr.length);
    
        // swap them in the array
        var temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }
    return arr;
}
    
// let's shuffle the cards BEFORE we display them!
shuffleCards(arrOfImages);
displayCards(arrOfImages);

function hideACard(idx) {
    // get the image with the specified idx/id
    var specificCard = document.getElementById(idx);
    // set the image's source to the question mark
    specificCard.src = "questionmark.png";
}
    
// call on the hideACard function for each card in our array of images
for (var i = 0; i < arrOfImages.length; i++) {
    // let's call on the hideACard function we just made
    hideACard(i);
}
function revealCard(event) {    // this time, the click event is going to be the input
    // the event actually contains the element (and all its attributes)
    // we'll use it to get the id of the element that was clicked
    var clickedImageId = event.target.id;
        
    // grab the element that was clicked on
    var clickedImage = document.getElementById(clickedImageId); 
    // update the image's source to show a different picture
    clickedImage.src = arrOfImages[clickedImageId]; }
    var cards = document.getElementsByClassName("card");    // grab all the cards
for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", revealCard);
}
var cardsPicked = [];    // outside the function, we'll keep track of which cards have been picked
function revealCard(event) {
    var clickedImageId = event.target.id;
        
    var clickedImage = document.getElementById(clickedImageId); 
    clickedImage.src = arrOfImages[clickedImageId];
    
    // add the clicked image to our array
    cardsPicked.push(clickedImageId);
    
    // if 2 cards have been picked
    if (cardsPicked.length == 2) {
        // if the 2 selected images are the same
        if (arrOfImages[cardsPicked[0]] == arrOfImages[cardsPicked[1]]) {
            // resets the cards picked
            cardsPicked = [];
        } else {
            // make a function that will flip the cards back over
            var hidePickedCards = function() {
                hideACard(cardsPicked[0]);    // remember this function from earlier?
                hideACard(cardsPicked[1]);
                cardsPicked = [];
            }
            window.setTimeout(hidePickedCards, 500);
        }
    }
}

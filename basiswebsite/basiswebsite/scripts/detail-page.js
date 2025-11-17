let likeButton = document.querySelector("main section:nth-of-type(9) button:last-of-type")


likeButton.addEventListener("click", addToFavorites);

function addToFavorites() {
    var element = document.querySelector("main section:nth-of-type(9) button:last-of-type");
    element.classList.toggle("liked");
}
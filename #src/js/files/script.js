const searchResult = document.querySelector('.header_search__result');
searchResult.hidden = false;

document.addEventListener('click', function(event) {
    var isClickInsideElement = searchResult.contains(event.target);
    if (!isClickInsideElement) {
        
        searchResult.hidden = true;
    }
});
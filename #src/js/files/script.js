//search ///
const searchResult = document.querySelector('.search__result');
const searchCloseButton = document.querySelector('.close-search');
const searchSearchButton = document.querySelector('.search-search');
const searchInput = document.querySelector('.search__input');

searchResult.hidden = true;
// searchCloseButton.hidden = false;
// searchSearchButton.hidden = true;

searchInput.removeEventListener('keyup',onSearchInputClick);
searchInput.addEventListener('keyup', onSearchInputClick);

searchCloseButton.removeEventListener('click', oncloseSearch);
searchCloseButton.addEventListener('click', oncloseSearch);

function oncloseSearch(event) {
    event.preventDefault();
    searchResult.hidden = true;
    searchCloseButton.hidden = true;
    searchSearchButton.hidden = false;
    searchInput.value = '';
}
function onSearchInputClick(event) {
    if (searchInput.value !== '') {

        if (searchResult.hidden) {
            searchResult.hidden = false;
            searchCloseButton.hidden = false;
            searchSearchButton.hidden = true;
        }

    } else {
        searchResult.hidden = true;
        searchCloseButton.hidden = true;
        searchSearchButton.hidden = false;
    }
}

document.addEventListener('click', function(event) {
    var isClickInsideElement = searchResult.contains(event.target) || searchInput.contains(event.target);
    if (!isClickInsideElement) {
        searchResult.hidden = true;
        searchCloseButton.hidden = true;
        searchSearchButton.hidden = false;
        searchInput.value = '';
    }
});
///progress circules
var circles = document.querySelectorAll('.details__progress__circle');

for (let i =0; i< circles.length; i++) {
    const circle = circles[i].querySelector('circle');
    const percent = +circles[i].dataset.percent;
    var radius = circle.r.baseVal.value;
    var circumference = radius * 2 * Math.PI;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    circle.style.strokeDashoffset = circumference - percent / 100 * circumference;
 
    
}
///////////////

const starRatings = document.querySelectorAll(".stars_rating");
if (starRatings.length) {
    initratings();
};

function initratings() {
   
    let ratingActive , ratingValue;
    for (let i = 0; i<starRatings.length; i++ ) {
        initrating(starRatings[i]);
    }

    function initrating(rating) {
       
        initRatingValues(rating);

        setAutoRating();
    
        if (rating.classList.contains('stars_rating__set')) {
            setRating(rating);
        }
    }
    function initRatingValues(rating) {
        ratingActive = rating.querySelector('.stars_rating__active');
        ratingValue =  rating.querySelector('.stars_rating__value');

       
    }
    function setAutoRating(index = ratingValue.innerHTML) {
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }
    function setRating(rating) {
       
        const ratingInputs = rating.querySelectorAll('.stars_rating__item');

        for (let i = 0; i<ratingInputs.length; i++) {
            ratingInputs[i].addEventListener('mouseenter', function (e) {
               
              
                initRatingValues(rating);
                setAutoRating(ratingInputs[i].value);
            });
            ratingInputs[i].addEventListener('mouseleave', function (e) {
               
                setAutoRating();
            });
            ratingInputs[i].addEventListener('click', function (e) {
               
                initRatingValues(rating);
                //send to server

                //if not
                ratingValue.innerHTML = i + 1;
                setAutoRating();
            })
        }
    }
}

/////////////
//Tabs
let teamTabs = document.querySelectorAll("._team-tabs");

for (let index = 0; index < teamTabs.length; index++) {
	let tab = teamTabs[index];
	let tabs_items = tab.querySelectorAll("._team-tabs-item");
	let tabs_blocks = tab.querySelectorAll("._team-tabs-block");
   
	for (let index = 0; index < tabs_items.length; index++) {
		let tabs_item = tabs_items[index];
		tabs_item.addEventListener("click", function (e) {
			for (let index = 0; index < tabs_items.length; index++) {
				let tabs_item = tabs_items[index];
				
				tabs_item.classList.remove('_active');
				tabs_blocks[index].classList.remove('_active');
			}
			tabs_item.classList.add('_active');
			tabs_blocks[index].classList.add('_active');
			e.preventDefault();
		});
	}
}
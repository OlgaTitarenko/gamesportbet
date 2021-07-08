//search ///
function search() {
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
}
search()

///progress circules
function progressCups() {
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
}
progressCups()

///////////////
function stars() {
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

}
stars();


/////////////
//Tabs
function tabsIntabs() {
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
}
tabsIntabs();

/////////////////
function betScreenshots () {
    const bets = document.querySelectorAll('.bet-screenshot');

    for (let i =0; i<bets.length; i++) {
        const bet = bets[i];
        bet.addEventListener('click', ()=> {
            bet.classList.toggle('bet-screenshot_active')
        })
    }
};
betScreenshots();
////////////////
function bookmakersMenu() {
    const bookmakersMenu = document.querySelector('.bookmakers-menu');
    if (bookmakersMenu) {
        bookmakersMenu.addEventListener('click', ()=> {
            bookmakersMenu.classList.toggle('bookmakers-menu__open');
        })
        document.addEventListener('click', function(event) {
            var isClickInsideElement = bookmakersMenu.contains(event.target);
            if (!isClickInsideElement) {
                bookmakersMenu.classList.remove('bookmakers-menu__open')
            }
        });
    }
}
bookmakersMenu();

//////////////////////////////
function bookmakersPopupHovering() {
    const bookmakersPopup = document.querySelector('.bookmakers-block');
    const menu = bookmakersPopup.querySelectorAll('.bookmakers-block__head');
    const progreses = bookmakersPopup.querySelectorAll('.progress');


    menu.forEach((item) => {
       
        item.addEventListener('mouseover', () => {
            const color = item.dataset.color;
            changeProgress(color);
        });
        item.addEventListener("mouseleave", () => {
            changeProgress();
        });

    })
    
    
    function changeProgress(color = '') {
       progreses.forEach(prog => {
           
        prog.classList.remove("_active")
           if(prog.dataset.color === color) {
              
               prog.classList.add('_active')
               console.log(prog.style)
           }
       })

        
    }
}
bookmakersPopupHovering();
//////////////////////////////////
function expand() {
    const expand = document.querySelector('.expand');
   
    const expanding = document.querySelector('.expanding');
   if (expand) {
    expand.addEventListener('click', () => {
        console.log(expand.dataset)
        if (expand.dataset.expand === "true") {
            expand.innerHTML = 'Развернуть &#709;'
            expand.dataset.expand = 'false';
            expanding.classList.remove('bookmakers-info_full')
        } else {
            expand.innerHTML = 'Свернуть &#708;'
            expand.dataset.expand = 'true';
            expanding.classList.add('bookmakers-info_full')
        }
    })
   }
   
}
expand();
/////////////////////////s

// const wrapper = document.querySelector('.wrapper');
// var tooltip = document.createElement('div');
// tooltip.style.cssText = 'position:fixed;right:18px;top:0;;width:4em;height:1.2em;background:yellow;font-size:24px;font-weight:bold;color:black;text-align:center;padding-top:5px;z-index:20';
// tooltip.textContent =  'lklklk%';
// wrapper.appendChild(tooltip);

// var mouseIsDown = false;
// var displayed = false;
// wrapper.addEventListener('mousedown', function() {
//     console.log("mousedown")
//     mouseIsDown = true;
// });
// wrapper.addEventListener('mouseup', function() {
//     mouseIsDown = false;
//     if (displayed) {
//         displayed = false;
//     //    tooltip.style.display = 'none';
//     }
// });
// wrapper.addEventListener('mousemove', function(e) {
//     if (displayed) {
//         tooltip.style.top = e.clientY + 'px';
//         console.log(e);
//     }
// });
// wrapper.addEventListener('scroll', function() {
//     console.log('scroll')
//     if (mouseIsDown) {
//         var pos = parseInt(wrapper.scrollY * 100.0 / wrapper.scrollMaxY);
//         tooltip.textContent = pos + '%';
//         if (!displayed) {
//             tooltip.style.display = 'block';
//             displayed = true;
//         }
//     }
// });
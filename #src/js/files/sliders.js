//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }

let slider_about = new Swiper('.about__slider', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	navigation: {
		nextEl: '.about__more .more__item_next',
		prevEl: '.about__more .more__item_prev',
	},
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	*/
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});


const mySliders = {};

const slider_matches = new Swiper('.matches__slider', {
	  // Optional parameters
  //  loop: true,
  slidesPerView: 6,
  spaceBetween: 1,
   watchOverflow: true,
   updateOnWindowResize:true,
  // Navigation arrows
  navigation: {
    nextEl: '.matches__arrow-next',
    prevEl: '.matches__arrow-prev'
  },
  breakpoints: {
	1200: {
		slidesPerView: 6,
	},
	1160: {
		slidesPerView: 5,
	},
	820: {
		slidesPerView: 4,
	},
	600: {
		slidesPerView: 3,
	},
	320: {
		slidesPerView: 1.5,
		autoHeight: true,
	},
	
  },
});
mySliders['matches'] = slider_matches;

const slider_news = new Swiper('.news__slider', {
	slidesPerView: 2,
	slidesPerColumn: 2,
	watchOverflow: true,
	navigation: {
	  nextEl: '.news__pagination__right',
	  prevEl: '.news__pagination__left'
	},
	pagination: {
		el: ".news__pagination__numbers",
		type: "fraction",
	},
	breakpoints: {
		1160: {
			slidesPerView: 2,
			slidesPerColumn: 2,
		},
		320: {
			slidesPerView: 1,
			slidesPerColumn: 1
		},
		
	}

});
mySliders['news'] = slider_news;

const forecastSwiper = new Swiper('.forecast__slider', {
	slidesPerView: 2,
	slidesPerColumn: 2,
	watchOverflow: true,
	navigation: {
	  nextEl: '.forecast__pagination__right',
	  prevEl: '.forecast__pagination__left'
	},
	pagination: {
		el: ".forecast__pagination__numbers",
		type: "fraction",
	},
	breakpoints: {
		1160: {
			slidesPerView: 2,
			slidesPerColumn: 2,
		},
		320: {
			slidesPerView: 1,
			slidesPerColumn: 1
		},
		
	}
});
mySliders['forecast'] = forecastSwiper;

  const streamSwiper = new Swiper('.stream__slider', {
	slidesPerView: 4,
	watchOverflow: true,
	spaceBetween: 16,
	navigation: {
	  nextEl: '.stream__pagination__right',
	  prevEl: '.stream__pagination__left'
	},
	pagination: {
		el: ".stream__pagination__numbers",
		type: "fraction",
	},
	breakpoints: {
		1160: {
			slidesPerView: 4,
			
		},
		320: {
			slidesPerView: 2
		},
		
	}
  });
mySliders['stream'] = streamSwiper;

const educationSwiper = new Swiper('.education__slider', {
	slidesPerView: 4,
	watchOverflow: true,
	spaceBetween: 16,
	navigation: {
	  nextEl: '.education__pagination__right',
	  prevEl: '.education__pagination__left'
	},
	pagination: {
		el: ".education__pagination__numbers",
		type: "fraction",
	},
	breakpoints: {
		1160: {
			slidesPerView: 4,
			
		},
		320: {
			slidesPerView: 2
		},
		
	}
  });
  mySliders['education'] = educationSwiper;

  const usersSwiper = new Swiper('.users__slider', {
	slidesPerView: 4,
	slidesPerColumn: 2,
	watchOverflow: true,
	navigation: {
	  nextEl: '.users__pagination__right',
	  prevEl: '.users__pagination__left'
	},
	pagination: {
		el: ".users__pagination__numbers",
		type: "fraction",
	},
	breakpoints: {
		1160: {
			slidesPerView: 4,
			slidesPerColumn: 2,
			
		},
		320: {
			slidesPerView: 2,
			slidesPerColumn: 1
		},
		
	}
  });
mySliders['users'] = usersSwiper;

  const bookmakersSwiper = new Swiper('.bookmakers__slider', {
	slidesPerView: 4,
	watchOverflow: true,
	spaceBetween: 16,
	navigation: {
	  nextEl: '.bookmakers__pagination__right',
	  prevEl: '.bookmakers__pagination__left'
	},
	pagination: {
		el: ".bookmakers__pagination__numbers",
		type: "fraction",
	},
	breakpoints: {
		1160: {
			slidesPerView: 4,
			
		},
		320: {
			slidesPerView: 2
		},
		
	}
  });
  mySliders['bookmakers'] = bookmakersSwiper;

  const commentsSwiper = new Swiper('.comments__slider', {
	slidesPerView: 2,
	slidesPerColumn: 3,
	watchOverflow: true,
	navigation: {
	  nextEl: '.comments__pagination__right',
	  prevEl: '.comments__pagination__left'
	},
	pagination: {
		el: ".comments__pagination__numbers",
		type: "fraction",
	},
	breakpoints: {
		1160: {
			slidesPerView: 2,
			slidesPerColumn: 2,
			
		},
			
	}
  });
 mySliders['comments'] = commentsSwiper;
// //========================================================================================================================================================


  
  const bigNews = new Swiper('.news-swiper__slider', {
	slidesPerView: 1,
	watchOverflow: true,
	loop: true,
	centeredSlides: true,
	updateOnWindowResize:true,
	// autoplay: {
	//   delay: 2500,
	//   disableOnInteraction: false,
	// },	
	navigation: {
		prevEl: '.news-swiper__arrow__prev',
		nextEl: '.news-swiper__arrow__next',
	},
	pagination: {
		el: ".news-swiper__pagination",
		clickable: true,
		renderBullet: function (index, className) {
		  return '<span class=' + className + '></span>';
		},
	}

  });
  mySliders['news-swiper'] = bigNews;

  function createSimpleSlider(name, slidesView) {
	
	let slider = new Swiper(`.${name}__swiper`, {
		slidesPerView: slidesView,
		watchOverflow: true,
		observer: true,
		observeParents: true,
		spaceBetween: 32,
		 updateOnWindowResize:true,
		navigation: {
			nextEl: `.${name}__pagination__right`,
			prevEl: `.${name}__pagination__left`
		  },
		pagination: {
			  el: `.${name}__pagination`
		},
		breakpoints: {
			1200: {
				slidesPerView: slidesView,
			},
			1160: {
				slidesPerView: slidesView - 1,
			},
			820: {
				slidesPerView: slidesView - 2,
			}
						
		},
		
	});
	mySliders[name] = slider;
	
}
createSimpleSlider('all-news', 3);
createSimpleSlider('dota2', 3);
createSimpleSlider('csgo',3);
createSimpleSlider('lol', 3);
createSimpleSlider('bet',3);
createSimpleSlider('diff',3);
createSimpleSlider('gamesport',3);

createSimpleSlider('all-matches', 4);
createSimpleSlider('gamesport-forecast', 4);
createSimpleSlider('analytics-forecast',4);
createSimpleSlider('ai-forecast',4);
createSimpleSlider('free-forecast', 4);
createSimpleSlider('history-forecast', 4);


function updateSlider(name) {
	
	mySliders[name].update();
}
const tabsNav = document.querySelectorAll('.tabs-block__item');

for (let i =0; i< tabsNav.length; i++) {
	if (tabsNav[i].dataset.slider) {
		const tab = tabsNav[i];
		
		const sliderName = tab.dataset.slider;
		tab.addEventListener('click', () => { updateSlider(sliderName)})
	}

}

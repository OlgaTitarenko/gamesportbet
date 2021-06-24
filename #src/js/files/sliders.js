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

const slider_matches = new Swiper('.matches__slider', {
	  // Optional parameters
  //  loop: true,
  slidesPerView: 6,
  spaceBetween: 1,
   watchOverflow: true,
   slidesPerColumnFill: 'row',
  // Navigation arrows
  navigation: {
    nextEl: '.matches__arrow-next',
    prevEl: '.matches__arrow-prev'
  }
});

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
	}
});

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
	}
});

  const streamSwiper = new Swiper('.stream__slider', {
	slidesPerView: 4,
	watchOverflow: true,
	navigation: {
	  nextEl: '.stream__pagination__right',
	  prevEl: '.stream__pagination__left'
	},
	pagination: {
		el: ".stream__pagination__numbers",
		type: "fraction",
	}
  });

const educationSwiper = new Swiper('.education__slider', {
	slidesPerView: 4,
	watchOverflow: true,
	navigation: {
	  nextEl: '.education__pagination__right',
	  prevEl: '.education__pagination__left'
	},
	pagination: {
		el: ".education__pagination__numbers",
		type: "fraction",
	}
  });

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
	}
  });
  const bookmakersSwiper = new Swiper('.bookmakers__slider', {
	slidesPerView: 4,
	watchOverflow: true,
	navigation: {
	  nextEl: '.bookmakers__pagination__right',
	  prevEl: '.bookmakers__pagination__left'
	},
	pagination: {
		el: ".bookmakers__pagination__numbers",
		type: "fraction",
	}
  });

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
	}
  });
 

  
  
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
  // Navigation arrows
  navigation: {
    nextEl: '.matches__arrow-next',
    prevEl: '.matches__arrow-prev'
  },
  breakpoints: {
	320: {
		slidesPerView: 1.5,
		autoHeight: true,
	},
	600: {
		slidesPerView: 3,
	},
	820: {
		slidesPerView: 4,
	},
	1000: {
		slidesPerView: 5,
	},
	1200: {
		slidesPerView: 6,
	},
},
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
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			slidesPerColumn: 1
		},
		1160: {
			slidesPerView: 2,
			slidesPerColumn: 2,
		}
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
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			slidesPerColumn: 1
		},
		1160: {
			slidesPerView: 2,
			slidesPerColumn: 2,
		}
	}
});

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
		320: {
			slidesPerView: 2
		},
		1160: {
			slidesPerView: 4,
			
		}
	}
  });

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
		320: {
			slidesPerView: 2
		},
		1160: {
			slidesPerView: 4,
			
		}
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
	},
	breakpoints: {
		320: {
			slidesPerView: 2,
			slidesPerColumn: 1
		},
		1160: {
			slidesPerView: 4,
			slidesPerColumn: 2,
			
		}
	}
  });

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
		320: {
			slidesPerView: 2
		},
		1160: {
			slidesPerView: 4,
			
		}
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
 
// //========================================================================================================================================================


  
  const bigNews = new Swiper('.news-swiper__slider', {
	slidesPerView: 1,
	watchOverflow: true,
	loop: true,
	centeredSlides: true,

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

const allNewsSwiper = new Swiper('.all-news__swiper', {
	slidesPerView: 3,
	watchOverflow: true,
	spaceBetween: 32,
	navigation: {
		nextEl: '.all-news__pagination__right',
		prevEl: '.all-news__pagination__left'
	  },
	  pagination: {
		  el: ".all-news__pagination",
 	  }
});

const dota2swiper = new Swiper('.dota2__swiper', {
	slidesPerView: 3,
	watchOverflow: true,
	spaceBetween: 32,
	navigation: {
		nextEl: '.dota2__pagination__right',
		prevEl: '.dota2__pagination__left'
	  },
	  pagination: {
		  el: ".dota2__pagination",
 	  }
});

const csgoSwiper = new Swiper('.csgo__swiper', {
	slidesPerView: 3,
	watchOverflow: true,
	spaceBetween: 32,
	navigation: {
		nextEl: '.csgo__pagination__right',
		prevEl: '.csgo__pagination__left'
	  },
	  pagination: {
		  el: ".csgo__pagination",
 	  }
});
console.log(csgoSwiper)

const lolSwiper = new Swiper('.lol__swiper', {
	slidesPerView: 3,
	watchOverflow: true,
	spaceBetween: 32,
	navigation: {
		nextEl: '.lol__pagination__right',
		prevEl: '.lol__pagination__left'
	  },
	  pagination: {
		  el: ".lol__pagination",
 	  }
});
const betSwiper = new Swiper('.bet__swiper', {
	slidesPerView: 3,
	watchOverflow: true,
	spaceBetween: 32,
	navigation: {
		nextEl: '.bet__pagination__right',
		prevEl: '.bet__pagination__left'
	  },
	  pagination: {
		  el: ".bet__pagination",
 	  }
});

const diffSwiper = new Swiper('.diff__swiper', {
	slidesPerView: 3,
	watchOverflow: true,
	spaceBetween: 32,
	navigation: {
		nextEl: '.diff__pagination__right',
		prevEl: '.diff__pagination__left'
	  },
	  pagination: {
		  el: ".diff__pagination",
 	  }
});
const gamesportbetSwiper = new Swiper('.gamesport__swiper', {
	slidesPerView: 3,
	watchOverflow: true,
	spaceBetween: 32,
	navigation: {
		nextEl: '.gamesport__pagination__right',
		prevEl: '.gamesport__pagination__left'
	  },
	  pagination: {
		  el: ".gamesport__pagination",
 	  }
});
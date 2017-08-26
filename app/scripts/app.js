import svg4everybody from 'svg4everybody';
import $ from 'jquery';
// import 'slick-carousel';
import 'jquery-mask-plugin';
import 'h5validate';
import 'magnific-popup';



(function ($) {

	$(function () {
		svg4everybody();

		// Sticky menu

		let $advantagesHeight = $('.advantages').outerHeight();
		let $stickyRow = $('.header__row_top');
		let $headerSlogan = $('.header__slogan');
		let $headerHideClass = $('header__hide');
		let $navSticky = $('.nav.header__hide');

		$(window).scroll( function () {

			// if( $(window).width() > 768 ) {

				if( $(window).scrollTop() > 180 ) {
					$stickyRow.addClass('header__row_sticky');
					$headerSlogan.addClass('header__hide');
					$navSticky.removeClass('header__hide');
					$navSticky.addClass('nav_sticky');
				} else {
					$stickyRow.removeClass('header__row_sticky');
					$headerSlogan.removeClass('header__hide');
					$navSticky.addClass('header__hide');


				}

			// }

		});

		// if( $(window).width() > 480 ) {

		// 	if( $(window).scrollTop() > $advantagesHeight ) {
		// 		$stickyRow.addClass('header__row_sticky');
		// 		$headerSlogan.addClass('header__hide');
		// 		$navSticky.removeClass('header__hide');
		// 		$navSticky.addClass('nav_sticky');
		// 	} else {
		// 		$stickyRow.removeClass('header__row_sticky');
		// 		$headerSlogan.removeClass('header__hide');
		// 		$navSticky.addClass('header__hide');


		// 	}

		// }

		// Menu button trigger

		let $navTrigger = $('.nav__trigger');
		$navTrigger.on('click', function () {
			$(this).toggleClass('nav__trigger_active');
		});



		// Phone mask

		let $phoneField = $('.form__field_phone');

		$phoneField.mask( "8-000-000-00-00", {placeholder:"8-___-___-__-__", selectOnFocus: true} );


		// Faq

		let $faqLink = $('.faq__link');
		$faqLink.on('click', function (e) {
			e.preventDefault();
			$(this).parent().addClass('faq__item_active');
			$(this).siblings('.faq__close').on('click', function() {
				$(this).parent().removeClass('faq__item_active');
			});
		});


		// Form validation

		let $form = $('.form form');
		$form.h5Validate();

		// Side height
		let $contentHeight = $('.content').outerHeight();
		let $side = $('.sidebar__w');
		$side.outerHeight($contentHeight - 50);
		$(window).on('resize', function () {
			let $contentHeight = $('.content').outerHeight();
			let $side = $('.sidebar__w');
			$side.outerHeight($contentHeight - 50);
		});

		// Sidenav

		$('.sidebar__trigger').on('click', function () {
			$('.sidebar').toggleClass('sidebar_open');
			if($('.sidebar').hasClass('sidebar_open')) {
				$('.sidebar__trigger-text').text('нажмите еще раз, чтобы скрыть');
			} else {
				$('.sidebar__trigger-text').text('Развернуть категории');

			}
			$('.content').toggleClass('content_open');

		});

		// remove sidebar open & content open when resize

		$(window).on('resize', function () {
			if($(window).width() > 768) {
				$('.sidebar').removeClass('sidebar_open');
				$('.content').removeClass('content_open');
			}
		});


		// Popup

		$('.header__button').magnificPopup({
			type: 'inline',
			midClick: true,
			closeBtnInside: true
		});
	});


})(jQuery);




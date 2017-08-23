import svg4everybody from 'svg4everybody';
import $ from 'jquery';
// import 'slick-carousel';
import 'jquery-mask-plugin';


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

			if( $(window).width() > 768 ) {

				if( $(window).scrollTop() > $advantagesHeight ) {
					$stickyRow.addClass('header__row_sticky');
					$headerSlogan.addClass('header__hide');
					$navSticky.removeClass('header__hide');
					$navSticky.addClass('nav_sticky');
				} else {
					$stickyRow.removeClass('header__row_sticky');
					$headerSlogan.removeClass('header__hide');
					$navSticky.addClass('header__hide');


				}

			}

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

		// Phone mask

		let $phoneField = $('.form__field_phone');

		$phoneField.mask( "8-000-000-00-00", {placeholder:"8-___-___-__-__", selectOnFocus: true} );

	});


})(jQuery);




$(function(){


	var menu_button       = $( ".main_navigation .button" );
	var nav_list          = $( ".main_nav" );
	var $win              = $( window );

	var breakpoint = 900;

	var menu_visible = false;

	var isGreaterThan = function( breakpoint ){

		return $win.width() > breakpoint;
	};
	

		if( isGreaterThan( breakpoint ) === false){

			nav_list.hide();
		}

		else {
			nav_list.show();
		}


	
	menu_button.on( "click", function( e ){

		if( menu_visible ){

			nav_list.slideUp( "slow" );
			menu_visible = false;


			//close open subnavs
			// dropdown_controls.each( function( index ){

			// 	var sibling = $( this ).siblings( ".subnav" );

			// 	if( sibling.hasClass( "active" ) ){
					
			// 		sibling.slideUp( "slow" );
			// 		sibling.removeClass( "active" );
			// 	}
			// } );
		}
		else{
			nav_list.slideDown( "slow" );
			menu_visible = true;
		}

		e.preventDefault();
	} );



	//When browser is resized fire these events
	$win.on( "resize", function( e ){

		//always hide the subnavs if the browser is resized
		// subnav_lists.hide();

		//if the the browser width is greater than the breakpoint
		if( isGreaterThan( breakpoint ) ){

			//show the main menu
			nav_list.show();	
			//and record that its shown
			menu_visible = true;
		}
		//if the browser width is less that the breakpoint
		else{

			//hide the main menu
			nav_list.hide();
			//record that its hidden
			menu_visible = false;
		}
	} );
} );
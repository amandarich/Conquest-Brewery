

$ ( function (){

	var $links = $(".header_links" ).find( "a" );

	$links.on( "click", function(e){

		var header_height,
			scrolltop,
			id;

		id    =$(this).attr( "href" );
		scrolltop   =$( id ).offset().top;

		



		header_height   =$( ".navigation_bar" ).innerHeight();


		$( "html, body" ).animate({
			scrollTop : ( scrolltop - header_height ) + "px"

		}); 

		e.preventDefault();
	} );

} );









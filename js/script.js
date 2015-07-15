
//from Rashad- scrolls to # and leaves a margin-top to leave room for the fixed navigation at the top.



$ ( function (){

	var $links = $(".header_links" ).find( "a" );

	$links.on( "click", function(e){

		var id        = $( this ).attr( "href" ),
            scrolltop = ( $( id ).offset().top - 30 ) + "px";

		$( "html, body" ).animate( { scrollTop : scrolltop } ); 

		e.preventDefault();
	} );

} );


//Zip Code search 

$(function () {

	var $items = $( ".addressList" ).find( "li" );

    $( 'form' ).submit( function( e ) {

        var userData = $( this ).serializeArray(),
        	val      = parseInt( userData[ 0 ].value ),
        	count    = 0;
        
        if( val !== undefined ){

        	$items.removeClass( "active" );

        	$items.each( function(){

        		if( $( this ).data( "zip" ) === val ){

        			$( this ).addClass( "active" );
        			count++;
        		}
        	} );

        	if( count === 0 ){
        		$( ".no_results" ).find( "span" ).html( val );
        		$( ".no_results" ).show( );
        	}else{
        		$( ".no_results" ).hide();
        	}
        }

        e.preventDefault();
    });
});


// {
// 	ZIP : 29205
// }



// $(document).ready(function() {

//     $('#sidebar').stickySidebar({
//         sidebarTopMargin: 20, // defines top margin from sidebar to navigation element (20px by default)
//         footerThreshold: 100 // defines a distance from footer (40px by default)
//     });

// });




$(function (){

    var win       = $( window );
    var nav       = $( ".beerNav" );
    var title     = $( ".lgTitle" );
    var container = $( ".beerNav_container" );
    var fixedTop  = 30;
    
    var isFixed = function(){

        return getTitleOffset() < fixedTop;
    };

    var getTitleTop = function(){

        return title.offset().top;
    };

    var getTitleOffset = function(){

        return getTitleTop() - win.scrollTop();
    };

    var setNavTop = function(){

        nav.css( { "top" : getTitleTop() } );
    };

    var setContainerFixed = function(){

        container.addClass( "fixed" );
        nav.css( { "top" : fixedTop + "px" } );
    };

    var setContainerAbsolute = function(){

        container.removeClass( "fixed" );
        setNavTop();
    };

    var fixedCheck = function(){

        var f = isFixed();

        if( !f ){
            setContainerAbsolute();
        }
        else{
            setContainerFixed();
        }
    };



    win.on( "scroll resize", function ( e ){

        fixedCheck();
    } );

    //init hieght
    fixedCheck();
});













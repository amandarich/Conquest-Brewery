
$(function () {

	var $items = $( ".retailers" ).find( "li" );

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
        		$( ".no_results" ).show();
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

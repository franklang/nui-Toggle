/**
 * "Naked UI Toggle" jQuery plug-in
 * @author: Frank LANG (https://github.com/franklang/)
 *
 * Usage:
 * $('#targetElement').nuiToggle('#triggerElement');
 */
;( function ( $, window, undefined ) {
  $.fn.nuiToggle = function( triggerElement ) {

    var defaults = {
      triggerElement: triggerElement
    };

    var settings = $.extend( {}, defaults, triggerElement );

    // Get a dynamic local storage KEY named after given #targetElement
    const $_THIS = this,
          $_SELECTOR = $_THIS.selector,
          LOCAL_STORAGE_KEY = $_SELECTOR.substring( 1, $_SELECTOR.length ),
          // On page load or DOM ready, get current VALUE of dynamic local storage KEY (if it exists...).
          LOCAL_STORAGE_DYNAMIC_VALUE = localStorage.getItem( LOCAL_STORAGE_KEY ),
          LOCAL_STORAGE_DEFAULT_VALUE = $_THIS.attr( 'aria-expanded' );



    // Local Storage
    // If a KEY/VALUE pair is already set...
    if ( LOCAL_STORAGE_DYNAMIC_VALUE !== null ) {
        // console.log('There_s already a local storage KEY called: ' + LOCAL_STORAGE_KEY + ' and it_s VALUE is: ' + LOCAL_STORAGE_DYNAMIC_VALUE);
      // ...append VALUE to selector's aria-expanded attribute in the HTML.
      $_THIS.attr( 'aria-expanded', LOCAL_STORAGE_DYNAMIC_VALUE );

    // Else...
    } else {
        // console.log('There_s NO local storage KEY called: ' + LOCAL_STORAGE_KEY + ', so we create one with given default VALUE: ' + LOCAL_STORAGE_DYNAMIC_VALUE);
      // ...dynamically set a default KEY/VALUE pair regarding generated LOCAL_STORAGE_KEY and LOCAL_STORAGE_DEFAULT_VALUE from HTML.
      localStorage.setItem( LOCAL_STORAGE_KEY, LOCAL_STORAGE_DEFAULT_VALUE );

      // If HTML selector's aria-expanded default value doesn't match with LOCAL_STORAGE_DEFAULT_VALUE from HTML...
      if ( $_THIS.attr( 'aria-expanded' ) !== LOCAL_STORAGE_DEFAULT_VALUE ) {
        // ...make it match in the HTML.
        $_THIS.attr( 'aria-expanded', LOCAL_STORAGE_DEFAULT_VALUE );
      }
    }



    // On Click
    // When clicking on given triggerElement...
    $( defaults.triggerElement, $_THIS ).on( 'click', function (){
      // ...store HTML selector's current aria-expanded value.
      const ARIA_EXPANDED_VALUE = $_THIS.attr( 'aria-expanded' );

      // If selector's aria-expanded value is true...
      if ( ARIA_EXPANDED_VALUE === 'true' ) {
        // ...set it to false...
        $_THIS.attr( 'aria-expanded', false );
        // ...and update local storage VALUE accordingly.
        localStorage.setItem( LOCAL_STORAGE_KEY, false );
          // console.log( 'KEY: ' + LOCAL_STORAGE_KEY + ' now set to VALUE: ' + localStorage.getItem( LOCAL_STORAGE_KEY ) );

      // Else...
      } else {
        // ...set it to true...
        $_THIS.attr( 'aria-expanded', true );
        // ...and update local storage VALUE accordingly.
        localStorage.setItem( LOCAL_STORAGE_KEY, true );
          // console.log( 'KEY: ' + LOCAL_STORAGE_KEY + ' now set to VALUE: ' + localStorage.getItem( LOCAL_STORAGE_KEY ) );
      }
    });
  };
}( jQuery, window ));

/**
 * "Naked UI Toggle" jQuery plug-in
 * @author: Frank LANG (https://github.com/franklang/)
 *
 * Usage:
 * $('#targetElement').nuiToggle('#triggerElement', default value for #targetElement's state in the HTML (true or false));
 */
;( function ( $, window, undefined ) {
  $.fn.nuiToggle = function(triggerElement, localStorageDefaultValue) {

    var defaults = {
      triggerElement: triggerElement,
      storedValue: localStorageDefaultValue
    };

    var settings = $.extend( {}, defaults, triggerElement, localStorageDefaultValue );

    // Get a dynamic local storage KEY named after given #targetElement
    const $_THIS = this,
          $_SELECTOR = $_THIS.selector,
          LOCAL_STORAGE_KEY = $_SELECTOR.substring( 1, $_SELECTOR.length );

    // On page load or DOM ready, get current VALUE of dynamic local storage KEY (if it exists...).
    let localStorageValue = localStorage.getItem( LOCAL_STORAGE_KEY );


    // Local Storage
    // If a KEY/VALUE pair is already set...
    if ( localStorageValue !== null ) {
        // console.log('There_s already a local storage KEY called: ' + LOCAL_STORAGE_KEY + ' and it_s VALUE is: ' + localStorageValue);
      // ...append VALUE to selector's aria-expanded attribute in the HTML.
      $_THIS.attr('aria-expanded', localStorageValue);

    // Else...
    } else {
        // console.log('There_s NO local storage KEY called: ' + LOCAL_STORAGE_KEY + ', so we create one with given default VALUE: ' + defaults.storedValue);
      // ...dynamically set a default KEY/VALUE pair regarding generated LOCAL_STORAGE_KEY and given defaults.storedValue.
      localStorage.setItem( LOCAL_STORAGE_KEY, defaults.storedValue );

      // If HTML selector's aria-expanded default value doesn't match with given defaults.storedValue...
      if ( $_THIS.attr('aria-expanded') !== defaults.storedValue ) {
        // ...make it match in the HTML.
        $_THIS.attr('aria-expanded', defaults.storedValue);
      }
    }



    // On Click
    // When clicking on given triggerElement...
    $(defaults.triggerElement, $_THIS).on('click', function(){
      // ...store HTML selector's current aria-expanded value.
      const ARIA_EXPANDED_VALUE = $_THIS.attr('aria-expanded');

      // If selector's aria-expanded value is true...
      if ( ARIA_EXPANDED_VALUE === 'true' ) {
        // ...set it to false...
        $_THIS.attr('aria-expanded', false);
        // ...and update local storage VALUE accordingly.
        localStorage.setItem( LOCAL_STORAGE_KEY, false );
          // console.log( 'KEY: ' + LOCAL_STORAGE_KEY + ' now set to VALUE: ' + localStorage.getItem( LOCAL_STORAGE_KEY ) );

      // Else...
      } else {
        // ...set it to true...
        $_THIS.attr('aria-expanded', true);
        // ...and update local storage VALUE accordingly.
        localStorage.setItem( LOCAL_STORAGE_KEY, true );
          // console.log( 'KEY: ' + LOCAL_STORAGE_KEY + ' now set to VALUE: ' + localStorage.getItem( LOCAL_STORAGE_KEY ) );
      }
    });
  };
}( jQuery, window ));

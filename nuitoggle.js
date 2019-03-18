/**
 * "Naked UI Toggle" jQuery plug-in
 * @author: Frank LANG (https://github.com/franklang/)
 *
 * Usage:
 * $('#targetElement').nuiToggle('#triggerElement', localStorage default value [true] or [false]);
 */
;( function ( $, window, undefined ) {
  $.fn.nuiToggle = function(triggerElement, localStorageDefaultValue) {

    var defaults = {
      triggerElement: triggerElement,
      storedValue: localStorageDefaultValue
    };

    var settings = $.extend( {}, defaults, triggerElement, localStorageDefaultValue );

    // Get a dynamic local storage key named after given #targetElement
    const $_THIS = this,
          $_SELECTOR = $_THIS.selector,
          LOCAL_STORAGE_KEY = $_SELECTOR.substring( 1, $_SELECTOR.length ),
          // Get current value of dynamic local storage key
          LOCAL_STORAGE_VALUE = localStorage.getItem( LOCAL_STORAGE_KEY );


    // Local Storage
    // If a key/value pair was already set...
    if ( LOCAL_STORAGE_VALUE !== null ) {
        // console.log('There_s already a local storage KEY called: ' + LOCAL_STORAGE_KEY + ' and it_s VALUE is: ' + LOCAL_STORAGE_VALUE);
      // ...append it's value to selector's aria-expanded attribute.
      $_THIS.attr('aria-expanded', LOCAL_STORAGE_VALUE);
    // Else...
    } else {
        // console.log('There_s NO local storage KEY called: ' + LOCAL_STORAGE_KEY + ', so we create one with given default VALUE: ' + defaults.storedValue);
      // ...dynamically set a default key/value pair with generated LOCAL_STORAGE_KEY and given defaults.storedValue.
      localStorage.setItem( LOCAL_STORAGE_KEY, defaults.storedValue );

      // If selector's aria-expanded default value doesn't match with given defaults.storedValue...
      if ( $_THIS.attr('aria-expanded') !== defaults.storedValue ) {
        // ...make it match.
        $_THIS.attr('aria-expanded', defaults.storedValue);
      }
    }



    // On Click
    // When clicking on given triggerElement...
    $(defaults.triggerElement, $_THIS).on('click', function(){
      // ...store selector's current aria-expanded value.
      const ARIA_EXPANDED_VALUE = $_THIS.attr('aria-expanded');

      // If selector's aria-expanded value is true...
      if ( ARIA_EXPANDED_VALUE === 'true' ) {
        // ...set it to false...
        $_THIS.attr('aria-expanded', false);
        // ...and update local storage accordingly.
        localStorage.setItem( LOCAL_STORAGE_KEY, false );
          // console.log( 'KEY: ' + LOCAL_STORAGE_KEY + ' now set to VALUE: ' + localStorage.getItem( LOCAL_STORAGE_KEY ) );
      // Else...
      } else {
        // ...set it to true...
        $_THIS.attr('aria-expanded', true);
        // ...and update local storage accordingly.
        localStorage.setItem( LOCAL_STORAGE_KEY, true );
          // console.log( 'KEY: ' + LOCAL_STORAGE_KEY + ' now set to VALUE: ' + localStorage.getItem( LOCAL_STORAGE_KEY ) );
      }
    });
  };
}( jQuery, window ));

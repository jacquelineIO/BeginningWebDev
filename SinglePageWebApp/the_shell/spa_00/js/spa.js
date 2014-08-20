/*
 * spa.js
 * Root namespace module
 */

/*jslint            browser : true,     continue : true,
   devel  : true,     indent : 2,          maxerr : 50,
   newcap : true,      nomen : true,     plusplus : true,
   regexp : true,     sloppy : true,         vars : false,
    white : true
 */

/*global $, spa */

/* ^^^ Tell JSLint to expect the 'spa' and '$' global variables.
 * If we find ourselves adding our own variables to this list after
 * 'spa', we're probably doing something wrong.
 */

/* Using the module pattern (chapter 2)  to create 
 * our "spa" namespace. 
 *
 * This module exports one method, 'initModule', 
 * a function that initializes the application.
 */
var spa = (function () {
  "use strict";
  var initModule = function ($container) {
    $container.html(
        '<h1 style="display:inline-block; margin:25px;">'
        + 'hello world!'
        + '</h1>'
    );
  };

  return { initModule: initModule };
}());

/* spa.html:
 *
 * Initialize the application once the DOM is ready. Those
 * familiar with jQuery will notice our code uses shorthand,
 * as $(function (...
 * could have been written as
 * $(document).ready(function(...
 *
 * <script>
 *     $(function () { spa.initModule ($('#spa') ); });
 * </script>
 */ 


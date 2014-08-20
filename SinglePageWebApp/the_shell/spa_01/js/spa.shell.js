/*
 * spa.shell.js
 * Shell module for SPA
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

spa.shell = (function (){
  //-------------------- BEGIN MODULE SCOPE VARIABLES ---------------------
  var configMap = {
        main_html : String ()
              + '<div class="spa-shell-head">'
                  + '<div class="spa-shell-head-logo"></div>'
                  + '<div class="spa-shell-head-acct"></div>'
                  + '<div class="spa-shell-head-search"></div>'
              + '</div>'
              + '<div class="spa-shell-main">'
                  + '<div class="spa-shell-main-nav"></div>'
                  + '<div class="spa-shell-main-content"></div>'
              + '</div>'
              + '<div class="spa-shell-foot"></div>'
              + '<div class="spa-shell-chat"></div>'
              + '<div class="spa-shell-modal"></div>'
      },
      /* Place dynamic information shared across the
       * module in the stateMap */
      stateMap = { $container : null },
      /* Cache jQuery collects in jqueryMap */
      jqueryMap = {},

      /* module scope variables */
      setJqueryMap, initModule;

  //-------------------- END MODULE SCOPE VARIABLE ---------------------

  //-------------------- BEGIN UTILITY METHODS -------------------------
 
  /* Things that don't interact with page elements */

  //-------------------- END UTILITY METHODS ---------------------------

  //-------------------- BEGIN DOM METHODS -----------------------------
  // Begin DOM method /setJqueryMap/

  /* Use the setJqueryMap to cache jQuery collections. This function
   *  should be in almost every shell and feature module we write. The use of
   *  the jqueryMap cache can greatly reduce the number of jQuery
   *  document transversals and improve performance. */
  setJqueryMap = function () {
    var $container = stateMap.$container;
    jqueryMap = { $container : $container };
  };

  //-------------------- END DOM METHODS -------------------------------
  

  //-------------------- BEGIN EVENT HANDLERS --------------------------
  //-------------------- END EVENT HANDLERS ----------------------------

  //-------------------- BEGIN PUBLIC METHODS --------------------------
  // Begin Public method /initModule/
  initModule = function ( $container ) {
    stateMap.$container = $container;
    $container.html ( configMap.main_html );
    setJqueryMap();
  };
  //-------------------- END PUBLIC METHODS --------------------------

  /* Export pubic methods explicitly by return them in a map. */
  return { initModule : initModule };

}());
  



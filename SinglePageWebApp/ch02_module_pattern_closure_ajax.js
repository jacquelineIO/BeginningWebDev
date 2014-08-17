/*
 * Another common use of closures is to save variables for use when
 * an Ajax call returns. When using methods in a JavaScript object,
 * 'this' refers to the object.
 */

var prison = {
  names: 'Mike Mikowski and Josh Powell',
  who: function() {
    return this.names;
  }
}

// returns 'Mike Mikowski and Josh Powell'
console.log(prison.who());


var prison2 = {
  names: 'Josh Powell and Mike Mikowski',
  who: function()
    {
      $.ajax(
        {
          success: function()
            {
              console.log(this.names);
            }
        });
    }
}

//outputs undefined, 'this' is the ajax object
prison2.who();

/*
 * Closures to the rescue! Remember, a closure is created by taking a function
 * that has access to a variable in the curret execution
 * context and saving it to a variable outside of the curent execution context.
 *
 * By saving 'this' to 'that' in function property 'prison.who', then this is
 * copied to that and stays around
 */

var prison3 = {
  names: 'Josh Powell and Mike Mikowski',
  who: function()
    {
      var that = this;
      // The Ajax call is asynchronous,
      // so the call to 'who()' is finihed
      // executing by the time the response
      // comes back.
      $.ajax(
        {
          success: function()
            {
              console.log(that.names);
            }
        });
    }
}
/*
 * 'who()' finishes executing by the time the Ajax call has returned, the
 * 'that' varaible isn't GC'd and is available for use by the 'success' method.
 */

// outputs 'Mike Mikowski and Josh Powell'
perosn3.who();


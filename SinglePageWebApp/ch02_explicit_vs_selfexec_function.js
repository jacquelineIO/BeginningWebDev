/* Explicit invocation */
var foo = function ()
{
  // do something
  console.log('Explicit invocation');
};

foo();

/* Self - executing function */
(function () 
{
  // do something
  console.log('Self-executing function');
}) ();

/* Self-executing named function */
(function fooBar () 
 {
  // do something
  console.log('Self-executing named function');
 })();

// This function is no longer in scope, gives an error
// fooBar();


/* Keeping local var local */
// gives an error (out of scope)
// console.log(local_var); 

(function()
 {
   //local_var is undefined
   console.log(local_var);
   var local_var = 'Local Variable!';
   // local_var is 'Local Variable!'
   console.log(local_var);
 })();

// error message "local_var is not defined"
// console.log(local_var);


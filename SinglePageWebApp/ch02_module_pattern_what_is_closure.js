
/*
 * Closure is the process of preventing the garbage collector from removing
 * a variable from memory by keeping access to the variable outside the 
 * execution context in which it was created. A 'closure' is created when
 * the 'prisoner' function is saved on the 'prison' object. The closure is
 * created by saving a function, with dynamic access to the 
 * 'prisoner' variable, outside of the current execution context, which
 * prevents the garbage collector from removing the 'prisoner' varaible from 
 * memory.
 *
 * Closure is created by taking a function that hs access to a vriable 
 * in the current execution context and saving it to a variable outside 
 * of the current execution context.
 */


/*
 * After execution the variable prisoner will no longer be available
 *
 * This is not closure.
 */
var prison = (function()
    {
        var prisoner = 'Josh Powell';

        // Saving a variable/function to property of
        // the same name
        return {prisoner: prisoner};
    })();


// outputs 'Josh Powell'
console.log(prison.prisoner);

/*
 * Now the 'prisoner' variable is accessed every time 'prison.prisoner' is 
 * executed. 'prison.prisoner()' returns the current value of the prisoner variable.
 * (If the garbage collector did remove 'prison.prisoner' then 'prison.prisoner()'
 * would be undefined.)
 * 
 * This is closure.
 */

var prison2 = (function()
  {
    var prisoner = 'Josh Powell';

    // Saving a variable/function to property of
    // the same name
    return {
      prisoner: function() 
        {
          return prisoner; 
        }
    }// end-return
  })();

// outputs 'Josh Powell'
console.log(prison2.prisoner());


/*
 * Two more closure examples
 */


var makePrisoner = function (prisoner) 
  {
    return function()
    {
      return prisoner;
    }
  }

var joshPrison = makePrisoner('Josh Powell');
var mikePrison = makePrisoner('Mike Mikowski');

console.log(joshPrison());
console.log(mikePrison());

/*
 * outer_function is not destroyed because a reference to 
 * the inner_function ha been saved in the global scope in
 * variable menu. Because the inner_function needs to retain
 * access to all of the variable that were in scope wher it was 
 * declared, it "closes over" the outer_function execution context to 
 * prevent the garbage collector from removing it.
 *
 * This is closure.
 */

var menu, outer_function,
    food = 'cake';

outer_function = function() 
{
  var fruit, inner_function;

  fruit = 'apple';

  inner_function = function()
  {
    return {food: food, fruit: fruit};
  }

  return inner_function;
}

menu = outer_function();

// return {food: 'cake', fruit: 'apple'}
console.log(menu());

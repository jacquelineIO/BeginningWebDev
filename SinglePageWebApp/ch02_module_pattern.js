// 
// 2.6.3 The module pattern -- brining private vriables to JavaScript
//

var prison = (function() 
  {
    var prisoner_name = 'Mike Mikowski',
        jail_term = '20 years';
  

    // Once the self-executing function is done executing, the 
    // variables 'prisoner_name' and 'jail_term' remain accessible
    // to the 'prisoner' and 'setjailTerm' methods. 'prisoner_name' and 
    // 'jail_term' now act like private attributes.
    return { 
      prisoner: function() {
          return prisoner_name + ' - ' + jail_term;
        },
      setJailTerm: function(term) {
          jail_term = term;
        }
    };
/*
    // Since attributes prisoner and sentence both depend on 
    // 'jail_term', have to make them stay and not be GC'd by
    // returning them in a function. If we only use them to 
    // set the attributes, then the variable will no longer
    // be around. And if one variable is changed outside the 
    // scope of this 'var prison' function then the other
    // attribute will not see the change of jail_term, because
    // it is no longer in scope and has been GC'd
    return {
      prisoner: prisoner_name + ' - ' + jail_term,
      sentence: jail_term
    };
*/
  })();

// this is undefined, no prisoner_name for you.
console.log(prison.prisoner_name);

// this outputs 'Mike Mikowski - 20 year term'
// console.log(prison.prisoner);
console.log(prison.prisoner());

// this outputs '20 year term'
console.log(prison.sentence);

prison.setJailTerm('Sentence commuted');

// this now outputs 'Mike Mikowski - Sentence commuted'
console.log(prison.prisoner());




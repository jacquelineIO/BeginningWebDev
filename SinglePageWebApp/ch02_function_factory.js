var proto = {
  sentence  : 4,
  probation : 2
};

/* A factory function that assigns an object contructor */
var makePrisoner = function ( name, id )
{
  /* Alternatieve to using Object.create is to use 
   * var firstPrisoner = new Prisoner('Joe', '12A'); */
  var prisoner = Object.create( proto );
  prisoner.name = name;
  prisoner.id = id;

  return prisoner;
}

/* Using new Operator */
var Prisoner = function (name, id)
{
  this.name = name;
  this.id = id;
}

Prisoner.prototype = proto;

/* Using the factory function  and Object.create */
var firstPrisoner = makePrisoner ( 'Joe', '12A' );
console.log(firstPrisoner);

var secondPrisoner = makePrisoner ( 'Sam', '2BC' );
console.log(secondPrisoner);

/* Using new Operator */
var thirdPrisoner = new Prisoner ( 'Bob', '3DF' );
console.log(thirdPrisoner);
thirdPrisoner.name = 'Dave';
console.log(thirdPrisoner);
console.log(thirdPrisoner.__proto__);


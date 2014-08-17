/** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype */
/** Example from MDN describing prototype */

// $ node mdn_prototype_eg.js 
// Hi, I'm Bob, the Builder
// { canTalk: true, greet: [Function] }
// Hi, I'm undefined
// Hi, I'm Joe
// Hi, I'm Red Green, the Handyman
// Hi, I'm Mike
//

var Person = function() {
    this.canTalk = true;
    this.greet = function() {
        if (this.canTalk) {
            console.log("Hi, I'm " + this.name);
        }
    };
};

var Employee = function(name, title) {
    this.name = name;
    this.title = title;
    this.greet = function() {
        if (this.canTalk) {
            console.log("Hi, I'm " + this.name + ", the " + this.title);
        }
    };
};

// Constructor (ctor). The initial scope for the object lookup
// will be in the Employee object, if the Employee doesn't have
// the info, then the prototype (in this case Person) object will
// be looked up. And it continues downs this path. If nothing is
// found in the chain, then undefined is returned.
Employee.prototype = new Person();

var Customer = function(name) {
    this.name = name;
};
Customer.prototype = new Person();

var Mime = function(name) {
    this.name = name;
    this.canTalk = false;
};
Mime.prototype = new Person();

var bob = new Employee('Bob','Builder');
var joe = new Customer('Joe');
var rg = new Employee('Red Green','Handyman');
var mike = new Customer('Mike');
var mime = new Mime('Mime');

/* Bob */
// output: Hi, I'm Bob, the Builder
bob.greet();
// output: { canTalk: true, greet: [Function] }
console.log(bob.__proto__);
// output: Hi, I'm undefined
bob.__proto__.greet();

/* Others */
// output: Hi, I'm Joe
joe.greet();
// output: Hi, I'm Red Green, the Handyman
rg.greet();
// output: Hi, I'm Mike
mike.greet();
// no output
mime.greet();

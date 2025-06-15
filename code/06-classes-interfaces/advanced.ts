class User {
  protected _firstName: string = '';
//  Protected Maaari lang ma-access ang property o method na protected mula sa loob ng class at mga subclasses nito.
// Hindi ito ma-access sa labas ng class hierarchy.
  private _lastName: string = '';

// set	Method that runs when you assign a value to a property
// Used for	Validation, transformation, or side effects before saving a value
// Syntax	set propertyName(value) { ... }

  set firstName(name: string) {
    if (name.trim() === '') {
      throw new Error('Invalid name.');
    }
    this._firstName = name;
  }

  set lastName(name: string) {
    if (name.trim() === '') {
      throw new Error('Invalid name.');
    }
    this._lastName = name;
  }

// To combine or compute values (like fullName)
// To hide internal logic or structure
// To make your class cleaner and easier to use

  get fullName() {
    return this._firstName + ' ' + this._lastName;
  }

//    User.eid ay pwede mong ma-access kahit walang object na ginawa gamit ang new.
// ✅ User.greet() ay pwede mong tawagin nang direkta sa class.
  static eid = 'USER';
  // Ang static ay isang keyword sa TypeScript (at JavaScript) na ginagamit para gumawa ng property o \
  // method na nakakabit sa class mismo, hindi sa instance ng class.
  static greet() {
    console.log('Hello!');
  }
}

console.log(User.eid);
User.greet();

const max = new User();
max.firstName = 'Max';
max.lastName = '';
// max._firstName = 'Max 2';
console.log(max.fullName);

// Ang extends ay ginagamit para magmana (inherit) ang isang class mula sa ibang class.
class Employee extends User {
  constructor(public jobTitle: string) {
// Sa TypeScript (or JavaScript) classes, ang super() ay tumutukoy sa constructor ng parent class.
// Ginagamit ito sa loob ng constructor ng subclass (child class) para ma-initialize ang parent class.
    super();
    // super.firstName = 'Max';
  }

  work() {
    // ...
    console.log(this._firstName); // pwede ma call dahil naka protected ang _firstName
    // super._firstName
  }
}

// An abstract class in TypeScript:
// Cannot be instantiated directly.
// Is used as a base class (pang-parent lang).
// Can have both implemented methods and abstract methods (which must be implemented by subclasses).
abstract class UIElement {
  constructor(public identifier: string) {}

  // A method already implemented; can be used or overridden by subclasses.
  clone(targetLocation: string) {
    // logic to duplicate the UI element
  }
}

// let uiElement = new UIElement();

class SideDrawerElement extends UIElement {
  constructor(public identifier: string, public position: 'left' | 'right') {
    super(identifier);
  }

  // ...
}
// class SideDrawerElement extends UIElement	This means SideDrawerElement inherits from the abstract class UIElement.
  // This allows SideDrawerElement to use properties and methods defined in UIElement.
  // It can also override methods if needed.
  // If UIElement has abstract methods, SideDrawerElement must implement them.


class User1 {
  name: string;
  age: number
  constructor (name: string, age: number) {
    this.name = name;
    this.age = age;
    
  }
}

//public is to craete a property that can be accessed from outside the class

// this is short hand syntax for creating a class

class User2 {
  constructor(public name: string, public age: number) {}
}

const bruce = new User1('Bruce', 30);
const bruce2 = new User2('Bruce', 30);

console.log(bruce, bruce2);

//output:
// User1 { name: 'Bruce', age: 30 } User2 { name: 'Bruce', age: 30 }

//explaination:
//Ang constructor ay special method sa loob ng class na automatic na tinatawag kapag gumawa ka ng bagong object mula sa class.


class User3 {
  public hobbies: string[] = []; // This property is public and can be accessed from outside the class.
  constructor(public name: string, private edad: number) {}

  tawagin() {
    console.log(` I am ${this.edad} years old.`); // This method can access the private property `edad`.
  }
}

const bruce3 = new User3('Bruce', 30);
console.log(bruce3.name);
console.log(bruce3.edad); // Error: Property 'edad' is private and only accessible within class 'User3'.

// paliwanag ang private ay ginagamit para sa mga property na 
// gusto mong itago at hindi ma-access mula sa labas ng class. Sa kasong ito, ang `edad` ay private,
//  kaya hindi mo ito ma-access direkta mula sa labas ng class. Pero pwede mo itong tawagin sa loob ng class gamit ang method na `tawagin()`.


class user4 {
  readonly hobbies: string[] = []; // This property is readonly and cannot be modified after initialization.
  constructor(public name: string, private edad: number) {}
  tawagin() {
    console.log(` I am ${this.edad} years old.`); // This method can access the private property `edad`.
  }
}

//readonly → Ibig sabihin: hindi na puwedeng palitan ang value ng hobbies pagkatapos ma-set.

//Pero puwede mo pa rin push() ng laman sa array
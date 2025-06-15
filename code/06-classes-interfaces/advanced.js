var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User() {
        this._firstName = '';
        this._lastName = '';
    }
    Object.defineProperty(User.prototype, "firstName", {
        set: function (name) {
            if (name.trim() === '') {
                throw new Error('Invalid name.');
            }
            this._firstName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "lastName", {
        set: function (name) {
            if (name.trim() === '') {
                throw new Error('Invalid name.');
            }
            this._lastName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "fullName", {
        get: function () {
            return this._firstName + ' ' + this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    User.greet = function () {
        console.log('Hello!');
    };
    User.eid = 'USER';
    return User;
}());
console.log(User.eid);
User.greet();
var max = new User();
max.firstName = 'Max';
max.lastName = '';
// max._firstName = 'Max 2';
console.log(max.fullName);
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(jobTitle) {
        var _this = _super.call(this) || this;
        _this.jobTitle = jobTitle;
        return _this;
        // super.firstName = 'Max';
    }
    Employee.prototype.work = function () {
        // ...
        console.log(this._firstName);
        // super._firstName
    };
    return Employee;
}(User));
var UIElement = /** @class */ (function () {
    function UIElement(identifier) {
        this.identifier = identifier;
    }
    UIElement.prototype.clone = function (targetLocation) {
        // logic to duplicate the UI element
    };
    return UIElement;
}());
// let uiElement = new UIElement();
var SideDrawerElement = /** @class */ (function (_super) {
    __extends(SideDrawerElement, _super);
    function SideDrawerElement(identifier, position) {
        var _this = _super.call(this, identifier) || this;
        _this.identifier = identifier;
        _this.position = position;
        return _this;
    }
    return SideDrawerElement;
}(UIElement));
var User1 = /** @class */ (function () {
    function User1(name, age) {
        this.name = name;
        this.age = age;
    }
    return User1;
}());
//public is to craete a property that can be accessed from outside the class
// this is short hand syntax for creating a class
var User2 = /** @class */ (function () {
    function User2(name, age) {
        this.name = name;
        this.age = age;
    }
    return User2;
}());
var bruce = new User1('Bruce', 30);
var bruce2 = new User2('Bruce', 30);
console.log(bruce, bruce2);
//output:
// User1 { name: 'Bruce', age: 30 } User2 { name: 'Bruce', age: 30 }
//explaination:
//Ang constructor ay special method sa loob ng class na automatic na tinatawag kapag gumawa ka ng bagong object mula sa class.
var User3 = /** @class */ (function () {
    function User3(name, edad) {
        this.name = name;
        this.edad = edad;
        this.hobbies = []; // This property is public and can be accessed from outside the class.
    }
    User3.prototype.tawagin = function () {
        console.log(" I am ".concat(this.edad, " years old.")); // This method can access the private property `edad`.
    };
    return User3;
}());
var bruce3 = new User3('Bruce', 30);
console.log(bruce3.name);
console.log(bruce3.edad); // Error: Property 'edad' is private and only accessible within class 'User3'.
// paliwanag ang private ay ginagamit para sa mga property na 
// gusto mong itago at hindi ma-access mula sa labas ng class. Sa kasong ito, ang `edad` ay private,
//  kaya hindi mo ito ma-access direkta mula sa labas ng class. Pero pwede mo itong tawagin sa loob ng class gamit ang method na `tawagin()`.

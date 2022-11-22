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
var _a;
var student = /** @class */ (function () {
    function student() {
    }
    student.prototype.present = function () {
        console.log("TypeScript OOPS Concept");
    };
    return student;
}());
var obj = new student();
obj.present();
var num = 4;
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num2 = 18;
    }
    Numbers.prototype.storenumber = function () {
        var num4 = 9;
    };
    Numbers.num3 = 8;
    return Numbers;
}());
console.log(num);
console.log(Numbers.num3);
var j = new Numbers();
j.storenumber();
console.log(j);
function display(id, name, email) {
    console.log("ID", id);
    console.log("Name", name);
    if (email != undefined)
        console.log("Email", email);
}
display(01, "JPG");
// read only
var name = ["JPG"];
// Tuple: specify the type of each element in the array
var Tuple;
Tuple = [4, true, "Jaydeep"];
console.log(Tuple);
var v = [12, 13, 43, 46.6];
// TypeScript Object Type:
var car;
car = {
    type: "i20",
    model: "Magna",
    year: 2019
};
var car2 = (_a = { type: "toyota" }, string = _a.type, _a);
car2.type = "Hyundai";
console.log(car);
console.log(car2);
// enums:enum is a special class type that represents a group of constants.(unchangeble variables)
// It has two types first one is string and 2nd is number 
// it is initialze the first value is 0 and add 1 to each additiona value 
var direction;
(function (direction) {
    direction[direction["north"] = 0] = "north";
    direction[direction["east"] = 1] = "east";
    direction[direction["south"] = 2] = "south";
    direction[direction["west"] = 3] = "west";
})(direction || (direction = {}));
var dir = direction.south;
console.log(dir);
var direction1;
(function (direction1) {
    direction1[direction1["north"] = 1] = "north";
    direction1[direction1["east"] = 2] = "east";
    direction1[direction1["south"] = 3] = "south";
    direction1[direction1["west"] = 4] = "west";
})(direction1 || (direction1 = {}));
var dir1 = direction1.south;
console.log(dir1);
// Nummeric enum 
var code;
(function (code) {
    code[code["NotFound"] = 404] = "NotFound";
    code[code["Success"] = 200] = "Success";
    code[code["Accepted"] = 202] = "Accepted";
    code[code["ServerNotFound"] = 400] = "ServerNotFound";
})(code || (code = {}));
console.log(code.ServerNotFound);
console.log(code.Success);
var InstituteName = "JPG TecH";
var service = "IT";
var year = 2020;
console.log(InstituteName);
console.log(service);
console.log(year);
var rect2 = {
    height: 4,
    width: 2
};
var rect4 = {
    height: 8,
    width: 18,
    color: "red"
};
console.log(rect2);
console.log(rect4);
// Access Modifiers 
// 1.Public 
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var emp = new Employee();
emp.empcode = 101;
emp.empName = "Jaydeep";
console.log(emp);
// 2. Private
/* The private access modifiers ensure that class members are visible only that class and are not accessible outside the containing class  */
var Modifier = /** @class */ (function () {
    function Modifier() {
    }
    return Modifier;
}());
var mod = new Modifier();
mod.MOdifyEmoName = "JPG";
mod.id = 100;
console.log(mod);
// 3. Protected
/* The Protected access modifier is similar to the private access modifier, except that protected member can be accessed using their driving class */
var data = /** @class */ (function () {
    function data(name, code) {
        this.studentId = code;
        this.StudentName = name;
    }
    return data;
}());
// console.log(data)
var modifydata = /** @class */ (function (_super) {
    __extends(modifydata, _super);
    function modifydata(name, code, department) {
        var _this = _super.call(this, name, code) || this;
        _this.branch = department;
        return _this;
    }
    return modifydata;
}(data));
var Studentdata = new modifydata("Jay", 111, "IT");
emp.Studentdata;
console.log(Studentdata);

class student {
    present():void{
        console.log("TypeScript OOPS Concept")
    }
}
var obj = new student()
obj.present()   

var num:number=4;
class Numbers{
    num2:number=18;
    static num3:number=8;

    storenumber():void{
        var num4:number=9;
    }
}

console.log(num)
console.log(Numbers.num3);
var j = new Numbers();
j.storenumber()
console.log(j)



function display(id:number,name:string,email?:any){
    console.log("ID",id)
    console.log("Name",name)

    if(email!=undefined)
    console.log("Email",email)
}
display(01,"JPG");

// read only

const name:readonly string[] = ["JPG"]

// Tuple: specify the type of each element in the array

let Tuple:[number,boolean,string]

Tuple=[4,true,"Jaydeep"]
console.log(Tuple)

const v:[x:number,y:number]=[12,13,43,46.6]

// TypeScript Object Type:

const car:{
    type:string,
    model:string,
    year:number
}

car={
    type:"i20",
    model:"Magna",
    year:2019
}

var car2={
    type:string,
}={type:"toyota"}
car2.type="Hyundai"

console.log(car)
console.log(car2)

// enums:enum is a special class type that represents a group of constants.(unchangeble variables)
// It has two types first one is string and 2nd is number 
// it is initialze the first value is 0 and add 1 to each additiona value 

enum direction{
    north,
    east,
    south,
    west

}

let dir=direction.south
console.log(dir)

enum direction1{
    north=1,
    east,
    south,
    west
}
let dir1=direction1.south
console.log(dir1)

// Nummeric enum 
enum code{
    NotFound=404,
    Success=200,
    Accepted=202,
    ServerNotFound=400
}
console.log(code.ServerNotFound)
console.log(code.Success)

/* TypeScript Alias: it is allows to be defined separetely from  */
// alias  example
type SM=string
type domain=string
type StartingYear=number
type IT={
    InstituteName:SM,
    service:domain,
    year:StartingYear
}

const InstituteName:SM="JPG TecH"
const service:domain="IT"
const year:StartingYear=2020
console.log(InstituteName)
console.log(service)
console.log(year)

// interface

interface Rect{
    height:number,
    width:number
}

const rect2:Rect={
    height:4,
    width:2
}

interface rect3 extends Rect{
    color:string
}

const rect4:rect3={
    height:8,
    width:18,
    color:"red"
}

console.log(rect2)
console.log(rect4)

// Access Modifiers 
// 1.Public 

class Employee{
    public empcode:number;
    empName:string;
}

let emp = new Employee();
emp.empcode=101;
emp.empName="Jaydeep"
console.log(emp)

// 2. Private
/* The private access modifiers ensure that class members are visible only that class and are not accessible outside the containing class  */
class Modifier{
    private id:number;
    MOdifyEmoName:string;
}
let mod = new Modifier();
mod.MOdifyEmoName="JPG";
mod.id=100;
console.log(mod)

// 3. Protected
/* The Protected access modifier is similar to the private access modifier, except that protected member can be accessed using their driving class */

class data{
    public studentId:number;
    protected StudentName:string;

    constructor(name:string,code:number){
        this.studentId=code;
        this.StudentName=name;
    }
}
// console.log(data)

class modifydata extends data{
    private branch:string

    constructor(name:string,code:number,department:string){
        super(name,code)
        this.branch=department;
    }
}

let Studentdata = new modifydata("Jay",111,"IT")
emp.Studentdata;

console.log(Studentdata)
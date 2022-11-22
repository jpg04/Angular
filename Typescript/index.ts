/* // string 
// number
// boolean
// array of string

let a: string = "hello";
document.write(a + "<br>");

let b: number = 4;
document.write(b + "<br>");

let c: boolean = true;
document.write(c + "<br>");

let jpg: string[] = ["Jay", "Deep", "Jaydeep"];
document.write(jpg + "<br>");

let num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
document.write(num + "<br>");

let bool: [] = ["Hello", true, 4, "Hey"]
document.write(bool + "<br>");

let j: any = 'Jaydeep';
document.write(j + "<br>");

function fn(): void {
    document.write("Hello Toxic Devil" + "<br>");

}
fn();

function add(a: number, b: number): void {
    document.write(a + b + "<br>")
}
add(18, 8)

function any(c: number, d: string): void {
    document.write(c + d + "<br>")
}
any(8, "18")

// union datatypes

var e:string|undefined="Jaydeep Popat Godase"

function pqr(x:number,y:number,c?:number){
    return(x+y + "<br>")
}
pqr(4,2)

// string
let z: string = "1";
console.log(z); */

// Number
let a:number = 23;
console.log(a)

// String
let b:string = "Jaydeep";
console.log(b)

// array
var arr:string[] = ['J','A','Y','D','E','E','P'];
console.log(arr)

function add():void{
    console.log("addition")
}
add()
function sum(a:number,b:number):number{
    return(a+b)
}

let e=sum(4,2)
console.log(e)

var arrN:number[] = [1,2,3,4,5]
console.log(arrN)

var arrany: any[] = ["Jaydeep",'P','G',1,2,3,4,5,true]
console.log(arrany)

function sub(a:number,c?:number,b?:number):any{
    console.log(a-c)
}sub(9,8)

var e:string|number|boolean|undefined|null
let count = 0; //ts sees number , knows number
const site = "porche"//works as it knows its a string
const scores = [10, 12, 40]// here to number []

//over annotation is not bad but no need to have boilerplate

export function add(a:  number, b: number): number {  //keeoung a and b as number it needs a type
    return a + b;
}


let maybe: string | number;
maybe = Math.random() > 0.5 ? "test" : 1312;

// console.log(add("4",2)) //this argument is type of string and cant be assigned to parameter of  numnber
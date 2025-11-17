let title: string = "intro";

// title =undefined //Type 'undefined' is not assignable to type 'string'

// to fix this we can use union

let title2: string | undefined = "intro"; //soecifically telling that it can be a string and it can be defined

title2=undefined

//return types of the callback

//Dont use return type any for callbacks as value will be ignored

//void : function doesnot return a useful value;

function log(message: string): void{
    console.log(message);
}

function fail(message: string): never {
    throw new Error(message)
}

//DO NOT USE ANY AND TRY TO IGNORE AS MUCH AS POSSIBLE

//example
const anyValueJSON: any = JSON.parse('{"id":12,"val": "TwentyOne23"}')

anyValueJSON.notPresentValue.split(" ") //This is going to break in the run time 
//so you have to keep in mind the above thing 
//try to use whenever you're not sure, try to avoid any as much as possible
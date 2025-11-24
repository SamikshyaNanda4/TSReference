type Direction="left"|"right"|"up"|"down"
function move(d:Direction){
    console.log(d + " is the movement")
}

const d1="left" //TS keeps literal type as left with type inference
move(d1)

let d2="left" //TS Keeps literal type as left but it may change in the future 
// move((((d2)))) //Argument of type 'string' is not assignable to parameter of type 'Direction'.
//This is argument of type 'string' is said because its let so TS will do widening to string

let d3:Direction="up"
move(d3)
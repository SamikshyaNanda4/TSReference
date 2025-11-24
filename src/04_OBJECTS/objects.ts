type User={
    id:string | number; //required,
    name:string;
    email?:string;//optional(can be absent)
    readonly createdAt : Date;
}

const user1 : User={
    id:Math.random()>0.5?"u1":123,
    name:"Samikshya",
    createdAt:new Date()
}

const user2 : User={
    id:Math.random()>0.5?"u2":223,
    name:"Daym",
    createdAt:new Date(),
    email:"samikshya.nanda.4848@gmail.com"
}

// user1.(((createdAt)))=new Date(); //Cannot assign to 'createdAt' because it is a read-only property.

type User2={
    email?:string
}

type User3={
    email:string| undefined
}

const user34:User2={
}

// const User43:User3={  Property 'email' is missing in type '{}' but required in type 'User3'.
// }

type Count0= {[k:string]:number} //This is called Index Signature
type Count1= Record<"likes"|"views"|"shares", number>

const c1:Count0={whatever:12,ayo:12}
const c2:Count1={likes:312, shares:321, views:321}
// const c3:Count1={likes:312, shares:321, views:321, (((anotherValue))): 21} 
// //Object literal may only specify known properties, and 'anotherValue' does not exist in type 'Count1'.
















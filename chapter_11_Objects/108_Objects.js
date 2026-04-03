// Objects
// Key and value

let student = { name: 'Alice', age: 65 }
let student2 = { name: 'Amith' }
let student3 = { name: 'Amith', age: 65, pnoneNo: 8749451 }
console.log(student)

// Key will not be in the doubt quotes
// below key in doubt is actually JSON
let JSON_student4 = { name: 'Pramod', age: 87, phone: 987654320 }

// -------

let a = { status: 'pass' }
console.log(a.status)
console.log(a['status'])

let a1 = { status: 'pass' }
console.log(a1.status)

// keys are case sensitive.
let a2 = { status: 'pass', Status: 'fail' }
console.log(a2['status'])
console.log(a2['Status'])

let b=a;// b copies the REFERENCE, not the object
b.status="fail"
console.log("a status" +" "+a.status)
console.log("b status" +" "+b.status)

// Two separate objects — different memory
let c={status:"pass"}
let d={status:"fail"}
console.log(c===d)//false

const t_json={
    "name":"automation",
    "tech":"playwright"
}
console.log(t_json)

const t_js={
    name:"pramod",
    age:10
}
console.log(t_js)
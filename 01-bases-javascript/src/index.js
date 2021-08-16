let firstname;
let lastname;

console.log(`>>> ${firstname} ${lastname}`)
console.log(`>>> ${firstname|| 'no firstname'} ${lastname|| 'no lastname'}`)

const isActive=true

const msg= (isActive)?'Es activo':'No esta Activo';
console.log(msg)


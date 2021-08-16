/**
 * en la desesctructuracion de arreglos la posiciòn es determinate
 * 
 */
const personajes=['Bernardo','Augusto','César']

const [personajeUno, personajeDos, personajeTres]=personajes

console.log(personajeUno)
console.log(personajeDos)
console.log(personajeTres)

const [ , , c]=personajes
console.log(c)

const [ , ...dosYtres]=personajes

console.log(dosYtres)


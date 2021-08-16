/* import {  owners} from '../src/data/heroes' */
/**
 * las importaciones ejecutan el archivo
 */
import superHeroes from '../data/heroes'


/* console.log(superHeroes) */

/**
 * getHeroByID(id)
 * 
 * find
 * 
 * 
 * filter
 * getHerosByOwner
 * 
 */

export const getHeroByID=(arr=[],valId)=>{
    return arr.find((elem)=>elem.id==valId)
}
/* console.log(getHeroByID(superHeroes,2)) */

export const getHerosByOwner=(arr=[],valOwn='')=>{
    return arr.filter(elem=>elem.owner===valOwn)
}
/* console.log(getHerosByOwner(superHeroes,'DC')) */
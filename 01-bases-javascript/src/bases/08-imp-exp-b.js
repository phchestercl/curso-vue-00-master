import {getHeroByID, getHerosByOwner} from './bases/08-imp-exp'
import superHeroes from './data/heroes'

console.log(getHeroByID(superHeroes,2))

console.log(getHerosByOwner(superHeroes,'DC'))
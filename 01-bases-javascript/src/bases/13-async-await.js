import{giphyApi} from './bases/11-axios-para-ejemplo13'
import axios from 'axios'

/**
 * Axios
 */



const getImage= async()=>{
    try {
        const {data}=await giphyApi.get('/random')
        const {url}=data.data.images.original
        //console.log(url)
        const img=document.createElement('img')
        img.src=url
        document.body.append(img)



    } catch (error) {
        console.log(error)
        throw error
    }
}

getImage()


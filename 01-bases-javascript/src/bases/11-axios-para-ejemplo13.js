import axios from 'axios'

/**
 * Axios
 */
const apiKey = 'jR1OhGvLz42u37Xt9Ey7xjH5EcWMggCc'

const url = 'https://api.giphy.com/v1/stickers/random'
export const giphyApi = axios.create({
    baseURL:'https://api.giphy.com/v1/stickers',
    params:{
        api_key:apiKey
    }

})
/* giphyApi.get('/random')
    .then(res=>{
        console.log(res.data.data.images.original.url)
        const {data}=res.data
        const {url}=data.images.original
        //const url = res.data.data.images.original.url
        const img=document.createElement('img')
        img.src=url
        document.body.append(img)
    }) */
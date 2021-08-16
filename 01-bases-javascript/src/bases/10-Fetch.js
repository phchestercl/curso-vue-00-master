/**
 * API fetch
 */
 const apiKey='jR1OhGvLz42u37Xt9Ey7xjH5EcWMggCc'

 const url='https://api.giphy.com/v1/stickers/random'
 fetch(`${url}?api_key=${apiKey}`)
    .then(res=> res.json())
    .then(({data})=>{
        const {url}=data.images.original
        console.log(url)
        const img=document.createElement('img')
        img.src=url
        document.body.append(img)
    })
    .catch(e=>console.log(e))
fetch('http://localhost:8080/api/productos/?limit=cinco')
    .then(res=>res.json())
    .then(res=>console.log(res.prods))
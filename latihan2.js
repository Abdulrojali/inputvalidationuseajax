let button=document.querySelector('.click')
button.addEventListener('click',function(){
    let valueinput=document.querySelector('.inputeks').value
    function getApi(url){
        let data=new XMLHttpRequest()
        data.onload=()=>{
            let hasil=JSON.parse(data.responseText)
            GetTeks(hasil.title,hasil.userId)
            console.log(hasil)
        }
        data.onerror=()=>{
            console.log('failed')
        }
        data.onreadystatechange=()=>{
            if(this.status=400 || this.onreadystatechange==4){console.log('sukses')}
            else{console.log('failed')}
        }
        data.open('get',url)
        data.send()
    }
    
    getApi('https://jsonplaceholder.typicode.com/todos/'+valueinput)
    
    
    function GetTeks(tittle,teks){
        let div=document.createElement('div')
        let paragraf=`<p>${tittle}</p>
        <b> ${teks}</b>`
        div.innerHTML=paragraf
        document.querySelector('.contentitem').appendChild(div)
    }
})

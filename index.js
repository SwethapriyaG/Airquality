import * as my_dongle from 'bleuio'
document.getElementById('connect').addEventListener('click', function(){
    my_dongle.at_connect()
})
document.getElementById('deviceinfo').addEventListener('click', function(){
  my_dongle.ati().then((x)=> console.log(x))
})

document.getElementById('makecentral').addEventListener('click', function(){
    my_dongle.at_central().then((x)=> console.log('central role set'))
  })

  document.getElementById('scan').addEventListener('click', function(){
    my_dongle.at_gapscan(2).then((x)=> {
        let arr= x.filter((y)=>y[0]==='[')
        console.log(x)
        console.log(arr)
        let list='<ul>';
        arr.map((k)=>{
            list +='<li>'+ k+'</li>';
        })
        list +='</ul>';
        document.getElementById('list').innerHTML=list


    })
    //my_dongle.at_central().then((x)=> console.log('central role set'))
  })
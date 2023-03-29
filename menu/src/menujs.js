function process(){
    let parotta=0;
    let panner=0;
    let dosa=0;
    let pasta=0;
    let tandoori=0;
    parotta=document.getElementById("parotta").value
    dosa=document.getElementById("dosa").value
    tandoori=document.getElementById("tandoori").value
    pasta=document.getElementById("pasta").value
    panner=document.getElementById("panner").value
    if(panner==0){panner=0}
    if(parotta==0){parotta=0}
    if(dosa==0){dosa=0}
    if(pasta==0){pasta=0}
    if(tandoori==0){tandoori=0}
    let object=[
      {
        name:'parotta',
        count:parotta,
        img: "/resources/parotta.png",
        price: 50
      },
      {
        name:'dosa',
        count:dosa,
        img: "/resources/dosa.png",
        "price": 70
      },
      {
        name:'pasta',
        count:pasta,
        img: "/resources/pasta.png",
        price: 260
      },
      {
        name:'panner',
        count:panner,
        img: "/resources/panner.png",
        price: 250
      },
      {
        name:'tandoori',
        count:tandoori,
        "img": "/resources/tandoori.png",
        "price": 200
      }
    ];
    let jsonString = JSON.stringify(object);
    let blob = new Blob([jsonString], {type: 'application/json'});
    let url = URL.createObjectURL(blob);
     a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
    document.body.appendChild(a);
    a.click();
}
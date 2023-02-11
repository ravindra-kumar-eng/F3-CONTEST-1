let p=fetch('https://dummyjson.com/products')
p.then((response)=>{
return response.json()})
.then((data)=>{
    let arr=data.products
    for(let key in arr){
        let newdiv=document.createElement("div");
        newdiv.setAttribute("class","first");
        // newdiv.innerHTML="this is a new div element"
        let flex=document.querySelector(".flex")
        flex.appendChild(newdiv)
        newdiv.classList.add('first')
        
        var imageSourse=[]
        imageSourse=arr[key].images
        let image=document.createElement("img");
        image.setAttribute("class","image")
        for(var i=0;i<imageSourse.length;i++){
           
            image.classList.add('image')
            image.src=`${imageSourse[i]}`;
            newdiv.appendChild(image)
        }

        let contain1=document.createElement("div");
        contain1.setAttribute("class","buy-item");
        contain1.classList.add("buy-item")
        newdiv.appendChild(contain1);
        
        let contain11=document.createElement("div");
        contain11.setAttribute("class","buy-left");
        contain11.classList.add("buy-left")
        contain1.appendChild(contain11);

        let contain2=document.createElement("div");
        contain2.setAttribute("class","id");
        contain2.classList.add("id")
        contain2.innerHTML=`${arr[key].id}:`
        contain11.appendChild(contain2);

        let title=document.createElement("span");
        title.setAttribute("class","title");
        title.classList.add("title");
        title.innerHTML=`${arr[key].title}`
        contain11.appendChild(title);

        let contain12=document.createElement("div");
        contain12.setAttribute("class","buy-right");
        contain12.classList.add("buy-right")
        contain1.appendChild(contain12);
        
        let brand=document.createElement("div");
        brand.setAttribute("class","brand");
        brand.classList.add("brand");
        brand.innerHTML=`${arr[key].brand}`
        contain12.appendChild(brand);

        let price=document.createElement("div");
        price.setAttribute("class","price");
        price.innerHTML=`price: ${arr[key].price}`
        price.classList.add("price")
        newdiv.appendChild(price);
        
        let discount=document.createElement("div");
        discount.setAttribute("class","discount");
        discount.innerHTML=`Discount: ${arr[key].discountPercentage}%`
        discount.classList.add("dicount")
        newdiv.appendChild(discount);
        
        let stock=document.createElement("div");
        stock.setAttribute("class","stock");
        stock.innerHTML=`stock: ${arr[key].stock}`
        stock.classList.add("stock")
        newdiv.appendChild(stock);

        
       

    }
    console.log(arr)
});
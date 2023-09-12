 async function productList(){
    let data = await fetch ("https://dummyjson.com/products");
      data = await data.json();
      return data.products;

}


export default async function Page (){
    let products = await productList();
    console.log(products);
    return(
        <div><h1>Products list</h1>
        {  products.map((item)=>(
             <h2 key={item.id}>NAMe : {item.title}</h2>
        ))
          }
</div>
    )
}
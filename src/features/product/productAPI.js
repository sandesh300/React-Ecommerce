
export function fetchAllProducts() {
  return new Promise(async(resolve) => {
    //TODO : we will not hardcode server url here 
    const response = await fetch('http://localhost:8080/products')
    const data = await response.json();
    resolve({data})
}
    );
}


export function fetchProductsByFilters() {
  //filter  = {"category" : "smartphone"}
  let quetString ='';
  for(let key in filter)
  {
    quetString += `${key}=${filter[key]}&`
  }
  return new Promise(async(resolve) => {
    //TODO : we will not hardcode server url here 
    const response = await fetch('http://localhost:8080/products?'+quetString)
    const data = await response.json();
    resolve({data})
}
    );
}

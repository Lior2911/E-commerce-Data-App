export const getProduct = async ()=>{
  try{
    const response = await fetch('http://localhost:5000/product/')
    const product = response.json()
    return product

  }
  catch(error){
    console.log(error);

  }
}

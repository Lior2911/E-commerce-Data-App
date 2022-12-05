export const getCategory = async ()=>{
  try{
    const response = await fetch('http://localhost:5000/category')
    const category = response.json()
    return category
  }
  catch(error){
    console.log(error);

  }
}

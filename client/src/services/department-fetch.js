export const getDepartment = async ()=>{
  try{
    const response = await fetch('http://localhost:5000/department/')
    const stores = response.json()
    return stores

  }
  catch(error){
    console.log(error);

  }
}

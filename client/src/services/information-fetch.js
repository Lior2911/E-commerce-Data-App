export const getInformation = async () => {
  try {
    return await fetch("http://localhost:5000/information/")
      .then((res) => res.json())
      
  } catch (error) {
    console.log(error);
  }
};

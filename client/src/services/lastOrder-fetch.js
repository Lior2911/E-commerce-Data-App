export const getLastOrder = async () => {
  try {
    return await fetch("http://localhost:5000/lastOrder/")
      .then((res) => res.json())
      
  } catch (error) {
    console.log(error);
  }
};

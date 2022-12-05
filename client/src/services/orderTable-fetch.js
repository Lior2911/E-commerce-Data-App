export const getOrderTable = async () => {
  try {
    return await fetch("http://localhost:5000/orders/")
      .then((res) => res.json())
      
  } catch (error) {
    console.log(error);
  }
};

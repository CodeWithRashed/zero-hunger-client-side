export const fetchFoodData = async () => {
  return await fetch(`${import.meta.env.VITE_BACKEND_API}/api/v1/user/get/foods`)
    .then((res) => res.json())
    .then((data) => data.filter(
      (filteredData) => filteredData.deliveryStatus !== "Delivered"
    ))
    
};

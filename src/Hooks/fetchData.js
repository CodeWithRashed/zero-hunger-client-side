export const fetchProductData = async () => {
  return await fetch(`${import.meta.env.VITE_BACKEND_API}/api/getProduct`)
    .then((res) => res.json())
    .then((data) => data)
    
};

import { toast } from "react-toastify";

const AddFood = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const productImage = form.productImage.value;
    const brandName = form.brandName.value;
    const productType = form.productType.value;
    const productPrice = form.productPrice.value;
    const productRatting = form.productRatting.value;
    const productDescription = form.productDescription.value;

    const productData = {
      productName,
      productImage,
      brandName,
      productType,
      productPrice,
      productRatting,
      productDescription,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/api/v1/user/add-food`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(productData),
        }
      );
      if (response.ok) {
        await response.json();
        form.reset();
        toast.success("Product Added!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch{
      ""
    }
  };
  return (
    <div className="py-[5%] text-2xl">
      <div className=" mx-auto shadow-lg rounded-t-xl border-x-2 border-t-2 border-red-200">
        <h1 className="text-3xl py-3 text-center">Add Food</h1>
      </div>
      <div className="mx-auto shadow-xl rounded-b-xl py-5 px-8 ">
        <form
          onSubmit={handleSubmit}
          className="space-y-3"
        >
          

    <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label htmlFor="donar_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donar Name</label>
            <input type="text" id="donar_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div>
            <label htmlFor="donar_image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donar Image</label>
            <input type="url" id="donar_image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
        </div>
        <div>
            <label htmlFor="food_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Name</label>
            <input type="text" id="food_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required/>
        </div>  
        <div>
            <label htmlFor="food_image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Image</label>
            <input type="tel" id="food_image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </div>
        
        <div>
            <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
            <input type="number" id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
        </div>
        <div className="mb-6">
        <label htmlFor="expire-date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expire Date</label>
        <input type="date" id="expire-date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
    </div> 
    <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
    </div> 
    <div className="mb-6">
        <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pickup Location</label>
        <input type="text" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Pickup Location" required/>
    </div> 
    </div>
   
    
   
    <div>
            <label htmlFor="notes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Additional Note</label>
            <textarea type="text" id="notes" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
        </div>
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    
      </div>
    </div>
  );
};

export default AddFood;

// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const FooterSection = () => {
  return (
    <div className="pb-5">
    

    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="grid lg:grid-cols-3">
            <Link to="/" className="flex items-center justify-center lg:justify-start mb-4 sm:mb-0">
                <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
                
            </Link>
            <ul className="flex justify-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <Link to="/" className="mr-4 hover:underline md:mr-6 ">Home</Link>
                </li>
                <li>
                    <Link to="/foods" className="mr-4 hover:underline md:mr-6">Foods</Link>
                </li>
                <li>
                    <Link to="/login" className="mr-4 hover:underline md:mr-6 ">Login</Link>
                </li>
                
            </ul>
            <ul className="flex justify-center lg:justify-end gap-5 flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <Link href="#" className="mr-4 hover:underline md:mr-6 "><BsFacebook></BsFacebook></Link>
                </li>
                <li>
                    <Link href="#" className="mr-4 hover:underline md:mr-6"> <BsInstagram></BsInstagram></Link>
                </li>
                <li>
                    <Link href="#" className="mr-4 hover:underline md:mr-6 "> <BsTwitter></BsTwitter></Link>
                    
                </li>
               
            </ul>
        </div>
        <hr className="mb-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Zero Hunger</a>. All Rights Reserved.</span>
    </div>
</footer>



    </div>
  );
};

export default FooterSection;

{/* <div className="flex w-full justify-center lg:justify-end gap-5">
             
             

   
            
      
         
            
        
         </div> */}

        //  <div className="flex w-full justify-center items-center gap-5 ">
        //       <Link to="/">Home</Link>
        //       <Link to="/foods">Foods</Link>
        //       <Link to="/login">Login</Link>
        //     </div>
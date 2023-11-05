import AccessoriesSection from "../Components/AccessoriesSection/AccessoriesSection"
import Banner from "../Components/Banner/Banner"
import ItemsContainer from "../Components/CarITems/ItemsContainer"
import CategoryContainer from "../Components/Category/CategoryContainer"
import ProductSection from "../Components/ProductsSection/ProductSection"

const HomePage = () => {
   
  return (
    <div >
     <Banner></Banner>
     <ItemsContainer></ItemsContainer>
     <CategoryContainer></CategoryContainer>
     <ProductSection></ProductSection>
     <AccessoriesSection></AccessoriesSection>
    </div>
  )
}

export default HomePage

import TopDonar from "../Components/TopDonar/TopDonar"
import Banner from "../Components/Banner/Banner"
import ItemsContainer from "../Components/CarITems/ItemsContainer"
import FeatureFood from "../Components/FeatureFoodSection/FeatureFood"
import DonationForm from "../Components/DonationForm.jsx/DonationForm"
import ContactSection from "../Components/ContactSection/ContactSection"
import { Helmet } from "react-helmet"

const HomePage = () => {
   
  return (
    <div >
       <Helmet>
        <title>Zero Hunger | Home</title>
      </Helmet>
     <Banner></Banner>
     <ItemsContainer></ItemsContainer>
     <FeatureFood></FeatureFood>
     <TopDonar></TopDonar>
     <DonationForm></DonationForm>
     <ContactSection></ContactSection>
    </div>
  )
}

export default HomePage

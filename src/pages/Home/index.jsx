
import './styles.css'
import Header from "../../components/molecules/Header/Header";
import Services from '../../components/molecules/Services/Services';
import Footer from '../../components/molecules/Footer/Footer';
import Doctor from '../../components/molecules/Doctor';
import Navbar from '../../components/molecules/Navbar';
const Home =()=>{ 
  return(
    <div>
      
      
        <Header/>
        <Services/>
        <Doctor/>
        <Footer/>
        
       
        
    </div>
  )
}
export default Home;
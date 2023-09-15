import Navbar from "../../components/molecules/Navbar";
import imagebak from './cbak1.jpg'

const Service = () => {
  return (
    <div>
      <Navbar/>
      <div className="back"style={{ backgroundImage: `url(${imagebak})` }}></div>
    </div>
  );
};
export default Service;

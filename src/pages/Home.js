import Header from "../components/Header";
import { menuItems } from "../constants";
import SliderComponent from "../components/SliderComponent";
import BestOf from "../components/BestOf";
const Home = () => {

    return (
        <>
            <Header />
            <div className="itemlist">
                <ul>
                    {menuItems.map((item) => {
                        return <li><a><img src={item.image} /><br />{item.name}</a></li>
                    })}
                </ul>
            </div>
            <SliderComponent />
            <BestOf heading={"Best of Electronics"}/>
        </>
    )
}
export default Home;
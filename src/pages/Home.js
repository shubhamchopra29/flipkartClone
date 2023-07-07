import Header from "../components/Header";
import { menuItems } from "../constants";
import SliderComponent from "../components/SliderComponent";
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
                <SliderComponent />
            </div>
        </>
    )
}
export default Home;
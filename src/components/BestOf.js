import { bestOfItems } from "../constants";
const BestOf = ({ heading }) => {
    console.log(bestOfItems)
    return <>
        <div className="bestOfContainer" style={{ margin: "10px" }}>
            <h2>{heading}</h2>
            <div style={{ display: "flex", gap: "20px" }}>
                {bestOfItems.map(item => {
                    return (
                        <div className="bestOfImageBox">
                            <img src={item.image} className="bestOfImage" alt="listitems"></img>
                            <div>
                                <span>{item.name}</span><br />
                                <span>From {item.price}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div >
    </>
}
export default BestOf;
import RestaurantCard from "./RestaurantCard";
import ResList from "../utils/mockdata";




const Body =()=>{
    return(
    <div className="body">
        <div className="Search-bar">Search</div>
        <div className="res-container">
        {
            ResList.map((restaurant) =>(
                <RestaurantCard ResData={restaurant}/>
            )

            )
        }
        </div>
    </div>
    
    );
};

export default Body;
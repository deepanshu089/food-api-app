const RestaurantCard=(props)=>{
    const {ResData}=props;
    return(
        <div className="res-card">
            
            <div>
                <img className="res-img"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ResData.info.cloudinaryImageId}></img>
                <h3>{ResData.info.name}
                </h3>
                <h4>{ResData.info.locality}</h4>
                <h4>{ResData.info.costForTwo}</h4>
                <h4>{ResData.info.cuisines.join(" ,")}</h4>

                
                </div>
            <h4></h4>
            </div>
    );
};


export default RestaurantCard;
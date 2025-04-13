import React from "react";
import ReactDOM from "react-dom/client";
//
/* 

!header
?logo
?navbar


!Body
?serchBar
search button

restroant container
restro card



!footer
?copyright
?links
?Address
?contact

*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://s.tmimgcdn.com/scr/1200x750/242400/food-delivery-custom-design-logo-template_242462-original.png" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://b.zmtcdn.com/data/pictures/3/20245863/6b3ec527ef9ff0be082502997c274191.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
      />

      <h3>{props.restaurantName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.ratings} stars</h4>
      <h4>{props.ETA}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          restaurantName="Outhouse Cafe"
          cuisine="Biryani,Dibdih,Ranchi"
          ratings="4.4 "
          ETA="20 minutes"
        />
        <RestaurantCard 
          restaurantName = "The Kav's"
          cuisine = "Veg thali"
          ratings = "4.6 "
          ETA = "45 minutes"
        
        />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

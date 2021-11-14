import { useContext } from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Card from "../Items/card/Card";
import { AuthContext } from "../../context/AuthContextProvider";

function Header({ search, setSearch }) {
  const { state } = useContext(AuthContext);

  const searchOnChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div className="header-image">
      {<Navbar />}
      <div className="container-lg">
        <h1>Explore</h1>
        <h2>your amazing city together</h2>
      </div>
      <label for="basic-addon2" class="form-label0 header-label ">
        Find great places to holliday
      </label>
      <div className="container-fluid d-flex input-container">
        <div class="input-group mb-3">
          <input
            onChange={searchOnChange}
            type="text"
            class="form-control"
            id="basic-addon2"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <a href class="input-group-text" id="basic-addon2">
            Search
          </a>
        </div>
      </div>
      {state.user.user?.role === "admin" || search ? (
        <></>
      ) : (
        <div className="cards-container d-flex gap-5 justify-content-center">
          <Card
            image="assets/guarantee.png"
            title="Best Price
                 Guarantee"
            subtitle="A small river named Duren flows by their place and supplies"
          />
          <Card
            image="assets/heart.png"
            title="Travellers Love Us"
            subtitle="A small river named Duren flows by their place and supplies"
          />
          <Card
            image="assets/agent.png"
            title="Best Travels Agent"
            subtitle="A small river named Duren flows by their place and supplies"
          />
          <Card
            image="assets/cs.png"
            title="Dedicated
                 Support"
            subtitle="A small river named Duren flows by their place and supplies"
          />
        </div>
      )}
    </div>
  );
}

export default Header;

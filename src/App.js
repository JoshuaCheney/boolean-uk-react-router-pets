import "./styles.css";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Petlist from "./components/PetList";
import PetView from "./components/PetView";
import ContactUs from "./components/ContactUs";

const petsData = [
  {
    id: 1,
    name: "Larry",
    breed: "labrador",
    age: "4"
  },
  {
    id: 2,
    name: "Scooby-Doo",
    breed: "Great Dane",
    age: "6"
  },
  {
    id: 3,
    name: "Lassie",
    breed: "Collie",
    age: "5"
  }
];

export default function App() {
  const [pets, setPets] = useState(petsData);
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/petlist">
        <Petlist pets={pets} />
      </Route>
      <Route exact path="/petlist/:petId">
        <PetView pets={pets} />
      </Route>
      <Route exact path="/contactus">
        <ContactUs />
      </Route>
    </Switch>
  );
}

import { useEffect } from "react";
import { useParams } from "react-router-dom";

function PetView(props) {
  const { pets } = props;
  const { petId } = useParams();
  console.log("route params", petId);

  const pet = pets.find((pet) => pet.id === parseInt(petId, 10));

  return (
    <main>
      <h2>{pet.name}</h2>
      <h3>Breed: {pet.breed}</h3>
      <h3>age: {pet.age}</h3>
      <button>Adopt</button>
    </main>
  );
}

export default PetView;

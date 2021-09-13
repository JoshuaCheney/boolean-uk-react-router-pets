import { useHistory } from "react-router-dom";

function PetList(props) {
  const { pets } = props;
  console.log("pets", pets);

  const history = useHistory();

  return (
    <ul>
      {pets.map((pet, index) => {
        return (
          <li key={index}>
            <h2>{pet.name}</h2>
            <button onClick={() => history.push(`/petlist/${pet.id}`)}>
              View
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default PetList;

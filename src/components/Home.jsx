import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link to="/petlist">Pets</Link>
        </li>
        <li>
          <Link to="/contactus">Contact Us</Link>
        </li>
      </ul>
    </main>
  );
}

export default Home;

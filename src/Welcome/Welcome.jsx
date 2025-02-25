import "./Welcome.css";

function Welcome({ currentAccount }) {
  if (!currentAccount) return <p className="welcome">Log in to get started</p>;
  const name = currentAccount.owner.split(" ")[0];
  return <p className="welcome">Bienvenid@ {name}</p>;
}

export default Welcome;

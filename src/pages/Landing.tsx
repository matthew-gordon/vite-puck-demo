import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <div>
        <h1>Welcome to your internal docs.</h1>
      </div>
      <div>
        <Link to="editor">Go to the docs editor</Link>
      </div>
    </div>
  );
}

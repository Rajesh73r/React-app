import { Link } from "react-router-dom";
import routes from "./routes";

export default function Home() {
  return (
    <>
      <h1>My React Projects</h1>
      <ol>
        {routes.map(({ path, title }) => (
          <li key={path}>
            <Link to={path}>{title}</Link>
          </li>
        ))}
      </ol>
    </>
  );
}

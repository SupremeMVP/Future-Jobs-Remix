import { Link } from "remix";

export default function Header() {
  return (
    <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
      <Link to="/" className="d-flex align-items-center text-dark text-decoration-none">
        <span className="fs-4">👍 FastAPI, Remix, Deta Companies</span>
      </Link>
    </header>
  );
}

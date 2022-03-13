import { Link } from "remix";

export default function Main() {
  return (
    <main>
      <h2>Find companies that uses Remix, Deta, and/or FastAPI!</h2>
      <p className="fs-5 col-md-8">
        Post your company for free and help me test this stack!<br />
        Made with ☕️, <a href="https://remix.run/">Remix</a>, <a href="https://fastapi.tiangolo.com/">FastAPI</a>, and <a href="https://www.deta.sh/">Deta</a>.
      </p>

      <div className="mb-5">
        <Link to="/companies/create" className="btn btn-primary btn px-4">Post a company</Link>
      </div>

      <hr className="col-3 col-md-2 mb-5" />
    </main>
  );
}

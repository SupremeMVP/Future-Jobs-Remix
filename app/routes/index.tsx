import { Link, useLoaderData, json } from "remix";

import Main from "~/components/Main";
import { getCompanies } from "~/company";
import type { Companies } from "~/company";

import CompanyCard from '~/components/Features/Company/Card';


export const loader = async () => {
  return json(await getCompanies())
}
export default function Header() {
  const companies = useLoaderData<Companies>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Main />
      <div className="row g-5">
        <div className="col">
          <h3>Newest Companies <Link to="/companies" className="fs-6">See All</Link> </h3>
            <div className="d-flex flex-wrap">
              {companies._items.map((company) => (
                <CompanyCard key={company.key} company={company} additional="/companies/" />
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}

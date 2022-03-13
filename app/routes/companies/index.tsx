import { useLoaderData, json } from "remix";

import { getCompanies } from "~/company";
import type { Companies } from "~/company";

import CompanyCard from '~/components/Features/Company/Card'

export const loader = async () => {
  return json(await getCompanies())
}

export default function Companies() {
  const companies = useLoaderData<Companies>();
  return (
    <div>
      <h2>Companies</h2>
      <div className="d-flex flex-wrap">
        {companies._items.map((company) => (
          <CompanyCard key={company.key} company={company} />
        ))}
      </div>
    </div>
  )
}

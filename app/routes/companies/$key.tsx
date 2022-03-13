import { json, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";

import { getCompany } from "~/company";
import type { Company } from "~/company";

import Alert from '~/components/Features/Alert';

export const loader: LoaderFunction = async ({ 
  params,
}) => {
  invariant(params.key, "expected params.key");
  return json(await getCompany(params.key));
}

export default function CompanyKey() {
  const company = useLoaderData<Company>();
  return (
    <main>
      <Alert isApproved={company.approved} />
      <h1>{company.name} <a href={company.url} type="button" className="btn btn-primary btn-sm">Visit Website</a></h1>
      <p className="fs-5 col-md-8">
        {company.description}
      </p>
      <p className="fs-5 col-md-8">
        Located: {company.location}
      </p>
    </main>
  )
}

export type Company = {
  key?: string;
  email: string;
  name: string;
  description: string;
  url: string;
  location: string;
  jobs?: Array<[]>;
  logo?: string;
  hiring?: boolean;
  deta?: boolean;
  fastapi?: boolean;
  remix?: boolean;
  ip?: string;
  approved?: boolean;
  consulting?: boolean;
};

export type Companies = {
  _count: number,
  _last: string,
  _items: Array<Company>
}

export async function getCompanies() {
  const res = await fetch(`${process.env.FAJOBS_ENDPOINT}/companies/`);
  return res.json();
}

export async function getCompany(key: string) {
  const res = await fetch(`${process.env.FAJOBS_ENDPOINT}/company/${key}`);
  return res.json();
}

export async function createCompany(companyData: any) {
  const res = await fetch(`${process.env.FAJOBS_ENDPOINT}/company/`, {
    method: 'PUT',
    mode: 'same-origin',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: { 
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(companyData)
  });
  return res.json();
}
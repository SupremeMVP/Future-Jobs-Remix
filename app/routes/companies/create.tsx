import type { ActionFunction } from "remix";
import { json, redirect, Form, useTransition, useActionData } from "remix";

import { createCompany } from "~/company";

// https://github.com/edmundhung/remix-guide/blob/d7e7df781ecfade96ee560181fa1618bdbc209e2/app/routes/submit.tsx#L20
function isValidURL(text: string): boolean {
	try {
		const url = new URL(text);

		return (
			['https:'].includes(url.protocol) &&
			!/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/.test(url.hostname)
		);
	} catch (e) {
		return false;
	}
}

export const action: ActionFunction = async ({
  request,
}) => {
  const formData = await request.formData();
  
  const formDataJSON = Object.fromEntries(formData.entries());

  console.log('formDataJSON', formDataJSON);
  
  if (!formDataJSON.url || !isValidURL(formDataJSON.url.toString())) {
    return json({ 
      errors: {
        url: 'Not a real url 😟'
      }, 
    });
  }

  const values = await createCompany(formDataJSON);

  return redirect(`/companies/${values.key}`)
};

export default function NewCompany() {
  const transition = useTransition();
  const actionData = useActionData();

  return (
    <div>
      <h2>Create Company</h2>
      <Form method="post">
        <fieldset
          disabled={transition.state === "submitting"}
        >
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">Contact Email</label>
          <input name="email" type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" required />
          <div id="emailHelp" className="form-text">Email to contact and verify</div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">Company Name</label>
          <input name="name" type="text" className="form-control" id="inputName" aria-describedby="nameHelp" required />
          <div id="nameHelp" className="form-text">What's the name of the company?</div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputLocation" className="form-label">Location</label>
          <input name="location" type="text" className="form-control" id="inputLocation" aria-describedby="locationHelp" required />
          <div id="locationHelp" className="form-text">What's the location of the company?</div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputUrl" className="form-label">URL</label>
          <input name="url" type="url" className="form-control" id="inputUrl" aria-describedby="urlHelp" required />
          <div id="urlHelp" className="form-text">
            What's the url of the company's website?
            {actionData?.errors.url ? (
            <span style={{ color: "red" }}>
              {actionData.errors.url}
            </span>
          ) : null}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
          <textarea name="description" className="form-control" id="exampleFormControlTextarea1" rows={3} required></textarea>
        </div>

        <h4>Select All that apply:</h4>
        <div className="mb-3 form-check">
          <input name="deta" type="checkbox" className="form-check-input" id="detaCheck" />
          <label className="form-check-label" htmlFor="detaCheck">Deta</label>
        </div>
        <div className="mb-3 form-check">
          <input name="fastapi" type="checkbox" className="form-check-input" id="fastapiCheck" />
          <label className="form-check-label" htmlFor="fastapiCheck">FastAPI</label>
        </div>
        <div className="mb-3 form-check">
          <input name="remix" type="checkbox" className="form-check-input" id="remixCheck" />
          <label className="form-check-label" htmlFor="remixCheck">Remix</label>
        </div>
        <div className="mb-3 form-check">
          <input name="hiring" type="checkbox" className="form-check-input" id="hiringCheck" />
          <label className="form-check-label" htmlFor="hiringCheck">Hiring</label>
        </div>
        <div className="mb-3 form-check">
          <input name="consulting" type="checkbox" className="form-check-input" id="consultingCheck" />
          <label className="form-check-label" htmlFor="consultingCheck">Open to Clients and Consulting</label>
        </div>
        <button type="submit" className="btn btn-primary">
          {transition.state === "submitting"
              ? "Creating..."
              : "Create"}
        </button>
        </fieldset>
      </Form>
    </div>
  )
}

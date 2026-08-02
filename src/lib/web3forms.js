const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const ENDPOINT = 'https://api.web3forms.com/submit';

/**
 * Submits a native <form> element to Web3Forms, tagging the email with
 * which page/form it came from so replies can be routed to the right context.
 */
export async function submitToWeb3Forms(formElement, source) {
  const formData = new FormData(formElement);
  formData.set('access_key', ACCESS_KEY);
  formData.set('subject', `New ${source} submission — Medicure Trip`);
  formData.set('from_name', 'Medicure Trip Website');
  formData.set('page_source', source);

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: formData,
  });

  return response.json();
}

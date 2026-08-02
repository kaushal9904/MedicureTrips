const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const ENDPOINT = 'https://api.web3forms.com/submit';

/**
 * Submits a native <form> element to Web3Forms, tagging the email with
 * which page/form it came from so replies can be routed to the right context.
 *
 * Web3Forms only returns a proper JSON response when the request body is
 * application/json — a multipart/form-data POST (the default for a plain
 * FormData body) gets back an HTML "thank you" page instead, which broke
 * every form's success/error detection. JSON is used whenever the form has
 * no file input; forms with a file input (e.g. resume upload) must stay
 * multipart, so those fall back to treating any HTTP 200 as success since
 * the response body can't be reliably parsed as JSON in that case.
 */
export async function submitToWeb3Forms(formElement, source) {
  const formData = new FormData(formElement)
  const hasFile = [...formData.values()].some((v) => v instanceof File && v.size > 0)

  const extra = {
    access_key: ACCESS_KEY,
    subject: `New ${source} submission — Medicure Trip`,
    from_name: 'Medicure Trip Website',
    page_source: source,
  }

  if (hasFile) {
    Object.entries(extra).forEach(([key, value]) => formData.set(key, value))
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    })
    try {
      return await response.json()
    } catch {
      return { success: response.ok }
    }
  }

  const payload = { ...Object.fromEntries(formData.entries()), ...extra }
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  return response.json()
}

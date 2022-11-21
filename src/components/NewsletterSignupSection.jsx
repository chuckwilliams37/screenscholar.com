import { useState } from 'react'

import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

export default function NewsletterSignupSection() {
  const [email, setEmail] = useState('')
  const [formEntryState, setFormEntryState] = useState(null)

  const pipeDreamWorkflowTriggerUrl = 'https://eo18tohcqd2iasl.m.pipedream.net'

  const subscribeEmailToNewsletter = async () => {
    console.log('subscribeEmailToNewsletter()')
    try {
      // const res = await fetch(pipeDreamWorkflowTriggerUrl)
      setFormEntryState('submitting')

      const response = await fetch(pipeDreamWorkflowTriggerUrl, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({
          email: email,
        }), // body data type must match "Content-Type" header
      })

      const subscriptionResult = await response.json()
      // console.log('subscribeEmailToNewsletter().result', subscriptionResult)
      setFormEntryState('submitted')
      // console.log('formEntryState', formEntryState)
    } catch (err) {
      console.log("Error in 'subscribeEmailToNewsletter()'", err)
    }
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    subscribeEmailToNewsletter()
  }

  let newsletterSection

  switch (formEntryState) {
    case 'submitted':
      newsletterSection = (
        <div className="rounded-md bg-green-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <CheckCircleIcon
                className="h-5 w-5 text-green-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">
                Thank you for keeping in touch!
              </p>
            </div>
            <div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
                <button
                  onClick={() => {
                    setFormEntryState(null)
                    setEmail('')
                  }}
                  type="button"
                  className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                >
                  <span className="sr-only">Dismiss</span>
                  <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )
      break
    default:
      newsletterSection = (
        <div className="rounded-3xl bg-teal-700 py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:p-20">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Let&apos;s keep in touch!
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-teal-100">
              Have I interested you in keeping up with my projects? Sign up to
              get notified when I publish something new! You may receive blog
              posts, project updates, and other special invitations to interact
              face-to-face online live, or in-person at events nation-wide.
              Unsubscribe at any time.
            </p>
          </div>
          <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
            <>
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-700"
                  placeholder="Enter your email"
                />
                {formEntryState === null && (
                  <button
                    type="submit"
                    className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-teal-500 px-5 py-3 text-base font-medium text-white hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                    onClick={onFormSubmit}
                  >
                    Notify me
                  </button>
                )}
                {formEntryState === 'submitting' && (
                  <button
                    type="submit"
                    disabled
                    className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-500 px-5 py-3 text-base font-medium text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                    onClick={onFormSubmit}
                  >
                    Saving...
                  </button>
                )}
              </form>
            </>
            <p className="mt-3 text-sm text-teal-100">
              I care about the protection of your data. Read my{' '}
              <a
                href="https://www.privacypolicies.com/live/14484ad4-f471-4850-a850-8db4e6d76314"
                className="font-medium text-white underline"
              >
                Privacy Policy.
              </a>
            </p>
          </div>
        </div>
      )
      break
  }

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        {newsletterSection}
      </div>
    </div>
  )
}

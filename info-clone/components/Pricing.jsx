/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
export default function Pricing() {
  return (
    <div className="pricing-section">
      <div className="pricing">
        <div className="pricing-heading">
          <p className="pricing-top-text">Pricing</p>
          <h2>
            Unlock <span>Unlimited</span> Access with Early Bird Pricing
          </h2>
          <p className="pricing-bot-text">
            Be among the first to experience the future with infoGPT's Early
            Bird Pack
          </p>
        </div>
        <div className="pricing-card">
          <div className="pricing-card-left">
            <h3>Lifetime membership</h3>
            <p>
              For just $10, you'll gain unrestricted access to all infoGPT
              features, enjoy unlimited requests, and receive priority support
              whenever you need it.
            </p>
            <div className="pricing-included">
              <h3>What's included</h3>
              <div className="included-items">
                <div className="included-items-list-1">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="flex-none w-5 h-6 text-indigo-600"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    All infoGPT Features
                  </p>
                  <p>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="flex-none w-5 h-6 text-indigo-600"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Unlimited Requests, No Limits
                  </p>
                </div>
                <div className="included-items-list-2">
                  <p>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="flex-none w-5 h-6 text-indigo-600"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    GPT-4 Powered Assistant
                  </p>
                  <p>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="flex-none w-5 h-6 text-indigo-600"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Priority support
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pricing-card-right-outside">
            <div className="pricing-card-right">
              <div className="pricing-card-text">
                <p className="pricing-para-1">Pay once, own it forever</p>
                <p className="pricing-para-2">
                  <span className="pricing-span-1">$10</span>
                  <span className="pricing-span-2">USD</span>
                </p>
                <button className="pricing-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                    ></path>
                  </svg>
                  Unlock Unlimited Access
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

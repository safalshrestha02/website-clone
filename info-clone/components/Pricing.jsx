/* eslint-disable react/no-unescaped-entities */
export default function Pricing() {
  return (
    <>
      <div className="pricing">
        <div className="pricing-heading">
          <p>Pricing</p>
          <h2>
            Unlock <span>Unlimited</span> Access with Early Bird Pricing
          </h2>
          <p>
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
              <p>What's included</p>
              <div className="included-items">
                <p>All infoGPT Features</p>
                <p>Unlimited Requests, No Limits</p>
                <p>GPT-4 Powered Assistant</p>
                <p>Priority support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing-button">
        <p>Pay once, own it forever</p>
        <p>
          <span>$10</span> USD
        </p>
        <button>
          <img src="" alt="lock"></img>Unlock Unlimited Access
        </button>
      </div>
    </>
  );
}

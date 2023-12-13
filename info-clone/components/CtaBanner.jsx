/* eslint-disable react/no-unknown-property */
export default function CtaBanner() {
  return (
    <div className="cta-banner">
      <div className="get-started">
        <div className="get-started-left">
          <h2>Ready to Get Started?</h2>
          <p className="cta-banner-upper-text">
            Embark on Your Journey to Limitless Potential with a Simple Click
          </p>
          <button className="cta-banner-btn">
            <span>Get infoGPT</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M11.6667 4.66675L17.5 10.5001M17.5 10.5001L11.6667 16.3334M17.5 10.5001H2.5"
                stroke="url(#paint0_linear_328_2531)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_328_2531"
                  x1="1.8421"
                  y1="4.66675"
                  x2="20.5631"
                  y2="7.80461"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9024EC"></stop>
                  <stop offset="1" stop-color="#5F0CF9"></stop>
                </linearGradient>
              </defs>
            </svg>
          </button>
          <p className="cta-banner-lower-text">
            Limited Time Offer – Act Now! and get unlimited access to infoGPT
          </p>
        </div>
        <div className="get-started-right">
          <img src="/banner-image.png" alt="image" />
        </div>
      </div>
    </div>
  );
}

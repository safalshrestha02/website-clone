/* eslint-disable react/no-unknown-property */
export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-items">
        <div className="banner-early-bird">
          <div className="early-bird-para">
            <p className="early-bird-text">
              <span className="early-bird-span">Unlimited</span> Unlock
              unlimited access with{" "}
              <a href="#">
                <span>Early Bird Pack</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="18"
                  viewBox="0 0 20 21"
                  fill="none"
                  class="inline"
                >
                  <path
                    d="M7.5 4.66664L13.3333 10.5L7.5 16.3333"
                    stroke="#374151"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </p>
          </div>
        </div>
        <div className="banner-texts">
          <h1 className="banner-heading">
            <span>Productivity and Beyond:</span> <br /> Your all-in-one AI
            Digital Assistant
          </h1>
          <p className="banner-paragraph">
            Convert voice notes to coherent text, spark your artistic
            imagination in our art studio, chat with pdf. <br />
            Elevate writings, optimize your social media presence, travel plans
            and guides, whip up nutritional masterpieces. <br />
            Dive deep into books & movies, and supercharge your productivity
            tools.
          </p>
        </div>
        <div className="banner-btn">
          <a href="#" className="banner-btn-register">
            <span>Register</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              class="inline"
            >
              <path
                d="M11.6667 4.66667L17.5 10.5M17.5 10.5L11.6667 16.3333M17.5 10.5H2.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
          <button className="banner-btn-learn">Learn More</button>
        </div>
      </div>
    </div>
  );
}

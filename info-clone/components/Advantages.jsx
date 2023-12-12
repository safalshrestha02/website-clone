/* eslint-disable react/no-unescaped-entities */
export default function Advantages() {
  return (
    <div className="advantages">
      <div className="advantages-heading">
        <p className="advantages-top-text">Advantages</p>
        <h2>Ready to Revolutionize Your Interactions?</h2>
        <p className="advantages-bot-text">
          Organize your contents with Folders. Generate itineraries, summaries,
          reviews, and analysis for movies, books, and more. Plan meals,
          generate recipes, Plus, we're always updating our tools and adding new
          categories to make sure you have access to the latest and greatest
          information.
        </p>
      </div>
      <div className="advantages-card">
        <div className="advantages-card-left">
          <div className="multilingual">
            <div className="multilingual-text">
              <h3>Multilingual Support</h3>
              <p>
                InfoGPT offers a universal touch with multilingual support.
                Engage and receive assistance in various languages including
                Japanese, French, Chinese, Portuguese, Spanish, and more. No
                matter where you're from, InfoGPT ensures seamless conversations
                without language limitations.
              </p>
            </div>
            <img src="/multilingual.png" alt="multilingual" />
          </div>
          <div className="industry">
            <div className="industry-text">
              <h3>Industry Versatility</h3>
              <p>
                InfoGPT adapts to your every need, spanning across personal and
                professional domains. Whether you're a student seeking academic
                support, a professional streamlining tasks, or an enthusiast
                exploring fresh ideas, InfoGPT is your reliable AI companion.
                Discover the limitless potential of InfoGPT across a spectrum of
                industries.
              </p>
            </div>
            <img src="/industry-versatility.png" alt="industry" />
          </div>
        </div>
        <div className="advantages-card-right">
          <div className="advantages-card-right-text">
            <img src="/stay-organized.png" alt="infoGpt" />
            <h3>Stay Organized</h3>
            <p>
              Organize your contents with Folders. Generate itineraries,
              summaries, reviews, and analysis for movies, books, and more. Plan
              meals, generate recipes, Plus, we're always updating our tools and
              adding new categories to make sure you have access to the latest
              and greatest information.
            </p>
          </div>
        </div>
      </div>
      <div className="many-more">
        <h2>...and many more.</h2>
        <p>
          InfoGPT is designed to be adaptable to a wide range of industries and
          applications, always ready to take your personal and business
          assistance to the next level.
        </p>
      </div>
    </div>
  );
}

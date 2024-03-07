// import { Component } from "react";

export default function Footer() {
  // const { items } = this.props;
  return (
    <div className="footer">
      <img src="/beeyondai.png" alt="" className="beeyond" />
      <div className="sponsors">
        <img
          width={200}
          src="https://media.theresanaiforthat.com/featured3.png"
          alt=""
          className="featured"
        />
        <img
          width={100}
          src="https://infogpt-assets.s3.ap-northeast-1.amazonaws.com/app/GrabOn-Logo.png"
          alt=""
          className="grab"
        />
      </div>
      <ul>
        <li>Affiliate Program</li>
        <li>Terms</li>
        <li>Privacy</li>
        <li>Refund Policy</li>
      </ul>
      <p>© 2023 www.beeyondai.com, Bridge Software Solutions Pvt. Ltd.</p>
    </div>
  );
}

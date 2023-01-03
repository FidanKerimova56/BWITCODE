import React from "react";
import "./WhatDoWeOffer.css";
import onlinePresence from "../../assets/onlinePresence.png";
import informationExchange from "../../assets/informationExchange.png"
import credibility from "../../assets/credibility.png"
import costEffective from "../../assets/cost-effective.png"
import marketing from "../../assets/marketing.png"

const WhatDoWeOffer = () => {
  return (
    <div className="WhatDoWeOffer-container">
      <h3 className="what-offer-h3">What Do We Offer You</h3>
      <div className="card-container">
        {/* Online Presence */}
        <div className="card">
          <div className="card-num">01</div>
          <div className="card-pic">
            <img src={onlinePresence} alt="" />
          </div>
          <div className="card-text">
            <h4 className="card-title">Online Presence 24/7</h4>
            <p className="card-subtitle">
              Having a website means customers are always to find you - anytime,
              anywhere. Even outside of business hours your websites continue to
              find and secure new customers.
            </p>
          </div>
        </div>
        {/* Information Exchange */}
        <div className="card">
          <div className="card-num">02</div>
          <div className="card-pic">
            <img src={informationExchange} alt="" />
          </div>
          <div className="card-text">
            <h4 className="card-title">Information Exchange</h4>
            <p className="card-subtitle">
            A website provides a quick and easy way of communicating information between buyers and sellers. You can list your opening hours, contact information, show images of your products and etc.
            </p>
          </div>
        </div>
        {/* Credibility */}
        <div className="card">
          <div className="card-num">03</div>
          <div className="card-pic">
            <img src={credibility} alt="" />
          </div>
          <div className="card-text">
            <h4 className="card-title">Credibility</h4>
            <p className="card-subtitle">
            Potential customers would likely be distrusting of any business that didn’t have a telephone number or a physical address and the same can be said for not having a website and email address.
            </p>
          </div>
        </div>
        {/* Cost effective */}
        <div className="card">
          <div className="card-num">04</div>
          <div className="card-pic">
            <img src={costEffective} alt="" />
          </div>
          <div className="card-text">
            <h4 className="card-title">Cost Effective</h4>
            <p className="card-subtitle">
            A physical store requires a massive investment for owning or renting a commercial space.Besides that, furniture, interriors and employees are also some additional expenses that can not be ignored. However, creating a website is very easy and cost-effective.
            </p>
          </div>
        </div>
        {/* Marketing */}
        <div className="card">
          <div className="card-num">05</div>
          <div className="card-pic">
            <img src={marketing} alt="" />
          </div>
          <div className="card-text">
            <h4 className="card-title">Marketing</h4>
            <p className="card-subtitle" >
            Marketing plays a crucial role in the expansion of any business. Having a website makes it pretty easy to spread a word about your business when people are searching for them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatDoWeOffer;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Basic Plan',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        'Basic Health Checkup',
        'Online Consultation',
        'Email Support',
        '1 Lab Test'
      ]
    },
    {
      name: 'Standard Plan',
      monthlyPrice: 59,
      yearlyPrice: 590,
      popular: true,
      features: [
        'Comprehensive Checkup',
        'Priority Consultation',
        'Phone Support',
        '5 Lab Tests',
        'Health Report'
      ]
    },
    {
      name: 'Premium Plan',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Full Body Checkup',
        'VIP Consultation',
        '24/7 Support',
        'Unlimited Lab Tests',
        'Personal Health Manager'
      ]
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="cs_page_header cs_bg_filed" style={{backgroundImage: 'url(/assets/img/page-header-bg.jpg)'}}>
        <div className="container">
          <div className="cs_page_header_content">
            <h1 className="cs_page_title">Pricing</h1>
            <ol className="cs_breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li className="active">Pricing</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="cs_pricing cs_py_100">
        <div className="container">
          {/* Toggle */}
          <div className="cs_pricing_toggle text-center">
            <span className={!isYearly ? 'active' : ''}>Monthly</span>
            <label className="cs_switch">
              <input 
                type="checkbox" 
                checked={isYearly} 
                onChange={() => setIsYearly(!isYearly)}
              />
              <span className="cs_slider cs_round"></span>
            </label>
            <span className={isYearly ? 'active' : ''}>Yearly</span>
          </div>

          {/* Pricing Cards */}
          <div className="row">
            {plans.map((plan, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className={`cs_pricing_card ${plan.popular ? 'cs_accent_bg' : ''}`}>
                  {plan.popular && <div className="cs_pricing_badge">Most Popular</div>}
                  <h3 className="cs_pricing_name">{plan.name}</h3>
                  <div className="cs_pricing_price">
                    <span className="cs_pricing_currency">$</span>
                    <span className="cs_pricing_amount">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="cs_pricing_period">/{isYearly ? 'year' : 'month'}</span>
                  </div>
                  <ul className="cs_pricing_features">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact-us.html" className={`cs_btn cs_style_1 ${plan.popular ? '' : 'cs_accent_bg'}`}>
                    <span>Choose Plan</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cs_cta cs_py_100 cs_accent_bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="cs_cta_title text-white">Ready to Get Started?</h2>
              <p className="cs_cta_text text-white">
                Choose the perfect plan for your healthcare needs and start your journey to better health today.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link to="/contact-us.html" className="cs_btn cs_style_1 cs_white_bg">
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
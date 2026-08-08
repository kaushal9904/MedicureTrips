import { useState } from 'react';
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" style={{ backgroundImage: "url('/assets/img/page_header_bg.webp')" }}>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Pricing</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Pricing</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="cs_pricing_section_2">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_50 text-center">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Simple, Transparent <br /> Healthcare Plans</h2>
          </div>

          {/* Toggle */}
          <div className="cs_pricing_toggle cs_mb_50 justify-content-center d-flex">
            <button type="button" className={`cs_pricing_toggle_label ${!isYearly ? 'active' : ''}`} onClick={() => setIsYearly(false)}>Monthly</button>
            <label className="cs_pricing_switch">
              <input
                type="checkbox"
                checked={isYearly}
                onChange={() => setIsYearly(!isYearly)}
                aria-label="Toggle yearly pricing"
              />
              <span className="cs_pricing_slider"></span>
            </label>
            <button type="button" className={`cs_pricing_toggle_label ${isYearly ? 'active' : ''}`} onClick={() => setIsYearly(true)}>
              Yearly <span className="cs_pricing_save">(Save 15%)</span>
            </button>
          </div>

          {/* Pricing Cards */}
          <div className="row cs_gap_y_24 justify-content-center">
            {plans.map((plan, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className={`cs_pricing_card cs_radius_20 ${plan.popular ? 'cs_pricing_card_featured' : ''}`}>
                  {plan.popular && <div className="cs_pricing_badge cs_accent_bg cs_white_color cs_radius_50">Most Popular</div>}
                  <div className="cs_pricing_header">
                    <h3 className="cs_pricing_title cs_fs_24 cs_semibold">{plan.name}</h3>
                    <div className="cs_pricing_price">
                      <span className="cs_pricing_amount cs_fs_60 cs_bold cs_accent_color">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="cs_pricing_period">/{isYearly ? 'year' : 'month'}</span>
                    </div>
                  </div>
                  <ul className="cs_pricing_features cs_mp_0">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>
                        <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact-us.html"
                    className={`cs_btn_style_1 cs_radius_5 w-100 text-center ${plan.popular ? 'cs_accent_bg cs_white_color' : 'cs_primary_color cs_semibold'}`}
                  >
                    <span>Choose Plan</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="container">
          <div className="cs_cta_style_1 cs_radius_20 cs_bg_filed position-relative" style={{ backgroundImage: "url('/assets/img/cta_bg_2.webp')" }}>
            <div className="row cs_gap_y_30">
              <div className="col-lg-6">
                <div className="cs_cta_text">
                  <h2 className="cs_cta_title cs_fs_40 cs_semibold cs_mb_10">Ready to Get Started?</h2>
                  <p className="cs_cta_subtitle cs_mb_30">Choose the perfect plan for your healthcare needs and start your journey to better health today.</p>
                  <Link to="/contact-us.html" aria-label="Contact Us" className="cs_btn_style_1 cs_danger_bg cs_white_color cs_semibold cs_radius_5">
                    <img src="/assets/img/icons/emain.svg" alt="Email icon" />
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cs_cta_img">
                  <img src="/assets/img/cta_img_2.webp" alt="Doctors Team" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <button type="button" id="scrollToTopBtn" className="cs_scrollup_btn" onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </main>
  );
};

export default Pricing;

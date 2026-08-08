import React from 'react';
import { Link } from 'react-router-dom';
import { costEstimates, formatUSD, formatRange } from '../data/costEstimates';

const Packages = () => {
  return (
    <>
      {/* Page Header */}
      <section className="cs_page_header cs_bg_filed" style={{backgroundImage: 'url(/assets/img/page-header-bg.jpg)'}}>
        <div className="container">
          <div className="cs_page_header_content">
            <h1 className="cs_page_title">Packages</h1>
            <ol className="cs_breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li className="active">Packages</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Treatment Cost Breakdown */}
      <section className="cs_cost_breakdown_section cs_py_100">
        <div className="container">
          <div className="cs_cost_breakdown_heading text-center">
            <span className="cs_cost_breakdown_badge">Cost Transparency</span>
            <h2 className="cs_fs_40 cs_bold cs_mb_16 cs_mt_16">
              Treatment Cost Breakdown: India vs USA vs UK
            </h2>
            <p className="cs_cost_breakdown_desc">
              A detailed look at what each treatment costs at Medicure Trip's
              partner hospitals in India compared to the USA and UK, plus
              exactly what's included in every package.
            </p>
          </div>
          <div className="cs_cost_breakdown_list">
            {costEstimates.map((item) => {
              const savingsPercent = Math.round((1 - item.india / item.usa[0]) * 100);
              return (
                <div key={item.slug} className="cs_cost_breakdown_row">
                  <div className="row cs_gap_y_24 align-items-center">
                    <div className="col-lg-4">
                      <div className="cs_cost_breakdown_info">
                        <span className="cs_cost_breakdown_icon">
                          <i className={`fa-solid ${item.icon}`}></i>
                        </span>
                        <div>
                          <span className="cs_cost_breakdown_category">
                            {item.category.toUpperCase()}
                          </span>
                          <h3 className="cs_cost_breakdown_title">{item.title}</h3>
                        </div>
                      </div>
                      <p className="cs_cost_breakdown_row_desc">{item.description}</p>
                      <ul className="cs_cost_breakdown_includes cs_mp_0">
                        {item.includes.map((point, i) => (
                          <li key={i}>
                            <i className="fa-solid fa-check"></i>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-lg-5">
                      <div className="cs_cost_breakdown_stats">
                        <div className="cs_cost_breakdown_stat cs_cost_breakdown_stat_india">
                          <span className="cs_cost_breakdown_stat_label">India (Medicure Trip)</span>
                          <span className="cs_cost_breakdown_stat_value">From {formatUSD(item.india)}</span>
                        </div>
                        <div className="cs_cost_breakdown_stat">
                          <span className="cs_cost_breakdown_stat_label">USA</span>
                          <span className="cs_cost_breakdown_stat_value cs_cost_breakdown_stat_muted">{formatRange(item.usa)}</span>
                        </div>
                        <div className="cs_cost_breakdown_stat">
                          <span className="cs_cost_breakdown_stat_label">UK</span>
                          <span className="cs_cost_breakdown_stat_value cs_cost_breakdown_stat_muted">{formatRange(item.uk)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="cs_cost_breakdown_savings">
                        <span className="cs_cost_breakdown_savings_label">You Save Up To</span>
                        <span className="cs_cost_breakdown_savings_value">{savingsPercent}%</span>
                        <Link to="/contact-us.html" className="cs_cost_breakdown_btn">
                          <span>Get Personalized Quote</span>
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cs_cost_breakdown_disclaimer">
            <p>
              <i className="fa-solid fa-circle-info"></i>
              Estimates are indicative and based on published hospital rates; final cost depends on individual diagnosis and treatment plan.
            </p>
            <p>
              <i className="fa-solid fa-circle-info"></i>
              All-inclusive packages typically cover surgery, anaesthesia, hospital stay, post-op medication, and a dedicated care manager.
            </p>
            <p>
              <i className="fa-solid fa-circle-info"></i>
              International travel, accommodation, and visa fees are not included in the above estimates.
            </p>
          </div>
        </div>
      </section>

      {/* Visit Our Center */}
      <section className="cs_venue cs_py_100">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center-column text-center cs_mb_48 cs_mb_lg_40">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Visit Our Center</h2>
          </div>
          <div className="row cs_gap_y_24 cs_mb_48 cs_mb_lg_40">
            <div className="col-md-4">
              <div className="cs_feature_card_1 cs_radius_20 cs_color_1">
                <div className="cs_feature_card_header cs_mb_20">
                  <div className="cs_feature_icon cs_white_bg cs_radius_10 cs_center">
                    <img src="/assets/img/icons/location-pin.svg" alt="Location icon" />
                  </div>
                  <h3 className="cs_feature_title cs_fs_24 cs_medium mb-0">Address</h3>
                </div>
                <p className="mb-0">Sushant Lok, Gurugram, Haryana, India</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cs_feature_card_1 cs_radius_20 cs_color_2">
                <div className="cs_feature_card_header cs_mb_20">
                  <div className="cs_feature_icon cs_white_bg cs_radius_10 cs_center">
                    <img src="/assets/img/icons/phone.svg" alt="Phone icon" />
                  </div>
                  <h3 className="cs_feature_title cs_fs_24 cs_medium mb-0">Call Us</h3>
                </div>
                <a href="tel:9958192249">9958192249</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cs_feature_card_1 cs_radius_20 cs_color_3">
                <div className="cs_feature_card_header cs_mb_20">
                  <div className="cs_feature_icon cs_white_bg cs_radius_10 cs_center">
                    <img src="/assets/img/icons/emain.svg" alt="Email icon" />
                  </div>
                  <h3 className="cs_feature_title cs_fs_24 cs_medium mb-0">Email Us</h3>
                </div>
                <a href="mailto:shivammehra20244@gmail.com">shivammehra20244@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_contact_map_section">
          <div className="container">
            <div className="cs_contact_map cs_radius_20">
              <iframe
                src="https://maps.google.com/maps?q=Sushant+Lok,+Gurugram,+Haryana,+India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                title="Medicure Trip location map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Packages;
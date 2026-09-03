import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { costEstimates, formatUSD } from '../data/costEstimates';

const NIGHTLY_HOTEL_RATE = 35; // per room, per night (double occupancy)
const DAILY_FOOD_TRANSPORT = 15; // per traveler, per day
const FLIGHT_PER_TRAVELER = 700; // average international round-trip economy estimate
const VISA_FEE_PER_TRAVELER = 25; // approximate government e-visa fee

const stayOptions = [7, 14, 21, 30];

const CostCalculator = () => {
  const [slug, setSlug] = useState(costEstimates[0].slug);
  const [nights, setNights] = useState(14);
  const [companions, setCompanions] = useState(1);

  const treatment = useMemo(() => costEstimates.find((t) => t.slug === slug) ?? costEstimates[0], [slug]);
  const travelers = 1 + companions;

  const breakdown = useMemo(() => {
    const hotel = NIGHTLY_HOTEL_RATE * nights;
    const foodTransport = DAILY_FOOD_TRANSPORT * nights * travelers;
    const flights = FLIGHT_PER_TRAVELER * travelers;
    const visa = VISA_FEE_PER_TRAVELER * travelers;
    const treatmentCost = treatment.india;
    const total = treatmentCost + hotel + foodTransport + flights + visa;
    const usaLow = treatment.usa[0] + hotel + foodTransport + flights + visa;
    const savings = Math.round((1 - total / usaLow) * 100);
    return { hotel, foodTransport, flights, visa, treatmentCost, total, usaLow, savings };
  }, [treatment, nights, travelers]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" style={{ backgroundImage: "url('/images/cost calculator 1920x600.jpg.jpeg')" }}>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Cost Calculator</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Cost Calculator</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="cs_calc_hero_section">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column mx-auto text-center cs_mb_48 cs_mb_lg_40">
            <span className="cs_cost_breakdown_badge">Trip Cost Planner</span>
            <h2 className="cs_section_title cs_fs_40 cs_semibold cs_mt_16 mb-0">What Will Your Treatment In India Actually Cost?</h2>
            <p className="cs_section_desc mb-0 cs_mt_16">Pick a procedure, tell us how long you'll stay and who's coming with you — we'll add up treatment, hotel, food, flights and visa fees into one working number you can plan around.</p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="cs_calc_section cs_gray2_bg">
        <div className="container">
          <div className="row cs_gap_y_30">
            {/* Inputs */}
            <div className="col-lg-7">
              <div className="cs_calc_card cs_white_bg cs_radius_20">
                <div className="cs_calc_field cs_mb_30">
                  <label htmlFor="calc-treatment" className="cs_fs_16 cs_semibold cs_mb_10 d-block">
                    <i className="fa-solid fa-stethoscope cs_accent_color"></i> 1. Select Your Procedure
                  </label>
                  <select
                    id="calc-treatment"
                    className="cs_form_field cs_choice cs_gray2_bg cs_radius_5"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                  >
                    {costEstimates.map((t) => (
                      <option key={t.slug} value={t.slug}>{t.title}</option>
                    ))}
                  </select>
                  <p className="cs_calc_field_desc mb-0 cs_mt_10">{treatment.description}</p>
                </div>

                <div className="cs_calc_field cs_mb_30">
                  <label className="cs_fs_16 cs_semibold cs_mb_10 d-block">
                    <i className="fa-solid fa-hotel cs_accent_color"></i> 2. Length Of Stay In India
                  </label>
                  <div className="cs_calc_pill_group">
                    {stayOptions.map((n) => (
                      <button
                        type="button"
                        key={n}
                        className={`cs_calc_pill ${nights === n ? 'active' : ''}`}
                        onClick={() => setNights(n)}
                      >
                        {n} nights
                      </button>
                    ))}
                  </div>
                </div>

                <div className="cs_calc_field">
                  <label className="cs_fs_16 cs_semibold cs_mb_10 d-block">
                    <i className="fa-solid fa-user-group cs_accent_color"></i> 3. Accompanying Travelers
                  </label>
                  <div className="cs_calc_pill_group">
                    {[0, 1, 2].map((n) => (
                      <button
                        type="button"
                        key={n}
                        className={`cs_calc_pill ${companions === n ? 'active' : ''}`}
                        onClick={() => setCompanions(n)}
                      >
                        {n === 0 ? 'Just Me' : `+${n} Companion${n > 1 ? 's' : ''}`}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Result Summary */}
            <div className="col-lg-5">
              <div className="cs_calc_result cs_accent_bg cs_white_color cs_radius_20">
                <span className="cs_calc_result_label">Estimated Total Trip Cost</span>
                <span className="cs_calc_result_value">{formatUSD(breakdown.total)}</span>
                <p className="cs_calc_result_sub mb-0">for {treatment.title}, {nights} nights, {travelers} traveler{travelers > 1 ? 's' : ''}</p>

                <ul className="cs_calc_result_list cs_mp_0">
                  <li><span>Treatment (India)</span><span>{formatUSD(breakdown.treatmentCost)}</span></li>
                  <li><span>Hotel ({nights} nights)</span><span>{formatUSD(breakdown.hotel)}</span></li>
                  <li><span>Food &amp; Local Transport</span><span>{formatUSD(breakdown.foodTransport)}</span></li>
                  <li><span>Flights ({travelers} traveler{travelers > 1 ? 's' : ''})</span><span>{formatUSD(breakdown.flights)}</span></li>
                  <li><span>Visa Fees</span><span>{formatUSD(breakdown.visa)}</span></li>
                </ul>

                <div className="cs_calc_result_savings">
                  <span>vs. same trip from a USA hospital (~{formatUSD(breakdown.usaLow)})</span>
                  <strong>Save up to {breakdown.savings}%</strong>
                </div>

                <Link to="/appointment" className="cs_btn_style_1 cs_white_bg cs_primary_color cs_semibold cs_radius_5">
                  <span>Get My Personalized Quote</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="cs_cost_breakdown_disclaimer cs_mt_30">
            <p>
              <i className="fa-solid fa-circle-info"></i>
              The treatment figure is Medicure Trip's starting package price in India — your final cost depends on diagnosis, hospital and treatment complexity.
            </p>
            <p>
              <i className="fa-solid fa-circle-info"></i>
              Hotel, food, flight and visa numbers are planning estimates only; actual prices shift with season, city and personal choices.
            </p>
            <p>
              <i className="fa-solid fa-circle-info"></i>
              For a written, itemized quote against your own reports, our coordinators are one message away — free of charge.
            </p>
          </div>
        </div>
      </section>

      {/* How the estimate works — SEO body copy */}
      <section>
        <div className="container">
          <div className="row cs_gap_y_30 align-items-center">
            <div className="col-lg-5">
              <div className="cs_radius_20 position-relative">
                <img src="/images/Quote 1061x647.jpg.jpeg" alt="India Treatment Cost Quote" />
              </div>
            </div>
            <div className="col-lg-7">
              <h2 className="cs_fs_28 cs_semibold cs_mb_16">How This India Treatment Cost Estimate Is Built</h2>
              <p className="cs_secondary_color">
                Most medical tourism quotes only mention the hospital bill, which leaves patients guessing at everything else. Our calculator adds four more real costs on top of the procedure price: a hotel stay sized to your recovery timeline, daily food and local transport for every traveler in your group, round-trip flights, and the government visa fee. The result is a single number that reflects what a trip to one of our partner hospitals in India is likely to cost from departure to return — not just the surgery.
              </p>
              <p className="cs_secondary_color mb-0">
                Every treatment listed pulls its India price directly from Medicure Trip's own partner-hospital package rates, shown next to typical USA pricing for the same procedure so you can see the difference in context. It's a starting point for budgeting your trip — your coordinator will confirm exact numbers once your diagnosis and hospital are finalized.
              </p>
            </div>
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
                  <h2 className="cs_cta_title cs_fs_40 cs_semibold cs_mb_10">Ready For A Real Quote, Not Just An Estimate?</h2>
                  <p className="cs_cta_subtitle cs_mb_30">Send your medical reports and our coordinators will get back to you with an itemized treatment and travel quote built around your actual case.</p>
                  <Link to="/contact-us" aria-label="Contact Us" className="cs_btn_style_1 cs_danger_bg cs_white_color cs_semibold cs_radius_5">
                    <img src="/assets/img/icons/emain.svg" alt="Email icon" />
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cs_cta_icon_panel cs_radius_20 position-relative">
                  <i className="fa-solid fa-file-invoice-dollar"></i>
                  <span className="cs_cta_icon_panel_shape cs_cta_icon_panel_shape_1"></span>
                  <span className="cs_cta_icon_panel_shape cs_cta_icon_panel_shape_2"></span>
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

export default CostCalculator;

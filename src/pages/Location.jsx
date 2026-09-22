import Link from '../components/TrackedLink';
const openingHours = [
  { day: 'Monday – Friday', time: '8:00 AM – 8:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 5:00 PM' },
  { day: 'Sunday', time: '10:00 AM – 2:00 PM (Emergency Only)' },
  { day: 'Public Holidays', time: '10:00 AM – 1:00 PM (Emergency Only)' },
];

const landmarks = [
  { name: 'Central Park', distance: '0.3 miles', icon: 'fa-solid fa-tree' },
  { name: 'Metro Station – Health District', distance: '0.2 miles', icon: 'fa-solid fa-train-subway' },
  { name: 'City Mall', distance: '0.5 miles', icon: 'fa-solid fa-bag-shopping' },
  { name: 'International Airport', distance: '12 miles', icon: 'fa-solid fa-plane' },
];

const Location = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" style={{ backgroundImage: "url('/assets/img/page_header_bg.webp')" }}>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Our Location</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Location</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="cs_location_map_section pb-0">
        <div className="container">
          <div className="cs_location_map cs_radius_20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3082.0!2d-76.6122!3d39.2904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDE3JzI1LjQiTiA3NsKwMzYnNDQuMCJX!5e0!3m2!1sen!2sus!4v1700000000000"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="Hospital location map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact & Hours */}
      <section className="cs_location_info_section">
        <div className="container">
          <div className="row cs_gap_y_40">
            {/* Address & Contact */}
            <div className="col-lg-6">
              <div className="cs_section_heading_style_1 cs_mb_30">
                <h2 className="cs_section_title cs_fs_40 cs_semibold cs_mb_6">Hospital Address & Contact</h2>
              </div>
              <div className="cs_location_contact cs_white_bg cs_radius_20 cs_p_40">
                <div className="cs_location_contact_item cs_mb_24">
                  <div className="cs_location_icon cs_accent_bg cs_white_color cs_center cs_radius_10">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <h4 className="cs_fs_18 cs_semibold cs_mb_4">Address</h4>
                    <p className="mb-0">58 Blue Spruce Lane, Baltimore, MD 2321, United States</p>
                  </div>
                </div>
                <div className="cs_location_contact_item cs_mb_24">
                  <div className="cs_location_icon cs_accent_bg cs_white_color cs_center cs_radius_10">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <h4 className="cs_fs_18 cs_semibold cs_mb_4">Phone</h4>
                    <a href="tel:9958192249" className="mb-0">9958192249</a>
                  </div>
                </div>
                <div className="cs_location_contact_item">
                  <div className="cs_location_icon cs_accent_bg cs_white_color cs_center cs_radius_10">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="cs_fs_18 cs_semibold cs_mb_4">Email</h4>
                    <a href="mailto:shivammehra20244@gmail.com" className="mb-0">shivammehra20244@gmail.com</a>
                  </div>
                </div>
              </div>

              {/* Directions */}
              <div className="cs_location_directions cs_white_bg cs_radius_20 cs_p_40 cs_mt_30">
                <h3 className="cs_fs_24 cs_semibold cs_mb_16">Getting Here</h3>
                <ul className="cs_directions_list cs_mp_0">
                  <li><i className="fa-solid fa-car cs_accent_color cs_me_8"></i> <strong>By Car:</strong> Take Exit 12B from I-95 North. Turn right onto Blue Spruce Lane. Free parking available in the main garage.</li>
                  <li><i className="fa-solid fa-train-subway cs_accent_color cs_me_8"></i> <strong>By Metro:</strong> Exit at Health District Station (Blue Line). 3-minute walk east on Medical Center Drive.</li>
                  <li><i className="fa-solid fa-bus cs_accent_color cs_me_8"></i> <strong>By Bus:</strong> Routes 15, 27, and 42 stop at Hospital Gate. Frequency: every 10 minutes during peak hours.</li>
                  <li><i className="fa-solid fa-taxi cs_accent_color cs_me_8"></i> <strong>By Taxi/Rideshare:</strong> Dedicated drop-off zone at the main entrance. Rideshare pickup at Gate B.</li>
                </ul>
              </div>
            </div>

            {/* Opening Hours & Landmarks */}
            <div className="col-lg-6">
              <div className="cs_location_hours cs_white_bg cs_radius_20 cs_p_40 cs_mb_30">
                <h3 className="cs_fs_24 cs_semibold cs_mb_20">Opening Hours</h3>
                <ul className="cs_hours_list cs_mp_0">
                  {openingHours.map((item, i) => (
                    <li key={i} className="cs_mb_12">
                      <span className="cs_hours_day cs_semibold">{item.day}</span>
                      <span className="cs_hours_time">{item.time}</span>
                    </li>
                  ))}
                </ul>
                <div className="cs_emergency_note cs_accent_bg_light cs_radius_10 cs_p_16 cs_mt_16">
                  <i className="fa-solid fa-circle-info cs_accent_color cs_me_8"></i>
                  <span className="cs_fs_14">Emergency Department is open 24/7, including holidays.</span>
                </div>
              </div>

              <div className="cs_location_landmarks cs_white_bg cs_radius_20 cs_p_40">
                <h3 className="cs_fs_24 cs_semibold cs_mb_20">Nearby Landmarks</h3>
                <ul className="cs_landmarks_list cs_mp_0">
                  {landmarks.map((lm, i) => (
                    <li key={i} className="cs_landmark_item cs_mb_16">
                      <div className="cs_landmark_icon cs_accent_bg_light cs_center cs_radius_50">
                        <i className={`${lm.icon} cs_accent_color`}></i>
                      </div>
                      <div className="cs_landmark_info">
                        <span className="cs_landmark_name cs_semibold">{lm.name}</span>
                        <span className="cs_landmark_distance">{lm.distance}</span>
                      </div>
                    </li>
                  ))}
                </ul>
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

export default Location;

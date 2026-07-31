import { Link } from 'react-router-dom';

const eventDetail = {
  img: '/assets/img/event_img_1.webp',
  date: 'March 15, 2026',
  time: '09:00 AM - 04:00 PM',
  title: 'Annual Health Awareness Camp',
  location: 'Hospil Main Campus, Baltimore, MD 2321',
  organizer: 'Hospil Community Health Department',
};

const relatedEvents = [
  {
    id: 1,
    img: '/assets/img/event_img_2.webp',
    date: 'April 02, 2026',
    title: 'Cardiology Open House',
    location: 'Cardiac Wing, Level 3',
  },
  {
    id: 2,
    img: '/assets/img/event_img_3.webp',
    date: 'April 18, 2026',
    title: 'Maternity & Parenting Workshop',
    location: 'Hospil Auditorium',
  },
  {
    id: 3,
    img: '/assets/img/event_img_4.webp',
    date: 'May 05, 2026',
    title: 'Diabetes Prevention Seminar',
    location: 'Community Hall, Ground Floor',
  },
];

const EventDetails = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" style={{ backgroundImage: "url('/assets/img/page_header_bg.webp')" }}>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Event Details</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/event.html">Events</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Event Details</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="cs_event_details_section">
        <div className="container">
          <div className="row cs_gap_y_40">
            {/* Main Content */}
            <div className="col-lg-8">
              <article className="cs_event_details">
                <div className="cs_event_details_thumb cs_radius_20 cs_mb_30">
                  <img src={eventDetail.img} alt={eventDetail.title} />
                </div>

                <h2 className="cs_event_details_title cs_fs_36 cs_semibold cs_mb_16">{eventDetail.title}</h2>

                <div className="cs_event_details_meta cs_mb_24">
                  <span className="cs_event_meta_item">
                    <i className="fa-regular fa-calendar cs_accent_color"></i>
                    <span>{eventDetail.date}</span>
                  </span>
                  <span className="cs_event_meta_item">
                    <i className="fa-regular fa-clock cs_accent_color"></i>
                    <span>{eventDetail.time}</span>
                  </span>
                  <span className="cs_event_meta_item">
                    <i className="fa-solid fa-location-dot cs_accent_color"></i>
                    <span>{eventDetail.location}</span>
                  </span>
                </div>

                <div className="cs_event_details_content">
                  <p className="cs_mb_16">The Annual Health Awareness Camp is one of our flagship community outreach programs designed to bring preventive healthcare directly to the people. This comprehensive, full-day event offers a wide range of free health screenings, interactive sessions, and educational workshops aimed at empowering individuals to take charge of their well-being.</p>

                  <p className="cs_mb_16">Our team of specialists from Cardiology, Neurology, Orthopedics, Endocrinology, and General Medicine will be available throughout the day to conduct screenings, answer questions, and provide personalized health recommendations. Whether you're looking to get a routine check-up or have specific health concerns, this event is the perfect opportunity.</p>

                  <h3 className="cs_fs_28 cs_semibold cs_mb_12">What to Expect</h3>
                  <ul className="cs_blog_check_list cs_mp_0 cs_mb_30">
                    <li>
                      <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span className="cs_fs_16 cs_secondary_color">Free blood pressure, blood sugar, and cholesterol screenings</span>
                    </li>
                    <li>
                      <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span className="cs_fs_16 cs_secondary_color">BMI assessment and body composition analysis</span>
                    </li>
                    <li>
                      <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span className="cs_fs_16 cs_secondary_color">One-on-one consultations with board-certified specialists</span>
                    </li>
                    <li>
                      <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span className="cs_fs_16 cs_secondary_color">Educational workshops on nutrition, fitness, and stress management</span>
                    </li>
                    <li>
                      <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span className="cs_fs_16 cs_secondary_color">Free eye and dental screening stations</span>
                    </li>
                    <li>
                      <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span className="cs_fs_16 cs_secondary_color">Health kits and informative brochures for all attendees</span>
                    </li>
                  </ul>

                  <h3 className="cs_fs_28 cs_semibold cs_mb_12">Who Should Attend?</h3>
                  <p className="cs_mb_16">This event is open to everyone — individuals of all ages, families, and caregivers. Whether you're proactively managing your health or have existing conditions that need monitoring, the Annual Health Awareness Camp offers something valuable for everyone. We especially encourage seniors and those without regular access to healthcare to attend.</p>

                  <div className="cs_event_details_quote cs_mb_30">
                    <blockquote>&ldquo;Prevention is always better than cure. Our annual health camp is our way of giving back to the community by making quality healthcare accessible to all.&rdquo;</blockquote>
                    <small>- Dr. Sarah Mitchell, Chief Medical Officer</small>
                    <span className="cs_blog_quote_icon">
                      <img src="/assets/img/icons/quote.svg" alt="Quote icon" />
                    </span>
                  </div>

                  <h3 className="cs_fs_28 cs_semibold cs_mb_12">How to Register</h3>
                  <p className="cs_mb_16">Registration is free and open to all. You can register online through our website or walk in on the day of the event. Early registration is recommended to secure your preferred time slot for specialist consultations. For group registrations of 10 or more, please contact our community health coordinator.</p>

                  <p className="cs_mb_24">For more information, please call our events hotline or email us at shivammehra20244@gmail.com. We look forward to seeing you there!</p>
                </div>

                {/* Share */}
                <div className="cs_event_share cs_mb_48 cs_mb_lg_30">
                  <span className="cs_event_share_label cs_fs_16 cs_primary_color cs_semibold">Share This Event:</span>
                  <div className="cs_event_share_links">
                    <a href="#" aria-label="Share on Facebook" className="cs_center cs_radius_50"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" aria-label="Share on Twitter" className="cs_center cs_radius_50"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#" aria-label="Share on LinkedIn" className="cs_center cs_radius_50"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="#" aria-label="Share on WhatsApp" className="cs_center cs_radius_50"><i className="fa-brands fa-whatsapp"></i></a>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <aside className="cs_sidebar_style_1">
                {/* Event Info */}
                <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_mb_16">Event Info</h3>
                  <ul className="cs_event_info_list cs_mp_0">
                    <li className="cs_mb_14">
                      <span className="cs_event_info_label cs_fs_14 cs_secondary_color"><i className="fa-regular fa-calendar cs_accent_color cs_me_8"></i> Date</span>
                      <span className="cs_event_info_value cs_fs_16 cs_semibold">{eventDetail.date}</span>
                    </li>
                    <li className="cs_mb_14">
                      <span className="cs_event_info_label cs_fs_14 cs_secondary_color"><i className="fa-regular fa-clock cs_accent_color cs_me_8"></i> Time</span>
                      <span className="cs_event_info_value cs_fs_16 cs_semibold">{eventDetail.time}</span>
                    </li>
                    <li className="cs_mb_14">
                      <span className="cs_event_info_label cs_fs_14 cs_secondary_color"><i className="fa-solid fa-location-dot cs_accent_color cs_me_8"></i> Location</span>
                      <span className="cs_event_info_value cs_fs_16 cs_semibold">{eventDetail.location}</span>
                    </li>
                    <li className="cs_mb_14">
                      <span className="cs_event_info_label cs_fs_14 cs_secondary_color"><i className="fa-solid fa-user cs_accent_color cs_me_8"></i> Organizer</span>
                      <span className="cs_event_info_value cs_fs_16 cs_semibold">{eventDetail.organizer}</span>
                    </li>
                    <li>
                      <span className="cs_event_info_label cs_fs_14 cs_secondary_color"><i className="fa-solid fa-tag cs_accent_color cs_me_8"></i> Admission</span>
                      <span className="cs_event_info_value cs_fs_16 cs_semibold">Free Entry</span>
                    </li>
                  </ul>
                </div>

                {/* Registration CTA */}
                <div className="cs_sidebar_widget cs_promo_widget cs_radius_20 cs_bg_filed text-center" style={{ backgroundImage: "url('/assets/img/team_img_21.webp')" }}>
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_white_color cs_mb_24">Register Now</h3>
                  <p className="cs_promo_desc cs_white_color cs_mb_12">Secure your spot at the Annual Health Awareness Camp. Free for all attendees.</p>
                  <Link to="/appointment.html" aria-label="Register for event" className="cs_btn_style_1 cs_white_color cs_semibold cs_radius_5">
                    <img src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                    <span>Register Free</span>
                  </Link>
                </div>

                {/* Share */}
                <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_mb_12">Share Event</h3>
                  <div className="cs_event_share_links cs_mt_12">
                    <a href="#" aria-label="Share on Facebook" className="cs_center cs_radius_50"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" aria-label="Share on Twitter" className="cs_center cs_radius_50"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#" aria-label="Share on LinkedIn" className="cs_center cs_radius_50"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="#" aria-label="Share on WhatsApp" className="cs_center cs_radius_50"><i className="fa-brands fa-whatsapp"></i></a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      <section className="cs_related_events_section">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column mx-auto text-center cs_mb_48 cs_mb_lg_40">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17">// RELATED EVENTS</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Upcoming Events You Might Be Interested In</h2>
          </div>
          <div className="row cs_gap_y_24">
            {relatedEvents.map((event) => (
              <div key={event.id} className="col-lg-4 col-md-6">
                <article className="cs_event_card cs_radius_20 cs_gray2_bg">
                  <Link to="/event-details.html" aria-label="View event details" className="cs_event_img cs_radius_20 cs_mb_20">
                    <img src={event.img} alt={event.title} />
                    <span className="cs_event_date_badge cs_accent_bg cs_radius_10 cs_center">
                      <span className="cs_event_date_day cs_fs_28 cs_semibold cs_white_color cs_primary_font">{event.date.split(' ')[1].replace(',', '')}</span>
                      <span className="cs_white_color cs_fs_14">{event.date.split(' ')[0]}</span>
                    </span>
                  </Link>
                  <div className="cs_event_body cs_px_24 cs_pb_30">
                    <div className="cs_event_meta cs_mb_14">
                      <span className="cs_event_meta_item">
                        <i className="fa-regular fa-calendar cs_accent_color"></i>
                        <span>{event.date}</span>
                      </span>
                      <span className="cs_event_meta_item">
                        <i className="fa-solid fa-location-dot cs_accent_color"></i>
                        <span>{event.location}</span>
                      </span>
                    </div>
                    <h3 className="cs_event_title cs_fs_22 cs_medium cs_mb_12">
                      <Link to="/event-details.html" aria-label="View event details">{event.title}</Link>
                    </h3>
                    <Link to="/event-details.html" className="cs_read_more cs_accent_color cs_fs_16 cs_semibold">
                      Read More <img src="/assets/img/icons/arrow-right.svg" alt="Arrow" className="cs_read_more_icon" />
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <button type="button" id="scrollToTopBtn" className="cs_scrollup_btn" onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </main>
  );
};

export default EventDetails;

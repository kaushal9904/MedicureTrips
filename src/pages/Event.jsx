import { Link } from 'react-router-dom';

const events = [
  {
    id: 1,
    img: '/assets/img/event_img_1.webp',
    date: 'March 15, 2026',
    time: '09:00 AM - 04:00 PM',
    title: 'Annual Health Awareness Camp',
    location: 'Hospil Main Campus, Baltimore',
    description: 'Join us for a full-day health screening event featuring free blood pressure checks, blood sugar tests, BMI assessments, and consultations with our specialists across multiple departments.',
  },
  {
    id: 2,
    img: '/assets/img/event_img_2.webp',
    date: 'April 02, 2026',
    time: '10:00 AM - 02:00 PM',
    title: 'Cardiology Open House',
    location: 'Cardiac Wing, Level 3',
    description: 'Explore our state-of-the-art cardiac catheterization lab and meet our cardiology team. Learn about preventive heart care, the latest in minimally invasive procedures, and schedule a free ECG screening.',
  },
  {
    id: 3,
    img: '/assets/img/event_img_3.webp',
    date: 'April 18, 2026',
    time: '11:00 AM - 05:00 PM',
    title: 'Maternity & Parenting Workshop',
    location: 'Hospil Auditorium',
    description: 'A hands-on workshop for expecting and new parents covering prenatal nutrition, labor preparation, newborn care basics, and breastfeeding techniques led by our obstetricians and pediatric nurses.',
  },
  {
    id: 4,
    img: '/assets/img/event_img_4.webp',
    date: 'May 05, 2026',
    time: '08:00 AM - 12:00 PM',
    title: 'Diabetes Prevention Seminar',
    location: 'Community Hall, Ground Floor',
    description: 'Understand the risk factors for Type 2 diabetes, learn about lifestyle modifications, and get your HbA1c tested for free. Our endocrinologists will share practical tips for managing blood sugar levels.',
  },
  {
    id: 5,
    img: '/assets/img/event_img_5.webp',
    date: 'May 20, 2026',
    time: '09:00 AM - 03:00 PM',
    title: 'Orthopedic Wellness Day',
    location: 'Rehabilitation Center, Level 2',
    description: 'Get free bone density scans, posture assessments, and consultations with our orthopedic surgeons. Learn about joint protection, exercise routines for healthy bones, and treatment options for arthritis.',
  },
  {
    id: 6,
    img: '/assets/img/event_img_6.webp',
    date: 'June 10, 2026',
    time: '10:00 AM - 04:00 PM',
    title: 'Mental Health Awareness Week',
    location: 'Hospil Wellness Center',
    description: 'A week-long series of events focused on mental well-being featuring stress management workshops, mindfulness sessions, expert panel discussions, and free counseling consultations for all attendees.',
  },
];

const Event = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" style={{ backgroundImage: "url('/assets/img/page_header_bg.webp')" }}>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Our Events</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Events</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="cs_events_section">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column mx-auto text-center cs_mb_48 cs_mb_lg_40">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17">// UPCOMING EVENTS</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Stay Informed and Involved — Join Our Upcoming Health Events, Workshops, and Community Programs</h2>
          </div>
          <div className="row cs_gap_y_24">
            {events.map((event) => (
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
                    <p className="cs_event_desc cs_secondary_color cs_mb_20">{event.description}</p>
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

      {/* CTA Section */}
      <section>
        <div className="container">
          <div className="cs_cta_style_1 cs_radius_20 cs_bg_filed position-relative" style={{ backgroundImage: "url('/assets/img/cta_bg_2.webp')" }}>
            <div className="row cs_gap_y_30">
              <div className="col-lg-6">
                <div className="cs_cta_text">
                  <h2 className="cs_cta_title cs_fs_40 cs_semibold cs_mb_10">Don't Miss Our Next Event</h2>
                  <p className="cs_cta_subtitle cs_mb_30">Subscribe to our newsletter and get notified about upcoming health events, workshops, and community programs.</p>
                  <Link to="/contact-us.html" aria-label="Contact Us" className="cs_btn_style_1 cs_danger_bg cs_white_color cs_semibold cs_radius_5">
                    <img src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                    <span>Get In Touch</span>
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

export default Event;

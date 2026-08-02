import { Link } from 'react-router-dom';
import { useState } from 'react';
import { submitToWeb3Forms } from '../lib/web3forms';

const testimonials = [
  {
    id: 1,
    name: 'Gloria J Martin',
    designation: 'Patient',
    img: '/assets/img/avatar_1.webp',
    rating: 5,
    text: 'Medicure Trip exceeded my expectations with their seamless medical services. The attention to detail and personalized care made my journey to wellness stress-free and comfortable.',
  },
  {
    id: 2,
    name: 'Joey A Travis',
    designation: 'Customer',
    img: '/assets/img/avatar_2.webp',
    rating: 5,
    text: 'Trusting Medicure Trip for my medical needs was the best decision. They not only provided quality healthcare but also ensured a smooth experience, from treatment to recovery.',
  },
  {
    id: 3,
    name: 'Russell V Flint',
    designation: 'Customer',
    img: '/assets/img/avatar_3.webp',
    rating: 5,
    text: 'Exceptional service! Medicure Trip made navigating international healthcare straightforward. Their dedication to patient satisfaction shines through in every aspect of their services.',
  },
  {
    id: 4,
    name: 'Gretchen P Stanley',
    designation: 'Manager',
    img: '/assets/img/avatar_4.webp',
    rating: 5,
    text: 'Reliable and efficient! Medicure Trip took care of all my medical and travel arrangements seamlessly. I highly recommend their services for anyone seeking top-notch healthcare solutions.',
  },
];

const departments = [
  'Organ Transplant',
  'Cardiology',
  'Neuro Surgery',
  'Spine Surgery',
  'Orthopedic',
  'Urology',
  'ENT',
  'Plastic Surgery',
  'Cancer',
];

const Testimonials = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const visibleTestimonials = testimonials.slice(0, visibleCount);
  const hasMore = visibleCount < testimonials.length;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    department: '',
    rating: 0,
    testimonial: '',
  });

  const [hoverRating, setHoverRating] = useState(0);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingClick = (rating) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const result = await submitToWeb3Forms(e.target, 'Testimonials Page — Share Your Story Form');
      if (result.success) {
        setStatus('success');
        setFormData({ fullName: '', email: '', department: '', rating: 0, testimonial: '' });
      } else {
        setErrorMessage(result.message || '');
        setStatus('error');
      }
    } catch (err) {
      console.error('[web3forms] network/unexpected error:', err);
      setErrorMessage(err?.message || '');
      setStatus('error');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i key={i} className={`fa-${i < count ? 'solid' : 'regular'} fa-star cs_accent_color`}></i>
    ));
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" style={{ backgroundImage: "url('/assets/img/page_header_bg.webp')" }}>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Testimonials</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Testimonials</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="cs_testimonials_section">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column mx-auto text-center cs_mb_48 cs_mb_lg_40">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17">// PATIENT TESTIMONIALS</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Real Stories From Real Patients Who Trust Medicure Trip for Their Healthcare Needs</h2>
          </div>
          <div className="row cs_gap_y_24">
            {visibleTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="col-lg-4 col-md-6">
                <article className="cs_testimonial_card cs_radius_20 cs_gray2_bg cs_px_24 cs_py_30">
                  <div className="cs_testimonial_author cs_mb_16">
                    <img src={testimonial.img} alt={testimonial.name} className="cs_testimonial_avatar cs_radius_50" />
                    <div className="cs_testimonial_author_info">
                      <h3 className="cs_testimonial_name cs_fs_18 cs_semibold cs_mb_2">{testimonial.name}</h3>
                      <p className="cs_testimonial_designation cs_fs_14 cs_secondary_color cs_mb_0">{testimonial.designation}</p>
                    </div>
                  </div>
                  <div className="cs_testimonial_rating cs_mb_12">
                    {renderStars(testimonial.rating)}
                  </div>
                  <blockquote className="cs_testimonial_text cs_secondary_color">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>
                </article>
              </div>
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="cs_center cs_mt_40">
              <button type="button" className="cs_btn_style_2 cs_type_1 cs_primary_color cs_semibold cs_radius_5" onClick={() => setVisibleCount(testimonials.length)}>
                <span>Load More</span>
                <img src="/assets/img/icons/loader-line.svg" alt="Loader icon" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Share Your Story */}
      <section className="cs_share_story_section">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column mx-auto text-center cs_mb_48 cs_mb_lg_40">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17">// SHARE YOUR STORY</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">We'd Love to Hear About Your Experience With Medicure Trip</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="cs_share_story_form cs_gray2_bg cs_radius_20 cs_px_30 cs_py_40">
                <form onSubmit={handleSubmit} className="cs_appointment_form_1 row cs_gap_y_24">
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="testimonial_name">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        id="testimonial_name"
                        className="cs_form_field"
                        placeholder="Enter your full name"
                        autoComplete="off"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="testimonial_email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="testimonial_email"
                        className="cs_form_field"
                        placeholder="Enter your email address"
                        autoComplete="off"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="testimonial_department">Treatment</label>
                      <select
                        className="cs_form_field cs_choice"
                        name="department"
                        id="testimonial_department"
                        value={formData.department}
                        onChange={handleInputChange}
                        required
                      >
                        <option disabled value="">Select treatment</option>
                        {departments.map((dept) => (
                          <option key={dept} value={dept}>{dept}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label>Your Rating</label>
                      <input type="hidden" name="rating" value={formData.rating} />
                      <div className="cs_star_rating_input">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            className="cs_star_btn"
                            onClick={() => handleRatingClick(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                          >
                            <i className={`fa-${(hoverRating || formData.rating) >= star ? 'solid' : 'regular'} fa-star cs_accent_color`}></i>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="testimonial_text">Your Testimonial</label>
                      <textarea
                        name="testimonial"
                        id="testimonial_text"
                        rows="5"
                        className="cs_form_field"
                        placeholder="Share your experience with Medicure Trip..."
                        value={formData.testimonial}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5" disabled={status === 'sending'}>
                      <span>{status === 'sending' ? 'Sending...' : 'Submit Testimonial'}</span>
                      <img src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                    </button>
                    {status === 'success' && <p className="cs_fs_14 mb-0 cs_mt_12" style={{ color: '#1a7f37' }}>Thank you for sharing your story! Your testimonial will be reviewed and published soon.</p>}
                    {status === 'error' && <p className="cs_fs_14 mb-0 cs_mt_12" style={{ color: '#c0392b' }}>{errorMessage || 'Something went wrong. Please try again.'}</p>}
                  </div>
                </form>
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

export default Testimonials;

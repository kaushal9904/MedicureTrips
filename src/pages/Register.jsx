import { Link } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" style={{ backgroundImage: "url('/assets/img/page_header_bg.webp')" }}>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Register</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Register</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Register Form Section */}
      <section className="cs_login_section">
        <div className="container">
          <div className="cs_login_wrapper cs_center_column">
            <div className="cs_login_card cs_white_bg cs_radius_20 cs_p_50">
              {/* Logo */}
              <div className="cs_login_logo cs_mb_30 cs_center_column text-center">
                <Link to="/" aria-label="Go to homepage">
                  <img src="/assets/img/logo.svg" alt="Hospil Logo" className="cs_login_logo_img" />
                </Link>
                <h2 className="cs_fs_28 cs_semibold cs_mt_16 mb-0">Create Account</h2>
                <p className="cs_fs_16 cs_secondary_color cs_mt_8 mb-0">Register to access all features</p>
              </div>

              {/* Form */}
              <form className="cs_login_form" onSubmit={e => e.preventDefault()}>
                <div className="cs_input_wrap cs_gray2_bg cs_radius_5 cs_mb_20">
                  <label htmlFor="reg-name">Full Name</label>
                  <div className="cs_input_icon position-relative">
                    <i className="fa-solid fa-user cs_input_icon_left"></i>
                    <input
                      type="text"
                      name="name"
                      id="reg-name"
                      className="cs_form_field cs_pl_40"
                      placeholder="Enter your full name"
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="cs_input_wrap cs_gray2_bg cs_radius_5 cs_mb_20">
                  <label htmlFor="reg-email">Email Address</label>
                  <div className="cs_input_icon position-relative">
                    <i className="fa-solid fa-envelope cs_input_icon_left"></i>
                    <input
                      type="email"
                      name="email"
                      id="reg-email"
                      className="cs_form_field cs_pl_40"
                      placeholder="Enter your email"
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="cs_input_wrap cs_gray2_bg cs_radius_5 cs_mb_20">
                  <label htmlFor="reg-phone">Phone Number</label>
                  <div className="cs_input_icon position-relative">
                    <i className="fa-solid fa-phone cs_input_icon_left"></i>
                    <input
                      type="tel"
                      name="phone"
                      id="reg-phone"
                      className="cs_form_field cs_pl_40"
                      placeholder="Enter your phone number"
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="cs_input_wrap cs_gray2_bg cs_radius_5 cs_mb_20">
                  <label htmlFor="reg-password">Password</label>
                  <div className="cs_input_icon position-relative">
                    <i className="fa-solid fa-lock cs_input_icon_left"></i>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      id="reg-password"
                      className="cs_form_field cs_pl_40 cs_pr_40"
                      placeholder="Create a password"
                      autoComplete="off"
                    />
                    <button
                      type="button"
                      className="cs_password_toggle position-absolute"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label="Toggle password visibility"
                    >
                      <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </button>
                  </div>
                </div>

                <div className="cs_input_wrap cs_gray2_bg cs_radius_5 cs_mb_20">
                  <label htmlFor="reg-confirm-password">Confirm Password</label>
                  <div className="cs_input_icon position-relative">
                    <i className="fa-solid fa-lock cs_input_icon_left"></i>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      id="reg-confirm-password"
                      className="cs_form_field cs_pl_40 cs_pr_40"
                      placeholder="Confirm your password"
                      autoComplete="off"
                    />
                    <button
                      type="button"
                      className="cs_password_toggle position-absolute"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      aria-label="Toggle confirm password visibility"
                    >
                      <i className={`fa-solid ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </button>
                  </div>
                </div>

                <div className="cs_form_check cs_mb_30">
                  <input type="checkbox" className="cs_form_check_input" id="agreeTerms" />
                  <label className="cs_form_check_label" htmlFor="agreeTerms">
                    I agree to the <Link to="/term-condition.html" className="cs_accent_color cs_semibold">Terms & Conditions</Link> and <Link to="/privacy-policy.html" className="cs_accent_color cs_semibold">Privacy Policy</Link>
                  </label>
                </div>

                <button type="submit" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5 w-100 cs_mb_20">
                  <span>Create Account</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>

                <p className="cs_login_register text-center mb-0">
                  Already have an account? <Link to="/login.html" className="cs_accent_color cs_semibold">Login</Link>
                </p>
              </form>
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

export default Register;

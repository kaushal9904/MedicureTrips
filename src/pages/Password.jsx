import { Link } from 'react-router-dom';

const Password = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" style={{ backgroundImage: "url('/assets/img/page_header_bg.webp')" }}>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Reset Password</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Reset Password</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Password Reset Section */}
      <section className="cs_login_section">
        <div className="container">
          <div className="cs_login_wrapper cs_center_column">
            <div className="cs_login_card cs_white_bg cs_radius_20 cs_p_50">
              {/* Logo */}
              <div className="cs_login_logo cs_mb_30 cs_center_column text-center">
                <Link to="/" aria-label="Go to homepage">
                  <img src="/assets/img/logo.svg" alt="Hospil Logo" className="cs_login_logo_img" />
                </Link>
                <h2 className="cs_fs_28 cs_semibold cs_mt_16 mb-0">Forgot Password?</h2>
                <p className="cs_fs_16 cs_secondary_color cs_mt_8 mb-0">Enter your email to receive a password reset link</p>
              </div>

              {/* Icon */}
              <div className="cs_password_icon cs_center cs_accent_bg_light cs_radius_50 cs_mb_30" style={{ width: 80, height: 80 }}>
                <i className="fa-solid fa-key cs_accent_color cs_fs_32"></i>
              </div>

              {/* Form */}
              <form className="cs_login_form" onSubmit={e => e.preventDefault()}>
                <div className="cs_input_wrap cs_gray2_bg cs_radius_5 cs_mb_30">
                  <label htmlFor="reset-email">Email Address</label>
                  <div className="cs_input_icon position-relative">
                    <i className="fa-solid fa-envelope cs_input_icon_left"></i>
                    <input
                      type="email"
                      name="email"
                      id="reset-email"
                      className="cs_form_field cs_pl_40"
                      placeholder="Enter your registered email"
                      autoComplete="off"
                    />
                  </div>
                </div>

                <button type="submit" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5 w-100 cs_mb_20">
                  <span>Send Reset Link</span>
                  <i className="fa-solid fa-paper-plane"></i>
                </button>

                <p className="cs_login_register text-center mb-0">
                  <Link to="/login.html" className="cs_accent_color cs_semibold">
                    <i className="fa-solid fa-arrow-left cs_me_6"></i> Back to Login
                  </Link>
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

export default Password;

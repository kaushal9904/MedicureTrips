import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" style={{ backgroundImage: "url('/assets/img/page_header_bg.webp')" }}>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Login</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Login</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Login Form Section */}
      <section className="cs_login_section">
        <div className="container">
          <div className="cs_login_wrapper cs_center_column">
            <div className="cs_login_card cs_white_bg cs_radius_20 cs_p_50">
              {/* Logo */}
              <div className="cs_login_logo cs_mb_30 cs_center_column text-center">
                <Link to="/" aria-label="Go to homepage">
                  <img src="/assets/img/logo.svg" alt="Medicure Trip Logo" className="cs_login_logo_img" />
                </Link>
                <h2 className="cs_fs_28 cs_semibold cs_mt_16 mb-0">Welcome Back</h2>
                <p className="cs_fs_16 cs_secondary_color cs_mt_8 mb-0">Sign in to access your account</p>
              </div>

              {/* Form */}
              <form className="cs_login_form" onSubmit={e => e.preventDefault()}>
                <div className="cs_input_wrap cs_gray2_bg cs_radius_5 cs_mb_20">
                  <label htmlFor="login-email">Email or Username</label>
                  <div className="cs_input_icon position-relative">
                    <i className="fa-solid fa-envelope cs_input_icon_left"></i>
                    <input
                      type="text"
                      name="email"
                      id="login-email"
                      className="cs_form_field cs_pl_40"
                      placeholder="Enter your email or username"
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="cs_input_wrap cs_gray2_bg cs_radius_5 cs_mb_20">
                  <label htmlFor="login-password">Password</label>
                  <div className="cs_input_icon position-relative">
                    <i className="fa-solid fa-lock cs_input_icon_left"></i>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      id="login-password"
                      className="cs_form_field cs_pl_40 cs_pr_40"
                      placeholder="Enter your password"
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

                <div className="cs_login_options cs_mb_30">
                  <div className="cs_form_check">
                    <input type="checkbox" className="cs_form_check_input" id="rememberMe" />
                    <label className="cs_form_check_label" htmlFor="rememberMe">Remember me</label>
                  </div>
                  <Link to="/password.html" className="cs_accent_color cs_semibold cs_fs_14">Forgot Password?</Link>
                </div>

                <button type="submit" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5 w-100 cs_mb_20">
                  <span>Sign In</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>

                <p className="cs_login_register text-center mb-0">
                  Don't have an account? <Link to="/register.html" className="cs_accent_color cs_semibold">Register</Link>
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

export default Login;

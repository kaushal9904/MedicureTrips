import { Link } from 'react-router-dom';
import { useState } from 'react';

const Error404 = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `https://www.google.com/search?q=site:hospil.com+${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" style={{ backgroundImage: "url('/assets/img/page_header_bg.webp')" }}>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Error 404</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">404</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* 404 Section */}
      <section className="cs_error_section">
        <div className="container">
          <div className="cs_error_wrapper cs_center_column text-center">
            {/* 404 Display */}
            <div className="cs_error_number cs_mb_20">
              <span className="cs_error_digit cs_fs_120 cs_bold cs_accent_color">4</span>
              <div className="cs_error_icon cs_center cs_radius_50">
                <img src="/assets/img/hero_img_1.webp" alt="Error illustration" className="cs_error_img" />
              </div>
              <span className="cs_error_digit cs_fs_120 cs_bold cs_accent_color">4</span>
            </div>

            <h2 className="cs_error_title cs_fs_40 cs_semibold cs_mb_12">Page Not Found</h2>
            <p className="cs_error_desc cs_fs_18 cs_secondary_color cs_mb_40">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>

            {/* Search Form */}
            <form className="cs_error_search cs_mb_40" onSubmit={handleSearch}>
              <div className="cs_error_search_wrap cs_gray2_bg cs_radius_50 cs_p_6">
                <div className="cs_error_search_input position-relative">
                  <i className="fa-solid fa-search cs_error_search_icon"></i>
                  <input
                    type="text"
                    className="cs_form_field cs_fs_16"
                    placeholder="Search for pages, doctors, or services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button type="submit" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_50">
                  <span>Search</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </form>

            {/* Go Back Home Button */}
            <Link to="/" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5">
              <i className="fa-solid fa-house cs_me_8"></i>
              <span>Go Back Home</span>
            </Link>
          </div>
        </div>
      </section>

      <button type="button" id="scrollToTopBtn" className="cs_scrollup_btn" onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </main>
  );
};

export default Error404;

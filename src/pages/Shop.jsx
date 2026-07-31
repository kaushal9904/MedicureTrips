import { Link } from 'react-router-dom';
import { useState } from 'react';

const products = [
  { id: 1, name: 'Digital Blood Pressure', price: 39, oldPrice: null, rating: 4, img: '/assets/img/product_img_1.webp' },
  { id: 2, name: 'Pulse Oximeter', price: 29, oldPrice: 39, rating: 5, img: '/assets/img/product_img_2.webp' },
  { id: 3, name: 'Microscope Isolated', price: 55, oldPrice: null, rating: 4, img: '/assets/img/product_img_3.webp' },
  { id: 4, name: 'Diabetes Lancing Device', price: 19, oldPrice: 25, rating: 5, img: '/assets/img/product_img_4.webp' },
  { id: 5, name: 'Blue Asthma Inhaler', price: 45, oldPrice: null, rating: 4, img: '/assets/img/product_img_5.webp' },
  { id: 6, name: 'Eye Drops Bottle', price: 12, oldPrice: null, rating: 5, img: '/assets/img/product_img_6.webp' },
  { id: 7, name: 'Stethoscope', price: 69, oldPrice: 89, rating: 5, img: '/assets/img/product_img_7.webp' },
  { id: 8, name: 'Infrared Temp Scanner', price: 35, oldPrice: null, rating: 4, img: '/assets/img/product_img_8.webp' },
  { id: 9, name: 'Adjustable Hospital Bed', price: 899, oldPrice: 1099, rating: 5, img: '/assets/img/product_img_9.webp' },
];

const itemsPerPage = 9;
const totalPages = 3;

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('default');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" style={{ backgroundImage: "url('/assets/img/page_header_bg.webp')" }}>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Medical Shop</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Shop</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="cs_shop_section">
        <div className="container">
          {/* Shop Toolbar */}
          <div className="cs_shop_toolbar cs_mb_48 cs_mb_lg_30">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="cs_shop_results cs_fs_16 mb-0">Showing 1–{itemsPerPage} of {products.length} results</p>
              </div>
              <div className="col-md-6">
                <div className="cs_shop_sorting text-md-end">
                  <label className="cs_fs_16 cs_semibold cs_me_8">Sort by:</label>
                  <select
                    className="cs_form_field cs_sort_select"
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                  >
                    <option value="default">Default sorting</option>
                    <option value="price-low">Sort by price: low to high</option>
                    <option value="price-high">Sort by price: high to low</option>
                    <option value="rating">Sort by rating</option>
                    <option value="name">Sort by name</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="row cs_gap_y_24">
            {products.map((product) => (
              <div key={product.id} className="col-xl-4 col-md-6">
                <div className="cs_product_card cs_white_bg cs_radius_20">
                  <Link to="/shop-details.html" className="cs_product_img cs_radius_15 cs_mb_20">
                    <img src={product.img} alt={product.name} />
                  </Link>
                  <div className="cs_product_info">
                    <h3 className="cs_product_title cs_fs_20 cs_medium cs_mb_8">
                      <Link to="/shop-details.html">{product.name}</Link>
                    </h3>
                    <div className="cs_product_rating cs_mb_12">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fa-solid fa-star${i < product.rating ? ' cs_accent_color' : ' cs_gray_color'}`}
                        ></i>
                      ))}
                    </div>
                    <div className="cs_product_price cs_mb_16">
                      <span className="cs_price_current cs_fs_24 cs_semibold cs_primary_color">${product.price}</span>
                      {product.oldPrice && (
                        <span className="cs_price_old cs_fs_16 cs_text_decoration cs_ms_8">${product.oldPrice}</span>
                      )}
                    </div>
                    <Link to="/cart.html" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5">
                      <i className="fa-solid fa-cart-shopping"></i>
                      <span>Add to Cart</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <nav aria-label="Shop pagination" className="cs_mt_48">
            <ul className="cs_pagination cs_mp_0 justify-content-center">
              <li>
                <a
                  href="#"
                  aria-label="Previous page"
                  onClick={e => { e.preventDefault(); if (currentPage > 1) { setCurrentPage(currentPage - 1); scrollToTop(); } }}
                  style={{ opacity: currentPage === 1 ? 0.5 : 1 }}
                >
                  <img src="/assets/img/icons/arrow-right.svg" alt="Previous" style={{ transform: 'rotate(180deg)' }} />
                </a>
              </li>
              {[1, 2, 3].map(page => (
                <li key={page} className={currentPage === page ? 'active' : ''}>
                  <a
                    href="#"
                    onClick={e => { e.preventDefault(); setCurrentPage(page); scrollToTop(); }}
                  >
                    {String(page).padStart(2, '0')}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  aria-label="Next page"
                  onClick={e => { e.preventDefault(); if (currentPage < totalPages) { setCurrentPage(currentPage + 1); scrollToTop(); } }}
                  style={{ opacity: currentPage === totalPages ? 0.5 : 1 }}
                >
                  <img src="/assets/img/icons/arrow-right.svg" alt="Next" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <button type="button" id="scrollToTopBtn" className="cs_scrollup_btn" onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </main>
  );
};

export default Shop;

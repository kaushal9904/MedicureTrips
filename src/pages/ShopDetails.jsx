import Link from '../components/TrackedLink';
import { useState } from 'react';

const relatedProducts = [
  { id: 1, name: 'Digital Blood Pressure', price: 39, rating: 4, img: '/assets/img/product_img_1.webp' },
  { id: 3, name: 'Microscope Isolated', price: 55, rating: 4, img: '/assets/img/product_img_3.webp' },
  { id: 4, name: 'Diabetes Lancing Device', price: 19, oldPrice: 25, rating: 5, img: '/assets/img/product_img_4.webp' },
];

const reviews = [
  { name: 'Sarah Mitchell', date: 'March 15, 2026', avatar: '/assets/img/avatar_1.webp', rating: 5, comment: 'Excellent pulse oximeter! Very accurate readings and easy to use. The display is clear and the battery lasts a long time.' },
  { name: 'James Anderson', date: 'March 10, 2026', avatar: '/assets/img/avatar_2.webp', rating: 5, comment: 'I bought this for my mother who has COPD. It works perfectly and gives consistent readings. Highly recommended!' },
  { name: 'Emily Carter', date: 'February 28, 2026', avatar: '/assets/img/avatar_3.webp', rating: 4, comment: 'Good quality device. The only reason I gave 4 stars is because the carrying case could be better. Otherwise, it works great.' },
];

const ShopDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specs');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" style={{ backgroundImage: "url('/assets/img/page_header_bg.webp')" }}>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Product Details</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/shop">Shop</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Pulse Oximeter</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="cs_product_details_section">
        <div className="container">
          <div className="row cs_gap_y_40">
            {/* Product Gallery */}
            <div className="col-lg-6">
              <div className="cs_product_gallery">
                <div className="cs_product_gallery_main cs_radius_20 cs_mb_16">
                  <img src="/assets/img/product_details_img_1.webp" alt="Pulse Oximeter" className="cs_radius_20" />
                </div>
                <div className="cs_product_gallery_thumbs">
                  <div className="cs_gallery_thumb active cs_radius_10">
                    <img src="/assets/img/product_details_img_1.webp" alt="Pulse Oximeter thumb 1" />
                  </div>
                  <div className="cs_gallery_thumb cs_radius_10">
                    <img src="/assets/img/product_img_2.webp" alt="Pulse Oximeter thumb 2" />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Summary */}
            <div className="col-lg-6">
              <div className="cs_product_summary">
                <h2 className="cs_product_name cs_fs_40 cs_semibold cs_mb_12">Pulse Oximeter</h2>
                <div className="cs_product_rating cs_mb_16">
                  <div className="cs_rating" data-rating="5"><div className="cs_rating_percentage"></div></div>
                  <span className="cs_rating_text cs_fs_14">(24 customer reviews)</span>
                </div>
                <div className="cs_product_price cs_mb_24">
                  <span className="cs_price_current cs_fs_40 cs_semibold cs_primary_color">$39.00</span>
                  <span className="cs_price_old cs_fs_20 cs_text_decoration cs_ms_12">$50.00</span>
                </div>
                <p className="cs_product_desc cs_mb_24">Professional-grade pulse oximeter for accurate blood oxygen saturation and heart rate monitoring. Compact, lightweight design with clear OLED display. Ideal for home use and medical professionals.</p>

                {/* Features */}
                <ul className="cs_product_features cs_mp_0 cs_mb_32">
                  <li><img src="/assets/img/icons/check-double.svg" alt="Check" /><span>Medical-grade accuracy ±2%</span></li>
                  <li><img src="/assets/img/icons/check-double.svg" alt="Check" /><span>OLED color display</span></li>
                  <li><img src="/assets/img/icons/check-double.svg" alt="Check" /><span>Battery life: 30+ hours</span></li>
                  <li><img src="/assets/img/icons/check-double.svg" alt="Check" /><span>Auto power off feature</span></li>
                </ul>

                {/* Quantity */}
                <div className="cs_product_quantity cs_mb_32">
                  <label className="cs_fs_16 cs_semibold cs_me_16">Quantity:</label>
                  <div className="cs_quantity_selector">
                    <button
                      type="button"
                      className="cs_qty_btn"
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      aria-label="Decrease quantity"
                    >
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <span className="cs_qty_value">{quantity}</span>
                    <button
                      type="button"
                      className="cs_qty_btn"
                      onClick={() => setQuantity(q => q + 1)}
                      aria-label="Increase quantity"
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                </div>

                {/* Add to Cart */}
                <div className="cs_product_actions cs_mb_32">
                  <Link to="/cart" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span>Add to Cart</span>
                  </Link>
                </div>

                {/* Assurance Badges */}
                <div className="cs_product_assurance cs_mb_24">
                  <div className="cs_assurance_item">
                    <i className="fa-solid fa-truck"></i>
                    <span>Free Shipping</span>
                  </div>
                  <div className="cs_assurance_item">
                    <i className="fa-solid fa-shield-halved"></i>
                    <span>2 Year Warranty</span>
                  </div>
                  <div className="cs_assurance_item">
                    <i className="fa-solid fa-rotate-left"></i>
                    <span>30-Day Returns</span>
                  </div>
                </div>

                <div className="cs_product_meta">
                  <p><strong>SKU:</strong> MED-PO-001</p>
                  <p><strong>Category:</strong> Diagnostic Equipment</p>
                  <p><strong>Tags:</strong> oximeter, oxygen, health monitor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="cs_product_tabs cs_mt_80">
            <ul className="cs_tab_nav cs_mp_0 cs_mb_32">
              <li className={activeTab === 'specs' ? 'active' : ''}>
                <button type="button" onClick={() => setActiveTab('specs')}>Technical Specifications</button>
              </li>
              <li className={activeTab === 'shipping' ? 'active' : ''}>
                <button type="button" onClick={() => setActiveTab('shipping')}>Shipping & Returns</button>
              </li>
              <li className={activeTab === 'reviews' ? 'active' : ''}>
                <button type="button" onClick={() => setActiveTab('reviews')}>Customer Reviews</button>
              </li>
            </ul>

            <div className="cs_tab_content">
              {/* Technical Specifications Tab */}
              {activeTab === 'specs' && (
                <div className="cs_tab_pane active">
                  <table className="cs_product_specs_table">
                    <tbody>
                      <tr>
                        <th>Display Type</th>
                        <td>OLED Color Display</td>
                      </tr>
                      <tr>
                        <th>SpO2 Range</th>
                        <td>70% - 100%</td>
                      </tr>
                      <tr>
                        <th>Pulse Rate Range</th>
                        <td>25 - 250 BPM</td>
                      </tr>
                      <tr>
                        <th>Accuracy</th>
                        <td>±2% (SpO2), ±2 BPM (Pulse)</td>
                      </tr>
                      <tr>
                        <th>Battery Life</th>
                        <td>30+ hours continuous use</td>
                      </tr>
                      <tr>
                        <th>Battery Type</th>
                        <td>2x AAA (included)</td>
                      </tr>
                      <tr>
                        <th>Weight</th>
                        <td>52g (without battery)</td>
                      </tr>
                      <tr>
                        <th>Dimensions</th>
                        <td>62mm x 32mm x 33mm</td>
                      </tr>
                      <tr>
                        <th>Operating Temperature</th>
                        <td>5°C to 40°C</td>
                      </tr>
                      <tr>
                        <th>Certification</th>
                        <td>FDA 510(k), CE, ISO 13485</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {/* Shipping & Returns Tab */}
              {activeTab === 'shipping' && (
                <div className="cs_tab_pane active">
                  <h3 className="cs_fs_24 cs_semibold cs_mb_16">Shipping Information</h3>
                  <ul className="cs_shipping_list cs_mp_0 cs_mb_32">
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check" /><span>Free standard shipping on orders over $50</span></li>
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check" /><span>Express shipping available ($9.99)</span></li>
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check" /><span>Orders placed before 2 PM EST ship same day</span></li>
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check" /><span>Standard delivery: 3-5 business days</span></li>
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check" /><span>Express delivery: 1-2 business days</span></li>
                  </ul>

                  <h3 className="cs_fs_24 cs_semibold cs_mb_16">Return Policy</h3>
                  <p className="cs_mb_16">We want you to be completely satisfied with your purchase. If you are not satisfied for any reason, you may return the product within 30 days of delivery for a full refund or exchange.</p>
                  <ul className="cs_shipping_list cs_mp_0">
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check" /><span>30-day return window</span></li>
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check" /><span>Product must be unused and in original packaging</span></li>
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check" /><span>Free return shipping for defective products</span></li>
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check" /><span>Refund processed within 5-7 business days</span></li>
                  </ul>
                </div>
              )}

              {/* Customer Reviews Tab */}
              {activeTab === 'reviews' && (
                <div className="cs_tab_pane active">
                  <div className="cs_reviews_summary cs_mb_32">
                    <div className="cs_reviews_avg">
                      <span className="cs_fs_48 cs_semibold cs_primary_color">5.0</span>
                      <div className="cs_rating cs_mb_8" data-rating="5"><div className="cs_rating_percentage"></div></div>
                      <span className="cs_fs_14">Based on {reviews.length} reviews</span>
                    </div>
                  </div>

                  <div className="cs_reviews_list">
                    {reviews.map((review, i) => (
                      <div key={i} className="cs_review_item cs_mb_24">
                        <div className="cs_review_author cs_mb_12">
                          <img src={review.avatar} alt={review.name} className="cs_review_avatar" />
                          <div>
                            <h4 className="cs_review_name cs_fs_18 cs_semibold mb-0">{review.name}</h4>
                            <span className="cs_fs_14 cs_gray_color">{review.date}</span>
                          </div>
                        </div>
                        <div className="cs_product_rating cs_mb_8">
                          {[...Array(5)].map((_, j) => (
                            <i key={j} className={`fa-solid fa-star${j < review.rating ? ' cs_accent_color' : ' cs_gray_color'}`}></i>
                          ))}
                        </div>
                        <p className="cs_review_text mb-0">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div className="cs_related_products cs_mt_80">
            <div className="cs_section_heading_style_1 cs_center-column cs_mb_48 cs_mb_lg_40 text-center">
              <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">You May Also Like</h2>
            </div>
            <div className="row cs_gap_y_24 justify-content-center">
              {relatedProducts.map((product) => (
                <div key={product.id} className="col-xl-4 col-md-6">
                  <div className="cs_product_card cs_white_bg cs_radius_20">
                    <Link to="/shop-details" className="cs_product_img cs_radius_15 cs_mb_20">
                      <img src={product.img} alt={product.name} />
                    </Link>
                    <div className="cs_product_info">
                      <h3 className="cs_product_title cs_fs_20 cs_medium cs_mb_8">
                        <Link to="/shop-details">{product.name}</Link>
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
                      <Link to="/cart" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span>Add to Cart</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
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

export default ShopDetails;

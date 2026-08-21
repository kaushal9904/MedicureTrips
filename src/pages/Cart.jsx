import { Link } from 'react-router-dom';
import { useState } from 'react';

const initialCartItems = [
  { id: 1, name: 'Pulse Oximeter', price: 39, quantity: 2, img: '/assets/img/product_img_2.webp' },
  { id: 2, name: 'Digital Blood Pressure', price: 39, quantity: 1, img: '/assets/img/product_img_1.webp' },
  { id: 3, name: 'Stethoscope', price: 69, quantity: 1, img: '/assets/img/product_img_7.webp' },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState('');

  const updateQuantity = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const total = subtotal + shipping;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" style={{ backgroundImage: "url('/assets/img/page_header_bg.webp')" }}>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Shopping Cart</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Cart</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Cart Section */}
      <section className="cs_cart_section">
        <div className="container">
          {cartItems.length === 0 ? (
            <div className="cs_cart_empty cs_text_center cs_mb_80">
              <i className="fa-solid fa-cart-shopping cs_fs_60 cs_gray_color cs_mb_24"></i>
              <h2 className="cs_fs_40 cs_semibold cs_mb_16">Your cart is empty</h2>
              <p className="cs_mb_32">Looks like you haven't added any items to your cart yet.</p>
              <Link to="/shop" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5">
                <span>Continue Shopping</span>
              </Link>
            </div>
          ) : (
            <div className="row cs_gap_y_40">
              {/* Cart Table */}
              <div className="col-lg-8">
                <div className="cs_cart_table_wrapper">
                  <table className="cs_cart_table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <div className="cs_cart_product">
                              <Link to="/shop-details" className="cs_cart_product_img cs_radius_10">
                                <img src={item.img} alt={item.name} />
                              </Link>
                              <div className="cs_cart_product_info">
                                <h4 className="cs_fs_18 cs_medium">
                                  <Link to="/shop-details">{item.name}</Link>
                                </h4>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="cs_fs_16 cs_primary_color cs_semibold">${item.price.toFixed(2)}</span>
                          </td>
                          <td>
                            <div className="cs_quantity_selector">
                              <button
                                type="button"
                                className="cs_qty_btn"
                                onClick={() => updateQuantity(item.id, -1)}
                                aria-label="Decrease quantity"
                              >
                                <i className="fa-solid fa-minus"></i>
                              </button>
                              <span className="cs_qty_value">{item.quantity}</span>
                              <button
                                type="button"
                                className="cs_qty_btn"
                                onClick={() => updateQuantity(item.id, 1)}
                                aria-label="Increase quantity"
                              >
                                <i className="fa-solid fa-plus"></i>
                              </button>
                            </div>
                          </td>
                          <td>
                            <span className="cs_fs_16 cs_semibold">${(item.price * item.quantity).toFixed(2)}</span>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="cs_cart_remove"
                              onClick={() => removeItem(item.id)}
                              aria-label={`Remove ${item.name}`}
                            >
                              <i className="fa-solid fa-xmark"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Coupon */}
                <div className="cs_cart_coupon cs_mt_32">
                  <form onSubmit={e => e.preventDefault()} className="cs_coupon_form">
                    <input
                      type="text"
                      className="cs_form_field cs_me_12"
                      placeholder="Coupon code"
                      value={couponCode}
                      onChange={e => setCouponCode(e.target.value)}
                    />
                    <button type="submit" className="cs_btn_style_2 cs_primary_color cs_semibold cs_radius_5">
                      <span>Apply Coupon</span>
                    </button>
                  </form>
                </div>
              </div>

              {/* Cart Totals */}
              <div className="col-lg-4">
                <div className="cs_cart_totals cs_gray2_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_24 cs_semibold cs_mb_24">Cart Totals</h3>
                  <ul className="cs_cart_totals_list cs_mp_0">
                    <li>
                      <span className="cs_totals_label">Subtotal</span>
                      <span className="cs_totals_value">${subtotal.toFixed(2)}</span>
                    </li>
                    <li>
                      <span className="cs_totals_label">Shipping</span>
                      <span className="cs_totals_value">
                        {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                      </span>
                    </li>
                    <li className="cs_totals_total">
                      <span className="cs_totals_label">Total</span>
                      <span className="cs_totals_value cs_primary_color">${total.toFixed(2)}</span>
                    </li>
                  </ul>
                  <Link to="/checkout" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5 w-100 justify-content-center">
                    <span>Proceed to Checkout</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <button type="button" id="scrollToTopBtn" className="cs_scrollup_btn" onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </main>
  );
};

export default Cart;

import Link from '../components/TrackedLink';
import { useState } from 'react';
import { submitToWeb3Forms } from '../lib/web3forms';

const orderItems = [
  { id: 1, name: 'Pulse Oximeter', price: 39, quantity: 2, img: '/assets/img/product_img_2.webp' },
  { id: 2, name: 'Digital Blood Pressure', price: 39, quantity: 1, img: '/assets/img/product_img_1.webp' },
  { id: 3, name: 'Stethoscope', price: 69, quantity: 1, img: '/assets/img/product_img_7.webp' },
];

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
  });

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const total = subtotal + shipping;

  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const result = await submitToWeb3Forms(e.target, 'Checkout Page — Order');
      if (result.success) {
        setStatus('success');
        e.target.reset();
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

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" style={{ backgroundImage: "url('/assets/img/page_header_bg.webp')" }}>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Checkout</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Checkout</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Checkout Section */}
      <section className="cs_checkout_section">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="order_summary" value={orderItems.map(i => `${i.name} x${i.quantity} ($${(i.price * i.quantity).toFixed(2)})`).join(', ')} />
            <input type="hidden" name="order_total" value={`$${total.toFixed(2)}`} />
            <div className="row cs_gap_y_40">
              {/* Billing Details */}
              <div className="col-lg-8">
                <div className="cs_checkout_billing">
                  <h3 className="cs_fs_30 cs_semibold cs_mb_24">Billing Details</h3>
                  <div className="row cs_gap_y_24">
                    <div className="col-sm-6">
                      <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                        <label htmlFor="co-first-name">First Name <span className="cs_accent_color">*</span></label>
                        <input
                          type="text"
                          id="co-first-name"
                          name="firstName"
                          className="cs_form_field"
                          placeholder="Enter your first name"
                          autoComplete="given-name"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                        <label htmlFor="co-last-name">Last Name <span className="cs_accent_color">*</span></label>
                        <input
                          type="text"
                          id="co-last-name"
                          name="lastName"
                          className="cs_form_field"
                          placeholder="Enter your last name"
                          autoComplete="family-name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                        <label htmlFor="co-company">Company Name (optional)</label>
                        <input
                          type="text"
                          id="co-company"
                          name="company"
                          className="cs_form_field"
                          placeholder="Enter your company name"
                          autoComplete="organization"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                        <label htmlFor="co-address">Street Address <span className="cs_accent_color">*</span></label>
                        <input
                          type="text"
                          id="co-address"
                          name="address"
                          className="cs_form_field"
                          placeholder="Enter your street address"
                          autoComplete="street-address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                        <label htmlFor="co-city">City <span className="cs_accent_color">*</span></label>
                        <input
                          type="text"
                          id="co-city"
                          name="city"
                          className="cs_form_field"
                          placeholder="Enter city"
                          autoComplete="address-level2"
                          value={formData.city}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                        <label htmlFor="co-state">State <span className="cs_accent_color">*</span></label>
                        <input
                          type="text"
                          id="co-state"
                          name="state"
                          className="cs_form_field"
                          placeholder="Enter state"
                          autoComplete="address-level1"
                          value={formData.state}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                        <label htmlFor="co-zip">ZIP Code <span className="cs_accent_color">*</span></label>
                        <input
                          type="text"
                          id="co-zip"
                          name="zip"
                          className="cs_form_field"
                          placeholder="Enter ZIP code"
                          autoComplete="postal-code"
                          value={formData.zip}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                        <label htmlFor="co-phone">Phone <span className="cs_accent_color">*</span></label>
                        <input
                          type="tel"
                          id="co-phone"
                          name="phone"
                          className="cs_form_field"
                          placeholder="Enter your phone number"
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                        <label htmlFor="co-email">Email Address <span className="cs_accent_color">*</span></label>
                        <input
                          type="email"
                          id="co-email"
                          name="email"
                          className="cs_form_field"
                          placeholder="Enter your email address"
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="cs_payment_method cs_mt_40">
                    <h3 className="cs_fs_30 cs_semibold cs_mb_24">Payment Method</h3>
                    <div className="cs_payment_options">
                      <label className={`cs_payment_option cs_radius_10${paymentMethod === 'bank' ? ' active' : ''}`}>
                        <input
                          type="radio"
                          name="payment"
                          value="bank"
                          checked={paymentMethod === 'bank'}
                          onChange={e => setPaymentMethod(e.target.value)}
                        />
                        <span className="cs_payment_radio"></span>
                        <span className="cs_payment_label">
                          <i className="fa-solid fa-building-columns cs_me_8"></i>
                          Direct Bank Transfer
                        </span>
                      </label>
                      <div className="cs_payment_desc">
                        <p>Make your payment directly into our bank account. Your order will be processed after payment confirmation.</p>
                      </div>

                      <label className={`cs_payment_option cs_radius_10${paymentMethod === 'cod' ? ' active' : ''}`}>
                        <input
                          type="radio"
                          name="payment"
                          value="cod"
                          checked={paymentMethod === 'cod'}
                          onChange={e => setPaymentMethod(e.target.value)}
                        />
                        <span className="cs_payment_radio"></span>
                        <span className="cs_payment_label">
                          <i className="fa-solid fa-money-bill-wave cs_me_8"></i>
                          Cash on Delivery
                        </span>
                      </label>
                      <div className="cs_payment_desc">
                        <p>Pay with cash upon delivery. Available for orders within the local area.</p>
                      </div>

                      <label className={`cs_payment_option cs_radius_10${paymentMethod === 'card' ? ' active' : ''}`}>
                        <input
                          type="radio"
                          name="payment"
                          value="card"
                          checked={paymentMethod === 'card'}
                          onChange={e => setPaymentMethod(e.target.value)}
                        />
                        <span className="cs_payment_radio"></span>
                        <span className="cs_payment_label">
                          <i className="fa-solid fa-credit-card cs_me_8"></i>
                          Credit / Debit Card
                        </span>
                      </label>
                      <div className="cs_payment_desc">
                        <p>Pay securely using your Visa, MasterCard, or American Express card.</p>
                      </div>
                    </div>
                  </div>

                  {/* Place Order */}
                  <div className="cs_place_order cs_mt_40">
                    <button type="submit" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5" disabled={status === 'sending'}>
                      <span>{status === 'sending' ? 'Placing Order...' : 'Place Order'}</span>
                    </button>
                    {status === 'success' && <p className="cs_fs_14 mb-0 cs_mt_12" style={{ color: '#1a7f37' }}>Thanks! Your order has been received.</p>}
                    {status === 'error' && <p className="cs_fs_14 mb-0 cs_mt_12" style={{ color: '#c0392b' }}>{errorMessage || 'Something went wrong. Please try again.'}</p>}
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="col-lg-4">
                <div className="cs_order_summary cs_gray2_bg cs_radius_20 cs_sticky_sidebar">
                  <h3 className="cs_fs_24 cs_semibold cs_mb_24">Your Order</h3>
                  <div className="cs_order_items cs_mb_24">
                    {orderItems.map((item) => (
                      <div key={item.id} className="cs_order_item cs_mb_16">
                        <div className="cs_order_item_img cs_radius_10">
                          <img src={item.img} alt={item.name} />
                        </div>
                        <div className="cs_order_item_info">
                          <h4 className="cs_fs_16 cs_medium mb-0">{item.name}</h4>
                          <span className="cs_fs_14 cs_gray_color">x{item.quantity}</span>
                        </div>
                        <span className="cs_fs_16 cs_semibold cs_ms_auto">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <ul className="cs_order_totals cs_mp_0">
                    <li>
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </li>
                    <li>
                      <span>Shipping</span>
                      <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                    </li>
                    <li className="cs_order_total">
                      <span>Total</span>
                      <span className="cs_primary_color">${total.toFixed(2)}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      <button type="button" id="scrollToTopBtn" className="cs_scrollup_btn" onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </main>
  );
};

export default Checkout;

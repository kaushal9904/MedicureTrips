import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Packages = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');

  const categories = [
    'All', 'Cardiac', 'Orthopedic', 'Dental', 'Neurology', 'Cosmetic', 'Wellness'
  ];

  const priceRanges = [
    'All', 'Under $500', '$500 - $2000', '$2000 - $5000', 'Over $5000'
  ];

  const packages = [
    { id: 1, title: 'Full Body Checkup', price: 199, category: 'Wellness', image: '/assets/img/package_img_1.webp', description: 'Comprehensive health screening with advanced diagnostics.', features: ['Complete Blood Work', 'Heart Screening', 'Liver Function Test', 'Kidney Function Test'] },
    { id: 2, title: 'Cardiac Screening', price: 299, category: 'Cardiac', image: '/assets/img/package_img_2.webp', description: 'Advanced cardiac assessment and heart health monitoring.', features: ['ECG Test', 'Echocardiogram', 'Blood Pressure Monitoring', 'Cholesterol Panel'] },
    { id: 3, title: 'Knee Replacement', price: 7890, category: 'Orthopedic', image: '/assets/img/package_img_3.webp', description: 'Complete knee replacement surgery with rehabilitation.', features: ['Pre-surgery Assessment', 'Surgery Package', 'Post-op Care', 'Physical Therapy'] },
    { id: 4, title: 'Cataract Surgery', price: 1250, category: 'Neurology', image: '/assets/img/package_img_4.webp', description: 'Advanced cataract removal with premium lens implant.', features: ['Eye Examination', 'Premium Lens', 'Surgery', 'Follow-up Visits'] },
    { id: 5, title: 'Root Canal', price: 450, category: 'Dental', image: '/assets/img/package_img_5.webp', description: 'Painless root canal treatment with crown placement.', features: ['X-Ray', 'Root Canal Treatment', 'Crown', 'Follow-up'] },
    { id: 6, title: 'Teeth Whitening', price: 220, category: 'Dental', image: '/assets/img/package_img_6.webp', description: 'Professional teeth whitening for a brighter smile.', features: ['Consultation', 'Whitening Procedure', 'Aftercare Kit', 'Touch-up Session'] },
    { id: 7, title: 'Physiotherapy', price: 540, category: 'Orthopedic', image: '/assets/img/package_img_7.webp', description: 'Complete physiotherapy session package for recovery.', features: ['Initial Assessment', '10 Sessions', 'Home Exercise Plan', 'Progress Reports'] },
    { id: 8, title: 'Yoga & Stress Management', price: 180, category: 'Wellness', image: '/assets/img/package_img_8.webp', description: 'Holistic wellness program for stress relief.', features: ['Yoga Sessions', 'Meditation Classes', 'Diet Consultation', 'Lifestyle Tips'] },
    { id: 9, title: 'Liposuction', price: 2990, category: 'Cosmetic', image: '/assets/img/package_img_9.webp', description: 'Advanced body contouring with minimal downtime.', features: ['Consultation', 'Surgery', 'Compression Garments', 'Follow-up Care'] },
    { id: 10, title: 'Gallbladder Removal', price: 1550, category: 'Wellness', image: '/assets/img/package_img_10.webp', description: 'Laparoscopic gallbladder removal surgery.', features: ['Pre-op Tests', 'Surgery', 'Hospital Stay', 'Post-op Care'] },
    { id: 11, title: 'Hernia Repair', price: 3250, category: 'Wellness', image: '/assets/img/package_img_11.webp', description: 'Advanced hernia repair with mesh placement.', features: ['Consultation', 'Surgery', 'Mesh Placement', 'Recovery Support'] },
    { id: 12, title: 'Dental Implant', price: 1290, category: 'Dental', image: '/assets/img/package_img_12.webp', description: 'Premium dental implant with natural-looking crown.', features: ['Bone Assessment', 'Implant Surgery', 'Crown Placement', 'Follow-up'] },
    { id: 13, title: 'Annual Wellness', price: 399, category: 'Wellness', image: '/assets/img/package_img_13.webp', description: 'Complete annual health checkup package.', features: ['Full Body Checkup', 'Blood Tests', 'Heart Screening', 'Health Report'] },
    { id: 14, title: 'Skin Rejuvenation', price: 590, category: 'Cosmetic', image: '/assets/img/package_img_14.webp', description: 'Advanced skin treatment for youthful glow.', features: ['Consultation', 'Chemical Peel', 'Laser Treatment', 'Aftercare'] },
    { id: 15, title: 'MRI Scan', price: 890, category: 'Neurology', image: '/assets/img/package_img_15.webp', description: 'High-resolution MRI scanning with expert analysis.', features: ['Consultation', 'MRI Scan', 'Expert Analysis', 'Report'] }
  ];

  const filterPackages = () => {
    return packages.filter(pkg => {
      const categoryMatch = selectedCategory === 'All' || pkg.category === selectedCategory;
      let priceMatch = true;
      
      if (selectedPriceRange === 'Under $500') {
        priceMatch = pkg.price < 500;
      } else if (selectedPriceRange === '$500 - $2000') {
        priceMatch = pkg.price >= 500 && pkg.price <= 2000;
      } else if (selectedPriceRange === '$2000 - $5000') {
        priceMatch = pkg.price > 2000 && pkg.price <= 5000;
      } else if (selectedPriceRange === 'Over $5000') {
        priceMatch = pkg.price > 5000;
      }
      
      return categoryMatch && priceMatch;
    });
  };

  const filteredPackages = filterPackages();

  return (
    <>
      {/* Page Header */}
      <section className="cs_page_header cs_bg_filed" style={{backgroundImage: 'url(/assets/img/page-header-bg.jpg)'}}>
        <div className="container">
          <div className="cs_page_header_content">
            <h1 className="cs_page_title">Packages</h1>
            <ol className="cs_breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li className="active">Packages</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="cs_packages cs_py_100">
        <div className="container">
          <div className="row">
            {/* Filter Sidebar */}
            <div className="col-lg-3">
              <div className="cs_filter_sidebar">
                <h3 className="cs_filter_title">Filter By</h3>
                
                {/* Treatment Type Filter */}
                <div className="cs_filter_group">
                  <h4>Treatment Type</h4>
                  <ul className="cs_filter_list">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <label className={`cs_checkbox ${selectedCategory === category ? 'active' : ''}`}>
                          <input 
                            type="radio" 
                            name="category" 
                            checked={selectedCategory === category}
                            onChange={() => setSelectedCategory(category)}
                          />
                          <span>{category}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price Range Filter */}
                <div className="cs_filter_group">
                  <h4>Price Range</h4>
                  <ul className="cs_filter_list">
                    {priceRanges.map((range, index) => (
                      <li key={index}>
                        <label className={`cs_checkbox ${selectedPriceRange === range ? 'active' : ''}`}>
                          <input 
                            type="radio" 
                            name="price" 
                            checked={selectedPriceRange === range}
                            onChange={() => setSelectedPriceRange(range)}
                          />
                          <span>{range}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Packages Grid */}
            <div className="col-lg-9">
              <div className="row">
                {filteredPackages.map((pkg) => (
                  <div className="col-lg-4 col-md-6" key={pkg.id}>
                    <div className="cs_package_card">
                      <div className="cs_package_img">
                        <img src={pkg.image} alt={pkg.title} />
                        <div className="cs_package_price">${pkg.price}</div>
                      </div>
                      <div className="cs_package_content">
                        <h3 className="cs_package_title">{pkg.title}</h3>
                        <p className="cs_package_desc">{pkg.description}</p>
                        <ul className="cs_package_features">
                          {pkg.features.map((feature, idx) => (
                            <li key={idx}>
                              <i className="fas fa-check"></i>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Link to="/contact-us.html" className="cs_btn cs_style_1 cs_accent_bg">
                          <span>Book Now</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Widget */}
      <div className="cs_help_widget">
        <div className="cs_help_content">
          <h4>Need Help?</h4>
          <div className="cs_help_item">
            <i className="fas fa-phone"></i>
            <div>
              <span>Call Us</span>
              <a href="tel:+18001234567">+1 800 123 4567</a>
            </div>
          </div>
          <div className="cs_help_item">
            <i className="fas fa-envelope"></i>
            <div>
              <span>Email Us</span>
              <a href="mailto:shivammehra20244@gmail.com">shivammehra20244@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* Venue Widget */}
      <section className="cs_venue cs_py_50">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="cs_venue_title">Visit Our Center</h3>
              <div className="cs_venue_info">
                <div className="cs_venue_item">
                  <i className="fas fa-map-marker-alt"></i>
                  <p>123 Medical Center Drive, Healthcare City, HC 12345</p>
                </div>
                <div className="cs_venue_item">
                  <i className="fas fa-phone"></i>
                  <p>+1 800 123 4567</p>
                </div>
                <div className="cs_venue_item">
                  <i className="fas fa-clock"></i>
                  <p>Mon - Fri: 8:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_map_embed">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153169!3d-37.817323442021595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus" 
                  width="100%" 
                  height="300" 
                  style={{border: 0}} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Our Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Packages;
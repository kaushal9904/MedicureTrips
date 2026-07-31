import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Career = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your application! We will review it and get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      message: ''
    });
  };

  const jobListings = [
    {
      id: 1,
      title: 'Medical Coordinator',
      department: 'Operations',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Coordinate patient care and medical services across our network of healthcare providers.',
      requirements: ['Bachelor\'s degree in Healthcare Administration', '2+ years experience', 'Excellent communication skills']
    },
    {
      id: 2,
      title: 'Patient Relations Specialist',
      department: 'Customer Service',
      location: 'Remote',
      type: 'Full-time',
      description: 'Handle patient inquiries and ensure exceptional service delivery throughout their healthcare journey.',
      requirements: ['Strong interpersonal skills', 'Healthcare experience preferred', 'Bilingual (English/Spanish) a plus']
    },
    {
      id: 3,
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      description: 'Lead marketing initiatives to promote our medical tourism services and grow our brand presence.',
      requirements: ['MBA or equivalent', '5+ years marketing experience', 'Digital marketing expertise']
    },
    {
      id: 4,
      title: 'Travel Coordinator',
      department: 'Operations',
      location: 'Miami, FL',
      type: 'Full-time',
      description: 'Manage travel arrangements for international patients including flights, accommodation, and local transportation.',
      requirements: ['Travel industry experience', 'Strong organizational skills', 'Knowledge of international travel']
    },
    {
      id: 5,
      title: 'Medical Consultant',
      department: 'Medical Affairs',
      location: 'Chicago, IL',
      type: 'Full-time',
      description: 'Provide medical expertise and guidance to patients seeking treatment abroad.',
      requirements: ['Medical degree (MD)', 'International healthcare experience', 'Excellent bedside manner']
    }
  ];

  const benefits = [
    {
      icon: 'fas fa-heartbeat',
      title: 'Health Insurance',
      description: 'Comprehensive health coverage for you and your family.'
    },
    {
      icon: 'fas fa-plane',
      title: 'Travel Opportunities',
      description: 'Work with patients from around the world and travel opportunities.'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Learning & Development',
      description: 'Continuous education and professional growth programs.'
    },
    {
      icon: 'fas fa-clock',
      title: 'Work-Life Balance',
      description: 'Flexible schedules and generous time off policies.'
    },
    {
      icon: 'fas fa-users',
      title: 'Team Culture',
      description: 'Collaborative and supportive work environment.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Career Growth',
      description: 'Clear career paths and advancement opportunities.'
    }
  ];

  const cultureItems = [
    {
      icon: 'fas fa-hand-holding-heart',
      title: 'Patient-First Approach',
      description: 'Every decision we make is centered around improving patient outcomes and experiences.'
    },
    {
      icon: 'fas fa-globe',
      title: 'Global Mindset',
      description: 'We embrace diversity and think globally in everything we do.'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation',
      description: 'We encourage creative thinking and embrace new ideas to improve healthcare delivery.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Collaboration',
      description: 'We believe in teamwork and working together to achieve our mission.'
    }
  ];

  const positions = [
    'Medical Coordinator',
    'Patient Relations Specialist',
    'Marketing Manager',
    'Travel Coordinator',
    'Medical Consultant'
  ];

  return (
    <>
      {/* Page Header */}
      <section className="cs_page_header cs_bg_filed" style={{backgroundImage: 'url(/assets/img/page-header-bg.jpg)'}}>
        <div className="container">
          <div className="cs_page_header_content">
            <h1 className="cs_page_title">Career</h1>
            <ol className="cs_breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li className="active">Career</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="cs_jobs cs_py_100">
        <div className="container">
          <div className="cs_section_heading text-center">
            <h2 className="cs_section_title">Open Positions</h2>
            <p className="cs_section_subtitle">Join our team and help revolutionize medical tourism</p>
          </div>
          
          <div className="cs_jobs_list">
            {jobListings.map((job) => (
              <div className="cs_job_card" key={job.id}>
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <h3 className="cs_job_title">{job.title}</h3>
                    <div className="cs_job_meta">
                      <span><i className="fas fa-building"></i> {job.department}</span>
                      <span><i className="fas fa-map-marker-alt"></i> {job.location}</span>
                      <span><i className="fas fa-briefcase"></i> {job.type}</span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <p className="cs_job_desc">{job.description}</p>
                  </div>
                  <div className="col-lg-3 text-lg-end">
                    <Link to="/contact-us.html" className="cs_btn cs_style_1 cs_accent_bg">
                      <span>Apply Now</span>
                    </Link>
                  </div>
                </div>
                <div className="cs_job_requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    {job.requirements.map((req, idx) => (
                      <li key={idx}><i className="fas fa-check"></i> {req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="cs_benefits cs_py_100 cs_light_bg">
        <div className="container">
          <div className="cs_section_heading text-center">
            <h2 className="cs_section_title">Why Work With Us</h2>
            <p className="cs_section_subtitle">We offer competitive benefits and a rewarding work environment</p>
          </div>
          
          <div className="row">
            {benefits.map((benefit, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="cs_benefit_card">
                  <div className="cs_benefit_icon">
                    <i className={benefit.icon}></i>
                  </div>
                  <h3 className="cs_benefit_title">{benefit.title}</h3>
                  <p className="cs_benefit_desc">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="cs_culture cs_py_100">
        <div className="container">
          <div className="cs_section_heading text-center">
            <h2 className="cs_section_title">Our Culture</h2>
            <p className="cs_section_subtitle">What makes Medicure Trip a great place to work</p>
          </div>
          
          <div className="row">
            {cultureItems.map((item, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="cs_culture_card">
                  <div className="cs_culture_icon">
                    <i className={item.icon}></i>
                  </div>
                  <h3 className="cs_culture_title">{item.title}</h3>
                  <p className="cs_culture_desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="cs_application cs_py_100 cs_accent_bg">
        <div className="container">
          <div className="cs_section_heading text-center">
            <h2 className="cs_section_title text-white">Apply Now</h2>
            <p className="cs_section_subtitle text-white">Submit your application and join our growing team</p>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form className="cs_application_form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="cs_form_group">
                      <label>Full Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cs_form_group">
                      <label>Email Address</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cs_form_group">
                      <label>Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cs_form_group">
                      <label>Position</label>
                      <select 
                        name="position" 
                        value={formData.position} 
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Position</option>
                        {positions.map((pos, idx) => (
                          <option key={idx} value={pos}>{pos}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cs_form_group">
                      <label>Years of Experience</label>
                      <input 
                        type="text" 
                        name="experience" 
                        value={formData.experience} 
                        onChange={handleChange}
                        placeholder="e.g., 3 years"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cs_form_group">
                      <label>Resume/CV</label>
                      <input 
                        type="file" 
                        className="cs_file_input"
                        accept=".pdf,.doc,.docx"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="cs_form_group">
                      <label>Cover Letter / Message</label>
                      <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange}
                        rows="5"
                        placeholder="Tell us about yourself and why you'd be a great fit..."
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="cs_btn cs_style_1 cs_white_bg">
                      <span>Submit Application</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cs_cta cs_py_50">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3 className="cs_cta_title">Have Questions?</h3>
              <p className="cs_cta_text">Contact our HR team at <a href="mailto:careers@medicuretrip.com">careers@medicuretrip.com</a> or call us at <a href="tel:+18001234567">+1 800 123 4567</a></p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link to="/contact-us.html" className="cs_btn cs_style_1 cs_accent_bg">
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
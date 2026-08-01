import { Link } from 'react-router-dom';
import { useState } from 'react';

const allDoctors = [
  { name: 'Dr. A. V. Gurava Reddy', type: 'Orthopedic Surgeon', hospital: 'KIMS Hospitals, Hyderabad', focus: 'Joint Replacement', img: '/images/Dr. A. V. Gurava Reddy.jpg' },
  { name: 'Dr. Aditya Gupta', type: 'Neurosurgeon', hospital: 'Artemis Hospital, Gurugram', focus: 'Brain Tumor, Deep Brain Stimulation', img: '/images/Dr. Aditya Gupta.jpg' },
  { name: 'Dr. Ajay Kaul', type: 'Cardiac Surgeon', hospital: 'Fortis Memorial Research Institute, Gurugram', focus: 'Heart Bypass Surgery, Valve Surgery', img: '/images/Dr. Ajay Kaul.jpg' },
  { name: 'Dr. Ajitabh Srivastava', type: 'Transplant Surgeon', hospital: 'Apollo Hospitals, New Delhi', focus: 'Liver Transplant', img: '/images/Dr. Ajitabh Srivastava.jpg' },
  { name: 'Dr. Alok Ranjan', type: 'Neurosurgeon', hospital: 'Medanta – The Medicity, Gurugram', focus: 'Spine Surgery', img: '/images/Dr Alok Ranjan.jpg' },
  { name: 'Dr. Amal Roy Chaudhoory', type: 'Radiation Oncologist', hospital: 'Fortis Memorial Research Institute, Gurugram', focus: 'IMRT, VMAT, Thoracic & GI Radiation Oncology', img: '/images/Dr. Amal Roy Chaudhoory.jpg' },
  { name: 'Dr. Amit Verma', type: 'Medical Oncologist', hospital: 'Artemis Hospital, Gurugram', focus: 'Immunotherapy, Targeted Therapy', img: '/images/Dr. Amit Verma.jpg' },
  { name: 'Dr. Anil Mandhani', type: 'Transplant Surgeon', hospital: 'Fortis Memorial Research Institute, Gurugram', focus: 'Kidney Transplant', img: '/images/Dr. Anil Mandhani.jpg' },
  { name: 'Dr. Arun Saroha', type: 'Neurosurgeon', hospital: 'Max Super Speciality Hospital, New Delhi', focus: 'Brain & Spine Surgery', img: '/images/Dr. Arun Saroha.jpg' },
  { name: 'Dr. Arvinder Singh Soin', type: 'Transplant Surgeon', hospital: 'Medanta – The Medicity, Gurugram', focus: 'Liver Transplant', img: '/images/Dr. Arvinder Singh Soin.jpg' },
  { name: 'Dr. Ashish Sabharwal', type: 'Urologist', hospital: 'BLK-Max Super Speciality Hospital, New Delhi', focus: 'Laser Urology, Robotic Urology', img: '/images/Dr. Ashish Sabharwal.jpg' },
  { name: 'Dr. Ashok Kumar Vaid', type: 'Medical Oncologist', hospital: 'Medanta – The Medicity, Gurugram', focus: 'Immunotherapy, Targeted Therapy', img: '/images/Dr. Ashok Kumar Vaid.jpg' },
];

const doctorTypes = [...new Set(allDoctors.map(d => d.type))];

const OurDoctors = () => {
  const [filterType, setFilterType] = useState('');
  const [searchName, setSearchName] = useState('');

  const visibleDoctors = allDoctors.filter(doc => {
    const matchesType = !filterType || doc.type === filterType;
    const matchesName = !searchName || doc.name.toLowerCase().includes(searchName.toLowerCase());
    return matchesType && matchesName;
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>

      {/* Doctors Section */}
      <section className="cs_team_section_5">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center-column cs_mb_48 cs_mb_lg_40 text-center">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17">// Meet Our Specialists</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Find The Right Specialist For Your <br />Treatment Across Our Partner Hospitals.</h2>
          </div>
          <form className="cs_doctor_filter cs_gray3_bg cs_radius_5 cs_mb_24" onSubmit={e => e.preventDefault()}>
            <div className="row cs_gap_y_16 align-items-end">
              <div className="col-lg-4 col-md-6">
                <div className="cs_filter_input">
                  <label htmlFor="filter-type">Type of Doctor</label>
                  <div className="cs_white_bg cs_radius_5">
                    <select className="cs_form_field cs_choice" id="filter-type" name="type" value={filterType} onChange={e => setFilterType(e.target.value)}>
                      <option value="">All Specialties</option>
                      {doctorTypes.map((t, i) => <option key={i} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="cs_filter_input">
                  <label htmlFor="filter-name">Search Doctor</label>
                  <div className="cs_white_bg cs_radius_5 position-relative">
                    <input type="text" id="filter-name" name="search" className="cs_form_field" placeholder="Search by doctor name" autoComplete="off" value={searchName} onChange={e => setSearchName(e.target.value)} />
                    <img src="/assets/img/icons/search.svg" alt="Search icon" className="cs_search_icon" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <button type="submit" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5">
                  <img src="/assets/img/icons/stethoscope.svg" alt="Stethoscope icon" />
                  <span>Search Doctors</span>
                </button>
              </div>
            </div>
          </form>
          <div className="row cs_gap_y_24 cs_mb_48 cs_mb_lg_40 justify-content-center">
            {visibleDoctors.map((doc, i) => (
              <div key={i} className="col-xl-3 col-lg-4 col-sm-6">
                <div className="cs_team_style_2 cs_radius_20 position-relative overflow-hidden">
                  <div className="cs_team_img">
                    <img src={doc.img} alt={`${doc.name} photo`} />
                  </div>
                  <div className="cs_team_info text-center">
                    <Link to="/contact-us.html" aria-label="Book a consultation with this doctor" className="cs_btn_style_1 cs_danger_bg cs_white_color cs_semibold cs_radius_5 cs_mb_13">
                      <img src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                      <span>Book Consultation</span>
                    </Link>
                    <h3 className="cs_team_title cs_fs_20 cs_bold cs_white_color cs_mb_12">
                      <Link to="/doctor-details.html" aria-label="View doctor details">{doc.name}</Link>
                    </h3>
                    <p className="cs_team_subtitle cs_white_color mb-0">{doc.type}</p>
                    <p className="cs_team_subtitle cs_white_color mb-0">{doc.hospital}</p>
                  </div>
                </div>
              </div>
            ))}
            {visibleDoctors.length === 0 && (
              <p className="text-center mb-0">No doctors match your search. Try a different specialty or name.</p>
            )}
          </div>
        </div>
      </section>

      <button type="button" id="scrollToTopBtn" className="cs_scrollup_btn" onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </main>
  );
};

export default OurDoctors;

import { Link } from 'react-router-dom';
import { useState } from 'react';

const allDoctors = [
  { name: 'Artemis Hospital', specialty: 'Cardiology · NABH & JCI Accredited', img: '/assets/img/team_img_8.webp' },
  { name: 'Marengo Asia Hospital', specialty: 'Neuro Surgery · NABH & JCI Accredited', img: '/assets/img/team_img_6.webp' },
  { name: 'Medanta Hospital', specialty: 'Organ Transplant · NABH & JCI Accredited', img: '/assets/img/team_img_5.webp' },
  { name: 'Fortis Hospital', specialty: 'Orthopedic · NABH & JCI Accredited', img: '/assets/img/team_img_7.webp' },
  { name: 'BLK Hospital', specialty: 'Urology & ENT · NABH & JCI Accredited', img: '/assets/img/team_img_13.webp' },
  { name: 'Max Hospital', specialty: 'Cancer Care · NABH & JCI Accredited', img: '/assets/img/team_img_14.webp' },
];

const departments = ['Organ Transplant', 'Cardiology', 'Neuro Surgery', 'Spine Surgery', 'Orthopedic', 'Urology', 'ENT', 'Plastic Surgery', 'Cancer'];

const Doctors = () => {
  const [filterDept, setFilterDept] = useState('');
  const [searchName, setSearchName] = useState('');

  const filteredDoctors = allDoctors.filter(doc => {
    const matchesDept = !filterDept || doc.specialty.toLowerCase().includes(filterDept.toLowerCase());
    const matchesName = !searchName || doc.name.toLowerCase().includes(searchName.toLowerCase());
    return matchesDept && matchesName;
  });

  const visibleDoctors = filteredDoctors;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" style={{ backgroundImage: "url('/assets/img/page_header_bg.webp')" }}>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Partner Hospitals</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Partner Hospitals</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="cs_team_section_5">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center-column cs_mb_48 cs_mb_lg_40 text-center">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17">// Our Network</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Navigate Your Healthcare Journey With Confidence <br />Through Our Partner Hospitals.</h2>
          </div>
          <form className="cs_doctor_filter cs_gray3_bg cs_radius_5 cs_mb_24" onSubmit={e => e.preventDefault()}>
            <div className="row cs_gap_y_16 align-items-end">
              <div className="col-lg-4 col-md-6">
                <div className="cs_filter_input">
                  <label htmlFor="filter-department">Treatment</label>
                  <div className="cs_white_bg cs_radius_5">
                    <select className="cs_form_field cs_choice" id="filter-department" name="department" value={filterDept} onChange={e => setFilterDept(e.target.value)}>
                      <option value="">Select Treatment</option>
                      {departments.map((d, i) => <option key={i} value={d}>{d}</option>)}
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="cs_filter_input">
                  <label htmlFor="filter-name">Search Hospital</label>
                  <div className="cs_white_bg cs_radius_5 position-relative">
                    <input type="text" id="filter-name" name="search" className="cs_form_field" placeholder="Search by hospital name" autoComplete="off" value={searchName} onChange={e => setSearchName(e.target.value)} />
                    <img src="/assets/img/icons/search.svg" alt="Search icon" className="cs_search_icon" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <button type="submit" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5">
                  <img src="/assets/img/icons/stethoscope.svg" alt="Stethoscope icon" />
                  <span>Search Hospitals</span>
                </button>
              </div>
            </div>
          </form>
          <div className="row cs_gap_y_24 cs_mb_48 cs_mb_lg_40 justify-content-center">
            {visibleDoctors.map((doc, i) => (
              <div key={i} className="col-xl-3 col-lg-4 col-sm-6">
                <div className="cs_team_style_2 cs_radius_20 position-relative overflow-hidden">
                  <div className="cs_team_img">
                    <img src={doc.img} alt={`${doc.name} image`} />
                  </div>
                  <div className="cs_team_info text-center">
                    <Link to="/contact-us.html" aria-label="Enquire about this hospital" className="cs_btn_style_1 cs_danger_bg cs_white_color cs_semibold cs_radius_5 cs_mb_13">
                      <img src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                      <span>Enquire Now</span>
                    </Link>
                    <h3 className="cs_team_title cs_fs_20 cs_bold cs_white_color cs_mb_12">
                      <Link to="/doctor-details.html" aria-label="View hospital details">{doc.name}</Link>
                    </h3>
                    <p className="cs_team_subtitle cs_white_color mb-0">{doc.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <button type="button" id="scrollToTopBtn" className="cs_scrollup_btn" onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </main>
  );
};

export default Doctors;

import Link from '../components/TrackedLink';
import { useState } from 'react';
import { getHospitals, getHospitalSpecialties, getSpecialties, hospitalPath } from '../data/db';

const allHospitals = getHospitals().map(h => ({ ...h, specialties: getHospitalSpecialties(h.id) }));

const departments = getSpecialties();

const Doctors = () => {
  const [filterDept, setFilterDept] = useState('');
  const [searchName, setSearchName] = useState('');

  const query = searchName.trim().toLowerCase();
  const visibleHospitals = allHospitals.filter(h => {
    const matchesDept = !filterDept || h.specialties.includes(filterDept);
    const matchesName = !query || h.name.toLowerCase().includes(query) || (h.city ?? '').toLowerCase().includes(query);
    return matchesDept && matchesName;
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
                    <input type="text" id="filter-name" name="search" className="cs_form_field" placeholder="Search by hospital or city" autoComplete="off" value={searchName} onChange={e => setSearchName(e.target.value)} />
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
            {visibleHospitals.map(h => (
              <div key={h.id} className="col-xl-3 col-lg-4 col-sm-6">
                <div className="cs_team_style_2 cs_radius_20 position-relative overflow-hidden">
                  <div className="cs_team_img">
                    <img src={h.image ?? '/assets/img/team_img_5.webp'} alt={`${h.name} image`} loading="lazy" decoding="async" />
                  </div>
                  <div className="cs_team_info text-center">
                    <Link to={hospitalPath(h.slug)} className="cs_card_link" aria-label={`View ${h.name}`} tabIndex={-1} />
                    <Link to="/contact-us" aria-label="Enquire about this hospital" className="cs_btn_style_1 cs_danger_bg cs_white_color cs_semibold cs_radius_5 cs_mb_13">
                      <img src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                      <span>Enquire Now</span>
                    </Link>
                    <h3 className="cs_team_title cs_fs_20 cs_bold cs_white_color cs_mb_12">
                      <Link to={hospitalPath(h.slug)}>{h.name}</Link>
                    </h3>
                    <p className="cs_team_subtitle cs_white_color mb-0">
                      {[h.city, h.accreditations.slice(0, 2).join(' & ')].filter(Boolean).join(' · ')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {visibleHospitals.length === 0 && (
              <p className="text-center mb-0">No hospitals match your search. Try a different treatment or name.</p>
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

export default Doctors;

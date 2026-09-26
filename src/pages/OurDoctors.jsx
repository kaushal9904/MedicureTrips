import { useState } from 'react';
import DoctorCard from '../components/DoctorCard';
import { getDoctors, getSpecialties } from '../data/db';

const allDoctors = getDoctors();
const doctorTypes = getSpecialties();
const doctorsPerPage = 9;

const OurDoctors = () => {
  const [filterType, setFilterType] = useState('');
  const [searchName, setSearchName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const query = searchName.trim().toLowerCase();
  const filteredDoctors = allDoctors.filter(doc => {
    const matchesType = !filterType || doc.specialty === filterType;
    const matchesName = !query
      || doc.name.toLowerCase().includes(query)
      || (doc.hospitalName ?? '').toLowerCase().includes(query);
    return matchesType && matchesName;
  });

  const totalPages = Math.max(1, Math.ceil(filteredDoctors.length / doctorsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const pageStart = (safePage - 1) * doctorsPerPage;
  const visibleDoctors = filteredDoctors.slice(pageStart, pageStart + doctorsPerPage);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPage = (page) => {
    setCurrentPage(page);
    scrollToTop();
  };

  const handleFilterChange = (setter) => (value) => {
    setter(value);
    setCurrentPage(1);
  };

  const getPageNumbers = () => {
    const pages = [];
    for (let p = 1; p <= totalPages; p++) {
      if (p === 1 || p === totalPages || Math.abs(p - safePage) <= 1) {
        pages.push(p);
      } else if (pages[pages.length - 1] !== '...') {
        pages.push('...');
      }
    }
    return pages;
  };

  return (
    <main>

      {/* Doctors Section */}
      <section className="cs_team_section_5">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center-column cs_mb_48 cs_mb_lg_40 text-center">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Find The Right Specialist For Your <br />Treatment Across Our Partner Hospitals.</h2>
          </div>
          <form className="cs_doctor_filter cs_gray3_bg cs_radius_5 cs_mb_24" onSubmit={e => e.preventDefault()}>
            <div className="row cs_gap_y_16 align-items-end">
              <div className="col-lg-4 col-md-6">
                <div className="cs_filter_input">
                  <label htmlFor="filter-type">Type of Doctor</label>
                  <div className="cs_white_bg cs_radius_5">
                    <select className="cs_form_field cs_choice" id="filter-type" name="type" value={filterType} onChange={e => handleFilterChange(setFilterType)(e.target.value)}>
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
                    <input type="text" id="filter-name" name="search" className="cs_form_field" placeholder="Search by doctor or hospital" autoComplete="off" value={searchName} onChange={e => handleFilterChange(setSearchName)(e.target.value)} />
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
          {filteredDoctors.length > 0 && (
            <p className="text-center cs_mb_24">
              Showing {pageStart + 1}–{Math.min(pageStart + doctorsPerPage, filteredDoctors.length)} of {filteredDoctors.length} doctors
            </p>
          )}
          <div className="row cs_gap_y_24 cs_mb_48 cs_mb_lg_40 justify-content-center">
            {visibleDoctors.map(doc => (
              <div key={doc.id} className="col-lg-4 col-sm-6">
                <DoctorCard doctor={doc} />
              </div>
            ))}
            {visibleDoctors.length === 0 && (
              <p className="text-center mb-0">No doctors match your search. Try a different specialty or name.</p>
            )}
          </div>
          {totalPages > 1 && (
            <nav aria-label="Doctors pagination">
              <ul className="cs_pagination cs_mp_0 justify-content-center">
                <li>
                  <a
                    href="#"
                    className="cs_pagination_nav"
                    aria-label="Previous page"
                    onClick={e => { e.preventDefault(); if (safePage > 1) goToPage(safePage - 1); }}
                    style={{ opacity: safePage === 1 ? 0.5 : 1 }}
                  >
                    ← Prev
                  </a>
                </li>
                {getPageNumbers().map((page, i) =>
                  page === '...' ? (
                    <li key={`ellipsis-${i}`}><span>...</span></li>
                  ) : (
                    <li key={page} className={safePage === page ? 'active' : ''}>
                      <a href="#" onClick={e => { e.preventDefault(); goToPage(page); }}>
                        {page}
                      </a>
                    </li>
                  )
                )}
                <li>
                  <a
                    href="#"
                    className="cs_pagination_nav"
                    aria-label="Next page"
                    onClick={e => { e.preventDefault(); if (safePage < totalPages) goToPage(safePage + 1); }}
                    style={{ opacity: safePage === totalPages ? 0.5 : 1 }}
                  >
                    Next →
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </section>

      <button type="button" id="scrollToTopBtn" className="cs_scrollup_btn" onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </main>
  );
};

export default OurDoctors;

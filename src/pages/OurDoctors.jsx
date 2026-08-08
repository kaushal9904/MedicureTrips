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
  { name: 'Dr. Ashok Rajgopal', type: 'Orthopedic Surgeon', hospital: 'Medanta – The Medicity, Gurugram', focus: 'Robotic Knee Replacement, Hip Replacement, Sports Injuries', img: '/images/Dr. Ashok Rajgopal.jpg' },
  { name: 'Dr. Ashok Seth', type: 'Interventional Cardiologist', hospital: 'Fortis Escorts Heart Institute, New Delhi', focus: 'Interventional Cardiology, Angioplasty, TAVI/TAVR', img: '/images/Dr. Ashok Seth.jpg' },
  { name: 'Dr. Ashwin Mallya', type: 'Surgical Oncologist', hospital: 'Fortis Memorial Research Institute, Gurugram', focus: 'Gastrointestinal & Hepato-Pancreato-Biliary Cancer Surgery', img: '/images/Dr. Ashwin Mallya.jpg' },
  { name: 'Dr. Balbir Singh', type: 'Cardiac Electrophysiologist', hospital: 'Max Super Speciality Hospital, Saket, New Delhi', focus: 'Electrophysiology, Pacemaker, Arrhythmia Management', img: '/images/Dr. Balbir Singh.jpg' },
  { name: 'Dr. Bipin Walia', type: 'Neurosurgeon', hospital: 'Max Super Speciality Hospital, New Delhi', focus: 'Complex Spine Surgery', img: '/images/Dr. Bipin Walia.jpg' },
  { name: 'Dr. Deepak Dubey', type: 'Urologist', hospital: 'Manipal Hospital, Bengaluru', focus: 'Kidney Transplant, Robotic Urology', img: '/images/Dr. Deepak Dubey.jpg' },
  { name: 'Dr. Deepak Govil', type: 'Transplant Surgeon', hospital: 'Max Super Speciality Hospital, New Delhi', focus: 'Liver Transplant', img: '/images/Dr. Deepak Govil.jpg' },
  { name: 'Dr. Deepak Sarin', type: 'Medical Oncologist', hospital: 'BLK-Max Super Speciality Hospital, New Delhi', focus: 'Medical Oncology, Head & Neck Oncology', img: '/images/Dr. Deepak Sarin.jpg' },
  { name: 'Dr. Devi Prasad Shetty', type: 'Cardiac Surgeon', hospital: 'Narayana Health, Bengaluru', focus: 'Adult & Pediatric Cardiac Surgery, Heart Transplant', img: '/images/Dr. Devi Prasad Shetty.jpg' },
  { name: 'Dr. Dinshaw Pardiwala', type: 'Orthopedic Surgeon', hospital: 'Kokilaben Dhirubhai Ambani Hospital, Mumbai', focus: 'Sports Medicine, Arthroscopy', img: '/images/Dr. Dinshaw Pardiwala.jpg' },
  { name: 'Dr. Feroz Pasha', type: 'Surgical Oncologist', hospital: 'Apollo Hospitals, Chennai', focus: 'Uro-Oncology, Gynecologic Oncology, Robotic Cancer Surgery', img: '/images/Dr. Feroz Pasha.jpg' },
  { name: 'Dr. G. K. Jadhav', type: 'Radiation Oncologist', hospital: 'Apollo Proton Cancer Centre, Chennai', focus: 'High-Precision Radiation Therapy, SRS, SBRT', img: '/images/Dr. G. K. Jadhav.jpg' },
  { name: 'Dr. H. S. Chhabra', type: 'Orthopedic & Spine Surgeon', hospital: 'Indian Spinal Injuries Centre', focus: 'Spine Surgery', img: '/images/Dr. H. S. Chhabra.jpg' },
  { name: 'Dr. Harit Chaturvedi', type: 'Surgical Oncologist', hospital: 'Max Super Speciality Hospital, Saket, New Delhi', focus: 'Breast Cancer, GI Cancer, Thoracic Oncology', img: '/images/Dr. Harit Chaturvedi.jpg' },
  { name: 'Dr. Himanshu Verma', type: 'Vascular Surgeon', hospital: 'Fortis Memorial Research Institute, Gurugram', focus: 'Varicose Veins, Endovascular Surgery', img: '/images/Dr. Himanshu Verma.jpg' },
  { name: 'Dr. Hitesh Garg', type: 'Spine Surgeon', hospital: 'Artemis Hospital, Gurugram', focus: 'Adult & Pediatric Spine Surgery, Deformity Correction, Robotic Spine Surgery', img: '/images/Dr. Hitesh Garg.jpg' },
  { name: 'Dr. IPS Oberoi', type: 'Orthopedic Surgeon', hospital: 'Artemis Hospital, Gurugram', focus: 'Joint Replacement, Arthroscopy, Sports Medicine', img: '/images/Dr. IPS Oberoi.jpg' },
  { name: 'Dr. Jyoti Wadhwa', type: 'Medical Oncologist', hospital: 'Apollo Hospitals, New Delhi', focus: 'Breast Cancer, GI Oncology, Chemotherapy', img: '/images/Dr. Jyoti Wadhwa.jpg' },
  { name: 'Dr. K. K. Saxena', type: 'Vascular Surgeon', hospital: 'BLK-Max Super Speciality Hospital, New Delhi', focus: 'Peripheral Vascular Surgery, Dialysis Access Surgery', img: '/images/Dr. K. K. Saxena.jpg' },
  { name: 'Dr. K. Sridhar', type: 'Neurosurgeon', hospital: 'Apollo Hospitals, Chennai', focus: 'Skull Base & Brain Tumor Surgery', img: '/images/Dr. K. Sridhar.jpg' },
  { name: 'Dr. M. C. Uthappa', type: 'Radiation Oncologist', hospital: 'Kokilaben Dhirubhai Ambani Hospital, Mumbai', focus: 'Precision Radiation Oncology, VMAT, IGRT', img: '/images/Dr. M. C. Uthappa.jpg' },
  { name: 'Dr. M. G. Bhat', type: 'Vascular Surgeon', hospital: 'Manipal Hospital, Bengaluru', focus: 'Endovascular Interventions, Diabetic Foot', img: '/images/Dr. M. G. Bhat.jpg' },
  { name: 'Dr. Manav Wadhawan', type: 'Transplant Surgeon', hospital: 'BLK-Max Super Speciality Hospital, New Delhi', focus: 'Liver Transplant', img: '/images/Dr. Manav Wadhawan.jpg' },
  { name: 'Dr. Mohan Keshavamurthy', type: 'Urologist', hospital: 'Fortis Hospital, Bengaluru', focus: 'Kidney Transplant, Reconstructive Urology', img: '/images/Dr. Mohan Keshavamurthy.jpg' },
  { name: 'Dr. Muralidhar Kanchi', type: 'Vascular Surgeon', hospital: 'Narayana Health City, Bengaluru', focus: 'Vascular & Endovascular Procedures', img: '/assets/img/team_img_4.webp' },
  { name: 'Dr. Naresh Trehan', type: 'Cardiac Surgeon', hospital: 'Medanta – The Medicity, Gurugram', focus: 'Cardiac Surgery, CABG, Valve Surgery', img: '/assets/img/team_img_5.webp' },
  { name: 'Dr. Narmada Prasad Gupta', type: 'Urologist', hospital: 'Medanta – The Medicity, Gurugram', focus: 'Uro-Oncology, Prostate Cancer, Robotic Surgery', img: '/assets/img/team_img_6.webp' },
  { name: 'Dr. Nikhil Kumar', type: 'Cardiac Electrophysiologist', hospital: 'Fortis Memorial Research Institute, Gurugram', focus: 'Cardiac Electrophysiology, Pacemaker, ICD & CRT Implantation', img: '/assets/img/team_img_7.webp' },
  { name: 'Dr. Niti Raizada', type: 'Medical Oncologist', hospital: 'Max Super Speciality Hospital, Saket, New Delhi', focus: 'Breast Cancer, Gynecologic Oncology, Immunotherapy', img: '/assets/img/team_img_8.webp' },
  { name: 'Dr. Paresh Doshi', type: 'Neurosurgeon', hospital: 'Jaslok Hospital, Mumbai', focus: 'Functional Neurosurgery, DBS', img: '/assets/img/team_img_9.webp' },
  { name: 'Dr. Pradeep Chowbey', type: 'Transplant & GI Surgeon', hospital: 'Max Healthcare, New Delhi', focus: 'Robotic & GI Surgery for Transplant', img: '/assets/img/team_img_10.webp' },
  { name: 'Dr. Pramod Kumar Julka', type: 'Vascular Surgeon', hospital: 'Artemis Hospital, Gurugram', focus: 'Vascular Access Surgery, Peripheral Vascular Disease', img: '/assets/img/team_img_11.webp' },
  { name: 'Dr. Rahul Bhargava', type: 'Medical Oncologist', hospital: 'Fortis Memorial Research Institute, Gurugram', focus: 'Hemato-Oncology, Bone Marrow Transplant', img: '/assets/img/team_img_12.webp' },
  { name: 'Dr. Raj Nagarkar', type: 'Surgical Oncologist', hospital: 'HCG Cancer Centre, Nashik', focus: 'Head & Neck, Breast, GI Cancer Surgery', img: '/assets/img/team_img_13.webp' },
  { name: 'Dr. Raja T.', type: 'Medical Oncologist', hospital: 'Apollo Proton Cancer Centre, Chennai', focus: 'Gastrointestinal Oncology, Precision Oncology', img: '/assets/img/team_img_14.webp' },
  { name: 'Dr. Rajagopalan Krishnan', type: 'Spine Surgeon', hospital: 'Apollo Hospitals, Chennai', focus: 'Cervical & Lumbar Spine Surgery', img: '/assets/img/team_img_15.webp' },
  { name: 'Dr. Rajeev Bedi', type: 'Surgical Oncologist', hospital: 'BLK-Max Super Speciality Hospital, New Delhi', focus: 'Head & Neck Cancer Surgery, General Surgical Oncology', img: '/assets/img/team_img_16.webp' },
  { name: 'Dr. Rajendra Prasad', type: 'Vascular Surgeon', hospital: 'Medanta – The Medicity, Gurugram', focus: 'Endovascular Aneurysm Repair (EVAR), Limb Salvage', img: '/assets/img/team_img_17.webp' },
  { name: 'Dr. Rajendra Toprani', type: 'Medical Oncologist', hospital: 'Kokilaben Dhirubhai Ambani Hospital, Mumbai', focus: 'Medical Oncology, Chemotherapy, Precision Medicine', img: '/assets/img/team_img_18.webp' },
  { name: 'Dr. Rajesh Ahlawat', type: 'Urologist', hospital: 'Medanta – The Medicity, Gurugram', focus: 'Kidney Transplant, Robotic Urology, Uro-Oncology', img: '/assets/img/team_img_19.webp' },
  { name: 'Dr. Rajesh Taneja', type: 'Urologist', hospital: 'Indraprastha Apollo Hospital, New Delhi', focus: 'Kidney Stones, Urologic Cancer, Robotic Surgery', img: '/assets/img/team_img_20.webp' },
  { name: 'Dr. Rajesh Verma', type: 'Orthopedic Surgeon', hospital: 'Shalby International Hospital, Gurugram', focus: 'Joint Replacement, Robotic Knee & Hip Replacement, Revision Arthroplasty', img: '/assets/img/team_img_21.webp' },
  { name: 'Dr. Rajiv Parakh', type: 'Vascular Surgeon', hospital: 'Medanta – The Medicity, Gurugram', focus: 'Peripheral Vascular Surgery, Aortic Aneurysm, Diabetic Foot', img: '/assets/img/team_img_1.webp' },
  { name: 'Dr. Rajiv Yadav', type: 'Urologist', hospital: 'AIIMS (Former), Senior Urologist, New Delhi', focus: 'Reconstructive Urology, Uro-Oncology', img: '/assets/img/team_img_2.webp' },
  { name: 'Dr. Rakesh Jalali', type: 'Radiation Oncologist', hospital: 'Apollo Proton Cancer Centre, Chennai', focus: 'Proton Therapy, Neuro-Oncology, Brain & Spine Tumors', img: '/assets/img/team_img_3.webp' },
  { name: 'Dr. Ramanan S. G.', type: 'Medical Oncologist', hospital: 'Apollo Hospitals, Chennai', focus: 'Gastrointestinal, Thoracic & Lung Cancer', img: '/assets/img/team_img_4.webp' },
  { name: 'Dr. Ramneek Mahajan', type: 'Orthopedic Surgeon', hospital: 'Max Smart Super Speciality Hospital, New Delhi', focus: 'Hip & Knee Replacement', img: '/assets/img/team_img_5.webp' },
  { name: 'Dr. Rana Patir', type: 'Neurosurgeon', hospital: 'Fortis Memorial Research Institute, Gurugram', focus: 'Brain Tumor, Skull Base Surgery', img: '/assets/img/team_img_6.webp' },
  { name: 'Dr. S. K. S. Marya', type: 'Spine & Orthopedic Surgeon', hospital: 'Medanta – The Medicity, Gurugram', focus: 'Spine & Orthopedic Reconstruction', img: '/assets/img/team_img_7.webp' },
  { name: 'Dr. S. Ramesh', type: 'Vascular Surgeon', hospital: 'Apollo Hospitals, Chennai', focus: 'Carotid Artery Surgery, Peripheral Vascular Disease', img: '/assets/img/team_img_8.webp' },
  { name: 'Dr. Sajal Kakkar', type: 'Radiation Oncologist', hospital: 'Medanta – The Medicity, Gurugram', focus: 'Precision Radiation Oncology, SBRT, Head & Neck Cancer', img: '/assets/img/team_img_9.webp' },
  { name: 'Dr. Sandeep Guleria', type: 'Transplant Surgeon', hospital: 'Indraprastha Apollo Hospital, New Delhi', focus: 'Kidney Transplant', img: '/assets/img/team_img_10.webp' },
  { name: 'Dr. Sandeep Mahajan', type: 'Transplant Surgeon', hospital: 'Max Super Speciality Hospital, New Delhi', focus: 'Kidney Transplant', img: '/assets/img/team_img_11.webp' },
  { name: 'Dr. Sandeep Nayak', type: 'Surgical Oncologist', hospital: 'Manipal Hospital, Bengaluru', focus: 'Robotic Cancer Surgery, GI Oncology, Breast Cancer', img: '/assets/img/team_img_12.webp' },
  { name: 'Dr. Sandeep Vaishya', type: 'Neurosurgeon', hospital: 'Fortis Memorial Research Institute, Gurugram', focus: 'Brain Tumor, Spine Surgery', img: '/assets/img/team_img_13.webp' },
  { name: 'Dr. Sanjay Desai', type: 'Orthopedic Surgeon', hospital: 'Kokilaben Dhirubhai Ambani Hospital, Mumbai', focus: 'Joint Replacement', img: '/assets/img/team_img_14.webp' },
  { name: 'Dr. Sanjay Kumar', type: 'Vascular Surgeon', hospital: 'Max Super Speciality Hospital, New Delhi', focus: 'Vascular & Endovascular Surgery', img: '/assets/img/team_img_15.webp' },
  { name: 'Dr. Satyaki P. Nambala', type: 'Vascular Surgeon', hospital: 'Apollo Hospitals, Chennai', focus: 'Aortic Surgery, Peripheral Arterial Disease', img: '/assets/img/team_img_16.webp' },
  { name: 'Dr. Somashekhar B. S.', type: 'Spine Surgeon', hospital: 'Manipal Hospital, Bengaluru', focus: 'Minimally Invasive Spine Surgery', img: '/assets/img/team_img_17.webp' },
  { name: 'Dr. Somashekhar S. P.', type: 'Surgical Oncologist', hospital: 'Manipal Hospital, Bengaluru', focus: 'Breast Cancer, GI Oncology, Robotic Cancer Surgery', img: '/assets/img/team_img_18.webp' },
  { name: 'Dr. Srinivas Chilukuri', type: 'Radiation Oncologist', hospital: 'Apollo Proton Cancer Centre, Chennai', focus: 'Proton Therapy, Head & Neck Cancer, Pediatric Oncology', img: '/assets/img/team_img_19.webp' },
  { name: 'Dr. Subhash Jangid', type: 'Orthopedic Surgeon', hospital: 'Fortis Memorial Research Institute, Gurugram', focus: 'Knee Replacement, Hip Replacement, Robotic Orthopedics', img: '/assets/img/team_img_20.webp' },
  { name: 'Dr. Sudhir Dubey', type: 'Neurosurgeon', hospital: 'Medanta – The Medicity, Gurugram', focus: 'Minimally Invasive Brain Surgery', img: '/assets/img/team_img_21.webp' },
  { name: 'Dr. Sudhir Rawal', type: 'Urologist', hospital: 'Max Super Speciality Hospital, New Delhi', focus: 'Robotic Urology, Uro-Oncology', img: '/assets/img/team_img_1.webp' },
  { name: 'Dr. Swarupa Mitra', type: 'Radiation Oncologist', hospital: 'Fortis Memorial Research Institute, Gurugram', focus: 'Breast Cancer, GI Cancer, Advanced Radiotherapy', img: '/assets/img/team_img_2.webp' },
  { name: 'Dr. Syed Nadeem', type: 'Surgical Oncologist', hospital: 'Medanta – The Medicity, Gurugram', focus: 'Breast Cancer, Thoracic Oncology, Minimally Invasive Cancer Surgery', img: '/assets/img/team_img_3.webp' },
  { name: 'Dr. Tejinder Kataria', type: 'Radiation Oncologist', hospital: 'Medanta – The Medicity, Gurugram', focus: 'IMRT, IGRT, SBRT', img: '/assets/img/team_img_4.webp' },
  { name: 'Dr. Upendra Kaul', type: 'Interventional Cardiologist', hospital: 'Batra Hospital & Medical Research Centre, New Delhi', focus: 'Interventional Cardiology, Coronary Artery Disease', img: '/assets/img/team_img_5.webp' },
  { name: 'Dr. V. S. Mehta', type: 'Neurosurgeon', hospital: 'Paras Health, Gurugram', focus: 'Brain & Spine Surgery', img: '/assets/img/team_img_6.webp' },
  { name: 'Dr. Vedant Kabra', type: 'Surgical Oncologist', hospital: 'Fortis Memorial Research Institute, Gurugram', focus: 'Gastrointestinal, Hepatobiliary & Pancreatic Cancer Surgery', img: '/assets/img/team_img_7.webp' },
  { name: 'Dr. Vijay Kumar Chopra', type: 'Interventional Cardiologist', hospital: 'Max Super Speciality Hospital, Saket, New Delhi', focus: 'Interventional Cardiology, Angioplasty, Preventive Cardiology', img: '/assets/img/team_img_8.webp' },
  { name: 'Dr. Vikas Kumar', type: 'Radiation Oncologist', hospital: 'Artemis Hospital, Gurugram', focus: 'IMRT, IGRT, Stereotactic Radiosurgery (SRS)', img: '/assets/img/team_img_9.webp' },
  { name: 'Dr. Vikram Sharma', type: 'Urologist', hospital: 'Fortis Memorial Research Institute, Gurugram', focus: 'Endourology, Kidney Stones, Robotic Surgery', img: '/assets/img/team_img_10.webp' },
  { name: 'Dr. Vinay Samuel Gaikwad', type: 'Surgical Oncologist', hospital: 'Kokilaben Dhirubhai Ambani Hospital, Mumbai', focus: 'Breast Cancer, GI Oncology, Robotic Surgical Oncology', img: '/assets/img/team_img_11.webp' },
  { name: 'Dr. Vinod Raina', type: 'Medical Oncologist', hospital: 'Fortis Memorial Research Institute, Gurugram', focus: 'Lung Cancer, Breast Cancer, GI Cancer', img: '/assets/img/team_img_12.webp' },
  { name: 'Dr. Virender Banga', type: 'Transplant Surgeon', hospital: 'Artemis Hospital, Gurugram', focus: 'Kidney Transplant', img: '/assets/img/team_img_13.webp' },
  { name: 'Dr. Vivek Tandon', type: 'Radiation Oncologist', hospital: 'Max Super Speciality Hospital, Saket, New Delhi', focus: 'Head & Neck, Prostate Cancer, Image-Guided Radiotherapy', img: '/assets/img/team_img_14.webp' },
  { name: 'Dr. Vivek Vij', type: 'Transplant Surgeon', hospital: 'Fortis Memorial Research Institute, Gurugram', focus: 'Liver Transplant', img: '/assets/img/team_img_15.webp' },
  { name: 'Dr. Yash Gulati', type: 'Orthopedic Surgeon', hospital: 'Indraprastha Apollo Hospital, New Delhi', focus: 'Joint Replacement, Spine Surgery', img: '/assets/img/team_img_16.webp' },
  { name: 'Dr. Yugal K. Mishra', type: 'Cardiac Surgeon', hospital: 'Manipal Hospital, New Delhi', focus: 'Minimally Invasive Cardiac Surgery, CABG', img: '/assets/img/team_img_17.webp' },
  { name: 'Dr. Z. S. Meharwal', type: 'Cardiac Surgeon', hospital: 'Fortis Escorts Heart Institute, New Delhi', focus: 'CABG, Valve Repair & Replacement', img: '/assets/img/team_img_18.webp' },
];

const doctorTypes = [...new Set(allDoctors.map(d => d.type))];
const doctorsPerPage = 9;

const OurDoctors = () => {
  const [filterType, setFilterType] = useState('');
  const [searchName, setSearchName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredDoctors = allDoctors.filter(doc => {
    const matchesType = !filterType || doc.type === filterType;
    const matchesName = !searchName || doc.name.toLowerCase().includes(searchName.toLowerCase());
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
                    <input type="text" id="filter-name" name="search" className="cs_form_field" placeholder="Search by doctor name" autoComplete="off" value={searchName} onChange={e => handleFilterChange(setSearchName)(e.target.value)} />
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
            {visibleDoctors.map((doc, i) => (
              <div key={i} className="col-lg-4 col-sm-6">
                <div className="cs_team_style_2 cs_radius_20 position-relative overflow-hidden">
                  <div className="cs_team_img">
                    <img src={doc.img} alt={`${doc.name} photo`} loading="lazy" decoding="async" />
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

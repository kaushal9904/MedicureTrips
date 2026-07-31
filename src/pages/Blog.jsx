import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    img: '/assets/img/post_img_1.webp',
    day: '12',
    month: 'Apr',
    category: 'Cardiology',
    duration: '5 min read',
    title: '5 Early Signs of Heart Disease You Should Never Ignore',
    author: 'Admin',
  },
  {
    id: 2,
    img: '/assets/img/post_img_2.webp',
    day: '11',
    month: 'Apr',
    category: 'Mental Wellness',
    duration: '7 min read',
    title: 'Mind-Body Connection: How Stress Affects Physical Health',
    author: 'Admin',
  },
  {
    id: 3,
    img: '/assets/img/post_img_3.webp',
    day: '10',
    month: 'Apr',
    category: 'Orthopedics',
    duration: '3 min read',
    title: 'Robotic Knee Replacement: Faster Recovery & Less Pain',
    author: 'Admin',
  },
  {
    id: 4,
    img: '/assets/img/post_img_4.webp',
    day: '09',
    month: 'Apr',
    category: 'Maternity',
    duration: '8 min read',
    title: 'Post-surgery Care Tips For Working Parents',
    author: 'Admin',
  },
  {
    id: 5,
    img: '/assets/img/post_img_5.webp',
    day: '08',
    month: 'Apr',
    category: 'Oncology',
    duration: '6 min read',
    title: 'Understanding Cancer Screenings: When to Start & What to Expect',
    author: 'Admin',
  },
  {
    id: 6,
    img: '/assets/img/post_img_6.webp',
    day: '07',
    month: 'Apr',
    category: 'Neurology',
    duration: '4 min read',
    title: 'Early Warning Signs of Stroke: B.E. F.A.S.T Guide',
    author: 'Admin',
  },
  {
    id: 7,
    img: '/assets/img/post_img_7.webp',
    day: '06',
    month: 'Apr',
    category: 'Wellness Tips',
    duration: '7 min read',
    title: 'Reversing Prediabetes: Lifestyle Changes That Work',
    author: 'Admin',
  },
  {
    id: 8,
    img: '/assets/img/post_img_8.webp',
    day: '05',
    month: 'Apr',
    category: 'Cardiology',
    duration: '5 min read',
    title: 'When To Keep Your Child Home vs Bring to Medicure Trip Sick Bay',
    author: 'Admin',
  },
  {
    id: 9,
    img: '/assets/img/post_img_9.webp',
    day: '04',
    month: 'Apr',
    category: 'Orthopedics',
    duration: '9 min read',
    title: 'Braces vs Clear Aligners: Cost, Time & Comfort',
    author: 'Admin',
  },
];

const Blog = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" style={{ backgroundImage: "url('/assets/img/page_header_bg.webp')" }}>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Blog</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Blog</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="cs_blog_section_1">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_48 text-center">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_12">// Latest News &amp; Blogs</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Parenting Guides, and Stories From Our <br /> Pediatric Team Trusted by Families</h2>
          </div>
          <div className="row cs_gap_y_48 justify-content-center">
            {blogPosts.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6">
                <article className="cs_post_style_3">
                  <Link to="/blog-details.html" aria-label="Read the post details" className="cs_post_img cs_radius_20 cs_mb_24">
                    <img src={post.img} alt="Post image" />
                    <span className="cs_post_date cs_accent_bg cs_radius_10 cs_center">
                      <span className="cs_post_date_day cs_fs_40 cs_semibold cs_white_color cs_primary_font">{post.day}</span>
                      <span className="cs_white_color">{post.month}</span>
                    </span>
                  </Link>
                  <div className="cs_post_info">
                    <div className="cs_post_meta_wrapper cs_mb_14">
                      <div className="cs_post_author">
                        <span className="cs_author_icon cs_center cs_radius_50">
                          <img src="/assets/img/favico.svg" alt="Author icon" />
                        </span>
                        <span className="cs_author_title cs_fs_14">By {post.author}</span>
                      </div>
                      <div className="cs_post_meta cs_fs_14">
                        <img src="/assets/img/icons/time-line.svg" alt="Timer icon" />
                        <span className="cs_reading_duration">{post.duration}</span>
                      </div>
                    </div>
                    <h3 className="cs_post_title cs_fs_24 cs_medium mb-0">
                      <Link to="/blog-details.html" aria-label="Read the post details">{post.title}</Link>
                    </h3>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <nav aria-label="Blog pagination">
            <ul className="cs_pagination cs_mp_0 justify-content-center">
              <li><a href="#" aria-label="Previous page"><img src="/assets/img/icons/arrow-right.svg" alt="Previous" style={{ transform: 'rotate(180deg)' }} /></a></li>
              <li className="active"><a href="#">01</a></li>
              <li><a href="#">02</a></li>
              <li><a href="#">03</a></li>
              <li><a href="#" aria-label="Next page"><img src="/assets/img/icons/arrow-right.svg" alt="Next" /></a></li>
            </ul>
          </nav>
        </div>
      </section>

      <button type="button" id="scrollToTopBtn" className="cs_scrollup_btn" onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </main>
  );
};

export default Blog;

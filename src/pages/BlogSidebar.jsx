import Link from '../components/TrackedLink';
const blogPosts = [
  {
    id: 1,
    img: '/assets/img/post_img_19.webp',
    day: '12',
    month: 'Apr',
    category: 'Cardiology',
    duration: '5 min read',
    title: '5 Early Signs of Heart Disease You Should Never Ignore',
    author: 'Admin',
  },
  {
    id: 2,
    img: '/assets/img/post_img_20.webp',
    day: '11',
    month: 'Apr',
    category: 'Mental Wellness',
    duration: '7 min read',
    title: 'Mind-Body Connection: How Stress Affects Physical Health',
    author: 'Admin',
  },
  {
    id: 3,
    img: '/assets/img/post_img_21.webp',
    day: '10',
    month: 'Apr',
    category: 'Orthopedics',
    duration: '3 min read',
    title: 'Robotic Knee Replacement: Faster Recovery & Less Pain',
    author: 'Admin',
  },
  {
    id: 4,
    img: '/assets/img/post_img_22.webp',
    day: '09',
    month: 'Apr',
    category: 'Maternity',
    duration: '8 min read',
    title: 'Post-surgery Care Tips For Working Parents',
    author: 'Admin',
  },
  {
    id: 5,
    img: '/assets/img/post_img_23.webp',
    day: '08',
    month: 'Apr',
    category: 'Oncology',
    duration: '6 min read',
    title: 'Understanding Cancer Screenings: When to Start & What to Expect',
    author: 'Admin',
  },
  {
    id: 6,
    img: '/assets/img/post_img_24.webp',
    day: '07',
    month: 'Apr',
    category: 'Neurology',
    duration: '4 min read',
    title: 'Early Warning Signs of Stroke: B.E. F.A.S.T Guide',
    author: 'Admin',
  },
];

const categories = [
  { name: 'Cardiology', count: 12 },
  { name: 'Neurology', count: 8 },
  { name: 'Orthopedics', count: 10 },
  { name: 'Maternity & Child', count: 6 },
  { name: 'Oncology', count: 5 },
  { name: 'Wellness Tips', count: 14 },
];

const recentPosts = [
  { img: '/assets/img/post_img_16.webp', date: 'April 15, 2026', title: 'Understanding Diabetes Management' },
  { img: '/assets/img/post_img_17.webp', date: 'April 14, 2026', title: 'Mental Health After Surgery' },
  { img: '/assets/img/post_img_18.webp', date: 'April 13, 2026', title: 'Pediatric Vaccination Guide' },
];

const tags = ['Heart Health', 'Diabetes Care', 'Mental Wellness', 'Physiotherapy', 'Vaccination', 'Nutrition'];

const BlogSidebar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" style={{ backgroundImage: "url('/assets/img/page_header_bg.webp')" }}>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Blog with Sidebar</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Blog with Sidebar</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Blog Sidebar Section */}
      <div className="cs_blog_sidebar_section">
        <div className="container">
          <div className="row cs_gap_y_40">
            {/* Main Content */}
            <div className="col-lg-8">
              <div className="cs_blog_posts_list">
                {blogPosts.map((post) => (
                  <article key={post.id} className="cs_post_style_3">
                    <Link to="/blog-details" aria-label="Read the post details" className="cs_post_img cs_radius_20 cs_mb_15">
                      <img src={post.img} alt="Post image" loading="lazy" decoding="async" />
                      <span className="cs_post_date cs_accent_bg cs_radius_10 cs_center">
                        <span className="cs_post_date_day cs_fs_40 cs_semibold cs_white_color cs_primary_font">{post.day}</span>
                        <span className="cs_white_color">{post.month}</span>
                      </span>
                    </Link>
                    <div className="cs_post_info">
                      <div className="cs_post_meta_wrapper cs_mb_12">
                        <div className="cs_post_author">
                          <span className="cs_author_icon cs_center cs_radius_50">
                            <img src="/assets/img/favicon.webp" alt="Author icon" />
                          </span>
                          <span className="cs_author_title cs_fs_14">By {post.author}</span>
                        </div>
                        <div className="cs_post_meta cs_fs_14">
                          <img src="/assets/img/icons/time-line.svg" alt="Timer icon" />
                          <span className="cs_reading_duration">{post.duration}</span>
                        </div>
                      </div>
                      <h2 className="cs_post_title cs_fs_24 cs_medium mb-0">
                        <Link to="/blog-details" aria-label="Read the post details">{post.title}</Link>
                      </h2>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <nav aria-label="Blog pagination">
                <ul className="cs_pagination cs_mp_0">
                  <li>
                    <a href="#" aria-label="Previous page">
                      <img src="/assets/img/icons/arrow-right.svg" alt="Previous" style={{ transform: 'rotate(180deg)' }} />
                    </a>
                  </li>
                  <li className="active"><a href="#" aria-label="Page 1">01</a></li>
                  <li><a href="#" aria-label="Page 2">02</a></li>
                  <li><a href="#" aria-label="Page 3">03</a></li>
                  <li>
                    <a href="#" aria-label="Next page">
                      <img src="/assets/img/icons/arrow-right.svg" alt="Next" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <aside className="cs_sidebar_style_1">
                {/* Search */}
                <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_mb_12">Search</h3>
                  <form className="cs_search_form position-relative" onSubmit={e => e.preventDefault()}>
                    <input type="search" name="search" placeholder="Search articles here..." />
                    <button type="submit" aria-label="Search">
                      <img src="/assets/img/icons/search.svg" alt="Search icon" />
                    </button>
                  </form>
                </div>

                {/* Categories */}
                <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_mb_12">Categories</h3>
                  <ul className="cs_categories_list cs_mp_0">
                    {categories.map((cat, i) => (
                      <li key={i}>
                        <a href="#"><span>{cat.name}</span><span>({cat.count})</span></a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent Posts */}
                <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_mb_12">Recent Posts</h3>
                  <ul className="cs_recent_posts_list cs_mp_0">
                    {recentPosts.map((post, i) => (
                      <li key={i} className="cs_post_style_6">
                        <Link to="/blog-details" aria-label="Read the post details" className="cs_post_thumb cs_radius_5">
                          <img src={post.img} alt="Post thumbnail" loading="lazy" decoding="async" />
                        </Link>
                        <div className="cs_post_info">
                          <span className="cs_post_date cs_mb_6">
                            <img src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                            {post.date}
                          </span>
                          <h3 className="cs_post_title cs_fs_16 cs_semibold cs_secondary_font mb-0">
                            <Link to="/blog-details" aria-label="Read the post details">{post.title}</Link>
                          </h3>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Promo Widget */}
                <div className="cs_sidebar_widget cs_promo_widget cs_radius_20 cs_bg_filed text-center" style={{ backgroundImage: "url('/assets/img/team_img_21.webp')" }}>
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_white_color cs_mb_24">Ask Our Experts</h3>
                  <p className="cs_promo_desc cs_white_color cs_mb_12">Have a health concern? Get personalized advice from Medicure Trip specialists.</p>
                  <Link to="/appointment" aria-label="Book consultation" className="cs_btn_style_1 cs_white_color cs_semibold cs_radius_5">
                    <img src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                    <span>Book Consultation</span>
                  </Link>
                </div>

                {/* Tags */}
                <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_mb_12">Popular Tags</h3>
                  <ul className="cs_tags_list cs_mp_0">
                    {tags.map((tag, i) => (
                      <li key={i}><a href="#">{tag}</a></li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>

      <button type="button" id="scrollToTopBtn" className="cs_scrollup_btn" onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </main>
  );
};

export default BlogSidebar;

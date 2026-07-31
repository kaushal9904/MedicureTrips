import { Link } from 'react-router-dom';

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

const BlogDetails = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" style={{ backgroundImage: "url('/assets/img/page_header_bg.webp')" }}>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Blog Details</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Blog Details</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Blog Details Section */}
      <section className="cs_blog_section_1">
        <div className="container">
          <div className="row cs_gap_y_40">
            {/* Main Content */}
            <div className="col-lg-8">
              <article className="cs_blog_details">
                {/* Thumbnail */}
                <div className="cs_blog_details_thumb cs_radius_20 cs_mb_15">
                  <img src="/assets/img/post_img_19.webp" alt="Early Warning Signs of Stroke: B.E. F.A.S.T Guide" />
                  <span className="cs_post_date cs_accent_bg cs_radius_10 cs_center_column">
                    <span className="cs_post_date_day cs_fs_40 cs_semibold cs_white_color cs_primary_font">12</span>
                    <span className="cs_white_color">Apr</span>
                  </span>
                </div>

                {/* Meta */}
                <div className="cs_blog_details_meta cs_mb_12">
                  <div className="cs_post_author">
                    <span className="cs_author_icon cs_center cs_radius_50">
                      <img src="/assets/img/favicon.webp" alt="Author icon" />
                    </span>
                    <span className="cs_author_title cs_fs_16">By Admin</span>
                  </div>
                  <div className="cs_post_meta cs_fs_16">
                    <img src="/assets/img/icons/time-line.svg" alt="Timer icon" />
                    <span className="cs_reading_duration">5 min read</span>
                  </div>
                </div>

                <h2>Early Warning Signs of Stroke: B.E. F.A.S.T Guide</h2>
                <p>A stroke is a medical emergency that occurs when blood flow to a part of the brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients. Every minute counts — the faster a stroke is recognized and treated, the better the chances of survival and recovery. The B.E. F.A.S.T. acronym is a simple yet powerful tool to help anyone identify the warning signs of a stroke and act immediately.</p>

                {/* Quote */}
                <div className="cs_blog_quote cs_mb_48 cs_mb_lg_30">
                  <blockquote>&ldquo;Time is brain. The sooner you recognize the signs of stroke and seek emergency care, the more brain tissue can be saved. Do not wait — call emergency services immediately.&rdquo;</blockquote>
                  <small>- Dr. Christopher Emory</small>
                  <span className="cs_blog_quote_icon">
                    <img src="/assets/img/icons/quote.svg" alt="Quote icon" />
                  </span>
                </div>

                <h2>Understanding Stroke: Types and Causes</h2>
                <p>There are three main types of stroke, each with different causes and treatment approaches. Understanding these differences is crucial for prevention and timely intervention.</p>

                <ul className="cs_blog_rule_list cs_mp_0 cs_mb_48 cs_mb_lg_30">
                  <li><span className="cs_rule_label cs_fs_16 cs_semibold cs_primary_color">Ischemic Stroke:</span><span className="cs_rule_value cs_fs_16 cs_secondary_color">Caused by a blood clot blocking a brain artery (most common type)</span></li>
                  <li><span className="cs_rule_label cs_fs_16 cs_semibold cs_primary_color">Hemorrhagic Stroke:</span><span className="cs_rule_value cs_fs_16 cs_secondary_color">Caused by a ruptured blood vessel bleeding into the brain</span></li>
                  <li><span className="cs_rule_label cs_fs_16 cs_semibold cs_primary_color">Transient Ischemic Attack (TIA):</span><span className="cs_rule_value cs_fs_16 cs_secondary_color">A temporary blockage — a critical warning sign of future stroke</span></li>
                </ul>

                <h2 className="cs_blog_details_h2 cs_fs_40 cs_semibold cs_mb_22">The B.E. F.A.S.T. Guide</h2>
                <p className="cs_mb_24">Use this simple acronym to remember the most common stroke symptoms and take quick action:</p>

                <div className="cs_red_flag_grid cs_mb_48 cs_mb_lg_30">
                  <div className="cs_red_flag_card cs_radius_20 cs_color_1">
                    <h3 className="cs_red_flag_title cs_fs_24 cs_medium cs_primary_color cs_mb_10">B - Balance</h3>
                    <p className="cs_fs_16 cs_secondary_color mb-0">Sudden loss of balance or coordination</p>
                  </div>
                  <div className="cs_red_flag_card cs_radius_20 cs_color_2">
                    <h3 className="cs_red_flag_title cs_fs_24 cs_medium cs_primary_color cs_mb_10">E - Eyes</h3>
                    <p className="cs_fs_16 cs_secondary_color mb-0">Sudden vision changes in one or both eyes</p>
                  </div>
                  <div className="cs_red_flag_card cs_radius_20 cs_color_3">
                    <h3 className="cs_red_flag_title cs_fs_24 cs_medium cs_primary_color cs_mb_10">F - Face</h3>
                    <p className="cs_fs_16 cs_secondary_color mb-0">Drooping on one side of the face</p>
                  </div>
                  <div className="cs_red_flag_card cs_radius_20 cs_color_4">
                    <h3 className="cs_red_flag_title cs_fs_24 cs_medium cs_primary_color cs_mb_10">A - Arms</h3>
                    <p className="cs_fs_16 cs_secondary_color mb-0">Weakness or numbness in one arm</p>
                  </div>
                  <div className="cs_red_flag_card cs_radius_20 cs_color_1">
                    <h3 className="cs_red_flag_title cs_fs_24 cs_medium cs_primary_color cs_mb_10">S - Speech</h3>
                    <p className="cs_fs_16 cs_secondary_color mb-0">Slurred or confused speech</p>
                  </div>
                  <div className="cs_red_flag_card cs_radius_20 cs_color_2">
                    <h3 className="cs_red_flag_title cs_fs_24 cs_medium cs_primary_color cs_mb_10">T - Time</h3>
                    <p className="cs_fs_16 cs_secondary_color mb-0">Call emergency services immediately</p>
                  </div>
                </div>

                <h2 className="cs_blog_details_h2 cs_fs_40 cs_semibold cs_mb_22">Risk Factors You Can Control</h2>
                <p className="cs_mb_10">Many stroke risk factors are within your control. Making lifestyle changes can significantly reduce your chances of having a stroke:</p>
                <ul className="cs_blog_check_list cs_mp_0 cs_mb_48 cs_mb_lg_24">
                  <li>
                    <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span className="cs_fs_16 cs_secondary_color">Manage high blood pressure — the leading risk factor for stroke</span>
                  </li>
                  <li>
                    <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span className="cs_fs_16 cs_secondary_color">Control diabetes and maintain healthy blood sugar levels</span>
                  </li>
                  <li>
                    <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span className="cs_fs_16 cs_secondary_color">Exercise regularly — at least 30 minutes of moderate activity daily</span>
                  </li>
                  <li>
                    <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span className="cs_fs_16 cs_secondary_color">Quit smoking and limit alcohol consumption</span>
                  </li>
                  <li>
                    <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span className="cs_fs_16 cs_secondary_color">Maintain a healthy weight and balanced diet</span>
                  </li>
                </ul>

                <h2>Why Choose Medicure Trip for Stroke Care?</h2>
                <p>Our dedicated Stroke Center is equipped with cutting-edge technology and a team of specialists ready to act at a moment&rsquo;s notice. We offer:</p>
                <ul className="cs_blog_check_list cs_mp_0 cs_mb_48 cs_mb_lg_24">
                  <li>
                    <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span className="cs_fs_16 cs_secondary_color">24/7 emergency stroke team with rapid response protocols</span>
                  </li>
                  <li>
                    <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span className="cs_fs_16 cs_secondary_color">Advanced imaging (CT, MRI) for immediate diagnosis</span>
                  </li>
                  <li>
                    <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span className="cs_fs_16 cs_secondary_color">Thrombectomy and clot-busting treatments</span>
                  </li>
                  <li>
                    <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span className="cs_fs_16 cs_secondary_color">Comprehensive rehabilitation and follow-up care</span>
                  </li>
                </ul>

                {/* Tags */}
                <div className="cs_post_tags cs_mb_48 cs_mb_lg_30">
                  <span className="cs_post_tags_title cs_fs_16 cs_primary_color">Tags:</span>
                  <ul className="cs_tags_list cs_mp_0">
                    <li><a href="#">Heart Health</a></li>
                    <li><a href="#">Medical Care</a></li>
                    <li><a href="#">Hospital</a></li>
                  </ul>
                </div>

                {/* Post Navigation */}
                <nav className="cs_post_navigation" aria-label="Post navigation">
                  <Link to="/blog-details.html" className="cs_post_nav_item cs_radius_20">
                    <span className="cs_post_nav_label cs_fs_16 cs_semibold">
                      <img src="/assets/img/icons/arrow-right.svg" alt="Previous" style={{ transform: 'rotate(180deg)' }} />
                      Previous Post
                    </span>
                    <h3 className="cs_post_nav_title cs_fs_24 cs_medium mb-0">Separation Anxiety &amp; Medical Daycare: Gentle Transitions</h3>
                  </Link>
                  <Link to="/blog-details.html" className="cs_post_nav_item cs_radius_20 cs_post_nav_next">
                    <span className="cs_post_nav_label cs_fs_16 cs_semibold">
                      Next Post
                      <img src="/assets/img/icons/arrow-right.svg" alt="Next" />
                    </span>
                    <h3 className="cs_post_nav_title cs_fs_24 cs_medium mb-0">Robotic Knee Replacement: Faster Recovery &amp; Less Pain</h3>
                  </Link>
                </nav>
              </article>

              {/* Comment Form */}
              <div className="cs_comment_form_wrap">
                <h2 className="cs_comment_form_title cs_fs_40 cs_semibold cs_mb_10">Leave a Reply</h2>
                <p className="cs_comment_form_subtitle cs_mb_24">Your email address will not be published. Required fields are marked *</p>
                <form action="#" className="cs_comment_form" onSubmit={e => e.preventDefault()}>
                  <div className="row cs_gap_y_24">
                    <div className="col-md-6">
                      <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                        <label htmlFor="comment_name" className="cs_fs_14 cs_primary_color">Name</label>
                        <input id="comment_name" type="text" name="name" placeholder="Enter your name" autoComplete="off" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                        <label htmlFor="comment_email" className="cs_fs_14 cs_primary_color">Email</label>
                        <input id="comment_email" type="email" name="email" placeholder="Enter your email" autoComplete="off" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                        <label htmlFor="comment_website" className="cs_fs_14 cs_primary_color">Website</label>
                        <input id="comment_website" type="url" name="website" placeholder="Enter your website link" autoComplete="off" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                        <label htmlFor="comment_message" className="cs_fs_14 cs_primary_color">Comment</label>
                        <textarea id="comment_message" name="comment" rows="4" placeholder="Write your comment here..."></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <label className="cs_save_check cs_fs_16 cs_secondary_color">
                        <input type="checkbox" name="save_info" />
                        <span>Save my name, email, and website in this browser for the next time I comment.</span>
                      </label>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5">
                        <span>Post A Comment</span>
                        <img src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
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
                        <Link to="/blog-details.html" aria-label="Read the post details" className="cs_post_thumb cs_radius_5">
                          <img src={post.img} alt="Post thumbnail" />
                        </Link>
                        <div className="cs_post_info">
                          <span className="cs_post_date cs_mb_6">
                            <img src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                            {post.date}
                          </span>
                          <h3 className="cs_post_title cs_fs_16 cs_semibold cs_secondary_font mb-0">
                            <Link to="/blog-details.html" aria-label="Read the post details">{post.title}</Link>
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
                  <Link to="/appointment.html" aria-label="Book consultation" className="cs_btn_style_1 cs_white_color cs_semibold cs_radius_5">
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
      </section>

      <button type="button" id="scrollToTopBtn" className="cs_scrollup_btn" onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </main>
  );
};

export default BlogDetails;

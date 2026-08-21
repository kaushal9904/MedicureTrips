import { Link, useSearchParams } from 'react-router-dom';
import { blogPosts, getPostBySlug } from '../data/blogPosts';

const tags = ['Cardiology', 'Neurology', 'Oncology', 'Orthopedics', 'Medical Tourism', 'Surgery Cost'];

const BlogDetails = () => {
  const [searchParams] = useSearchParams();
  const slug = searchParams.get('slug');

  const postIndex = slug ? blogPosts.findIndex((p) => p.slug === slug) : 0;
  const post = postIndex >= 0 ? blogPosts[postIndex] : blogPosts[0];
  const prevPost = blogPosts[(postIndex - 1 + blogPosts.length) % blogPosts.length];
  const nextPost = blogPosts[(postIndex + 1) % blogPosts.length];

  const categories = Object.entries(
    blogPosts.reduce((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1;
      return acc;
    }, {})
  ).map(([name, count]) => ({ name, count }));

  const recentPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Blog Details Section */}
      <section className="cs_blog_section_1">
        <div className="container">
          <div className="row cs_gap_y_40">
            {/* Main Content */}
            <div className="col-lg-8">
              <article className="cs_blog_details">
                {/* Thumbnail */}
                <div className="cs_blog_details_thumb cs_radius_20 cs_mb_15">
                  <img src={post.img} alt={post.title} />
                  <span className="cs_post_date cs_accent_bg cs_radius_10 cs_center_column">
                    <span className="cs_post_date_day cs_fs_40 cs_semibold cs_white_color cs_primary_font">{post.day}</span>
                    <span className="cs_white_color">{post.month}</span>
                  </span>
                </div>

                {/* Meta */}
                <div className="cs_blog_details_meta cs_mb_12">
                  <div className="cs_post_author">
                    <span className="cs_author_icon cs_center cs_radius_50">
                      <img src="/assets/img/favicon.webp" alt="Author icon" />
                    </span>
                    <span className="cs_author_title cs_fs_16">By {post.author}</span>
                  </div>
                  <div className="cs_post_meta cs_fs_16">
                    <img src="/assets/img/icons/time-line.svg" alt="Timer icon" />
                    <span className="cs_reading_duration">{post.readTime}</span>
                  </div>
                </div>

                <h2>{post.title}</h2>

                {post.blocks.map((block, i) => {
                  if (block.type === 'h2') {
                    return <h2 key={i} className="cs_blog_details_h2 cs_fs_32 cs_semibold cs_mt_40 cs_mb_16">{block.text}</h2>;
                  }
                  if (block.type === 'h3') {
                    return <h3 key={i} className="cs_fs_20 cs_semibold cs_mt_24 cs_mb_10">{block.text}</h3>;
                  }
                  if (block.type === 'ul') {
                    return (
                      <ul key={i} className="cs_blog_check_list cs_mp_0 cs_mb_24">
                        {block.items.map((item, j) => (
                          <li key={j}>
                            <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                            <span className="cs_fs_16 cs_secondary_color">{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={i}>{block.text}</p>;
                })}

                {/* Tags */}
                <div className="cs_post_tags cs_mb_48 cs_mb_lg_30">
                  <span className="cs_post_tags_title cs_fs_16 cs_primary_color">Category:</span>
                  <ul className="cs_tags_list cs_mp_0">
                    <li><a href="#">{post.category}</a></li>
                  </ul>
                </div>

                {/* Post Navigation */}
                <nav className="cs_post_navigation" aria-label="Post navigation">
                  <Link to={`/blog-details?slug=${prevPost.slug}`} className="cs_post_nav_item cs_radius_20">
                    <span className="cs_post_nav_label cs_fs_16 cs_semibold">
                      <img src="/assets/img/icons/arrow-right.svg" alt="Previous" style={{ transform: 'rotate(180deg)' }} />
                      Previous Post
                    </span>
                    <h3 className="cs_post_nav_title cs_fs_24 cs_medium mb-0">{prevPost.title}</h3>
                  </Link>
                  <Link to={`/blog-details?slug=${nextPost.slug}`} className="cs_post_nav_item cs_radius_20 cs_post_nav_next">
                    <span className="cs_post_nav_label cs_fs_16 cs_semibold">
                      Next Post
                      <img src="/assets/img/icons/arrow-right.svg" alt="Next" />
                    </span>
                    <h3 className="cs_post_nav_title cs_fs_24 cs_medium mb-0">{nextPost.title}</h3>
                  </Link>
                </nav>
              </article>
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
                    {recentPosts.map((p) => (
                      <li key={p.slug} className="cs_post_style_6">
                        <Link to={`/blog-details?slug=${p.slug}`} aria-label="Read the post details" className="cs_post_thumb cs_radius_5">
                          <img src={p.img} alt={p.title} />
                        </Link>
                        <div className="cs_post_info">
                          <span className="cs_post_date cs_mb_6">
                            <img src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                            {p.day} {p.month}
                          </span>
                          <h3 className="cs_post_title cs_fs_16 cs_semibold cs_secondary_font mb-0">
                            <Link to={`/blog-details?slug=${p.slug}`} aria-label="Read the post details">{p.title}</Link>
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
      </section>

      <button type="button" id="scrollToTopBtn" className="cs_scrollup_btn" onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </main>
  );
};

export default BlogDetails;

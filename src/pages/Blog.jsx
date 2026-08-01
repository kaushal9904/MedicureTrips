import { Link } from 'react-router-dom';
import { useState } from 'react';
import { blogPosts } from '../data/blogPosts';

const POSTS_PER_PAGE = 9;

const Blog = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const visiblePosts = blogPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPage = (p) => {
    setPage(p);
    scrollToTop();
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_page_header_video position-relative">
        <div className="cs_page_header_video_bg">
          <video autoPlay muted loop playsInline>
            <source src="/images/Blog Main Banner 1920x1080.mp4" type="video/mp4" />
          </video>
        </div>
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
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Treatment Guides, Costs, and Stories From Our <br /> Medical Team Trusted by International Patients</h2>
          </div>
          <div className="row cs_gap_y_48 justify-content-center">
            {visiblePosts.map((post) => (
              <div key={post.slug} className="col-lg-4 col-md-6">
                <article className="cs_post_style_3">
                  <Link to={`/blog-details.html?slug=${post.slug}`} aria-label="Read the post details" className="cs_post_img cs_radius_20 cs_mb_24">
                    <img src={post.img} alt={post.title} />
                    <span className="cs_post_date cs_accent_bg cs_radius_10 cs_center">
                      <span className="cs_post_date_day cs_fs_40 cs_semibold cs_white_color cs_primary_font">{post.day}</span>
                      <span className="cs_white_color">{post.month}</span>
                    </span>
                  </Link>
                  <div className="cs_post_info">
                    <div className="cs_post_meta_wrapper cs_mb_14">
                      <div className="cs_post_author">
                        <span className="cs_author_icon cs_center cs_radius_50">
                          <img src="/assets/img/favicon.webp" alt="Author icon" />
                        </span>
                        <span className="cs_author_title cs_fs_14">{post.category}</span>
                      </div>
                      <div className="cs_post_meta cs_fs_14">
                        <img src="/assets/img/icons/time-line.svg" alt="Timer icon" />
                        <span className="cs_reading_duration">{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="cs_post_title cs_fs_24 cs_medium mb-0">
                      <Link to={`/blog-details.html?slug=${post.slug}`} aria-label="Read the post details">{post.title}</Link>
                    </h3>
                    <p className="cs_post_excerpt cs_mt_12 mb-0">{post.excerpt}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav aria-label="Blog pagination">
              <ul className="cs_pagination cs_mp_0 justify-content-center">
                <li>
                  <a href="#" aria-label="Previous page" onClick={(e) => { e.preventDefault(); if (page > 1) goToPage(page - 1); }}>
                    <img src="/assets/img/icons/arrow-right.svg" alt="Previous" style={{ transform: 'rotate(180deg)' }} />
                  </a>
                </li>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <li key={p} className={p === page ? 'active' : ''}>
                    <a href="#" onClick={(e) => { e.preventDefault(); goToPage(p); }}>{String(p).padStart(2, '0')}</a>
                  </li>
                ))}
                <li>
                  <a href="#" aria-label="Next page" onClick={(e) => { e.preventDefault(); if (page < totalPages) goToPage(page + 1); }}>
                    <img src="/assets/img/icons/arrow-right.svg" alt="Next" />
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

export default Blog;

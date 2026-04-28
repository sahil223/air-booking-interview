import React from 'react'

const Blogpage = () => {
  return (
    <div>
         <main>

            {/* <!-- breadcrumb-area --> */}
            <section class="breadcrumb-area-two breadcrumb-bg">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="breadcrumb-content text-center">
                                <h2 class="title">Latest News</h2>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Our Blog</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- breadcrumb-area-end --> */}

            {/* <!-- inner-blog-area --> */}
            <section class="inner-blog-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="inner-blog-item">
                                <div class="inner-blog-thumb">
                                    <a href="blog-details.html"><img src="assets/img/blog/inner_blog_img01.jpg" alt="img"/></a>
                                </div>
                                <div class="inner-blog-content">
                                    <div class="blog-meta">
                                        <ul>
                                            <li class="tags"><i class="fa-regular fa-bookmark"></i>
                                                <a href="#">Airlines ,</a>
                                                <a href="#">Flight</a>
                                            </li>
                                            <li><i class="fa-regular fa-user"></i> <a href="#">Admin</a></li>
                                            <li><i class="fa-regular fa-bell"></i>Mar 10, 2022</li>
                                        </ul>
                                    </div>
                                    <h2 class="title"><a href="blog-details.html">Purchase flight ticket easily & securely</a></h2>
                                    <p>Enjoy an even safer and more comfortale travel experience with the Top class Airlines mobile apps You can complete all travel processes such as purchasing a ticket the creating a mobile boarding pass, or checking in via a single channel.</p>
                                    <a href="blog-details.html" class="read-more">Read More <i class="fa-solid fa-angle-right"></i></a>
                                </div>
                            </div>
                            <div class="inner-blog-item">
                                <div class="inner-blog-thumb">
                                    <a href="blog-details.html"><img src="assets/img/blog/inner_blog_img02.jpg" alt="img"/></a>
                                </div>
                                <div class="inner-blog-content">
                                    <div class="blog-meta">
                                        <ul>
                                            <li class="tags"><i class="fa-regular fa-bookmark"></i>
                                                <a href="#">Airlines ,</a>
                                                <a href="#">Flight</a>
                                            </li>
                                            <li><i class="fa-regular fa-user"></i> <a href="#">Admin</a></li>
                                            <li><i class="fa-regular fa-bell"></i>Mar 10, 2022</li>
                                        </ul>
                                    </div>
                                    <h2 class="title"><a href="blog-details.html">Car Rental Provider easily & securely</a></h2>
                                    <p>Enjoy an even safer and more comfortale travel experience with the Top class Airlines mobile apps You can
                                        complete all travel processes such as purchasing a ticket the creating a mobile boarding pass, or checking
                                        in via a single channel.</p>
                                    <a href="blog-details.html" class="read-more">Read More <i class="fa-solid fa-angle-right"></i></a>
                                </div>
                            </div>
                            <div class="inner-blog-item">
                                <div class="inner-blog-thumb">
                                    <a href="blog-details.html"><img src="assets/img/blog/inner_blog_img03.jpg" alt="img"/></a>
                                </div>
                                <div class="inner-blog-content">
                                    <div class="blog-meta">
                                        <ul>
                                            <li class="tags"><i class="fa-regular fa-bookmark"></i>
                                                <a href="#">Airlines ,</a>
                                                <a href="#">Flight</a>
                                            </li>
                                            <li><i class="fa-regular fa-user"></i> <a href="#">Admin</a></li>
                                            <li><i class="fa-regular fa-bell"></i>Mar 10, 2022</li>
                                        </ul>
                                    </div>
                                    <h2 class="title"><a href="blog-details.html">Services in 7 different languages</a></h2>
                                    <p>Enjoy an even safer and more comfortale travel experience with the Top class Airlines mobile apps You can
                                        complete all travel processes such as purchasing a ticket the creating a mobile boarding pass, or checking
                                        in via a single channel.</p>
                                    <a href="blog-details.html" class="read-more">Read More <i class="fa-solid fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <aside class="blog-sidebar">
                                <div class="blog-widget">
                                    <h4 class="sidebar-title">Search</h4>
                                    <div class="sidebar-search">
                                        <form action="#">
                                            <input type="text" placeholder="Search ..."/>
                                            <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                                        </form>
                                    </div>
                                </div>
                                <div class="blog-widget">
                                    <h4 class="sidebar-title">Categories</h4>
                                    <div class="sidebar-cat-list">
                                        <ul>
                                            <li><a href="#">Insureance <i class="fa-solid fa-angles-right"></i></a></li>
                                            <li><a href="#">Destinations <i class="fa-solid fa-angles-right"></i></a></li>
                                            <li><a href="#">Flights <i class="fa-solid fa-angles-right"></i></a></li>
                                            <li><a href="#">Top Airlines <i class="fa-solid fa-angles-right"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="blog-widget">
                                    <h4 class="sidebar-title">Recent Post</h4>
                                    <div class="rc-post-list">
                                        <div class="rc-post-item">
                                            <div class="rc-post-thumb">
                                                <a href="blog-details.html"><img src="assets/img/blog/rc_post_img01.jpg" alt=""/></a>
                                            </div>
                                            <div class="rc-post-content">
                                                <span class="date"><i class="fa-regular fa-bell"></i>Mar 10, 2022</span>
                                                <h4 class="title"><a href="blog-details.html">Car Rental Provider</a></h4>
                                                <a href="#" class="author">Alex Jonson</a>
                                            </div>
                                        </div>
                                        <div class="rc-post-item">
                                            <div class="rc-post-thumb">
                                                <a href="blog-details.html"><img src="assets/img/blog/rc_post_img02.jpg" alt=""/></a>
                                            </div>
                                            <div class="rc-post-content">
                                                <span class="date"><i class="fa-regular fa-bell"></i>Mar 10, 2022</span>
                                                <h4 class="title"><a href="blog-details.html">Purchase flight ticket</a></h4>
                                                <a href="#" class="author">Alex Jonson</a>
                                            </div>
                                        </div>
                                        <div class="rc-post-item">
                                            <div class="rc-post-thumb">
                                                <a href="blog-details.html"><img src="assets/img/blog/rc_post_img03.jpg" alt=""/></a>
                                            </div>
                                            <div class="rc-post-content">
                                                <span class="date"><i class="fa-regular fa-bell"></i>Mar 10, 2022</span>
                                                <h4 class="title"><a href="blog-details.html">Services in 7 different</a></h4>
                                                <a href="#" class="author">Alex Jonson</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="blog-widget sidebar-newsletter">
                                    <div class="sn-icon">
                                        <img src="assets/img/icon/sn_icon.png" alt=""/>
                                    </div>
                                    <div class="sn-title">
                                        <h4 class="title">Subscribe Newsletter</h4>
                                        <p>Signup For Latest News</p>
                                    </div>
                                    <form action="#" class="sn-form">
                                        <input type="email" placeholder="Enter Your Email"/>
                                        <button class="btn">subscribe</button>
                                    </form>
                                </div>
                                <div class="blog-widget">
                                    <h4 class="sidebar-title">Tags</h4>
                                    <div class="sidebar-tags">
                                        <ul>
                                            <li><a href="#">Airlines</a></li>
                                            <li><a href="#">Travel</a></li>
                                            <li><a href="#">Booking</a></li>
                                            <li><a href="#">Thrmeforest</a></li>
                                            <li><a href="#">Creative</a></li>
                                            <li><a href="#">Hotel</a></li>
                                            <li><a href="#">Slider</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- inner-blog-area-end --> */}

        </main>
    </div>
  )
}

export default Blogpage

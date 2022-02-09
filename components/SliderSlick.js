import * as React from "react";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Slider from "react-slick";
const SliderSlick = () => {

  return (
      <div class="section-welcome">
            <div class="welcome_slider js-welcome_slider">

            <Slider arrows={false}>
                <div>
                    <div class="welcome_slider_item"><Link href="/blog/blog-slug" class="cover_link"><a></a></Link>
                            <div class="welcome_slider_img"><img src="/img/img24.jpg" alt=""/></div>
                            <div class="welcome_slider_cont">
                                <div class="welcome_slider_cats cats">
                                    <Link href="blog.html" class="cats_item"><a>travel</a></Link>
                                </div>
                                <div class="welcome_slider_title h3"><Link href="/blog/blog-slug"><a>a set of the most necessary things on vacation</a></Link></div>
                                <div class="welcome_slider_infoline infoline">
                                    <div class="infoline_date">Jul 06, 2021</div> <span class="dash"></span>
                                    <div class="infoline_author">
                                        <div class="ava"><img data-src="img/ava6.png" src="/img/ava6.png" class="js-img" alt=""/></div>
                                        Marvin McKinney
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div>
                    <div class="welcome_slider_item"><Link href="/blog/blog-slug" class="cover_link"><a></a></Link>
                            <div class="welcome_slider_img"><img src="/img/img24.jpg" alt=""/></div>
                            <div class="welcome_slider_cont">
                                <div class="welcome_slider_cats cats">
                                    <Link href="blog.html" class="cats_item"><a>travel</a></Link>
                                </div>
                                <div class="welcome_slider_title h3"><Link href="/blog/blog-slug"><a>a set of the most necessary things on vacation</a></Link></div>
                                <div class="welcome_slider_infoline infoline">
                                    <div class="infoline_date">Jul 06, 2021</div> <span class="dash"></span>
                                    <div class="infoline_author">
                                        <div class="ava"><img data-src="img/ava6.png" src="/img/ava6.png" class="js-img" alt=""/></div>
                                        Marvin McKinney
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div>
                    <div class="welcome_slider_item"><Link href="/blog/blog-slug" class="cover_link"><a></a></Link>
                            <div class="welcome_slider_img"><img src="/img/img24.jpg" alt=""/></div>
                            <div class="welcome_slider_cont">
                                <div class="welcome_slider_cats cats">
                                    <Link href="blog.html" class="cats_item"><a>travel</a></Link>
                                </div>
                                <div class="welcome_slider_title h3"><Link href="/blog/blog-slug"><a>a set of the most necessary things on vacation</a></Link></div>
                                <div class="welcome_slider_infoline infoline">
                                    <div class="infoline_date">Jul 06, 2021</div> <span class="dash"></span>
                                    <div class="infoline_author">
                                        <div class="ava"><img data-src="img/ava6.png" src="/img/ava6.png" class="js-img" alt=""/></div>
                                        Marvin McKinney
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div>
                    <div class="welcome_slider_item"><Link href="/blog/blog-slug" class="cover_link"><a></a></Link>
                            <div class="welcome_slider_img"><img src="/img/img24.jpg" alt=""/></div>
                            <div class="welcome_slider_cont">
                                <div class="welcome_slider_cats cats">
                                    <Link href="blog.html" class="cats_item"><a>travel</a></Link>
                                </div>
                                <div class="welcome_slider_title h3"><Link href="/blog/blog-slug"><a>a set of the most necessary things on vacation</a></Link></div>
                                <div class="welcome_slider_infoline infoline">
                                    <div class="infoline_date">Jul 06, 2021</div> <span class="dash"></span>
                                    <div class="infoline_author">
                                        <div class="ava"><img data-src="img/ava6.png" src="/img/ava6.png" class="js-img" alt=""/></div>
                                        Marvin McKinney
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </Slider>
            </div>
    </div>
  );
};

export default SliderSlick;
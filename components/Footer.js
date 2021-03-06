import React from 'react';

function Footer(props) {
    return (
        <>
            <footer class="footer">
                <div class="wrapper">
                    <div class="footer_cols">
                        <div class="footer_cols_item footer_cols_item-1">
                            <div class="footer_title">About</div>
                            <div class="footer_txt">We  have much planned for the future, working with great clients and continued software development. If you'd like to join our team, then we'd also love to hear from you.</div>
                        </div>
                        <div class="footer_cols_item footer_cols_item-2">
                            <div class="footer_title">Categories</div>
                            <ul class="footer_list">
                                <li><a href="blog.html">Home</a></li>
                                <li><a href="blog.html">Kitchen</a></li>
                                <li><a href="blog.html">Garden</a></li>
                                <li><a href="blog.html">Cars</a></li>
                                <li><a href="blog.html">Travel</a></li>
                                <li><a href="blog.html">Pets</a></li>
                                <li><a href="blog.html">Office</a></li>
                                <li><a href="blog.html">Electronics</a></li>
                                <li><a href="blog.html">Hobby</a></li>
                                <li><a href="blog.html">Baby</a></li>
                                <li><a href="blog.html">Holiday</a></li>
                                <li><a href="blog.html">Software</a></li>
                                <li><a href="blog.html">Health</a></li>
                                <li><a href="blog.html">Appliences</a></li>
                                <li><a href="blog.html">Money</a></li>
                            </ul>
                        </div>
                        <div class="footer_cols_item footer_cols_item-3">
                            <div class="footer_title">Follow us</div>
                            <div class="soc">
                                <div class="soc_item">
                                    <a href="#" target="_blank">
                                        <span class="soc_item_icon"><span class="icon-fb"></span></span>
                                        <span class="soc_item_txt">2,1 k+</span>
                                    </a>
                                </div>
                                <div class="soc_item">
                                    <a href="#" target="_blank">
                                        <span class="soc_item_icon"><span class="icon-tw"></span></span>
                                        <span class="soc_item_txt">3,6 k+</span>
                                    </a>
                                </div>
                                <div class="soc_item">
                                    <a href="#" target="_blank">
                                        <span class="soc_item_icon"><span class="icon-youtube"></span></span>
                                        <span class="soc_item_txt">2,8 k+</span>
                                    </a>
                                </div>
                                <div class="soc_item">
                                    <a href="#" target="_blank">
                                        <span class="soc_item_icon"><span class="icon-instagram"></span></span>
                                        <span class="soc_item_txt">6,3 k+</span>
                                    </a>
                                </div>
                            </div>
                        </div>   
                    </div>
                    <div class="footer_bot">
                        <div class="footer_copy">?? Benchy 2021. All rights reserved</div>
                        <div class="footer_links">
                            <a href="#">Privacy Policy</a> <span class="dash"></span> <a href="#">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </footer>
            <div class="overlay"></div>
        </>
    );
}

export default Footer;
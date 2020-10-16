import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <div className="col-md-4 offset-md-1 mt-5">
                        <h2 className="footer-text">Let us handle your <br /> project, professionally.</h2>
                        <small>With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general.</small>
                    </div>
                    <div className="col-md-6 mb-5 mt-5">
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" placeholder="Your email address" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="Full-Name" placeholder="Your name / company’s name" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="9" placeholder="Your message" ></textarea>
                            </div>
                            <button type="submit" className="btn btn-brand btn-style">Send</button>
                        </form>
                    </div>
                </div>
                <div className="copyRight text-center pb-3">
                    <p>copyright Orange labs {(new Date()).getFullYear()}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
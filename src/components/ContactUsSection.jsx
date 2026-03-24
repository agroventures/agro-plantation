import { useRef, useState, useEffect } from "react";
import OurBrandsSection from "./OurBrandsSection";
import emailjs from "@emailjs/browser";

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); 
  const [showToast, setShowToast] = useState(false);

  const formRef = useRef();

  // Auto-hide toast after 4 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
        setSubmitStatus(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setShowToast(true);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      <div className="toast-wrapper">
        <div className={`toast-box ${submitStatus} ${showToast ? "show" : ""}`}>
          <span className="toast-icon">
            {submitStatus === "success" ? "✓" : "✕"}
          </span>
          <span className="toast-message">
            {submitStatus === "success"
              ? "Message sent! We'll get back to you soon."
              : "Something went wrong. Please try again."}
          </span>
          <button
            className="toast-close"
            onClick={() => setShowToast(false)}
          >
            ×
          </button>
        </div>
      </div>

      {/* Page Title Section */}
      <section className="pt-0 pb-0">
        <div className="full-screen-bg">
          <div
            className="parallax-img"
            style={{
              background:
                "url(/images/paralax/paralax6.webp) center center / cover scroll no-repeat",
            }}
          />
          <div className="hero-text-wrap video-alpha">
            <div className="hero-text white-color">
              <div className="container text-center">
                <h1 className="white-color oswald-font text-uppercase">
                  Contact Us
                </h1>
                <h3 className="white-color oswald-font font-30px text-uppercase">
                  Connecting to The Agro ventures World
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="contact-us pt-0 pb-50">
        <div className="container">
          <OurBrandsSection />
          <div className="row mt-0">

            {/* Contact Form */}
            <div className="col-md-8 pb-30">
              <form
                ref={formRef}
                name="contact-form"
                id="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="sr-only" htmlFor="name">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        id="name"
                        required
                        placeholder="Your Name"
                        data-error="Your Name is Required"
                      />
                      <div className="help-block with-errors mt-20"></div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        id="email"
                        required
                        placeholder="Your Email"
                        data-error="Please Enter Valid Email"
                      />
                      <div className="help-block with-errors mt-20"></div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="sr-only" htmlFor="subject">
                    Subject
                  </label>
                  <select
                    name="subject"
                    className="form-control"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Your Subject
                    </option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="form-control"
                    id="message"
                    rows="7"
                    placeholder="Your Message"
                    required
                    data-error="Please, Leave us a message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <div className="help-block with-errors mt-20"></div>
                </div>

                <button
                  type="submit"
                  name="submit"
                  className="btn btn-color btn-circle"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending…" : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="col-md-4">
              <h3>Postal Location</h3>
              <address>
                No.253 Kaduwela Road Thalangama Koswatta Battaramulla
                <br />
                <abbr title="Phone">PN:</abbr> +94 (70) 520 0900
                <br />
                <a href="mailto:info@agroventuresplantations.com">
                  info@agroventuresplantations.com
                </a>
              </address>

              {/* Google Map */}
              <div className="mt-30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8564765048022!2d79.9301219!3d6.907759899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2577cb2db7e13%3A0xbf954ea383a6550e!2sAgro%20Ventures%20Plantations%20Operational%20Head%20Office!5e0!3m2!1sen!2slk!4v1767606962001!5m2!1sen!2slk"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsSection;
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
      <section className="ct-hero pt-0 pb-0">
        <div
          className="ct-hero__bg"
          style={{ backgroundImage: "url(/images/paralax/paralax6.webp)" }}
        />
        <div className="ct-hero__overlay" />
        <div className="ct-hero__body">
          <div className="ct-hero__eyebrow">
            <span className="ct-hero__eyebrow-line" />
            <span className="ct-hero__eyebrow-text">Agroventures Plantations</span>
            <span className="ct-hero__eyebrow-line" />
          </div>
          <h1 className="ct-hero__title">Contact Us</h1>
          <p className="ct-hero__sub">Connecting to The Agroventures World</p>
          <div className="ct-hero__breadcrumb">
            <a href="/" className="ct-hero__bc-link">Home</a>
            <span className="ct-hero__bc-sep">&#8212;</span>
            <span className="ct-hero__bc-cur">Contact</span>
          </div>
        </div>
        <div className="ct-hero__side">
          <span>Sri Lanka</span>
          <span className="ct-hero__side-rule" />
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
              <h3 className="eds-sidebar-title">Postal Location</h3>
              <address>
                No.253 Kaduwela Road Thalangama Koswatta Battaramulla
                <br />
                <abbr title="Phone">PN:</abbr>  +94 (112) 878 766 / +94 (705) 130 907
                <br />
                <a href="mailto:info@agroventures.lk">
                  info@agroventures.lk
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
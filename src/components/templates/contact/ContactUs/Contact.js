import React from "react";
import styles from "./Contact.module.css";
import { 
  MdEmail, 
  MdPhone, 
  MdAccessTime, 
  MdLocationOn,
  MdSend 
} from "react-icons/md";

function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <div className="row">
          {/* Contact Info Column */}
          <div className="col-lg-5 pe-lg-5" data-aos="fade-right">
            <div className={styles.contactCard}>
              {/* Email */}
              <div className="row align-items-center mb-4">
                <div className="col-2 text-center">
                  <MdEmail className={styles.contactIcon} size={32} />
                </div>
                <div className="col-10">
                  <h3 className={styles.contactTitle}>ایمیل:</h3>
                  <p className={styles.contactText}>support@domain.com</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="row align-items-center mb-4">
                <div className="col-2 text-center">
                  <MdPhone className={styles.contactIcon} size={32} />
                </div>
                <div className="col-10">
                  <h3 className={styles.contactTitle}>تلفن تماس:</h3>
                  <p className={styles.contactText}>09121234567</p>
                </div>
              </div>
              
              {/* Working Hours */}
              <div className="row align-items-center mb-4">
                <div className="col-2 text-center">
                  <MdAccessTime className={styles.contactIcon} size={32} />
                </div>
                <div className="col-10">
                  <h3 className={styles.contactTitle}>ساعات کاری:</h3>
                  <p className={styles.contactText}>
                    08.00 صبح الی 8.00 شب
                  </p>
                </div>
              </div>
              
              {/* Address */}
              <div className="row align-items-center mb-4">
                <div className="col-2 text-center">
                  <MdLocationOn className={styles.contactIcon} size={32} />
                </div>
                <div className="col-10">
                  <h3 className={styles.contactTitle}>آدرس دفتر:</h3>
                  <p className={styles.contactText}>
                    ایران، تهران، منطقه یک، خیابان مفتح، پلاک 13
                  </p>
                </div>
              </div>
              
              {/* Map */}
              <div className={styles.mapContainer}>
                <iframe
                  title="نقشه دفتر"
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d25904.955143421448!2d51.39057203948671!3d35.747870107493654!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2s!4v1739194616938!5m2!1sfa!2s"
                  aria-label="Google maps"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="col-lg-7 ps-lg-0 mt-5 mt-lg-0" data-aos="fade-left">
            <div className={styles.contactFormContainer}>
              <form className="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <label className={styles.formLabel} htmlFor="name">
                      نام شما
                    </label>
                    <input
                      type="text"
                      name="name"
                      className={styles.formControl}
                      id="name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className={styles.formLabel} htmlFor="email">
                      ایمیل شما
                    </label>
                    <input
                      type="email"
                      className={styles.formControl}
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className={styles.formLabel} htmlFor="subject">
                    موضوع
                  </label>
                  <input
                    type="text"
                    className={styles.formControl}
                    name="subject"
                    id="subject"
                    required
                  />
                </div>

                <div className="mt-4">
                  <label className={styles.formLabel} htmlFor="messages">
                    پیام
                  </label>
                  <textarea
                    className={styles.formControl}
                    name="message"
                    rows={8}
                    id="messages"
                    required
                  />
                </div>

                <div className="text-center mt-4">
                  <button className={styles.submitButton} type="submit">
                    ارسال پیام
                    <MdSend className="me-2" size={24} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
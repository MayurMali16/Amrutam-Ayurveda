import React, { useState } from "react";
import ayurveda from "../assets/ayurveda.jpg";
import Modal from "react-modal";
import "./page.css";
import heart from "../assets/about/heart.png";
import focus from "../assets/about/focus.png";
import mind from "../assets/about/mind.png";
import meditation from "../assets/about/meditation.png";
import protection from "../assets/about/protection.png";
import ayur from "../assets/about/ayur.png";
import strength from "../assets/about/strong.png";
import box2 from "../assets/box2.jpeg";
import box5 from "../assets/box5.png";
import bookbg from "../assets/consultation.jpeg";
import person from "../assets/person.png";
import doctor from "../assets/doctor.png";
import Carousel from "react-grid-carousel";
import iphone from "../assets/iphone.png";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";

Modal.setAppElement("#root"); // Set the app element for accessibility (optional)

const Page = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConslModalOpen, setIsConslModalOpen] = useState(false);
  const [isSessModalOpen, setIsSessModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      message: "",
    });
    closeModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const conOpenModal = () => {
    setIsConslModalOpen(true);
  };

  const conCloseModal = () => {
    setIsConslModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const sessOpenModal = () => {
    setIsSessModalOpen(true);
  };

  const sessCloseModal = () => {
    setIsSessModalOpen(false);
  };

  return (
    <div>
    <section className="home" >
        <img src={ayurveda} alt="" />
        <div className="text-area">
          <h3>Namaste, Welcome to Amrutam</h3>
          <h1>
            Step into Holistic Healing with Ayurveda. Book Consultation With
            Certified Experts.
          </h1>
          <p>
            Dive into the world of Ayurveda and experience personalized health
            solutions and holistic guidance from trusted Ayurvedic doctors
            anytime, anywhere.
          </p>
          <button onClick={openModal}>BOOK AN APPOINTMENT</button>
        </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <button className="close-button" onClick={closeModal}>
            Close
          </button>
          <h2>Book an Appointment</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message (optional)"
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        </Modal>
      </section>
      <section id="about"className="about">
        <h1>Discover Ayurveda's Magic With Us</h1>
        <p>
          Ayurvedic treatment aims to balance your body and mind, bringing
          harmony and vitality. <br /> It's like a journey to better health
          using ancient wisdom, a totally effective approach for a better life.{" "}
        </p>
        <div className="content">
          <div className="part-1">
            <ul>
              <li>
                <p>
                  <b>Personalized Wellness</b>
                  <br />
                  Get treatments made just for you based on your individual
                  doshas
                </p>
                <img src={heart} alt="" />
              </li>
              <li>
                <p>
                  {" "}
                  <b>Focus on Prevention</b>
                  <br />
                  Stop problems even
                  <br /> before they start.
                </p>
                <img src={focus} alt="" />
              </li>
              <li>
                <p>
                  {" "}
                  <b>Mind-Body and Connection</b>
                  <br />
                  Keep your mind and
                  <br /> body in sync for a happy life.
                </p>
                <img src={mind} alt="" />
              </li>
            </ul>
          </div>
          <div className="medi">
            <img src={meditation} alt="" />
          </div>
          <div className="part-2">
            <ul>
              <li>
                <img src={protection} alt="" />
                <p>
                  <b>Holistic Healing</b>
                  <br />
                  Fix the root problem for
                  <br /> long-lasting health.
                </p>
              </li>
              <li>
                <img src={ayur} alt="" />
                <p>
                  <b>Natural Remedies</b>
                  <br />
                  Using herbs and
                  <br /> natural therapies for
                  <br /> healing.
                </p>
              </li>
              <li>
                <img src={strength} alt="" />
                <p>
                  {" "}
                  <b>Boosting immunity</b>
                  <br />
                  Stay strong and healthy for
                  <br /> life, not just for
                  <br /> today.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="consultations">
        <div className="heading">
          <h1>What sets Ayurvedic Consultations apart?</h1>
          <div className="boxes">
            <div className="box1">
              <h3>स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।"</h3>
              <p>
                Meaning: The Goal of Ayurveda is to maintain the health of a
                healthy person and to cure the disease of a diseased person.
              </p>
            </div>
            <div className="box2">
              <img src={box2} alt="" />
            </div>
            <div className="box3">
              <h3>Precise Diagnosis</h3>
              <p>
                Ayurveda's core principles revolve around Vata, Pitta, and Kapha
                doshas, guiding you with precise diagnosis and treatment.
              </p>
            </div>
            <div className="box4">
              <h3>Zero side-effects</h3>
              <p>
                Ayurvedic treatments are devoid of chemicals, and are based
                completely on natural herbs.
              </p>
            </div>

            <div className="box5">
              <img src={box5} alt="" />
            </div>
            <div className="box6">
              <h3>Individual Treatment</h3>
              <p>
                all Treatments are personalized based on a person's unique
                constitution and health concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="book">
        <img src={bookbg} alt="" />
        <div className="text">
          <h1>Ready to restore harmony in your mind, body and spirit?</h1>
          <button onClick={conOpenModal}>Book a consultation</button>
          <Modal
            isOpen={isConslModalOpen}
            onRequestClose={conOpenModal}
            className="modal"
            overlayClassName="modal-overlay"
          >
            <button className="close-button" onClick={conCloseModal}>
              Close
            </button>
            <h2>Book an consultation</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message (optional)"
                value={formData.message}
                onChange={handleChange}
              />
              <button type="submit">Submit</button>
            </form>
          </Modal>
        </div>
      </section>

      <section className="approach">
        <div className="approach-text">
          <h1>Our Ayurvedic Approach</h1>
          <p>
            At Amrutam we follow a unique and personalized approach to healing.
            Our expert practitioners
            <br /> begin each treatment process by conducting a thorough
            analysis of the patient’s body
            <br /> type, medical history, and current health conditions.
          </p>
        </div>

        <div className="approach-content">
          <div className="a1">
            <h1>1</h1>
            <h3>Make Appointment</h3>
            <p>
              You must make an appointment in advance, to choose the service and
              date.
            </p>
          </div>
          <div className="a2">
            <h1>2</h1>
            <h3>Consultations</h3>
            <p>
              The next stage involves a thorough consultation with an Ayurveda
              practitioner.
            </p>
          </div>
          <div className="a3">
            <h1>3</h1>
            <h3>Treatment Planning</h3>
            <p>
              The Ayurvedic practitioner creates a personalized treatment plan
              for you
            </p>
          </div>
          <div className="a4">
            <h1>4</h1>
            <h3>Maintenance</h3>
            <p>
              These visits allow for assessment of progress, adjustments to the
              treatment.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h1>Stories From our valued customers</h1>
        <div className="testi-content">
          <div className="feedback">
            <h4>Consulted for hair</h4>
            <div className="column">
              <img src={person} alt="" />
              <p>
                Sophie Moore
                <br /> Chennai
              </p>
              <h5>17/02/24</h5>
            </div>
            <h2>⭐⭐⭐⭐⭐</h2>
            <h3>"One of kind service"</h3>
            <p>
              Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra
              diam sit amet nisl suscipit adipis.
            </p>
          </div>
          <div className="feedback">
            <h4>Consulted for hair</h4>
            <div className="column">
              <img src={person} alt="" />
              <p>
                Rahul Dravid
                <br /> Mumbai
              </p>
              <h5>17/02/24</h5>
            </div>
            <h2>⭐⭐⭐⭐⭐</h2>
            <h3>"One of kind service"</h3>
            <p>
              Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra
              diam sit amet nisl suscipit adipis.
            </p>
          </div>
          <div className="feedback">
            <h4>Consulted for Skin</h4>
            <div className="column">
              <img src={person} alt="" />
              <p>
                Shraddha Kapoor
                <br />
                Delhi
              </p>
              <h5>17/02/24</h5>
            </div>
            <h2>⭐⭐⭐⭐⭐</h2>
            <h3>"One of kind service"</h3>
            <p>
              Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra
              diam sit amet nisl suscipit adipis.
            </p>
          </div>
        </div>
      </section>

      <section className="experts">
        <h1>Meet Our Ayurveda Experts</h1>

        <div className="experts-content">
          <Carousel cols={3} rows={1} gap={10} loop>
            <Carousel.Item>
              <div className="session">
                <img src={doctor} alt="" className="doctor-image" />
                <h3>Dr.Kalyani Shinde</h3>
                <p>Ayurveda practitioner(BAMS, MD)</p>
                <p>🎓25 years of experience</p>
                <h4>💊Skin Specialist</h4>
                <h5 onClick={sessOpenModal}>Book a session</h5>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="session">
                <img src={doctor} alt="" className="doctor-image" />
                <h3>Dr.Kalyani Shinde</h3>
                <p>Ayurveda practitioner(BAMS, MD)</p>
                <p>🎓25 years of experience</p>
                <h4>💊Skin Specialist</h4>
                <h5 onClick={sessOpenModal}>Book a session</h5>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="session">
                <img src={doctor} alt="" className="doctor-image" />
                <h3>Dr.Kalyani Shinde</h3>
                <p>Ayurveda practitioner(BAMS, MD)</p>
                <p>🎓25 years of experience</p>
                <h4>💊Skin Specialist</h4>
                <h5 onClick={sessOpenModal}>Book a session</h5>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="session">
                <img src={doctor} alt="" className="doctor-image" />
                <h3>Dr.Kalyani Shinde</h3>
                <p>Ayurveda practitioner(BAMS, MD)</p>
                <p>🎓25 years of experience</p>
                <h4>💊Skin Specialist</h4>
                <h5 onClick={sessOpenModal}>Book a session</h5>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="session">
                <img src={doctor} alt="" className="doctor-image" />
                <h3>Dr.Kalyani Shinde</h3>
                <p>Ayurveda practitioner(BAMS, MD)</p>
                <p>🎓25 years of experience</p>
                <h4>💊Skin Specialist</h4>
                <h5 onClick={sessOpenModal}>Book a session</h5>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="session">
                <img src={doctor} alt="" className="doctor-image" />
                <h3>Dr.Kalyani Shinde</h3>
                <p>Ayurveda practitioner(BAMS, MD)</p>
                <p>🎓25 years of experience</p>
                <h4>💊Skin Specialist</h4>
                <h5 onClick={sessOpenModal}>Book a session</h5>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <Modal
          isOpen={isSessModalOpen}
          onRequestClose={sessCloseModal}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <button className="close-button" onClick={sessCloseModal}>
            Close
          </button>
          <h2>Book a session</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message (optional)"
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        </Modal>
      </section>

      <section className="info">
        <div className="leftside">
          <h1>Amrutam Home App</h1>
          <p>
            The Amrutam Home App is your one-stop app for all things Ayurveda!
            Apart from mimicking the significant characteristics of our website,
            this app offers a wide range of additional features.
          </p>
          <h2>
            Get a diet & lifestyle consultation with ayurvedic experts across
            the globe{" "}
          </h2>
          <h3>Get The App Now</h3>
          <img src={playstore} alt="" />
          <img src={appstore} alt="" />
        </div>
        <div className="rightside">
          <img src={iphone} alt="" />
        </div>
      </section>
      <footer className="foot">
        <div className="foot-content">
          <h2>Information</h2>
          <p>
            <span>About Us</span>
            <span>Terms and Conditions</span>
            <span> Privacy Policy</span>
            <span>Privacy Policy for Mobile Apps</span>
            <span>Shipping and Returns Policy</span>
            <span> International Delivery</span>
            <span>For Businesses,</span>
            <span> Hotels and Resorts</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Page;

import logo from './logo.svg';
import react , {useState , useEffect} from "react"
import './App.css';
import "./assets/css/style.css"
import profileImg from "./assets/img/profile-img.jpg"
import "./assets/vendor/boxicons/css/animations.css"
import "./assets/vendor/boxicons/css/boxicons.css"
import "./assets/vendor/boxicons/css/boxicons.min.css"
import "./assets/vendor/boxicons/css/transformations.css"
import "./assets/vendor/bootstrap/css/bootstrap-grid.css"
import "./assets/vendor/bootstrap/css/bootstrap-grid.css.map"
import "./assets/vendor/bootstrap/css/bootstrap-grid.min.css"
import "./assets/vendor/bootstrap/css/bootstrap-grid.min.css.map"
import "./assets/vendor/bootstrap/css/bootstrap-grid.rtl.css"
import "./assets/vendor/bootstrap/css/bootstrap-grid.rtl.min.css"
import "./assets/vendor/bootstrap/css/bootstrap-grid.rtl.css.map"
import "./assets/vendor/bootstrap/css/bootstrap-grid.rtl.min.css.map"
import "./assets/vendor/bootstrap/css/bootstrap-reboot.css"
import "./assets/vendor/bootstrap/css/bootstrap-reboot.css.map"
import "./assets/vendor/bootstrap/css/bootstrap-reboot.min.css"
import "./assets/vendor/bootstrap/css/bootstrap-reboot.min.css.map"
import "./assets/vendor/bootstrap/css/bootstrap-reboot.rtl.css"
import "./assets/vendor/bootstrap/css/bootstrap-reboot.rtl.css.map"
import "./assets/vendor/bootstrap/css/bootstrap-reboot.rtl.min.css"
import "./assets/vendor/bootstrap/css/bootstrap-reboot.rtl.min.css.map"
import "./assets/vendor/bootstrap/css/bootstrap-utilities.css"
import "./assets/vendor/bootstrap/css/bootstrap-utilities.css.map"
import "./assets/vendor/bootstrap/css/bootstrap-utilities.min.css"
import "./assets/vendor/bootstrap/css/bootstrap-utilities.min.css.map"
import "./assets/vendor/bootstrap/css/bootstrap-utilities.rtl.css"
import "./assets/vendor/bootstrap/css/bootstrap-utilities.rtl.css.map"
import "./assets/vendor/bootstrap/css/bootstrap-utilities.rtl.min.css"
import "./assets/vendor/bootstrap/css/bootstrap-utilities.rtl.min.css.map"
import "./assets/vendor/bootstrap/css/bootstrap.css"
import "./assets/vendor/bootstrap/css/bootstrap.css.map"
import "./assets/vendor/bootstrap/css/bootstrap.min.css"
import "./assets/vendor/bootstrap/css/bootstrap.min.css.map"
import "./assets/vendor/bootstrap/css/bootstrap.rtl.css"
import "./assets/vendor/bootstrap/css/bootstrap.rtl.min.css"
import "./assets/vendor/bootstrap/css/bootstrap.rtl.min.css.map"
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "./assets/vendor/swiper/swiper-bundle.min.css"
import "./assets/vendor/glightbox/css/glightbox.css"
import "./assets/vendor/glightbox/css/glightbox.min.css"
import "./assets/vendor/glightbox/css/plyr.css"
import "./assets/vendor/glightbox/css/plyr.min.css"
import {ProgressBar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';







function App() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Aspiring Data Scientist","Digital Marketer" , "Freelancer", "Cyclist"];
  const [text, setText] = useState('');
  const period = 1000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  
  useEffect(() => {
    let ticker = setInterval(() => {
       tick();
    }, delta)
    return () => {clearInterval(ticker)};
  }, [text]);

  const tick = () =>{
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting ? fullText.substring(0, text.length-1): fullText.substring(0, text.length+1);

    setText(updateText);

    if(isDeleting){
        setDelta(prevDelta => prevDelta/2)
    }

    if(!isDeleting && updateText === fullText){
        setIsDeleting(true);
        setDelta(period);
    }
    else if(isDeleting && updateText === ""){
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
    }

  }
  return <div>
    {/* <i className="bi bi-list mobile-nav-toggle d-xl-none" ></i>  */}

    {/* <!-- ======= Header ======= --> */}
    <header id="header">
      <div className="d-flex flex-column">

        <div className="profile">
          <img src={profileImg} alt="" className="img-fluid rounded-circle" />
          <h1 className="text-light"><a href="index.html">Aashish Kasar</a></h1>
          <div className="social-links mt-3 text-center">
            <a href="https://twitter.com/aashishkasar" className="twitter"><i className="bx bxl-twitter"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100063765503760" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="https://www.instagram.com/cyclist_aashish/" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="https://github.com/aashishkasar" className="fa fa-github"><i className="bx bxl-github"></i></a>
            <a href="https://www.linkedin.com/in/aashishkasar/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            <a href="https://www.strava.com/athletes/90620852" className="bi bi-strava"><i className="bx bxl-strava"></i></a>

          </div>
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
            <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
            <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
            {/* <!-- <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li> --> */}
            {/* <!-- <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li> --> */}
            <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
          </ul>
        </nav>
        {/* <!-- .nav-menu --> */}
      </div>
    </header>
    {/* <!-- End Header --> */}

    {/* <!-- ======= Hero Section ======= --> */}
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
      <div className="hero-container" data-aos="fade-in">
        <h1>Aashish Kasar</h1>
        <p>I'm <span className="typed" >{text}</span></p>
      </div>
    </section>
    {/* <!-- End Hero --> */}

    <main id="main">

      {/* <!-- ======= About Section ======= --> */}
      <section id="about" className="about">
        <div className="container">

          <div className="section-title">
            <h2>About</h2>
            <p>Aspiring Data Scientist who is keen to contribute to a cause.
              <br />I am a energetic, and geeky individual whose desire to learn is endless. </p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src={profileImg} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Aspiring Data Scientist</h3>
              <p className="fst-italic">
               Completed Training And Internship Program at Innomatics Research Lab which was 10 months long Course 
               and Four Month Internship it covered many skills and was very helpful and a great experience working in it. 
               Skills: Python (Programming Language) • Data Analysis • Data Science • Django • Flask 
               • streamlit • MLOps • Machine Learning • Deep Learning • NLP •AWS • CV • ec2• Flask • streamlet • GenAI
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>13 Feb</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 9423950182</span></li>
                    {/* <!-- <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 9423467813</span></li> --> */}
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Mumbai, Maharashtra</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    {/* <!-- <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li> --> */}
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>aashishkasar2011@gmail.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
              <p>

              </p>
            </div>
          </div>

        </div>
      </section>
      {/* <!-- End About Section --> */}



     
        {/* <!-- ======= Skills Section ======= --> */}
    <section id="skills" className="skills section-bg">
      <div className="container">
    
        <div className="section-title">
          <h2>Skills</h2>
        </div>
    
        <div className="row skills-content">
    
          <div className="col-lg-6" data-aos="fade-up">
            <ul>
              <li>Python</li>
              <li>Machine Learning (ML)</li>
              <li>Deep Learning (DL)</li>
              <li>Natural Language Processing (NLP)</li>
              <li>Computer Vision</li>
              <li>Generative AI</li>
            </ul>
          </div>
    
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <ul>
              <li>Visualization</li>
              <li>Flask</li>
              <li>Django</li>
              <li>MySQL</li>
              <li>Tableau</li>
              <li>Git</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>Vertex AI</li>
            </ul>
          </div>
    
        </div>
      </div>
    </section>
    {/* <!-- End Skills Section --> */}   

    {/* <!-- ======= Resume Section ======= --> */}
    <section id="resume" className="resume">
      <div className="container">

        <div className="section-title">
          <h2>Resume</h2>
          <p>A punctual and hardworking student, very interested in learning new stuff and reserch further to unknown information.
            Looking forward to adapt and learn from training in the new environment, also meeting new friends and to work
            with together with them as a team.</p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Aashish Kasar</h4>
              <p><em> Aspiring Data Scientist who is keen to contribute to a cause.
                I am a energetic, and geeky individual whose desire to learn is endless.</em></p>
              <ul>
                <li>Mumbai, Maharashtra IN</li>
                <li>9423467813</li>
                <li>aashishkasar2011@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor in Electrical Engineering</h4>
              {/* <!-- <h5>2022-2024</h5> --> */}
              <p><em>Pune University, Nashik, MH</em></p>
              <p></p>
            </div>
            <div className="resume-item">
              <h4>PG in Information Technology</h4>
              {/* <!-- <h5>2021 - 2023</h5> --> */}
              <p><em>MIT, Pune, MH (2023)</em></p>
              <p></p>
            </div>
            <div className="resume-item">
              <h4>Certification IBM Data Sacince</h4>
              <p><em>Innomatic Reserch Lab, Hyderbad,TS (2022-2023)</em></p>
              <p></p>
            </div>
            <div className="resume-item">
              <h4> Sports Analytics Course(2023)</h4>
              <p><em>Course on Digital Vidya Powered by Royals School Of Business</em></p>
              <p></p>
            </div>
            <div className="resume-item">
              <h4> Oracle Cloud Infrastructure 2024 Generative AI Certified ProfessionalOracle Cloud Infrastructure 2024 Generative AI Certified Professional</h4>
              <p><em>Oracle</em></p>
              <p></p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Data Sacince Intern in Innomatics Reserch Lab</h4>
              <h5>AUG 2022 - Present</h5>
              <p><em>Experion, Hyderbad, TS </em></p>
              <ul>
                <li>An understanding of programming languages, such as Python and MySQL.</li>
                <li>The ability to visualize data by using such data science tools as Tableau. </li>
                <li>An understanding of how to use machine learning to collect data and develop predictive models.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Projects</h4>

              {/* <!-- <p><em>Stepping Stone Advertising, New York, NY</em></p> --> */}
              <ul>
                <li>Tomato leaf disease detection using CNN</li>
                <li>PRICE ANALYSIS ON LAPTOPS BASED ON FEATURES</li>
                <li>Regex-Matching-Web-App-Development-Project Deploy at AWS ec2</li>
                <li>GenAI App AI Code Reviewer</li>
                <li>Building Gemini AI based Streamlit Chat Application</li>
                <li>Build RAG System with Lang Chain Framework</li>

              </ul>
            </div>
            <div className="resume-item">
              <h4>Hobbies</h4>
              <ul>
                <li>Cycling</li>
                <li>Cricket</li>
              </ul>
            </div>
          </div>
        </div>

        <form style={{textAlign:"center"}}>

          <p> </p>
        </form>


      </div>
      </section>
      {/* <!-- End Resume Section --> */}


      {/* <!-- ======= Contact Section ======= --> */}
      <section id="contact" className="contact">
        <div className="container">

          <div className="section-title">
            <h2>Contact</h2>

          </div>

          <div className="row" data-aos="fade-in">

            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>Mumbai, Maharashtra</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>aashishkasar2011@gmail.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+91 9423467813</p>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41873.623061306826!2d72.87616657595838!3d19.081268769762385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8df0b86ea1b%3A0xce7eea4b1bbdf296!2sBandra%20Kurla%20Complex%2C%20Bandra%20East%2C%20Mumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sbg!4v1669555310748!5m2!1sen!2sbg" id="map-iframe-of-add" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>

            </div>

            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label for="name">Your Name</label>
                    <input type="text" name="name" className="form-control" id="name" required />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="name">Your Email</label>
                    <input type="email" className="form-control" name="email" id="email" required />
                  </div>
                </div>
                <div className="form-group">
                  <label for="name">Subject</label>
                  <input type="text" className="form-control" name="subject" id="subject" required />
                </div>
                <div className="form-group">
                  <label for="name">Message</label>
                  <textarea className="form-control" name="message" rows="10" required ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>

          </div>

        </div>
        </section>
        {/* <!-- End Contact Section --> */}

        </main>
        {/* // <!-- End #main --> */}

        {/* <!-- ======= Footer ======= --> */}
        <footer id="footer">
          <div className="container">
            <div className="copyright">
              &copy; Copyright <strong><div>AashishKasarFaundation</div></strong>
            </div>
            <div className="credits">


            </div>
          </div>
          </footer>
          {/* // <!-- End  Footer --> */}

          <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

          {/* <!-- Vendor JS Files --> */}
         
        </div>
}

        export default App;

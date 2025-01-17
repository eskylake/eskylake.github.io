import { Link } from 'react-router-dom';

import './App.css';

function JobResume() {
  return (
    <div className="App">
      <header className="top-area">
        <div className="header-area">
          <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">

            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                  <i className="fa fa-bars"></i>
                </button>
                <Link className="navbar-brand" to="#">Ali Tavafi</Link>
              </div>


              <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                  <li className=" smooth-menu active"></li>
                  <li className="smooth-menu"><a href="#experience">experience</a></li>
                  <li className="smooth-menu"><a href="#skills">skills</a></li>
                  <li className="smooth-menu"><a href="#projects">projects</a></li>
                  <li className="smooth-menu"><a href="#courses">courses</a></li>
                  <li className="smooth-menu"><a href="#interests">interests</a></li>
                  <li className="smooth-menu"><a href="#education">education</a></li>
                  <li className="smooth-menu"><a href="#profiles">profile</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="clearfix"></div>

      </header>

      <section id="welcome-hero" className="welcome-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="header-text">
                <h2>Ali Tavafi <br /> <h3>Software Engineer</h3></h2>
              </div>
            </div>
          </div>
        </div>

      </section>



      <section id="about" className="about">
        <div className="section-heading text-center">
          <h2>about me</h2>
        </div>
        <div className="container">
          <div className="about-content">
            <div className="row">
              <div className="col-sm-6">
                <div className="single-about-txt">
                  <p className='font-weight-bold text-justify'>
                    <b>Hi there! 👋 I'm Ali, a Software Engineer with a passion for building scalable web applications and solving complex technical challenges. Over the past 7+ years, I've dedicated myself to continuous growth and learning in the world of software development.
                      My technical toolkit is extensive – I work primarily with TypeScript, JavaScript, Go, and PHP, and I'm well-versed in both frontend and backend technologies. 🧑‍💻 <br />
                      Currently, I'm keeping an eye out for opportunities to dive into Rust and strengthen my understanding of fundamental computer science concepts. I believe that staying curious and being open to learning is what keeps our field exciting!
                      But there's more to life than code! I'm a huge animal lover and dream of becoming an animal rights activist someday. I believe in being a voice for those who can't speak for themselves. ✌️ Music is another huge part of who I am. It's the soundtrack to my coding sessions and adds rhythm to everything I do. 🥁
                      </b>
                  </p>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="single-about-add-info">
                        <h3>phone</h3>
                        <p>+98-912-871-1947</p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="single-about-add-info">
                        <h3>email</h3>
                        <p>a.eskylake@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-offset-1 col-sm-5">
                <div className="single-about-img">
                  <img src="assets/images/about/me.jpg" alt="profile_image" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience">
        <div className="section-heading text-center">
          <h2>Working experience</h2>
        </div>
        <div className="container">
          <div className="experience-content">
            <div className="main-timeline">
              <ul>
                <li>
                  <div className="single-timeline-box fix">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="experience-time text-right">
                          <h2>March 2021 - Present</h2>
                          <h3>Senior Software Engineer</h3>
                        </div>
                      </div>
                      <div className="col-md-offset-1 col-md-5">
                        <div className="timeline">
                          <div className="timeline-content">
                            <h4 className="title">
                              <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                              <a href="https://asam.company" target="_blank">ASAM</a>
                            </h4>
                            <h5>Tehran, Iran - Hybrid</h5>
                            <p className="description">
                              At ASAM, a technology infrastructure company serving major media organizations, I
                              architected and led the development of multiple critical systems since March 2021. I
                              spearheaded the Darkoob web push notification platform, which captured 80% market share
                              among media companies, while also contributing to the implementation of VOD services and
                              analytics solutions. A key achievement was transforming the media CMS to a microservices
                              architecture, resulting in 90% improvement in content delivery stability. Working with
                              technologies like TypeScript, Go, PHP, Node.js, and GraphQL, I also implemented
                              comprehensive monitoring systems that enhanced debugging efficiency across our media
                              delivery infrastructure.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="single-timeline-box fix">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="experience-time text-right">
                          <h2>April 2020 - March 2021</h2>
                          <h3>Software Engineer</h3>
                        </div>
                      </div>
                      <div className="col-md-offset-1 col-md-5">
                        <div className="timeline">
                          <div className="timeline-content">
                            <h4 className="title">
                              <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                              <a href="https://podro.com" target="_blank">Podro</a>
                            </h4>
                            <h5>Tehran, Iran - Hybrid</h5>
                            <p className="description">
                              At Podro, an e-commerce and logistics startup, I contributed significantly to the
                              development of PodroShop and PodroPin platforms. I played a key role in modernizing
                              PodroShop's architecture from monolithic to microservices, achieving an 80% improvement in
                              system stability. Working with technologies like JavaScript, PHP, Node.js, and React, I
                              developed critical components of the multi-carrier delivery integration system and
                              implemented real-time order tracking features that reduced customer support inquiries by
                              40%. Through collaboration with the DevOps team, I helped optimize deployment workflows
                              and improve system efficiency using technologies like Docker, Kubernetes, and RabbitMQ.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="single-timeline-box fix">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="experience-time text-right">
                          <h2>October 2018 - March 2020</h2>
                          <h3>Senior Back-end Developer</h3>
                        </div>
                      </div>
                      <div className="col-md-offset-1 col-md-5">
                        <div className="timeline">
                          <div className="timeline-content">
                            <h4 className="title">
                              <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                              HiTrav
                            </h4>
                            <h5>Tehran, Iran - On-site</h5>
                            <p className="description">
                              At HiTrav, a Turkish maritime tourism startup, I led the backend development of an
                              innovative vessel booking platform from October 2018 to March 2020. Initially serving as a
                              backend consultant, I later transitioned to a senior role where I directed a team of over
                              10 members in delivering scalable booking features. Using technologies like Node.js,
                              PHP, and React, I implemented an efficient online booking system that resulted in a
                              70% increase in yacht reservations. The platform revolutionized the yacht, ship, and boat
                              reservation process in Turkey's maritime tourism sector, while maintaining high system
                              reliability and optimal user experience.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>


                <li>
                  <div className="single-timeline-box fix">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="experience-time text-right">
                          <h2>November 2016 - March 2019</h2>
                          <h3>Back-end Developer</h3>
                        </div>
                      </div>
                      <div className="col-md-offset-1 col-md-5">
                        <div className="timeline">
                          <div className="timeline-content">
                            <h4 className="title">
                              <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                              <a href="https://baharnet.ir" target="_blank">Bahar Samaneh Shargh</a>
                            </h4>
                            <h5>Tehran, Iran - On-site</h5>
                            <p className="description">
                              At Bahar Samaneh Shargh, I worked as a backend developer, focusing on the development and enhancement of the company's custom CRM and ERP applications. Working with technologies like PHP, Node.js, and multiple database systems including MySQL, MongoDB, and Oracle, I played a key role in redesigning the legacy CRM into a RESTful API architecture, which achieved a 90% improvement in system scalability. This transformation significantly enhanced the company's internal operations and data management capabilities.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </div>

      </section>


      <section id="skills" className="education">
        <div className="section-heading text-center">
          <h2>Skills</h2>
        </div>
        <br></br>
        <div className="container">
          <div class="row">
            <div class="badge-container">
              <span class="badge-gpt blue">Experienced</span>
              <span class="badge-gpt yellow">Minor Experience</span>

            </div>

            <div class="badge-container">
            </div>
          </div>
          <div className="section-heading text-center">
            <h3>Tools & Libraries</h3>
          </div>

          <div class="row">
            <div class="badge-container">
              <span className="badge-gpt blue">TypeScript</span>
              <span className="badge-gpt blue">JavaScript</span>
              <span className="badge-gpt blue">PHP</span>
              <span className="badge-gpt blue">Node.js</span>
              <span className="badge-gpt blue">GraphQL</span>
              <span className="badge-gpt blue">RESTful APIs</span>
              <span className="badge-gpt blue">React.js</span>
              <span className="badge-gpt blue">Next.js</span>
              <span className="badge-gpt blue">Nest.js</span>
              <span className="badge-gpt blue">Fastify</span>
              <span className="badge-gpt blue">Laravel</span>
              <span className="badge-gpt blue">Symfony</span>
              <span className="badge-gpt blue">Yii2</span>
              <span className="badge-gpt blue">PostgreSQL</span>
              <span className="badge-gpt blue">MySQL</span>
              <span className="badge-gpt blue">MongoDB</span>
              <span className="badge-gpt blue">Redis</span>
              <span className="badge-gpt blue">RabbitMQ</span>
              <span className="badge-gpt blue">Google Cloud Platform (GCP)</span>
              <span className="badge-gpt blue">Firebase</span>
              <span className="badge-gpt blue">Docker</span>
              <span className="badge-gpt blue">Kubernetes</span>
              <span className="badge-gpt blue">Git</span>
              <span className="badge-gpt blue">Github Actions</span>
              <span className="badge-gpt blue">Gitlab CI/CD</span>
              <span className="badge-gpt blue">Grafana</span>
              <span className="badge-gpt blue">Prometheus</span>
              <span className="badge-gpt blue">Linux</span>
            </div>
          </div>
          <div class="row">
            <div class="badge-container">
              <span className="badge-gpt yellow">Go</span>
              <span className="badge-gpt yellow">Vue.js</span>
              <span className="badge-gpt yellow">NATS</span>
              <span className="badge-gpt yellow">Typesense</span>
              <span className="badge-gpt yellow">MSSQL</span>
              <span className="badge-gpt yellow">Oracle</span>
            </div>
          </div>
          <br></br>


          <div className="section-heading text-center">
            <h3>Concepts & Skills</h3>
          </div>

          <div class="row">
            <div class="badge-container">
              <span className="badge-gpt blue">Microservices</span>
              <span className="badge-gpt blue">Automated Testing & TDD</span>
              <span className="badge-gpt blue">Object-oriented programming</span>
              <span className="badge-gpt blue">Design Patterns</span>
              <span className="badge-gpt blue">System Design</span>
              <span className="badge-gpt blue">SOLID</span>
              <span className="badge-gpt blue">GRASP</span>
              <span className="badge-gpt blue">SQL</span>
              <span className="badge-gpt blue">NoSQL</span>
              <span className="badge-gpt blue">CI/CD</span>
              <span className="badge-gpt blue">Agile</span>
            </div>
          </div>
        </div>

        <div className="section-heading text-center">
          <br></br>
          <br></br>

          <h3>Languages</h3>
        </div>
        <br></br>
        <div className='row'>
          <span class="text-center">English (Professional Working Proficiency)</span>
        </div>
        <br></br>
        <div className='row'>
          <span class="text-center">Persian (Native)</span>
        </div>
        <br></br>
        <br></br>

      </section>


      <section id="courses" className="education">
        <div className="section-heading text-center">
          <h2>Courses & Reading</h2>
        </div>
        <br></br><br></br>
        <div className="container">
          <div class="list-group text-left">
            <div className="list-group text-left">

              <div
                  className="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
                <div className="w-100 justify-content-between">
                  <h5 className="mb-1">Effective TypeScript <span className="badge-c-r course">book</span></h5>
                  <small>2024</small><br/>
                  <small>O'Reilly</small>
                  <p className="mb-1"><span className="badge badge-pill">TypeScript</span> <span
                      className="badge badge-pill">JavaScript</span> <span
                      className="badge badge-pill">Type Design</span>
                  </p>
                </div>
              </div>

              <div
                  className="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
                <div className="w-100 justify-content-between">
                  <h5 className="mb-1">Enterprise TypeScript <span className="badge-c-r course">course</span>
                  </h5>
                  <small>2024</small><br/>
                  <small>FrontendMasters</small>
                  <p className="mb-1"><span className="badge badge-pill">TypeScript</span> <span
                      className="badge badge-pill">JavaScript</span> <span
                      className="badge badge-pill">Scaling</span> <span
                      className="badge badge-pill">Architecture</span></p>
                </div>
              </div>

              <div
                  className="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
                <div className="w-100 justify-content-between">
                  <h5 className="mb-1">Intermediate TypeScript, v2 <span className="badge-c-r course">course</span>
                  </h5>
                  <small>2024</small><br/>
                  <small>FrontendMasters</small>
                  <p className="mb-1"><span className="badge badge-pill">TypeScript</span> <span
                      className="badge badge-pill">JavaScript</span> <span
                      className="badge badge-pill">Scaling</span></p>
                </div>
              </div>

              <div
                  className="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
                <div className="w-100 justify-content-between">
                  <h5 className="mb-1">TypeScript 5+ Fundamentals, v4 <span className="badge-c-r course">course</span>
                  </h5>
                  <small>2023</small><br/>
                  <small>FrontendMasters</small>
                  <p className="mb-1"><span className="badge badge-pill">TypeScript</span> <span
                      className="badge badge-pill">JavaScript</span></p>
                </div>
              </div>

              <div
                  className="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
                <div className="w-100 justify-content-between">
                  <h5 className="mb-1">Software Engineering at Google <span className="badge-c-r course">book</span>
                  </h5>
                  <small>2023</small><br/>
                  <small>O'Reilly</small>
                  <p className="mb-1"><span className="badge badge-pill">Engineering</span> <span
                      className="badge badge-pill">Leadership</span> <span
                      className="badge badge-pill">Scaling</span> <span
                      className="badge badge-pill">Documentation</span> <span
                      className="badge badge-pill">System Design</span> <span
                      className="badge badge-pill">Dependency Management</span>
                  </p>
                </div>
              </div>

              <div
                  className="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
                <div className="w-100 justify-content-between">
                  <h5 className="mb-1">Node JS: Advanced Concepts <span className="badge-c-r course">course</span></h5>
                  <small>2022</small><br/>
                  <small>Udemy</small>
                  <p className="mb-1"><span className="badge badge-pill">Node.js</span> <span
                      className="badge badge-pill">AWS S3</span> <span
                      className="badge badge-pill">Web Development</span> <span
                      className="badge badge-pill">Multithreading</span> <span
                      className="badge badge-pill">System Design</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>


      <section id="interests" className="profiles">
        <div className="profiles-details">
          <div className="section-heading text-center">
            <h2>Interests</h2>
          </div>
          <div className="container">
            <div className="profiles-content">
              <div className="row">
                <div className="col-sm-4">
                  <div className="single-profile">
                    <div className="profile-txt">
                      <div className="profile-icon-name"><b>Machine Learning</b></div>
                    </div>
                    <div className="single-profile-overlay">
                      <div className="profile-txt">
                        <div className="profile-icon-name"><b>Machine Learning</b></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-profile">
                    <div className="profile-txt">
                      <div className="profile-icon-name"><b>Cloud Computing</b></div>
                    </div>
                    <div className="single-profile-overlay">
                      <div className="profile-txt">
                        <div className="profile-icon-name"><b>Cloud Computing</b></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-profile profile-no-border">
                    <div className="profile-txt">
                      <div className="profile-icon-name"><b>Software Engineering</b></div>
                    </div>
                    <div className="single-profile-overlay">
                      <div className="profile-txt">
                        <div className="profile-icon-name"><b>Software Engineering</b></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile-border"></div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="single-profile">
                    <div className="profile-txt">
                      <div className="profile-icon-name"><b>Computer Vision</b></div>
                    </div>
                    <div className="single-profile-overlay">
                      <div className="profile-txt">
                        <div className="profile-icon-name"><b>Computer Vision</b></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-profile">
                    <div className="profile-txt">
                      <div className="profile-icon-name"><b>DevOps</b></div>
                    </div>
                    <div className="single-profile-overlay">
                      <div className="profile-txt">
                        <div className="profile-icon-name"><b>DevOps</b></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-profile profile-no-border">
                    <div className="profile-txt">
                      <div className="profile-icon-name"><b>System Design</b></div>
                    </div>
                    <div className="single-profile-overlay">
                      <div className="profile-txt">
                        <div className="profile-icon-name"><b>system Design</b></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>


      <section id="education" className="education">
        <div className="section-heading text-center">
          <h2>education</h2>
        </div>
        <div className="container">
          <div className="education-horizontal-timeline">
            <div className="row">
              <div className="col-sm-6">
                <div className="single-horizontal-timeline">
                  <div className="experience-time">
                    <h2>2016 - 2018</h2>
                    <h3>Associate <span>of </span> Computer Software Engineering</h3>
                  </div>
                  <div className="timeline-horizontal-border">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                    <span className="single-timeline-horizontal"></span>
                  </div>
                  <div className="timeline">
                    <div className="timeline-content">
                      <h4 className="title">
                        Technical and Vocational University
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="single-horizontal-timeline">
                  <div className="experience-time">
                    <h2>2019 - 2021</h2>
                    <h3>Bachelor <span>of </span> Information Technology</h3>
                  </div>
                  <div className="timeline-horizontal-border">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                    <span className="single-timeline-horizontal"></span>
                  </div>
                  <div className="timeline">
                    <div className="timeline-content">
                      <h4 className="title">
                        University of Applied Science and Technology
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>


      </section>


      <section id="profiles" className="profiles">
        <div className="profiles-details">
          <div className="section-heading text-center">
            <h2>profiles</h2>
          </div>
          <div className="container">
            <div className="profiles-content">
              <div className="row">
                <div className="col-sm-4">
                  <div className="single-profile">
                    <a href='https://www.linkedin.com/in/alitavafi/' target="_blank">
                      <div className="profile-txt">
                        <i className="fa fa-linkedin"></i>
                        <div className="profile-icon-name">LinkedIn</div>
                      </div>
                      <div className="single-profile-overlay">
                        <div className="profile-txt">
                          <a href='https://www.linkedin.com/in/alitavafi/' target="_blank"><i className="fa fa-linkedin"></i></a>
                          <div className="profile-icon-name">LinkedIn</div>
                        </div>
                      </div>
                    </a>
                  </div>

                </div>
                <div className="col-sm-4">
                  <div className="single-profile">
                    <a href='https://medium.com/@ali.tavafii' target="_blank">
                      <div className="profile-txt">
                        <i className="fa fa-medium"></i>
                        <div className="profile-icon-name">Medium</div>
                      </div>
                      <div className="single-profile-overlay">
                        <div className="profile-txt">
                          <a href='https://medium.com/@ali.tavafii' target="_blank"><i className="fa fa-medium"></i></a>
                          <div className="profile-icon-name">Medium</div>
                        </div>
                      </div>
                    </a>

                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-profile profile-no-border">
                    <a href='https://github.com/eskylake' target="_blank">
                      <div className="profile-txt">
                        <i className="flaticon-github-logo"></i>
                        <div className="profile-icon-name">github</div>
                      </div>
                      <div className="single-profile-overlay">
                        <div className="profile-txt">
                          <a href='https://github.com/eskylake' target="_blank"><i className="flaticon-github-logo"></i></a>
                          <div className="profile-icon-name">github</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>


      <footer id="footer-copyright" className="footer-copyright">
        <div className="container">
          <div className="hm-footer-copyright text-center">
            <p>
              &copy; copyright <i>Ali Tavafi</i>.
            </p>
          </div>
        </div>

        <div id="scroll-Top">
          <div className="return-to-top">
            <i className="fa fa-angle-up " id="scroll-top" ></i>
          </div>

        </div>

      </footer>

    </div>
  );
}

export default JobResume;


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
                <h2>Ali Tavafi <br /> Resume</h2>
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
                    <b>Results-driven Senior Software Engineer with 7+ years of expertise in full-stack development and microservices
                      architecture. Proven track record in scaling web applications using TypeScript, JavaScript, PHP, and Go.
                      Demonstrated success in leading technical teams and modernizing legacy systems, combining technical
                      excellence with strong collaborative abilities. Seeking to leverage my expertise in RESTful/GraphQL APIs and
                      distributed systems to drive innovation and technical excellence in your engineering team.</b>
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
                          <h2>2021 - Present</h2>
                          <h3>ML Engineer</h3>
                        </div>
                      </div>
                      <div className="col-md-offset-1 col-md-5">
                        <div className="timeline">
                          <div className="timeline-content">
                            <h4 className="title">
                              <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                              Aasaam
                            </h4>
                            <p className="description">
                              Data engineering, Time Series prediction for Covid density, working with Transformers, word vectors, performing transfer learning & sentiment analysis, image processing, working with graph data structure, utilizing messaging systems, building company MLOps ecosystem.
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
                          <h2>2020 - 2021</h2>
                          <h3>Data Engineer</h3>
                        </div>
                      </div>
                      <div className="col-md-offset-1 col-md-5">
                        <div className="timeline">
                          <div className="timeline-content">
                            <h4 className="title">
                              <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                              QuantRisk
                            </h4>
                            <h5>Remote, USA</h5>
                            <p className="description">
                              Researching US electric market, identifying data and extracting, transforming and loading market data.
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
                          <h2>2019 - 2020</h2>
                          <h3>Business Intelligence Developer</h3>
                        </div>
                      </div>
                      <div className="col-md-offset-1 col-md-5">
                        <div className="timeline">
                          <div className="timeline-content">
                            <h4 className="title">
                              <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                              AhanOnline
                            </h4>
                            <p className="description">
                              Working with sql-server, power BI and python, writing complex queries, API handling and python scraping, implementing an ARIMA model for predicting steel and iron price, building dashboards and analyzing customer data, working with SSMS, SSIS and SSRS.
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
              <span class="badge-gpt blue">Python</span>
              <span class="badge-gpt blue">Tensorflow</span>
              <span class="badge-gpt blue">Transformers (Huggingface Library)</span>
              <span class="badge-gpt blue">Sklearn</span>
              <span class="badge-gpt blue">NetworkX</span>
              <span class="badge-gpt blue">OpenCV</span>
              <span class="badge-gpt blue">DARTS</span>
              <span class="badge-gpt blue">PROPHET</span>
              <span class="badge-gpt blue">ArangoDB</span>
              <span class="badge-gpt blue">MongoDB</span>
              <span class="badge-gpt blue">MySQL</span>
              <span class="badge-gpt blue">PostgreSQL</span>
              <span class="badge-gpt blue">Power BI</span>
              <span class="badge-gpt blue">Pytest</span>
              <span class="badge-gpt blue">Linux</span>
              <span class="badge-gpt blue">Git</span>
              <span class="badge-gpt blue">Docker</span>
              <span class="badge-gpt blue">FastAPI</span>
              <span class="badge-gpt blue">Multiprocessing</span>
              <span class="badge-gpt blue">NiFi</span>
              <span class="badge-gpt blue">Github Actions</span>
              <span class="badge-gpt blue">Gitlab CI/CD</span>
            </div>
          </div>
          <div class="row">
            <div class="badge-container">
              <span class="badge-gpt yellow">NATS</span>
              <span class="badge-gpt yellow">PySpark</span>
              <span class="badge-gpt yellow">Django</span>
              <span class="badge-gpt yellow">PyCaret</span>
              <span class="badge-gpt yellow">NodeJS</span>
              <span class="badge-gpt yellow">Go</span>
              <span class="badge-gpt yellow">MetaFlow</span>
              <span class="badge-gpt yellow">MLFlow</span>
              <span class="badge-gpt yellow">React</span>
            </div>
          </div>
          <br></br>


          <div className="section-heading text-center">
            <h3>Concepts & Skills</h3>
          </div>

          <div class="row">
            <div class="badge-container">
              <span class="badge-gpt blue">Machine Learning</span>
              <span class="badge-gpt blue">Transfer Learning</span>
              <span class="badge-gpt blue">Computer Vision</span>
              <span class="badge-gpt blue">Quantization</span>
              <span class="badge-gpt blue">Data Engineering</span>
              <span class="badge-gpt blue">LLMs</span>
              <span class="badge-gpt blue">Concurrent Computing</span>
              <span class="badge-gpt blue">CNNs</span>
              <span class="badge-gpt blue">NLP</span>
              <span class="badge-gpt blue">Transformers</span>
              <span class="badge-gpt blue">Word Vectorization</span>
              <span class="badge-gpt blue">Sentiment Analysis</span>
              <span class="badge-gpt blue">BERT</span>
              <span class="badge-gpt blue">Graph Theory</span>
              <span class="badge-gpt blue">Timeseries Prediction</span>
              <span class="badge-gpt blue">Data Visualization</span>
              <span class="badge-gpt blue">SQL</span>
              <span class="badge-gpt blue">NoSQL</span>
              <span class="badge-gpt blue">CI/CD</span>
              <span class="badge-gpt blue">XGBoost</span>
              <span class="badge-gpt blue">Ensemble Models</span>
            </div>
          </div>
          <div class="row">
            <div class="badge-container">
              <span class="badge-gpt yellow">MLOPS</span>
              <span class="badge-gpt yellow">InfoSec</span>
              <span class="badge-gpt yellow">Microservices</span>
              <span class="badge-gpt yellow">Cryptocurrencies</span>
              <span class="badge-gpt yellow">Algorithmic Trading</span>
              <span class="badge-gpt yellow">TDD</span>
              <span class="badge-gpt yellow">SOLID</span>
              <span class="badge-gpt yellow">Backend Developement</span>
              <span class="badge-gpt yellow">Scraping</span>
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
          <span class="text-center">English (Professional Proficiency)</span>
          <div className='text-center'><small class="text-center">TOEFL Results -{'>'} Reading: 26, Listening: 26, Speaking: 22, Writing: 23</small></div>
        </div>
        <br></br>
        <div className='row'>
          <span class="text-center">French (Elementry)</span>
        </div>
        <br></br>
        <br></br>

      </section>


      <section id="projects" className="about">
        <div className="section-heading text-center">
          <h2>Projects</h2>
        </div>
        <br></br><br></br>
        <div className="container">
          <div class="list-group text-left">
            <div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
              <div class="w-100 justify-content-between">
                <h5 class="mb-1">Aasaam Core NLP and MLOps Ecosystem</h5>
              </div>
              <p class="mb-1">Implementing a core NLP system for various goals like sentiment analysis, NER, tag generation and etc for aasaam CMS using Python, FastAPI, MySQL, Label Studio, MongoDB, React, NGINX and leveraging MLOps tools (MLFlow and Metaflow) for standardizing experiments and pipeline orchestration of machine learning workflows.</p>
              <p class="mb-1"><span class="badge badge-pill">MLOps</span> <span class="badge badge-pill">NLP</span> <span class="badge badge-pill">System Design</span> <span class="badge badge-pill">React</span> <span class="badge badge-pill">Docker</span></p>
            </div>
            <div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
              <div class="w-100 justify-content-between">
                <h5 class="mb-1">Penguin Keyword Mapper System</h5>
              </div>
              <p class="mb-1">Building a system with micro-service architecture using NATS, ArangoDB, NodeJS and Python for clustering a large list of keywords and phrases by using graph data structure and unsupervised graph clustering method (spectral clustering)</p>
              <p class="mb-1"><span class="badge badge-pill">Graph Theory</span> <span class="badge badge-pill">Spectral Clustering</span> <span class="badge badge-pill">ArangoDB</span> <span class="badge badge-pill">NetworkX</span> <span class="badge badge-pill">NATS</span> <span class="badge badge-pill">NodeJS</span></p>
            </div>

            <div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
              <div class="w-100 justify-content-between">
                <h5 class="mb-1">Transfer learning & Sentiment Analysis (Comment Classification) Using Transformers Models (BERT)</h5>
              </div>
              <p class="mb-1">Re-Training a BERT persian Language model on comment data and classifying offensive comments with an accuracy of 79%. </p>
              <p class="mb-1"><span class="badge badge-pill">Transfer Learning</span> <span class="badge badge-pill">Word Vectorization</span> <span class="badge badge-pill">BERT</span> <span class="badge badge-pill">Sentiment Analysis</span> <span class="badge badge-pill">Transformers</span> <span class="badge badge-pill">NLP</span></p>
            </div>

            <div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
              <div class="w-100 justify-content-between">
                <h5 class="mb-1">Covid Density Prediction</h5>
              </div>
              <p class="mb-1">Predicting the density of corona per region by researching various time-series models in DARTS python library.</p>
              <p class="mb-1"><span class="badge badge-pill">Time Series</span> <span class="badge badge-pill">PROPHET</span> <span class="badge badge-pill">RNN</span> <span class="badge badge-pill">LSTM</span> <span class="badge badge-pill">DARTS</span></p>
            </div>

            <div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
              <div class="w-100 justify-content-between">
                <h5 class="mb-1">Predicting Project Cost Using Decision Tree Regressor, Random Forest, XGBoost & Neural Networks Using MSP Files Database</h5>
              </div>
              <p class="mb-1">In this thesis data was extracted from msp files, preprocessed, analyzed and after extracting insights several models were trained on it. The results shows that using ML methods in cost prediction outperforms traditional predictions.<br /> <a href='https://github.com/rezashabrang/construction-prediction'>GITHUB LINK</a></p>
              <p class="mb-1"><span class="badge badge-pill">Bachelor Thesis</span> <span class="badge badge-pill">Decision Tree</span> <span class="badge badge-pill">XGBoost</span> <span class="badge badge-pill">Neural Networks</span></p>
            </div>
          </div>
        </div>

      </section>


      <section id="courses" className="education">
        <div className="section-heading text-center">
          <h2>Courses & Reading</h2>
        </div>
        <br></br><br></br>
        <div className="container">
          <div class="list-group text-left">
            <div class="list-group text-left">
              <div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
                <div class="w-100 justify-content-between">
                  <h5 class="mb-1">Advanced Computer Vision With Tensorflow <span class="badge-c-r course">course</span> </h5>
                  <small>2022-2023</small><br />
                  <small>Ongoing</small><br />
                  <small>Coursera/Deeplearning.ai</small>
                  <p class="mb-1"><span class="badge badge-pill">Tensorflow</span> <span class="badge badge-pill">Saliency</span> <span class="badge badge-pill">Object Detection</span> <span class="badge badge-pill">Image Segmentation</span> <span class="badge badge-pill">Image Interpretation</span></p>
                </div>
              </div>
              <div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
                <div class="w-100 justify-content-between">
                  <h5 class="mb-1">MLOps Specialization <span class="badge-c-r course">course</span></h5>
                  <small>2022-2023</small><br />
                  <small>2 months (Audit)</small><br />
                  <small>Coursera/Deeplearning.ai</small>
                  <p class="mb-1"><span class="badge badge-pill">Tensorflow</span> <span class="badge badge-pill">Concept & Data Drift</span> <span class="badge badge-pill">Pipeline Structuring</span> <span class="badge badge-pill">Model & Data Registry</span> <span class="badge badge-pill">Model Monitoring</span></p>
                </div>
              </div>
              <div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
                <div class="w-100 justify-content-between">
                  <h5 class="mb-1">InfoSec Course <span class="badge-c-r course">course</span> </h5>
                  <small>2023</small><br />
                  <small>1 Year</small><br />
                  <small>Aasaam</small>
                  <p class="mb-1"><span class="badge badge-pill">Recon</span> <span class="badge badge-pill">Burp Suite</span> <span class="badge badge-pill">XSS-Based Attacks</span> <span class="badge badge-pill">SQLi</span> <span class="badge badge-pill">IDOR</span> <span class="badge badge-pill">Logical Hunting</span> <span class="badge badge-pill">APIs</span></p>
                </div>
              </div>

              <div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
                <div class="w-100 justify-content-between">
                  <h5 class="mb-1">Designing Machine Learning Systems <span class="badge-c-r book">book</span></h5>
                  <small>Chip Huyen</small>
                  <p class="mb-1"><span class="badge badge-pill">MLOps</span> <span class="badge badge-pill">AutoML</span> <span class="badge badge-pill">Continual Learning</span> <span class="badge badge-pill">Infrastructure</span></p>
                </div>
              </div>

              <div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
                <div class="w-100 justify-content-between">
                  <h5 class="mb-1">Deep Learning Specialization <span class="badge-c-r course">course</span></h5>
                  <small>2021</small><br />
                  <small>3 months (Audit)</small><br />
                  <small>Coursera/Deeplearning.ai</small>
                  <p class="mb-1"><span class="badge badge-pill">Model Tuning</span> <span class="badge badge-pill">Architecture Building</span> <span class="badge badge-pill">Tensorflow</span></p>
                </div>
              </div>

              <div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
                <div class="w-100 justify-content-between">
                  <h5 class="mb-1">Building Microservices <span class="badge-c-r book">book</span></h5>
                  <small>Sam Newman</small>
                  <p class="mb-1"><span class="badge badge-pill">Modeling</span> <span class="badge badge-pill">Communication Styles</span> <span class="badge badge-pill">Workflow</span> <span class="badge badge-pill">Resiliency</span> <span class="badge badge-pill">Scaling</span></p>
                </div>
              </div>

              <div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
                <div class="w-100 justify-content-between">
                  <h5 class="mb-1">High Performance MySQL <span class="badge-c-r book">book</span></h5>
                  <small>Silvia Botros</small>
                  <p class="mb-1"><span class="badge badge-pill">Monitoring</span> <span class="badge badge-pill">Server Optimization</span> <span class="badge badge-pill">Query Optimization</span> <span class="badge badge-pill">Indexing</span> <span class="badge badge-pill">Sharding</span> <span class="badge badge-pill">Replication</span> <span class="badge badge-pill">Scaling</span></p>
                </div>
              </div>

              <div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
                <div class="w-100 justify-content-between">
                  <h5 class="mb-1">Advanced Algorithmic Thinking and Data Structures <span class="badge-c-r course">course</span></h5>
                  <small>2020</small><br />
                  <small>3 months</small><br />
                  <small>Quera.ir</small>
                  <p class="mb-1"><span class="badge badge-pill">Algorithms</span> <span class="badge badge-pill">Data Structures</span> <span class="badge badge-pill">Time & Space Complexity</span></p>
                </div>
              </div>

              <div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
                <div class="w-100 justify-content-between">
                  <h5 class="mb-1">Mathematics for Machine Learning <span class="badge-c-r book">book</span></h5>
                  <small>Marc Peter Deisenroth</small>
                  <p class="mb-1"><span class="badge badge-pill">Mathematics</span> <span class="badge badge-pill">Linear Algebra</span> <span class="badge badge-pill">Vector Calculus</span></p>
                </div>
              </div>

              <div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
                <div class="w-100 justify-content-between">
                  <h5 class="mb-1">Machine Learning Design Patterns <span class="badge-c-r book">book</span></h5>
                  <small>Valliappa Lakshmanan</small>
                  <p class="mb-1"><span class="badge badge-pill">ML Design Patterns</span></p>
                </div>
              </div>

              <div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
                <div class="w-100 justify-content-between">
                  <h5 class="mb-1"><a target='_blank' href="https://quera.org/certificate/Vyos8FV5/">AI & Machine learning Problem-Based Course</a> <span class="badge-c-r course">course</span></h5>
                  <small>2018</small><br />
                  <small>3 months</small><br />
                  <small>Quera.ir</small>
                  <p class="mb-1"><span class="badge badge-pill">scikit-learn</span> <span class="badge badge-pill">XGBoost</span> <span class="badge badge-pill">Classical ML</span></p>
                </div>
              </div>
              <div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
                <div class="w-100 justify-content-between">
                  <h5 class="mb-1"><a target='_blank' href="https://quera.org/certificate/gLshE6uR/">Advanced Python Programming</a> <span class="badge-c-r course">course</span></h5>
                  <small>2018</small><br />
                  <small>3 months</small><br />
                  <small>Quera.ir</small>
                  <p class="mb-1"><span class="badge badge-pill">Python</span></p>
                </div>
              </div>
              <div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
                <div class="w-100 justify-content-between">
                  <h5 class="mb-1">Android and Java Programming Course <span class="badge-c-r course">course</span></h5>
                  <small>2019</small><br />
                  <small>56 hours</small><br />
                  <small>Tehran Univeristy</small>
                  <p class="mb-1"><span class="badge badge-pill">Android Studio</span> <span class="badge badge-pill">Java</span></p>
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
                      <div className="profile-icon-name"><b>Deep Learning</b></div>
                    </div>
                    <div className="single-profile-overlay">
                      <div className="profile-txt">
                        <div className="profile-icon-name"><b>Deep Learning</b></div>
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
                      <div className="profile-icon-name"><b>MLOps</b></div>
                    </div>
                    <div className="single-profile-overlay">
                      <div className="profile-txt">
                        <div className="profile-icon-name"><b>MLOps</b></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-profile profile-no-border">
                    <div className="profile-txt">
                      <div className="profile-icon-name"><b>Graph Networks</b></div>
                    </div>
                    <div className="single-profile-overlay">
                      <div className="profile-txt">
                        <div className="profile-icon-name"><b>Graph Networks</b></div>
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
                    <h2>2016 - 2021</h2>
                    <h3>bachelor <span>of </span> Industrial Engineering</h3>
                  </div>
                  <div className="timeline-horizontal-border">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                    <span className="single-timeline-horizontal"></span>
                  </div>
                  <div className="timeline">
                    <div className="timeline-content">
                      <h4 className="title">
                        Amirkabir Univeristy of Technology
                      </h4>
                      <p className="description">
                        Cumulative GPA: 3.5/4 <br />
                        Last 56 Units GPA: 3.7/4
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="single-horizontal-timeline">
                  <div className="experience-time">
                    <h2>2012 - 2016</h2>
                    <h3>Diploma <span>of </span> Mathematics & Physics</h3>
                  </div>
                  <div className="timeline-horizontal-border">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                    <span className="single-timeline-horizontal"></span>
                  </div>
                  <div className="timeline">
                    <div className="timeline-content">
                      <h4 className="title">
                        Imam Jafar Sadegh High School
                      </h4>
                      <p className="description">
                        Cumulative GPA: 4/4
                      </p>
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
                    <a href='https://www.linkedin.com/in/reza-shabrang-maryaan-35466b9b/' target="_blank">
                      <div className="profile-txt">
                        <i className="fa fa-linkedin"></i>
                        <div className="profile-icon-name">LinkedIn</div>
                      </div>
                      <div className="single-profile-overlay">
                        <div className="profile-txt">
                          <a href='https://www.linkedin.com/in/reza-shabrang-maryaan-35466b9b/' target="_blank"><i className="fa fa-linkedin"></i></a>
                          <div className="profile-icon-name">LinkedIn</div>
                        </div>
                      </div>
                    </a>
                  </div>

                </div>
                <div className="col-sm-4">
                  <div className="single-profile">
                    <a href='https://medium.com/@rezashabrang.m' target="_blank">
                      <div className="profile-txt">
                        <i className="fa fa-medium"></i>
                        <div className="profile-icon-name">Medium</div>
                      </div>
                      <div className="single-profile-overlay">
                        <div className="profile-txt">
                          <a href='https://medium.com/@rezashabrang.m' target="_blank"><i className="fa fa-medium"></i></a>
                          <div className="profile-icon-name">Medium</div>
                        </div>
                      </div>
                    </a>

                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-profile profile-no-border">
                    <a href='https://github.com/rezashabrang' target="_blank">
                      <div className="profile-txt">
                        <i className="flaticon-github-logo"></i>
                        <div className="profile-icon-name">github</div>
                      </div>
                      <div className="single-profile-overlay">
                        <div className="profile-txt">
                          <a href='https://github.com/rezashabrang' target="_blank"><i className="flaticon-github-logo"></i></a>
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
              &copy; copyright <i>Reza Shabrang</i>. design and developed by <i>Reza Shabrang</i>
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


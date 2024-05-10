import React from 'react';
import { FaGithub } from 'react-icons/fa';
// import ResumeDoc from '../components/Moksh_Keloo_Resume.pdf';

const Resume = () => {
  return (
    <div name="resume" className="max-w-[940px] mx-auto p-2 pt-[60px]">
      <h2 className="text-center text-4xl font-bold">Resume</h2>
      <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
        <h2 className="text-cente text-2xl font-bold ml-2">Moksh Keloo</h2>
        <div className="flex">
          {/* <a
            href="https://www.linkedin.com/in/mokshkeloo"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn
              size={30}
              className="hover:scale-125 duration-300"
              style={{ marginRight: '2rem' }}
            />
          </a> */}
          <a href="https://github.com/mkeloo" target="_blank" rel="noreferrer">
            <FaGithub
              size={30}
              className="hover:scale-125 duration-300"
              style={{ marginRight: '2rem' }}
            />
          </a>
        </div>
      </div>
      {/* <div className="text-center py-4 text-xl m-1 font-bold uppercase tracking-wider">
        <div className="hidden sm:block">
          <p>
            Proven Leadership <span className="px-1">|</span> Web Development{' '}
            <span className="px-1">|</span> Complex Problem Solving
          </p>
        </div>
        <div className="block sm:hidden">
          <p>Proven Leadership</p>
          <p className="py-2">Software Development</p>
          <p>Complex Problem Solving</p>
        </div>
      </div> */}
      {/* <p>
        Analytical, innovative, and motivated web development professional with
        experience in customer service, team leadership, and organizational
        effectiveness in fast-paced and challenging environments. Adept at
        developing strategies and driving streamlined operations. Diverse
        analytical skills, team collaboration, and relationship building.
        Consummate professional, and motivated leader, with solid interpersonal
        abilities and complex problem-solving skills. Effective and proven track
        record of critical thinking, idea generation, and optimizing
        efficiencies.
      </p> */}

      <div>
        <h5 className="text-center underline text-2xl font-bold py-3 mt-3">
          Education
        </h5>
        <div className="flex justify-between">
          <div>
            <p className="flex flex-col">
              <span className="font-bold">University of Florida</span>{' '}
              <span>Bachelors of Science in Computer Science</span>
            </p>
          </div>
          <div>
            <p className="font-bold">May 2024</p>
          </div>
        </div>
      </div>

      {/* <div>
        <h5 className="text-center underline text-2xl font-bold py-3 mt-3">
          Relevant Coursework
        </h5>
        <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
          <li>COP 3530 Data Structures & Algorithms</li>
          <li>CDA 3101 Intro to Computer Organization</li>
          <li>COP3503C Programming Fundamentals II: (C++ principles & OOP)</li>
        </ul>
      </div> */}

      {/* Skills */}
      {/* <div className="text-center py-4 md:text-lg text-md">
        <h5 className="text-center underline text-2xl font-bold py-3 mt-3">
          Technical Skills (2+ years of Experience)
        </h5>

        <p className="py-2">
          Java | C++ | Python
          <br />
          HTML | CSS | JavaScript | TypeScript
          <br />
          ReactJS (Redux) | NextJS
          <br />
          Tailwind | Bootstrap
          <br />
          Node | Express | Django | Firebase | REST API
          <br />
          MongoDB | MySQL | PostgreSQL
          <br />
          Git | Figma (UI/UX) | Tableau | MS Suite
        </p> */}

      {/* <div className="flex flex-col-2 justify-center gap-2">
          <div className="flex flex-col items-center">
            <h5 className="text-center underline text-xl font-bold py-2 mt-3">
              Intermediate
            </h5>
            <div className="">
              <ul className="list-disc list-outside px-7 py-3 leading-relaxed">
                <li className="">
                  <span>
                    Java <span className="px-1">|</span> Python{' '}
                    <span className="px-2">|</span> C++{' '}
                  </span>
                </li>
                <li>
                  <span>
                    HTML <span className="px-1">|</span> CSS{' '}
                    <span className="px-2">|</span> JavaScript{' '}
                    <span className="px-2">|</span>TypeScript{' '}
                  </span>
                </li>
                <li>
                  <span>
                    React JS <span className="px-1">|</span> Next JS{' '}
                    <span className="px-2">|</span>JQuery{' '}
                  </span>
                </li>
                <li>
                  <span>
                    Tailwind CSS <span className="px-1">|</span> Bootstrap{' '}
                    <span className="px-2">|</span>SASS{' '}
                    <span className="px-2">|</span>SCSS{' '}
                  </span>
                </li>
                <li>
                  <span>
                    SQL <span className="px-1">|</span> PostgreSQl{' '}
                  </span>
                </li>
                <li>
                  <span>
                    GIT <span className="px-1">|</span> GitHub{' '}
                  </span>
                </li>
                <li>
                  <span>REST API</span>
                </li>
                <li>
                  <span>Figma (UI/UX Design)</span>
                </li>
                <li>
                  <span>Microsoft Suite</span>
                </li>
                <li>
                  <span>Tableau</span>
                </li>
                <li>
                  <span>Knowledge of SDLC, Agile, and Scrum Methodologies</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="text-center underline text-xl font-bold py-2 mt-3">
              Beginner
            </h5>
            <div>
              {skillBeginner.map((skill) => (
                <ul
                  key={skill.id}
                  className="py-1 list-disc list-outside px-7 leading-relaxed "
                >
                  <li>{skill.name}</li>
                </ul>
              ))}
            </div>
          </div>
        </div> */}
      {/* </div> */}

      {/* Skills in Table Format */}
      <div className="text-center py-4">
        <h5 className="underline text-2xl font-bold py-3">Technical Skills</h5>

        {/* Responsive Table */}
        <div className="overflow-x-auto mt-6">
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr className="text-lg font-semibold uppercase text-gray-700 bg-gray-100">
                <th className="py-3 px-2 md:px-3">Skill Category</th>
                <th className="py-3 px-2 md:px-3">Skills</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {/* Languages */}
              <tr>
                <td className="py-2 px-2 md:px-3">Languages - Java</td>
                <td className="py-2 px-2 md:px-3">
                  J2EE, JPA, Spring Boot, MVC, Security
                </td>
              </tr>
              <tr>
                <td className="py-2 px-2 md:px-3">Languages - C#</td>
                <td className="py-2 px-2 md:px-3">Unity, OOP</td>
              </tr>
              <tr>
                <td className="py-2 px-2 md:px-3">Languages - Python</td>
                <td className="py-2 px-2 md:px-3">Django, Flask</td>
              </tr>
              {/* Frontend/JS Frameworks */}
              <tr>
                <td className="py-2 px-2 md:px-3">Frontend/JS Frameworks</td>
                <td className="py-2 px-2 md:px-3">
                  JavaScript/TypeScript, React, Redux, React Native, Next.js
                </td>
              </tr>
              {/* CSS Frameworks */}
              <tr>
                <td className="py-2 px-2 md:px-3">CSS Frameworks</td>
                <td className="py-2 px-2 md:px-3">Tailwind CSS, Bootstrap</td>
              </tr>
              {/* Backend/Node.js */}
              <tr>
                <td className="py-2 px-2 md:px-3">Backend Technologies</td>
                <td className="py-2 px-2 md:px-3">
                  Node.js, SQL (MySQL, PostgreSQL), NoSQL (MongoDB), SOAP/REST
                  API, WebPack, Jest
                </td>
              </tr>
              {/* Cloud/DevOps */}
              <tr>
                <td className="py-2 px-2 md:px-3">Cloud/DevOps</td>
                <td className="py-2 px-2 md:px-3">
                  AWS services, Azure, GitHub Actions, Docker, Jenkins,
                  SonarQube & SonarCloud
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Experience */}
      {/* <div className="py-6 m-2">
        <p className="italic">
          <span className="font-bold">Web Development Intern</span>
          <span className="px-2">|</span>Remote
        </p>
        <p className="py-1 italic">Kera (December 2021 – October 2022)</p>
        <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
          <li>
            Assisted the lead developer in designing, developing, and
            maintaining the company's website, utilizing Next JS framework,
            TypeScript and Firebase for authentication and storage solutions.
          </li>
          <li>
            Utilized Tailwind CSS to create responsive web components to meet
            business requirements.
          </li>
          <li>
            Learned to Implement CI/CD pipelines to streamline development and
            deployment processes to overall efficiency.
          </li>
          <li>
            Grew skillset by working with web development tools such as Git,
            Jenkins, Docker, etc.
          </li>
          <li>
            Contributed to code reviews and participated in developing best
            practices to improve code quality and maintainability.
          </li>
        </ul>
      </div> */}

      {/* Professional Experience */}
      <h5 className="text-center underline text-2xl font-bold py-2 mt-3">
        Professional Experience
      </h5>
      {/* Mark W. Keels P.E. Construction LLC */}
     {/* <div className="py-6">
        <p className="italic">
          <span className="font-bold">Web Developer (Contractor)</span>
          <span className="px-2">|</span>Jacksonville, FL
        </p>
        <p className="py-1 italic">
          Mark W. Keels P.E. Construction LLC (December 2022 – February 2024)
        </p>
        <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
          <li>
            Developed and integrated a 'LeadBoost' feature within the CRM using
            Django in Python enhancing client interaction performance by 42%.
          </li>
          <li>
            Built the company website with a responsive design using Next.js &
            React.js and styled with Tailwind CSS.
          </li>
          <li>
            Implemented an employee management system with robust authentication
            protocols.
          </li>
          <li>
            Leveraged MongoDB for efficient data management, resulting in a 35%
            uplift in data processing efficiency.
          </li>
          <li>
            Hosted the platform on AWS for consistent uptime and reliability.
          </li>
        </ul>
      </div> */}
      {/* InsightCommerce AI */}
      <div className="py-6">
        <p className="italic">
          <span className="font-bold">Software Engineer Intern</span>
          <span className="px-2">|</span>Remote
        </p>
        <p className="py-1 italic">
          InsightCommerce AI (May 2021 – September 2021)
        </p>
        <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
          <li>
            Assisted in the development of "QuickCart," a feature designed to
            enhance the shopping experience for B2B and B2C clients.
          </li>
          <li>
            Refined backend operations using Java Spring Boot, improving
            efficiency and enabling integration with a React Native-based
            front-end.
          </li>
          <li>
            Contributed to developing an Admin Dashboard and CMS with Spring
            MVC, improving content management efficiency by 34%.
          </li>
          <li>
            Optimized data modeling with Spring Data JPA and PostgreSQL,
            increasing database performance by 23%.
          </li>
          <li>
            Collaborated in applying AWS services to deploy the platform,
            ensuring its reliable scalability to meet e-commerce demands.
          </li>
        </ul>
      </div>

      {/* Academic Projects */}
      <h5 className="text-center underline text-2xl font-bold py-3 mt-3">
        Academic Projects
      </h5>
      {/* Virtual Reality Platform for Knee Surgery Rehab Patients */}
      {/* <div className="py-6">
        <p className="italic">
          <span className="font-bold">Software Engineer (Unity Developer)</span>
          <span className="px-2">|</span>Gainesville, FL
        </p>
        <p className="py-1 italic">
          Virtual Reality Platform for Knee Surgery Rehab Patients (September
          2023 - Present)
        </p>
        <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
          <li>
            Collaborated on a VR application for post-operative knee surgery
            rehab patients using Unity and C#.
          </li>
          <li>
            Integrated Meta Oculus Quest 2 and Microsoft Surface Dials for
            precise knee movement tracking, improving exercise accuracy by 30%.
          </li>
          <li>
            Implemented real-time feedback & progress tracking systems,
            improving patient safety and exercise efficiency by 20%.
          </li>
          <li>
            Participated in an Agile development environment, contributing to
            iterative design, development, and testing phases for continuous
            project improvement.
          </li>
        </ul>
      </div> */}
      {/* Nature Nexus (Full Stack App for DBMS Project) */}
<div className="py-6">
  <p className="italic">
    <span className="font-bold">Full Stack Developer</span>
    <span className="px-2">|</span>CS Dept, UF
  </p>
  <p className="py-1 italic">November 2023 - April 2024</p>
  <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
    <li>
      Led the development of Nature Nexus, a full-stack application aimed at
      Austria's bird population and conservation efforts, using JavaScript,
      ReactJs, Tailwind CSS, NodeJs, ExpressJs, Oracle DB, and SQL.
    </li>
    <li>
      Built the backend with Node.js and Express.js that seamlessly interfaced
      with the Oracle Database on UF CISE server to manage a dataset of over
      500,000 bird observations from Austria.
    </li>
    <li>
      Designed 5 complex SQL trend queries to extract subtle insights about
      spatial and temporal patterns within bird populations.
    </li>
    <li>
      Utilized Recharts and React Google Charts to visually represent results
      from executing complex SQL queries, improving user understanding of
      nuanced insights into bird population spatial and temporal patterns.
    </li>
  </ul>
</div>

      {/* Virtual Reality Platform for Post-Op Knee Surgery Patients */}
<div className="py-6">
  <p className="italic">
    <span className="font-bold">Software Engineer (Unity Developer)</span>
    <span className="px-2">|</span>CS Dept, UF
  </p>
  <p className="py-1 italic">September 2023 - May 2024</p>
  <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
    <li>
      Collaborated on a VR application for post-operative knee surgery rehab patients using Unity and C#, focusing on building immersive experiences using Meta Oculus Quest 2 and patient-specific rehabilitation exercises.
    </li>
    <li>
      Integrated Meta Oculus Quest 2 and Microsoft Surface Dials for precise knee movement tracking, improving exercise accuracy by 30% in the rehabilitation process for patients immersed in the VR world.
    </li>
    <li>
      Implemented real-time feedback & progress tracking systems, improving patient safety and exercise efficiency by 20%.
    </li>
    <li>
      Developed a backend API using C# to transmit data packets from VR to the user dashboard for further analysis, utilizing libraries such as SignalR for real-time communication and Newtonsoft.Json for data handling.
    </li>
  </ul>
</div>


{/* GAN-Enhanced Credit Card Fraud Detection Classifier */}
<div className="py-6">
  <p className="italic">
    <span className="font-bold">Machine Learning Developer</span>
    <span className="px-2">|</span>CS Dept, UF
  </p>
  <p className="py-1 italic">January 2023 - November 2023</p>
  <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
    <li>
      Developed a two-stage machine learning model (GAN & SVM) to address the
      challenge of underrepresented fraudulent transactions in financial
      datasets.
    </li>
    <li>
      Employed Pandas and NumPy for initial data preprocessing and used
      Matplotlib to visualize model performance metrics during training.
    </li>
    <li>
      Implemented a Generative Adversarial Network (GAN) to diversify synthetic
      fraudulent transaction data, enhancing training set diversity. Trained a
      Support Vector Machine (SVM) classifier on the augmented dataset,
      resulting in a 58% accuracy increase and a 43% F1-score improvement.
    </li>
    <li>
      Integrated the model into a backend API service using FastAPI, providing
      a real-time fraud detection service that reduced false positives by 32% in
      simulated environments.
    </li>
  </ul>
</div>

{/* PLC Custom Language Compiler */}
<div className="py-6">
  <p className="italic">
    <span className="font-bold">Compiler Developer</span>
    <span className="px-2">|</span>CS Dept, UF
  </p>
  <p className="py-1 italic">August 2023 - December 2023</p>
  <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
    <li>
      Developed a full compiler suite for a custom programming language across
      six interconnected semester-long assignments.
    </li>
    <li>
      Initiated with a Lexer, using ILexer and IToken interfaces to accurately
      identify and classify syntactical tokens.
    </li>
    <li>
      Implemented a recursive descent Parser that constructed an Abstract Syntax
      Tree (AST) from parsed phrases, adhering to the grammar's LL(1) properties.
    </li>
    <li>
      Integrated a Symbol Table and Type Checker into the compiler, using
      ASTVisitor patterns to annotate the AST with type information, ensuring
      semantic accuracy.
    </li>
    <li>
      Finalized the suite by generating executable Java code from the AST using
      a CodeGenVisitor, translating language concepts into Java implementations
      with a 99% pass rate on JUnit tests.
    </li>
  </ul>
</div>

      {/* CASMM - Engaging Learning Lab */}
      <div className="py-6">
        <p className="italic">
          <span className="font-bold">Full-Stack Web Developer</span>
          <span className="px-2">|</span>Gainesville, FL
        </p>
        <p className="py-1 italic">
          CASMM - Engaging Learning Lab (March 2022 – December 2022)
        </p>
        <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
          <li>
            Led the integration of authentication and role-based functionalities
            using Java Spring Boot.
          </li>
          <li>
            Developed Admin-access dashboards with Spring MVC, increasing
            administrative productivity by 20%.
          </li>
          <li>
            Created Moderation Pages for Admin & Teacher roles with Spring Boot,
            enhancing flagged content and submission oversight by 56%.
          </li>
          <li>Optimized operations using Docker containers.</li>
        </ul>
      </div>

      {/* Volunteer Experience */}
      <h5 className="text-center underline text-2xl font-bold py-3 mt-3">
        Volunteer Experience at UF
      </h5>

      {/* Experience */}
      <div className="py-6 m-2">
        <p className="italic">
          <span className="font-bold">Website Developer / Web Designer</span>
          <span className="px-2">|</span>Gainesville, FL
        </p>
        <p className="py-1 italic">
          <a
            className="text-blue-500 underline font-bold"
            href="https://www.ufshoes4smiles.org/"
            target="_blank"
            rel="noreferrer"
          >
            UF Shoes 4 Smiles
          </a>{' '}
          (October 2020 – Present)
        </p>
        <p>
          Shoes 4 Smiles is a student organization dedicated to fundraising and
          providing shoes and other basic necessities to people in local,
          disadvantaged communities.
        </p>

        <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
          <li>
            Ensured comprehensive mobile responsive UI layouts with
            understanding of React JS and Tailwind CSS.
          </li>
          <li>
            Worked directly with the President of the club to understand and
            implement multiple technologies and programs for the organization.
          </li>
          <li>
            Platform migration managing simple backend processes and ensuring a
            smooth migration process.
          </li>
          <li>
            Troubleshoot issues and concerns, configure operation and analytic
            plugins, and design changes as needed.
          </li>
        </ul>
      </div>

      {/* <div className="flex justify-center p-6 mb-5">
        <button className="border-2 rounded-xl border-black p-4 text-black font-bold hover:scale-110 hover:bg-black hover:text-white duration-300">
          <a href={ResumeDoc} download="Moksh_Keloo_Resume.pdf">
            Download Resume
          </a>
        </button>
      </div> */}
    </div>
  );
};

export default Resume;

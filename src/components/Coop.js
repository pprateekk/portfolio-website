import React, { useState } from "react";
import prateek from "../assets/prateek.jpg";
import mantech from "../assets/mantech.jpeg";
import prof from "../assets/professor.png";
import el_hub from "../assets/el_hub.png";
import el_hub2 from "../assets/el_hub2.png";

export default function Coop() {
  const [selectedTerm, setSelectedTerm] = useState("SUMMER 2023");
  const [activeSection, setActiveSection] = useState("intro");

  //#region  Summer 2023
  const introduction = (
    <div className=" text-justify pt-4">
      <p>
        For my Summer 2023 work term, I worked as a Research Assistant at the
        University of Guelph. This experience marked my first journey toward
        Data Science/Machine Learning. <br />
        You see, the challenges that educators face when analyzing large volumes
        of student feedback are quite real. When a course concludes, students
        get a chance to submit their feedback. The student feedback is like a
        goldmine of information, but the manual process of instructors sifting
        through and categorizing them can be both time-consuming and labor
        intensive, especially when we are talking of classes with 300-400
        students. My work was to overcome these challenges by automating the
        process of categorization of student feedback. <br /> As you read
        further, you'll gain insights into the project that I undertook, the
        methodologies employed, and the outcomes achieved. Moreover, I will
        reflect on the personal goals that I achieved throughout the work term.
      </p>
    </div>
  );

  const aboutEmployer = (
    <div className="text-justify grid grid-cols-2 gap-10 pt-4 ">
      <div className="">
        <h2 className="text-xl font-bold font-playfair mb-4">
          University of Guelph
        </h2>
        <p>
          The University of Guelph (U of G) is a comprehensive public research
          university in Guelph, Ontario, Canada. It was established in 1964
          after the amalgamation of Ontario Agricultural College, the MacDonald
          Institute, and the Ontario Veterinary College, and has since grown to
          an institution of more than 32,000 students (including those at the
          Humber campus, off-campus degree enrolments, diploma enrolments and
          part-time students) and over 1,500 faculty (academic staff) as of fall
          2015. It offers 94 undergraduate degrees, 48 graduate programs, and 6
          associate degrees in many different disciplines. <br />
        </p>
        <h2 className="text-xl font-bold font-playfair mt-4 mb-4">
          Dr. Ritu Chaturvedi
        </h2>
        <p>
          I worked under the faculty of College of Engineering and Physical
          Science (CEPS), Computer Science department, under the supervision of
          Dr. Ritu Chaturvedi.
          <br />
          Dr. Ritu Chaturvedi received her PhD from the University of Windsor.
          Between 2016 and 2017, she held a position as an Assistant Professor
          (Teaching Stream) at the University of Toronto, Mississauga.
          Chaturvedi joined the School of Computer Science at the University of
          Guelph in 2017 where she is now an Assistant Professor. Her research
          is focused broadly on data mining and predictive modeling,
          particularly educational data mining that caters to web-based tutoring
          systems such as Intelligent Tutoring Systems. Much of her work focuses
          on topics in teaching and learning.
        </p>
      </div>
      <div className="container mx-auto">
        <img src={prof} alt="image"></img>
      </div>
    </div>
  );

  const jobDescription = (
    <div className="text-justify pt-4">
      <p>
        My role as a Research Assistant was to automate feedback coding that
        employed text mining methods, specifically topic modelling and
        unsupervised clustering. Since this was my first exposure in deploying
        machine learning algorithm, I learned a lot. Despite the availability of
        pre-existing libraries for different ML algorithms, I took the
        initiative to code them from scratch, going above and beyond to gain a
        deep understanding of the underlying concepts. Prior to delving into the
        coding part, I read few past research papers to familiarize myself with
        the existing knowledge and work done in this field. This step was
        essential to to acquaint myself with the methodologies that had
        previously been used. <br />
        <br />
        In the context of our research, our approach involved categorizing
        feedback into different topics using techniques such as preprocessing,
        Bag of Words (BoW), Term Frequency-Inverse Document Frequency (TF-IDF),
        k-means clustering, and Latent Dirichlet Allocation (LDA). The results
        of our work revealed five informative topics: Student Experience,
        Learning Challenges, Course Engagement, Course Evaluation, and
        Assessments and Grades. This would empower instructors to make informed
        decisions to better meet the requirements of their students. <br />
        Overall, our research added to the ongoing efforts to automate and
        improve the analysis of student feedback, aiming to provide a more
        efficient and effective way for educational enhancement.
      </p>
    </div>
  );

  const learningGoals = (
    <div className="text-justify pt-4">
      <ol className="list-decimal">
        <li className="italic font-bold pt-2">Learn about ML concepts</li>
        <p>
          Throughout my co-op work term, I delved into diverse machine learning
          algorithms as part of the coursework I undertook. These include
          feature extraction methods such as bag-of-words and TF-IDF, along with
          both supervised and unsupervised algorithms like k-nearest neighbours
          and k-means clustering. Despite there being numerous ML libraries that
          provide these algorithms, I tried and implemented the code for them
          myself. This approach helped me to get a better understanding of their
          underlying mechanisms. While I got to know about these algorithms, I
          believe my journey to ML is ongoing, as there are still various other
          algorithms I’ve yet to explore. <br></br>
        </p>

        <li className="italic font-bold pt-2">
          Learn how to think differently
        </li>
        <p>
          After going through the past research papers, I got to know a general
          idea of what has been done to extract valuable insights from student
          feedback. This helped me to grasp the methodologies that had been
          employed in this field. The process of feature extraction emerged out
          to be the most time-consuming phase. This was due to the various
          experiments that we conducted in selecting the most relevant features.
          This was crucial so as to capture the meaningful essence of the
          student feedback. I came up with my own approaches on how to extract
          meaningful features from the data, given the high dimensionality.
          While not all of them were deemed suitable, they encouraged me to
          think creatively.
        </p>

        <li className="italic font-bold pt-2">
          Learn how to write academic papers
        </li>
        <p>
          My goal was to enhance my academic writing skills, specifically in
          writing clear and concise research papers. I wanted to learn how to
          write a succinct abstract, as well as a concise introduction that
          would offer the reader a clear overview of the entire paper. I also
          wanted to effectively present the methods employed and adhere to
          proper source citation. Although my abstract, introduction and
          methodology section marked improvement, I’m still in the process of
          completing the writing. I believe I have made substantial progress in
          enhancing my communication skills, ensuring that my ideas are conveyed
          with clarity.
        </p>
      </ol>
    </div>
  );

  const conclusion = (
    <div className="flex flex-col items-center justify-center pt-4 ">
      <p>
        Throughout the duration of my work experience, I acquired invaluable
        insights into the practical applications of machine learning concepts.
        <br />I extend my sincere gratitude to Dr. Ritu Chaturvedi for her
        unwavering support and guidance at every step of this journey,
        especially considering it was my first exposure to machine learning. I
        am eager to dive further in this field, with the aspiration of
        leveraging these skills to help solve real-world problems and make
        meaningful contributions.
      </p>
      <br />
      <img src={prateek} alt="image"></img>
    </div>
  );
  //#endregion Summer 2023

  //#region Winter 2024
  const introductionW24 = (
    <div className=" text-justify pt-4">
      <p>
        For my Winter 2024 and Summer 2024 work terms, I worked as a Software
        Developer at MANTECH Inc. This work term report provides insights into
        my role as a Software developer where I continue to contribute to
        MANTECH's new project. I've spent the last eight months immersed in
        learning new software design principles like MVVM and gaining
        proficiency in .NET, C#, and WPF technologies. Despite being new to C#,
        I've been able to learn and adapt, expanding on the fundamental
        understanding of OOP that I gained from my academic courses.
      </p>
    </div>
  );

  const aboutEmployerW24 = (
    <div className="text-justify grid gap-10 pt-4 mx-auto">
      <div className="">
        <h2 className="text-xl font-bold font-playfair mb-4">MANTECH Inc.</h2>
        <p>
          Based in Guelph, ON., Canada, and its subsidiary in Fort Myers Beach,
          FL, USA, MANTECH manufactures innovative water quality analysis
          systems that help industrial facilities, laboratories and utilities
          deliver clean, safe water and protect the environment. MANTECH’s
          laboratory, online and portable systems are easy to use and deliver
          fast, accurate results reducing and/or eliminating the use of harmful
          chemicals, providing sustainable water quality solutions that are
          trusted in more than 52 countries. MANTECH systems analyze thousands
          of samples every day in environmental and soil laboratories,
          industrial and municipal wastewater facilities, pulp and paper mills,
          food and beverage manufacturing plants, laboratories and municipal
          drinking water treatment plants. <br />
        </p>
        <h2 className="text-xl font-bold font-playfair mt-4 mb-4">
          Their Mission Statement
        </h2>
        <p>
          MANTECH manufactures analyzers for water and soil testing. Our mission
          is to generate the highest quality results, in the shortest amount of
          time, with green methods, using simple and smart analyzers. As a
          result, our customers will have significant positive economic and
          sustainable impacts on their businesses and communities.
          <br />
        </p>
      </div>
      <div className="container mx-auto ml-72">
        <img src={mantech} alt="image"></img>
      </div>
    </div>
  );

  const jobDescriptionW24 = (
    <div className="text-justify pt-4">
      <p>
        My primary focus revolved around the development of MANTECH's new
        software project. This involved coding, software design, and tackling
        both database tasks and front-end development. One of the most exciting
        aspects of this work has been the opportunity to experiment with and
        implement new software design principles such as MVVM
        (Model-View-ViewModel), which has changed my approach to developing
        extendable and efficient applications. In addition, I've been actively
        involved in learning and using technologies like .NET Framework, C#, and
        WPF (Windows Presentation Foundation), all of which were completely new
        to me at the time.
        <br />
        <br />
        Throughout this journey, I've learned valuable skills in resolving merge
        conflicts, debugging software issues, implementing MVVM architecture,
        and collaborating effectively with peers through code reviews. These
        experiences not only improved my technical skills but also deepened my
        understanding of software development practices.
      </p>
    </div>
  );

  const learningGoalsW24 = (
    <div className="text-justify pt-4">
      <ol className="list-decimal">
        <li className="italic font-bold pt-2">
          Develop a comprehensive understanding of WPF and deepen my knowledge
          of C#
        </li>
        <p>
          Over the course of my 8-month co-op term, I have advanced my
          understanding of WPF (Windows Presentation Foundation) and deepened my
          knowledge of C#. I gained hands-on experience with WPF's features,
          such as data binding and custom controls, and became proficient in
          applying these to real-world applications. Additionally, I was
          introduced to essential software design principles, like the MVVM
          (Model-View-ViewModel) architectural pattern and dependency injection,
          which were new concepts for me. These principles not only enhanced my
          technical skills but also improved the maintainability of the code I
          worked on. I also focused on writing clean, readable code, which is
          important for effective collaboration and long-term project success.
          <br></br>
        </p>

        <li className="italic font-bold pt-2">
          Enhance my organizational and time management skills to efficiently
          handle coding tasks and meet project deadlines
        </li>
        <p>
          During the work term, I consistently kept a log of my weekly tasks.
          This allowed me to allocate my time efficiently and ensured that I
          stayed on track with my tasks. I am excited to continue honing my time
          management and organizational skills as I progress in my software
          developer journey.
        </p>

        <li className="italic font-bold pt-2">
          Improve my oral communication skills to convey my technical ideas and
          updates to the team
        </li>
        <p>
          Reflecting on my oral communication skills, I believe I have made some
          noticeable progress in the past 8 months. During our daily stand-up
          meetings, I regularly provided updates on my progress. We also had our
          developer's meeting, where I shared my perspective on upcoming tasks
          and discussed the challenges I faced. Because of this, I think I
          improved my ability to convey technical information and engage with
          the team. I'm committed to continuing to work on these skills.
        </p>
      </ol>
    </div>
  );

  const conclusionW24 = (
    <div className="flex flex-col items-center justify-center pt-4 ">
      <p>
        In conclusion, my experience at MANTECH has been both educational and
        fulfilling. In addition to contributing to the project, I've encountered
        challenges, made mistakes and gained valuable knowledge. I am grateful
        for my colleagues' and supervisor's invaluable assistance. Looking
        ahead, I am eager to continue contributing to the project and further
        expanding my skills in software development.
      </p>
      <br />
    </div>
  );
  //#endregion Winter 2024

  //#region Summer 2025
  const introductionS25 = (
    <div className=" text-justify pt-4">
      <p>
        For my Summer 2025 co-op work term, I worked as a Data Analyst with the
        Experiential Learning Hub department of the University of Guelph, where
        my main focus was making sense of large and messy datasets of co-op job
        postings. A lot of my time went into cleaning and organizing the data,
        like fixing issues with things like inconsistent city/province names or
        missing student ID, etc, so that it could be used for analysis.
        <br></br>
        <br></br>
        The focus was on transforming raw data into something meaningful and
        then using it to highlight student and employer trends. I combined data
        cleaning, statistical analysis and visualization (Tableau) with more
        advanced techniques like NLP, and created dashboards that made the data
        easy to interpret and act on.
      </p>
    </div>
  );

  const aboutTheEmpS25 = (
    <div className="text-justify grid grid-cols-2 gap-10 pt-4 ">
      <div className="">
        <h2 className="text-xl font-bold font-playfair mb-4"></h2>
        <p></p>
        <h2 className="text-xl font-bold font-playfair mt-4 mb-4">
          The Experiential Learning Hub (EL Hub)
        </h2>
        <p>
          The University of Guelph is recognized for its strong commitment to
          experiential learning, offering a wide range of hands-on learning
          opportunities through its seven academic colleges and various
          co-curricular programs. Central to these efforts is the Experiential
          Learning Hub, which serves as the university’s focal point for
          co-operative education, career development, and community-engaged
          learning. <br></br>
          <br />
          The Experiential Learning Hub’s mission is to provide meaningful
          professional and career development experiences that empower students
          to discover their purpose and succeed as scholars, professionals, and
          engaged global citizens.
        </p>
      </div>
      <div className="container mx-auto">
        <img src={el_hub} alt="image"></img>
      </div>
    </div>
  );

  const jobDescS25 = (
    <div className="text-justify pt-4">
      <p>
        My work started with cleaning and preparing the co-op job postings data
        from multiple academic years, dating back 10 years. The datasets were
        messy with many irregularities and missing information. I spent a lot of
        time fixing these issues, cleaning up formats, standardizing
        city/province names, etc. Once the data was in good shape, I worked on
        finding patterns and trends. I looked at how factors like GPA, gender,
        or citizenship (to name a few) connected to the number of applications
        and whether students were more or less likely to get interviews. To back
        this up, I even ran regression models to see if the data confirmed those
        trends.
        <br />
        <br />
        After finding those insights, I focused on how to share them. I built
        many worksheets and dashboards in Tableau that turned numbers into
        stories, like how programs were spread across provinces, how salaries
        compared, what students' withdrawal patterns looked like, and even how
        application methods changed over time. These worksheets and dashboards
        made it easy for anyone to explore the data without having to dive into
        the Excel spreadsheets.
        <br></br>
        <br />
        One of the most interesting parts of the role was trying out NLP. I used
        a transformer-based model to go through thousands of job descriptions
        and see which ones mention AI-related skills, and which included
        language about equity, diversity and inclusion (EDI). That gave a whole
        new perspective on the postings, not just the numbers, but the wording
        employers chose and what it said about their priorities.
        <br></br>
        <br />
        And it wasn't just that. My colleagues and I worked closely with
        stakeholders across the department, meeting with the Director to align
        on priorities, with co-op coordinators to understand what they wanted to
        see on the dashboards, and even with other co-op students to provide
        data that supported their own projects. At the end of the term, we
        presented everything to the EL hub team, walking through our findings
        and the dashboards. Those conversations and presentations weren't just
        important as technical work, but they made sure the insights had a real
        impact.
        <br></br>
        <br />
        By the end of the work term, I had sharpened both my technical and
        communication skills. It was a role that really showed me how data work
        is about more than just analysis. It's about being able to tell stories
        behind the numbers that would actually make an impact.
      </p>
    </div>
  );

  const learningGoalS25 = (
    <div className="text-justify pt-4">
      <ol className="list-decimal">
        <li className="italic font-bold pt-2">
          Become More Confident Communicating in Person and Presenting Data
          Clearly
        </li>
        <p>
          One of my goals this term was to get more confident speaking in
          person, whether that was presenting data, sharing ideas in meetings,
          or just chatting with coworkers. I made an effort to speak up more,
          explain my work in a clearer way, and have more casual conversations
          around the office. By the end of the term, I felt a lot more
          comfortable communicating in different settings, and the positive
          feedback I got on my presentations showed that I was heading in the
          right direction.
          <br></br>
        </p>

        <li className="italic font-bold pt-2">
          Strengthen Problem-Solving Skills by Working Through Complex, Messy
          Datasets
        </li>
        <p>
          This term, I wanted to get better at solving problems independently by
          working with messy or complex datasets and finding insights that could
          support the team’s work. I had several opportunities to do just that,
          from cleaning irregular data to uncovering trends that weren’t obvious
          at first. I even got to help a teammate with a similar issue, which
          reinforced what I’d learned. These experiences helped me build more
          confidence in working with real-world data and taught me how to think
          more critically when looking for meaningful insights.
        </p>

        <li className="italic font-bold pt-2">
          Develop Foundational Leadership Skills by Taking Initiative and
          Learning from Team Leads
        </li>
        <p>
          Another one of my goals this term was to start building leadership
          habits by observing how experienced team leads operate and by taking
          initiative where I could. I paid close attention to how decisions were
          made and how challenges were handled, and I looked for opportunities
          to step up, whether by taking the lead on small tasks or helping
          teammates when they were stuck. Presenting my work to the EL Hub teams
          was a key moment where I took ownership and communicated outcomes
          clearly. These experiences helped me grow more confident in taking
          initiative and shaped a few leadership practices I hope to carry
          forward.
        </p>
      </ol>
    </div>
  );

  const conclusionS25 = (
    <div className="text-justify grid grid-cols-2 gap-10 pt-4 ">
      <div className="">
        <p>
          This co-op was an incredible opportunity to bridge technical skills
          with real-world impact. One of the biggest takeaways was realizing
          that numbers on their own aren't enough; it's the story you tell
          behind those numbers that really makes an impact. Through meetings
          with the Director, conversations with the co-op coordinators, and
          presenting to the entire team, I grew much more confident in
          communicating insights clearly and turning data into something
          meaningful for others. <br></br> <br></br>
          I'm deeply grateful to my supervisor for their guidance and support
          throughout the term and to the Director and co-op coordinators for
          trusting me with projects that mattered to the department. A big thank
          you also goes to my fellow co-op students and colleagues, working
          alongside such a collaborative and supportive team made this
          experience not just a learning opportunity, but a truly enjoyable one.
        </p>
      </div>
      {/* <div className="container mx-auto">
        <img src={el_hub2} alt="image"></img>
      </div> */}
      <div className="container mx-auto">
        <img
          src={el_hub2}
          alt="image"
          className="w-[32rem] h-[32rem] object-contain"
        />
      </div>
    </div>
  );

  //#endregion Summer 2025

  let sectionContent;
  if (activeSection === "intro") {
    sectionContent = introduction;
  } else if (activeSection === "aboutEmp") {
    sectionContent = aboutEmployer;
  } else if (activeSection === "jobDes") {
    sectionContent = jobDescription;
  } else if (activeSection === "learnGoals") {
    sectionContent = learningGoals;
  } else if (activeSection === "conc") {
    sectionContent = conclusion;
  }

  const handleTermSelect = (term) => {
    setSelectedTerm(term);
    setActiveSection("intro");
  };

  const renderContent = () => {
    const content = contentMap[selectedTerm];
    return content ? content[activeSection] : null;
  };

  const contentMap = {
    "SUMMER 2023": {
      intro: introduction,
      aboutEmp: aboutEmployer,
      jobDes: jobDescription,
      learnGoals: learningGoals,
      conc: conclusion,
    },
    "WINTER 2024": {
      intro: introductionW24,
      aboutEmp: aboutEmployerW24,
      jobDes: jobDescriptionW24,
      learnGoals: learningGoalsW24,
      conc: conclusionW24,
    },
    "SUMMER 2025": {
      intro: introductionS25,
      aboutEmp: aboutTheEmpS25,
      jobDes: jobDescS25,
      learnGoals: learningGoalS25,
      conc: conclusionS25,
    },
  };

  return (
    <section id="coop" className="bg-neutral-200 py-10 mt-10">
      <div className="text-center">
        <h2 className="text-center text-4xl font-julius font-extrabold mb-10 pt-10">
          Co-op Experience
        </h2>
        <h2 className="text-2xl font-playfair mb-4">
          <button
            className="border-transparent hover:border-b hover:border-black transition duration-300"
            onClick={() => handleTermSelect("SUMMER 2023")}
          >
            SUMMER 2023
          </button>
          &nbsp; &nbsp;
          <button
            className="border-transparent hover:border-b hover:border-black transition duration-300"
            onClick={() => handleTermSelect("WINTER 2024")}
          >
            WINTER 2024 & SUMMER 2024
          </button>
          &nbsp; &nbsp;
          <button
            className="border-transparent hover:border-b hover:border-black transition duration-300"
            onClick={() => handleTermSelect("SUMMER 2025")}
          >
            SUMMER 2025
          </button>
          &nbsp; &nbsp;
        </h2>
        <div className="grid grid-cols-1 gap-4 px-60">
          <div className=" container bg-neutral-200">
            <h2 className=" text-xl font-playfair mb-4">
              <button
                className="border-transparent hover:border-b hover:border-black transition duration-300"
                onClick={() => setActiveSection("intro")}
              >
                Overview
              </button>
              &nbsp; &nbsp;
              <button
                className="border-transparent hover:border-b hover:border-black transition duration-300"
                onClick={() => setActiveSection("aboutEmp")}
              >
                About the Employer
              </button>
              &nbsp; &nbsp;
              <button
                className="border-transparent hover:border-b hover:border-black transition duration-300"
                onClick={() => setActiveSection("jobDes")}
              >
                Job Description
              </button>
              &nbsp; &nbsp;
              <button
                className="border-transparent hover:border-b hover:border-black transition duration-300"
                onClick={() => setActiveSection("learnGoals")}
              >
                Learning Goals
              </button>
              &nbsp; &nbsp;
              <button
                className="border-transparent hover:border-b hover:border-black transition duration-300"
                onClick={() => setActiveSection("conc")}
              >
                Conclusion & Acknowledgement
              </button>
            </h2>

            <p className="text-black text-lg font-playfair font-light border-t pt-2">
              {renderContent()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

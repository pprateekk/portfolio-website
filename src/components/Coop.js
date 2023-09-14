import React, { useState } from "react";
import prateek from "../assets/prateek.jpg";
import prof from "../assets/professor.png";

export default function Coop() {
  const [activeSection, setActiveSection] = useState("intro");

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

  let sectionContent;
  if (activeSection === "intro") {
    sectionContent = introduction;
  } else if (activeSection === "aboutEmp") {
    sectionContent = aboutEmployer;
  } else if (activeSection === "jobDes") {
    sectionContent = jobDescription;
  } else if (activeSection === "learnGoals") {
    sectionContent = learningGoals;
  } else {
    sectionContent = conclusion;
  }

  return (
    <section id="coop" className="bg-neutral-200 py-10 mt-10">
      <div className="text-center">
        <h2 className="text-center text-4xl font-julius font-extrabold mb-10 pt-10">
          Co-op Experience
        </h2>
        <h2 className="text-2xl font-playfair mb-4">
          <button className="border-transparent hover:border-b hover:border-black transition duration-300">
            SUMMER 2023
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
              {sectionContent}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import ExperinenceCard from "./ExperinenceCard";

type Props = {};

enum techStack {
  PYTHON = "./assets/tech_stack/python.svg",
  GITHUB = "./assets/tech_stack/github.svg",
  CSHARP = "./assets/tech_stack/CSharp.svg",
  BAZEL = "./assets/tech_stack/bazel.png",
  ANSIBLE = "./assets/tech_stack/ansible.svg",
  AWS = "./assets/tech_stack/aws.svg",
  DOCKER = "./assets/tech_stack/docker.svg",
  JENKINS = "./assets/tech_stack/jenkins.svg",
}

enum CompanyLogos {
  CTW = "./assets/company_logos/ctw_logo.svg",
  INW = "./assets/company_logos/innowave_logo.png",
}

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col h-screen overflow-hidden text-lft items-center md:flex-row
      max-w-full px-10 justify-evenly mx-auto container"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="flex w-full space-x-5 overflow-x-scroll py-100 p-10 snap-x snap-mandatory z-1">
        <ExperinenceCard
          companyName="Critical Techworks"
          companyLogo={CompanyLogos.CTW}
          companyRole="CI & Build Developer"
          techStack={[
            techStack.PYTHON,
            techStack.GITHUB,
            techStack.BAZEL,
            techStack.ANSIBLE,
            techStack.DOCKER,
          ]}
          summaryPoints={[
            "Migration of Build Systems from Cmake to Bazel",
            "Creation of Project Architecture",
            "Kibana Dashboards For Tracking Pipeline Performance",
            "Improved Performance of Old CI Pipelines",
            "Developed Python Pacakges for Code Quality Checks in the CI Environement",
          ]}
          date={{ start: "Jun 2021", end: "Present" }}
        />
        <ExperinenceCard
          companyName="InnoWave"
          companyLogo={CompanyLogos.INW}
          companyRole="BackEnd Developer"
          techStack={[
            techStack.CSHARP,
            techStack.PYTHON,
            techStack.AWS,
            techStack.JENKINS,
          ]}
          summaryPoints={[
            "Process Automation With Python",
            "Developed new endpoints with .NET",
            "Improved perfomance on old API endpoints",
            "Code Deployement With Jenkins",
            "AWS Cloud Formation and Lambda Function Configuration",
          ]}
          date={{ start: "Sept. 2020", end: "Jun. 2021" }}
        />
      </div>
    </motion.div>
  );
}

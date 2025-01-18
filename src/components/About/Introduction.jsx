import React from "react";

const Introduction = () => {
  return (
    <div className="relative flex flex-col items-center md:items-start text-white gap-y-8 px-4 sm:px-6 md:px-12">
      <div className="md:w-full">
        <h1 className="text-4xl font-bold mb-10 text-shadow-lg">
          About <span className="text-yellow-500">Me</span>
        </h1>
        <p className="text-lg text-gray-400 leading-loose text-justify">
          Hi, my name is Rheisan Firnandatama Rizky Satria. I am currently an undergraduate student in my 6th semester, majoring in Information Technology at Universitas Negeri Yogyakarta.
        </p>
        <p className="text-lg text-gray-400 leading-loose text-justify mt-6">
          I have experience working on various projects in the fields of 
          <span className="text-yellow-500"> Artificial Intelligence, Data Analysis, and Machine Learning. </span>
          During my free time, I enjoy trying new things, especially those related to technology in the field of machine learning.
        </p>
        <p className="text-lg text-gray-400 leading-loose text-justify mt-6">
          My goal is to <span className="text-yellow-500">advance AI and machine learning applications</span> to address real-world challenges effectively, creating innovative solutions that can make a significant impact on society.
        </p>
      </div>
    </div>
  );
};

export default Introduction;

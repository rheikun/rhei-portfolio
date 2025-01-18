import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const techStackData = [
    {
      category: "Machine Learning",
      tools: [
        { 
          name: "TensorFlow", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg", 
          link: "https://www.tensorflow.org/" 
        },
        { 
          name: "PyTorch", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg", 
          link: "https://pytorch.org/" 
        },
        { 
          name: "Scikit-Learn", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", 
          link: "https://scikit-learn.org/" 
        },
        { 
          name: "Keras", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg", 
          link: "https://keras.io/" 
        },
        { 
          name: "Streamlit", 
          logo: "https://streamlit.io/images/brand/streamlit-logo-primary-colormark-darktext.svg", 
          link: "https://streamlit.io/" 
        },
        { 
          name: "Hugging Face", 
          logo: "https://huggingface.co/front/assets/huggingface_logo.svg", 
          link: "https://huggingface.co/" 
        },
      ],
    },
    {
      category: "Data Analysis",
      tools: [
        { 
          name: "Pandas", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/2/22/Pandas_mark.svg", 
          link: "https://pandas.pydata.org/" 
        },
        { 
          name: "NumPy", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg", 
          link: "https://numpy.org/" 
        },
        { 
          name: "Matplotlib", 
          logo: "https://matplotlib.org/_static/images/logo2.svg", 
          link: "https://matplotlib.org/" 
        },
        { 
          name: "Seaborn", 
          logo: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg", 
          link: "https://seaborn.pydata.org/" 
        },
        { 
          name: "SQL", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png", 
          link: "https://www.w3schools.com/sql/" 
        },
      ],
    },
    {
      category: "Multimedia",
      tools: [
        { 
          name: "Figma", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", 
          link: "https://www.figma.com/" 
        },
        { 
          name: "Photoshop", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg", 
          link: "https://www.adobe.com/products/photoshop.html" 
        },
        { 
          name: "Premiere Pro", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg", 
          link: "https://www.adobe.com/products/premiere.html" 
        },
      ],
    },
    {
      category: "Programming Languages",
      tools: [
        { 
          name: "Python", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", 
          link: "https://www.python.org/" 
        },
        { 
          name: "Java", 
          logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg", 
          link: "https://www.java.com/" 
        },
      ],
    },
    {
      category: "Web Development",
      tools: [
        { 
          name: "HTML", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", 
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML" 
        },
        { 
          name: "PHP", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg", 
          link: "https://www.php.net/" 
        },
        { 
          name: "CSS", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", 
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS" 
        },
      ],
    },
  ];

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-yellow-500 mb-12 leading-relaxed">Tech Stack</h2>
      <div className="space-y-12">
        {techStackData.map((category, catIndex) => (
          <div
            key={catIndex}
            className="bg-gray-800 text-white p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-semibold mb-6">{category.category}</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {category.tools.map((tool, index) => (
                <a
                  key={index}
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center space-y-2 group relative"
                >
                  <div className="flex justify-center items-center h-16 w-16 bg-white rounded-full transform transition-transform duration-300 group-hover:scale-125">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <span className="text-sm">{tool.name}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
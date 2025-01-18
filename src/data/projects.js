export const projects = [
    {
      id: 1,
      name: "SkinPath: Skin Type Analysis",
      image: "/project/skinpath.png",
      tags: ["Convolutional Neural Networks"],
      modals:"SkinPath is an AI-driven application for classifying skin types (dry, normal, oily) using Convolutional Neural Networks (CNN), specifically leveraging the ResNet18 architecture. The app provides personalized skincare recommendations based on the user's skin type and advice on ingredients to avoid. It includes a Streamlit interface for real-time skin analysis via image upload or camera capture, while ensuring user privacy through non-persistent image processing.",
      github:"https://github.com/rheikun/skin-type-analysis",
    },
    {
      id: 2,
      name: "PersonaWay: DISC Personality Test",
      image: "/project/PersonaWay.png",
      tags: ["Natural Language Processing"],
      modals:"PersonaWay uses Natural Language Processing (NLP) to analyze and classify personality types based on the DISC method. The system processes text data to understand behavioral traits, provide job recommendations, and suggest compatible partners. Built with TensorFlow, the model was trained on a large dataset and fine-tuned for optimal performance.",
      github:"https://github.com/PersonaWay",
    },
    {
      id: 3,
      name: "Youtube Sentiment Analysis with NLP",
      image: "/project/sentiment.png",
      tags: ["Natural Language Processing"],
      modals:"This project analyzes YouTube comments to classify sentiments (positive, negative, neutral) using NLP techniques. Data was scraped from YouTube using Google Cloud Console API, followed by text preprocessing (cleaning, tokenization, stopword removal, TF-IDF vectorization). A Naive Bayes model was trained with CountVectorizer and deployed using pickle. A real-time Streamlit dashboard was built for sentiment analysis, featuring interactive word clouds and visualizations.",
      github:"https://github.com/rheikun/youtube-sentiment-analysis-nlp",
    },
    {
      id: 4,
      name: "Bike Sharing Analyst",
      image: "/project/bikesharing.png",
      tags: ["Others"],
      modals:"This project analyzes bike-sharing data to optimize operations. The dataset with 731 entries was explored to identify patterns and seasonal trends. Using Matplotlib and Seaborn, key metrics such as temperature, weather conditions, and user types were visualized. Statistical methods were applied to understand correlations between environmental factors and bike usage.",
      github:"https://github.com/rheikun/bike-sharing",
    },
    {
      id: 5,
      name: "Stock Prediction Using Linear Regression",
      image: "/project/regression.png",
      tags: ["Others"],
      modals: "This project predicts stock prices using Linear Regression, showcasing financial data modeling and forecasting techniques. Users can select from various stocks to forecast, utilizing historical data for predictions.",
      github: "https://github.com/rheikun/stock-analysis",
    },
  ];
  
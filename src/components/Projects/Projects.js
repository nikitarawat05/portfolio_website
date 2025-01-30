import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";
import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              title="1. E-commerce Website"
              description="Skills/Technologies: HTML, CSS, JavaScript, React.js, MongoDB
              • Developed a full-stack e-commerce website with features like product listing, shopping cart, and order management.
              • Integrated MongoDB for database management, enabling efficient product storage and user authentication.
              • Optimized performance with real-time updates and a responsive design for seamless browsing and shopping experience."
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              title="2. Semantic Analysis"
              description="Skills/Technologies: Machine Learning, Deep Learning, NLP, FastText
              • Implemented a machine learning system for word embedding and similarity prediction.
              • Used the FastText model for natural language processing and conducted a comparative analysis with models like Cbow and Skipgram model."
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              title="3. Twitter Sentiment Analysis"
              description="Skills/Technologies: Machine Learning, Natural Language Processing (NLP), scikit-learn, pandas, matplotlib, WordCloud, XGBoost, Logistic Regression, Random Forest, Python
              • Developed a pipeline for sentiment classification of Twitter data, applying text cleaning, tokenization, and stemming techniques.
              • Extracted features using CountVectorizer and evaluated multiple models (Random Forest, Logistic Regression, XGBoost) for sentiment prediction.
              • Optimized model performance and generated predictions, storing results in a predictions.csv file and also created visualizations, including word clouds, to analyze sentiment trends and provide actionable insights."
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              title="4. Dimensionality Reduction for Word Embeddings"
              description="Skills/Technologies: Machine Learning, Deep Learning, TensorFlow, scikit-learn, Gensim, UMAP, PCA, t-SNE, Autoencoders, Python
              • Developed a pipeline to apply dimensionality reduction techniques (UMAP, PCA, t-SNE, Autoencoders) to high-dimensional word embeddings, achieving optimized storage and faster processing in NLP tasks.
              • Compared and evaluated each technique’s effectiveness based on computational efficiency, semantic integrity, and visualization quality, reducing embedding size without significant loss of information.
              • Built an interactive web app for 2D/3D visualization, enabling users to explore word relationships, clusters, and semantic similarities visually, using Plotly for dynamic plots."
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;

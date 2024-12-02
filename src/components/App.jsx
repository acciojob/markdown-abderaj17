// src/App.jsx
import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import './App.css';

const App = () => {
  const [markdown, setMarkdown] = useState('# Hello, Markdown!');
  const [htmlContent, setHtmlContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timeout = setTimeout(() => {
      setIsLoading(false);
      setHtmlContent(marked(markdown));
    }, 1000);

    return () => clearTimeout(timeout);
  }, [markdown]);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="app">
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <textarea
            className="textarea"
            value={markdown}
            onChange={handleChange}
          />
          <div
            className="preview"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </>
      )}
    </div>
  );
};

export default App;

// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App
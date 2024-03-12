import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from './components/navbar/navbar';
import Sidebar from "./components/sideBar/sideBar";
import Footer from './components/footer/footer';
import MainContent from "./components/mainContent/mainContent";
import SearchBar from "./components/searchBar/searchBar";
import BookData from "./Data.json";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(null);
  const [theme, setTheme] = useState('light'); // Domyślnie ustawiony na 'light'
  const [fontSize, setFontSize] = useState(16); // Rozpocznij z domyślnym rozmiarem czcionki, np. 16px

  const increaseFontSize = () => setFontSize(prevSize => prevSize + 1);
  const decreaseFontSize = () => setFontSize(prevSize => prevSize - 1);

  useEffect(() => {
    setArticles(BookData);
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      if (prevTheme === 'light') return 'dark';
      return 'light';
    });
  };

    const toggleContrast = () => {
    setTheme(prevTheme => {
      if (prevTheme === 'high-contrast') return 'light';
      return 'high-contrast';
    });
    }

  const selectArticle = (articleId) => {
    const article = articles.find(a => a.id === articleId);
    setActiveArticle(article);
  };

  const selectArticleByTitle = (title) => {
    const article = articles.find(a => a.title === title);
    setActiveArticle(article);
  };

  const readText = (text1, text2) => {
    const title = new SpeechSynthesisUtterance(text1);
    const content = new SpeechSynthesisUtterance(text2);
    setTimeout(() => {
      window.speechSynthesis.speak(content);
    }, 2000);
    window.speechSynthesis.speak(title);
  };

  return (
      <div className={`app ${theme}`} style={{ fontSize: `${fontSize}px` }}>
          <div className="main-container">
            <div className="navbar">
              <Navbar onToggleContrast={toggleContrast}
                      sizeUp={increaseFontSize}
                      sizeDown={decreaseFontSize}
                      onToggleTheme={toggleTheme}
                      theme={theme}
              />
            </div>
            <div className="search">
              <SearchBar placeholder="Enter a Article Title..." data={BookData} onSelectArticle={selectArticleByTitle}/>
            </div>
            <main>
              <div className="sidebar">
                <Sidebar articles={articles} onArticleSelected={selectArticle}/>
              </div>
              <section>
                <MainContent article={activeArticle} onReadText={readText}
                />
              </section>
            </main>
            <Footer className="footer"/>
          </div>
        </div>
  );
};

export default App;

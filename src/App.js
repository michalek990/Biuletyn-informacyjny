import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Sidebar from "./components/sideBar/sideBar";
import Footer from './components/footer/footer';
import MainContent from "./components/mainContent/mainContent";

class App extends React.Component {
  state = {
    articles: [
      {id: 1, title: 'Nowa technologia XYZ debiutuje na rynku', content: 'Treść artykułu o technologii XYZ...'},
      {id: 2, title: 'Jak AI zmienia nasze życie', content: 'Treść artykułu o AI...'},
    ],
    activeArticle: null,
    theme: 'light',
  };

  toggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light'
    }));
  };

  selectArticle = (articleId) => {
    const article = this.state.articles.find(a => a.id === articleId);
    this.setState({activeArticle: article});
  };

  render() {
    return (
        <div>
          <Navbar/>
          <main>
            <Sidebar articles={this.state.articles} onArticleSelected={this.selectArticle}/>
            <section>
              <MainContent article={this.state.activeArticle}/>
            </section>
          </main>
          <Footer/>
        </div>
    );
  }
}

export default App;

import React from "react";
import "./styles.css";
const Sidebar = ({ articles, onArticleSelected }) => (
    <aside>
        <h2>Artykuły</h2>
        <ul>
            {articles.map(article => (
                <li key={article.id}>
                    <button onClick={() => onArticleSelected(article.id)} style={{ all: 'unset', cursor: 'pointer' }}>
                        {article.title}
                    </button>
                </li>
            ))}
        </ul>
    </aside>
);
export default Sidebar;
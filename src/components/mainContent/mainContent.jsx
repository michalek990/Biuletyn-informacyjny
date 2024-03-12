import React from 'react';
import './styles.css';
import Speaker from '../../image/speaker.png';

const MainContent = ({ article, onReadText }) => (
    <div className="main-content">
        {article ? (
            <>
                <h2>{article.title}</h2>
                <p>{article.content}</p>
                <button onClick={() => onReadText(article.title,article.content)}>
                    <img src={Speaker} alt="Logo"/>
                </button>
            </>
        ) : (
            <>
                <h2>Witaj w TechnoNews!</h2>
                <p>Tutaj znajdziesz najnowsze informacje ze świata technologii, innowacji i IT.</p>
                <p>Śledź z nami najciekawsze nowinki, odkrycia i trendy, które kształtują naszą przyszłość.</p>
            </>
        )}
    </div>
);
export default MainContent;
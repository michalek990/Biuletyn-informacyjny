import React from 'react';
import './styles.css';
// const MainContent = () => (
//     <div className="main-content">
//         <h2>Witaj w TechnoNews!</h2>
//         <p>Tutaj znajdziesz najnowsze informacje ze świata technologii, innowacji i IT.</p>
//         <p>Śledź z nami najciekawsze nowinki, odkrycia i trendy, które kształtują naszą przyszłość.</p>
//     </div>
// );
const MainContent = ({ article }) => (
    <div className="main-content">
        {article ? (
            <>
                <h2>{article.title}</h2>
                <p>{article.content}</p>
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
import { useEffect, useState } from "react";
import Game from "../game/Game";

const BASE_URL = "http://localhost:3030/jsonstore/games";

export default function Home() {
    const [latestGames, setLatestGames] = useState([]);

    useEffect(() => {
        try {
            fetch(BASE_URL)
                .then(response => response.json())
                .then(result => {
                    const resultGames = Object.entries(result)
                        .map(([_id, gameEntry]) => ({ _id, ...gameEntry }))
                        .sort((a, b) => b._createdOn - a._createdOn)
                        .slice(0, 3);

                    setLatestGames(resultGames);
                })
        } catch (error) {
            console.error(error.message);
        }
    }, []);

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in </h3>
                <img id="logo-left" src="./images/logo.png" alt="logo" />
            </div>

            <div id="home-page">
                <h1>Latest Games</h1>
                <div id="latest-wrap">
                    <div className="catalog-container">
                        
                        {latestGames.length === 0 && <p className="no-articles">No Games Added Yet</p>}
                        
                        {latestGames.map(game => <Game key={game._id} {...game} />)}
                    
                    </div>
                </div>
            </div>
        </section>
    )
}

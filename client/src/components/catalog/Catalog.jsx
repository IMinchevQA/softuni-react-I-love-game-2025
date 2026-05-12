import { useEffect, useState } from "react";
import Game from "../game-card/GameCard";
import config from "../../config.json";
import request from "../../utils/request";

export default function Catalog() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        request(config.BASE_URL)
            .then(result => {
                const gamesStateEntries = Object.entries(result).map(([_id, gameEntry]) => ({ _id, ...gameEntry }));
                setGames(gamesStateEntries);
            })
            .catch(err => {
                alert(err);
            });
    }, [])

    return (
        <section id="catalog-page">
            <h1>Catalog</h1>
            <div className="catalog-container">

                {games.length === 0 && <h3 className="no-articles">No Games Added Yet</h3>}

                {games.map(game => <Game key={game._id} {...game} />)}

            </div>

            {/* Some working alternative for playing arround */}
            {/* <div className="catalog-container">
                {
                    games.length && games.map(game => <Game key={game._id} {...game} />)
                    ??
                    <h3 className="no-articles">No articles</h3>
                }
            </div> */}
        </section >
    )
}

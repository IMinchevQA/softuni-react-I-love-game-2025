import { useEffect, useState } from "react";
import Game from "../game/Game";

const BASE_URL = "http://localhost:3030/jsonstore/games";

export default function Catalog() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(BASE_URL);
                const result = await response.json();
                const gamesStateEntries = Object.entries(result).map(([_id, value]) => ({ _id, ...value }));
                setGames(gamesStateEntries);
            } catch (error) {
                console.error(error.message);
            }
        })();
    }, [])

    return (
        <section id="catalog-page">
            <h1>Catalog</h1>
            {games.length > 0
                ? (
                    <div className="catalog-container">
                        {games.map(game => <Game key={game._id} {...game} />)}
                    </div>
                )
                : <h3 className="no-articles">No Games Added Yet</h3>
            }

            {/* Some working alternative for playing arround */}
            {/* <div className="catalog-container">
                {
                    games.length && games.map(game => <Game key={game._id} {...game} />)
                    ??
                    <h3 className="no-articles">No articles</h3>
                }
            </div> */}
        </section>
    )
}

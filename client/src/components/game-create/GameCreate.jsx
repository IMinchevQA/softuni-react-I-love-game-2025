import { useNavigate } from "react-router-dom";
import config from "../../config.json";

export default function GameCreate() {
    const navigate = useNavigate();
    const createGameHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        console.log(formData);
        const data = Object.fromEntries(formData);

        data.players = Number(data.players);
        data._createdOn = Date.now();

        try {
            const response = await fetch(config.BASE_URL, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            console.log(result);
            navigate('/games')
        } catch (err) {
            alert(`Unable to create game: ${err.message}`);
        }
    }

    return (
        <section id="add-page">
            <form id="add-new-game" onSubmit={createGameHandler}>
                <div className="container">

                    <h1>Add New Game</h1>

                    <div className="form-group-half">
                        <label htmlFor="gameName">Game Name:</label>
                        <input type="text" id="gameName" name="title" placeholder="Enter game title..." />
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="genre">Genre:</label>
                        <input type="text" id="genre" name="genre" placeholder="Enter game genre..." />
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="activePlayers">Active Players:</label>
                        <input type="number" id="activePlayers" name="players" min="0" placeholder="0" />
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="releaseDate">Release Date:</label>
                        <input type="date" id="releaseDate" name="date" />
                    </div>

                    <div className="form-group-full">
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input type="text" id="imageUrl" name="imageUrl" placeholder="Enter image URL..." />
                    </div>

                    <div className="form-group-full">
                        <label htmlFor="summary">Summary:</label>
                        <textarea name="summary" id="summary" rows="5" placeholder="Write a brief summary..."></textarea>
                    </div>

                    <input className="btn submit" type="submit" value="ADD GAME" />
                </div>
            </form>
        </section>
    )
}

import { useState, useEffect } from 'react';
import { getGames } from './services/fetch-utils';
import Game from './Game';

export default function ListPage() {
  // you'll need some state to hold onto the array of games
  const [games, setGames] = useState([]);

  // fetch the games on load and inject them into state
  useEffect(() => {
    async function onLoad() {
      const data = await getGames();
      // console.log('🚀 ~ file: ListPage.js ~ line 13 ~ onLoad ~ data', data);
      setGames(data);
    }
    onLoad();
  }, []);
  return (
    <div className="list games">
      <h2>Welcome to the Game List</h2>
      {
        /* map through the games in state and render Game components */
        games.map((game, i) => (
          <Game key={game + i} game={game} />
        ))
      }
    </div>
  );
}

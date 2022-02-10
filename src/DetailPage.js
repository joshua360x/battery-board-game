import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { getGameById } from './services/fetch-utils';

export default function DetailPage() {
  const [game, setGame] = useState({});
  let {
    params: { id },
  } = useRouteMatch('/board-games/:id');
  // console.log('🚀 ~ file: DetailPage.js ~ line 9 ~ DetailPage ~ match', params.id);
  // const { id } = useParams();

  // on mount, fetch and set in state the correct board game for this id (the id can be found in match.params using the correct react-router hook)
  useEffect(() => {
    async function onLoad() {
      const data = await getGameById(id);
      setGame(data);
    }
    onLoad();
  }, [id]);

  return (
    <div className="detail">
      <h1>{game.title}</h1>
      <h2>
        A {game.genre} game for {game.min_players} to {game.max_players} players
      </h2>
      <h3>by celebrated designer {game.designer}</h3>
      <p>{game.description}</p>
    </div>
  );
}

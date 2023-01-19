import Friends from '../../assets/images/friends.webp'

const GameInfo = ({ status, winner, xIsNext }) => {
  return (
    <section className="game-information">
      {xIsNext && !winner ? (
        <h3 className="player-x">It's your turn, player X</h3>
      ) : !xIsNext && !winner ? (
        <h3 className="player-o">Now you, player O! </h3>
      ) : winner && status === 'Winner: X' ? (
        <h3 className="player-x">Nice! won x! </h3>
      ) : (
        <h3 className="player-o">Wohoo! won o!</h3>
      )}
      <img src={Friends} alt="Player X and Player O" />
    </section>
  )
}

export default GameInfo

import Square from "./Square";
import useGameStore from "../stores/useGameStore"

export default function Board(){
 const squares = useGameStore((state)=>state.squares)
 const setSquares = useGameStore((state)=>state.setSquares)
 const xIsNext = useGameStore((state)=>state.xIsNext)
 const setXIsNext = useGameStore((state)=>state.setXIsNext)
 console.log(useGameStore.getInitialState())
 const checkWinner = (squares)=>{
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
for(let i=0; i<lines.length;i++){
    const [a,b,c]= lines[i];
    if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
        return squares[a]
    }
}
return null
}
const calculateTurns = (squares)=>{
return squares.filter(x=>x==null).length
}
const calculateStatus = (winner, turns, player)=>{
    if(!winner && !turns) return 'Draw';
    if(winner) return `Winner ${winner}`;
    return `Next Player: ${player}`
}
const handleClick = (e)=>{
    if(squares[e]||winner) return
if(squares[e])return
let nextSquares = squares.slice();

nextSquares[e] = player 
console.log(e)
setSquares(nextSquares)
setXIsNext(!xIsNext)
} 

function reset(){
    
    let newer = Array(9).fill(null)
    setSquares(newer)
}
 const player = xIsNext?'X':'O';
 const winner = checkWinner(squares)
 const turns = calculateTurns(squares)
 const status = calculateStatus(winner, turns, player)
    return(
        <>
       <div>{status}</div> 
        <div
        style={{
            display:'grid',
            gridTemplateColumns:'repeat(3,1fr)',
            gridTemplateRows:'repeat(3,1fr)',
            width:'calc(4*2.5rem)',
            height:'calc(4*2.5rem)',
            border:'1px solid #999',
        }}
        >
            {squares.map((square,squareIndex)=>(
                <Square key={squareIndex} value={square} onSquareClick={()=>handleClick(squareIndex)}/>
            ))}
        </div>
        <button onClick={reset}>Reset</button>
        </>
    )
}

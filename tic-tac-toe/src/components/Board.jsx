import Square from "./Square";
import useGameStore from "../stores/useGameStore"

export default function Board(){
 const squares = useGameStore((state)=>state.squares)
 const setSquares = useGameStore((state)=>state.setSquares)

    return(
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
                <Square key={squareIndex} value={square}/>
            ))}
          
        </div>
    )
}

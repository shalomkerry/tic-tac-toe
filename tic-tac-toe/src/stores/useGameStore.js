import {create} from 'zustand'
import {combine} from 'zustand/middleware'
const useGameStore = create(
    combine({squares:Array(9).fill(null),xIsNext:true},(set)=>{
        return{
            setSquares: (nextSquares)=>{
                set((state)=>{
                    squares:
                    typeof nextSquares === 'function'?nextSquares(state.squares):nextSquares

                    if(nextSquares === state.squares){
                        return state;

                    }
                    console.log('previous',state.squares)
                    console.log('previous',nextSquares)
                    return{squares:nextSquares}
                })

            },
            setXIsNext:(nextXisNext)=>{
                set((state)=>({
                    xIsNext:
                    typeof nextXisNext ==='function'? nextXisNext(state.xIsNext):nextXisNext
                })
    )}
        }
    }),
)
export default useGameStore;
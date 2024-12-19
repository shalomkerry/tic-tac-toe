import {create} from 'zustand'
import {combine} from 'zustand/middleware'
const useGameStore = create(
    combine({squares:Array(9).fill('23')},(set)=>{
        return{
            setSquares: (nextSquares)=>{
                set((state)=>{
                    // squares:
                    typeof nextSquares === 'function'?nextSquares(state.squares):nextSquares

                    if(nextSquares === state.squares){
                        return state;

                    }
                    console.log('previous',state.squares)
                    console.log('previous',nextSquares)
                    return{squares:nextSquares}
                })

            }
        }
    }),
)
export default useGameStore;
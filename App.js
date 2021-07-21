import React,{useState} from "react"
import Icons from"./Components/Icons"
import { FaTimes,FaRegCircle } from "react-icons/fa"

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Button,Container,Card,CardBody,Row,Col} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.css'
import "./style.css"
import { icons } from "react-icons/lib"

let tictaktoeArray = new Array(9).fill("")
let App = ()=>{

    let [isCross,setIsCross] = useState()
    let [winMessage,setWinMessage] = useState("")

    const choiceIcon = ()=>{
        setIsCross(true)
    }

    const choiceIcons = ()=>{
        setIsCross(false)
    }
   
    const playAgain=()=>{
        setIsCross(true)
        setWinMessage("")
        tictaktoeArray.fill("")
    }
    const findWinner = ()=>{
        if(tictaktoeArray[0]==tictaktoeArray[1] && tictaktoeArray[0]==tictaktoeArray[2] && tictaktoeArray[0]!=""){
            setWinMessage(tictaktoeArray[0] + " has Won ")
            return toast(  tictaktoeArray[0] + " has Won ",{type:"success"})
        }
        else if(tictaktoeArray[0]==tictaktoeArray[3] && tictaktoeArray[0]==tictaktoeArray[6] && tictaktoeArray[0]!=""){
            setWinMessage(tictaktoeArray[0] + " has Won ")
            return toast(  tictaktoeArray[0] + " has Won ",{type:"success"})
        }
        else if(tictaktoeArray[3]==tictaktoeArray[4] && tictaktoeArray[3]==tictaktoeArray[5] && tictaktoeArray[3]!=""){
            setWinMessage(tictaktoeArray[3] + " has Won ")
            return toast(  tictaktoeArray[3] + " has Won ",{type:"success"})
        }
        else if(tictaktoeArray[6]==tictaktoeArray[7] && tictaktoeArray[6]==tictaktoeArray[8] && tictaktoeArray[6]!=""){
            setWinMessage(tictaktoeArray[6] + " has Won ")
            return toast(  tictaktoeArray[6] + " has Won ",{type:"success"})
        }
        else if(tictaktoeArray[1]==tictaktoeArray[4] && tictaktoeArray[1]==tictaktoeArray[7] && tictaktoeArray[1]){
            setWinMessage(tictaktoeArray[1] + " has Won ")
            return toast(  tictaktoeArray[1] + " has Won ",{type:"success"})
        }
        else if(tictaktoeArray[2]==tictaktoeArray[5] && tictaktoeArray[2]==tictaktoeArray[8] && tictaktoeArray[2]){
            setWinMessage(tictaktoeArray[2] + " has Won ")
            return toast(  tictaktoeArray[2] + " has Won ",{type:"success"})
        }
        else if(tictaktoeArray[0]==tictaktoeArray[4] && tictaktoeArray[0]==tictaktoeArray[8] && tictaktoeArray[0]){
            setWinMessage(tictaktoeArray[0] + " has Won ")
            return toast(  tictaktoeArray[0] + " has Won ",{type:"success"})
        }
        else if(tictaktoeArray[2]==tictaktoeArray[4] && tictaktoeArray[2]==tictaktoeArray[6] && tictaktoeArray[2]){
            setWinMessage(tictaktoeArray[2] + " has Won ")
            return toast(  tictaktoeArray[2] + " has Won ",{type:"success"})
        }

        let MatchDraw = !tictaktoeArray.includes("")
        if(MatchDraw){
            setWinMessage("`Game ended in a draw..!")
            return toast( "Match Draw..!!",{type:"dark"})
        }
    }
    
    const changeItem = (index)=>{
        if(winMessage){
            return toast("Game has already got over",{type:"info"})
        }
        if(tictaktoeArray[index] ==""){
            tictaktoeArray[index] = isCross? "cross" : "circle"  
            setIsCross(!isCross)
        }
        else{
            return toast("Something is Already there..",{type:"error"})
        }
        findWinner()
    }

    return(
        <div>
            <Container className="p-5">
                <ToastContainer position="bottom-center"></ToastContainer>
                <Row>
                    <Col md={6} className="offset-md-3">
                        {
                            winMessage?(
                                <div className="msg">
                                    <h1 className="text-Center">{winMessage}</h1>
                                    <Button className="button" onClick={playAgain}>Play Again</Button>
                                </div>
                            ):(
                                <h1 className="label">
                                    {isCross?   "cross's Turn ":  "circle's Turn"}
                                </h1>
                               
                            )
                        }
                        <br />
                        <div  style={{textAlign: "center",color:"whitesmoke",fontWeight:"bold"}}>
                            Choose Icons :- 
                            <button className="btn" style={{textAlign: "center"}}  onClick={choiceIcon}><FaTimes /></button>
                            <button className="btn" style={{textAlign: "center"}} onClick={choiceIcons}><FaRegCircle /></button>
                        </div>
                        <div className="grid">
                            {tictaktoeArray.map((value,index)=>(
                                <Card  className="card" onClick={()=>changeItem(index)}>
                                    <CardBody className="box">
                                        <Icons choice={tictaktoeArray[index]}/>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default App

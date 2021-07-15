import React, { useState } from 'react'
import Icon from "./Components/icon"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button, Container, Card, CardBody, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css"


const tictakArray = new Array(9).fill("")
const App = () => {
    let [isCross, setIsCross] = useState(true)
    let [winMessage ,setWinMessage] = useState("")

    const playAgain=()=>{
        setIsCross(true)
        setWinMessage("")
        tictakArray.fill("")
    }

    const findWinner=() =>{
        if(tictakArray[0] == tictakArray[1] && tictakArray[0] == tictakArray[2] && tictakArray[0] != ""){
            setWinMessage(tictakArray[0]+" has won")
        }
        else if(tictakArray[3] == tictakArray[4] && tictakArray[3] == tictakArray[5] && tictakArray[3] != ""){
            setWinMessage(tictakArray[3]+" has won")
        } 
        else if(tictakArray[6] == tictakArray[7] && tictakArray[6] == tictakArray[8] && tictakArray[6] != ""){
            setWinMessage(tictakArray[6]+" has won")
        } 
        else if(tictakArray[0] == tictakArray[3] && tictakArray[0] == tictakArray[6] && tictakArray[0] != ""){
            setWinMessage(tictakArray[0]+" has won")
        } 
        else if(tictakArray[1] == tictakArray[4] && tictakArray[1] == tictakArray[7] && tictakArray[1] != ""){
            setWinMessage(tictakArray[1]+" has won")
        } 
        else if(tictakArray[2] == tictakArray[5] && tictakArray[2] == tictakArray[8] && tictakArray[2] != ""){
            setWinMessage(tictakArray[2]+" has won")
        } 
        else if(tictakArray[2] == tictakArray[4] && tictakArray[2] == tictakArray[6] && tictakArray[2] != ""){
            setWinMessage(tictakArray[2]+" has won")
        } 
        else if(tictakArray[0] == tictakArray[4] && tictakArray[0] == tictakArray[8] && tictakArray[0] != ""){
            setWinMessage(tictakArray[0]+" has won")
        } 

    }

    const changeItem = (index) =>{
        if(winMessage){
            return toast("Game has already got over", {type: "success"})
        }
        if(tictakArray[index] == ""){
            tictakArray[index] = isCross ? "cross" : "circle";
            setIsCross(!isCross)
        }
        else{
            return toast("​Open your eyes dude where are you tapping", {type: "error"})
        }
        findWinner()
    }

    return(
        <Container className="p-5">
            <ToastContainer position="bottom-center" > </ToastContainer>
            <Row>

                <Col md={6} className="offset-md-3"> 

                    {
                        winMessage? (
                            <div>
                            <h1 className="text-center"> 
                            {winMessage}
                            </h1>
                            <Button onClick={playAgain}> Play Again</Button>
                            </div>
                        ) : (
                            <h1>
                                {isCross? "Cross's Turn": "Circle's Turn"}
                            </h1>
                        )

                    }

                    <div className="grid"> 
                        {tictakArray.map((value, index)=>(
                            <Card onClick={()=>changeItem(index)}> 
                                <CardBody className="box"> 
                                    <Icon choice={tictakArray[index]}/>
                                </CardBody>
                            </Card>
                        ))}

                     </div>

                

                </Col>

            </Row>

        </Container>
    )
}

export default App
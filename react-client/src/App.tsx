import React, { useEffect, useState } from "react";
// @ts-ignore
import styled from "styled-components";
import { io } from "socket.io-client";
import socketService from "./services/socketService";
import { JoinRoom } from "./components/joinRoom";
import GameContext, { IGameContextProps } from "./gameContext";
import { Game } from "./components/game";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
`;

const WelcomeText = styled.h1`
  margin: 0;
  color: #fff;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [isInRoom, setInRoom] = useState(false);
  const [playerSymbol, setPlayerSymbol] = useState<"x" | "o">("x");
  const [isPlayerTurn, setPlayerTurn] = useState(false);
  const [isGameStarted, setGameStarted] = useState(false);

  const connectSocket = async () => {
    const socket = await socketService
      .connect("http://localhost:9000")
      .catch((err) => {
        console.log("error", err);
      });
  };

  useEffect(() => {
    connectSocket();
  }, []);

  const gameContextValue: IGameContextProps = {
    isInRoom,
    setInRoom,
    playerSymbol,
    setPlayerSymbol,
    isPlayerTurn,
    setPlayerTurn,
    isGameStarted,
    setGameStarted,
  };

  return (
    
    <GameContext.Provider value={gameContextValue}>
      <AppContainer>
        <WelcomeText>Welcome to H∀PEBEAST-TOE</WelcomeText>
        <MainContainer>
          {!isInRoom && <JoinRoom />}
          {isInRoom && <Game />}
        </MainContainer>
      </AppContainer>
    </GameContext.Provider>
  );
}

export default App;

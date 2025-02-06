import React, { useState } from "react";
import Screen from "./components/Screen";
import BackgroundFade from "./components/BackgroundFade";
import "./App.css";
import MusicPlayer from "./components/MusicPlayer";

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  const nextScreen = (nextScreenNumber: number) => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentScreen(nextScreenNumber);
      setIsVisible(true);
    }, 1000);
  };


  const screens = [
    {
      screenNumber: 1,
      message: `Hola mi princesa, buenos días 😊🌞`,
      background: "/bg1.png",
      buttons: [
        { text: "Hola, buenos días! 😍", className: "btn-hello  btn-primary", nextScreen: 2 },
        { text: "No moleste joven ! 😤", className: "btn-sorry  btn-primary", nextScreen: 5 },
      ],
      iconSrc: "",
    },
    {
      screenNumber: 2,
      message: "Deseo hacerle una pregunta si no fuera mucha molestia 🤔💬",
      background: "/bg2.png",
      buttons: [
        { text: "Pregunta con confianza 🙌", className: "btn-accept  btn-primary", nextScreen: 3 },
        { text: "Otro día joven! 😤", className: "btn-reject  btn-primary", nextScreen: 6 },
      ],
      iconSrc: "",
    },
    {
      screenNumber: 3,
      message: "¿Deseas ser mi San Valentín? 💘❤️",
      background: "/bg3.png",
      buttons: [
        { text: "Sí, claro 😍", className: "btn-yes  btn-primary", nextScreen: 4 },
        { text: "Lo siento 😢", className: "btn-no  btn-primary", nextScreen: 7 },
      ],
      iconSrc: "",
    },
    {
      screenNumber: 4,
      message: `¡Gracias novia hermosa, por aceptar! No sabes lo feliz que me hace saber que compartiremos este día tan especial. Para reclamar una carta por este emoji en el chat 🐥. Te amo 🥰❤️‍🩹`,
      background: "/bg4.png",
      buttons: [
      ],
      iconSrc: "/heart.png",
    },
    {
      screenNumber: 5,
      message: "¡Oh! Parece que no estás de buen humor 😔, pero enserio es muy importante lo que le tengo que decir 🙌 ",
      background: "/bg1.png",
      buttons: [
        { text: "Volver a intentarlo", className: "btn-back btn-primary", nextScreen: 1 },
      ],
      iconSrc: "",
    },
    {
      screenNumber: 6,
      message: "Lo siento mucho, no era mi intención molestarla 😢. Pero le aseguro que no tardaré mucho! 🙌",
      background: "/bg2.png",
      buttons: [
        { text: "Volver a intentarlo", className: "btn-back btn-primary", nextScreen: 2 },
      ],
      iconSrc: "",
    }, {
      screenNumber: 7,
      message: "No aceptaré un no como respuesta 😤. ¡Vamos, acepta ser mi San Valentín! 💘❤️",
      background: "/bg3.png",
      buttons: [
        { text: "Reconsiderar respuesta 🤗", className: "btn-back  btn-primary", nextScreen: 3 },
      ],
      iconSrc: "",
    },
  ];

  const currentScreenData = screens.find(screen => screen.screenNumber === currentScreen);

  return (
    <div className="app">
      <MusicPlayer />

      {currentScreenData && <BackgroundFade background={currentScreenData.background} />}

      {currentScreenData && (
        <Screen
          screenNumber={currentScreenData.screenNumber}
          message={currentScreenData.message}
          buttons={currentScreenData.buttons.map(button => ({
            ...button,
            onClick: () => nextScreen(button.nextScreen),
          }))}
          isVisible={isVisible}
          iconSrc={currentScreenData.iconSrc}
        />
      )}
    </div>
  );
};

export default App;

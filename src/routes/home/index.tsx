import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Box from "../../components/layout/box";
import {  getGamePageRoute, getHomeRoute } from "../routes";
import useGameStarted from "../../modules/game/hooks/use-game-started";
import { useCallback, useState } from "react";
import { GAME_MODULE_ACTION, useGameModuleDispatch } from "../../modules/game";
import logo from './instrukcja.svg';
import GameRestart from '../game/img/ikonsButton/zrestartuj.svg';
import GameStart from '../game/img/ikonsButton/uruchom.svg';
import GameContinue from '../game/img/ikonsButton/kontynuujGre.svg';
import Knowledge from '../game/img/ikonsButton/bazaWiedzy.svg';
import Popup from "../../components/elements/popup";
import WikiPopup from "../../components/wiki-popup";
import { useRef } from "react";
/* <meta name="viewport" content="width=device-width, initial-scale=1"></meta> */
// import meta

const Container = styled.div`
.inner{
    background-color:var(--color2);
}
.fill{
    display: block;
    background-color: white;
    border-radius: 50px;
    width: 60%;
    margin-left: 5%;
    padding-bottom: 2em;
    padding-top:0.5em;
}
ul{
    padding: 0em 1em;
    width: 80%;
    margin: 0 auto;
}
li::marker{
    color:var(--color1);
}
.shultz{
    margin-top:0;
    margin-bottom:1em;
    height: auto;
    width: 45%;
    border-radius: 50px;
    border: 1px solid var(--color1);
}
#content{
    
    // width: 80%;
    margin: 0 auto;
    border-radius: 50px;
    padding: 0em 1.5em;
    // height: 20em;
    margin-top:1em;
    margin-bottom: 1em;
    height: fit-content;
    display:flex;
}
p{
    padding:0em 3em;
    padding-bottom: 2em;
}
nav{
    width:70%;
    margin: auto;
    background-color:var(--color2);
    margin-bottom: 2em;
    display:flex;
    text-align: center;
}
.button{
    margin: 0 auto;
    width:80%;
    height: 3em;
    margin-top:0.5em;
    font-size: 20px;
    line-height:2.3em;
    margin-right:1em;
}


.icon{
    height: 1.5rem;
    vertical-align: middle;
    margin-left: 0.5em;
}
@media (max-width: 1560px) {
    .fill {
        width: auto;
        margin: auto;
        font-size: 18px;
    }
    #content{
        display:block;
        align-items: center;
    }
    .shultz{
        width: 80%;
        position: relative;
        left:10%;
        height: fit-content;
    }
    #root{
        width: 100%;
        background: var(--color2);
    }
    nav{
        display: block;
    }
    .icon{
        margin: 0 auto;
    }
    p{
        padding:0.6em;

  }
    .button{
        width:70%;
        margin-right:0;
    }

  }
  @media (max-width: 490px) {
  .button{
            font-size: 16px;
            width:80%;
            line-height:2.3em;
  }
        .icon{
            height:1rem;
        }
  }
  #knowledge:
  margin-right: null;
`;

export default function HomePage() {
    const [showWikiPopup, setShowWikiPopup] = useState(false);
    const navigate = useNavigate()

    const [showGPSInfo, setShowGPSInfo] = useState(false);

    const goToGame = useCallback(() => {
        navigate(getGamePageRoute())
    }, [navigate]);

    const gameStarted = useGameStarted();
    const dispatch = useGameModuleDispatch();

    const onGameRestart = useCallback(() => {
        dispatch({
            type: GAME_MODULE_ACTION.RESET_GAME
        });
    }, [dispatch]);
    const wikiRef = useRef<HTMLButtonElement>(null);
    const closeWikiPopup = useCallback(() => {
        setShowWikiPopup(false)
        wikiRef.current?.focus();
    }, [setShowWikiPopup]);

    return <Container>
        <Box>

            <div id='content'>
            <img className="shultz" src={logo} alt="" />


            <div className="fill">
            <h2>Instrukcja</h2>
            <p>Zabierzemy Was na wycieczkę, ale kiedy, to trudno powiedzieć. Cały trik polega na tym, że cofnęliśmy czas. Spóźniamy się tu z czasem o pewien interwał, którego wielkość niepodobna określić. Będziemy przemieszczać się po określonych punktach i poznawać je z czasu, który z waszej codziennej perspektywy już minął, zbierać kawałki historii, wspomnienia, resztki pamięci. Nie dojdziemy czy wszystkie te rzeczy stały się całkiem, czy tylko próbowały się zdarzyć. Czy były to wielkie czy małe zdarzenia, również nie stwierdzimy tego ostatecznie. Jakieś zdarzenie może być co do swe prowenienci i swoich własnych środków małe i ubogie, a jednak, zbliżone do oka, może otwierać w swoim wnętrzu nieskończoną i promienną perspektywę .Dzięki temu, że wyższy byt usiłuje w nim się wyrazić i gwałtownie w nim błyszczy.
Tak tedy będziemy zbierali te aluzje, te ziemskie przybliżenia, te stacje i etapy po drogach naszego życia, jak ułamki potłuczonego zwierciadła.
</p>
            <ul>
                <li>Do wzięcia udziału w grze niezbędne jest urządzenie mobilne z dostępem do Internetu</li>
                <li>Gra wykorzystuje aparat i lokalizację urządzenia. Udziel zgody, gdy zostaniesz zapytany/zapytana o udzielenie dostępu.</li>
                <li>By móc rozpocząć grę musisz ja uruchomić na terenie Falenicy.</li>
                <li>Gra jest przeznaczona dla zespołów, ale można wziąć w niej udział pojedynczo.</li>
                <li>Informacja o lokalizacji kolejnych punktów będzie podawana na podstawie danych</li>
            </ul>
            
            </div>
            </div>
            <nav>

                {!gameStarted && <button className="button" onClick={() => { setShowGPSInfo(true) }}>Rozpocznij grę <img className="icon" src={GameStart} alt=""></img></button>}
                {gameStarted && <Link className="button" to={getGamePageRoute()}>Kontynuuj grę <img className="icon" src={GameContinue} alt=""></img></Link>}

            {gameStarted &&
                <Link className="button"  to={getHomeRoute()} onClick={()=>{onGameRestart() }}>Zrestartuj grę <img className="icon" src={GameRestart} alt=""></img> </Link>}
                <button className="button" ref={wikiRef} onClick={() => {setShowWikiPopup(true)}} >Baza wiedzy <img className="icon" src={Knowledge} alt="" /></button>
            
            
                </nav>
                {
            showWikiPopup && <WikiPopup onClick={closeWikiPopup}>

            </WikiPopup>
            }
        </Box>

        {showGPSInfo && <Popup onClick={goToGame}>
            <p>
                Dostęp do lokalizacji urządzenia jest niezbędny do przeprowadzenia gry. Udziel dostępu, jeśli zostaniesz o to poproszony.
            </p>
        </Popup>}
    </Container>
}

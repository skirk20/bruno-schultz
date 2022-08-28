import { useState, useCallback } from "react"
import styled from "styled-components"
import TaskPopup from "../../../../components/elements/task-popup"
import FillScreenWithHeader from "../../../../components/layout/fill-screen-with-header"
import ArtefactsWidget from "../../../../components/task-widgets/artefacts"
import useRemoveHeader from "../../../../modules/main/hooks/use-remove-header"

type Props = {
    onComplete(): void
}

const Cointainer = styled.div`
    .widget {
        flex-grow: 1;
        margin: .3em 0;
    }

    .buttons {
        width: 100%;
        max-width: 300px;
        margin: .2em auto;

        display: flex;
        justify-content: space-around;


        flex-direction: column;

        button {
            margin-top: .3em;
        }

        @media(orientation: landscape) {
            flex-direction: row;
            max-width: 100%;

            button {
                margin: 0;
            }
        }
    }
`;

export default function TaskMain({ onComplete }: Props) {
    useRemoveHeader();

    const [showHelpPopup, setShowHelpPopup] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);

    const onTaskComplete = useCallback(() => {
        setShowNextButton(true);
    }, [setShowNextButton])

    const [showButtons, onShowButtons] = useState(true);

    return <Cointainer>
        <FillScreenWithHeader hideHeader={!showButtons}>
            <div className="widget">
                <ArtefactsWidget onComplete={onTaskComplete} onShowButtons={onShowButtons} />
            </div>
            <div className="buttons">
                {showHelpPopup && <TaskPopup onClick={() => { setShowHelpPopup(false) }}>
                    <p>Kliknij w strzałkę aby wybrać odpowiedni obrazek i potwierdź swój wybór.</p>
                </TaskPopup>}
                {showButtons && <>
                    <div className="buttons">
                        <button className="button" onClick={() => { setShowHelpPopup(true) }}>Pomoc<i className="icon help" /></button>
                        {showNextButton && <button className="button" onClick={onComplete}>Zakończ<i className="icon ok" /></button>}
                    </div>
                </>}
            </div>
        </FillScreenWithHeader>
    </Cointainer>
}

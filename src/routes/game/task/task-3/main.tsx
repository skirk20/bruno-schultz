import { useCallback, useState } from "react";
import styled from "styled-components";
import TaskPopup from "../../../../components/elements/task-popup";
import TreeTask from "../../../../components/task-widgets/tree";
import useRemoveHeader from "../../../../modules/main/hooks/use-remove-header"
import ScrollToTop from "../../../../utils/widgets/scroll-to-top";

type Props = {
    onComplete(): void
}

const Container = styled.div`

    position: relative;
    height: 100vh;

    .app-ratio-keeper {
        position: relative;
        @media(orientation: portrait) {
            padding-top : ${100 * 900 / 590}%;
        }

        @media(orientation: landscape) {
            padding-top: ${100 * 1180 / 682}%;
            width: 100%;
        }
    }
`;

export default function TaskMain({ onComplete }: Props) {
    useRemoveHeader();

    const [showHelpPopup, setShowHelpPopup] = useState(false);

    const onTaskComplete = useCallback(() => {
        onComplete();
    }, [onComplete])

    return <>
        <ScrollToTop />
        <Container>
            <TreeTask onComplete={onTaskComplete} onHelp={() => { setShowHelpPopup(true) }} />
        </Container>
        {showHelpPopup && <TaskPopup onClick={() => { setShowHelpPopup(false) }}>
            <p>Dopasujcie zadania komisji z listy, przeciągając je do jednej z czterech kategorii widocznych w koronie drzewa.</p>
        </TaskPopup>}
    </>
}

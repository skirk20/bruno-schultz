import { PropsWithChildren } from "react";
import styled from "styled-components";
import PageHeader from "../header";

const Container = styled.div`
    height: 100vh;
    display: flex;

    align-items: stretch;
    flex-direction: column;

    .content {
        flex-grow: 1;
        position: relative;
    }
`;

export default function FillScreenWithHeader({ children }: PropsWithChildren<{}>) {
    return <Container>
        <div className="header">
            <PageHeader />
        </div>
        <div className="content">
            {children}
        </div>
    </Container>
}

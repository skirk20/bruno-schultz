import React, { ReactElement } from "react";
import styled from "styled-components";
import Box from "../box";
import pointer from "./pointer.svg";

type Props = {
    image: string,
    addButtons?: ReactElement[],
    title?: string[],
    onComplete(): void
}

const Container = styled.div`
    .content{
        text-align:center;
        padding: 1rem;
    }
    .pointer{
        width:10%;
        margin-top:2em;
    }
    .taskImg{
        width:100%;
        margin: auto;
        border-radius:50px;
        margin-bottom: 1em;
        margin-top:1em;
    }
    .title{
        color:var(--color1);
    }

    figure {
        margin: 0;

        blockquote {
            margin: 0;
            font-style: italic;
            text-align: center;
        }

        figcaption {
            font-size: .8em;
            text-align: right;
        }
    }
`

export default function TaskIntroTemplate({ image, onComplete, children, addButtons, title }: React.PropsWithChildren<Props>) {
    return <Container>
        <div className="content">
            <img className="pointer" src={pointer} alt="" />
            {title && <p className="title">
                {
                    title.reduce(
                        (prev, next) => {
                            return [...prev, <>{next}</>, <br />];
                        }, [<></>])
                }
        </p>
            }
        <img className="taskImg" src={image} alt="" />
        <Box>{children}</Box>
        <div className="button-list">
            <>
                <button className="button" onClick={onComplete}>Uruchom zadanie <i className="icon task-start" /></button>
                {addButtons}
            </>
        </div>
    </div>
    </Container >
}

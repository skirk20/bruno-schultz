import Box from "../../../../components/layout/box"

type Props = {
    onNext(): void
}

export default function Page1({onNext}: Props) {
    return <Box>
        <p>Strona 1</p>
        <button onClick={onNext}>Dalej</button>
    </Box>
}

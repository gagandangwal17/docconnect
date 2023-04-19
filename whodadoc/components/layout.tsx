import { ReactNode } from "react"
import Header from "./header"
import { Container } from "@mantine/core"
import FooterLinks from "./footer"

interface Props {
    children: ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Container size="xl">
                <Header />

                {children}
            </Container>
            <FooterLinks />
        </>
    )
}

import { AppProps } from "next/app"
import Head from "next/head"
import { MantineProvider } from "@mantine/core"
import Layout from "@/components/layout"

export default function App(props: AppProps) {
    const { Component, pageProps } = props

    return (
        <>
            <Head>
                <title>Page title</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>

            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    /** Put your mantine theme override here */
                    colorScheme: "light",

                    colors: {
                        brand: [
                            "#f9a2b7",
                            "#f78ba5",
                            "#f57392",
                            "#f45c80",
                            "#f2456e",
                            "#f12d5c",
                            "#ef164a",
                        ],
                    },

                    primaryColor: "brand",
                }}
            >
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MantineProvider>
        </>
    )
}

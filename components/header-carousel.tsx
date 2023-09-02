import Link from 'next/link';
import { Carousel } from "@mantine/carousel"
import { useMediaQuery } from "@mantine/hooks"
import {
    createStyles,
    Paper,
    Text,
    Title,
    Button,
    useMantineTheme,
    rem,
    Box,
} from "@mantine/core"



const useStyles = createStyles((theme) => ({
    card: {
        height: rem(370),
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundSize: "cover",
        backgroundPosition: "center",
        gap: rem(10),
        marginBottom: rem(20),
        borderRadius: rem(20),
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 500,
        fontSize: rem(18),
    },

    text: {
        color: theme.colors.gray[7],
        fontSize: rem(16),
        fontWeight: 500,
    },

    image: {
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
        background: theme.colors.brand[6],
        alignSelf: "stretch",
        width: 200,
        height: 200,

        borderRadius: rem(20),
        img: {
            width: "100%",
        },
    },

    hole: {
        position: "absolute",
        top: 10,
        left: 10,
        background: "#fff",
        width: 15,
        height: 15,
        borderRadius: "50%",
    },

    heading: {
        display: "flex",
        alignItems: "center",
        gap: rem(20),
        marginBottom: rem(20),
        marginTop: rem(60),
    },

    icon: {
        display: "flex",
        width: rem(50),
        height: rem(50),
        borderRadius: "50%",
        background: theme.colors.brand[6],
        alignItems: "center",
        justifyContent: "center",
    },

    iconBorder: {
        padding: rem(10),
        border: "1px solid #ccc",
        borderRadius: "50%",
    },
}))

interface CardProps {
    image: string
    name: string
    type: string
    hospital: string
}

function Card({ image, name, type, hospital }: CardProps) {
    const { classes } = useStyles()

    return (
        <Paper shadow="md" p="xl" radius="md" className={classes.card}>
            <Box className={classes.image}>
                <div className={classes.hole} />
                <img src={image} />
            </Box>

            <Title order={3} className={classes.title}>
                {name}
            </Title>

            <Text className={classes.text} size="xs">
                {type}
            </Text>

            <Text className={classes.text} size="xs">
                {hospital}
            </Text>
        </Paper>
    )
}

const data = [
    {
        image: "/images/doc.png",
        name: "Dr. Sanjeev Kapoor",
        type: "Child Specialist",
        hospital: "CMI Hospital",
    },
    {
        image: "/images/doc.png",
        name: "Dr. Sanjeev Kapoor",
        type: "Child Specialist",
        hospital: "CMI Hospital",
    },
    {
        image: "/images/doc.png",
        name: "Dr. Sanjeev Kapoor",
        type: "Child Specialist",
        hospital: "CMI Hospital",
    },
    {
        image: "/images/doc.png",
        name: "Dr. Sanjeev Kapoor",
        type: "Child Specialist",
        hospital: "CMI Hospital",
    },
    {
        image: "/images/doc.png",
        name: "Dr. Sanjeev Kapoor",
        type: "Child Specialist",
        hospital: "CMI Hospital",
    },
    {
        image: "/images/doc.png",
        name: "Dr. Sanjeev Kapoor",
        type: "Child Specialist",
        hospital: "CMI Hospital",
    },
    {
        image: "/images/doc.png",
        name: "Dr. Sanjeev Kapoor",
        type: "Child Specialist",
        hospital: "CMI Hospital",
    },
]

export default function HeaderCarousel() {
    const theme = useMantineTheme()
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
    const slides = data.map((item) => (
        <Carousel.Slide key={item.name}>
            <Card {...item} />
        </Carousel.Slide>
    ))
    const { classes } = useStyles()

    return (
        <>
            <div className={classes.heading}>
                <div className={classes.iconBorder}>
                    <span className={classes.icon}>
                        <img src="/icons/play.png" alt="" />
                    </span>
                </div>
                <span className={classes.title}>Check who is available</span>
            </div>
            <Carousel
                slideSize="240px"
                slideGap="60px"
                align="start"
                slidesToScroll={mobile ? 1 : 2}
            >
                {slides}
            </Carousel>
        </>
    )
}

// Import dependencies
// import { Carousel } from "@mantine/carousel"
// import { useMediaQuery } from "@mantine/hooks"
// import {
//     createStyles,
//     Paper,
//     Text,
//     Title,
//     useMantineTheme,
//     rem,
//     Box,
// } from "@mantine/core"
// import API from "@/lib/axios"
// import { useEffect, useState } from "react"
// import moment from "moment"

// // Create CSS styles
// const useStyles = createStyles((theme) => ({
//     card: {
//         height: rem(370),
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "flex-start",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         gap: rem(10),
//         marginBottom: rem(20),
//         borderRadius: rem(20),
//     },

//     title: {
//         fontFamily: `Greycliff CF, ${theme.fontFamily}`,
//         fontWeight: 500,
//         fontSize: rem(18),
//     },

//     text: {
//         color: theme.colors.gray[7],
//         fontSize: rem(16),
//         fontWeight: 500,
//     },

//     image: {
//         position: "relative",
//         display: "flex",
//         alignItems: "flex-end",
//         background: theme.colors.brand[6],
//         alignSelf: "stretch",
//         width: 200,
//         height: 200,

//         borderRadius: rem(20),
//         img: {
//             width: "100%",
//         },
//     },

//     hole: {
//         position: "absolute",
//         top: 10,
//         left: 10,
//         background: "#fff",
//         width: 15,
//         height: 15,
//         borderRadius: "50%",
//     },

//     heading: {
//         display: "flex",
//         alignItems: "center",
//         gap: rem(20),
//         marginBottom: rem(20),
//         marginTop: rem(60),
//     },

//     icon: {
//         display: "flex",
//         width: rem(50),
//         height: rem(50),
//         borderRadius: "50%",
//         background: theme.colors.brand[6],
//         alignItems: "center",
//         justifyContent: "center",
//     },

//     iconBorder: {
//         padding: rem(10),
//         border: "1px solid #ccc",
//         borderRadius: "50%",
//     },

//     active: {
//         color: "#00FF00",
//     },

//     cardStatus: {
//         background: "#eee",
//         width: 80,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         gap: 5,
//         borderRadius: rem(10),
//         fontSize: rem(12),
//     },

//     holeActive: {
//         width: 5,
//         height: 5,
//         borderRadius: "50%",
//         background: theme.colors.brand[6],
//     },
// }))

// /**
//  * Define interface for our card props
//  * ---------------------------------------
//  * Interfaces help us typecheck the data we pass on to components in order to avoid us from making any mistakes. It warns us and also uses intellisense to assist us.
//  * This is the reason why many people switch to typescript.
//  */
// interface CardProps {
//     attributes: {
//         image?: {
//             data: {
//                 attributes: {
//                     url: string
//                 }
//             }
//         }
//         name: string
//         speciality: string
//         hospital: string
//         active: boolean
//         [key: string]: any
//     }
// }

// // Card component
// function Card(props: CardProps) {
//     // import css classes
//     const { classes } = useStyles()

//     // get variables from attributes
//     const { image, name, speciality, hospital } = props.attributes

//     return (
//         <Paper shadow="md" p="xl" radius="md" className={classes.card}>
//             <Box className={classes.image}>
//                 <div className={classes.holeActive} />
//                 <img
//                     src={
//                         image &&
//                         "https://api.trackingpox.com" + image.data.attributes.url
//                     }
//                 />
//             </Box>

//             <Title order={3} className={classes.title}>
//                 {name}
//             </Title>

//             <Text className={classes.text} size="xs">
//                 {speciality}
//             </Text>

//             <Text className={classes.text} size="xs">
//                 {hospital}
//             </Text>

//             {props.attributes.active && (
//                 <div className={classes.cardStatus}>
//                     <span className={classes.holeActive} />
//                     Available
//                 </div>
//             )}
//         </Paper>
//     )
// }

// // Format our data fetched from strapi and sorty the data by availability of doctors
// const formatData = (data: CardProps[]) => {
//     // Define empty array
//     const results: CardProps[] = []

//     // Get current local time
//     const current_time = moment(new Date().toLocaleTimeString(), "HH:mm:ss")

//     // Get current day
//     const current_day = moment(new Date()).format("dddd").toLowerCase()

//     // Foreach record in the data array
//     data.map((item, i) => {
//         // Set initial availability to false
//         let active = false

//         // Get the "from" time of the doctor
//         const from_time = moment(
//             item.attributes[current_day + "_from"],
//             "HH:mm:ss"
//         )

//         // Get the "to" time of the doctor
//         const to_time = moment(item.attributes[current_day + "_to"], "HH:mm:ss")

//         // If the current local time is in between these 2 times
//         if (current_time.isAfter(from_time) && current_time.isBefore(to_time)) {
//             // Set availability to true
//             active = true
//         }

//         // Add the active value to the object
//         item.attributes.active = active

//         // Push the object to the results array
//         results.push(item)
//     })

//     // sort by active first
//     const sortByActive = results.sort(
//         (a, b) => Number(b.attributes.active) - Number(a.attributes.active)
//     )

//     // Return filtered results
//     return sortByActive
// }

// // The Default component exported from this file
// export default function HeaderCarousel() {
//     // Get the theme object from mantine
//     const theme = useMantineTheme()

//     // Get the mantine mobile media query
//     const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)

//     // Get the css classes that we defined earlier above
//     const { classes } = useStyles()

//     // Define data variables in the state
//     const [data, setData] = useState<CardProps[]>([])

//     // Slides component
//     const slides = data?.map((item) => (
//         <Carousel.Slide key={item.attributes.name}>
//             <Card {...item} />
//         </Carousel.Slide>
//     ))

//     // On page load (client side)
//     useEffect(() => {
//         // Fetch the doctors data from the strapi backend
//         API.get("/doctors?populate=*").then((response) => {
//             // Set the data in the state so that the page re-renders
//             setData(formatData(response.data.data))
//         })
//     }, [])

//     // Render
//     return (
//         <>
//             <div className={classes.heading}>
//                 <div className={classes.iconBorder}>
//                     <span className={classes.icon}>
//                         <img src="/icons/play.png" alt="" />
//                     </span>
//                 </div>
//                 <span className={classes.title}>Check who is available</span>
//             </div>
//             <Carousel
//                 slideSize="240px"
//                 slideGap="60px"
//                 align="start"
//                 slidesToScroll={mobile ? 1 : 2}
//             >
//                 {data && slides}
//             </Carousel>
//         </>
//     )
// }


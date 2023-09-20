import {
    createStyles,
    Text,
    Container,
    ActionIcon,
    Group,
    rem,
    Paper,
    Input,
    Button,
    Switch,
    Title,
    Box,
    clsx,
    Rating,
} from "@mantine/core"

const useStyles = createStyles((theme) => ({
    root: {
        marginTop: rem(120),
    },

    flex: {
        display: "flex",
        gap: rem(100),
        marginTop: rem(60),
        flexWrap: "wrap",
        justifyContent: "center",

        [theme.fn.smallerThan("sm")]: {
            flexDirection: "column",
        },
    },

    title: {
        fontWeight: 500,
        fontSize: rem(44),
    },

    subTitle: {
        fontSize: rem(20),
        color: theme.colors.gray[6],
    },

    heading: {
        textAlign: "center",
        marginBottom: rem(20),
    },

    card: {
        height: rem(370),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: rem(5),
        marginBottom: rem(20),
        borderRadius: rem(20),
        minWidth: rem(370),
        position: "relative",
        maxWidth: 200,
        textAlign: "center",
    },

    cardTitle: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 500,
        fontSize: rem(18),
    },

    cardText: {
        color: theme.colors.gray[7],
        fontSize: rem(16),
        fontWeight: 500,
    },

    cardImage: {
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        background: theme.colors.brand[6],
        width: 250,
        height: 160,

        borderRadius: rem(20),
        img: {
            position: "absolute",
            bottom: 0,
        },
    },

    cardStatus: {
        position: "absolute",
        top: -30,
        left: 0,
        background: "#eee",
        width: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        borderRadius: rem(10),
        fontSize: rem(12),
    },

    hole: {
        background: "#ccc",
        width: 5,
        height: 5,
        borderRadius: "50%",
    },

    holeActive: {
        background: theme.colors.brand[6],
    },

    reviews: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
    },

    seeMore: {
        marginTop: rem(60),
    },

    action: {
        display: "flex",
        justifyContent: "center",
    },
}))

interface CardProps {
    image: string
    name: string
    type: string
    reviews: number
    rating: number
    available: boolean
}

function Card({ image, name, type, reviews, rating, available }: CardProps) {
    const { classes } = useStyles()

    return (
        <Paper shadow="xl" p="xl" radius="md" className={classes.card}>
            <Box className={classes.cardImage}>
                <img src={image} className={classes.cardImage}/>
            </Box>

            <Title order={3} className={classes.cardTitle}>
                {name}
            </Title>

            <Text className={classes.cardText} size="xs">
                {type}
            </Text>

            <div className={classes.reviews}>
                <Rating defaultValue={rating} color="brand" readOnly /> {reviews}
            </div>

            <Button variant="outline" color="red" radius="lg" size="lg">
                Book An Appointment
            </Button>
        </Paper>
    )
}

const data = [
    {
        image: "/images/apolloclinic.jpg",
        name: "Appolo Clinic Dehradun",
        type: "Krishan Nagar chowk, Ballapur road, Dehradun",
        reviews: 102,
        rating: 4,
        available: true,
    },
    {
        image: "/images/dwarkaclinics.webp",
        name: "Dwarka Clinics - The Integrated Superspecialities",
        type: "Race Course, Dalanwala, Dehradun",
        reviews: 12,
        rating: 3,
        available: true,
    },
    {
        image: "/images/shuddhiclinic.jpeg",
        name: "Shuddhi Ayurvedic Clinic",
        type: "First Floor, Saket Lane No.1, Rajpur Road, Dehradun",
        reviews: 192,
        rating: 2,
        available: true,
    },
    {
        image: "/images/pinkclinic.jpg",
        name: "Pink Clinic",
        type: "Post office Rd, Clement Town, Dehradun",
        reviews: 156,
        rating: 5,
        available: true,
    },
]

export default function Clinics() {
    const { classes } = useStyles()
    const Cards = data.map((item) => <Card key={item.name} {...item} />)

    return (
        <div className={classes.root}>
            <div className={classes.heading}>
                <Title className={classes.title}>Check Clinics Around</Title>
                <span className={classes.subTitle}>
                    Well qualified doctors are ready to serve you
                </span>
            </div>

            <div className={classes.flex}>{Cards}</div>

            <div className={classes.action}>
                <Button radius="lg" size="xl" className={classes.seeMore}>
                    See More
                </Button>
            </div>
        </div>
    )
}

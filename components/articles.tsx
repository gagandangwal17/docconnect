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
import Link from "next/link"

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

    action: {
        display: "flex",
        justifyContent: "center",
    },

    seeMore: {
        marginTop: rem(60),
    },

    card: {
        display: "flex",

        alignItems: "center",
        justifyContent: "center",
        gap: rem(5),
        marginBottom: rem(20),
        borderRadius: rem(20),
        minWidth: rem(370),
        position: "relative",
        paddingLeft: rem(80),
        paddingTop: rem(20),
        paddingBottom: rem(20),
    },

    cardImage: {
        position: "relative",
        marginBottom: rem(40),
        flexShrink: 0,

        "& img": {
            display: "block",
            position: "relative",
            zIndex: 1,
            width: "100%",
        },
    },

    cardTitle: {
        fontWeight: 500,
        fontSize: rem(20),
        flex: 1,
        padding: "0 15%",
    },

    cardDescription: {
        fontSize: rem(20),
        flex: 1,
        alignSelf: "stretch",
        padding: "0 15%",
        marginBottom: rem(20),
    },

    cardButton: {
        fontSize: rem(20),
        alignSelf: "flex-end",
        marginBottom: rem(20),
        marginRight: rem(20),
    },

    cardAction: {
        display: "flex",
        justifyContent: "flex-end",
    },

    cards: { flex: 1 },

    largeCard: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: rem(5),
        marginBottom: rem(20),
        borderRadius: rem(20),
        minWidth: rem(370),
        position: "relative",
        flex: 1,
    },

    largeCardImage: {
        position: "relative",
        marginBottom: rem(40),
        flexShrink: 0,

        "& img": {
            display: "block",
            position: "relative",
            zIndex: 1,
            width: "100%",
        },
    },

    imageBG: {
        position: "absolute",
        height: "30%",
        left: -20,
        bottom: -20,
        right: -20,
        background: theme.colors.brand[6],
        borderRadius: rem(40),
        zIndex: 0,
    },
}))

interface CardProps {
    image: string
    title: string
    description: string
    featured: boolean
    url:string
}

function Card({ image, title, description, featured, url }: CardProps) {
    const { classes } = useStyles()

    if (featured) return null

    return (
        <Paper shadow="xl" className={classes.card}>
            <div className={classes.cardImage}>
                <img src={image} alt="" />
                <div className={classes.imageBG} />
            </div>

            <div>
                <Title className={classes.cardTitle}>{title}</Title>

                <Text className={classes.cardDescription}>{description}</Text>

                <div className={classes.cardAction}>
                    <Link href={url} target="_blank">

                    <Button 
                        variant="subtle"
                        radius="lg"
                        size="xl"
                        className={classes.cardButton}
                    >
                        See Moree
                    </Button>

                    </Link>
                    
                </div>
            </div>
        </Paper>
    )
}

const data = [
    {
        id: 1,
        image: "/images/article-1.png",
        title: "How Eating Nuts Can Help You Lose Weight",
        description:
            "Nuts are extremely healthy, as they're packed full of nutrients and antioxidants.",
        featured: true,
        url:"https://www.webmd.com/diet/features/go-nuts-your-diet#:~:text=Dieters%20who%20eat%20nuts%20tend,nuts%20helps%20dieters%20lose%20weight.",
    },
    {
        id: 2,
        image: "/images/article-2.png",
        title: "Social media and it's effects",
        description: "Social media addiction is becoming more...",
        featured: false,
        url:"https://www.mayoclinic.org/healthy-lifestyle/tween-and-teen-health/in-depth/teens-and-social-media-use/art-20474437#:~:text=Social%20media%20harms,much%20social%20media%20teens%20use.",
    },
    {
        id: 3,
        image: "/images/article-3.png",
        title: "Steps to Take If Your Oral Diabetes Medication Stops Working",
        description: "If your oral diabetes drug...",
        featured: false,
        url:"https://www.healthline.com/health/type-2-diabetes/oral-medication-stops-working#:~:text=When%20your%20oral%20diabetes%20medication,level%2C%20or%20a%20recent%20illness.",
    },
]

export default function Articles() {
    const { classes } = useStyles()
    const Cards = data.map((item) => {
        if (item.id === 1) return
        return <Card key={item.title} {...item} />
    })

    return (
        <div id="article-section" className={classes.root}>
            <div className={classes.heading}>
                <Title className={classes.title}>Our Latest Articles</Title>
                <span className={classes.subTitle}>Written by our experts</span>
            </div>

            <div className={classes.flex}>
                <Paper shadow="xl" p="40" className={classes.largeCard}>
                    <div className={classes.largeCardImage}>
                        <img src={data[0].image} alt="" />
                        <div className={classes.imageBG} />
                    </div>

                    <div>
                        <Title className={classes.cardTitle}>
                            {data[0].title}
                        </Title>

                        <Text className={classes.cardDescription}>
                            {data[0].description}
                        </Text>
                    </div>
                    <a href={data[0].url} target="_blank">
                    <Button
                        variant="subtle"
                        radius="lg"
                        size="xl"
                        className={classes.cardButton}
                    >
                        See More
                    </Button>
                    </a>
                    
                </Paper>
                <div className={classes.cards}>{Cards}</div>
            </div>

            <div className={classes.action}>
                <Link href="/test">
                <Button radius="lg" size="xl" className={classes.seeMore}>
                    More articles
                </Button>
                </Link>
                
                
                {/* I want these buttons to be functional */}
            </div>
        </div>
    )
}

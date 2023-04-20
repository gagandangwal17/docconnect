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
}

function Card({ image, title, description, featured }: CardProps) {
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
                    <Button
                        variant="subtle"
                        radius="lg"
                        size="xl"
                        className={classes.cardButton}
                    >
                        See More
                    </Button>
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
    },
    {
        id: 2,
        image: "/images/article-2.png",
        title: "Social media and it's effects",
        description: "Social media addiction is becoming more...",
        featured: false,
    },
    {
        id: 3,
        image: "/images/article-3.png",
        title: "Steps to Take If Your Oral Diabetes Medication Stops Working",
        description: "If your oral diabetes drug...",
        featured: false,
    },
]

export default function Articles() {
    const { classes } = useStyles()
    const Cards = data.map((item) => {
        if (item.id === 1) return
        return <Card key={item.title} {...item} />
    })

    return (
        <div className={classes.root}>
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

                    <Button
                        variant="subtle"
                        radius="lg"
                        size="xl"
                        className={classes.cardButton}
                    >
                        See More
                    </Button>
                </Paper>
                <div className={classes.cards}>{Cards}</div>
            </div>

            <div className={classes.action}>
                <Button radius="lg" size="xl" className={classes.seeMore}>
                    See More
                </Button>
            </div>
        </div>
    )
}

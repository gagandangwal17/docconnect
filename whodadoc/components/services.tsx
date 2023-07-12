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
} from "@mantine/core"

import Link from "next/link"

const useStyles = createStyles((theme) => ({
    root: {
        marginTop: rem(120),
    },

    flex: {
        display: "flex",
        gap: rem(60),
        marginTop: rem(60),
        flexWrap: "wrap",

        [theme.fn.smallerThan("sm")]: {
            flexDirection: "column",
        },
    },

    card: {
        height: rem(200),
        color: theme.colors.brand[6],
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: rem(40),
        minWidth: rem(250),

        "& .icon": {
            display: "block",
            width: rem(80),
            height: rem(80),
            backgroundColor: theme.colors.brand[6],
        },

        "& .chatbot": {
            WebkitMask: 'url("/icons/chatbot.svg") no-repeat center',
            mask: 'url("/icons/chatbot.svg") no-repeat center',
        },

        "& .availability": {
            WebkitMask: 'url("/icons/availability.svg") no-repeat center',
            mask: 'url("/icons/availability.svg") no-repeat center',
        },

        "& .consultation": {
            WebkitMask: 'url("/icons/consultation.svg") no-repeat center',
            mask: 'url("/icons/consultation.svg") no-repeat center',
        },

        "& .clinics": {
            WebkitMask: 'url("/icons/clinics.svg") no-repeat center',
            mask: 'url("/icons/clinics.svg") no-repeat center',
        },

        "&:hover": {
            background: theme.colors.brand[6],
            color: "white",

            "& .icon": {
                backgroundColor: "white",
            },
        },
    },

    icon: {},

    icontext: {
        fontWeight: 500,
        fontSize: rem(18),
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

    linkClass: {
        textDecoration: 'none',
    },
      
}))

export default function Services() {
    const { classes } = useStyles()

    return (
        
        <div className={classes.root}>
            <div className={classes.heading}>
                    <Title className={classes.title}>Our Services</Title>
                    <span className={classes.subTitle}>
                        Serving the best we can
                    </span>
            </div>

            <div className={classes.flex}>

            <Link className={classes.linkClass}  href="/test">
                    
                    <Paper shadow="md" p="xl" radius="xl" className={classes.card}>
                    <span className="availability icon"></span>

                    <span className={classes.icontext}>
                        Live Availability Details
                    </span>
                </Paper>
                    
                </Link>
                

                <Paper shadow="md" p="xl" radius="xl" className={classes.card}>
                    <span className="consultation icon"></span>

                    <span className={classes.icontext}>
                        Virtual Consultations
                    </span>
                </Paper>

                <Paper shadow="md" p="xl" radius="xl" className={classes.card}>
                    <span className="clinics icon"></span>

                    <span className={classes.icontext}>
                        Nearby Clinics & Chemists
                    </span>
                </Paper>

                <Paper shadow="md" p="xl" radius="xl" className={classes.card}>
                    <span className="chatbot icon"></span>

                    <span className={classes.icontext}>Health Chatbot</span>
                </Paper>
            </div>
        </div>
    )
}

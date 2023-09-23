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
} from "@mantine/core"

const useStyles = createStyles((theme) => ({
    root: {
        marginTop: rem(120),
    },
    search: {
        display: "flex",
        flexDirection: "column",
        gap: rem(20),
    },
    flex: {
        display: "flex",
        alignItems: "center",
        gap: rem(20),
    },
    social: {
        [theme.fn.smallerThan("sm")]: {
            marginTop: theme.spacing.xs,
        },
    },
    text: {
        color: theme.colors.gray[7],
        fontSize: rem(16),
        fontWeight: 500,
    },
}))

export default function Search() {
    const { classes } = useStyles()

    return (
        <div className={classes.root}>
            <span className={classes.text}>Advanced Search</span>
            <Paper shadow="md" p="xl" radius="xl" className={classes.search}>
                <span className={classes.text}>Find a doctor</span>
                <div className={classes.flex}>
                    <Input
                        placeholder="Specialty"
                        radius="md"
                        size="md"
                        //disabled
                    />
                    <Input
                        placeholder="Problem (optional)"
                        radius="md"
                        size="md"
                        //disabled
                    />

                    <Switch label="Availability" size="md" />

                    <a href="/cardio">

                    <Button radius="lg" size="lg">
                        Search
                    </Button>

                    </a>
                    
                </div>
            </Paper>
        </div>
    )
}

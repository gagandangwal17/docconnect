import {
    createStyles,
    Header,
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
} from "@mantine/core"
import { MantineLogo } from "@mantine/ds"
import { useDisclosure } from "@mantine/hooks"
import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown,
} from "@tabler/icons-react"

import Link from 'next/link'

const useStyles = createStyles((theme) => ({
    link: {
        display: "flex",
        alignItems: "center",
        height: "100%",
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        textDecoration: "none",
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        fontWeight: 500,
        fontSize: theme.fontSizes.sm,

        [theme.fn.smallerThan("sm")]: {
            height: rem(42),
            display: "flex",
            alignItems: "center",
            width: "100%",
        },

        ...theme.fn.hover({
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
        }),
    },

    subLink: {
        width: "100%",
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
        borderRadius: theme.radius.md,

        ...theme.fn.hover({
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[7]
                    : theme.colors.gray[0],
        }),

        "&:active": theme.activeStyles,
    },

    dropdownFooter: {
        backgroundColor:
            theme.colorScheme === "dark"
                ? theme.colors.dark[7]
                : theme.colors.gray[0],
        margin: `calc(${theme.spacing.md} * -1)`,
        marginTop: theme.spacing.sm,
        padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
        paddingBottom: theme.spacing.xl,
        borderTop: `${rem(1)} solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[1]
        }`,
    },

    hiddenMobile: {
        [theme.fn.smallerThan("sm")]: {
            display: "none",
        },
    },

    hiddenDesktop: {
        [theme.fn.largerThan("sm")]: {
            display: "none",
        },
    },
}))

const mockdata = [
    {
        icon: IconCode,
        title: "Nearby doctors",
        description: "Find doctors around you",
        url: "https://google.com"
    },
    {
        icon: IconCoin,
        title: "Local Clinics",
        description: "Clinics nearby",
        url: "https://google.com"
    },
    {
        icon: IconBook,
        title: "Chemists around",
        description: "Local Medical Stores",
        url: "https://google.com"
    },
    {
        icon: IconBook,
        title: "Health Chatbot",
        description: "A chatbot to assist you",
        url: "https://google.com"
    },
    
]

export default function HeaderMegaMenu() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
        useDisclosure(false)
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
    const { classes, theme } = useStyles()

    const links = mockdata.map((item) => (
        <Link href={item.url} key={item.title}>
        <UnstyledButton className={classes.subLink} >
            <Group noWrap align="flex-start">
                <ThemeIcon size={34} variant="default" radius="md">
                    <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
                </ThemeIcon>
                <div>
                    <Text size="sm" fw={500}>
                        {item.title}
                    </Text>
                    <Text size="xs" color="dimmed">
                        {item.description}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
        </Link>
    ))

    return (
        <Box pb={20} pt={60}>
            <Header height={60} style={{ borderBottom: 0 }}>
                <Group position="apart" sx={{ height: "100%" }}>
                    <img src="/images/logo.png" alt="whodadoc" />

                    <Group
                        sx={{ height: "100%" }}
                        spacing={0}
                        className={classes.hiddenMobile}
                    >
                        <a href="#" className={classes.link}>
                            Home
                        </a>
                        <HoverCard
                            width={600}
                            position="bottom"
                            radius="md"
                            shadow="md"
                            withinPortal
                        >
                            <HoverCard.Target>
                                <a href="#" className={classes.link}>
                                    <Center inline>
                                        <Box component="span" mr={5}>
                                            Features
                                        </Box>
                                        <IconChevronDown
                                            size={16}
                                            color={theme.fn.primaryColor()}
                                        />
                                    </Center>
                                </a>
                            </HoverCard.Target>

                            <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                                <Group position="apart" px="md">
                                    <Text fw={500}>Features</Text>
                                    <Anchor href="#" fz="xs">
                                        View all
                                    </Anchor>
                                </Group>

                                <Divider
                                    my="sm"
                                    mx="-md"
                                    color={
                                        theme.colorScheme === "dark"
                                            ? "dark.5"
                                            : "gray.1"
                                    }
                                />

                                <SimpleGrid cols={2} spacing={0}>
                                    {links}
                                </SimpleGrid>

                                {/* <div className={classes.dropdownFooter}>
                                    <Group position="apart">
                                        <div>
                                            <Text fw={500} fz="sm">
                                                Get started
                                            </Text>
                                            <Text size="xs" color="dimmed">
                                                Their food sources have
                                                decreased, and their numbers
                                            </Text>
                                        </div>
                                        <Button variant="default">
                                            Get started
                                        </Button>
                                    </Group>
                                </div> */}
                            </HoverCard.Dropdown>
                        </HoverCard>
                        <a href="#article-section" className={classes.link}>
                            Articles
                        </a>
                        <a href="#" className={classes.link}>
                            Contact
                        </a>
                    </Group>

                    <Burger
                        opened={drawerOpened}
                        onClick={toggleDrawer}
                        className={classes.hiddenDesktop}
                    />
                </Group>
            </Header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Navigation"
                className={classes.hiddenDesktop}
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
                    <Divider
                        my="sm"
                        color={
                            theme.colorScheme === "dark" ? "dark.5" : "gray.1"
                        }
                    />

                    <a href="header/tsx" className={classes.link}>
                        Home
                    </a>
                    <UnstyledButton
                        className={classes.link}
                        onClick={toggleLinks}
                    >
                        <Center inline>
                            <Box component="span" mr={5}>
                                Features
                            </Box>
                            <IconChevronDown
                                size={16}
                                color={theme.fn.primaryColor()}
                            />
                        </Center>
                    </UnstyledButton>
                    <Collapse in={linksOpened}>{links}</Collapse>
                    <a href="header-carousel.tsx" className={classes.link}>
                        Find Doctor
                    </a>
                    <a href="footer.tsx" className={classes.link}>
                        Contact
                    </a>

                    <Divider
                        my="sm"
                        color={
                            theme.colorScheme === "dark" ? "dark.5" : "gray.1"
                        }
                    />

                    {/* <Group position="center" grow pb="xl" px="md">
                        <Button variant="default">Log in</Button>
                        <Button>Sign up</Button>
                    </Group> */}
                </ScrollArea>
            </Drawer>
        </Box>
    )
}

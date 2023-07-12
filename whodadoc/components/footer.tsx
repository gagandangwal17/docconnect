import {
    createStyles,
    Text,
    Container,
    ActionIcon,
    Group,
    rem,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
} from "@mantine/core"
import {
    IconBrandTwitter,
    IconBrandYoutube,
    IconBrandInstagram,
} from "@tabler/icons-react"
import { MantineLogo } from "@mantine/ds"

  
const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: rem(120),
        paddingTop: `calc(${theme.spacing.xl} * 2)`,
        paddingBottom: `calc(${theme.spacing.xl} * 2)`,
        backgroundColor:
            theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
        borderTop: `${rem(1)} solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[2]
        }`,
    },

    logo: {
        maxWidth: rem(200),

        [theme.fn.smallerThan("sm")]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
    },

    description: {
        marginTop: rem(5),

        [theme.fn.smallerThan("sm")]: {
            marginTop: theme.spacing.xs,
            textAlign: "center",
        },
    },

    inner: {
        display: "flex",
        justifyContent: "space-between",

        [theme.fn.smallerThan("sm")]: {
            flexDirection: "column",
            alignItems: "center",
        },
    },

    groups: {
        display: "flex",
        flexWrap: "wrap",

        [theme.fn.smallerThan("sm")]: {
            display: "none",
        },
    },

    wrapper: {
        width: rem(160),
    },

    link: {
        display: "block",
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[1]
                : theme.colors.gray[6],
        fontSize: theme.fontSizes.sm,
        paddingTop: rem(3),
        paddingBottom: rem(3),

        "&:hover": {
            textDecoration: "underline",
        },
    },

    title: {
        fontSize: theme.fontSizes.lg,
        fontWeight: 700,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        marginBottom: `calc(${theme.spacing.xs} / 2)`,
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },

    afterFooter: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: theme.spacing.xl,
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
        borderTop: `${rem(1)} solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[2]
        }`,

        [theme.fn.smallerThan("sm")]: {
            flexDirection: "column",
        },
    },

    social: {
        [theme.fn.smallerThan("sm")]: {
            marginTop: theme.spacing.xs,
        },
    },

    // wrapper: {
    //     minHeight: 400,
    //     boxSizing: 'border-box',
    //     backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
    //       theme.colors[theme.primaryColor][7]
    //     } 100%)`,
    //     borderRadius: theme.radius.md,
    //     padding: `calc(${theme.spacing.xl} * 2.5)`,
    
    //     [theme.fn.smallerThan('sm')]: {
    //       padding: `calc(${theme.spacing.xl} * 1.5)`,
    //     },
    //   },
    
    //   title: {
    //     fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    //     color: theme.white,
    //     lineHeight: 1,
    //   },
    
    //   description: {
    //     color: theme.colors[theme.primaryColor][0],
    //     maxWidth: rem(300),
    
    //     [theme.fn.smallerThan('sm')]: {
    //       maxWidth: '100%',
    //     },
    //   },
    
      form: {
        backgroundColor: theme.white,
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        boxShadow: theme.shadows.lg,
      },
    
    //   social: {
    //     color: theme.white,
    
    //     '&:hover': {
    //       color: theme.colors[theme.primaryColor][1],
    //     },
    //   },
    
      input: {
        backgroundColor: theme.white,
        borderColor: theme.colors.gray[4],
        color: theme.black,
    
        '&::placeholder': {
          color: theme.colors.gray[5],
        },
      },
    
      inputLabel: {
        color: theme.black,
      },
    
      control: {
        backgroundColor: theme.colors[theme.primaryColor][6],
      }
}))

interface FooterLinksProps {
    title: string
    links: { label: string; link: string }[]
}

export default function FooterLinks() {
    const { classes } = useStyles()
    const data: FooterLinksProps[] = [
        {
            title: "Company",
            links: [
                {
                    label: "About",
                    link: "#",
                    
                },
                {
                    label: "Contact",
                    link: "#",
                },
                {
                    label: "Blogs",
                    link: "#article-section",
                },
            ],
        },
        {
            title: "Legal",
            links: [
                {
                    label: "Privacy Policy",
                    link: "#",
                },
                {
                    label: "Terms Of Use",
                    link: "#",
                },
            ],
        },
        // {
        //     title: "Lorum",
        //     links: [
        //         {
        //             label: "Ipsum",
        //             link: "#",
        //         },
        //         {
        //             label: "Ipsum",
        //             link: "#",
        //         },
        //         {
        //             label: "Ipsum",
        //             link: "#",
        //         },
        //     ],
        // },
        // {
        //     title: "Lorum",
        //     links: [
        //         {
        //             label: "Ipsum",
        //             link: "#",
        //         },
        //         {
        //             label: "Ipsum",
        //             link: "#",
        //         },
        //         {
        //             label: "Ipsum",
        //             link: "#",
        //         },
        //     ],
        // },
    ]

    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <Text<"a">
                key={index}
                className={classes.link}
                component="a"
                href={link.link}
                // onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </Text>
        ))

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
        )
    })

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner} size="xl">
                <div className={classes.logo}>
                    <img src="/images/logo.png" alt="doConnect" />

                    <Text
                        size="xs"
                        color="dimmed"
                        className={classes.description}
                    >
                        Find live availablility schedule of doctors and
                        details of clinics, chemists nearby.
                    </Text>
                </div>
                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter} size="xl">
                <Text color="dimmed" size="sm">
                    © 2023 DoConnect. All rights reserved.
                </Text>

                <Group
                    spacing={0}
                    className={classes.social}
                    position="right"
                    noWrap
                >
                    <ActionIcon size="lg">
                        <IconBrandTwitter size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <IconBrandYoutube size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <IconBrandInstagram size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>

            

        </footer>
    )

}

// const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];
//   export function ContactUs() {
//     const { classes } = useStyles();
  
//     const icons = social.map((Icon, index) => (
//       <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
//         <Icon size="1.4rem" stroke={1.5} />
//       </ActionIcon>
//     ));
  
//     return (
//       <div className={classes.wrapper}>
//         <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
//           <div>
//             <Title className={classes.title}>Contact us</Title>
//             <Text className={classes.description} mt="sm" mb={30}>
//               Leave your email and we will get back to you within 24 hours
//             </Text>
  
//             <ContactIconsList variant="white" />
  
//             <Group mt="xl">{icons}</Group>
//           </div>
//           <div className={classes.form}>
//             <TextInput
//               label="Email"
//               placeholder="your@email.com"
//               required
//               classNames={{ input: classes.input, label: classes.inputLabel }}
//             />
//             <TextInput
//               label="Name"
//               placeholder="John Doe"
//               mt="md"
//               classNames={{ input: classes.input, label: classes.inputLabel }}
//             />
//             <Textarea
//               required
//               label="Your message"
//               placeholder="I want to order your goods"
//               minRows={4}
//               mt="md"
//               classNames={{ input: classes.input, label: classes.inputLabel }}
//             />
  
//             <Group position="right" mt="md">
//               <Button className={classes.control}>Send message</Button>
//             </Group>
//           </div>
//         </SimpleGrid>
//       </div>
//     )
//   }
// }

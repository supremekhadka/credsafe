export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "CredSafe - Password Haven for All.",
  description: "Access your passwords anytime, anywhere.",
  navItems: [],
  navMenuItems: [
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    login: "./login",
    signup: "./signup",
    github: "https://github.com/supremekhadka/credsafe",
  },
};

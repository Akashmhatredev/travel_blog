/* Site-wide settings: who you are and where the menus point. */

export const SITE = {
  name: "Akash",
  fullName: "Akash Mhatre",
  role: "Photographer",
  initials: "AM",
  avatar: "", // e.g. "/images/avatar.jpg"
  brandHover: "Photo",

  nav: [
    { label: "Travel", href: "/travel" },
    { label: "Discover", href: "#" },
    { label: "Blog", href: "#" },
    { label: "About", href: "#" },
  ],

  footer: [
    {
      heading: "Pages",
      links: [
        { label: "Home", href: "/" },
        { label: "Travel", href: "/travel" },
        { label: "Discover", href: "#" },
        { label: "Blog", href: "#" },
        { label: "About", href: "#" },
      ],
    },
    {
      heading: "Social",
      links: [
        { label: "Instagram", href: "#" },
        { label: "Unsplash", href: "#" },
        { label: "GitHub", href: "#" },
      ],
    },
    {
      heading: "Contact",
      links: [
        { label: "Email", href: "mailto:hello@example.com" },
        { label: "Back to top", href: "#top" },
      ],
    },
  ],
};

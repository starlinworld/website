export type MediaItem = {
    title: string;
    src: string;
    type: "image" | "video";
};

export type FeatureItem = {
    title: string;
    description: string;
    icon: string;
}

export type QQGroup = {
    name: string;
    href: string;
    image: string;
};

export const mainQQGroup = "https://jq.qq.com/?_wv=1027&k=1DsWS4Ls";
export const workQQGroup = "https://jq.qq.com/?_wv=1027&k=EecCR3Zf";
export const serverAddress = "mc.starlin.world";

export const socialLinks = [
    {
        label: "QQ group",
        href: mainQQGroup,
        icon: "forum",
    },
    {
        label: "GitHub",
        href: "https://github.com/starlinworld",
        icon: "code",
    },
];

export const landscapeItems: MediaItem[] = [
    {
        title: "2017年8月一位女士的家",
        src: "/assets/intro/2017年8月一位女士的家.jpg",
        type: "image",
    },
    {
        title: "2017年某农场",
        src: "/assets/intro/2017年某农场.png",
        type: "image",
    },
    {
        title: "2020年主城",
        src: "/assets/intro/2020年主城.png",
        type: "image",
    },
];

export const featureItems: FeatureItem[] = [
    {
        title: "Always Up to Date",
        description: "Once PaperMC and plugins are ready, we update the server to the latest Minecraft version.",
        icon: "",
    },
    {
        title: "World Storage",
        description: "The world will always remain accessible. We backup daily and store them securely, so you can build without worries.",
        icon: "",
    },
    {
        title: "Player-Managed",
        description: "The server is maintained by the community. Plugin requests and customizations are discussed and determined by the players.",
        icon: "",
    },
    {
        title: "Non-Profit",
        description: "We are a non-profit server, and all proceeds are reinvested into improving the server and providing a better experience for our players.Since founded, the server is fully supported by player donations, and never has any monetization.",
        icon: "",
    },
    {
        title: "Open-Source",
        description: "All configuration files, excluding player data, are open-sourced on GitHub.",
        icon: "",
    }
];

export const galleryItems: MediaItem[] = [
    {
        title: "2017中秋合影",
        src: "/assets/gallery/2017中秋合影.png",
        type: "image",
    },
    {
        title: "2017梦开始的地方",
        src: "/assets/gallery/2017梦开始的地方.png",
        type: "image",
    },
    {
        title: "2020三周年1",
        src: "/assets/gallery/2020三周年1.png",
        type: "image",
    },
    {
        title: "2020三周年2",
        src: "/assets/gallery/2020三周年2.png",
        type: "image",
    },
    {
        title: "2020三周年3",
        src: "/assets/gallery/2020三周年3.png",
        type: "image",
    },
    {
        title: "2020三周年4",
        src: "/assets/gallery/2020三周年4.png",
        type: "image",
    },
    {
        title: "2020三周年合影",
        src: "/assets/gallery/2020三周年合影.png",
        type: "image",
    },
    {
        title: "2020三周年纪念1",
        src: "/assets/gallery/2020纪念1.png",
        type: "image",
    },
    {
        title: "2020三周年纪念2",
        src: "/assets/gallery/2020纪念2.png",
        type: "image",
    },
    {
        title: "2020纪念3",
        src: "/assets/gallery/2020纪念3.png",
        type: "image",
    },
    {
        title: "2020纪念4",
        src: "/assets/gallery/2020纪念4.png",
        type: "image",
    },
    {
        title: "2020纪念5",
        src: "/assets/gallery/2020纪念5.png",
        type: "image",
    },
    {
        title: "2020纪念6",
        src: "/assets/gallery/2020纪念6.png",
        type: "image",
    },
    {
        title: "2020纪念7",
        src: "/assets/gallery/2020纪念7.png",
        type: "image",
    },
    {
        title: "2022春节",
        src: "/assets/gallery/2022春节.jpeg",
        type: "image",
    },
    {
        title: "2022春节视频",
        src: "/assets/gallery/2022春节.mp4",
        type: "video",
    },
    {
        title: "2022春节合影",
        src: "/assets/gallery/2022春节合影.png",
        type: "image",
    },
    {
        title: "杂项1",
        src: "/assets/gallery/杂项1.png",
        type: "image",
    },
    {
        title: "杂项2",
        src: "/assets/gallery/杂项2.png",
        type: "image",
    },
    {
        title: "杂项3",
        src: "/assets/gallery/杂项3.jpeg",
        type: "image",
    },
    {
        title: "杂项4",
        src: "/assets/gallery/杂项4.png",
        type: "image",
    },
    {
        title: "杂项5",
        src: "/assets/gallery/杂项5.png",
        type: "image",
    },
    {
        title: "杂项6",
        src: "/assets/gallery/杂项6.png",
        type: "image",
    },
];

export const qqGroups: QQGroup[] = [
    {
        name: "Main QQ Group",
        href: mainQQGroup,
        image: "/assets/join/main.jpg",
    },
    {
        name: "Server Management QQ Group",
        href: workQQGroup,
        image: "/assets/join/work.jpg",
    },
];
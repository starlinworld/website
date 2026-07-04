import en from "./locales/en";

export type MediaItem = {
    title: string;
    src: string;
    type: "image" | "video";
    width?: number;
    height?: number;
};

export type FeatureItem = {
    title: string;
    titleKey: string;
    description: string;
    descriptionKey: string;
    icon: string;
}

export type QQGroup = {
    name: string;
    nameKey: string;
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
        icon: "qq",
    },
    {
        label: "Bilibili",
        href: "https://space.bilibili.com/178184777",
        icon: "bilibili",
    },
    {
        label: "GitHub",
        href: "https://github.com/starlinworld",
        icon: "github",
    },
];

export const servers = [
  {
    id: "survival",
        name: en.data.serverSurvival,
    nameKey: "data.serverSurvival",
    icon: "fa-solid fa-house",
    image: "/assets/intro/survival.png",
    color: "text-green",
    href: "https://docs.starlin.world/servers/survival",
  },
  {
    id: "modded",
        name: en.data.serverModded,
    nameKey: "data.serverModded",
    icon: "fa-solid fa-puzzle-piece",
    image: "/assets/intro/modded.png",
    color: "text-pink",
    href: "https://docs.starlin.world/servers/modded",
  },
];

export const landscapeItems: MediaItem[] = [
    {
        title: "2017年8月一位女士的家",
        src: "/assets/intro/2017年8月一位女士的家.jpg",
        type: "image",
        width: 1920,
        height: 1080,
    },
    {
        title: "2017年某农场",
        src: "/assets/intro/2017年某农场.png",
        type: "image",
        width: 1097,
        height: 607,
    },
    {
        title: "2020年主城",
        src: "/assets/intro/2020年主城.png",
        type: "image",
        width: 4096,
        height: 2246,
    },
];

export const featureItems: FeatureItem[] = [
    {
        title: en.data.featureUpdateTitle,
        titleKey: "data.featureUpdateTitle",
        description: en.data.featureUpdateDescription,
        descriptionKey: "data.featureUpdateDescription",
        icon: "fa-solid fa-arrow-up",
    },
    {
        title: en.data.featureStorageTitle,
        titleKey: "data.featureStorageTitle",
        description: en.data.featureStorageDescription,
        descriptionKey: "data.featureStorageDescription",
        icon: "fa-solid fa-database",
    },
    {
        title: en.data.featureManagedTitle,
        titleKey: "data.featureManagedTitle",
        description: en.data.featureManagedDescription,
        descriptionKey: "data.featureManagedDescription",
        icon: "fa-solid fa-users",
    },
    {
        title: en.data.featureNonProfitTitle,
        titleKey: "data.featureNonProfitTitle",
        description: en.data.featureNonProfitDescription,
        descriptionKey: "data.featureNonProfitDescription",
        icon: "fa-solid fa-hand-holding-heart",
    },
    {
        title: en.data.featureOpenSourceTitle,
        titleKey: "data.featureOpenSourceTitle",
        description: en.data.featureOpenSourceDescription,
        descriptionKey: "data.featureOpenSourceDescription",
        icon: "fa-brands fa-github",
    },
];

export const galleryItems: MediaItem[] = [
    {
        title: "2017梦开始的地方",
        src: "/assets/gallery/2017梦开始的地方.png",
        type: "image",
        width: 856,
        height: 519,
    },
    {
        title: "2017中秋合影",
        src: "/assets/gallery/2017中秋合影.png",
        type: "image",
        width: 1100,
        height: 640,
    },
    {
        title: "杂项1",
        src: "/assets/gallery/杂项1.png",
        type: "image",
        width: 912,
        height: 640,
    },
    {
        title: "杂项2",
        src: "/assets/gallery/杂项2.png",
        type: "image",
        width: 912,
        height: 640,
    },
    {
        title: "杂项3",
        src: "/assets/gallery/杂项3.jpeg",
        type: "image",
        width: 1422,
        height: 800,
    },
    {
        title: "杂项4",
        src: "/assets/gallery/杂项4.png",
        type: "image",
        width: 912,
        height: 640,
    },
    {
        title: "杂项5",
        src: "/assets/gallery/杂项5.png",
        type: "image",
        width: 856,
        height: 519,
    },
    {
        title: "杂项6",
        src: "/assets/gallery/杂项6.png",
        type: "image",
        width: 500,
        height: 350,
    },
    {
        title: "2020三周年1",
        src: "/assets/gallery/2020三周年1.png",
        type: "image",
        width: 3069,
        height: 1600,
    },
    {
        title: "2020三周年2",
        src: "/assets/gallery/2020三周年2.png",
        type: "image",
        width: 3069,
        height: 1600,
    },
    {
        title: "2020三周年3",
        src: "/assets/gallery/2020三周年3.png",
        type: "image",
        width: 3069,
        height: 1600,
    },
    {
        title: "2020三周年4",
        src: "/assets/gallery/2020三周年4.png",
        type: "image",
        width: 1240,
        height: 640,
    },
    {
        title: "2020三周年合影",
        src: "/assets/gallery/2020三周年合影.png",
        type: "image",
        width: 3069,
        height: 1600,
    },
    {
        title: "2020三周年纪念1",
        src: "/assets/gallery/2020纪念1.png",
        type: "image",
        width: 1548,
        height: 849,
    },
    {
        title: "2020三周年纪念2",
        src: "/assets/gallery/2020纪念2.png",
        type: "image",
        width: 1548,
        height: 849,
    },
    {
        title: "2020纪念3",
        src: "/assets/gallery/2020纪念3.png",
        type: "image",
        width: 1548,
        height: 849,
    },
    {
        title: "2020纪念4",
        src: "/assets/gallery/2020纪念4.png",
        type: "image",
        width: 1548,
        height: 849,
    },
    {
        title: "2020纪念5",
        src: "/assets/gallery/2020纪念5.png",
        type: "image",
        width: 1548,
        height: 849,
    },
    {
        title: "2020纪念6",
        src: "/assets/gallery/2020纪念6.png",
        type: "image",
        width: 1548,
        height: 849,
    },
    {
        title: "2020纪念7",
        src: "/assets/gallery/2020纪念7.png",
        type: "image",
        width: 1548,
        height: 849,
    },
    {
        title: "2022春节",
        src: "/assets/gallery/2022春节.jpeg",
        type: "image",
        width: 1920,
        height: 1080,
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
        width: 1920,
        height: 1048,
    },
];

export const qqGroups: QQGroup[] = [
    {
        name: en.data.mainQQGroup,
        nameKey: "data.mainQQGroup",
        href: mainQQGroup,
        image: "/assets/join/main.jpg",
    },
    {
        name: en.data.workQQGroup,
        nameKey: "data.workQQGroup",
        href: workQQGroup,
        image: "/assets/join/work.jpg",
    },
];
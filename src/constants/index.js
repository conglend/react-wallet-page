import recentExpIcon1 from "../assets/images/svg/recent-exp2.svg";
import recentExpIcon2 from "../assets/images/svg/recent-exp1.svg";

import cateIcon1 from "../assets/images/svg/cate1.svg";
import cateIcon2 from "../assets/images/svg/cate2.svg";
import cateIcon3 from "../assets/images/svg/cate3.svg";
import cateIcon4 from "../assets/images/svg/cate4.svg";
import cateIcon5 from "../assets/images/svg/cate5.svg";
import cateIcon6 from "../assets/images/svg/cate6.svg";

import activityIcon1 from "../assets/images/svg/activity1.svg";
import activityIcon2 from "../assets/images/svg/activity2.svg";

const experiences = [
  {
    id: 1,
    title: "DeFi Swap",
    description: "Swap your digital assets",
    usersCountStr: "+200 users",
    viewCount: 204,
    icon: recentExpIcon1,
    type: "recent",
    categoryId: 6,
    overview:
      "it is easy to electronically sign, manage and distribute all your contracts and documents safely, securely, anywhere, anytime- paperlessly.",
  },
  {
    id: 2,
    title: "Docu sign",
    description: "sign smart contracts seamlessly",
    usersCountStr: "+1K users",
    viewCount: 1203,
    icon: recentExpIcon2,
    type: "trending",
    categoryId: 1,
    overview:
      "it is easy to electronically sign, manage and distribute all your contracts and documents safely, securely, anywhere, anytime- paperlessly.",
  },
  {
    id: 3,
    title: "Testing Experience1",
    description: "Swap your digital assets",
    usersCountStr: "+300 users",
    viewCount: 303,
    icon: recentExpIcon1,
    type: "trending",
    categoryId: 1,
    overview:
      "it is easy to electronically sign, manage and distribute all your contracts and documents safely, securely, anywhere, anytime- paperlessly.",
  },
  {
    id: 4,
    title: "ABC Tested Experience",
    description: "sign smart contracts seamlessly",
    usersCountStr: "+1K users",
    viewCount: 1403,
    icon: recentExpIcon2,
    type: "recent",
    categoryId: 1,
    overview:
      "it is easy to electronically sign, manage and distribute all your contracts and documents safely, securely, anywhere, anytime- paperlessly.",
  },
  {
    id: 5,
    title: "Super Nice",
    description: "Swap your digital assets",
    usersCountStr: "+200 users",
    viewCount: 245,
    icon: recentExpIcon1,
    type: "recent",
    categoryId: 2,
    overview:
      "it is easy to electronically sign, manage and distribute all your contracts and documents safely, securely, anywhere, anytime- paperlessly.",
  },
  {
    id: 6,
    title: "BBC Audio",
    description: "sign smart contracts seamlessly",
    usersCountStr: "+1K users",
    viewCount: 1823,
    icon: recentExpIcon2,
    type: "recent",
    categoryId: 3,
    overview:
      "it is easy to electronically sign, manage and distribute all your contracts and documents safely, securely, anywhere, anytime- paperlessly.",
  },
];

const popularCategories = [
  { id: 1, color: "#EAEFFF", icon: cateIcon1, text: "Exchanges" },
  { id: 2, color: "#F5F5F5", icon: cateIcon2, text: "Games" },
  { id: 3, color: "#E2F9F3", icon: cateIcon3, text: "Marketplaces" },
  { id: 4, color: "#FFF3EC", icon: cateIcon4, text: "Defi" },
  { id: 5, color: "#EBF5FF", icon: cateIcon5, text: "Collectibles" },
  { id: 6, color: "#F0EBFF", icon: cateIcon6, text: "Utilities" },
];

const activities = [
  {
    id: 1,
    icon: activityIcon1,
    user: "johndoe.near",
    text: "signed the contract successfully",
    day: 2,
  },
  {
    id: 2,
    icon: activityIcon2,
    user: "CryptoKing.near",
    text: "requested to sign the contract",
    day: 3,
  },
];

export { experiences, popularCategories, activities };

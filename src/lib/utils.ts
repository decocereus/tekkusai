import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const RETAILERS = [
  { url: "https://potentgaming.com", code: "ca", name: "Canada" },
  { url: "https://doctormouse.com.br/", code: "br", name: "Brazil" },
  { url: "https://goldgaming.com.ar/", code: "ar", name: "Argentina" },
  { url: "https://zerkgamingmods.co.uk", code: "gb", name: "United Kingdom" },
  { url: "https://maxesport.gg/", code: "fr", name: "France" },
  { url: "https://buff2u.com/", code: "sa", name: "Saudi Arabia" },
  {
    url: "https://ctrlshiftstore.com/products/singularity-by-tekkusai",
    code: "in",
    name: "India",
  },
  { url: "https://www.fumo-shop.com/", code: "jp", name: "Japan" },
  {
    url: "https://www.facebook.com/profile/100083202886977/",
    code: "th",
    name: "Thailand",
  },
  {
    url: "https://www.facebook.com/xtremesolutionzone",
    code: "sg",
    name: "Singapore",
  },
  {
    url: "https://www.tokopedia.com/infinitas",
    code: "id",
    name: "Indonesia",
  },
  { url: "https://ausmodshop.com", code: "au", name: "Australia" },
  {
    url: "https://smartstore.naver.com/ypgaminggear/",
    code: "kr",
    name: "South Korea",
  },
  { url: "https://www.respawngt.com", code: "my", name: "Malaysia" },
  { url: "https://www.maxgaming.com", code: "eu", name: "Europe" },
];

import { MetadataRoute } from "next";

type Screenshot = {
  src: string;
  type?: string;
  sizes?: string;
};

interface CustomScreenshot extends Screenshot {
  form_factor?: string; // Optional form factor property
  label?: string; // Optional label property
}
interface MyManifest extends MetadataRoute.Manifest {
  screenshots: CustomScreenshot[];
}

export default function manifest(): MyManifest {
  return {
    name: "comboom.sucht | The Mgaming Group",
    short_name: "comboom.sucht",
    description: "web page of comboom.sucht",
    start_url: "/",
    id: "/",
    display: "standalone",
    orientation: "natural",
    display_override: [
      "standalone",
      "fullscreen",
      "browser",
      "minimal-ui",
      "window-controls-overlay",
    ],
    background_color: "#2E3440",
    theme_color: "#2E3440",
    lang: "de-DE",
    prefer_related_applications: false,
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/media/1024.png",
        sizes: "1024x1024",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/media/1024.png",
        sizes: "1024x1024",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/media/1024.png",
        sizes: "1024x1024",
        type: "image/png",
      },
      {
        src: "/media/512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/media/512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/media/512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/media/256.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/media/256.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/media/256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/media/128.png",
        sizes: "128x128",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/media/128.png",
        sizes: "128x128",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/media/128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "/media/64.png",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/media/64.png",
        sizes: "64x64",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/media/64.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/media/32.png",
        sizes: "32x32",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/media/32.png",
        sizes: "32x32",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/media/32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/media/16.png",
        sizes: "16x16",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/media/16.png",
        sizes: "16x16",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/media/16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/media/Logo-transparet.png",
        sizes: "431x224",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: "/media/Logo-transparet-4x.png",
        sizes: "1724x896",
        type: "image/png",
        form_factor: "wide",
        label: "Logo of comboom.sucht",
      },
      {
        src: "/media/Logo-transparet-4x.png",
        sizes: "1724x896",
        type: "image/png",
        form_factor: "narrow",
        label: "Logo of comboom.sucht",
      },
    ],
  };
}

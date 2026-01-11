import { useEffect } from "react";

export type LightColor = "red" | "orange" | "green";

interface FaviconColourProps {
  color: LightColor;
}

export function FaviconColour({ color }: FaviconColourProps) {
  useEffect(() => {
    // Find the old favicon link
    const oldLink = document.getElementById("favicon") as HTMLLinkElement | null;
    if (!oldLink) return;

    // Create a new <link> element with updated color
    const newLink = document.createElement("link");
    newLink.id = "favicon";
    newLink.rel = "icon";
    newLink.href = `/favicon-${color}.ico?v=${Date.now()}`; // cache-busting

    // Replace the old link with the new one
    oldLink.parentNode?.replaceChild(newLink, oldLink);
  }, [color]); // run every time 'color' changes

  return null; 
  
}

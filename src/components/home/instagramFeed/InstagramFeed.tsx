import React, { useEffect } from "react";

interface InstagramFeedProps {
  isContactPath?: boolean;
}

export function InstagramFeed({ isContactPath }: InstagramFeedProps) {
  useEffect(() => {
    const observerCallback = (mutationsList: any, observer: any) => {
      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node: any) => {
            if (
              node.classList.contains("eapps-instagram-feed-title-container")
            ) {
              console.log("entro en container title");
              if (isContactPath) {
                node.parentNode.removeChild(node);
                observer.disconnect();
              }
            }
            if (node.classList.contains("eapps-widget-toolbar")) {
              node.parentNode.removeChild(node);
              observer.disconnect();
            }
            if (node.textContent.trim() === "Free Instagram Feed widget") {
              node.parentNode.removeChild(node);
              observer.disconnect();
            }
          });
        }
      }
    };

    const observer = new MutationObserver(observerCallback);

    setTimeout(() => {
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }, 100);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="elfsight-app-2a936f9d-ea35-4533-807a-a4d7280cd216 instaLayout"
      data-elfsight-app-lazy
    ></div>
  );
}

import React, { useEffect } from "react";

interface InstagramFeedProps {
  isContactPath?: boolean;
}

export function InstagramFeed({ isContactPath }: InstagramFeedProps) {
  useEffect(() => {
    const observerCallback = (mutationsList: any) => {
      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node: any) => {
            if (node.nodeType === 1) {
              if (node.textContent.trim() === "Seguinos en Instagram") {
                const divTitleContainer = node.querySelector("div");
                if (isContactPath) {
                  divTitleContainer
                    ? (divTitleContainer.style.display = "none")
                    : "";
                } else {
                  divTitleContainer
                    ? (divTitleContainer.style.display = "inline")
                    : "";
                }
              }
              if (node.classList.contains("eapps-widget-toolbar")) {
                node.parentNode?.removeChild(node);
              }
              if (node.textContent.trim() === "Free Instagram Feed widget") {
                node.parentNode?.removeChild(node);
              }
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
  }, [isContactPath]);

  return (
    <div
      className="elfsight-app-2a936f9d-ea35-4533-807a-a4d7280cd216 instaLayout animate__animated animate__fadeInLeft"
      data-elfsight-app-lazy
      data-aos="flip-left"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    ></div>
  );
}

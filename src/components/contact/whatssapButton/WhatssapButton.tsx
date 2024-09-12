import React, { useEffect } from "react";

export const WhatsAppButton = () => {
  useEffect(() => {
    const observerCallback = (mutationsList: any) => {
      mutationsList.forEach((mutation: any) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node: any) => {
            if (node.nodeType === 1 && node.classList) {
              if (node.classList.contains("Main__MainComponent-sc-1nlcdkx-1")) {
                const enlace = node.querySelector("a");
                enlace.parentNode.removeChild(enlace);
              }
              if (node.classList.contains("Main__MainComponent-sc-1nlcdkx-1")) {
                const linkButton = node.querySelector("button");
                if (linkButton) {
                  console.log("entre en el boton");
                  const title = linkButton.getAttribute("title");
                  linkButton.setAttribute("target", "_blank");
                }
              }
            }
          });
        }
      });
    };

    const observer = new MutationObserver(observerCallback);

    setTimeout(() => {
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }, 1000);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        className={`elfsight-app-ad7e03b3-d5e1-472a-9f36-3ddaec6abe38 whatsAppButton`}
        data-elfsight-app-lazy
      ></div>
    </>
  );
};

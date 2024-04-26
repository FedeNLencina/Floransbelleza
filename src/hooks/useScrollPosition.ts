import { useState, useEffect } from "react";

function useScrollPosition(offset: number) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      // Verificar si la posición del scroll es mayor que el offset proporcionado
      if (window.scrollY > offset) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    // Agregar el event listener para el scroll cuando se monta el componente
    window.addEventListener("scroll", handleScroll);

    // Remover el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  return isVisible;
}

export default useScrollPosition;

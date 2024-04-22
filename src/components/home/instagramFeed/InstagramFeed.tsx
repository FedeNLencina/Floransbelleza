import React, { useEffect } from "react";

export function InstagramFeed() {
  useEffect(() => {
    // Función para eliminar el enlace con el texto específico
    const eliminarEnlace = () => {
      const enlaces = document.querySelectorAll(".instaLayout a"); // Seleccionar todos los enlaces dentro de .instaLayout
      enlaces.forEach((enlace) => {
        if (enlace.textContent.trim() === "Free Instagram Feed widget") {
          // Verificar si el texto del enlace coincide
          enlace.parentNode.removeChild(enlace); // Eliminar el enlace
        }
      });
    };

    // Llamar a la función para eliminar el enlace al montar el componente
    eliminarEnlace();

    // No necesitamos limpiar ningún listener aquí ya que esta función solo se ejecuta una vez
  }, []);

  return (
    <div
      className="elfsight-app-2a936f9d-ea35-4533-807a-a4d7280cd216 instaLayout"
      data-elfsight-app-lazy
    ></div>
  );
}

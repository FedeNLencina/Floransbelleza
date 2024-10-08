import nail from "../assets/images/icons/nail.svg";
import pedicure from "../assets/images/icons/pedicure.svg";
import lifting from "../assets/images/icons/pestanias2.svg";
import skinCare from "../assets/images/icons/skinCream.svg";
import depilation from "../assets/images/icons/depilacion.svg";
import { ServiceInfoHome } from "../types/ServiceInfoHome";
import { Icon } from "src/types/Icon";

const nailIcon: Icon = { path: nail };
const pedicureIcon: Icon = { path: pedicure };
const liftingIcon: Icon = { path: lifting };
const skinCareIcon: Icon = { path: skinCare };
const depilationIcon: Icon = { path: depilation };

export const serviceIcons: ServiceInfoHome[] = [
  {
    id: "1",
    title: "Manicure",
    icon: nailIcon,
    description:
      "Nuestros tratamientos de manicura estimulan el crecimiento de las uñas y suavizan la piel seca y sin brillo. Tambien ofrecemos los mejores diseños personalizados para que tus manos puedan lucirse en cualquier momento.",
  },
  {
    id: "2",
    title: "Pedicure",
    icon: pedicureIcon,
    description:
      "Los servicios de pedicura brindan una restauración completa para sus uñas con pulido adicional.",
  },
  {
    id: "3",
    title: "Lifting",
    icon: liftingIcon,
    description:
      "Ofrecemos el mejor servicio de lifting, para fortalecerlas y lucirlas de la mejor manera posible.",
  },
  {
    id: "4",
    title: "Skin Care",
    icon: skinCareIcon,
    description:
      "Utilizamos productos personalizados segun el diagnostico y tipo de cada piel, obteniendo una higiene y tonificacion de piel unica.",
  },
  {
    id: "5",
    title: "Depilacion",
    icon: depilationIcon,
    description:
      "Un proceso rapido y eficaz para obtener una piel suave y bella.",
  },
];

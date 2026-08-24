import { assets } from "@/lib/assets";

export type Project = {
  slug: string;
  name: string;
  cardLabel: "logo" | "wordmark" | "text";
  cardLogo?: string;
  cardHoverBg: string; // tailwind gradient class shown on card hover
  cardBlurb: string; // one-line summary shown on the mobile project card
  heroTagline: string;
  heroBg: string; // tailwind gradient class for the hero banner
  pageBg: string; // tailwind gradient class for the whole page
  navBg: string; // tailwind bg class for the nav bar on this page
  heroMockup: string;
  intro: string[];
  question: string;
  challenge: string[];
  objetivos: string[];
  insights: string[];
  hipotesis: string[];
  construyendoTitle: string;
  construyendo: string[];
  construyendoMockup: string;
  construyendoMockupLink?: string;
  conclusiones: string[];
};

export const projects: Project[] = [
  {
    slug: "cinemex",
    name: "Cinemex",
    cardLabel: "wordmark",
    cardLogo: assets.cinemexLogo,
    cardHoverBg: "bg-hero-cinemex",
    cardBlurb:
      "No se trata de colores, botones e imágenes bonitas sino de mejorar la percepción que tiene el público.",
    heroTagline: "El reto más grande hasta ahora.",
    heroBg: "bg-hero-cinemex",
    pageBg: "bg-case-cinemex",
    navBg: "bg-[#680021]",
    heroMockup: assets.homeMockupLaptop,
    intro: [
      "El proyecto Cinemex nace a partir de la necesidad del sitio de ser más amigable con sus usuarios y ofrecer una experiencia a la altura de las expectativas y estándares actuales del rubro, y de sus competidores.",
    ],
    question: "¿Existía una forma sencilla de destacar?",
    challenge: [
      "Este proyecto fue toda una experiencia al nivel de los grandes clásicos de Hollywood; está lleno de retos, preguntas que parecen no tener respuesta, dilemas y una búsqueda constante de aquellas cosas que necesitan los usuarios para sentirse bienvenidos en un sitio como este.",
      "Los usuarios reportaban que el sitio, así como la propia marca, carecía de una identidad significativa en comparación a su competencia directa; no ofrecía la solidez ni la comodidad que sí se encontraba en otros sitios.",
      "No solo en el apartado visual, sino por la propia manera de comprar productos y de explorar las diferentes ofertas que tiene la empresa.",
    ],
    objetivos: [
      "Mejorar la percepción que tienen los usuarios del sitio en general",
      "Mejorar el funcionamiento básico del flujo principal con un trabajo adicional respecto al uso de filtros, botones, etc.",
      "Idear una mejor distribución del contenido a partir de la Arquitectura de la Información",
    ],
    insights: [
      "Los usuarios perciben al sitio como confuso, \"revuelto\", desagradable a la vista",
      "A los usuarios les parece difícil de seguir",
      "Algunos usuarios mencionan que el sitio ya funciona como debería pero que le falta ser más fácil de entender y más accesible como otros sitios existentes",
    ],
    hipotesis: [
      "Retrabajar la distribución y presentación del contenido, ya que esto confunde al usuario. Esto ayuda a que la AI sea más clara para el usuario y que este conecte mejor con el sitio.",
      "Esto puede ayudar a aumentar la tasa de retención. Puede mejorar la percepción del público incluso frente a la competencia.",
    ],
    construyendoTitle: "Construyendo el Producto Final:",
    construyendo: [
      "Después de realizar las auditorías correspondientes, realizar entrevistas y realizar las pruebas de usabilidad se logró comprobar la hipótesis inicial.",
      "Para que el cambio fuera efectivo había que rediseñar la Arquitectura de la Información para mostrar el contenido de manera más intuitiva y coherente, había que cambiar la forma visual en que la información se presenta, y había que refinar un par de funciones dentro del flujo principal (como el funcionamiento de los filtros).",
      "De este modo se logró diseñar una experiencia familiar, intuitiva que no cambia en esencia pero sí lo hace en ejecución.",
      "Una experiencia que, para conocer en profundidad, pueden dar clic en la PC para acceder al prototipo y a la presentación completa del proyecto.",
    ],
    construyendoMockup: assets.cinemexMidMockup,
    construyendoMockupLink:
      "https://www.figma.com/proto/HhFjLj7UuI4fHd0Y4OIIXR/Proyecto-CINEMEX?node-id=475-55263&t=PP0ybqMl2qAZX9BJ-0&scaling=min-zoom&content-scaling=fixed&page-id=382%3A3&starting-point-node-id=475%3A55263",
    conclusiones: [
      "Este rediseño logró ser efectivo en su mayoría, resultando en una experiencia más amena, condensada, y simple para los usuarios sin dejar de lado su identidad ni la efectividad que debería tener un sitio web de este estilo.",
      "En este proyecto logré generar una conexión más profunda con este medio que tanto aprecio y pude aprender muchas cosas sobre mi propio rubro, sobre los usuarios, incluso sobre mi propia persona, lo que me da oportunidad de crecer y mejorar en todos los aspectos, principalmente en este que es mi trabajo.",
    ],
  },
  {
    slug: "uber-eats",
    name: "Uber Eats",
    cardLabel: "wordmark",
    cardHoverBg: "bg-hero-uber-eats",
    cardBlurb: "Una propuesta que equilibra lo que el usuario busca y lo que la marca necesita.",
    heroTagline: "Simple pero significativo.",
    heroBg: "bg-hero-uber-eats",
    pageBg: "bg-case-uber-eats",
    navBg: "bg-[#004638]",
    heroMockup: assets.homeMockupPhone,
    intro: [
      "El rediseño de la app Uber Eats era necesario para que los usuarios tuvieran una experiencia más completa, ya que estos últimos necesitan tener acceso a ciertos apartados de la plataforma para aquellos ocasiones en que el recorrido tiene puntos de fricción o directamente no tiene una conclusión satisfactoria.",
    ],
    question: "¿Dónde se supone que deben estar estas cosas?",
    challenge: [
      "El reto para esta ocasión fue especialmente complejo, no por tener que entregar una pizza en menos de 30 minutos, sino porque nos encontrábamos en una plataforma funcional pero con herramientas para los usuarios que no estaban a su alcance.",
      "Muchos usuarios expresaban su molestia porque no lograban encontrar apartados como los reembolsos, o atención al cliente más eficiente y cercana; ya que la app ya cuenta con un chatbot para esto, sin embargo, para llegar a el se tenía que pasar por muchas cosas antes.",
      "Esta vez la respuesta no parecía ser tan simple, ya que el núcleo del problema principal eran aspectos relacionados con los repartidores y la entrega de productos, lo que deriva en la necesidad de buscar una manera de conseguir un reembolso o tener acceso a soporte.",
      "La clave en esta situación fue enfocarse en lo que sí dependía de la propia plataforma, y lograr que dichas herramientas estén al alcance del usuario. El verdadero desafío fue incluirlas en una Home Page que ya estaba llena de muchas cosas.",
    ],
    objetivos: [
      "Lograr un rediseño que cumpliera las expectativas de los usuarios",
      "Crear la manera más sencilla y efectiva de mostrar las herramientas que necesitan",
      "Esclarecer la información que da la app al usuario",
    ],
    insights: [
      "No hay fácil acceso a apartados funcionales para atención al cliente",
      "El chatbot es deficiente",
      "Los usuarios reportan que la app a veces se siente poco clara",
    ],
    hipotesis: [
      "La Encontrabilidad de los contenidos el factor principal que dificulta la experiencia de los usuarios, la oportunidad de encontrar la ayuda y atención que el usuario necesita para resolver algunas dudas o contactar con el personal de atención al cliente.",
      "Lo que genera frustración en la mayoría de los usuarios de la app.",
    ],
    construyendoTitle: "Construyendo el Producto Final:",
    construyendo: [
      "Finalmente, tras realizar las investigaciones correspondientes para conocer mejor las quejas y los pain points principales se llegó a una solución efectiva: un rediseño simple pero efectivo.",
      "Aunque ya se tenía esa meta en mente, lo complicado fue idear cómo se lograría. Por lo tanto, se tomó la decisión de dejar el contenido intacto pero colocando todos los apartados útiles para el usuario a su alcance desde el inicio. Y para complementar, solo se cambió la forma en que se muestran los productos en el inicio.",
      "Para conocer más de esta intrigante solución solo hay que dar click en el celular para ver el prototipo y la presentación completa.",
    ],
    construyendoMockup: assets.uberEatsMidMockup,
    construyendoMockupLink:
      "https://www.figma.com/proto/UIhyhyTcBAMx7b8q2u2cRY/Proyecto-U.E?node-id=2064-8&t=PP0ybqMl2qAZX9BJ-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    conclusiones: [
      "Este proyecto resultó ser un reto especialmente por la complejidad del cómo resolver el problema principal, ya que existían variables que podían resultar en una solución, sin embargo, es importante elegir la que resulte en un proyecto que use la menor cantidad de tiempo, recursos y energía posible para así generar un mayor impacto rápidamente para hacer que la marca logre recuperarse.",
      "En este proyecto aprendí cómo idear preguntas más profundas y con distintos ángulos, así como darle mayor importancia a los pequeños detalles de las entrevistas para crear soluciones más completas.",
    ],
  },
  {
    slug: "galactic-coffee",
    name: "Galactic Coffee",
    cardLabel: "wordmark",
    cardLogo: assets.galacticCoffeeIcon,
    cardHoverBg: "bg-hero-galactic-coffee",
    cardBlurb:
      "Una cafetería que busca abrirse camino entre una galaxia llena de estrellas y competidores.",
    heroTagline: "Un poyecto con mucho corazón.",
    heroBg: "bg-hero-galactic-coffee",
    pageBg: "bg-case-galactic-coffee",
    navBg: "bg-[#3c006a]",
    heroMockup: assets.homeMockupCup,
    intro: [
      "Galactic Coffee es una cafetería muy especial que busca compartir su singularidad con sus clientes a través del servicio en su sitio web.",
      "El sitio se encuentra con la dificultad de estar en un mercado muy competido y ocupado por otras cafeterías más conocidas, sin embargo, su mayor fortaleza podría encontrarse solamente en su originalidad, sino en algo más simple: un sitio web más eficiente y legible para sus clientes.",
      "A diferencia de los sitios de sus competidores que no cuentan con la mejor reputación.",
    ],
    question:
      "La nave funciona a la perfección, pero tenemos las coordenadas incorrectas.",
    challenge: [
      "Quizá la identidad de la marca sea memorable pero si sus usuarios no logran entender lo que leen y lo que ven, el sitio se pierde como una nave vagando por el cosmos entre un océano de estrellas. De modo que teníamos que lograr ese cometido respetando la personalidad de la marca.",
      "Esta vez nuestro objetivo fue renovar el Wording y el texto en general del sitio para que la información quede clara para los distintos usuarios que la marca busca atraer de modo que no se pierda o exagere la voz ni el tono de la marca.",
    ],
    objetivos: [
      "Lograr un lenguaje fluido, entendible e inclusivo para todos los usuarios",
      "Crear la manera de que las descripciones de productos sean claras",
      "Lograr conectar con los usuarios a través de términos coloquiales, originales y naturales para llamar su atención",
    ],
    insights: [
      "Los términos usados pueden llegar a sentirse fuera de lugar",
      "Las descripciones de productos resultaban extrañas",
      "El sitio en general resultaba tedioso para alguien con menor tiempo disponible para leer",
    ],
    hipotesis: [
      "El Wording de la página no es del todo claro y puede mejorarse para conectar con el amplio rango de usuarios que la usan y describir las acciones y los productos de manera eficiente.",
    ],
    construyendoTitle: "Construyendo el Producto Final:",
    construyendo: [
      "Una vez que se conoce en profundidad la identidad y el público objetivo de la firma, y que se definen la voz y los tonos de esta, es que ya es posible crear mensajes y descripciones más claras para sus usuarios.",
      "Cabe destacar que así como la marca ya es memorable, lo es también su Wording. ¿El resultado? Para conocer esta gran historia hay que dar click en la laptop.",
    ],
    construyendoMockup: assets.galacticCoffeeMidMockup,
    construyendoMockupLink:
      "https://www.figma.com/proto/t1ssHbkgEIZmtb1rFpx2TG/Proyecto-G.C?node-id=1987-2&t=PP0ybqMl2qAZX9BJ-0&scaling=scale-down&content-scaling=fixed&page-id=2%3A3",
    conclusiones: [
      "Conocer a los usuarios no solo es la clave para saber cómo hablar con ellos sino también para saber qué decir exactamente. De modo que así se logra obtener un lenguaje más claro, eficiente e inclusivo para los distintos usuarios que usarán el sitio y que no se sientan dejados de lado por no comprender realmente lo que el sitio ofrece.",
      "Este fue un proyecto muy especial por la naturaleza del desafío y por el hecho de que esto nos ayuda a aprender cómo comunicarnos de manera más efectiva para darnos a entender y saber cuando es el momento correcto para decir lo que debemos decir. Sin duda hay mucho corazón en este proyecto.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

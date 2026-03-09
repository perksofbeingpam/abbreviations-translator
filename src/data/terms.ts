export type Language = 'en' | 'es';

export type Category = 'AI' | 'Dev' | 'Hardware' | 'Concept' | 'Web' | 'Business';

export interface Term {
  id: string;
  acronym: string;
  en: {
    title: string;
    description: string;
    example: string;
  };
  es: {
    title: string;
    description: string;
    example: string;
  };
  category: Category;
}

export const terms: Term[] = [
  // AI & ML
  {
    id: 'llm',
    acronym: 'LLM',
    category: 'AI',
    en: {
      title: 'Large Language Model',
      description: 'A type of artificial intelligence algorithm that uses deep learning techniques and massively large data sets to understand, summarize, generate and predict new content.',
      example: 'ChatGPT and Claude are examples of LLMs.'
    },
    es: {
      title: 'Modelo de Lenguaje Grande',
      description: 'Un tipo de algoritmo de inteligencia artificial que utiliza técnicas de aprendizaje profundo y conjuntos de datos masivos para comprender, resumir, generar y predecir contenido nuevo.',
      example: 'ChatGPT y Claude son ejemplos de LLMs.'
    }
  },
  {
    id: 'rag',
    acronym: 'RAG',
    category: 'AI',
    en: {
      title: 'Retrieval-Augmented Generation',
      description: 'An AI framework that improves the quality of LLM-generated responses by grounding the model on external sources of knowledge to supplement the LLM\'s internal representation of information.',
      example: 'Using RAG, the AI can read your company\'s private documents before answering a question.'
    },
    es: {
      title: 'Generación Aumentada por Recuperación',
      description: 'Un marco de IA que mejora la calidad de las respuestas generadas por un LLM al basar el modelo en fuentes externas de conocimiento para complementar su información interna.',
      example: 'Usando RAG, la IA puede leer los documentos privados de tu empresa antes de responder una pregunta.'
    }
  },
  {
    id: 'vlm',
    acronym: 'VLM',
    category: 'AI',
    en: {
      title: 'Vision-Language Model',
      description: 'An AI model capable of understanding and processing both text and images simultaneously, allowing it to describe pictures, answer questions about visual content, or generate images from text.',
      example: 'You can upload a photo of your fridge to a VLM and ask it what recipes you can make.'
    },
    es: {
      title: 'Modelo de Visión-Lenguaje',
      description: 'Un modelo de IA capaz de entender y procesar tanto texto como imágenes simultáneamente, permitiéndole describir fotos, responder preguntas sobre contenido visual o generar imágenes a partir de texto.',
      example: 'Puedes subir una foto de tu refrigerador a un VLM y preguntarle qué recetas puedes preparar.'
    }
  },
  {
    id: 'moe',
    acronym: 'MoE',
    category: 'AI',
    en: {
      title: 'Mixture of Experts',
      description: 'A machine learning technique where multiple specialized sub-networks (experts) are used, and a "router" decides which expert should handle each specific part of a task, making the model faster and more efficient.',
      example: 'Instead of one giant brain doing everything, MoE uses a math expert for math questions and a coding expert for code.'
    },
    es: {
      title: 'Mezcla de Expertos',
      description: 'Una técnica de aprendizaje automático donde se utilizan múltiples subredes especializadas (expertos), y un "enrutador" decide qué experto debe manejar cada parte específica de una tarea, haciendo el modelo más rápido y eficiente.',
      example: 'En lugar de un cerebro gigante haciendo todo, MoE usa un experto en matemáticas para preguntas matemáticas y uno en código para programar.'
    }
  },
  {
    id: 'rlhf',
    acronym: 'RLHF',
    category: 'AI',
    en: {
      title: 'Reinforcement Learning from Human Feedback',
      description: 'A machine learning technique that trains AI models to align with human values and preferences by using human feedback to reward desired behaviors.',
      example: 'RLHF is what makes modern chatbots polite and helpful instead of just predicting random text.'
    },
    es: {
      title: 'Aprendizaje por Refuerzo a partir de Retroalimentación Humana',
      description: 'Una técnica de aprendizaje automático que entrena modelos de IA para alinearse con los valores y preferencias humanas utilizando retroalimentación humana para recompensar los comportamientos deseados.',
      example: 'RLHF es lo que hace que los chatbots modernos sean educados y útiles en lugar de solo predecir texto aleatorio.'
    }
  },
  {
    id: 'lora',
    acronym: 'LoRA',
    category: 'AI',
    en: {
      title: 'Low-Rank Adaptation',
      description: 'A training method that speeds up the fine-tuning of large models while consuming less memory, by adding a small number of trainable parameters to the model.',
      example: 'Instead of retraining a whole image model, you can use a LoRA to teach it just how to draw your specific face.'
    },
    es: {
      title: 'Adaptación de Bajo Rango',
      description: 'Un método de entrenamiento que acelera el ajuste fino de modelos grandes mientras consume menos memoria, agregando un pequeño número de parámetros entrenables al modelo.',
      example: 'En lugar de reentrenar todo un modelo de imágenes, puedes usar un LoRA para enseñarle solo cómo dibujar tu rostro específico.'
    }
  },
  {
    id: 'nlp',
    acronym: 'NLP',
    category: 'AI',
    en: {
      title: 'Natural Language Processing',
      description: 'A branch of artificial intelligence that helps computers understand, interpret and manipulate human language.',
      example: 'NLP is the technology behind translation apps, spam filters, and voice assistants.'
    },
    es: {
      title: 'Procesamiento de Lenguaje Natural',
      description: 'Una rama de la inteligencia artificial que ayuda a las computadoras a comprender, interpretar y manipular el lenguaje humano.',
      example: 'El NLP es la tecnología detrás de las aplicaciones de traducción, filtros de spam y asistentes de voz.'
    }
  },
  {
    id: 'tts',
    acronym: 'TTS',
    category: 'AI',
    en: {
      title: 'Text-to-Speech',
      description: 'A type of assistive technology that reads digital text aloud. It takes words on a computer or other digital device and converts them into audio.',
      example: 'When Siri or Alexa reads your text messages out loud, they are using TTS.'
    },
    es: {
      title: 'Texto a Voz',
      description: 'Un tipo de tecnología de asistencia que lee texto digital en voz alta. Toma palabras en una computadora u otro dispositivo digital y las convierte en audio.',
      example: 'Cuando Siri o Alexa leen tus mensajes de texto en voz alta, están usando TTS.'
    }
  },
  {
    id: 'stt',
    acronym: 'STT',
    category: 'AI',
    en: {
      title: 'Speech-to-Text',
      description: 'Also known as Automatic Speech Recognition (ASR), it is the process of converting spoken language into written text.',
      example: 'Voice typing on your phone keyboard uses STT technology.'
    },
    es: {
      title: 'Voz a Texto',
      description: 'También conocido como Reconocimiento Automático de Voz (ASR), es el proceso de convertir el lenguaje hablado en texto escrito.',
      example: 'El dictado por voz en el teclado de tu teléfono usa tecnología STT.'
    }
  },
  {
    id: 'gan',
    acronym: 'GAN',
    category: 'AI',
    en: {
      title: 'Generative Adversarial Network',
      description: 'A class of machine learning frameworks where two neural networks contest with each other in a game. One generates fake data, and the other tries to detect if it\'s real or fake, improving both over time.',
      example: 'GANs were famously used to create highly realistic "deepfake" images and videos.'
    },
    es: {
      title: 'Red Generativa Antagónica',
      description: 'Una clase de marcos de aprendizaje automático donde dos redes neuronales compiten entre sí. Una genera datos falsos y la otra intenta detectar si son reales o falsos, mejorando ambas con el tiempo.',
      example: 'Las GAN se usaron famosamente para crear imágenes y videos "deepfake" muy realistas.'
    }
  },
  {
    id: 'agi',
    acronym: 'AGI',
    category: 'Concept',
    en: {
      title: 'Artificial General Intelligence',
      description: 'A theoretical form of AI that possesses the ability to understand, learn, and apply knowledge across a wide range of tasks at a level equal to or beyond human capabilities.',
      example: 'AGI doesn\'t exist yet, but it\'s the ultimate goal of many AI research labs.'
    },
    es: {
      title: 'Inteligencia Artificial General',
      description: 'Una forma teórica de IA que posee la capacidad de comprender, aprender y aplicar conocimientos en una amplia gama de tareas a un nivel igual o superior a las capacidades humanas.',
      example: 'La AGI aún no existe, pero es el objetivo final de muchos laboratorios de investigación de IA.'
    }
  },

  // Development
  {
    id: 'mcp',
    acronym: 'MCP',
    category: 'Dev',
    en: {
      title: 'Model Context Protocol',
      description: 'An open standard that enables developers to build secure, two-way connections between their data sources and AI-powered tools. It standardizes how AI models access external context.',
      example: 'MCP allows an AI assistant to securely read your local files or query a database.'
    },
    es: {
      title: 'Protocolo de Contexto de Modelo',
      description: 'Un estándar abierto que permite a los desarrolladores construir conexiones seguras y bidireccionales entre sus fuentes de datos y herramientas de IA. Estandariza cómo los modelos de IA acceden al contexto externo.',
      example: 'MCP permite que un asistente de IA lea de forma segura tus archivos locales o consulte una base de datos.'
    }
  },
  {
    id: 'api',
    acronym: 'API',
    category: 'Dev',
    en: {
      title: 'Application Programming Interface',
      description: 'A set of rules and protocols that allows different software applications to communicate with each other.',
      example: 'A weather app uses an API to get current temperature data from a meteorological service.'
    },
    es: {
      title: 'Interfaz de Programación de Aplicaciones',
      description: 'Un conjunto de reglas y protocolos que permite que diferentes aplicaciones de software se comuniquen entre sí.',
      example: 'Una aplicación del clima usa una API para obtener datos de temperatura de un servicio meteorológico.'
    }
  },
  {
    id: 'cli',
    acronym: 'CLI',
    category: 'Dev',
    en: {
      title: 'Command Line Interface',
      description: 'A text-based user interface used to run programs, manage computer files and interact with the computer.',
      example: 'Developers use the CLI to type commands like "npm install" instead of clicking buttons.'
    },
    es: {
      title: 'Interfaz de Línea de Comandos',
      description: 'Una interfaz de usuario basada en texto utilizada para ejecutar programas, administrar archivos de computadora e interactuar con la computadora.',
      example: 'Los desarrolladores usan la CLI para escribir comandos como "npm install" en lugar de hacer clic en botones.'
    }
  },
  {
    id: 'sdk',
    acronym: 'SDK',
    category: 'Dev',
    en: {
      title: 'Software Development Kit',
      description: 'A collection of software development tools in one installable package. They facilitate the creation of applications by having compiler, debugger and sometimes a software framework.',
      example: 'To build an iOS app, you need to download the iOS SDK from Apple.'
    },
    es: {
      title: 'Kit de Desarrollo de Software',
      description: 'Una colección de herramientas de desarrollo de software en un paquete instalable. Facilitan la creación de aplicaciones al tener compilador, depurador y, a veces, un marco de software.',
      example: 'Para crear una aplicación para iOS, debes descargar el SDK de iOS de Apple.'
    }
  },
  {
    id: 'ide',
    acronym: 'IDE',
    category: 'Dev',
    en: {
      title: 'Integrated Development Environment',
      description: 'A software application that provides comprehensive facilities to computer programmers for software development, typically consisting of a source code editor, build automation tools, and a debugger.',
      example: 'VS Code and IntelliJ are popular IDEs used by developers.'
    },
    es: {
      title: 'Entorno de Desarrollo Integrado',
      description: 'Una aplicación de software que proporciona instalaciones completas a los programadores para el desarrollo de software, típicamente consistiendo en un editor de código, herramientas de automatización y un depurador.',
      example: 'VS Code e IntelliJ son IDEs populares usados por los desarrolladores.'
    }
  },
  {
    id: 'pr',
    acronym: 'PR',
    category: 'Dev',
    en: {
      title: 'Pull Request',
      description: 'A method of submitting contributions to an open development project. It occurs when a developer asks for changes committed to an external repository to be considered for inclusion in a project\'s main repository.',
      example: 'I fixed the bug and opened a PR for the team to review my code.'
    },
    es: {
      title: 'Petición de Extracción (Pull Request)',
      description: 'Un método para enviar contribuciones a un proyecto de desarrollo. Ocurre cuando un desarrollador pide que los cambios realizados en un repositorio externo se consideren para su inclusión en el repositorio principal.',
      example: 'Arreglé el error y abrí un PR para que el equipo revise mi código.'
    }
  },
  {
    id: 'cicd',
    acronym: 'CI/CD',
    category: 'Dev',
    en: {
      title: 'Continuous Integration / Continuous Deployment',
      description: 'A method to frequently deliver apps to customers by introducing automation into the stages of app development. It automates building, testing, and deployment of applications.',
      example: 'Thanks to our CI/CD pipeline, every time we merge code, it automatically deploys to the live website.'
    },
    es: {
      title: 'Integración Continua / Despliegue Continuo',
      description: 'Un método para entregar aplicaciones frecuentemente a los clientes introduciendo automatización en las etapas de desarrollo. Automatiza la construcción, prueba y despliegue de aplicaciones.',
      example: 'Gracias a nuestro pipeline CI/CD, cada vez que fusionamos código, se despliega automáticamente en el sitio web en vivo.'
    }
  },
  {
    id: 'json',
    acronym: 'JSON',
    category: 'Dev',
    en: {
      title: 'JavaScript Object Notation',
      description: 'A lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is heavily used in web APIs.',
      example: 'The server sent the user data back formatted as JSON.'
    },
    es: {
      title: 'Notación de Objetos de JavaScript',
      description: 'Un formato ligero de intercambio de datos que es fácil de leer y escribir para los humanos y fácil de analizar y generar para las máquinas. Se usa mucho en las APIs web.',
      example: 'El servidor envió los datos del usuario formateados como JSON.'
    }
  },
  {
    id: 'jwt',
    acronym: 'JWT',
    category: 'Dev',
    en: {
      title: 'JSON Web Token',
      description: 'An open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. Often used for authentication.',
      example: 'After logging in, the server gives you a JWT to prove who you are on subsequent requests.'
    },
    es: {
      title: 'Token Web JSON',
      description: 'Un estándar abierto que define una forma compacta y autónoma de transmitir información de forma segura entre las partes como un objeto JSON. A menudo se usa para autenticación.',
      example: 'Después de iniciar sesión, el servidor te da un JWT para demostrar quién eres en solicitudes posteriores.'
    }
  },

  // Web
  {
    id: 'html',
    acronym: 'HTML',
    category: 'Web',
    en: {
      title: 'HyperText Markup Language',
      description: 'The standard markup language for documents designed to be displayed in a web browser. It defines the structure of a webpage.',
      example: 'HTML is the skeleton of a website, while CSS is the skin.'
    },
    es: {
      title: 'Lenguaje de Marcado de Hipertexto',
      description: 'El lenguaje de marcado estándar para documentos diseñados para mostrarse en un navegador web. Define la estructura de una página web.',
      example: 'HTML es el esqueleto de un sitio web, mientras que CSS es la piel.'
    }
  },
  {
    id: 'css',
    acronym: 'CSS',
    category: 'Web',
    en: {
      title: 'Cascading Style Sheets',
      description: 'A style sheet language used for describing the presentation of a document written in HTML. It controls colors, layouts, and fonts.',
      example: 'We use CSS to make the buttons blue and round.'
    },
    es: {
      title: 'Hojas de Estilo en Cascada',
      description: 'Un lenguaje de hoja de estilo utilizado para describir la presentación de un documento escrito en HTML. Controla colores, diseños y fuentes.',
      example: 'Usamos CSS para hacer que los botones sean azules y redondos.'
    }
  },
  {
    id: 'dom',
    acronym: 'DOM',
    category: 'Web',
    en: {
      title: 'Document Object Model',
      description: 'A programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.',
      example: 'JavaScript uses the DOM to dynamically add a new comment to the page without reloading.'
    },
    es: {
      title: 'Modelo de Objetos del Documento',
      description: 'Una interfaz de programación para documentos web. Representa la página para que los programas puedan cambiar la estructura, el estilo y el contenido del documento.',
      example: 'JavaScript usa el DOM para agregar dinámicamente un nuevo comentario a la página sin recargar.'
    }
  },
  {
    id: 'seo',
    acronym: 'SEO',
    category: 'Web',
    en: {
      title: 'Search Engine Optimization',
      description: 'The process of improving the quality and quantity of website traffic to a website or a web page from search engines.',
      example: 'Good SEO ensures your website appears on the first page of Google results.'
    },
    es: {
      title: 'Optimización para Motores de Búsqueda',
      description: 'El proceso de mejorar la calidad y cantidad del tráfico del sitio web a un sitio web o una página web desde los motores de búsqueda.',
      example: 'Un buen SEO asegura que tu sitio web aparezca en la primera página de resultados de Google.'
    }
  },
  {
    id: 'spa',
    acronym: 'SPA',
    category: 'Web',
    en: {
      title: 'Single-Page Application',
      description: 'A web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages.',
      example: 'Gmail is a SPA; clicking an email loads the content instantly without refreshing the whole page.'
    },
    es: {
      title: 'Aplicación de Página Única',
      description: 'Una aplicación web o sitio web que interactúa con el usuario reescribiendo dinámicamente la página web actual con nuevos datos del servidor web, en lugar del método predeterminado de cargar páginas nuevas enteras.',
      example: 'Gmail es una SPA; hacer clic en un correo carga el contenido al instante sin recargar toda la página.'
    }
  },

  // Hardware
  {
    id: 'gpu',
    acronym: 'GPU',
    category: 'Hardware',
    en: {
      title: 'Graphics Processing Unit',
      description: 'A specialized electronic circuit designed to rapidly manipulate and alter memory to accelerate the creation of images. They are highly parallel, making them perfect for training AI.',
      example: 'Nvidia GPUs are the primary hardware used to train massive AI models.'
    },
    es: {
      title: 'Unidad de Procesamiento Gráfico',
      description: 'Un circuito electrónico especializado diseñado para manipular y alterar rápidamente la memoria para acelerar la creación de imágenes. Son altamente paralelos, lo que los hace perfectos para entrenar IA.',
      example: 'Las GPUs de Nvidia son el hardware principal utilizado para entrenar modelos masivos de IA.'
    }
  },
  {
    id: 'tpu',
    acronym: 'TPU',
    category: 'Hardware',
    en: {
      title: 'Tensor Processing Unit',
      description: 'An AI accelerator application-specific integrated circuit (ASIC) developed by Google specifically for neural network machine learning.',
      example: 'Google uses TPUs in their data centers to make their AI services run incredibly fast.'
    },
    es: {
      title: 'Unidad de Procesamiento Tensorial',
      description: 'Un circuito integrado de aplicación específica (ASIC) acelerador de IA desarrollado por Google específicamente para el aprendizaje automático de redes neuronales.',
      example: 'Google usa TPUs en sus centros de datos para hacer que sus servicios de IA se ejecuten increíblemente rápido.'
    }
  },
  {
    id: 'npu',
    acronym: 'NPU',
    category: 'Hardware',
    en: {
      title: 'Neural Processing Unit',
      description: 'A specialized circuit that implements all the necessary control and arithmetic logic necessary to execute machine learning algorithms, typically used in mobile phones and modern laptops.',
      example: 'The NPU in your phone allows it to blur the background in video calls without draining the battery.'
    },
    es: {
      title: 'Unidad de Procesamiento Neuronal',
      description: 'Un circuito especializado que implementa toda la lógica de control y aritmética necesaria para ejecutar algoritmos de aprendizaje automático, típicamente usado en teléfonos móviles y laptops modernas.',
      example: 'La NPU de tu teléfono le permite desenfocar el fondo en videollamadas sin agotar la batería.'
    }
  },

  // Business / Product
  {
    id: 'saas',
    acronym: 'SaaS',
    category: 'Business',
    en: {
      title: 'Software as a Service',
      description: 'A software licensing and delivery model in which software is licensed on a subscription basis and is centrally hosted.',
      example: 'Netflix and Google Workspace are examples of SaaS products.'
    },
    es: {
      title: 'Software como Servicio',
      description: 'Un modelo de licencia y entrega de software en el que el software se licencia mediante suscripción y se aloja de forma centralizada.',
      example: 'Netflix y Google Workspace son ejemplos de productos SaaS.'
    }
  },
  {
    id: 'mvp',
    acronym: 'MVP',
    category: 'Business',
    en: {
      title: 'Minimum Viable Product',
      description: 'A version of a product with just enough features to be usable by early customers who can then provide feedback for future product development.',
      example: 'Before building the full app, we launched an MVP to see if people actually wanted the service.'
    },
    es: {
      title: 'Producto Mínimo Viable',
      description: 'Una versión de un producto con las características justas para ser utilizable por los primeros clientes, quienes luego pueden proporcionar comentarios para el desarrollo futuro del producto.',
      example: 'Antes de construir la aplicación completa, lanzamos un MVP para ver si la gente realmente quería el servicio.'
    }
  },
  {
    id: 'kpi',
    acronym: 'KPI',
    category: 'Business',
    en: {
      title: 'Key Performance Indicator',
      description: 'A measurable value that demonstrates how effectively a company is achieving key business objectives.',
      example: 'Our main KPI for this quarter is to increase daily active users by 20%.'
    },
    es: {
      title: 'Indicador Clave de Rendimiento',
      description: 'Un valor medible que demuestra la eficacia con la que una empresa está logrando los objetivos comerciales clave.',
      example: 'Nuestro KPI principal para este trimestre es aumentar los usuarios activos diarios en un 20%.'
    }
  },
  {
    id: 'oss',
    acronym: 'OSS',
    category: 'Business',
    en: {
      title: 'Open Source Software',
      description: 'Computer software that is released under a license in which the copyright holder grants users the rights to use, study, change, and distribute the software and its source code to anyone and for any purpose.',
      example: 'Linux and React are famous examples of OSS.'
    },
    es: {
      title: 'Software de Código Abierto',
      description: 'Software informático que se publica bajo una licencia en la que el titular de los derechos de autor otorga a los usuarios los derechos para usar, estudiar, cambiar y distribuir el software y su código fuente a cualquier persona y para cualquier propósito.',
      example: 'Linux y React son ejemplos famosos de OSS.'
    }
  },
  {
    id: 'ui',
    acronym: 'UI',
    category: 'Concept',
    en: {
      title: 'User Interface',
      description: 'The space where interactions between humans and machines occur. It includes the screens, buttons, toggles, icons, and other visual elements that you interact with when using a website or app.',
      example: 'The app has a beautiful UI with smooth animations and clear buttons.'
    },
    es: {
      title: 'Interfaz de Usuario',
      description: 'El espacio donde ocurren las interacciones entre humanos y máquinas. Incluye las pantallas, botones, interruptores, íconos y otros elementos visuales con los que interactúas al usar un sitio web o aplicación.',
      example: 'La aplicación tiene una hermosa UI con animaciones fluidas y botones claros.'
    }
  },
  {
    id: 'ux',
    acronym: 'UX',
    category: 'Concept',
    en: {
      title: 'User Experience',
      description: 'How a user interacts with and experiences a product, system or service. It includes a person\'s perceptions of utility, ease of use, and efficiency.',
      example: 'The UX of this checkout process is terrible; it takes 10 clicks just to buy one item.'
    },
    es: {
      title: 'Experiencia de Usuario',
      description: 'Cómo un usuario interactúa y experimenta un producto, sistema o servicio. Incluye las percepciones de una persona sobre la utilidad, facilidad de uso y eficiencia.',
      example: 'La UX de este proceso de pago es terrible; toma 10 clics solo para comprar un artículo.'
    }
  }
];

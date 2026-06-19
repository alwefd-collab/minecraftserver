// Base de datos de criaturas: cada objeto describe un mob del bestiario

const searchInput = document.getElementById("search")

const creatures = [
  // --- Creeper ---
  {
    id: 'creeper',
    name: 'Creeper',
    categories: ['hostiles'],
    iconClass: 'creeper-icon',
    image: 'Images/Creeper.png',
    sceneImage: 'Images/creeper_s.jpeg',
    subtitle: 'La criatura explosiva',
    description: 'El Creeper es una de las criaturas más icónicas de Minecraft. Se acerca sigilosamente a los jugadores y explota al estar cerca, causando daño considerable y destruyendo bloques cercanos.',
    type: 'Hostil',
    typeClass: 'hostile',
    health: 6,
    damage: 'Alto',
    habitat: 'Superficies, cuevas',
    drop: { icon: '💣', name: 'Pólvora' },
    behaviors: [
      { icon: 'creeper-icon', type: 'css', text: 'Se acerca al jugador sin hacer ruido.' },
      { icon: '✨', type: 'emoji', text: 'Parpadea antes de explotar.' },
      { icon: '💥', type: 'emoji', text: 'Su explosión puede destruir bloques y causar mucho daño.' },
      { icon: '💡', type: 'emoji', text: 'Los gatos y ocelotes huyen de los creepers.' }
    ],
    habitatInfo: [
      { icon: '🌲', text: 'Aparece en la mayoría de biomas de superficie.' },
      { icon: '🕳️', text: 'Frecuente en cuevas y minas abandonadas.' },
      { icon: '🌙', text: 'Spawnea con poca luz, igual que otros mobs hostiles.' }
    ],
    trivia: [
      { icon: '🎵', text: 'Su sonido de siseo es uno de los más reconocibles del juego.' },
      { icon: '🎨', text: 'Fue creado por un error al intentar modelar un cerdo.' },
      { icon: '🐱', text: 'Los gatos lo espantan, útil para proteger tu base.' }
    ],
    quote: '"Así que ten cuidado donde pisas... Podría ser lo último que escuches."',
    sceneColor: '#5D8A3C'
  },
  // --- Zombi ---
  {
    id: 'zombie',
    name: 'Zombi',
    categories: ['hostiles'],
    iconClass: 'zombie-icon',
    image: 'Images/zombie.png',
    sceneImage: 'Images/zombie_s.jpeg',
    subtitle: 'El muerto viviente',
    description: 'Los zombis son mobs hostiles que aparecen de noche y en lugares oscuros. Atacan a los jugadores y a los aldeanos, y pueden romper puertas de madera en dificultad difícil.',
    type: 'Hostil',
    typeClass: 'hostile',
    health: 5,
    damage: 'Medio',
    habitat: 'Superficies, aldeas',
    drop: { icon: '🥩', name: 'Carne podrida' },
    behaviors: [
      { icon: '🧟', type: 'emoji', text: 'Persigue al jugador de forma constante.' },
      { icon: '🚪', type: 'emoji', text: 'Puede romper puertas de madera en difícil.' },
      { icon: '☀️', type: 'emoji', text: 'Se quema bajo la luz del sol.' },
      { icon: '👶', type: 'emoji', text: 'Los zombi bebé son más rápidos que los adultos.' }
    ],
    habitatInfo: [
      { icon: '🌙', text: 'Spawnea de noche en superficies con poca luz.' },
      { icon: '🏘️', text: 'Puede aparecer en aldeas durante invasiones.' },
      { icon: '🕳️', text: 'También se encuentra en cuevas y estructuras.' }
    ],
    trivia: [
      { icon: '👕', text: 'Puede aparecer con armadura o herramientas equipadas.' },
      { icon: '🧑‍🌾', text: 'Si mata a un aldeano, puede convertirlo en zombi aldeano.' },
      { icon: '🐔', text: 'Los zombi bebé pueden montar pollos.' }
    ],
    quote: '"No subestimes su lentitud... siempre encuentran el camino."',
    sceneColor: '#4a7c59'
  },
  // --- Esqueleto ---
  {
    id: 'skeleton',
    name: 'Esqueleto',
    categories: ['hostiles'],
    iconClass: 'skeleton-icon',
    image: 'Images/skeleton.png',
    sceneImage: 'Images/skeleton_s.jpeg',
    subtitle: 'El arquero del inframundo',
    description: 'Los esqueletos son mobs hostiles armados con arcos. Atacan desde la distancia y son especialmente peligrosos en grupos o en espacios cerrados.',
    type: 'Hostil',
    typeClass: 'hostile',
    health: 5,
    damage: 'Medio',
    habitat: 'Superficies, cuevas',
    drop: { icon: '🦴', name: 'Huesos y flechas' },
    behaviors: [
      { icon: '🏹', type: 'emoji', text: 'Dispara flechas desde lejos con buena precisión.' },
      { icon: '☀️', type: 'emoji', text: 'Se quema bajo la luz del sol.' },
      { icon: '🐺', type: 'emoji', text: 'Los lobros domesticados atacan esqueletos automáticamente.' },
      { icon: '💀', type: 'emoji', text: 'Puede aparecer montado en arañas jinete.' }
    ],
    habitatInfo: [
      { icon: '🌙', text: 'Aparece de noche en la superficie.' },
      { icon: '🕳️', text: 'Común en cuevas y generadores de mobs.' },
      { icon: '🏰', text: 'Se encuentra en fortalezas del Nether como blaze.' }
    ],
    trivia: [
      { icon: '🎵', text: 'Su sonido de huesos es inconfundible.' },
      { icon: '🏹', text: 'Puede recoger y usar arcos mejores si los encuentra.' },
      { icon: '🎃', text: 'Con una calabaza puede convertirse en esqueleto Glitch.' }
    ],
    quote: '"Escucha el crujir de los huesos... ya te está apuntando."',
    sceneColor: '#d4d4c8'
  },
  // --- Araña ---
  {
    id: 'spider',
    name: 'Araña',
    categories: ['hostiles', 'neutrales'],
    iconClass: 'spider-icon',
    image: 'Images/Spider.png',
    sceneImage: 'Images/spider_s.jpeg',
    subtitle: 'La trepadora de la noche',
    description: 'Las arañas son mobs que se vuelven hostiles en la oscuridad. Pueden trepar paredes y saltar sobre el jugador, siendo muy peligrosas en cuevas.',
    type: 'Hostil',
    typeClass: 'hostile',
    health: 4,
    damage: 'Medio',
    habitat: 'Cuevas, superficies',
    drop: { icon: '🕸️', name: 'Hilo' },
    behaviors: [
      { icon: '🕷️', type: 'emoji', text: 'Hostil solo con poca luz; neutral de día.' },
      { icon: '🧗', type: 'emoji', text: 'Puede trepar paredes verticales sin problema.' },
      { icon: '🦘', type: 'emoji', text: 'Salta hacia el jugador al atacar.' },
      { icon: '🕸️', type: 'emoji', text: 'No se ve afectada por telarañas.' }
    ],
    habitatInfo: [
      { icon: '🕳️', text: 'Muy común en cuevas y minas.' },
      { icon: '🌲', text: 'Aparece en bosques y biomas con poca luz.' },
      { icon: '🏚️', text: 'Frecuente en generadores de mazmorras.' }
    ],
    trivia: [
      { icon: '👁️', text: 'Sus ojos brillan rojo en la oscuridad.' },
      { icon: '🧪', text: 'El veneno de araña cave es más peligroso.' },
      { icon: '🏇', text: 'Puede aparecer con un esqueleto jinete encima.' }
    ],
    quote: '"En la oscuridad, esas ojos rojos son lo último que verás."',
    sceneColor: '#3d3d3d'
  },
  // --- Enderman ---
  {
    id: 'enderman',
    name: 'Enderman',
    categories: ['neutrales', 'miticas'],
    iconClass: 'enderman-icon',
    image: 'Images/enderman.png',
    sceneImage: 'Images/enderman_s.jpeg',
    subtitle: 'El teletransportador del End',
    description: 'Los Enderman son criaturas altas y misteriosas. Normalmente son neutrales, pero si miras directamente a sus ojos se vuelven hostiles y pueden teletransportarse.',
    type: 'Neutral',
    typeClass: 'neutral',
    health: 10,
    damage: 'Alto',
    habitat: 'End, superficies nocturnas',
    drop: { icon: '💎', name: 'Perla de Ender' },
    behaviors: [
      { icon: '👁️', type: 'emoji', text: 'Se vuelve hostil si miras sus ojos directamente.' },
      { icon: '✨', type: 'emoji', text: 'Puede teletransportarse a corta y larga distancia.' },
      { icon: '📦', type: 'emoji', text: 'Recoge y mueve bloques del mundo.' },
      { icon: '💧', type: 'emoji', text: 'Recibe daño al contacto con agua y lluvia.' }
    ],
    habitatInfo: [
      { icon: '🌌', text: 'Nativo del End, su dimensión de origen.' },
      { icon: '🌙', text: 'Aparece de noche en la superficie del Overworld.' },
      { icon: '🏜️', text: 'Frecuente en biomas del desierto por la noche.' }
    ],
    trivia: [
      { icon: '🎤', text: 'Sus sonidos son grabaciones de voz invertidas.' },
      { icon: '🎩', text: 'Lleva un bloque en las manos la mayoría del tiempo.' },
      { icon: '🏃', text: 'Corre muy rápido cuando está enfadado.' }
    ],
    quote: '"No lo mires a los ojos... o te llevará a otro lugar."',
    sceneColor: '#1a1a2e'
  },
  // --- Blaze ---
  {
    id: 'blaze',
    name: 'Blaze',
    categories: ['hostiles', 'voladoras', 'miticas'],
    iconClass: 'blaze-icon',
    image: 'Images/blaze.png',
    sceneImage: 'Images/blaze_s.jpeg',
    subtitle: 'El guardián del Nether',
    description: 'Los Blazes son mobs voladores del Nether que disparan bolas de fuego. Son esenciales para obtener varas de blaze, necesarias para acceder al End.',
    type: 'Hostil',
    typeClass: 'hostile',
    health: 6,
    damage: 'Alto',
    habitat: 'Fortalezas del Nether',
    drop: { icon: '🔥', name: 'Vara de blaze' },
    behaviors: [
      { icon: '🔥', type: 'emoji', text: 'Lanza bolas de fuego a distancia.' },
      { icon: '🦅', type: 'emoji', text: 'Flota en el aire y desciende al atacar.' },
      { icon: '💧', type: 'emoji', text: 'Recibe daño al contacto con agua o lluvia.' },
      { icon: '🏰', type: 'emoji', text: 'Solo aparece en generadores de fortalezas.' }
    ],
    habitatInfo: [
      { icon: '🔥', text: 'Vive exclusivamente en el Nether.' },
      { icon: '🏰', text: 'Spawnea en generadores de fortalezas del Nether.' },
      { icon: '🌉', text: 'Común cerca de puentes de fortalezas.' }
    ],
    trivia: [
      { icon: '🧪', text: 'Sus varas son clave para pociones y el End.' },
      { icon: '❄️', text: 'Las bolas de nieve son muy efectivas contra ellos.' },
      { icon: '👻', text: 'Su cuerpo gira constantemente mientras flota.' }
    ],
    quote: '"En el Nether, el fuego no solo está en el suelo... también vuela."',
    sceneColor: '#ff9800'
  },
  // --- Aldeano ---
  {
    id: 'villager',
    name: 'Aldeano',
    categories: ['amigables'],
    iconClass: 'villager-icon',
    image: 'Images/villager.png',
    sceneImage: 'Images/villager_s.jpeg',
    subtitle: 'El habitante del pueblo',
    description: 'Los aldeanos son mobs pacíficos que viven en aldeas. Ofrecen comercio con los jugadores y son fundamentales para obtener objetos raros y encantamientos.',
    type: 'Amigable',
    typeClass: 'friendly',
    health: 5,
    damage: 'Ninguno',
    habitat: 'Aldeas',
    drop: { icon: '📦', name: 'Ninguno (comercia en su lugar)' },
    behaviors: [
      { icon: '🤝', type: 'emoji', text: 'Comercia objetos con los jugadores.' },
      { icon: '🏠', type: 'emoji', text: 'Busca refugio de noche en sus casas.' },
      { icon: '🌾', type: 'emoji', text: 'Puede cultivar y cosechar cultivos.' },
      { icon: '⚡', type: 'emoji', text: 'Se convierte en brujo si es atacado por un rayo.' }
    ],
    habitatInfo: [
      { icon: '🏘️', text: 'Vive en aldeas generadas en el mundo.' },
      { icon: '🛏️', text: 'Necesita una cama y punto de trabajo para su profesión.' },
      { icon: '🗺️', text: 'Aparece en biomas de llanuras, desierto, taiga y más.' }
    ],
    trivia: [
      { icon: '💬', text: 'Hace sonidos de "hmm" que encantan a los jugadores.' },
      { icon: '🧙', text: 'Los brujos ofrecen pociones y objetos raros.' },
      { icon: '🛡️', text: 'Los golems de hierro los protegen de mobs hostiles.' }
    ],
    quote: '"Un buen trato con un aldeano vale más que mil minas."',
    sceneColor: '#8d6e63'
  },
  // --- Wither ---
  {
    id: 'wither',
    name: 'Wither',
    categories: ['jefes', 'hostiles', 'voladoras', 'miticas'],
    iconClass: 'wither-icon',
    image: 'Images/wither.png',
    sceneImage: 'Images/wither_s.jpeg',
    subtitle: 'El jefe del inframundo',
    description: 'El Wither es un jefe que el jugador puede invocar. Dispara cráneos explosivos, vuela libremente y al bajar de vida se vuelve aún más destructivo, rompiendo bloques a su paso.',
    type: 'Jefe',
    typeClass: 'boss',
    health: 15,
    damage: 'Muy alto',
    habitat: 'Invocado por el jugador',
    drop: { icon: '⭐', name: 'Estrella del Nether' },
    behaviors: [
      { icon: '💀', type: 'emoji', text: 'Dispara tres cráneos con distintos efectos.' },
      { icon: '🦅', type: 'emoji', text: 'Vuela y persigue al jugador sin descanso.' },
      { icon: '💥', type: 'emoji', text: 'Rompe bloques al estar por debajo de la mitad de vida.' },
      { icon: '☠️', type: 'emoji', text: 'Aplica el efecto Wither al impactar.' }
    ],
    habitatInfo: [
      { icon: '🧪', text: 'Se invoca con arena de almas y cráneos de esqueleto Wither.' },
      { icon: '🏗️', text: 'Se recomienda combatirlo en una arena preparada.' },
      { icon: '🌋', text: 'No spawnea naturalmente en el mundo.' }
    ],
    trivia: [
      { icon: '🎖️', text: 'Su derrota desbloquea la estrella del Nether.' },
      { icon: '🏭', text: 'Es la fuente principal de recursos para balístas.' },
      { icon: '💡', text: 'Los golems de hierro le hacen frente con valentía.' }
    ],
    quote: '"Tres cráneos, una tormenta... y tu mundo hecho añicos."',
    sceneColor: '#424242'
  },
  // --- Dragón del End ---
  {
    id: 'ender-dragon',
    name: 'Dragón del End',
    categories: ['jefes', 'voladoras', 'miticas'],
    iconClass: 'dragon-icon',
    image: 'Images/dragona.png',
    sceneImage: 'Images/dragona_s.jpeg',
    subtitle: 'El guardián final del End',
    description: 'El Dragón del End es el jefe principal de Minecraft. Vuela sobre la isla central, destruye cristales de regeneración y representa el desafío final antes de los créditos del juego.',
    type: 'Jefe',
    typeClass: 'boss',
    health: 20,
    damage: 'Muy alto',
    habitat: 'Isla principal del End',
    drop: { icon: '🐉', name: 'Experiencia masiva y portal al Overworld' },
    behaviors: [
      { icon: '🐉', type: 'emoji', text: 'Vuela en círculos sobre la isla del End.' },
      { icon: '💎', type: 'emoji', text: 'Se cura con cristales del End en las torres.' },
      { icon: '🔥', type: 'emoji', text: 'Lanza bolas de dragón ácido al jugador.' },
      { icon: '💨', type: 'emoji', text: 'Genera una explosión al ser derrotado.' }
    ],
    habitatInfo: [
      { icon: '🌌', text: 'Solo aparece en la dimensión del End.' },
      { icon: '🏰', text: 'Vive en la isla central con torres de cristal.' },
      { icon: '🌀', text: 'Su derrota activa el portal de regreso.' }
    ],
    trivia: [
      { icon: '🏆', text: 'Es considerado el jefe final del juego base.' },
      { icon: '🥚', text: 'Deja un huevo de dragón en la cima del portal.' },
      { icon: '🎵', text: 'Tiene su propia música de combate épica.' }
    ],
    quote: '"El cielo del End no es seguro... algo enorme te observa."',
    sceneColor: '#311B92'
  },
  // --- Warden ---
  {
    id: 'warden',
    name: 'Warden',
    categories: ['jefes', 'hostiles', 'miticas'],
    iconClass: 'warden-icon',
    image: 'Images/warden.png',
    sceneImage: 'Images/warden_s.jpeg',
    subtitle: 'El guardián de las profundidades',
    description: 'El Warden es uno de los mobs más peligrosos del juego. Ciego pero extremadamente fuerte, detecta vibraciones y sonidos. No debe ser combatido, sino evitado con sigilo.',
    type: 'Jefe',
    typeClass: 'boss',
    health: 25,
    damage: 'Extremo',
    habitat: 'Ciudades antiguas',
    drop: { icon: '🧿', name: 'Experiencia y posible catalizador' },
    behaviors: [
      { icon: '👂', type: 'emoji', text: 'Detecta vibraciones y sonidos, no la vista.' },
      { icon: '💢', type: 'emoji', text: 'Su ataque cuerpo a cuerpo elimina al jugador en segundos.' },
      { icon: '📡', type: 'emoji', text: 'Lanza un rayo sónico a distancia.' },
      { icon: '😤', type: 'emoji', text: 'Se enfurece si es atacado directamente.' }
    ],
    habitatInfo: [
      { icon: '🏛️', text: 'Habita en ciudades antiguas bajo tierra.' },
      { icon: '🌑', text: 'Spawnea en la oscuridad profunda cuando hay demasiadas vibraciones.' },
      { icon: '🔇', text: 'La lana y el sigilo son claves para sobrevivir.' }
    ],
    trivia: [
      { icon: '💪', text: 'Tiene más vida que cualquier otro mob del Overworld.' },
      { icon: '🧠', text: 'Fue diseñado para que huir sea la mejor estrategia.' },
      { icon: '🎖️', text: 'Su aparición está ligada al sistema de sculk.' }
    ],
    quote: '"No lo veas... no lo escuches... y quizá sobrevivas."',
    sceneColor: '#004D40'
  },
  // --- Guardián ---
  {
    id: 'guardian',
    name: 'Guardián',
    categories: ['acuaticas', 'hostiles'],
    iconClass: 'guardian-icon',
    image: 'Images/guardian.png',
    sceneImage: 'Images/guardian_s.jpeg',
    subtitle: 'El protector del océano',
    description: 'Los guardianes son mobs acuáticos hostiles que protegen monumentos oceánicos. Disparan un rayo láser cargado y hacen que nadar sea mucho más difícil cerca de ellos.',
    type: 'Hostil',
    typeClass: 'hostile',
    health: 6,
    damage: 'Alto',
    habitat: 'Monumentos oceánicos',
    drop: { icon: '🐟', name: 'Escamas prismáticas' },
    behaviors: [
      { icon: '🔦', type: 'emoji', text: 'Carga y dispara un rayo láser al jugador.' },
      { icon: '🌊', type: 'emoji', text: 'Aplica fatiga de minado al estar cerca.' },
      { icon: '🏊', type: 'emoji', text: 'Nada agresivamente hacia el intruso.' },
      { icon: '🛡️', type: 'emoji', text: 'Defiende activamente los monumentos oceánicos.' }
    ],
    habitatInfo: [
      { icon: '🌊', text: 'Vive en monumentos oceánicos generados en el mar.' },
      { icon: '🏛️', text: 'Patrulla las salas del monumento en grupos.' },
      { icon: '💧', text: 'Solo spawnea bajo el agua.' }
    ],
    trivia: [
      { icon: '👁️', text: 'Su ojo central brilla al cargar el láser.' },
      { icon: '🧱', text: 'Las escamas sirven para crear conductos.' },
      { icon: '👑', text: 'El Guardián Anciano es su variante jefe.' }
    ],
    quote: '"Bajo el océano, algo te mira... y carga su rayo."',
    sceneColor: '#546E7A'
  },
  // --- Ahogado ---
  {
    id: 'drowned',
    name: 'Ahogado',
    categories: ['acuaticas', 'hostiles'],
    iconClass: 'drowned-icon',
    image: 'Images/ahogado.png',
    sceneImage: 'Images/ahogado_s.jpeg',
    subtitle: 'El zombi de las profundidades',
    description: 'Los ahogados son zombis adaptados al agua. Aparecen en océanos y ríos, pueden empuñar tridentes y son una amenaza constante al explorar bajo el agua.',
    type: 'Hostil',
    typeClass: 'hostile',
    health: 5,
    damage: 'Medio',
    habitat: 'Océanos, ríos',
    drop: { icon: '🔱', name: 'Tridente (raro) y carne podrida' },
    behaviors: [
      { icon: '🌊', type: 'emoji', text: 'Persigue al jugador bajo el agua con facilidad.' },
      { icon: '🔱', type: 'emoji', text: 'Puede lanzar tridentes desde la distancia.' },
      { icon: '🧟', type: 'emoji', text: 'Variante acuática del zombi común.' },
      { icon: '☀️', type: 'emoji', text: 'También aparece de noche en playas.' }
    ],
    habitatInfo: [
      { icon: '🌊', text: 'Común en océanos, ríos y playas.' },
      { icon: '🌙', text: 'Spawnea de noche en zonas costeras.' },
      { icon: '🧟', text: 'Los zombis comunes se convierten en ahogados bajo el agua.' }
    ],
    trivia: [
      { icon: '🔱', text: 'El tridente es uno de los objetos más codiciados del juego.' },
      { icon: '🐚', text: 'Puede llevar conchas náuticas en la mano.' },
      { icon: '💧', text: 'No se quema bajo el sol como los zombis normales.' }
    ],
    quote: '"El agua oculta más que tesoros... también muertos que nadan."',
    sceneColor: '#1A5276'
  },
  // --- Ghast ---
  {
    id: 'ghast',
    name: 'Ghast',
    categories: ['voladoras', 'hostiles', 'miticas'],
    iconClass: 'ghast-icon',
    image: 'Images/ghast.png',
    sceneImage: 'Images/ghast_s.jpeg',
    subtitle: 'El llanto del Nether',
    description: 'Los Ghasts son enormes criaturas flotantes del Nether que disparan bolas de fuego. Su llanto melancólico es inconfundible y sus explosiones pueden empujar al jugador fuera de puentes.',
    type: 'Hostil',
    typeClass: 'hostile',
    health: 5,
    damage: 'Alto',
    habitat: 'Nether abierto',
    drop: { icon: '😢', name: 'Lágrima de Ghast' },
    behaviors: [
      { icon: '🔥', type: 'emoji', text: 'Dispara bolas de fuego explosivas.' },
      { icon: '🦅', type: 'emoji', text: 'Flota lentamente por el Nether.' },
      { icon: '🏓', type: 'emoji', text: 'Sus bolas de fuego pueden devolverse con un golpe.' },
      { icon: '😢', type: 'emoji', text: 'Emite un llanto triste y reconocible.' }
    ],
    habitatInfo: [
      { icon: '🔥', text: 'Spawnea en espacios abiertos del Nether.' },
      { icon: '🌋', text: 'Frecuente sobre lava y biomas infernales.' },
      { icon: '🌉', text: 'Gran amenaza al cruzar puentes del Nether.' }
    ],
    trivia: [
      { icon: '🎵', text: 'Su sonido fue grabado por un gato de un desarrollador.' },
      { icon: '🧪', text: 'Sus lágrimas sirven para pociones de regeneración.' },
      { icon: '🏓', text: 'Devolver su fuego es una técnica clásica de supervivencia.' }
    ],
    quote: '"Ese llanto en el Nether no es de tristeza... es de hambre."',
    sceneColor: '#ECEFF1'
  },
  // --- Phantom ---
  {
    id: 'phantom',
    name: 'Phantom',
    categories: ['voladoras', 'hostiles'],
    iconClass: 'phantom-icon',
    image: 'Images/phantom.png',
    sceneImage: 'Images/phantom_s.jpeg',
    subtitle: 'La pesadilla del insomne',
    description: 'Los Phantoms son mobs voladores que aparecen cuando el jugador no duerme durante varios días. Atacan desde el cielo en grupos y castigan la falta de descanso.',
    type: 'Hostil',
    typeClass: 'hostile',
    health: 5,
    damage: 'Medio',
    habitat: 'Cielo nocturno',
    drop: { icon: '🪶', name: 'Membrana de phantom' },
    behaviors: [
      { icon: '🦇', type: 'emoji', text: 'Aparece tras varios días sin dormir.' },
      { icon: '🌙', type: 'emoji', text: 'Ataca de noche o en tormentas.' },
      { icon: '👥', type: 'emoji', text: 'Suele atacar en grupos numerosos.' },
      { icon: '🪶', type: 'emoji', text: 'Desciende en picado hacia el jugador.' }
    ],
    habitatInfo: [
      { icon: '🌙', text: 'Spawnea en el cielo cuando no se usa una cama.' },
      { icon: '⛈️', text: 'También aparece durante tormentas.' },
      { icon: '🏕️', text: 'Puede interrumpir expediciones largas sin descanso.' }
    ],
    trivia: [
      { icon: '😴', text: 'Dormir es la forma más simple de evitarlos.' },
      { icon: '🐱', text: 'Los gatos silban al detectar phantoms cercanos.' },
      { icon: '🪂', text: 'Sus membranas reparan elytras dañadas.' }
    ],
    quote: '"Si no duermes, el cielo te envía sus sombras."',
    sceneColor: '#1A237E'
  },
  // --- Golem de hierro ---
  {
    id: 'iron-golem',
    name: 'Golem de hierro',
    categories: ['amigables', 'neutrales'],
    iconClass: 'golem-icon',
    image: 'Images/golem.png',
    sceneImage: 'Images/golem_s.jpeg',
    subtitle: 'El protector de las aldeas',
    description: 'Los golems de hierro son constructos que defienden aldeas de mobs hostiles. Pueden ser creados por el jugador y son aliados poderosos en combate.',
    type: 'Amigable',
    typeClass: 'friendly',
    health: 25,
    damage: 'Alto',
    habitat: 'Aldeas',
    drop: { icon: '⚙️', name: 'Hierro y amapolas' },
    behaviors: [
      { icon: '🛡️', type: 'emoji', text: 'Defiende aldeanos de mobs hostiles.' },
      { icon: '✊', type: 'emoji', text: 'Lanza enemigos al aire con golpes potentes.' },
      { icon: '🌹', type: 'emoji', text: 'Los aldeanos le ofrecen amapolas como regalo.' },
      { icon: '🔧', type: 'emoji', text: 'Puede ser construido con bloques de hierro y una calabaza.' }
    ],
    habitatInfo: [
      { icon: '🏘️', text: 'Aparece naturalmente en aldeas grandes.' },
      { icon: '🏗️', text: 'El jugador puede crearlo manualmente.' },
      { icon: '🌾', text: 'Patrulla las calles de la aldea constantemente.' }
    ],
    trivia: [
      { icon: '💚', text: 'Se puede curar con hierro manufacturado.' },
      { icon: '🤝', text: 'No ataca al jugador salvo que sea provocado.' },
      { icon: '⚔️', text: 'Muy efectivo contra grupos de zombis.' }
    ],
    quote: '"Donde hay aldeanos, el hierro vigila en silencio."',
    sceneColor: '#78909C'
  },
  // --- Lobo ---
  {
    id: 'wolf',
    name: 'Lobo',
    categories: ['amigables', 'neutrales'],
    iconClass: 'wolf-icon',
    image: 'Images/lobo.png',
    sceneImage: 'Images/wolf_s.jpeg',
    subtitle: 'El compañero fiel',
    description: 'Los lobos son mobs que pueden domesticarse con huesos. Una vez aliados, siguen al jugador, atacan a sus enemigos y pueden ser curados con carne.',
    type: 'Amigable',
    typeClass: 'friendly',
    health: 4,
    damage: 'Medio',
    habitat: 'Bosques, taigas',
    drop: { icon: '🦴', name: 'Ninguno (se domestica con huesos)' },
    behaviors: [
      { icon: '🦴', type: 'emoji', text: 'Se domestica alimentándolo con huesos.' },
      { icon: '🐾', type: 'emoji', text: 'Sigue al jugador y teletransporta si se aleja mucho.' },
      { icon: '⚔️', type: 'emoji', text: 'Ataca a los enemigos del dueño automáticamente.' },
      { icon: '❤️', type: 'emoji', text: 'Su cola indica su nivel de salud.' }
    ],
    habitatInfo: [
      { icon: '🌲', text: 'Aparece en bosques, taigas y variantes frías.' },
      { icon: '🐺', text: 'Vive en manadas de hasta cuatro lobos.' },
      { icon: '🏔️', text: 'También habita en biomas nevados.' }
    ],
    trivia: [
      { icon: '🎨', text: 'Su collar cambia de color al ser domesticado.' },
      { icon: '🐑', text: 'Ataca ovejas y conejos automáticamente.' },
      { icon: '💪', text: 'Puede ser curado con cualquier tipo de carne.' }
    ],
    quote: '"Un hueso, una mirada... y tendrás un guardián para siempre."',
    sceneColor: '#B0BEC5'
  },
  // --- Vaca ---
  {
    id: 'cow',
    name: 'Vaca',
    categories: ['amigables', 'neutrales'],
    iconClass: 'cow-icon',
    image: 'Images/cow.png',
    sceneImage: 'Images/cow_s.jpeg',
    subtitle: 'La fuente de supervivencia',
    description: 'Las vacas son mobs pasivos esenciales para la supervivencia. Proporcionan cuero, carne y leche, siendo uno de los animales más útiles del juego.',
    type: 'Amigable',
    typeClass: 'friendly',
    health: 5,
    damage: 'Ninguno',
    habitat: 'Llanuras, bosques',
    drop: { icon: '🥩', name: 'Carne cruda y cuero' },
    behaviors: [
      { icon: '🥛', type: 'emoji', text: 'Se puede ordeñar con un cubo para obtener leche.' },
      { icon: '🌾', type: 'emoji', text: 'Se reproduce con trigo.' },
      { icon: '🐄', type: 'emoji', text: 'Deambula pacíficamente por los biomas.' },
      { icon: '🔥', type: 'emoji', text: 'La carne cocinada restaura mucha hambre.' }
    ],
    habitatInfo: [
      { icon: '🌿', text: 'Común en llanuras y praderas.' },
      { icon: '🌲', text: 'También aparece en bosques y colinas.' },
      { icon: '🏡', text: 'Ideal para granjas de supervivencia temprana.' }
    ],
    trivia: [
      { icon: '🎵', text: 'Sus mugidos son clásicos del juego.' },
      { icon: '🧱', text: 'El cuero es clave para libros y armadura.' },
      { icon: '🥛', text: 'La leche elimina todos los efectos de pociones.' }
    ],
    quote: '"Toda gran aventura empieza con una vaca y un cubo."',
    sceneColor: '#A1887F'
  }
];

// Mapa de funciones de filtro: cada clave devuelve si una criatura pertenece a esa categoría
const categoryMap = {
  'todas': () => true, // La categoría "todas" incluye cualquier criatura
  'neutrales': (c) => c.categories.includes('neutrales'), // Filtra criaturas con categoría neutrales
  'hostiles': (c) => c.categories.includes('hostiles'), // Filtra criaturas con categoría hostiles
  'amigables': (c) => c.categories.includes('amigables'), // Filtra criaturas con categoría amigables
  'jefes': (c) => c.categories.includes('jefes'), // Filtra criaturas con categoría jefes
  'miticas': (c) => c.categories.includes('miticas'), // Filtra criaturas con categoría míticas
  'acuaticas': (c) => c.categories.includes('acuaticas'), // Filtra criaturas con categoría acuáticas
  'voladoras': (c) => c.categories.includes('voladoras') // Filtra criaturas con categoría voladoras
};

let activeCategory = 'todas'; // Categoría de filtro actualmente seleccionada
let activeCreature = 'creeper'; // ID de la criatura actualmente seleccionada
let activeTab = 'comportamiento'; // Pestaña activa del panel de información

const creatureList = document.querySelector('.creature-list'); // Lista lateral de criaturas
const detailPanel = document.querySelector('.detail-panel'); // Panel central con detalles
const infoPanel = document.querySelector('.info-panel'); // Panel derecho con pestañas e info extra
const pills = document.querySelectorAll('.pill'); // Botones de filtro por categoría
const tabs = document.querySelectorAll('.tab'); // Pestañas iniciales del HTML (se recrean al renderizar)

const suggestionsBox = document.getElementById("suggestions");

searchInput.addEventListener("input", () => {
  const text = searchInput.value.toLowerCase();

  if (!text) {
    suggestionsBox.innerHTML = "";
    return;
  }

  const matches = creatures.filter(c =>
    c.name.toLowerCase().includes(text)
  );

  suggestionsBox.innerHTML = matches.map(c => `
    <li data-id="${c.id}">${c.name}</li>
  `).join("");

  suggestionsBox.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", () => {
      activeCreature = li.dataset.id;
      updateView();
      suggestionsBox.innerHTML = "";
      searchInput.value = "";
    });
  });
});

function hearts(count) { // Convierte puntos de salud en iconos de corazones
  const shown = Math.min(count, 8); // Muestra como máximo 8 corazones visibles
  const extra = count > 8 ? ` +${count - 8}` : ''; // Si hay más de 8, añade texto "+N"
  return `${'❤️ '.repeat(shown).trim()}${extra}`; // Devuelve la cadena de corazones formateada
}

function renderCreatureList() { // Dibuja la lista de criaturas según la categoría activa
  const filter = categoryMap[activeCategory]; // Obtiene la función de filtro de la categoría actual
  const searchText = searchInput.value.toLowerCase();
  const filtered = creatures.filter(filter).filter(c =>c.name.toLowerCase().includes(searchText)); 
  // Aplica el filtro al array de criaturas

  if (filtered.length === 0) { // Si no hay criaturas en esta categoría
    // Inserta mensaje de lista vacía en el DOM
    creatureList.innerHTML = `
      <li class="creature-empty">No hay criaturas en esta categoría aún.</li>
    `;
    return; // Termina la función sin renderizar más
  }

  // Genera HTML para cada criatura filtrada y lo inserta en la lista
  creatureList.innerHTML = filtered.map((c) => `
    <li class="creature-item${c.id === activeCreature ? ' active' : ''}" data-id="${c.id}" title="${c.name}">
      <span class="creature-icon ${c.iconClass}"></span>
      <span class="creature-name">${c.name}</span>
    </li>
  `).join(''); // Une todos los elementos li en una sola cadena

  if (!filtered.find((c) => c.id === activeCreature)) { // Si la criatura activa no está en el filtro
    activeCreature = filtered[0].id; // Selecciona la primera criatura del filtro
  }

  creatureList.querySelectorAll('.creature-item').forEach((item) => { // Recorre cada item de la lista
    item.addEventListener('click', () => selectCreature(item.dataset.id)); // Al hacer click, selecciona esa criatura
  });
}

function renderBehaviorIcon(b) { // Genera el HTML del icono de un comportamiento o curiosidad
  if (b.type === 'css') { // Si el icono es una clase CSS personalizada
    return `<span class="behavior-icon ${b.icon}"></span>`; // Usa un span con clase CSS
  }
  return `<span class="behavior-icon">${b.icon}</span>`; // Si no, muestra el emoji directamente
}

function getTabContent(creature) { // Devuelve el array de datos según la pestaña activa
  const tabData = { // Objeto que mapea cada pestaña a su array de datos
    comportamiento: creature.behaviors, // Datos de comportamiento de la criatura
    habitat: creature.habitatInfo, // Datos de hábitat de la criatura
    curiosidades: creature.trivia // Datos de curiosidades de la criatura
  };
  return tabData[activeTab] || creature.behaviors; // Devuelve los datos de la pestaña o comportamiento por defecto
}

function renderDetail(creature) { // Dibuja el panel central con la info principal de la criatura
  const imageHtml = creature.image // Decide si mostrar imagen real o placeholder
    ? `<img src="${creature.image}" alt="${creature.name} de Minecraft" class="detail-creature-img">` // Imagen PNG si existe
    : `<div class="detail-creature-placeholder ${creature.iconClass}"></div>`; // Placeholder CSS si no hay imagen

  const dropHtml = creature.drop.name // Formatea el texto del drop/objeto que suelta
    ? `<span class="drop-icon">${creature.drop.icon}</span> ${creature.drop.name}` // Drop con icono y nombre
    : creature.drop.text || creature.drop.icon; // Alternativa si solo hay texto o icono

  // Inserta todo el HTML del panel de detalle en el DOM
  detailPanel.innerHTML = `
    <div class="detail-image">${imageHtml}</div>
    <div class="detail-info">
      <h2 class="detail-title">${creature.name}</h2>
      <p class="detail-subtitle">${creature.subtitle}</p>
      <p class="detail-desc">${creature.description}</p>
      <div class="stats-table">
        <div class="stat-row">
          <span class="stat-label">Tipo</span>
          <span class="stat-value ${creature.typeClass}">${creature.type}</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Salud</span>
          <span class="stat-value hearts">${hearts(creature.health)}</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Daño</span>
          <span class="stat-value">${creature.damage}</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Hábitat</span>
          <span class="stat-value">${creature.habitat}</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Caída de objetos</span>
          <span class="stat-value">${dropHtml}</span>
        </div>
      </div>
    </div>
  `;
}

function renderInfoPanel(creature) { // Dibuja el panel derecho con pestañas, lista y cita
  const content = getTabContent(creature); // Obtiene los datos de la pestaña activa

  // Construye el HTML de los botones de pestañas
  const tabsHtml = `
    <div class="tabs">
      <button class="tab${activeTab === 'comportamiento' ? ' active' : ''}" data-tab="comportamiento">Comportamiento</button>
      <button class="tab${activeTab === 'habitat' ? ' active' : ''}" data-tab="habitat">Hábitat</button>
      <button class="tab${activeTab === 'curiosidades' ? ' active' : ''}" data-tab="curiosidades">Curiosidades</button>
    </div>
  `;

  // Construye el HTML de la lista de items de la pestaña activa
  const listHtml = `
    <ul class="behavior-list">
      ${content.map((b) => `
        <li>
          ${renderBehaviorIcon(b)}
          <span>${b.text}</span>
        </li>
      `).join('')}
    </ul>
  `;



  // Construye el HTML de la escena visual y la cita de la criatura
  const mediaHtml = `
    <div class="media-card">
      <div class="media-image">
        <img src="${creature.sceneImage}" alt="Escena de ${creature.name}" class="scene-img">
      </div>
      <blockquote>${creature.quote}</blockquote>
    </div>
  `;

  infoPanel.innerHTML = tabsHtml + listHtml + mediaHtml; // Combina pestañas, lista y media en el panel

  infoPanel.querySelectorAll('.tab').forEach((tab) => { // Recorre las pestañas recién creadas
    tab.addEventListener('click', () => selectTab(tab.dataset.tab)); // Al hacer click, cambia de pestaña
  });
}

function updateView() { // Actualiza los paneles de detalle e info con la criatura activa
  const creature = creatures.find((c) => c.id === activeCreature); // Busca el objeto criatura por ID
  if (!creature) return; // Si no existe, no hace nada

  detailPanel.classList.add('updating'); // Añade clase de animación al panel de detalle
  infoPanel.classList.add('updating'); // Añade clase de animación al panel de info

  requestAnimationFrame(() => { // Espera al siguiente frame para renderizar con transición
    renderDetail(creature); // Redibuja el panel central
    renderInfoPanel(creature); // Redibuja el panel derecho

    requestAnimationFrame(() => { // Espera otro frame para quitar la animación
      detailPanel.classList.remove('updating'); // Quita clase de animación del detalle
      infoPanel.classList.remove('updating'); // Quita clase de animación del info
    });
  });
}

function selectCreature(id) { // Cambia la criatura seleccionada al hacer click en la lista
  if (id === activeCreature) return; // Si ya está seleccionada, no hace nada
  activeCreature = id; // Guarda el nuevo ID como criatura activa
  creatureList.querySelectorAll('.creature-item').forEach((item) => { // Recorre items de la lista
    item.classList.toggle('active', item.dataset.id === id); // Marca activo solo el item clickeado
  });
  updateView(); // Actualiza los paneles con la nueva criatura
}

function selectCategory(category) { // Cambia la categoría de filtro al hacer click en una pill
  if (category === activeCategory) return; // Si ya está activa, no hace nada
  activeCategory = category; // Guarda la nueva categoría activa
  pills.forEach((pill) => { // Recorre todos los botones de categoría
    pill.classList.toggle('active', pill.dataset.category === category); // Marca activa la pill seleccionada
  });
  renderCreatureList(); // Vuelve a dibujar la lista filtrada
  updateView(); // Actualiza los paneles con la criatura resultanteEjemplo
}

function selectTab(tab) { // Cambia la pestaña activa del panel de información
  if (tab === activeTab) return; // Si ya está activa, no hace nada
  activeTab = tab; // Guarda la nueva pestaña activa
  const creature = creatures.find((c) => c.id === activeCreature); // Busca la criatura activa
  if (creature) renderInfoPanel(creature); // Si existe, redibuja solo el panel de info
}

pills.forEach((pill, index) => { // Configura cada botón de categoría del HTML inicial
  const keys = Object.keys(categoryMap); // Obtiene los nombres de categoría del mapa
  pill.dataset.category = keys[index]; // Asigna la categoría correspondiente al data-attribute
  pill.addEventListener('click', () => selectCategory(keys[index])); // Al click, filtra por esa categoría
});

tabs.forEach((tab, index) => { // Configura las pestañas iniciales del HTML (antes del primer render)
  const tabKeys = ['comportamiento', 'habitat', 'curiosidades']; // Nombres de las tres pestañas
  tab.dataset.tab = tabKeys[index]; // Asigna el nombre de pestaña al data-attribute
  tab.addEventListener('click', () => selectTab(tabKeys[index])); // Al click, cambia de pestaña
});

renderCreatureList(); // Dibuja la lista de criaturas al cargar la página
updateView(); // Muestra el detalle e info de la criatura inicial

const creatures = [
  // --- Creeper ---
  {
    id: 'creeper',
    name: 'Creeper',
    categories: ['hostiles'],
    iconClass: 'creeper-icon',
    image: 'Images/Creeper.png',
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
    // --- Zombie ---
    {}];
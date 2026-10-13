const firebaseConfig = {
  apiKey: "AIzaSyAqOZQ5YFOdhL6dblHI5wIx10m6n4xt2Fg",
  authDomain: "buenosdeseos-twodesign.firebaseapp.com",
  databaseURL: "https://buenosdeseos-twodesign-default-rtdb.firebaseio.com",
  projectId: "buenosdeseos-twodesign",
  storageBucket: "buenosdeseos-twodesign.firebasestorage.app",
  messagingSenderId: "577908051871",
  appId: "1:577908051871:web:27fbd4e06b3d18da14b7aa"
};

const config = {
  event: {
    defaultEventId: "guadalupejuanmanuel2027",
    databaseURL: firebaseConfig.databaseURL,
    eventIdParam: "eventId",
    dateISO: "2027-05-15T16:00:00-06:00",
    legacyFallback: {
      read: false,
      write: false,
      subscribe: false
    }
  },
  admin: {
    adminKey: "twodesign123",
    keyParam: "key",
    legacyKeyParam: "admin"
  },
  seo: {
    titulo: "Guadalupe & Juan Manuel | 15.05.2027",
    descripcion: "Te invitamos a compartir con nosotros este día tan especial el 15 de mayo de 2027 en La Antigua Guatemala.",
    autor: "Two Design",
    keywords: "invitacion de boda, Guadalupe, Juan Manuel, boda, La Antigua Guatemala",
    ogImage: "https://images.pexels.com/photos/39931209/pexels-photo-39931209.jpeg"
  },
  pareja: {
    nombres: "Guadalupe & Juan Manuel",
    portadaEtiqueta: "Nos casamos",
    novia: "Guadalupe",
    novio: "Juan Manuel",
    fecha: "15-05-2027",
    fechaVisible: "15.05.2027",
    fechaDestacada: "15 . 05 . 2027",
    cierreSubtitulo: "Porque entre todas las historias posibles, decidimos elegir la nuestra..."
  },
  ceremonia: {
    mensaje: "Uniremos nuestra vida en matrimonio con la bendición de Dios y de nuestros amados padres.",
    padresNoviaTitulo: "Padres de la Novia",
    padresNovia: "Edgar Giovanni Pérez & Sandra de Pérez",
    padresNovioTitulo: "Padres del Novio",
    padresNovio: "José Andrés Lorenzana Argueta y Patricia Osorio"
  },
  musica: {
    titulo: "Nuestra Canción",
    archivo: "music.mp3",
    playlistUrl: "https://open.spotify.com/playlist/2rDP5ogx0IHwWsK59PW3Xt?si=3f46a7854d264d56&pt=6f9927099d39627d2020e9537e1b1c42"
  },
  evento: {
    ceremonia: {
      titulo: "Ceremonia y recepción",
      lugar: "La Ermita de la Santa Cruz",
      hora: "4:00 PM",
      direccion: "Calle Chipilapa (en la Plazuela de la Santa Cruz), en el sector oriente de la entrada a La Antigua Guatemala, Sacatepéquez.",
      ubicacionUrl: "https://www.google.com/maps/search/?api=1&query=La+Ermita+de+la+Santa+Cruz+La+Antigua+Guatemala"
    },
    recepcion: {
      titulo: "Recepción",
      lugar: "La Ermita de la Santa Cruz",
      hora: "4:00 PM",
      direccion: "Calle Chipilapa (en la Plazuela de la Santa Cruz), en el sector oriente de la entrada a La Antigua Guatemala, Sacatepéquez.",
      ubicacionUrl: "https://www.google.com/maps/search/?api=1&query=La+Ermita+de+la+Santa+Cruz+La+Antigua+Guatemala"
    },
    calendario: {
      detalle: "Nos encantará compartir este día contigo.",
      ubicacion: "La Ermita de la Santa Cruz, La Antigua Guatemala"
    }
  },
  itinerario: {
    titulo: "Itinerario",
    items: [
      { icono: "Images/ICONO-1.png", alt: "Ceremonia", hora: "4:00 p. m.", texto: "Ceremonia" },
      { icono: "Images/ICONO-3.png", alt: "Cocktail", hora: "5:30 p. m.", texto: "Cocktail" },
      { icono: "Images/ICONO-2.png", alt: "Ingreso Esposos", hora: "6:30 p. m.", texto: "Ingreso Esposos" },
      { icono: "Images/ICONO-4.png", alt: "Servicio de cena", hora: "7:00 p. m.", texto: "Servicio de cena" },
      { icono: "Images/ICONO-5.png", alt: "Inicio de la fiesta", hora: "8:00 p. m.", texto: "Inicio de la fiesta" },
      { icono: "Images/ICONO-6.png", alt: "Despedida de los Esposos", hora: "10:00 p. m.", texto: "Despedida de los Esposos" }
    ]
  },
  dressCode: {
    titulo: "Dress Code",
    subtitulo: "Traje formal y de gala",
    descripcion: "Querida familia y seres queridos,\nNos hará muy felices que nos acompañen en este día tan especial.\nQueremos que se sientan cómodos y elijan el color que más les favorezca. Para mantener la armonía de nuestra boda, les pedimos amablemente evitar:\n• Blanco, ivory o tonos muy similares (reservados para la novia).\n• Azul marino y tonos muy similares (reservados para el novio).\n• Dorado y tonos metálicos muy similares (reservados para la decoración).\n• Colores neón o demasiado llamativos.\n¡Gracias por ser parte de este día tan especial!",
    coloresReservados: [
      { nombre: "Blanco", color: "#FFFFFF" },
      { nombre: "Azul marino", color: "#0B1F3A" },
      { nombre: "Dorado metalizado", color: "#C9A227" }
    ]
  },
  regalo: {
    titulo: "Regalo",
    descripcion: "Nuestra mayor alegría es compartir este día contigo. Si deseas tener un detalle con nosotros, agradeceremos con mucho cariño tu obsequio en efectivo dentro de nuestra lluvia de sobres.",
    transferencia: {
      titular: "",
      medio: "",
      cuenta: "",
      tipo: ""
    }
  },
  textos: {
    mensajeInvitado: "Para nosotros será un privilegio compartir contigo un momento tan especial.",
    mensajePases: "Hemos reservado {pases} lugares en su honor",
    fechaLabel: "Nuestro gran día"
  },
  deseos: {
    titulo: "Buenos deseos",
    intro: "Déjanos un mensaje especia para los novios, en este día tan especial."
  },
  adultos: {
    titulo: "Solo adultos",
    descripcion: "",
    mostrar: false
  },
  rsvp: {
    titulo: "Confirmar asistencia",
    mensaje: "Para nosotros es muy importante que confirmes tu asistencia lo antes posible, o bien indicarnos si no podrás acompañarnos."
  },
  galeria: {
    portadaPrincipal: "Images/E2.png",
    historia: [],
    celebracion: [],
    pareja: []
  },
  footer: {
    hashtag: "#GuadalupeYJuanManuel",
    instagramUrl: "https://www.instagram.com/thetwodesign",
    facebookUrl: "https://www.facebook.com/thetwodesign",
    marcaTexto: "Diseño",
    marcaNombre: "Two Design",
    marcaUrl: "https://twodesign.com"
  }
};

window.config = config;
window.firebaseConfig = firebaseConfig;

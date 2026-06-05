// src/data/questions.js

export const CATEGORIES = {
  music: '🎵 Música y Artistas',
  anime: '📺 Anime',
  cartoons: '🎨 Caricaturas Clásicas'
};

export const QUESTIONS = [
  // ========== MÚSICA Y ARTISTAS (15 preguntas) ==========
  { id: 1, category: 'music', difficulty: 'fácil',
    question: '¿Quién es conocido como el "Rey del Pop"?',
    options: ['Elvis Presley', 'Michael Jackson', 'Prince', 'Freddie Mercury'],
    answer: 1,
    explanation: 'Michael Jackson es mundialmente conocido como el "Rey del Pop".' },

  { id: 2, category: 'music', difficulty: 'fácil',
    question: '¿Qué banda interpretó "Bohemian Rhapsody"?',
    options: ['The Beatles', 'Led Zeppelin', 'Queen', 'Pink Floyd'],
    answer: 2,
    explanation: 'Queen lanzó "Bohemian Rhapsody" en 1975 en el álbum "A Night at the Opera".' },

  { id: 3, category: 'music', difficulty: 'media',
    question: '¿Cuál es el nombre real de Bad Bunny?',
    options: ['Benito Martínez', 'Benito Ocasio', 'Benito Antonio Martínez Ocasio', 'Benito Sánchez'],
    answer: 2,
    explanation: 'Bad Bunny nació como Benito Antonio Martínez Ocasio en Puerto Rico.' },

  { id: 4, category: 'music', difficulty: 'media',
    question: '¿Qué cantante es conocida como la "Reina del Tex-Mex"?',
    options: ['Gloria Trevi', 'Selena Quintanilla', 'Thalía', 'Paulina Rubio'],
    answer: 1,
    explanation: 'Selena Quintanilla es llamada la "Reina del Tex-Mex" y del cumbia.' },

  { id: 5, category: 'music', difficulty: 'fácil',
    question: '¿Quién cantó "Shape of You"?',
    options: ['Ed Sheeran', 'Justin Bieber', 'Shawn Mendes', 'Sam Smith'],
    answer: 0,
    explanation: 'Ed Sheeran lanzó "Shape of You" en 2017 como parte del álbum "÷".' },

  { id: 6, category: 'music', difficulty: 'media',
    question: '¿Qué grupo surcoreano tiene la canción "Dynamite"?',
    options: ['BLACKPINK', 'EXO', 'BTS', 'TWICE'],
    answer: 2,
    explanation: 'BTS lanzó "Dynamite" en 2020 y fue un éxito mundial.' },

  { id: 7, category: 'music', difficulty: 'difícil',
    question: '¿Quién compuso la "Novena Sinfonía"?',
    options: ['Mozart', 'Bach', 'Beethoven', 'Vivaldi'],
    answer: 2,
    explanation: 'Ludwig van Beethoven compuso la Novena Sinfonía, famosa por "Oda a la Alegría".' },

  { id: 8, category: 'music', difficulty: 'media',
    question: '¿Qué banda inglesa cantó "Wonderwall"?',
    options: ['Blur', 'Oasis', 'Pulp', 'Suede'],
    answer: 1,
    explanation: 'Oasis lanzó "Wonderwall" en 1995 en el álbum "(What\'s the Story) Morning Glory?".' },

  { id: 9, category: 'music', difficulty: 'fácil',
    question: '¿Quién es "La Diva de la Banda"?',
    options: ['Jenni Rivera', 'Selena', 'Ana Gabriel', 'Lola Beltrán'],
    answer: 0,
    explanation: 'Jenni Rivera fue conocida como "La Diva de la Banda".' },

  { id: 10, category: 'music', difficulty: 'media',
    question: '¿Qué cantante colombiano ganó el Grammy por "Enrique Iglesias"? No, ese no es, ¿quién cantó "Despacito"?',
    options: ['Maluma', 'J Balvin', 'Luis Fonsi', 'Carlos Vives'],
    answer: 2,
    explanation: 'Luis Fonsi interpretó "Despacito" junto a Daddy Yankee.' },

  { id: 11, category: 'music', difficulty: 'difícil',
    question: '¿Cuál fue el primer álbum de los Beatles?',
    options: ['Abbey Road', 'Sgt. Pepper\'s', 'Please Please Me', 'Help!'],
    answer: 2,
    explanation: '"Please Please Me" fue el álbum debut de The Beatles en 1963.' },

  { id: 12, category: 'music', difficulty: 'media',
    question: '¿Qué cantante mexicano es conocido como "El Rey de la Música Popular"?',
    options: ['Vicente Fernández', 'Alejandro Fernández', 'Pepe Aguilar', 'Luis Miguel'],
    answer: 0,
    explanation: 'Vicente Fernández fue conocido como "El Rey de la Música Popular Mexicana".' },

  { id: 13, category: 'music', difficulty: 'fácil',
    question: '¿Quién cantó "Like a Virgin"?',
    options: ['Madonna', 'Cyndi Lauper', 'Whitney Houston', 'Cher'],
    answer: 0,
    explanation: 'Madonna lanzó "Like a Virgin" en 1984, uno de sus mayores éxitos.' },

  { id: 14, category: 'music', difficulty: 'media',
    question: '¿Qué género musical originó en Jamaica?',
    options: ['Salsa', 'Reggae', 'Cumbia', 'Merengue'],
    answer: 1,
    explanation: 'El reggae se originó en Jamaica a finales de los 60, con Bob Marley como su máximo exponente.' },

  { id: 15, category: 'music', difficulty: 'difícil',
    question: '¿Qué cantante tiene el récord de más Grammys ganados?',
    options: ['Beyoncé', 'Georg Solti', 'Quincy Jones', 'Stevie Wonder'],
    answer: 1,
    explanation: 'Georg Solti tiene 31 Grammys, Beyoncé tiene 32, pero Solti tiene el récord en solitario.' },

  // ========== ANIME (15 preguntas) ==========
  { id: 16, category: 'anime', difficulty: 'fácil',
    question: '¿Cuál es el nombre del protagonista de "Dragon Ball Z"?',
    options: ['Vegeta', 'Gohan', 'Goku', 'Piccolo'],
    answer: 2,
    explanation: 'Goku es el protagonista principal de Dragon Ball Z.' },

  { id: 17, category: 'anime', difficulty: 'media',
    question: 'En "Naruto", ¿cómo se llama el demonio zorro de 9 colas dentro de Naruto?',
    options: ['Kurama', 'Shukaku', 'Matatabi', 'Isobu'],
    answer: 0,
    explanation: 'Kurama es el Kyuubi (zorro de 9 colas) sellado dentro de Naruto.' },

  { id: 18, category: 'anime', difficulty: 'fácil',
    question: '¿Quién es el capitán de los Piratas de Sombrero de Paja en "One Piece"?',
    options: ['Roronoa Zoro', 'Sanji', 'Monkey D. Luffy', 'Usopp'],
    answer: 2,
    explanation: 'Monkey D. Luffy es el capitán de los Piratas del Sombrero de Paja.' },

  { id: 19, category: 'anime', difficulty: 'media',
    question: '¿Qué anime presenta a un niño llamado "Senku" que revive la civilización?',
    options: ['Dr. Stone', 'Attack on Titan', 'My Hero Academia', 'Demon Slayer'],
    answer: 0,
    explanation: 'Senku Ishigami es el protagonista de Dr. Stone.' },

  { id: 20, category: 'anime', difficulty: 'fácil',
    question: '¿Cómo se llama el gato robot azul de "Doraemon"?',
    options: ['Doraemon', 'Dorami', 'Kibō', 'Nobita'],
    answer: 0,
    explanation: 'Doraemon es el famoso gato robot azul venido del futuro.' },

  { id: 21, category: 'anime', difficulty: 'media',
    question: 'En "Death Note", ¿qué objeto usa Light Yagami para matar?',
    options: ['Un diario', 'Una pluma', 'Un teléfono', 'Un espejo'],
    answer: 0,
    explanation: 'Light Yagami usa una libreta llamada "Death Note" para matar.' },

  { id: 22, category: 'anime', difficulty: 'difícil',
    question: '¿Qué estudio animó "El Viaje de Chihiro"?',
    options: ['Kyoto Animation', 'Studio Ghibli', 'Toei Animation', 'Madhouse'],
    answer: 1,
    explanation: 'Studio Ghibli y Hayao Miyazaki produjeron "El Viaje de Chihiro".' },

  { id: 23, category: 'anime', difficulty: 'media',
    question: '¿Cómo se llama la técnica característica de Goku para volverse más fuerte?',
    options: ['Kaioken', 'Kamehameha', 'Genkidama', 'Super Saiyajin'],
    answer: 3,
    explanation: 'Super Saiyajin es la transformación icónica de Goku.' },

  { id: 24, category: 'anime', difficulty: 'fácil',
    question: '¿Qué anime trata sobre un niño que caza demonios con una hermana convertida en demonio?',
    options: ['Jujutsu Kaisen', 'Demon Slayer', 'Tokyo Ghoul', 'Blue Exorcist'],
    answer: 1,
    explanation: 'Tanjiro Kamado caza demonios en Demon Slayer para curar a su hermana Nezuko.' },

  { id: 25, category: 'anime', difficulty: 'media',
    question: '¿Cuál es el nombre del protagonista de "Attack on Titan"?',
    options: ['Eren Yeager', 'Levi Ackerman', 'Armin Arlert', 'Mikasa Ackerman'],
    answer: 0,
    explanation: 'Eren Yeager es el protagonista principal de Shingeki no Kyojin.' },

  { id: 26, category: 'anime', difficulty: 'difícil',
    question: '¿Qué poder tiene Luffy de One Piece?',
    options: ['Gomu Gomu no Mi', 'Mera Mera no Mi', 'Hie Hie no Mi', 'Yami Yami no Mi'],
    answer: 0,
    explanation: 'Luffy comió la fruta Gomu Gomu, volviéndose hombre de goma.' },

  { id: 27, category: 'anime', difficulty: 'fácil',
    question: '¿Cómo se llama el sensei de Naruto?',
    options: ['Kakashi Hatake', 'Jiraiya', 'Orochimaru', 'Tsunade'],
    answer: 0,
    explanation: 'Kakashi Hatake fue el sensei del Equipo 7 (Naruto, Sasuke, Sakura).' },

  { id: 28, category: 'anime', difficulty: 'media',
    question: 'En "Pokémon", ¿cuál es el inicial de tipo fuego de Kanto?',
    options: ['Charmander', 'Squirtle', 'Bulbasaur', 'Pikachu'],
    answer: 0,
    explanation: 'Charmander es el inicial de tipo fuego de la región Kanto.' },

  { id: 29, category: 'anime', difficulty: 'difícil',
    question: '¿Quién es el creador de "Dragon Ball"?',
    options: ['Eiichiro Oda', 'Masashi Kishimoto', 'Akira Toriyama', 'Yoshihiro Togashi'],
    answer: 2,
    explanation: 'Akira Toriyama es el mangaka creador de Dragon Ball.' },

  { id: 30, category: 'anime', difficulty: 'media',
    question: '¿Qué anime presenta caballeros que protegen a la diosa Atenea?',
    options: ['Saint Seiya', 'Ranma ½', 'Inuyasha', 'Sailor Moon'],
    answer: 0,
    explanation: 'Los Caballeros del Zodiaco (Saint Seiya) protegen a Atenea.' },

  // ========== CARICATURAS CLÁSICAS (15 preguntas) ==========
  { id: 31, category: 'cartoons', difficulty: 'fácil',
    question: '¿Cómo se llama el niño del Chavo del 8?',
    options: ['Quico', 'Chilindrina', 'Chavo', 'Ñoño'],
    answer: 2,
    explanation: 'El Chavo es el protagonista de la vecindad del Chavo del 8.' },

  { id: 32, category: 'cartoons', difficulty: 'fácil',
    question: '¿Qué color es la Pantera Rosa?',
    options: ['Azul', 'Verde', 'Rosa', 'Amarilla'],
    answer: 2,
    explanation: 'La Pantera Rosa es de color rosa, como su nombre indica.' },

  { id: 33, category: 'cartoons', difficulty: 'media',
    question: 'En "El Gato y su Pandilla", ¿cómo se llama el líder de la pandilla?',
    options: ['Benito', 'El Gato', 'Pablo', 'Pancho'],
    answer: 1,
    explanation: 'El Gato es el líder carismático de la pandilla.' },

  { id: 34, category: 'cartoons', difficulty: 'fácil',
    question: '¿Quién es el vecino gruñón de "El Chavo del 8"?',
    options: ['Don Ramón', 'Señor Barriga', 'Jaimito el Cartero', 'Profesor Jirafales'],
    answer: 0,
    explanation: 'Don Ramón es el vecino cascarrabias de la vecindad.' },

  { id: 35, category: 'cartoons', difficulty: 'media',
    question: '¿Qué caricatura presenta a un perro llamado "Scooby-Doo"?',
    options: ['Scooby-Doo', 'Tom y Jerry', 'Los Picapiedra', 'Los Supersónicos'],
    answer: 0,
    explanation: 'Scooby-Doo es el gran danés cobarde que resuelve misterios.' },

  { id: 36, category: 'cartoons', difficulty: 'fácil',
    question: '¿Cómo se llaman el gato y el ratón que siempre pelean?',
    options: ['Silvestre y Piolín', 'Tom y Jerry', 'Itchy y Scratchy', 'Félix y Gus'],
    answer: 1,
    explanation: 'Tom (gato) y Jerry (ratón) son los famosos rivales de Hanna-Barbera.' },

  { id: 37, category: 'cartoons', difficulty: 'media',
    question: 'En "Los Simpson", ¿qué bebe Homero constantemente?',
    options: ['Coca-Cola', 'Cerveza Duff', 'Jugo de naranja', 'Café'],
    answer: 1,
    explanation: 'Homero Simpson es fanático de la cerveza Duff.' },

  { id: 38, category: 'cartoons', difficulty: 'fácil',
    question: '¿Quién es el amigo amarillo de Bob Esponja?',
    options: ['Calamardo', 'Patricio Estrella', 'Arenita', 'Don Cangrejo'],
    answer: 1,
    explanation: 'Patricio Estrella es el mejor amigo de Bob Esponja.' },

  { id: 39, category: 'cartoons', difficulty: 'media',
    question: 'En "El Pájaro Loco", ¿qué especie de pájaro es el protagonista?',
    options: ['Pájaro carpintero', 'Cuervo', 'Loro', 'Paloma'],
    answer: 0,
    explanation: 'Woody Woodpecker (Pájaro Loco) es un pájaro carpintero.' },

  { id: 40, category: 'cartoons', difficulty: 'difícil',
    question: '¿Cuál es el nombre del profesor de "Los Supersónicos"?',
    options: ['Profesor Huesos', 'Profesor Locovoz', 'Profesor Omnius', 'Profesor Cerebrón'],
    answer: 1,
    explanation: 'El profesor Locovoz creó a Robina, la robot de la familia.' },

  { id: 41, category: 'cartoons', difficulty: 'media',
    question: '¿Cómo se llama el niño que siempre dice "¡Vaya, vaya, vaya!" en "El Chavo"?',
    options: ['Quico', 'Ñoño', 'Jaimito', 'Godínez'],
    answer: 0,
    explanation: 'Quico es conocido por su frase "¡Vaya, vaya, vaya!"' },

  { id: 42, category: 'cartoons', difficulty: 'fácil',
    question: '¿Qué caricatura vive en Piedras Negras?',
    options: ['Los Picapiedra', 'Los Supersónicos', 'Los Autos Locos', 'Don Gato'],
    answer: 0,
    explanation: 'Los Picapiedra viven en la prehistórica ciudad de Piedras Negras.' },

  { id: 43, category: 'cartoons', difficulty: 'media',
    question: '¿Cómo se llama la mascota de "Don Gato y su Pandilla"?',
    options: ['Benito', 'Cucho', 'Demóstenes', 'Panza'],
    answer: 2,
    explanation: 'Demóstenes es el ratón que le gusta molestar a Don Gato.' },

  { id: 44, category: 'cartoons', difficulty: 'difícil',
    question: 'En "La Pantera Rosa", ¿qué hace el inspector?',
    options: ['Perseguir a la pantera', 'Resolver crímenes', 'Conducir un auto', 'Cazar mariposas'],
    answer: 0,
    explanation: 'El inspector Clouseau persigue torpemente a la Pantera Rosa.' },

  { id: 45, category: 'cartoons', difficulty: 'media',
    question: '¿Quién es el creador de "El Chavo del 8"?',
    options: ['Chespirito', 'Cantinflas', 'Tin Tan', 'Capulina'],
    answer: 0,
    explanation: 'Roberto Gómez Bolaños "Chespirito" creó al Chavo del 8.' }
];

export const CATEGORY_COLORS = {
  'music':     { bg: '#1a2a3a', accent: '#60a5fa', text: '#93c5fd', name: '🎵 Música' },
  'anime':     { bg: '#2a1a3a', accent: '#c084fc', text: '#d8b4fe', name: '📺 Anime' },
  'cartoons':  { bg: '#3a2a1a', accent: '#fbbf24', text: '#fde68a', name: '🎨 Caricaturas' },
};

export const LETTERS = ['A', 'B', 'C', 'D'];
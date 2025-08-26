import img1 from '../assets/img/1.jpg';
import img2 from '../assets/img/2.jpg';
import img3 from '../assets/img/3.jpg';
import img4 from '../assets/img/4.jpg';
import img5 from '../assets/img/5.jpg';
import img6 from '../assets/img/6.jpg';
import img7 from '../assets/img/7.jpg';
import img8 from '../assets/img/8.jpg';
import img9 from '../assets/img/9.jpg';
import img10 from '../assets/img/10.jpg';
import img11 from '../assets/img/11.jpg';
import img12 from '../assets/img/12.jpg';
import img13 from '../assets/img/13.jpg';
import img14 from '../assets/img/14.jpg';
import img15 from '../assets/img/15.jpg';
import img16 from '../assets/img/16.jpg';
import img17 from '../assets/img/17.jpg';
import img18 from '../assets/img/18.jpg';
import img19 from '../assets/img/19.jpg';
import img20 from '../assets/img/20.jpg';
import img21 from '../assets/img/21.jpg';
import img22 from '../assets/img/22.jpg';
import img23 from '../assets/img/23.jpg';
import img24 from '../assets/img/24.jpg';
import img25 from '../assets/img/25.jpg';
import img26 from '../assets/img/26.jpg';
import img27 from '../assets/img/27.jpg';
import img28 from '../assets/img/28.jpg';
import img29 from '../assets/img/29.jpg';
import img30 from '../assets/img/30.jpg';
import img31 from '../assets/img/31.jpg';
import img32 from '../assets/img/32.jpg';
import img33 from '../assets/img/33.jpg';
import img34 from '../assets/img/34.jpg';
import img35 from '../assets/img/35.jpg';
import img36 from '../assets/img/36.jpg';
import img37 from '../assets/img/37.jpg';
import img38 from '../assets/img/38.jpg';
import img39 from '../assets/img/39.jpg';
import img40 from '../assets/img/40.jpg';
import img41 from '../assets/img/41.jpg';
import img42 from '../assets/img/42.jpg';
import img43 from '../assets/img/43.jpg';
import img44 from '../assets/img/44.jpg';
import img45 from '../assets/img/45.jpg';
import img46 from '../assets/img/46.jpg';
import img47 from '../assets/img/47.jpg';
import img48 from '../assets/img/48.jpg';
import img49 from '../assets/img/49.jpg';
import img50 from '../assets/img/50.jpg';
import img51 from '../assets/img/51.jpg';
import img52 from '../assets/img/52.jpg';
import img53 from '../assets/img/53.jpg';
import img54 from '../assets/img/54.jpg';
import img55 from '../assets/img/55.jpg';
import img56 from '../assets/img/56.jpg';
import img57 from '../assets/img/57.jpg';
import img58 from '../assets/img/58.jpg';
import img59 from '../assets/img/59.jpg';
import img60 from '../assets/img/60.jpg';
import img61 from '../assets/img/61.jpg';
import img62 from '../assets/img/62.jpg';
import img63 from '../assets/img/63.jpg';
import img64 from '../assets/img/64.jpg';
import img65 from '../assets/img/65.jpg';
import img66 from '../assets/img/66.jpg';
import img67 from '../assets/img/67.jpg';
import img68 from '../assets/img/68.jpg';
import img69 from '../assets/img/69.jpg';
import img70 from '../assets/img/70.jpg';
import img71 from '../assets/img/71.jpg';
import img72 from '../assets/img/72.jpg';
import img73 from '../assets/img/73.jpg';
import img74 from '../assets/img/74.jpg';
import img75 from '../assets/img/75.jpg';
import img76 from '../assets/img/76.jpg';
import img77 from '../assets/img/77.jpg';
import img78 from '../assets/img/78.jpg';
import img79 from '../assets/img/79.jpg';
import img80 from '../assets/img/80.jpg';
import img81 from '../assets/img/81.jpg';
import img82 from '../assets/img/82.jpg';
import img83 from '../assets/img/83.jpg';
import img84 from '../assets/img/84.jpg';
import img85 from '../assets/img/85.jpg';
import img86 from '../assets/img/86.jpg';
import img87 from '../assets/img/87.jpg';
import img88 from '../assets/img/88.jpg';
import img89 from '../assets/img/89.jpg';
import img90 from '../assets/img/90.jpg';
import img91 from '../assets/img/91.jpg';
import img92 from '../assets/img/92.jpg';
import img93 from '../assets/img/93.jpg';
import img94 from '../assets/img/94.jpg';
import img95 from '../assets/img/95.jpg';
import img96 from '../assets/img/96.jpg';
import img97 from '../assets/img/97.jpg';
import img98 from '../assets/img/98.jpg';
import img99 from '../assets/img/99.jpg';
import img100 from '../assets/img/100.jpg';

const productos = [
  {
    id: 1,
    img: img1,
    galeria: [img1, img2, img3, img4, img5, img6],
    tipo: "LAPTOP",
    estado: "",
    nombre: "Asus ProArt P16",
    descripcion: "A high-performance laptop with an AMD Ryzen AI 9 HX 370 processor, Nvidia RTX 4070 graphics, and a 16-inch OLED display, ideal for creative professionals and video editing.",
    precio: 1999,
    resenias: [
      { autor: "María", fecha: "15/07/2025", estrellas: 5, comentario: "Pantalla OLED increíble para edición; colores muy precisos." },
      { autor: "Luis", fecha: "01/08/2025", estrellas: 4, comentario: "En Premiere exporta rápido; la batería cae con tareas pesadas." },
      { autor: "Camila", fecha: "22/05/2025", estrellas: 3, comentario: "Base se calienta tras largas sesiones; compré un cooler y ok." },
      { autor: "Renato", fecha: "05/08/2025", estrellas: 5, comentario: "Teclado cómodo y chasis sólido; ideal para Blender y Photoshop." }
    ]
  },
  {
    id: 2,
    img: img2,
    galeria: [img1, img2, img3, img4, img5, img6],
    tipo: "LAPTOP",
    estado: "",
    nombre: "Apple MacBook Pro 14 (2024)",
    descripcion: "Powered by the M4 Pro chip, this laptop offers exceptional performance for music production, video editing, and multitasking with a 14-inch Mini LED display.",
    precio: 1999,
    resenias: []
  },
  {
    id: 3,
    img: img3,
    tipo: "LAPTOP",
    estado: "",
    nombre: "Dell XPS 14 Premium",
    descripcion: "A sleek Windows laptop with Intel Core Ultra 7, Intel Arc graphics, and a 14.5-inch 3.2K OLED display, perfect for productivity and creative tasks.",
    precio: 1499,
    resenias: [
      { autor: "Jorge", fecha: "09/04/2025", estrellas: 4, comentario: "Pantalla nítida y buen teclado; batería ~8 h en oficina." },
      { autor: "Daniela", fecha: "21/06/2025", estrellas: 5, comentario: "Silenciosa en tareas normales, rápida con Lightroom." },
      { autor: "Gonzalo", fecha: "02/03/2025", estrellas: 3, comentario: "Se oye el ventilador exportando video, nada grave." },
      { autor: "Sofía", fecha: "27/07/2025", estrellas: 4, comentario: "Ligera y con buenos puertos; cargador algo grande." }
    ]
  },
  {
    id: 4,
    img: img4,
    tipo: "LAPTOP",
    estado: "",
    nombre: "Lenovo Yoga 9i 2-in-1 (Gen 10)",
    descripcion: "A versatile 2-in-1 laptop with Intel Core Ultra 7 258V, Intel Arc 140V graphics, and a 14-inch OLED touchscreen, ideal for creators and professionals.",
    precio: 1599,
    resenias: []
  },
  {
    id: 5,
    img: img5,
    tipo: "LAPTOP",
    estado: "",
    nombre: "Asus Zenbook 14 OLED",
    descripcion: "A thin-and-light laptop with AMD Ryzen 7 8840HS processor, Radeon 780M graphics, and a 14-inch 1200p OLED display, offering snappy performance and portability.",
    precio: 1299,
    resenias: [
      { autor: "Paola", fecha: "28/03/2025", estrellas: 3, comentario: "Se entibia al compilar, pero no baja rendimiento." },
      { autor: "Sebastián", fecha: "05/07/2025", estrellas: 4, comentario: "Buen teclado y SSD veloz. Contento." }
    ]
  },
  {
    id: 6,
    img: img6,
    tipo: "LAPTOP",
    estado: "",
    nombre: "Acer Swift Go 14 (2024)",
    descripcion: "A budget-friendly ultraportable with Intel Core Ultra 9 185H, up to 32GB RAM, and a 2.8K OLED display, suitable for music production and everyday tasks.",
    precio: 999,
    resenias: [
      { autor: "Bruno", fecha: "19/04/2025", estrellas: 3, comentario: "Ventiladores audibles bajo carga, normal en equipos delgados." },
      { autor: "Alejandro", fecha: "07/02/2025", estrellas: 4, comentario: "Arranca rápido y no se traba con varias apps." },
      { autor: "Rosa", fecha: "29/06/2025", estrellas: 5, comentario: "Perfecta para estudio y edición ligera." }
    ]
  },
  {
    id: 7,
    img: img7,
    tipo: "LAPTOP",
    estado: "",
    nombre: "HP Chromebook Plus 15.6-inch",
    descripcion: "A Chromebook with Intel Core 3 100U processor, 8GB RAM, and a 15.6-inch FHD AMOLED display, optimized for productivity and Android apps.",
    precio: 599,
    resenias: [
      { autor: "María", fecha: "08/11/2024", estrellas: 4, comentario: "ChromeOS va fluido; pantalla grande para multitarea." },
      { autor: "Luis", fecha: "21/02/2025", estrellas: 3, comentario: "Buen teclado; apps Android algunas no escalan perfecto." },
      { autor: "Camila", fecha: "17/03/2025", estrellas: 4, comentario: "Batería ~10 h en navegación. Recomendado para clases." },
      { autor: "Renato", fecha: "26/05/2025", estrellas: 5, comentario: "Se siente ágil y la AMOLED luce muy bien." }
    ]
  },
  {
    id: 8,
    img: img8,
    tipo: "LAPTOP",
    estado: "",
    nombre: "Asus ROG Zephyrus G14 (2025)",
    descripcion: "A gaming laptop with AMD Ryzen 9-series processor, Nvidia RTX 50-series graphics, and a 14-inch 120Hz OLED display for smooth gameplay.",
    precio: 1799,
    resenias: [
      { autor: "Valentina", fecha: "03/06/2025", estrellas: 5, comentario: "120 Hz + OLED: juegos se ven espectaculares." },
      { autor: "Pedro", fecha: "12/07/2025", estrellas: 4, comentario: "Batería justa jugando (~2.5 h), normal para gaming." },
      { autor: "Andrés", fecha: "22/05/2025", estrellas: 3, comentario: "Se calienta en sesiones largas; base ventilada ayuda." },
      { autor: "Lucía", fecha: "01/08/2025", estrellas: 5, comentario: "Portátil y potente; perfecto para viajar y jugar." }
    ]
  },
  {
    id: 9,
    img: img9,
    tipo: "LAPTOP",
    estado: "LO MAS VENDIDO",
    nombre: "Microsoft Surface Laptop 7th Edition 15",
    descripcion: "A Copilot+ PC with Qualcomm Snapdragon X Elite, 120Hz display, and exceptional battery life, designed for Windows 11 AI features and productivity.",
    precio: 1399,
    resenias: [
      { autor: "Sofía", fecha: "25/07/2025", estrellas: 5, comentario: "Teclado cómodo y cámaras excelentes para videollamadas." }
    ]
  },
  {
    id: 10,
    img: img10,
    tipo: "LAPTOP",
    estado: "DESCUENTO",
    nombre: "Acer Chromebook Plus Spin 714",
    descripcion: "A premium 2-in-1 Chromebook with Intel Core Ultra processor, 14-inch 1200p touchscreen, and Thunderbolt 4 ports for versatile connectivity.",
    precio: 699,
    resenias: [
      { autor: "Carla", fecha: "07/02/2025", estrellas: 4, comentario: "Convertible útil; lápiz responde bien." },
      { autor: "Diego", fecha: "16/03/2025", estrellas: 3, comentario: "Pantalla correcta; brillo podría ser mayor al aire libre." },
      { autor: "Rodrigo", fecha: "28/05/2025", estrellas: 4, comentario: "Thunderbolt 4 suma; buen rendimiento de ChromeOS." },
      { autor: "Ximena", fecha: "19/06/2025", estrellas: 5, comentario: "Por el precio en oferta, excelente compra." }
    ]
  },
  {
    id: 11,
    img: img11,
    tipo: "LAPTOP",
    estado: "",
    nombre: "Samsung Galaxy Chromebook Plus",
    descripcion: "A lightweight Chromebook with Intel Core 3 100U, 8GB RAM, and a 15.6-inch FHD AMOLED display, perfect for ChromeOS and Google Gemini AI.",
    precio: 649,
    resenias: [
      { autor: "Marco", fecha: "02/04/2025", estrellas: 3, comentario: "Altavoces normales; teclado cómodo." },
      { autor: "Paola", fecha: "14/05/2025", estrellas: 4, comentario: "Rápido para tareas diarias y apps de Google." },
      { autor: "Sebastián", fecha: "23/07/2025", estrellas: 5, comentario: "Batería aguanta la jornada completa." }
    ]
  },
  {
    id: 12,
    img: img12,
    tipo: "LAPTOP",
    estado: "",
    nombre: "Lenovo Chromebook Plus 14",
    descripcion: "A powerful Chromebook with MediaTek Kompanio Ultra 910, 16GB RAM, and a 14-inch FHD OLED touchscreen, ideal for multitasking and Android apps.",
    precio: 549,
    resenias: [
      { autor: "Antonella", fecha: "05/12/2024", estrellas: 4, comentario: "Multitarea fluida con 16GB; táctil responde bien." },
      { autor: "Rosa", fecha: "29/05/2025", estrellas: 5, comentario: "Excelente autonomía para clases." }
    ]
  },
  {
    id: 13,
    img: img13,
    tipo: "LAPTOP",
    estado: "",
    nombre: "Dell Precision 5690",
    descripcion: "A mobile workstation with Intel Core Ultra 9 185H, Nvidia RTX 5000 Ada GPU, and a 16-inch 4K OLED touchscreen for professional design and rendering.",
    precio: 2499,
    resenias: [
       { autor: "Renato", fecha: "31/07/2025", estrellas: 5, comentario: "Pantalla 4K OLED perfecta para CAD." }
    ]
  },
  {
    id: 14,
    img: img14,
    tipo: "LAPTOP",
    estado: "LO MAS VENDIDO",
    nombre: "Asus Vivobook S 14",
    descripcion: "A compact laptop with Intel Core Ultra 5 226V, 17-hour battery life, and a 14-inch OLED display, great for students and professionals.",
    precio: 999,
    resenias: [
      { autor: "Andrés", fecha: "16/04/2025", estrellas: 4, comentario: "Rinde bien en ofimática y ediciones ligeras." },
      { autor: "Lucía", fecha: "22/07/2025", estrellas: 5, comentario: "Teclado cómodo; ideal para universidad." }
    ]
  },
  {
    id: 15,
    img: img15,
    tipo: "LAPTOP",
    estado: "",
    nombre: "HP ZBook Fury 16 G11",
    descripcion: "A high-performance workstation with Intel Core Ultra 9, Nvidia RTX 4060 GPU, and a 16-inch mini LED display for demanding professional tasks.",
    precio: 2299,
    resenias: [
      { autor: "Jorge", fecha: "05/02/2025", estrellas: 5, comentario: "Equipo profesional; estable bajo cargas largas." },
      { autor: "Daniela", fecha: "19/06/2025", estrellas: 4, comentario: "Mini LED muy brillante; ventiladores audibles." },
      { autor: "Gonzalo", fecha: "01/05/2025", estrellas: 3, comentario: "Pesada para llevar diario, pero rinde a tope." },
      { autor: "Sofía", fecha: "13/07/2025", estrellas: 5, comentario: "Ideal para 3D y renders nocturnos." }
    ]
  },
  {
    id: 16,
    img: img16,
    tipo: "LAPTOP",
    estado: "",
    nombre: "Framework Laptop 13 (2025)",
    descripcion: "A modular laptop with AMD Ryzen AI 300 processor, customizable components, and a 13.5-inch display, designed for easy upgrades and repairs.",
    precio: 1199,
    resenias: [
      { autor: "Diego", fecha: "26/05/2025", estrellas: 4, comentario: "Buen rendimiento y fácil mantenimiento." },
      { autor: "Rodrigo", fecha: "14/04/2025", estrellas: 3, comentario: "El ventilador se nota compiliendo; nada grave." },
      { autor: "Ximena", fecha: "30/07/2025", estrellas: 5, comentario: "Perfecta para reparar/actualizar con el tiempo." }
    ]
  },
  {
    id: 17,
    img: img17,
    tipo: "LAPTOP",
    estado: "",
    nombre: "Lenovo Yoga Pro 9i 16 Gen 9",
    descripcion: "A desktop replacement laptop with Intel Core Ultra 9, Nvidia RTX 4060, and a 16-inch mini LED display for productivity and gaming.",
    precio: 1899,
    resenias: [
      { autor: "Paola", fecha: "09/03/2025", estrellas: 3, comentario: "Cargador grande; rendimiento top." },
      { autor: "Sebastián", fecha: "18/06/2025", estrellas: 4, comentario: "Buen sonido y teclado; recomendado." }
    ]
  },
  {
    id: 18,
    img: img18,
    tipo: "LAPTOP",
    estado: "DESCUENTO",
    nombre: "Acer Aspire 14 AI",
    descripcion: "A budget Copilot+ PC with Intel Core Ultra 5 226V, 40 TOPS NPU, and long battery life, ideal for everyday use and AI tasks.",
    precio: 499,
    resenias: [
      { autor: "Alejandro", fecha: "06/03/2025", estrellas: 4, comentario: "Rinde bien para oficina y estudios." },
      { autor: "Rosa", fecha: "02/06/2025", estrellas: 5, comentario: "Silenciosa y rápida para el día a día." }
    ]
  },
  {
    id: 19,
    img: img19,
    tipo: "LAPTOP",
    estado: "",
    nombre: "Asus ProArt PX13",
    descripcion: "A 2-in-1 convertible laptop with AMD Ryzen processor, Nvidia RTX 4050 graphics, and a 13-inch OLED touchscreen, tailored for creators.",
    precio: 1699,
    resenias: [
      { autor: "Luis", fecha: "22/06/2025", estrellas: 4, comentario: "RTX 4050 va bien en apps creativas." },
      { autor: "Camila", fecha: "15/04/2025", estrellas: 3, comentario: "Se siente la temperatura en modo tablet." },
      { autor: "Renato", fecha: "01/07/2025", estrellas: 5, comentario: "Excelente para dibujar y editar en movilidad." }
    ]
  },
  {
    id: 20,
    img: img20,
    tipo: "LAPTOP",
    estado: "",
    nombre: "Apple MacBook Air M4 15-inch",
    descripcion: "A lightweight laptop with M4 chip, 10-core GPU, and a 15-inch Liquid Retina display, offering up to 18 hours of battery life for productivity.",
    precio: 1199,
    resenias: [
      { autor: "Valentina", fecha: "12/06/2025", estrellas: 5, comentario: "Silencioso y con batería real de 12–14 h." },
      { autor: "Pedro", fecha: "28/07/2025", estrellas: 4, comentario: "Pantalla grande y ligera para llevar." },
      { autor: "Andrés", fecha: "09/04/2025", estrellas: 3, comentario: "Brillo ok en interiores; al sol se queda corta." },
      { autor: "Lucía", fecha: "05/08/2025", estrellas: 5, comentario: "Perfecto para ofimática y edición ligera." }
    ]
  },

  /* ========================= DESKTOP ========================= */

  {
    id: 21,
    img: img21,
    tipo: "DESKTOP",
    estado: "",
    nombre: "Framework Desktop",
    descripcion: "A compact AI workstation powered by AMD Ryzen AI Max+ 395 processor, offering up to 126 TOPS AI performance and dual 10Gbps LAN ports.",
    precio: 1299,
    resenias: [
      { autor: "Sofía", fecha: "10/06/2025", estrellas: 5, comentario: "LAN 10Gbps útil en mi red de trabajo." }
    ]
  },
  {
    id: 22,
    img: img22,
    tipo: "DESKTOP",
    estado: "",
    nombre: "Dell XPS Desktop 8960",
    descripcion: "A high-performance desktop with Intel Core i9-14900K, Nvidia RTX 4080, and 32GB RAM, ideal for gaming and content creation.",
    precio: 2199,
    resenias: [
      { autor: "Rodrigo", fecha: "27/04/2025", estrellas: 3, comentario: "Trae algo de bloatware; lo quité y listo." },
      { autor: "Ximena", fecha: "08/06/2025", estrellas: 5, comentario: "Muy estable con proyectos largos." }
    ]
  },
  {
    id: 23,
    img: img23,
    tipo: "DESKTOP",
    estado: "LO MAS VENDIDO",
    nombre: "HP Omen 45L",
    descripcion: "A gaming desktop with AMD Ryzen 9 7900X, Nvidia RTX 4090, and liquid cooling, designed for high-end gaming and multitasking.",
    precio: 2499,
    resenias: [
      { autor: "Paola", fecha: "25/03/2025", estrellas: 4, comentario: "Fácil de limpiar y ampliar." },
      { autor: "Sebastián", fecha: "14/05/2025", estrellas: 5, comentario: "En 4K todo en ultra sin problemas." }
    ]
  },
  {
    id: 24,
    img: img24,
    tipo: "DESKTOP",
    estado: "",
    nombre: "Lenovo Legion Tower 7i",
    descripcion: "A powerful gaming PC with Intel Core i9-14900KF, Nvidia RTX 4080, and 64GB RAM, optimized for AAA gaming and streaming.",
    precio: 2699,
    resenias: [
      { autor: "Bruno", fecha: "07/04/2025", estrellas: 4, comentario: "Cableado limpio; interior espacioso." },
      { autor: "Alejandro", fecha: "30/03/2025", estrellas: 3, comentario: "Trae software extra; desinstalar y listo." },
      { autor: "Rosa", fecha: "20/06/2025", estrellas: 5, comentario: "RTX 4080 vuela en 1440p." }
    ]
  },
  {
    id: 25,
    img: img25,
    tipo: "DESKTOP",
    estado: "",
    nombre: "Alienware Aurora R16",
    descripcion: "A sleek gaming desktop with Intel Core i7-14700F, Nvidia RTX 4070, and 32GB RAM, offering excellent performance and cooling.",
    precio: 1899,
    resenias: [
      { autor: "Luis", fecha: "15/03/2025", estrellas: 4, comentario: "1440p alto sin problemas; silencioso." },
      { autor: "Camila", fecha: "19/04/2025", estrellas: 3, comentario: "Algo de coil whine leve a fps altos." },
      { autor: "Renato", fecha: "01/06/2025", estrellas: 5, comentario: "Fácil de ampliar SSD y RAM." }
    ]
  },
  {
    id: 26,
    img: img26,
    tipo: "DESKTOP",
    estado: "DESCUENTO",
    nombre: "Corsair Vengeance i7500",
    descripcion: "A high-performance desktop with Intel Core i9-13900K, Nvidia RTX 4090, and 64GB DDR5 RAM, built for gaming and creative workloads.",
    precio: 2999,
    resenias: [
      { autor: "Valentina", fecha: "04/01/2025", estrellas: 5, comentario: "Rinde increíble en 3D y edición." },
      { autor: "Pedro", fecha: "12/03/2025", estrellas: 4, comentario: "Buen airflow; algo grande el chasis." },
      { autor: "Andrés", fecha: "06/05/2025", estrellas: 3, comentario: "Traía drivers desactualizados; actualicé y perfecto." },
      { autor: "Lucía", fecha: "18/06/2025", estrellas: 5, comentario: "Calidad de componentes de primera." }
    ]
  },
  {
    id: 27,
    img: img27,
    tipo: "DESKTOP",
    estado: "",
    nombre: "MSI Aegis RS2",
    descripcion: "A gaming PC with AMD Ryzen 7 7800X3D, Nvidia RTX 4070 Ti, and 32GB RAM, offering excellent performance for gaming and multitasking.",
    precio: 1999,
    resenias: [
      { autor: "Sofía", fecha: "09/06/2025", estrellas: 5, comentario: "Muy buen equilibrio precio/rendimiento." }
    ]
  },
  {
    id: 28,
    img: img28,
    tipo: "DESKTOP",
    estado: "LO MAS VENDIDO",
    nombre: "ASUS ROG Strix G16",
    descripcion: "A compact gaming desktop with Intel Core i7-13700F, Nvidia RTX 4060, and 16GB RAM, ideal for mid-range gaming setups.",
    precio: 1499,
    resenias: [
      { autor: "Rodrigo", fecha: "07/05/2025", estrellas: 4, comentario: "Fácil de limpiar; acceso rápido." },
      { autor: "Ximena", fecha: "21/06/2025", estrellas: 5, comentario: "Calidad/precio excelente." }
    ]
  },
  {
    id: 29,
    img: img29,
    tipo: "DESKTOP",
    estado: "",
    nombre: "CyberPowerPC Gamer Supreme",
    descripcion: "A high-end desktop with AMD Ryzen 9 7950X, Nvidia RTX 4080, and 32GB DDR5 RAM, designed for gaming and professional tasks.",
    precio: 2399,
    resenias: [
      { autor: "Paola", fecha: "30/03/2025", estrellas: 3, comentario: "Traía Windows con bloat; lo reinstalé." },
      { autor: "Sebastián", fecha: "25/06/2025", estrellas: 5, comentario: "Muy estable para streams largos." }
    ]
  },
  {
    id: 30,
    img: img30,
    tipo: "DESKTOP",
    estado: "",
    nombre: "iBuyPower SlateMesh",
    descripcion: "A gaming desktop with Intel Core i7-13700KF, Nvidia RTX 4070, and 32GB RAM, offering great value for performance.",
    precio: 1799,
    resenias: [
      { autor: "Bruno", fecha: "18/03/2025", estrellas: 4, comentario: "1440p alto estable; temperaturas correctas." },
      { autor: "Alejandro", fecha: "07/04/2025", estrellas: 3, comentario: "Software RGB molesto; desinstalé." },
      { autor: "Rosa", fecha: "16/06/2025", estrellas: 5, comentario: "Silencioso en reposo, potente en juegos." }
    ]
  },
  {
    id: 31,
    img: img31,
    tipo: "DESKTOP",
    estado: "",
    nombre: "NZXT Player: Three",
    descripcion: "A pre-built gaming PC with AMD Ryzen 7 7700X, Nvidia RTX 4070 Ti, and 32GB RAM, designed for high-performance gaming.",
    precio: 2099,
    resenias: [
      { autor: "Luis", fecha: "20/03/2025", estrellas: 4, comentario: "Muy buen rendimiento a 1440p." },
      { autor: "Camila", fecha: "28/04/2025", estrellas: 3, comentario: "Algo ruidoso en cargas largas." },
      { autor: "Renato", fecha: "11/06/2025", estrellas: 5, comentario: "Listo para usar, sin complicaciones." }
    ]
  },
  {
    id: 32,
    img: img32,
    tipo: "DESKTOP",
    estado: "",
    nombre: "Acer Predator Orion 7000",
    descripcion: "A gaming desktop with Intel Core i9-13900KF, Nvidia RTX 4090, and 64GB RAM, built for extreme gaming and content creation.",
    precio: 2999,
    resenias: []
  },
  {
    id: 33,
    img: img33,
    tipo: "DESKTOP",
    estado: "",
    nombre: "Maingear MG-1",
    descripcion: "A customizable gaming PC with AMD Ryzen 9 7900X, Nvidia RTX 4080, and 32GB RAM, offering premium performance and aesthetics.",
    precio: 2599,
    resenias: [
     { autor: "Sofía", fecha: "20/06/2025", estrellas: 5, comentario: "Rinde excelente en creativo y juegos." }
    ]
  },
  {
    id: 34,
    img: img34,
    tipo: "DESKTOP",
    estado: "",
    nombre: "Origin PC Chronos",
    descripcion: "A compact desktop with Intel Core i7-14700KF, Nvidia RTX 4070, and 32GB RAM, ideal for small spaces and high performance.",
    precio: 1999,
    resenias: [
      { autor: "Carla", fecha: "10/02/2025", estrellas: 5, comentario: "Mini-ITX bien ventilado; sorprende lo fresco." },
      { autor: "Diego", fecha: "25/03/2025", estrellas: 4, comentario: "Rinde fuerte a 1440p en chasis pequeño." },
      { autor: "Rodrigo", fecha: "09/05/2025", estrellas: 3, comentario: "Algo de ruido en pico, aceptable." },
      { autor: "Ximena", fecha: "15/06/2025", estrellas: 5, comentario: "Perfecto si buscas algo compacto." }
    ]
  },
  {
    id: 35,
    img: img35,
    tipo: "DESKTOP",
    estado: "LO MAS VENDIDO",
    nombre: "HP Envy TE01",
    descripcion: "A versatile desktop with Intel Core i7-13700, Nvidia RTX 3060, and 16GB RAM, suitable for productivity and light gaming.",
    precio: 1299,
    resenias: [
      { autor: "Elena", fecha: "06/01/2025", estrellas: 5, comentario: "Muy equilibrado para casa/oficina." },
      { autor: "Marco", fecha: "14/03/2025", estrellas: 5, comentario: "Silencioso; fácil de ampliar." },
      { autor: "Paola", fecha: "08/05/2025", estrellas: 4, comentario: "RT 3060 suficiente para 1080p alto." },
      { autor: "Sebastián", fecha: "29/06/2025", estrellas: 5, comentario: "Excelente compra por el precio." }
    ]
  },
  {
    id: 36,
    img: img36,
    tipo: "DESKTOP",
    estado: "DESCUENTO",
    nombre: "Beelink GTR9 Pro",
    descripcion: "A mini PC with AMD Ryzen AI Max+ 395 processor, 140W performance, and 126 TOPS AI capabilities, ideal for compact workstations.",
    precio: 1099,
    resenias: [
     { autor: "Bruno", fecha: "22/04/2025", estrellas: 3, comentario: "Ventilador audible en IA; normal por tamaño." },
      { autor: "Alejandro", fecha: "01/05/2025", estrellas: 4, comentario: "Buen I/O y fácil de montar detrás del monitor." },
      { autor: "Rosa", fecha: "12/06/2025", estrellas: 5, comentario: "Potente para su tamaño; contenta." }
    ]
  },
  {
    id: 37,
    img: img37,
    tipo: "DESKTOP",
    estado: "",
    nombre: "Lenovo ThinkStation P3",
    descripcion: "A workstation desktop with Intel Core i9-13900, Nvidia RTX A4000, and 64GB RAM, designed for professional applications.",
    precio: 2799,
    resenias: [
      { autor: "Renato", fecha: "07/06/2025", estrellas: 5, comentario: "Listo para producción." }
    ]
  },
  {
    id: 38,
    img: img38,
    tipo: "DESKTOP",
    estado: "",
    nombre: "Dell Inspiron Desktop 3030",
    descripcion: "A budget-friendly desktop with Intel Core i5-14400, Intel UHD Graphics, and 16GB RAM, suitable for everyday tasks.",
    precio: 799,
    resenias: [
      { autor: "Andrés", fecha: "18/04/2025", estrellas: 4, comentario: "Silencioso y fácil de mantener." },
      { autor: "Lucía", fecha: "05/06/2025", estrellas: 5, comentario: "Muy fiable para el día a día." }
    ]
  },
  {
    id: 39,
    img: img39,
    tipo: "DESKTOP",
    estado: "",
    nombre: "ASUS ExpertCenter D9",
    descripcion: "A business desktop with Intel Core i7-13700, Nvidia GTX 1660 Super, and 32GB RAM, optimized for office productivity.",
    precio: 1399,
    resenias: [
      { autor: "Daniela", fecha: "21/03/2025", estrellas: 4, comentario: "Buen set de puertos y expansión." },
      { autor: "Gonzalo", fecha: "29/04/2025", estrellas: 3, comentario: "GPU justa para 3D; para oficina sobra." },
      { autor: "Sofía", fecha: "11/06/2025", estrellas: 5, comentario: "Silencioso, ideal para reuniones." }
    ]
  },
  {
    id: 40,
    img: img40,
    tipo: "DESKTOP",
    estado: "",
    nombre: "Acer Aspire TC-1780",
    descripcion: "An affordable desktop with Intel Core i5-13400, Intel UHD Graphics, and 16GB RAM, ideal for home and office use.",
    precio: 649,
    resenias: [
      { autor: "Carla", fecha: "10/11/2024", estrellas: 4, comentario: "Buen equipo para casa; muy silencioso." },
      { autor: "Diego", fecha: "12/02/2025", estrellas: 3, comentario: "No es para juegos, pero ofimática vuela." },
      { autor: "Rodrigo", fecha: "03/04/2025", estrellas: 4, comentario: "Trae todo listo para trabajar." },
      { autor: "Ximena", fecha: "22/06/2025", estrellas: 5, comentario: "Excelente relación calidad/precio." }
    ]
  },

  {
    id: 41,
    img: img41,
    tipo: "AUDIO",
    estado: "",
    nombre: "Bose QuietComfort Ultra Headphones",
    descripcion: "Wireless over-ear headphones with industry-leading noise cancellation, immersive audio, and up to 24 hours of battery life.",
    precio: 399,
    resenias: [ 
        { autor: "Sebastián", fecha: "09/06/2025", estrellas: 5, comentario: "Micrófono claro en llamadas." }
    ]
  },
  {
    id: 42,
    img: img42,
    tipo: "AUDIO",
    estado: "",
    nombre: "Sony WH-1000XM5",
    descripcion: "Premium noise-canceling headphones with high-resolution audio, 30-hour battery life, and advanced touch controls.",
    precio: 349,
    resenias: []
  },
  {
    id: 43,
    img: img43,
    tipo: "AUDIO",
    estado: "LO MAS VENDIDO",
    nombre: "Apple AirPods Pro 2",
    descripcion: "True wireless earbuds with active noise cancellation, spatial audio, and up to 6 hours of listening time per charge.",
    precio: 249,
    resenias: [
      { autor: "Renato", fecha: "28/06/2025", estrellas: 5, comentario: "Excelente para llamadas en movilidad." }
    ]
  },
  {
    id: 44,
    img: img44,
    tipo: "AUDIO",
    estado: "",
    nombre: "JBL Live 770NC",
    descripcion: "Wireless headphones with adaptive noise cancellation, JBL Signature Sound, and up to 65 hours of battery life.",
    precio: 199,
    resenias: [
      { autor: "Andrés", fecha: "27/04/2025", estrellas: 4, comentario: "ANC decente por el precio." },
      { autor: "Lucía", fecha: "01/06/2025", estrellas: 5, comentario: "Comodísimos para oficina." }
    ]
  },
  {
    id: 45,
    img: img45,
    tipo: "AUDIO",
    estado: "",
    nombre: "Sennheiser Momentum 4 Wireless",
    descripcion: "High-fidelity headphones with noise cancellation, 60-hour battery life, and customizable sound via app.",
    precio: 299,
    resenias: [
      { autor: "Daniela", fecha: "24/01/2025", estrellas: 4, comentario: "Batería brutal; app completa." },
      { autor: "Gonzalo", fecha: "10/04/2025", estrellas: 3, comentario: "Carcasa algo grande para viaje." },
      { autor: "Sofía", fecha: "22/06/2025", estrellas: 5, comentario: "Comodidad top para jornadas largas." }
    ]
  },
  {
    id: 46,
    img: img46,
    tipo: "AUDIO",
    estado: "DESCUENTO",
    nombre: "Sonos Arc",
    descripcion: "A premium soundbar with Dolby Atmos, voice control, and multi-room audio support for immersive home theater experiences.",
    precio: 899,
    resenias: [
      { autor: "Carla", fecha: "18/11/2024", estrellas: 5, comentario: "Voces claras y Atmos envolvente." },
      { autor: "Diego", fecha: "08/02/2025", estrellas: 4, comentario: "Fácil de instalar; eARC sin fallos." },
      { autor: "Rodrigo", fecha: "19/04/2025", estrellas: 3, comentario: "Graves buenos, sin sub retumba menos." },
      { autor: "Ximena", fecha: "05/06/2025", estrellas: 5, comentario: "Gran salto frente al audio del TV." }
    ]
  },
  {
    id: 47,
    img: img47,
    tipo: "AUDIO",
    estado: "LO MAS VENDIDO",
    nombre: "Bose SoundLink Flex",
    descripcion: "A portable Bluetooth speaker with crisp sound, waterproof design, and up to 12 hours of battery life.",
    precio: 149,
    resenias: [
      { autor: "Elena", fecha: "28/10/2024", estrellas: 5, comentario: "Pequeño y potente; resistente al agua." },
      { autor: "Marco", fecha: "14/02/2025", estrellas: 5, comentario: "Conexión estable; suena nítido." },
      { autor: "Paola", fecha: "07/04/2025", estrellas: 4, comentario: "Batería ~10–12 h reales." },
      { autor: "Sebastián", fecha: "17/06/2025", estrellas: 5, comentario: "Perfecto para reuniones pequeñas." }
    ]
  },
  {
    id: 48,
    img: img48,
    tipo: "AUDIO",
    estado: "",
    nombre: "JBL Charge 5",
    descripcion: "A rugged Bluetooth speaker with powerful bass, IP67 waterproof rating, and up to 20 hours of playtime.",
    precio: 179,
    resenias: [
      { autor: "Antonella", fecha: "11/11/2024", estrellas: 4, comentario: "Graves potentes; ideal para exteriores." },
      { autor: "Bruno", fecha: "02/02/2025", estrellas: 3, comentario: "Pesa un poco para mochila diaria." },
      { autor: "Alejandro", fecha: "21/03/2025", estrellas: 4, comentario: "Batería aguanta un fin de semana." },
      { autor: "Rosa", fecha: "01/06/2025", estrellas: 5, comentario: "Resistente y con buen volumen." }
    ]
  },
  {
    id: 49,
    img: img49,
    tipo: "AUDIO",
    estado: "",
    nombre: "Sony SRS-XG300",
    descripcion: "A portable Bluetooth speaker with mega bass, party lighting, and up to 25 hours of battery life.",
    precio: 199,
    resenias: [
      { autor: "María", fecha: "09/11/2024", estrellas: 5, comentario: "Bajos contundentes y luces divertidas." },
      { autor: "Luis", fecha: "25/01/2025", estrellas: 4, comentario: "Batería larga; con luces dura menos." },
      { autor: "Camila", fecha: "05/04/2025", estrellas: 3, comentario: "Algo grande para llevar diario." },
      { autor: "Renato", fecha: "20/06/2025", estrellas: 5, comentario: "Suena fuerte sin distorsión." }
    ]
  },
  {
    id: 50,
    img: img50,
    tipo: "AUDIO",
    estado: "",
    nombre: "Anker Soundcore Motion X600",
    descripcion: "A compact Bluetooth speaker with spatial audio, high-fidelity sound, and up to 12 hours of battery life.",
    precio: 129,
    resenias: [
      { autor: "Andrés", fecha: "22/03/2025", estrellas: 4, comentario: "Diseño bonito y robusto." },
      { autor: "Lucía", fecha: "09/06/2025", estrellas: 5, comentario: "Excelente calidad de sonido por el precio." }
    ]
  },
  {
    id: 51,
    img: img51,
    tipo: "AUDIO",
    estado: "",
    nombre: "Bang & Olufsen Beoplay A9",
    descripcion: "A premium wireless speaker with powerful sound, elegant design, and multi-room connectivity.",
    precio: 2999,
    resenias: [
      { autor: "Jorge", fecha: "18/12/2024", estrellas: 5, comentario: "Sonido y diseño premium total." },
      { autor: "Daniela", fecha: "08/02/2025", estrellas: 4, comentario: "Carísimo, pero espectacular." },
      { autor: "Gonzalo", fecha: "26/04/2025", estrellas: 3, comentario: "App mejorable para multiroom." },
      { autor: "Sofía", fecha: "30/06/2025", estrellas: 5, comentario: "Limpia ambientes grandes sin esfuerzo." }
    ]
  },
  {
    id: 52,
    img: img52,
    tipo: "AUDIO",
    estado: "",
    nombre: "Sennheiser Ambeo Soundbar Mini",
    descripcion: "A compact soundbar with 3D audio, Dolby Atmos, and virtual surround sound for immersive home audio.",
    precio: 599,
    resenias: [
      { autor: "Carla", fecha: "27/11/2024", estrellas: 5, comentario: "3D convincente para su tamaño." },
      { autor: "Diego", fecha: "16/02/2025", estrellas: 4, comentario: "Config rápida y buena claridad." },
      { autor: "Rodrigo", fecha: "11/04/2025", estrellas: 3, comentario: "Graves justos sin subwoofer." },
      { autor: "Ximena", fecha: "24/06/2025", estrellas: 5, comentario: "Perfecta para depto pequeño." }
    ]
  },
  {
    id: 53,
    img: img53,
    tipo: "AUDIO",
    estado: "",
    nombre: "Sony WF-1000XM5",
    descripcion: "True wireless earbuds with best-in-class noise cancellation, high-resolution audio, and 8-hour battery life.",
    precio: 299,
    resenias: [
      { autor: "Marco", fecha: "20/01/2025", estrellas: 4, comentario: "Sonido detallado; controles precisos." },
      { autor: "Paola", fecha: "14/04/2025", estrellas: 3, comentario: "Batería cae con ANC al máximo." },
      { autor: "Sebastián", fecha: "26/06/2025", estrellas: 5, comentario: "Micrófono decente en interiores." }
    ]
  },
  {
    id: 54,
    img: img54,
    tipo: "AUDIO",
    estado: "",
    nombre: "Bose SoundLink Revolve+ II",
    descripcion: "A 360-degree Bluetooth speaker with deep, immersive sound and up to 17 hours of battery life.",
    precio: 249,
    resenias: [
      { autor: "Rosa", fecha: "04/06/2025", estrellas: 5, comentario: "Excelente para reuniones familiares." }
    ]
  },
  {
    id: 55,
    img: img55,
    tipo: "AUDIO",
    estado: "LO MAS VENDIDO",
    nombre: "JBL Flip 6",
    descripcion: "A compact Bluetooth speaker with bold sound, IP67 waterproofing, and up to 12 hours of playtime.",
    precio: 129,
    resenias: [
      { autor: "María", fecha: "22/10/2024", estrellas: 5, comentario: "Pequeño, suena fuerte y es resistente." },
      { autor: "Luis", fecha: "28/01/2025", estrellas: 5, comentario: "Ideal para la piscina y viajes." },
      { autor: "Camila", fecha: "09/04/2025", estrellas: 4, comentario: "Batería ~10–12 h a volumen medio." },
      { autor: "Renato", fecha: "21/06/2025", estrellas: 5, comentario: "Imbatible en su precio." }
    ]
  },
  {
    id: 56,
    img: img56,
    tipo: "AUDIO",
    estado: "DESCUENTO",
    nombre: "Harman Kardon Onyx Studio 8",
    descripcion: "A stylish Bluetooth speaker with rich sound, wireless streaming, and up to 8 hours of battery life.",
    precio: 299,
    resenias: [
      { autor: "Valentina", fecha: "03/12/2024", estrellas: 4, comentario: "Sonido elegante; diseño precioso." },
      { autor: "Pedro", fecha: "06/02/2025", estrellas: 3, comentario: "Autonomía justa si subes el volumen." },
      { autor: "Andrés", fecha: "20/04/2025", estrellas: 4, comentario: "Sala mediana la llena sin distorsión." },
      { autor: "Lucía", fecha: "15/06/2025", estrellas: 5, comentario: "Muy buena oferta por la calidad." }
    ]
  },
  {
    id: 57,
    img: img57,
    tipo: "AUDIO",
    estado: "",
    nombre: "Ultimate Ears Boom 3",
    descripcion: "A portable Bluetooth speaker with 360-degree sound, waterproof design, and up to 15 hours of battery life.",
    precio: 149,
    resenias: [
      { autor: "Jorge", fecha: "11/11/2024", estrellas: 5, comentario: "Resistente y con buen 360." },
      { autor: "Daniela", fecha: "13/02/2025", estrellas: 4, comentario: "Volumen alto sin saturar." },
      { autor: "Gonzalo", fecha: "07/04/2025", estrellas: 3, comentario: "Graves algo contenidos, pero claro." },
      { autor: "Sofía", fecha: "18/06/2025", estrellas: 5, comentario: "Perfecto para viajes." }
    ]
  },
  {
    id: 58,
    img: img58,
    tipo: "AUDIO",
    estado: "",
    nombre: "Sonos Roam 2",
    descripcion: "A compact portable speaker with Wi-Fi and Bluetooth, waterproof design, and up to 10 hours of battery life.",
    precio: 179,
    resenias: [
      { autor: "Diego", fecha: "05/02/2025", estrellas: 3, comentario: "Batería justa si lo usas fuerte." },
      { autor: "Rodrigo", fecha: "24/04/2025", estrellas: 4, comentario: "Integración Sonos impecable." },
      { autor: "Ximena", fecha: "28/06/2025", estrellas: 5, comentario: "Ideal para casa pequeña." }
    ]
  },
  {
    id: 59,
    img: img59,
    tipo: "AUDIO",
    estado: "",
    nombre: "Bose QuietComfort Earbuds",
    descripcion: "True wireless earbuds with world-class noise cancellation, clear sound, and up to 6 hours of battery life.",
    precio: 179,
    resenias: [
      { autor: "Paola", fecha: "01/04/2025", estrellas: 3, comentario: "Autonomía corta con ANC alto." },
      { autor: "Sebastián", fecha: "16/06/2025", estrellas: 5, comentario: "Micrófono ok para llamadas." }
    ]
  },
  {
    id: 60,
    img: img60,
    tipo: "AUDIO",
    estado: "",
    nombre: "JBL Bar 9.1",
    descripcion: "A wireless soundbar with Dolby Atmos, detachable speakers, and powerful bass for cinematic audio.",
    precio: 999,
    resenias: [
      { autor: "Antonella", fecha: "25/11/2024", estrellas: 5, comentario: "Surround con satélites despega el Atmos." },
      { autor: "Bruno", fecha: "12/02/2025", estrellas: 4, comentario: "Bajos fuertes; modo noche útil." },
      { autor: "Alejandro", fecha: "30/04/2025", estrellas: 3, comentario: "Ocupa espacio con sub y satélites." },
      { autor: "Rosa", fecha: "20/06/2025", estrellas: 5, comentario: "Experiencia cine en casa." }
    ]
  },
  {
    id: 61,
    img: img61,
    tipo: "CPU",
    estado: "LO MAS VENDIDO",
    nombre: "Intel Core i9-14900K",
    descripcion: "A high-performance desktop processor with 24 cores, 32 threads, and up to 5.8 GHz, ideal for gaming and professional workloads.",
    precio: 549,
    resenias: [
      { autor: "Camila", fecha: "29/04/2025", estrellas: 4, comentario: "Temperaturas controladas con AIO." },
      { autor: "Renato", fecha: "10/06/2025", estrellas: 5, comentario: "Upgrade que valió la pena." }
    ]
  },
  {
    id: 62,
    img: img62,
    tipo: "CPU",
    estado: "",
    nombre: "AMD Ryzen 9 7950X3D",
    descripcion: "A 16-core, 32-thread processor with 3D V-Cache, offering exceptional gaming and multitasking performance.",
    precio: 699,
    resenias: []
  },
  {
    id: 63,
    img: img63,
    tipo: "CPU",
    estado: "",
    nombre: "Intel Core Ultra 9 285K",
    descripcion: "A next-gen desktop CPU with 24 cores, 32 threads, and integrated NPU for AI tasks, built for high-performance computing.",
    precio: 599,
    resenias: [
      { autor: "Daniela", fecha: "28/03/2025", estrellas: 4, comentario: "Buen rendimiento mixto; temperaturas ok." },
      { autor: "Gonzalo", fecha: "12/05/2025", estrellas: 3, comentario: "Necesitó update de BIOS para full soporte." },
      { autor: "Sofía", fecha: "01/07/2025", estrellas: 5, comentario: "Muy rápido en ofimática pesada y coding." }
    ]
  },
  {
    id: 64,
    img: img64,
    tipo: "CPU",
    estado: "",
    nombre: "AMD Ryzen 7 7800X3D",
    descripcion: "An 8-core, 16-thread processor with 3D V-Cache, optimized for gaming and high-performance applications.",
    precio: 449,
    resenias: [
      { autor: "Ximena", fecha: "25/06/2025", estrellas: 5, comentario: "Actualicé desde 5600X y la mejora se siente." }
    ]
  },
  {
    id: 65,
    img: img65,
    tipo: "CPU",
    estado: "",
    nombre: "Intel Core i7-14700K",
    descripcion: "A 20-core, 28-thread processor with up to 5.6 GHz, offering excellent performance for gaming and content creation.",
    precio: 399,
    resenias: [
      { autor: "Marco", fecha: "03/03/2025", estrellas: 4, comentario: "Temperaturas ok con torre de aire." },
      { autor: "Paola", fecha: "29/04/2025", estrellas: 3, comentario: "Ajusté PL para bajar consumo." },
      { autor: "Sebastián", fecha: "19/06/2025", estrellas: 5, comentario: "Frames altos con 4070 Ti." }
    ]
  },
  {
    id: 66,
    img: img66,
    tipo: "CPU",
    estado: "",
    nombre: "AMD Ryzen AI Max+ 395",
    descripcion: "A high-performance CPU with up to 126 TOPS AI performance, designed for AI workstations and multitasking.",
    precio: 499,
    resenias: [
      { autor: "Alejandro", fecha: "13/04/2025", estrellas: 3, comentario: "Se aprecia con RAM rápida." },
      { autor: "Rosa", fecha: "08/06/2025", estrellas: 5, comentario: "Muy recomendable para data/ML." }
    ]
  },
  {
    id: 67,
    img: img67,
    tipo: "CPU",
    estado: "LO MAS VENDIDO",
    nombre: "Intel Core i5-14600K",
    descripcion: "A 14-core, 20-thread processor with up to 5.3 GHz, ideal for mid-range gaming and productivity.",
    precio: 299,
    resenias: []
  },
  {
    id: 68,
    img: img68,
    tipo: "CPU",
    estado: "",
    nombre: "AMD Ryzen 5 7600X",
    descripcion: "A 6-core, 12-thread processor with up to 5.3 GHz, offering great value for gaming and multitasking.",
    precio: 249,
    resenias: [
      { autor: "Lucía", fecha: "14/06/2025", estrellas: 5, comentario: "Rinde más de lo que cuesta." }
    ]
  },
  {
    id: 69,
    img: img69,
    tipo: "CPU",
    estado: "",
    nombre: "Intel Core Ultra 7 265K",
    descripcion: "A 20-core, 28-thread desktop CPU with integrated NPU, optimized for AI tasks and high-performance computing.",
    precio: 399,
    resenias: [
      { autor: "Gonzalo", fecha: "05/05/2025", estrellas: 3, comentario: "BIOS actualizada fue necesaria." },
      { autor: "Sofía", fecha: "23/06/2025", estrellas: 5, comentario: "Excelente en coding y ofimática." }
    ]
  },
  {
    id: 70,
    img: img70,
    tipo: "CPU",
    estado: "DESCUENTO",
    nombre: "AMD Ryzen 9 7900X",
    descripcion: "A 12-core, 24-thread processor with up to 5.6 GHz, ideal for creators and gamers seeking high performance.",
    precio: 499,
    resenias: [
      { autor: "Rodrigo", fecha: "22/04/2025", estrellas: 3, comentario: "Sin iGPU; requiere dedicada." },
      { autor: "Ximena", fecha: "26/06/2025", estrellas: 5, comentario: "Oferta que vale oro." }
    ]
  },
  {
    id: 71,
    img: img71,
    tipo: "CPU",
    estado: "",
    nombre: "Intel Core i9-13900K",
    descripcion: "A 24-core, 32-thread processor with up to 5.8 GHz, designed for demanding gaming and professional workloads.",
    precio: 529,
    resenias: []
  },
  {
    id: 72,
    img: img72,
    tipo: "CPU",
    estado: "LO MAS VENDIDO",
    nombre: "AMD Ryzen 7 7700X",
    descripcion: "An 8-core, 16-thread processor with up to 5.4 GHz, offering strong performance for gaming and productivity.",
    precio: 349,
    resenias: [
      { autor: "Rosa", fecha: "27/06/2025", estrellas: 5, comentario: "Compra redonda." }
    ]
  },
  {
    id: 73,
    img: img73,
    tipo: "CPU",
    estado: "",
    nombre: "Intel Core i5-13600K",
    descripcion: "A 14-core, 20-thread processor with up to 5.1 GHz, providing excellent value for mid-range builds.",
    precio: 279,
    resenias: [
      { autor: "Camila", fecha: "11/05/2025", estrellas: 3, comentario: "PL ajustado reduce calor sin perder FPS." },
      { autor: "Renato", fecha: "13/06/2025", estrellas: 5, comentario: "Para 1080p/1440p va sobrado." }
    ]
  },
  {
    id: 74,
    img: img74,
    tipo: "CPU",
    estado: "",
    nombre: "AMD Ryzen 5 9600X",
    descripcion: "A 6-core, 12-thread processor with up to 5.4 GHz, optimized for budget gaming and multitasking.",
    precio: 279,
    resenias: [
      { autor: "Pedro", fecha: "04/03/2025", estrellas: 4, comentario: "Eficiente y fresco." },
      { autor: "Andrés", fecha: "09/05/2025", estrellas: 3, comentario: "Mejor con RAM rápida." },
      { autor: "Lucía", fecha: "20/06/2025", estrellas: 5, comentario: "Contenta con el salto vs 3600." }
    ]
  },
  {
    id: 75,
    img: img75,
    tipo: "CPU",
    estado: "",
    nombre: "Intel Core Ultra 5 245K",
    descripcion: "A 14-core, 20-thread CPU with integrated NPU, designed for AI tasks and efficient performance.",
    precio: 299,
    resenias: []
  },
  {
    id: 76,
    img: img76,
    tipo: "CPU",
    estado: "LO MAS VENDIDO",
    nombre: "AMD Ryzen 9 9900X",
    descripcion: "A 12-core, 24-thread processor with up to 5.6 GHz, built for high-end gaming and creative workloads.",
    precio: 499,
    resenias: [
        { autor: "Ximena", fecha: "18/06/2025", estrellas: 5, comentario: "Upgrade redondo desde 3900X." }
    ]
  },
  {
    id: 77,
    img: img77,
    tipo: "CPU",
    estado: "",
    nombre: "Intel Core i7-13700K",
    descripcion: "A 16-core, 24-thread processor with up to 5.4 GHz, ideal for gaming and multitasking.",
    precio: 369,
    resenias: [{ autor: "Marco", fecha: "14/03/2025", estrellas: 4, comentario: "Con aire de 2 torres va perfecto." },
      { autor: "Paola", fecha: "05/05/2025", estrellas: 3, comentario: "Ajusté voltajes para bajar temps." },
      { autor: "Sebastián", fecha: "29/06/2025", estrellas: 5, comentario: "Sin cuellos con 4070 Ti." }
    ]
  },
  {
    id: 78,
    img: img78,
    tipo: "CPU",
    estado: "",
    nombre: "AMD Ryzen 5 8600G",
    descripcion: "A 6-core, 12-thread APU with integrated Radeon graphics, suitable for budget gaming without a discrete GPU.",
    precio: 229,
    resenias: [
      { autor: "Alejandro", fecha: "16/04/2025", estrellas: 3, comentario: "Mejor con RAM dual channel rápida." },
      { autor: "Rosa", fecha: "12/06/2025", estrellas: 5, comentario: "Perfecto para ofimática y juegos ligeros." }
    ]
  },
  {
    id: 79,
    img: img79,
    tipo: "CPU",
    estado: "",
    nombre: "Intel Core i9-12900K",
    descripcion: "A 16-core, 24-thread processor with up to 5.2 GHz, offering strong performance for legacy systems.",
    precio: 449,
    resenias: [
      { autor: "Renato", fecha: "09/06/2025", estrellas: 5, comentario: "Excelente en productivo." }
    ]
  },
  {
    id: 80,
    img: img80,
    tipo: "CPU",
    estado: "",
    nombre: "AMD Ryzen 7 8700G",
    descripcion: "An 8-core, 16-thread APU with integrated Radeon 780M graphics, ideal for compact gaming PCs.",
    precio: 329,
    resenias: [
      { autor: "Andrés", fecha: "23/04/2025", estrellas: 3, comentario: "Necesita RAM rápida para lucir." },
      { autor: "Lucía", fecha: "30/06/2025", estrellas: 5, comentario: "Muy versátil para todo uso." }
    ]
  },

  {
    id: 81,
    img: img81,
    tipo: "GPU",
    estado: "",
    nombre: "Nvidia GeForce RTX 4090",
    descripcion: "A top-tier GPU with 24GB GDDR6X VRAM, offering unmatched performance for 4K gaming and professional rendering.",
    precio: 1599,
    resenias: [
      { autor: "Sofía", fecha: "19/06/2025", estrellas: 5, comentario: "Para render y IA, imbatible." }
    ]
  },
  {
    id: 82,
    img: img82,
    tipo: "GPU",
    estado: "",
    nombre: "AMD Radeon RX 7900 XTX",
    descripcion: "A high-end GPU with 24GB GDDR6 VRAM, designed for 4K gaming and content creation with ray tracing support.",
    precio: 999,
    resenias: [
      { autor: "Rodrigo", fecha: "27/04/2025", estrellas: 3, comentario: "Consumo alto a tope, rendimiento top." },
      { autor: "Ximena", fecha: "13/06/2025", estrellas: 5, comentario: "Excelente también en creación de contenido." }
    ]
  },
  {
    id: 83,
    img: img83,
    tipo: "GPU",
    estado: "DESCUENTO",
    nombre: "Nvidia GeForce RTX 4080",
    descripcion: "A powerful GPU with 16GB GDDR6X VRAM, ideal for high-resolution gaming and AI workloads.",
    precio: 1199,
    resenias: [
      { autor: "Elena", fecha: "12/12/2024", estrellas: 5, comentario: "1440p/4K muy fluidos; DLSS 3 suma." }
    ]
  },
  {
    id: 84,
    img: img84,
    tipo: "GPU",
    estado: "",
    nombre: "AMD Radeon RX 7900 XT",
    descripcion: "A 20GB GDDR6 GPU with excellent performance for 1440p and 4K gaming, featuring advanced ray tracing.",
    precio: 899,
    resenias: [
      { autor: "Alejandro", fecha: "01/05/2025", estrellas: 3, comentario: "Se siente el consumo, rendimiento compensa." },
      { autor: "Rosa", fecha: "26/06/2025", estrellas: 5, comentario: "Gran opción precio/rendimiento." }
    ]
  },
  {
    id: 85,
    img: img85,
    tipo: "GPU",
    estado: "",
    nombre: "Nvidia GeForce RTX 4070 Ti",
    descripcion: "A 12GB GDDR6X GPU offering strong 1440p gaming performance and efficient power consumption.",
    precio: 799,
    resenias: [
      { autor: "Luis", fecha: "10/03/2025", estrellas: 4, comentario: "DLSS 3 mejora un montón." },
      { autor: "Camila", fecha: "02/05/2025", estrellas: 3, comentario: "VRAM justa en 4K con mods." },
      { autor: "Renato", fecha: "15/06/2025", estrellas: 5, comentario: "Silenciosa y fresca." }
    ]
  },
  {
    id: 86,
    img: img86,
    tipo: "GPU",
    estado: "",
    nombre: "AMD Radeon RX 7800 XT",
    descripcion: "A 16GB GDDR6 GPU optimized for 1440p gaming with solid ray tracing and upscaling capabilities.",
    precio: 499,
    resenias: [
      { autor: "Lucía", fecha: "28/06/2025", estrellas: 5, comentario: "Gran compra por el precio." }
    ]
  },
  {
    id: 87,
    img: img87,
    tipo: "GPU",
    estado: "",
    nombre: "Nvidia GeForce RTX 4070",
    descripcion: "A 12GB GDDR6X GPU offering excellent 1440p gaming performance and DLSS 3 support.",
    precio: 599,
    resenias: [
      { autor: "Sofía", fecha: "11/06/2025", estrellas: 5, comentario: "Silenciosa y de bajo consumo." }
    ]
  },
  {
    id: 88,
    img: img88,
    tipo: "GPU",
    estado: "",
    nombre: "AMD Radeon RX 7700 XT",
    descripcion: "A 12GB GDDR6 GPU designed for 1440p gaming with strong performance and efficient power usage.",
    precio: 449,
    resenias: [
      { autor: "Rodrigo", fecha: "03/05/2025", estrellas: 3, comentario: "Ray tracing mejor con FSR." },
      { autor: "Ximena", fecha: "24/06/2025", estrellas: 5, comentario: "Relación calidad/precio top." }
    ]
  },
  {
    id: 89,
    img: img89,
    tipo: "GPU",
    estado: "",
    nombre: "Nvidia GeForce RTX 4060",
    descripcion: "An 8GB GDDR6 GPU for 1080p and 1440p gaming, featuring DLSS 3 and efficient power consumption.",
    precio: 1388.74,
    resenias: []
  },
  {
    id: 90,
    img: img90,
    tipo: "GPU",
    estado: "",
    nombre: "AMD Radeon RX 7600",
    descripcion: "An 8GB GDDR6 GPU for budget-friendly 1080p gaming with solid performance and FSR support.",
    precio: 269,
    resenias: [
      { autor: "Antonella", fecha: "05/12/2024", estrellas: 5, comentario: "Calidad/precio excelente para 1080p." },
      { autor: "Bruno", fecha: "09/02/2025", estrellas: 4, comentario: "FSR ayuda en títulos pesados." },
      { autor: "Alejandro", fecha: "25/04/2025", estrellas: 3, comentario: "VRAM justa con texturas altas." },
      { autor: "Rosa", fecha: "29/06/2025", estrellas: 5, comentario: "Silenciosa y fresca." }
    ]
  },
  {
    id: 91,
    img: img91,
    tipo: "GPU",
    estado: "DESCUENTO",
    nombre: "Nvidia GeForce RTX 4060",
    descripcion: "An 8GB GDDR6 GPU optimized for 1080p gaming with DLSS 3 and low power consumption.",
    precio: 299,
    resenias: [
      { autor: "María", fecha: "02/12/2024", estrellas: 5, comentario: "1080p alto con consumo mínimo." }
    ]
  },
  {
    id: 92,
    img: img92,
    tipo: "GPU",
    estado: "",
    nombre: "AMD Radeon RX 6700 XT",
    descripcion: "A 12GB GDDR6 GPU offering strong 1440p gaming performance with ray tracing capabilities.",
    precio: 399,
    resenias: [
      { autor: "Valentina", fecha: "01/12/2024", estrellas: 5, comentario: "1440p muy sólido; 12GB ayudan." },
      { autor: "Pedro", fecha: "11/02/2025", estrellas: 4, comentario: "FSR levanta los FPS bien." },
      { autor: "Andrés", fecha: "01/05/2025", estrellas: 3, comentario: "RT justito, pero jugable." },
      { autor: "Lucía", fecha: "21/06/2025", estrellas: 5, comentario: "Excelente equilibrio general." }
    ]
  },
  {
    id: 93,
    img: img93,
    tipo: "GPU",
    estado: "",
    nombre: "Nvidia GeForce RTX 3090",
    descripcion: "A 24GB GDDR6X GPU with exceptional performance for 4K gaming and professional workloads.",
    precio: 1499,
    resenias: [
      { autor: "Jorge", fecha: "04/12/2024", estrellas: 5, comentario: "Aún rinde brutal en 4K y pro." },
      { autor: "Daniela", fecha: "20/02/2025", estrellas: 4, comentario: "Consumo alto; potencia enorme." }
    ]
  },
  {
    id: 94,
    img: img94,
    tipo: "GPU",
    estado: "",
    nombre: "AMD Radeon RX 6800 XT",
    descripcion: "A 16GB GDDR6 GPU designed for 4K gaming with robust ray tracing and high performance.",
    precio: 649,
    resenias: [
      { autor: "Carla", fecha: "03/12/2024", estrellas: 5, comentario: "Gran opción 4K/1440p con 16GB." },
      { autor: "Diego", fecha: "22/02/2025", estrellas: 4, comentario: "FSR ayuda mucho; drivers ok." },
      { autor: "Rodrigo", fecha: "30/04/2025", estrellas: 3, comentario: "RT mejor con FSR calidad." }
    ]
  },
  {
    id: 95,
    img: img95,
    tipo: "GPU",
    estado: "",
    nombre: "Nvidia GeForce RTX 3080",
    descripcion: "A 10GB GDDR6X GPU offering excellent 4K and 1440p gaming performance with ray tracing.",
    precio: 699,
    resenias: []
  },
  {
    id: 96,
    img: img96,
    tipo: "GPU",
    estado: "",
    nombre: "AMD Radeon RX 6950 XT",
    descripcion: "A 16GB GDDR6 GPU with top-tier performance for 4K gaming and professional applications.",
    precio: 849,
    resenias: [
      { autor: "Antonella", fecha: "05/12/2024", estrellas: 5, comentario: "Muy fuerte en 4K; 16GB vienen bien." },
      { autor: "Bruno", fecha: "16/02/2025", estrellas: 4, comentario: "FSR levanta bien; drivers estables." },
      { autor: "Alejandro", fecha: "29/04/2025", estrellas: 3, comentario: "Consumo elevado a tope." },
      { autor: "Rosa", fecha: "27/06/2025", estrellas: 5, comentario: "Excelente también para edición." }
    ]
  },
  {
    id: 97,
    img: img97,
    tipo: "GPU",
    estado: "",
    nombre: "Nvidia GeForce RTX 3070 Ti",
    descripcion: "An 8GB GDDR6X GPU optimized for 1440p and light 4K gaming with DLSS and ray tracing support.",
    precio: 599,
    resenias: [
      { autor: "María", fecha: "07/12/2024", estrellas: 5, comentario: "1440p alto muy estable." }
    ]
  },
  {
    id: 98,
    img: img98,
    tipo: "GPU",
    estado: "DESCUENTO",
    nombre: "AMD Radeon RX 6900 XT",
    descripcion: "A 16GB GDDR6 GPU designed for high-performance 4K gaming and content creation.",
    precio: 799,
    resenias: [
      { autor: "Valentina", fecha: "04/12/2024", estrellas: 5, comentario: "Rinde muy fuerte a 1440p/4K." },
      { autor: "Pedro", fecha: "10/02/2025", estrellas: 4, comentario: "16GB ayudan en texturas altas." }
    ]
  },
  {
    id: 99,
    img: img99,
    tipo: "GPU",
    estado: "",
    nombre: "Nvidia GeForce RTX 3060 Ti",
    descripcion: "An 8GB GDDR6 GPU offering great value for 1440p gaming with ray tracing and DLSS.",
    precio: 399,
    resenias: [
      { autor: "Jorge", fecha: "03/12/2024", estrellas: 5, comentario: "1440p medio/alto perfecto." },
      { autor: "Daniela", fecha: "18/02/2025", estrellas: 4, comentario: "DLSS ayuda bastante." },
      { autor: "Gonzalo", fecha: "09/05/2025", estrellas: 3, comentario: "8GB limitan en algunos AAA." },
      { autor: "Sofía", fecha: "28/06/2025", estrellas: 5, comentario: "Silenciosa y de bajo consumo." }
    ]
  },
  {
    id: 100,
    img: img100,
    tipo: "GPU",
    estado: "",
    nombre: "AMD Radeon RX 6950 XT",
    descripcion: "A 16GB GDDR6 GPU with top-tier performance for 4K gaming and professional applications.",
    precio: 849,
    resenias: [
      { autor: "Carla", fecha: "05/12/2024", estrellas: 5, comentario: "Muy potente para 4K; 16GB van de lujo." },
      { autor: "Diego", fecha: "15/02/2025", estrellas: 4, comentario: "FSR ayuda a mantener FPS." },
      { autor: "Rodrigo", fecha: "01/05/2025", estrellas: 3, comentario: "Consumo elevado en cargas máximas." }
    ]
  }
];

export default productos;

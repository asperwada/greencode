import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            header: { explore: "EXPLORE", quiz: "TAKE QUIZ" },
            hero: { title: "PLANET", subtitle: "CRISIS", desc: "Global warming: scientific analysis, causes, and survival strategy." },
            info: {
                sec1: {
                    title: "01. WHO IS TO BLAME?",
                    energy: "Energy", energyDesc: "Burning fossil fuels is the main cause of greenhouse gas accumulation in the atmosphere.",
                    industry: "Industry", industryDesc: "Heavy manufacturing and chemical industries contribute heavily to global warming.",
                    deforestation: "Deforestation", deforestDesc: "Destroying forests reduces the planet's ability to process carbon dioxide."
                },
                sec2: {
                    title: "02. MYTHS & REALITY",
                    mythLabel: "Myth",
                    mythText: "Current warming is just part of Earth's natural cycle.",
                    realityLabel: "Reality",
                    realityText: "The current warming speed is abnormal for natural cycles and is primarily caused by human emissions."
                },
                sec3: {
                    title: "03. WHAT TO DO?",
                    calcTitle: "Eco-footprint: Energy", consumption: "Monthly energy use (kWh)", footprint: "Carbon footprint", year: "kg CO2 / year",
                    small: "Use energy-saving appliances to reduce emissions.",
                    roadmap: "Roadmap", step1: "Economy decarbonization", step2: "Renewable energy investment", step3: "Conscious resource consumption"
                },
                sec4: {
                    title: "04. IMPACTS WE SEE TODAY",
                    intro: "Climate change is no longer a distant scenario. It already affects ecosystems, health systems, and the global economy.",
                    arcticTitle: "Arctic and Glaciers",
                    arcticDesc: "Ice melt accelerates sea-level rise and changes ocean circulation patterns that influence weather far beyond polar regions.",
                    oceansTitle: "Oceans and Coasts",
                    oceansDesc: "Warmer oceans fuel stronger storms, while acidification harms marine biodiversity and fisheries.",
                    healthTitle: "Human Health",
                    healthDesc: "Heatwaves, air pollution, and climate-sensitive diseases increase risks, especially for children and older adults.",
                    economyTitle: "Economy and Infrastructure",
                    economyDesc: "Floods, droughts, and extreme weather damage supply chains, agriculture, and urban infrastructure."
                },
                sec5: {
                    title: "05. SOLUTIONS BY LEVEL",
                    intro: "Effective climate action works best when households, cities, businesses, and governments move in the same direction.",
                    homeTitle: "At Home",
                    homeDesc: "Insulation, efficient appliances, and mindful consumption reduce bills and emissions at the same time.",
                    cityTitle: "At City Level",
                    cityDesc: "Public transport, green zones, and modern waste systems quickly improve air quality and resilience.",
                    businessTitle: "In Business",
                    businessDesc: "Energy audits, clean logistics, and circular production models lower climate risks and operating costs.",
                    policyTitle: "At Policy Level",
                    policyDesc: "Long-term climate laws and transparent targets help scale innovation and protect communities."
                },
                sec6: {
                    title: "06. 30-DAY PRACTICAL PLAN",
                    planTitle: "Small Actions, Real Effect",
                    h1: "Choose 2-3 days per week without private car usage.",
                    h2: "Reduce food waste by planning purchases and storing products correctly.",
                    h3: "Switch home electricity to efficient modes and track meter readings weekly.",
                    h4: "Replace at least one disposable habit with a reusable alternative.",
                    h5: "Discuss climate-friendly habits with family or teammates and set a shared goal.",
                    whyTitle: "Why This Works",
                    whyText: "Stable habits scale over time. A realistic monthly plan is easier to maintain than radical one-time changes, and the collective effect becomes measurable within a year."
                },
                sec7: {
                    title: "07. CONCLUSION",
                    text1: "Climate change is a systems challenge, but also a systems opportunity: energy, transport, housing, and food can become cleaner and more resilient.",
                    text2: "Technology alone is not enough without daily choices, and personal effort is not enough without collective policy and business transformation.",
                    text3: "The key message of this project is simple: informed action at every level can still change the trajectory of this century."
                }
            },
            quiz: {
                step: "Audit: step", result: "Your Result", plan: "Personal Action Plan", perfect: "Your habits are perfect!", finish: "FINISH",
                questions: [
                    { q: "Transport: how did you travel today?", a: ["Foot / Bike", "Electric / EV", "Public transport", "Car (ICE)"] },
                    { q: "Flights (last month):", a: ["None", "1-2 short", "Long flight"] },
                    { q: "Water consumption:", a: ["Thrifty", "Average", "Bath/Long laundry"] },
                    { q: "Waste & Plastic:", a: ["Zero waste", "General bin", "Many single-use"] },
                    { q: "Orders & Delivery:", a: ["None", "1-2 packages", "Many orders"] },
                    { q: "Energy usage:", a: ["Turn off lights", "Standby mode", "AC / Heater"] },
                    { q: "Digital footprint:", a: ["Offline", "Social/Work", "4K Stream/AI"] },
                    { q: "Fashion:", a: ["No buying", "Fast-fashion item"] },
                    { q: "Paper:", a: ["Digital only", "Used lots of paper"] },
                    { q: "Comfort:", a: ["Dress for weather", "Heat/cool empty flat"] }
                ],
                recs: {
                    transport: "Try the metro — it's the most eco-friendly transport.", flights: "One flight emits more CO2 than a year on the ground.",
                    waste: "Get a reusable shopper and refuse plastic bags.", energy: "Replace bulbs with LEDs and unplug appliances.",
                    digital: "Lowering YouTube quality from 4K to 1080p halves server load.", delivery: "Combine orders so the courier comes only once.",
                    water: "A faucet aerator saves up to 40% of water.", fashion: "Fashion costs tons of water. Buy quality items.",
                    paper: "Digital receipts save thousands of hectares of forest.", heat: "Lowering home temp by 1° saves 10% energy."
                }
            }
        }
    },
    ru: {
        translation: {
            header: { explore: "ИССЛЕДОВАТЬ", quiz: "ПРОЙТИ ТЕСТ" },
            hero: { title: "PLANET", subtitle: "CRISIS", desc: "Глобальное потепление: научный анализ, причины и стратегия выживания." },
            info: {
                sec1: {
                    title: "01. КТО ВИНОВАТ?",
                    energy: "Энергетика", energyDesc: "Сжигание ископаемого топлива — основная причина накопления парниковых газов в атмосфере.",
                    industry: "Промышленность", industryDesc: "Тяжелое производство и химическая промышленность вносят огромный вклад в потепление.",
                    deforestation: "Дефорестация", deforestDesc: "Уничтожение лесов снижает способность планеты перерабатывать углекислый газ."
                },
                sec2: {
                    title: "02. МИФЫ И РЕАЛЬНОСТЬ",
                    mythLabel: "Миф",
                    mythText: "Нынешнее потепление — просто часть естественного климатического цикла Земли.",
                    realityLabel: "Реальность",
                    realityText: "Темп изменений аномально высокий и объясняется прежде всего антропогенными выбросами."
                },
                sec3: {
                    title: "03. ЧТО ДЕЛАТЬ?",
                    calcTitle: "Эко-след: Энергия", consumption: "Потребление света в месяц (кВт⋅ч)", footprint: "Углеродный след", year: "кг CO₂ / год",
                    small: "Используйте энергосберегающие приборы для снижения выбросов.",
                    roadmap: "Дорожная карта", step1: "Декарбонизация экономики", step2: "Инвестиции в возобновляемую энергию", step3: "Осознанное потребление ресурсов"
                },
                sec4: {
                    title: "04. ПОСЛЕДСТВИЯ УЖЕ СЕГОДНЯ",
                    intro: "Изменение климата — это уже не сценарий будущего. Оно влияет на экосистемы, здоровье людей и экономику прямо сейчас.",
                    arcticTitle: "Арктика и ледники",
                    arcticDesc: "Таяние льда ускоряет рост уровня моря и меняет океанические течения, влияя на погоду в разных регионах мира.",
                    oceansTitle: "Океаны и побережья",
                    oceansDesc: "Потепление океана усиливает штормы, а закисление воды снижает устойчивость морских экосистем и рыболовства.",
                    healthTitle: "Здоровье людей",
                    healthDesc: "Жара, загрязнение воздуха и климатозависимые заболевания повышают нагрузку на системы здравоохранения.",
                    economyTitle: "Экономика и инфраструктура",
                    economyDesc: "Наводнения, засухи и экстремальная погода увеличивают убытки бизнеса и разрушают критическую инфраструктуру."
                },
                sec5: {
                    title: "05. РЕШЕНИЯ НА РАЗНЫХ УРОВНЯХ",
                    intro: "Эффективные климатические меры работают лучше всего, когда домохозяйства, города, бизнес и государство действуют синхронно.",
                    homeTitle: "На уровне дома",
                    homeDesc: "Утепление, энергоэффективная техника и осознанное потребление одновременно снижают расходы и выбросы.",
                    cityTitle: "На уровне города",
                    cityDesc: "Общественный транспорт, озеленение и современная переработка отходов повышают качество жизни и устойчивость.",
                    businessTitle: "На уровне бизнеса",
                    businessDesc: "Энергоаудит, чистая логистика и циклические модели производства снижают климатические и финансовые риски.",
                    policyTitle: "На уровне политики",
                    policyDesc: "Долгосрочные климатические законы и прозрачные цели ускоряют внедрение инноваций и защиту сообществ."
                },
                sec6: {
                    title: "06. ПЛАН НА 30 ДНЕЙ",
                    planTitle: "Маленькие шаги, реальный результат",
                    h1: "Выберите 2-3 дня в неделю без поездок на личном автомобиле.",
                    h2: "Сократите пищевые отходы: планируйте покупки и правильно храните продукты.",
                    h3: "Переведите домашнее потребление электроэнергии в экономный режим и отслеживайте счетчик раз в неделю.",
                    h4: "Замените хотя бы одну одноразовую привычку на многоразовую альтернативу.",
                    h5: "Обсудите экологичные привычки с семьей или командой и поставьте общую цель.",
                    whyTitle: "Почему это работает",
                    whyText: "Стабильные привычки дают накопительный эффект. Реалистичный план на месяц легче удерживать, чем радикальные разовые изменения, а результат заметен уже в течение года."
                },
                sec7: {
                    title: "07. ЗАКЛЮЧЕНИЕ",
                    text1: "Климатический кризис — системный вызов, но одновременно и шанс перестроить энергетику, транспорт, жилье и производство в более устойчивом формате.",
                    text2: "Технологии не сработают без повседневных решений людей, а индивидуальных усилий недостаточно без изменений в бизнесе и политике.",
                    text3: "Главная идея проекта проста: информированные действия на каждом уровне все еще способны изменить траекторию XXI века."
                }
            },
            quiz: {
                step: "Аудит: шаг", result: "Ваш результат", plan: "Персональный план действий", perfect: "Ваши привычки идеальны!", finish: "ЗАВЕРШИТЬ",
                questions: [
                    { q: "Транспорт: как вы передвигались сегодня?", a: ["Пешком / Велосипед", "Электросамокат", "Общественный транспорт", "Личный автомобиль"] },
                    { q: "Авиаперелеты (за месяц):", a: ["Не летал", "1-2 коротких", "Длинный перелет"] },
                    { q: "Потребление воды:", a: ["Экономно", "Средне", "Ванна / Долгая стирка"] },
                    { q: "Мусор и пластик:", a: ["Сортирую", "Общий бак", "Много упаковки"] },
                    { q: "Заказы и доставка:", a: ["Ничего", "1-2 посылки", "Много заказов"] },
                    { q: "Электроэнергия:", a: ["Выключаю свет", "Фоновый режим", "Кондиционер"] },
                    { q: "Цифровой след:", a: ["Мало интернета", "Соцсети", "4K / Игры / AI"] },
                    { q: "Одежда:", a: ["Не покупал", "Масс-маркет"] },
                    { q: "Бумага:", a: ["Э-чеки", "Много бумаги"] },
                    { q: "Температура:", a: ["По погоде", "Грею пустой дом"] }
                ],
                recs: {
                    transport: "Метро — самый экологичный транспорт.", flights: "Авиаперелет дает больше CO2, чем год жизни на земле.",
                    waste: "Заведите шоппер и откажитесь от пакетов.", energy: "Замените лампы на светодиодные.",
                    digital: "Снижение качества YouTube с 4K до 1080p вдвое уменьшает нагрузку.", delivery: "Объединяйте заказы в одну посылку.",
                    water: "Аэратор на кран экономит до 40% воды.", fashion: "Выбирайте качественные вещи.",
                    paper: "Электронные чеки спасают леса.", heat: "Снижение температуры дома на 1° экономит 10% энергии."
                }
            }
        }
    },
    es: {
        translation: {
            header: { explore: "EXPLORAR", quiz: "HACER TEST" },
            hero: { title: "PLANET", subtitle: "CRISIS", desc: "Calentamiento global: analisis cientifico, causas y estrategia de supervivencia." },
            info: {
                sec1: {
                    title: "01. QUIEN TIENE LA CULPA?",
                    energy: "Energia", energyDesc: "La quema de combustibles fosiles es la causa principal de la acumulacion de gases de efecto invernadero.",
                    industry: "Industria", industryDesc: "La produccion pesada y la industria quimica aportan una gran parte del calentamiento.",
                    deforestation: "Deforestacion", deforestDesc: "La perdida de bosques reduce la capacidad del planeta para absorber dioxido de carbono."
                },
                sec2: {
                    title: "02. MITOS Y REALIDAD",
                    mythLabel: "Mito",
                    mythText: "El calentamiento actual es solo parte del ciclo natural de la Tierra.",
                    realityLabel: "Realidad",
                    realityText: "La velocidad actual del calentamiento no es normal y se explica principalmente por emisiones humanas."
                },
                sec3: {
                    title: "03. QUE HACER?",
                    calcTitle: "Huella eco: Energia", consumption: "Consumo mensual de energia (kWh)", footprint: "Huella de carbono", year: "kg CO2 / ano",
                    small: "Usa equipos eficientes para reducir emisiones.",
                    roadmap: "Hoja de ruta", step1: "Descarbonizacion de la economia", step2: "Inversion en renovables", step3: "Consumo responsable de recursos"
                },
                sec4: {
                    title: "04. IMPACTOS DE HOY",
                    intro: "El cambio climatico ya no es un escenario lejano. Afecta ecosistemas, salud y economia en el presente.",
                    arcticTitle: "Artico y glaciares",
                    arcticDesc: "El deshielo acelera la subida del nivel del mar y altera corrientes oceanicas que influyen en el clima global.",
                    oceansTitle: "Oceanos y costas",
                    oceansDesc: "Oceanos mas calidos intensifican tormentas, y la acidificacion dania biodiversidad marina y pesca.",
                    healthTitle: "Salud humana",
                    healthDesc: "Olas de calor, contaminacion del aire y enfermedades sensibles al clima aumentan los riesgos de salud.",
                    economyTitle: "Economia e infraestructura",
                    economyDesc: "Inundaciones, sequias y eventos extremos golpean cadenas de suministro, agricultura y ciudades."
                },
                sec5: {
                    title: "05. SOLUCIONES POR NIVEL",
                    intro: "La accion climatica funciona mejor cuando hogares, ciudades, empresas y gobiernos avanzan juntos.",
                    homeTitle: "En casa",
                    homeDesc: "Aislamiento, electrodomesticos eficientes y consumo consciente reducen costos y emisiones.",
                    cityTitle: "En la ciudad",
                    cityDesc: "Transporte publico, zonas verdes y gestion moderna de residuos mejoran aire y resiliencia.",
                    businessTitle: "En empresas",
                    businessDesc: "Auditorias energeticas, logistica limpia y economia circular reducen riesgos climaticos.",
                    policyTitle: "En politica",
                    policyDesc: "Leyes climaticas de largo plazo y metas transparentes aceleran innovacion y proteccion social."
                },
                sec6: {
                    title: "06. PLAN PRACTICO DE 30 DIAS",
                    planTitle: "Acciones pequenas, efecto real",
                    h1: "Elige 2-3 dias por semana sin usar coche privado.",
                    h2: "Reduce desperdicio de alimentos con compras planificadas y mejor almacenamiento.",
                    h3: "Configura un modo eficiente de consumo electrico y revisa el medidor cada semana.",
                    h4: "Sustituye al menos un habito desechable por una alternativa reutilizable.",
                    h5: "Habla con familia o equipo sobre habitos sostenibles y fija una meta comun.",
                    whyTitle: "Por que funciona",
                    whyText: "Los habitos estables se acumulan. Un plan mensual realista se mantiene mejor que cambios extremos de una sola vez."
                },
                sec7: {
                    title: "07. CONCLUSION",
                    text1: "La crisis climatica es un desafio sistemico y tambien una oportunidad para transformar energia, transporte, vivienda y alimentacion.",
                    text2: "La tecnologia no basta sin decisiones diarias, y el esfuerzo individual no basta sin cambios de empresas y politicas publicas.",
                    text3: "Mensaje central: la accion informada en todos los niveles todavia puede cambiar el rumbo de este siglo."
                }
            },
            quiz: {
                step: "Auditoria: paso", result: "Tu resultado", plan: "Plan de accion personal", perfect: "Tus habitos son perfectos!", finish: "FINALIZAR",
                questions: [
                    { q: "Transporte: como viajaste hoy?", a: ["A pie / Bici", "Electrico / EV", "Transporte publico", "Coche (combustion)"] },
                    { q: "Vuelos (ultimo mes):", a: ["Ninguno", "1-2 cortos", "Vuelo largo"] },
                    { q: "Consumo de agua:", a: ["Ahorro", "Promedio", "Bano/lavado largo"] },
                    { q: "Residuos y plastico:", a: ["Cero residuos", "Basura general", "Mucho desechable"] },
                    { q: "Pedidos y envios:", a: ["Ninguno", "1-2 paquetes", "Muchos pedidos"] },
                    { q: "Uso de energia:", a: ["Apago luces", "Modo espera", "Aire/Calefaccion"] },
                    { q: "Huella digital:", a: ["Poco internet", "Redes/Trabajo", "4K/Streaming/AI"] },
                    { q: "Moda:", a: ["No compro", "Fast fashion"] },
                    { q: "Papel:", a: ["Solo digital", "Mucho papel"] },
                    { q: "Confort:", a: ["Ropa segun clima", "Caliento/enfrio casa vacia"] }
                ],
                recs: {
                    transport: "Prueba el metro, suele ser la opcion mas ecologica.", flights: "Un vuelo puede emitir mas CO2 que un ano de habitos eficientes.",
                    waste: "Usa bolsa reutilizable y evita plasticos de un solo uso.", energy: "Cambia focos por LED y desconecta aparatos.",
                    digital: "Bajar YouTube de 4K a 1080p reduce mucho la carga de servidores.", delivery: "Agrupa pedidos para reducir viajes de reparto.",
                    water: "Un aireador en el grifo puede ahorrar hasta 40% de agua.", fashion: "Compra menos y de mejor calidad.",
                    paper: "Los recibos digitales ahorran bosque.", heat: "Bajar 1 grado en casa puede ahorrar cerca de 10% de energia."
                }
            }
        }
    },
    fr: {
        translation: {
            header: { explore: "EXPLORER", quiz: "FAIRE LE QUIZ" },
            hero: { title: "PLANET", subtitle: "CRISIS", desc: "Rechauffement climatique: analyse scientifique, causes et strategie de survie." },
            info: {
                sec1: {
                    title: "01. QUI EST RESPONSABLE?",
                    energy: "Energie", energyDesc: "La combustion des energies fossiles est la cause principale de l'accumulation des gaz a effet de serre.",
                    industry: "Industrie", industryDesc: "L'industrie lourde et chimique contribue fortement au rechauffement global.",
                    deforestation: "Deforestation", deforestDesc: "La destruction des forets reduit la capacite de la planete a absorber le CO2."
                },
                sec2: {
                    title: "02. MYTHES ET REALITE",
                    mythLabel: "Mythe",
                    mythText: "Le rechauffement actuel fait simplement partie d'un cycle naturel de la Terre.",
                    realityLabel: "Realite",
                    realityText: "Le rythme actuel est exceptionnel et est surtout provoque par les emissions humaines."
                },
                sec3: {
                    title: "03. QUE FAIRE?",
                    calcTitle: "Empreinte eco: Energie", consumption: "Consommation mensuelle d'energie (kWh)", footprint: "Empreinte carbone", year: "kg CO2 / an",
                    small: "Utilisez des appareils economes pour reduire les emissions.",
                    roadmap: "Feuille de route", step1: "Decarboner l'economie", step2: "Investir dans les renouvelables", step3: "Consommation responsable"
                },
                sec4: {
                    title: "04. IMPACTS DEJA VISIBLES",
                    intro: "Le changement climatique n'est plus un scenario lointain. Il touche deja les ecosystemes, la sante et l'economie.",
                    arcticTitle: "Arctique et glaciers",
                    arcticDesc: "La fonte des glaces accelere la hausse du niveau de la mer et modifie les courants oceaniques.",
                    oceansTitle: "Oceans et littoraux",
                    oceansDesc: "Des oceans plus chauds renforcent les tempetes, et l'acidification affaiblit la biodiversite marine.",
                    healthTitle: "Sante humaine",
                    healthDesc: "Canicules, pollution de l'air et maladies sensibles au climat augmentent les risques sanitaires.",
                    economyTitle: "Economie et infrastructures",
                    economyDesc: "Inondations, secheresses et extremes climatiques perturbent agriculture, villes et chaines logistiques."
                },
                sec5: {
                    title: "05. SOLUTIONS A TOUS LES NIVEAUX",
                    intro: "L'action climatique est plus efficace quand menages, villes, entreprises et pouvoirs publics avancent ensemble.",
                    homeTitle: "A la maison",
                    homeDesc: "Isolation, appareils efficaces et consommation sobre reduisent a la fois factures et emissions.",
                    cityTitle: "A l'echelle de la ville",
                    cityDesc: "Transports publics, espaces verts et gestion moderne des dechets ameliorent l'air et la resilience.",
                    businessTitle: "Dans les entreprises",
                    businessDesc: "Audits energie, logistique propre et modeles circulaires diminuent les risques climatiques.",
                    policyTitle: "Au niveau politique",
                    policyDesc: "Des lois climatiques stables et des objectifs transparents accelerent innovation et protection sociale."
                },
                sec6: {
                    title: "06. PLAN PRATIQUE SUR 30 JOURS",
                    planTitle: "Petites actions, impact reel",
                    h1: "Choisissez 2-3 jours par semaine sans voiture individuelle.",
                    h2: "Reduisez le gaspillage alimentaire avec des achats planifies et une meilleure conservation.",
                    h3: "Passez en mode electrique sobre a la maison et suivez le compteur chaque semaine.",
                    h4: "Remplacez au moins une habitude jetable par une alternative reutilisable.",
                    h5: "Discutez des habitudes durables avec votre famille ou equipe et fixez un objectif commun.",
                    whyTitle: "Pourquoi ca marche",
                    whyText: "Les habitudes stables s'accumulent. Un plan mensuel realiste tient mieux dans le temps que des changements radicaux ponctuels."
                },
                sec7: {
                    title: "07. CONCLUSION",
                    text1: "La crise climatique est un defi systemique, mais aussi une occasion de transformer energie, mobilite, habitat et alimentation.",
                    text2: "La technologie ne suffit pas sans choix quotidiens, et l'effort individuel ne suffit pas sans action des entreprises et des politiques publiques.",
                    text3: "Message central: une action informee a chaque niveau peut encore changer la trajectoire de ce siecle."
                }
            },
            quiz: {
                step: "Audit: etape", result: "Votre resultat", plan: "Plan d'action personnel", perfect: "Vos habitudes sont excellentes!", finish: "TERMINER",
                questions: [
                    { q: "Transport: comment vous etes-vous deplace aujourd'hui?", a: ["A pied / Velo", "Electrique / EV", "Transport public", "Voiture thermique"] },
                    { q: "Vols (dernier mois):", a: ["Aucun", "1-2 courts", "Vol long"] },
                    { q: "Consommation d'eau:", a: ["Economique", "Moyenne", "Bain/Lavage long"] },
                    { q: "Dechets et plastique:", a: ["Zero dechet", "Poubelle generale", "Beaucoup de jetable"] },
                    { q: "Commandes et livraisons:", a: ["Aucune", "1-2 colis", "Beaucoup de commandes"] },
                    { q: "Consommation d'energie:", a: ["J'eteins les lumieres", "Mode veille", "Clim/Chauffage"] },
                    { q: "Empreinte numerique:", a: ["Peu d'internet", "Reseaux/Travail", "4K/Streaming/AI"] },
                    { q: "Mode:", a: ["Aucun achat", "Fast fashion"] },
                    { q: "Papier:", a: ["Tout numerique", "Beaucoup de papier"] },
                    { q: "Confort:", a: ["Tenue adaptee", "Je chauffe/refroidis un logement vide"] }
                ],
                recs: {
                    transport: "Essayez le metro, souvent l'option la plus ecologique.", flights: "Un vol peut emettre plus de CO2 qu'une annee d'efforts quotidiens.",
                    waste: "Utilisez un sac reutilisable et evitez le plastique a usage unique.", energy: "Passez aux LED et debranchez les appareils inutilises.",
                    digital: "Passer YouTube de 4K a 1080p reduit fortement la charge serveur.", delivery: "Regroupez les commandes pour limiter les trajets de livraison.",
                    water: "Un aerateur de robinet peut economiser jusqu'a 40% d'eau.", fashion: "Achetez moins, mais de meilleure qualite.",
                    paper: "Les tickets numeriques preservent les forets.", heat: "Baisser de 1 degre a la maison peut economiser environ 10% d'energie."
                }
            }
        }
    }
};

i18n.use(LanguageDetector).use(initReactI18next).init({
    resources, fallbackLng: 'en', interpolation: { escapeValue: false }
});

export default i18n;
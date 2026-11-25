(function () {
const dataSet = {
  en: {
    navServices: 'Services',
    navAbout: 'About',
    navContacts: 'Contacts',
    heroCta: 'Request a quote',
    heroBadge: 'MidexPost · 10 years in logistics',
    stat1: 'on the Moldovan market',
    stat2: 'transport services',
    stat3: 'days — air delivery from the USA',
    stat4: 'hazard classes handled',
    servicesLead: 'Tap “+” to see what each service includes.',
    contactsTitle: 'Let us price your shipment',
    contactsLead: 'Describe your cargo in the form — we will get back to you with the best route and rate.',
    hoursLabel: 'Hours',
    openMap: 'Open in maps',
    formNote: 'All fields are required — the more precise, the faster we can quote.',
    workingHours: 'Working Hours 9:00 - 18:00',
    contactUs: 'Contact Us',
    focusOn: 'Focus on<br/>',
    focusOnOrange: 'Quality',
    mainContent: 'A reliable partner in the international transportation of any complexity anywhere in the world.',
    servicesText1: 'We deliver your goods from anywhere ',
    servicesText2: 'Our Services',
    servicesAviaText1: 'Airfreight',
    servicesAviaText2:
      'We provide a high-quality and individual solution to the shipment of any complexity.<br/>Our company cooperates with a number of airlines to form flexible offers for your comfort.',
    servicesAviaText3: 'WHAT IS INCLUDED IN OUR OFFER?',
    servicesAviaList: `<li>Formation of a favorable tariff</li>
                  <li>Pickup of goods from the client</li>
                  <li>Cargo packaging <span class="orange">(if necessary)</span></li>
                  <li>Cargo labeling</li>
                  <li>Customs clearance services <span class="orange">(if necessary)</span></li>
                  <li>
                    Cargo transportation by any operating flights <span class="orange">(regular / charter)</span>
                  </li>
                  <li>Cargo insurance</li>
                  <li>Delivery door-to-door</li>`,
    servicesTruckText1: 'Road freight',
    servicesTruckText2:
      'Our team cares about the quality of the services provided. We work with both full and partial loading. We process even the most complex logistics requests.',
    servicesTruckText3: 'WHAT IS INCLUDED IN OUR OFFER?',
    servicesTruckList: `<li>Formation of a favorable tariff</li>
                  <li>Pickup of goods from the client</li>
                  <li>Cargo packaging <span class="orange">(if necessary)</span></li>
                  <li>Cargo labeling</li>
                  <li>Customs clearance services <span class="orange">(if necessary)</span></li>
                  <li>Full and partial loading</li>
                  <li>Cargo insurance</li>
                  <li>Delivery door-to-door</li>`,
    servicesSeaText1: 'Ocean freight',
    servicesSeaText2:
      'Container shipping is one of the many services we provide.<br/> We offer a wide range of ocean freight services for general cargo of any size and any complexity.',
    servicesSeaText3: 'WHAT IS INCLUDED IN OUR OFFER?',
    servicesSeaList: `<li>Formation of a favorable tariff</li>
                  <li>Pickup of goods from the client</li>
                  <li>Cargo packaging <span class="orange">(if necessary)</span></li>
                  <li>Cargo labeling</li>
                  <li>Customs clearance services <span class="orange">(if necessary)</span></li>
                  <li> Full container loading <span class="orange">(FLC)</span> / Groupage <span class="orange">(LCL)</span></li>
                  <li>Cargo insurance</li>
                  <li>Delivery door-to-door</li>`,
    servicesOnlineShoppingText1: 'Ecommerce',
    servicesOnlineShoppingText2: 'Now ordering from online stores has become more convenient!',
    servicesOnlineShoppingText3: 'Fill your basket from online stores, and let us deal with delivery.',
    servicesOnlineShoppingText4: 'A NUMBER OF ONLINE STORES WE WORK WITH',
    servicesOnlineShoppingBtn1: 'The Entire List of Stores',
    servicesOnlineShoppingBtn2: 'How It Works',
    forKg: 'per kg',
    kg: 'kg',
    chisinau: 'Chișinău',
    sectionsUsaText1: 'Express delivery from USA<br /> to Moldova',
    sectionsUsaText2: 'Delivery to the client’s door anywhere in Republic of Moldova!',
    sectionsUsaText3: 'Airfreight:',
    sectionsUsaText4: 'PARCELs:',
    sectionsUsaText5: 'Other Regions',
    sectionsUsaText6: 'Expected delivery time by air <span class="orange">5-10 days</span>',
    sectionsUsaList: `<li>
                    The maximum declared value without paying a fee is <span class="orange">&euro;200</span>
                  </li>
                  <li>Maximum package weight -- <span class="orange">66 lbs (30kg)</span></li>
                  <li>
                    The maximum size of the largest side of the package is - <span class="orange">41 inches (105 cm)</span>
                  </li>
                  <li>
                    The total of length, width and height of the box must not exceed 
                    <span class="orange">78 inches (200 cm)</span>
                  </li>
                  <li>It is <span class="orange">FORBIDDEN</span> to send used auto parts</li>
                  <li>
                    Each shipment is automatically insured by the company for <span class="orange">&#36;60</span><br />
                    <span class="dark-gray">(additional insurance costs 2.5% of the insurance amount)</span>
                  </li>`,
    sectionsUsaText7: 'There are special requirements for the packaging of goods, items, other material values sent in parcels, which directly affect the safety of the contents of the parcel in transit. For any damage of items sent in international mail, the packaging of which does not ensure their safety, the postal operator is not responsible.',
    sectionsUsaBtn: 'Forbidden Items List',
    servicesCantDeliverText1: 'International transportation of dangerous goods ( DGR / AGR )',
    servicesCantDeliverText2: 'We have a number of integrated solutions for the transportation of various categories of goods, including dangerous goods. Dangerous goods are substances and objects that pose a threat to human life and health, the state of the environment, and the safety of buildings / structures.',
    servicesCantDeliverText3: 'Dangerous goods are transported according to strict rules in compliance with all necessary conditions. Our certified employees will provide you with a professional solution for the transportation of dangerous goods, and will monitor compliance with all necessary measures from the packaging of these goods to their shipment.',
    servicesCantDeliverText4: 'WHAT DANGEROUS GOODS AND SUBSTANCES DO WE WORK WITH?',
    servicesCantDeliverText5: 'Hazard class 1',
    servicesCantDeliverText6: 'Explosive materials (VM)',
    servicesCantDeliverText7: 'Hazard class 2',
    servicesCantDeliverText8: 'Compressed, liquefied and dissolved gases under pressure',
    servicesCantDeliverText9: 'Hazard class 3',
    servicesCantDeliverText10: 'Flammable liquids (flammable liquids)',
    servicesCantDeliverText11: 'Hazard class 4',
    servicesCantDeliverText12: 'Flammable solid cargo and substances (LVT)',
    servicesCantDeliverText13: 'Spontaneous combustible goods and substances (CB)',
    servicesCantDeliverText14: 'Goods and substances that emit flammable gases in contact with water',
    servicesCantDeliverText15: 'Hazard class 5',
    servicesCantDeliverText16: 'Oxidizing substances (OK) and organic peroxides (OP)',
    servicesCantDeliverText17: 'Hazard class 6',
    servicesCantDeliverText18: 'Toxic substances (JV) and infectious goods and substances (IW)',
    servicesCantDeliverText19: 'Hazard class 7',
    servicesCantDeliverText20: 'Radioactive materials (RM)',
    servicesCantDeliverText21: 'Hazard class 8',
    servicesCantDeliverText22: 'Caustic and (or) corrosive cargo and substances (EC)',
    servicesCantDeliverText23: 'Hazard class 9',
    servicesCantDeliverText24: 'Other dangerous goods and substances (dry ice)',
    knowMore1: 'For more details about the services contact us',
    aboutText1: 'About us',
    aboutText2: 'Individual approach and the most innovative logistics solutions',
    aboutText3: ' is a logistics company operating in the Moldavian market since 2016. We present an integrated approach to solving key tasks of organizing the transportation of various goods from one point to another.',
    aboutText4: 'Many years of professional experience of our employees in the field of logistics, allows us to present a number of the most flexible and ambitious solutions.',
    aboutText5: 'Our team is always open for partnership.',
    aboutText6: 'We are used to doing, not talking.',
    aboutText7: 'Our goals',
    aboutList: `<li>To advance the format of cargo transportation to a new modern level.</li>
              <li>Provide even better and smarter logistics solutions.</li>`,
    advantagesText1: 'Our Advantages',
    advantagesText2: 'Authorized customs zone',
    advantagesText3: 'Cargo with temperature conditions',
    advantagesText4: 'Transportation of radioactive materials',
    advantagesText5: 'Animals logistics',
    advantagesText6: 'Work with both entities and individuals',
    advantagesText7: 'Bonuses - discounts for regular customers',
    formText1: 'Parcel Information',
    formLabel1: 'Package Contents',
    formInput1: 'Content',
    formLabel2: 'From?',
    formInput2: 'Address',
    formLabel3: 'To?',
    formInput3: 'Address',
    formLabel4: 'Weight (lbs)',
    formInput4: '0',
    formLabel5: 'Quantity (pcs)',
    formInput5: '0',
    formLabel6: 'Length (inches)',
    formInput6: '0',
    formLabel7: 'Width (inches)',
    formInput7: '0',
    formLabel8: 'Height (inches)',
    formInput8: '0',
    formValue1: 'Send Request',
    footerText1: 'Address',
    footerText2: 'str. Varnita 16',
    footerText3: 'Chisinau MD-2023, Rep. of Moldova',
    footerText4: 'Contacts',
    shopsText1: 'Catalog',
    shopsText2: 'Multi-Brand Stores',
    shopsText3: 'Outlet Stores',
    shopsText4: 'Electronics',
    shopsText5: 'Women’s Clothing',
    shopsText6: 'Men’s Clothing',
    shopsText7: 'Shoes, Bags and Accessories',
    shopsText8: 'For Kids and Mums',
    shopsText9: 'Beauty and Health',
    shopsText10: 'Household Goods',
    shopsText11: 'For Pet Lovers',
    shopsText12: 'Sportswear',
    shopsText13: 'Car Parts',
    knowMore2: 'For more details about the services contact us',
    cantDeliverText1: 'List of prohibited items', 
    cantDeliverText2: 'Weapon', 
    cantDeliverText3: 'Firearms and ammunition', 
    cantDeliverText4: 'Melee weapons and other items', 
    cantDeliverText5: 'Specially designed for attack and defense (brass knuckles, stilettos, cans of paralytic liquid, etc.)', 
    cantDeliverText6: 'National relics', 
    cantDeliverText7: 'Objects representing the national, historical or cultural heritage of the Moldovan people are determined in accordance with the laws of the Republic of Moldova.', 
    cantDeliverText8: 'Documents', 
    cantDeliverText9: 'Permit to carry weapons, employment records, military cards, passports and other identity documents', 
    cantDeliverText10: 'Hazardous substances', 
    cantDeliverText11: 'Explosive, flammable or other dangerous substances, military equipment', 
    cantDeliverText12: 'Intellectual property', 
    cantDeliverText13: 'Goods exported in violation of intellectual property rights', 
    cantDeliverText14: 'Commercial goods', 
    cantDeliverText15: 'Goods with signs of a commercial batch (a significant amount of the same type of investments)', 
    cantDeliverText16: 'Agricultural products', 
    cantDeliverText17: 'Agricultural products and food products (including canned)', 
    cantDeliverText18: 'Narcotic substances', 
    cantDeliverText19: 'Narcotic drugs, psychotropic substances and their analogues', 
    cantDeliverText20: 'Tobacco products', 
    cantDeliverText21: 'Cigarettes, cigars and other tobacco products', 
    cantDeliverText22: 'Obscene items', 
    cantDeliverText23: 'Obscene and immoral items', 
    cantDeliverText24: 'Alcohol products', 
    cantDeliverText25: 'Alcoholic beverages and other alcohol-containing products', 
    cantDeliverText26: 'Precious metals', 
    cantDeliverText27: 'Gold, silver and precious metal products', 
    cantDeliverText28: 'Food products', 
    cantDeliverText29: 'Animal Food', 
    cantDeliverText30: 'Medications', 
    cantDeliverText31: 'Medicines, vitamins and vitamin complexes', 
    cantDeliverText32: 'Planting materials', 
    cantDeliverText33: 'Seeds and planting material', 
    cantDeliverText34: 'Gas lighters', 
    cantDeliverText35: 'Gas lighters', 
    cantDeliverText36: 'Note', 
    cantDeliverText37: 'Depending on the specifics of the customs legislation of the country of receipt, there are separate exceptions to the basic requirements listed below:', 
    cantDeliverText38: 'USA', 
    cantDeliverText39: 'It is forbidden to send products in aerosols; CN23 must indicate the material from which the attachment is made, for example:<br/>· shirt (polyester) – 2 un;<br />· glasses (plastic) – 1 un; vase (ceramic) – 1 un.', 
    cantDeliverText40: 'Canada', 
    cantDeliverText41: 'It is forbidden to send products in aerosols; sweets or chocolates are allowed, total weight up to 2 kg.', 
    cantDeliverText42: 'Spain and Portugal', 
    cantDeliverText43: 'It is allowed to send food products (except products of animal origin), while the total weight of food products should not exceed 10 kg; the maximum allowable weight of the item is 20 kg.', 
    cantDeliverText44: 'Other European countries', 
    cantDeliverText45: '(except Spain and Portugal)', 
    cantDeliverText46: 'It is allowed to send long-term food products in factory packaging (except for products of animal origin), while the total weight of food products should not exceed 10 kg in one shipment.',
  },
  ru: {
    navServices: 'Услуги',
    navAbout: 'О нас',
    navContacts: 'Контакты',
    heroCta: 'Оставить заявку',
    heroBadge: 'MidexPost · 10 лет в логистике',
    stat1: 'на рынке Молдовы',
    stat2: 'направлений перевозок',
    stat3: 'дней — авиадоставка из США',
    stat4: 'классов опасных грузов',
    servicesLead: 'Нажмите «+», чтобы увидеть, что входит в каждую услугу.',
    contactsTitle: 'Рассчитаем доставку вашего груза',
    contactsLead: 'Опишите груз в форме — мы свяжемся с вами и предложим оптимальный маршрут и тариф.',
    hoursLabel: 'Часы работы',
    openMap: 'Открыть на карте',
    formNote: 'Все поля обязательны — чем точнее данные, тем быстрее расчёт.',
    workingHours: 'Работаем с 9:00 до 18:00',
    contactUs: 'Связаться с Нами',
    focusOn: 'Сфокусируйтесь<br/>на ',
    focusOnOrange: 'Качестве',
    mainContent: 'Надёжный партнёр в международных грузоперевозках любой сложности в любую точку мира.',
    servicesText1: 'Мы доставим Ваш груз из любой точки земли',
    servicesText2: 'Наши услуги',
    servicesAviaText1: 'Авиаперевозки',
    servicesAviaText2:
      'Мы предоставляем качественный и индивидуальный подход к отправке груза любой сложности. Наша компания сотрудничает с рядом авиакомпаний для формирования гибких предложений для Вашего комфорта.',
    servicesAviaText3: 'Что входит в наше предложение?',
    servicesAviaList: `<li>Формирование выгодного тарифа</li>
                  <li>Забор грузов от клиента</li>
                  <li>Упаковка грузов <span class="orange">(по необходимости)</span></li>
                  <li>Этикирование грузов</li>
                  <li>Таможенное оформление <span class="orange">(по необходимости)</span></li>
                  <li>
                    Перевозка грузов любыми действующими рейсами <span class="orange">(регулярные/чартерные)</span>
                  </li>
                  <li>Страхование грузов</li>
                  <li>Доставка грузов лично в руки</li>`,
    servicesTruckText1: 'Автомобильные грузоперевозки',
    servicesTruckText2:
      'Наша команда заботится о качестве предоставляемых услуг. Работаем как с полной, так и с частичной загрузкой. Обрабатываем даже самые сложные запросы.',
    servicesTruckText3: 'Что входит в наше предложение?',
    servicesTruckList: `<li>Формирование выгодного тарифа</li>
                  <li>Забор грузов от клиента</li>
                  <li>Упаковка грузов <span class="orange">(по необходимости)</span></li>
                  <li>Этикирование грузов</li>
                  <li>Таможенное оформление <span class="orange">(по необходимости)</span></li>
                  <li>Полная загрузка / Частичная загрузка</li>
                  <li>Страхование грузов</li>
                  <li>Доставка грузов лично в руки</li>`,
    servicesSeaText1: 'Морские грузоперевозки',
    servicesSeaText2:
      'Контейнерные грузоперевозки – одна из многих предоставляемых нами услуг. Мы предлагаем широкий выбор предложений для оформления морских грузоперевозок любых габаритов, любой сложности.',
    servicesSeaText3: 'Что входит в наше предложение?',
    servicesSeaList: `<li>Формирование выгодного тарифа</li>
                  <li>Забор грузов от клиента</li>
                  <li>Упаковка грузов <span class="orange">(по необходимости)</span></li>
                  <li>Этикирование грузов</li>
                  <li>Таможенное оформление <span class="orange">(по необходимости)</span></li>
                  <li>
                    Полная загрузка контейнеров <span class="orange">(FLC)</span> / Сборные грузы
                    <span class="orange">(LCL)</span>
                  </li>
                  <li>Страхование грузов</li>
                  <li>Доставка грузов лично в руки</li>`,
    servicesOnlineShoppingText1: 'Онлайн-шоппинг',
    servicesOnlineShoppingText2: 'Теперь заказывать с интернет-магазинов стало удобнее!',
    servicesOnlineShoppingText3: 'Пополните Вашу корзину с интернет-магазинов, а доставку предоставьте нам.',
    servicesOnlineShoppingText4: 'Ряд интернет-магазинов с которыми мы сотрудничаем',
    servicesOnlineShoppingBtn1: 'Весь Список Магазинов',
    servicesOnlineShoppingBtn2: 'Как Это Работает',
    forKg: 'за кг',
    kg: 'кг',
    chisinau: 'Кишинев',
    sectionsUsaText1: 'Доставка посылок из США<br />в Молдову',
    sectionsUsaText2: 'Доставка в любую точку Республики Молдова до двери клиента!',
    sectionsUsaText3: 'Авиа:',
    sectionsUsaText4: 'Бандероли:',
    sectionsUsaText5: 'Другие регионы',
    sectionsUsaText6: 'Ожидаемый срок доставки  авиа <span class="orange">5-10 дней</span>',
    sectionsUsaList: `<li>
                    Максимальная задекларированная стоимость без оплаты пошлины - <span class="orange">&euro;200</span>
                  </li>
                  <li>Максимальный вес посылки - <span class="orange">66 lbs (30кг)</span></li>
                  <li>
                    Максимальный размер наибольшей стороны посылки - <span class="orange">41 inches (105 cм)</span>
                  </li>
                  <li>
                    Сумма длины, ширины и высоты коробки не должна превышать
                    <span class="orange">78 inches (200 см)</span>
                  </li>
                  <li>Бывшие в употреблении автозапчасти отправлять <span class="orange">ЗАПРЕЩЕНО</span></li>
                  <li>
                    Каждое отправление автоматически застраховано компанией на <span class="orange">&#36;60</span><br />
                    <span class="dark-gray">(дополнительная страховка стоит 2.5% от суммы страхования)</span>
                  </li>`,
    sectionsUsaText7: 'Существуют специальные требования к упаковке товаров, предметов, других материальных ценностей, пересылаемых посылками, которые напрямую влияют на сохранность в пути содержимого посылки. За повреждение предметов, направленных отправителем в международном почтовом отправлении, упаковка которого не обеспечивает их сохранность, оператор почтовой связи ответственности не несет.',
    sectionsUsaBtn: 'Перечень Запрещённых к Пересылке Предметов',
    servicesCantDeliverText1: 'Международная перевозка опасных грузов',
    servicesCantDeliverText2: 'У нас существует ряд комплексных решений для перевоза разной категории грузов, в том числе и опасных грузов. Опасные грузы — это вещества и предметы, которые несут угрозу жизни и здоровью человека, состоянию окружающей среды, сохранности зданий/сооружений.',
    servicesCantDeliverText3: 'Перевозка опасных грузов осуществляется по строгим правилам с соблюдением всех необходимых условий. Наши сертифицированные сотрудники предоставят Вам профессиональное оформление транспортировки опасных грузов, и проследят за соблюдением всех необходимых мер от упаковки данных грузов до их отгрузки.',
    servicesCantDeliverText4: 'С какими опасными грузами и веществами мы работаем?',
    servicesCantDeliverText5: '1 класс опасности',
    servicesCantDeliverText6: 'Взрывчатые материалы (ВМ)',
    servicesCantDeliverText7: '2 класс опасности',
    servicesCantDeliverText8: 'Газы сжатые, сжиженные и растворенные под давлением',
    servicesCantDeliverText9: '3 класс опасности',
    servicesCantDeliverText10: 'Легковоспламеняющиеся жидкости (ЛВЖ)',
    servicesCantDeliverText11: '4 класс опасности',
    servicesCantDeliverText12: 'Легковоспламеняющиеся твёрдые грузы и вещества (ЛВТ)',
    servicesCantDeliverText13: 'Самовозгорающиеся грузы и вещества (СВ)',
    servicesCantDeliverText14: 'Грузы и вещества, выделяющие воспламеняющиеся газы при взаимодействии с водой',
    servicesCantDeliverText15: '5 класс опасности',
    servicesCantDeliverText16: 'Окисляющие вещества (ОК) и органические пероксиды (ОП)',
    servicesCantDeliverText17: '6 класс опасности',
    servicesCantDeliverText18: 'Ядовитые вещества (ЯВ) и инфекционные грузы и вещества (ИВ)',
    servicesCantDeliverText19: '7 класс опасности',
    servicesCantDeliverText20: 'Радиоактивные материалы (РМ)',
    servicesCantDeliverText21: '8 класс опасности',
    servicesCantDeliverText22: 'Едкие и (или) коррозионные грузы и вещества (ЕК)',
    servicesCantDeliverText23: '9 класс опасности',
    servicesCantDeliverText24: 'Прочие опасные грузы и вещества (сухой лёд)',
    knowMore1: 'Дополнительные детали по поводу услуг узнайте по телефону',
    aboutText1: 'О Нас',
    aboutText2: 'Индивидуальный подход и самые нестандартные логистические решения',
    aboutText3: '– это логистическая компания, действующая на молдавском рынке с 2016г. Мы представляем комплексный подход к решению ключевых задач по организации транспортировки разных грузов из одного пункта в другой.',
    aboutText4: 'Многолетний профессиональный опыт наших сотрудников в сфере логистики, позволяет выдвигать на рынок ряд наиболее гибких и амбициозных решений.',
    aboutText5: 'Наша команда всегда открыта для партнёрства.',
    aboutText6: 'Мы привыкли делать, а не говорить.',
    aboutText7: 'Наша цель',
    aboutList: `<li>Продвинуть формат грузоперевозок на новый современный уровень.</li>
              <li>Предоставить ещё более качественные и умные логистические решения.</li>`,
    advantagesText1: 'Наши Преимущества',
    advantagesText2: 'Авторизированная таможенная зона',
    advantagesText3: 'Работа с грузами с температурным режимом',
    advantagesText4: 'Оформление по отправке радиоактивных материалов',
    advantagesText5: 'Перевозка животных',
    advantagesText6: 'Работа, как с юридическими, так и с физическими лицами',
    advantagesText7: 'Бонусы – скидки постоянным клиентам',
    formText1: 'Какой у Вас груз?',
    formLabel1: 'Содержимое отправления',
    formInput1: 'Что Вы отправляете',
    formLabel2: 'Откуда',
    formInput2: 'Адрес',
    formLabel3: 'Куда',
    formInput3: 'Адрес',
    formLabel4: 'Вес (кг)',
    formInput4: '0',
    formLabel5: 'Количество (шт)',
    formInput5: '0',
    formLabel6: 'Длина (см)',
    formInput6: '0',
    formLabel7: 'Ширина (см)',
    formInput7: '0',
    formLabel8: 'Высота (см)',
    formInput8: '0',
    formValue1: 'Отправить Заявку',
    footerText1: 'Адрес',
    footerText2: 'ул. Варница 16',
    footerText3: 'Кишинёв MD-2023, Молдова',
    footerText4: 'Контакты',
    shopsText1: 'Список магазинов',
    shopsText2: 'Мульти брендовые магазины',
    shopsText3: 'Аутлет Магазины',
    shopsText4: 'Электронная техника',
    shopsText5: 'Женская Одежда',
    shopsText6: 'Мужская Одежда',
    shopsText7: 'Обувь, Сумки, Аксессуары',
    shopsText8: 'Для Детей и Мам',
    shopsText9: 'Красота и Здоровье',
    shopsText10: 'Хозтовары',
    shopsText11: 'Для Животных',
    shopsText12: 'Спорттовары',
    shopsText13: 'Авто Запчасти',
    knowMore2: 'По вопросам правил пересылки экспортной почты обращаться по телефону',
    cantDeliverText1: 'Перечень запрещенных к пересылке предметов', 
    cantDeliverText2: 'Оружие', 
    cantDeliverText3: 'Огнестрельное оружие и боеприпасы к нему', 
    cantDeliverText4: 'Холодное оружие и другие предметы', 
    cantDeliverText5: 'Специально предназначенные для нападения и обороны (кастеты, стилеты, баллончики с жидкостью паралитического действия и тому подобное)', 
    cantDeliverText6: 'Национальные реликвии', 
    cantDeliverText7: 'Предметы, представляющие национальное, историческое или культурное достояние молдавского народа, определяется в соответствии с законами Републики Молдова.', 
    cantDeliverText8: 'Документы', 
    cantDeliverText9: 'Разрешения на право ношения оружия, трудовые книжки, военные билеты, паспорта и другие документы, удостоверяющие личность', 
    cantDeliverText10: 'Огнеопасные вещества', 
    cantDeliverText11: 'Взрывчатые, легковоспламеняющиеся или другие опасные вещества, военное снаряжение', 
    cantDeliverText12: 'Интеллектуальная собственность', 
    cantDeliverText13: 'Товары, экспорт которых осуществляется с нарушением прав интеллектуальной собственности', 
    cantDeliverText14: 'Коммерческие партии', 
    cantDeliverText15: 'Товары, имеющие признаки коммерческой партии (значительное количество однотипных вложений)', 
    cantDeliverText16: 'Сельскохозяйственная продукция', 
    cantDeliverText17: 'Сельскохозяйственная продукция и продукты питания (в т.ч. консервированные)', 
    cantDeliverText18: 'Наркотические вещества', 
    cantDeliverText19: 'Наркотические средства, психотропные вещества и их аналоги', 
    cantDeliverText20: 'Табачные изделия', 
    cantDeliverText21: 'Сигареты, сигары и другие табачные изделия', 
    cantDeliverText22: 'Непристойные предметы', 
    cantDeliverText23: 'Предметы непристойного и аморального содержания', 
    cantDeliverText24: 'Спиртные изделия', 
    cantDeliverText25: 'Спиртные напитки и другие изделия с содержанием алкоголя', 
    cantDeliverText26: 'Драгоценные металлы', 
    cantDeliverText27: 'Изделия из золота, серебра и драгоценных металлов', 
    cantDeliverText28: 'Пищевые продукты', 
    cantDeliverText29: 'Пищевые продукты животного происхождения', 
    cantDeliverText30: 'Лекарственные препараты', 
    cantDeliverText31: 'Лекарства, витамины и витаминные комплексы', 
    cantDeliverText32: 'Посадочные материалы', 
    cantDeliverText33: 'Семена и посадочный материал', 
    cantDeliverText34: 'Газовые зажигалки', 
    cantDeliverText35: 'Газовые зажигалки', 
    cantDeliverText36: 'Примечание', 
    cantDeliverText37: 'В зависимости от особенностей таможенного законодательства страны получения, существуют отдельные исключения из базовых требований, перечисленных ниже:', 
    cantDeliverText38: 'США', 
    cantDeliverText39: 'Запрещено пересылать изделия в аэрозолях; в CN23 обязательно должно быть указано материал из которого изготовлено вложение, например:<br />· рубашка (полиэстер) – 2 шт;<br />· очки (пластик) – 1 шт; ваза (керамика) – 1 шт.', 
    cantDeliverText40: 'Канада', 
    cantDeliverText41: 'Запрещено пересылать изделия в аэрозолях; разрешены конфеты или шоколад, общим весом до 2 кг.', 
    cantDeliverText42: 'Испания и Португалия', 
    cantDeliverText43: 'Разрешено пересылать продукты питания (кроме продуктов животного происхождения), при этом общий вес продуктов питания не должен превышать 10 кг; максимальный допустимый вес отправления составляет 20 кг.', 
    cantDeliverText44: 'Другие страны Европы', 
    cantDeliverText45: '(кроме Испании и Португалии)', 
    cantDeliverText46: 'Разрешено пересылать продукты питания длительного хранения в фабричной упаковке (кроме продуктов животного происхождения), при этом общий вес продуктов питания не должен превышать 10 кг в одном МПО.' 
  },
  ro: {
    navServices: 'Servicii',
    navAbout: 'Despre noi',
    navContacts: 'Contacte',
    heroCta: 'Trimite o cerere',
    heroBadge: 'MidexPost · 10 ani în logistică',
    stat1: 'pe piața din Moldova',
    stat2: 'tipuri de transport',
    stat3: 'zile — livrare aeriană din SUA',
    stat4: 'clase de mărfuri periculoase',
    servicesLead: 'Apăsați „+” pentru a vedea ce include fiecare serviciu.',
    contactsTitle: 'Calculăm livrarea încărcăturii dvs.',
    contactsLead: 'Descrieți încărcătura în formular — vă contactăm cu ruta și tariful optim.',
    hoursLabel: 'Program',
    openMap: 'Deschide pe hartă',
    formNote: 'Toate câmpurile sunt obligatorii — cu cât mai exact, cu atât calculăm mai repede.',
    workingHours: 'Ore de lucru 9:00 - 18:00',
    contactUs: 'Contactați-ne',
    focusOn: 'Focusați-vă<br/>pe ',
    focusOnOrange: 'Calitate',
    mainContent: 'Un partener de încredere în logistică internațională de orice complexitate oriunde în lume.',
    servicesText1: 'Livrăm mărfurile dvs. de oriunde',
    servicesText2: 'Serviciile noastre',
    servicesAviaText1: 'Transport aerian',
    servicesAviaText2:
      'Oferim soluții individuale și de înaltă calitate pentru livrarea mărfurilor de orice complexitate. Compania noastră colaborează cu o serie de companii aeriene pentru a forma oferte flexibile pentru confortul dumneavoastră.',
    servicesAviaText3: 'Ce este inclus în oferta noastră?',
    servicesAviaList: `<li>Formarea unui tarif favorabil</li>
                  <li>Preluarea mărfurilor de la client</li>
                  <li>Servicii de ambalare <span class="orange">(dacă este necesar)</span></li>
                  <li>Servicii de etichetare</li>
                  <li>Servicii de vămuire <span class="orange">(dacă este necesar)</span></li>
                  <li>
                    Transport de marfă cu orice tip de zbor <span class="orange">(regulat / charter)</span>
                  </li>
                  <li>Asigurarea mărfurilor</li>
                  <li>Transport ușă la ușă</li>`,
    servicesTruckText1: 'Transport rutier',
    servicesTruckText2:
      'Echipa noastră are grijă de calitatea serviciilor oferite. Oferim transport de mărfuri cu camioane standard la plin sau grupaje (parțial). Procesăm chiar și cele mai complexe solicitări de logistică.',
    servicesTruckText3: 'Ce este inclus în oferta noastră?',
    servicesTruckList: `<li>Formarea unui tarif favorabil</li>
                  <li>Preluarea mărfurilor de la client</li>
                  <li>Servicii de ambalare <span class="orange">(dacă este necesar)</span></li>
                  <li>Servicii de etichetare</li>
                  <li>Servicii de vămuire <span class="orange">(dacă este necesar)</span></li>
                  <li>Încărcarea completă/grupaj</li>
                  <li>Asigurarea mărfurilor</li>
                  <li>Transport ușă la ușă</li>`,
    servicesSeaText1: 'Transport maritim',
    servicesSeaText2:
      'Transportul cu containere este unul dintre numeroasele servicii pe care le oferim.<br /> Avem o gamă largă de servicii de transport maritim pentru marfă generală de orice dimensiune și orice complexitate.',
    servicesSeaText3: 'Ce este inclus în oferta noastră?',
    servicesSeaList: `<li>Formarea unui tarif favorabil</li>
                  <li>Preluarea mărfurilor de la client</li>
                  <li>Servicii de ambalare <span class="orange">(dacă este necesar)</span></li>
                  <li>Servicii de etichetare</li>
                  <li>Servicii de vămuire <span class="orange">(dacă este necesar)</span></li>
                  <li>
                    Încărcarea completă a containerului <span class="orange">(FLC)</span> / Grupaj
                    <span class="orange"> (LCL)</span>
                  </li>
                  <li>Asigurarea mărfurilor</li>
                  <li>Transport ușă la ușă</li>`,
    servicesOnlineShoppingText1: 'e-Commerce',
    servicesOnlineShoppingText2: 'Acum comandarea de la magazinele online a devenit mai convenabilă!',
    servicesOnlineShoppingText3: 'Umpleți coșul din magazinele online iar noi ne ocupăm de livrare.',
    servicesOnlineShoppingText4: 'O gamă largă de magazine online cu care noi lucrăm',
    servicesOnlineShoppingBtn1: 'Toată Lista De Magazine',
    servicesOnlineShoppingBtn2: 'Cum Funcționează',
    forKg: 'per kg',
    kg: 'kg',
    chisinau: 'Chișinău',
    sectionsUsaText1: 'Express-livrare din SUA<br />în Moldova',
    sectionsUsaText2: 'Livrare către oriunde în Republica Moldova la ușa clientului!',
    sectionsUsaText3: 'Avia:',
    sectionsUsaText4: 'COLETE:',
    sectionsUsaText5: 'Alte regiuni',
    sectionsUsaText6: 'Termenul de livrare preconizat prin aer <span class="orange">5-10 Zile</span>',
    sectionsUsaList: `<li>
                    Valoarea maximă declarată fără a plăti o taxă este de <span class="orange">&euro;200</span>
                  </li>
                  <li>Greutate maximă a pachetului - <span class="orange">66 lbs (30kg)</span></li>
                  <li>
                    Dimensiunea maximă a celei mai mari părți a pachetului este de <span class="orange">41 inches (105 cm)</span>
                  </li>
                  <li>
                    Lungimea, lățimea și înălțimea cutiei nu trebuie să depășească  
                    <span class="orange">78 inches (200 cm)</span>
                  </li>
                  <li>
                  <span class="orange">Este interzis</span> să trimiteți piese auto folosite</li>
                  <li>
                    Fiecare expediere este asigurată automat de către companie pentru <span class="orange">&#36;60</span><br />
                    <span class="dark-gray">(costuri suplimentare de asigurare 2,5% din suma asigurării)</span>
                  </li>`,
    sectionsUsaText7: 'Există cerințe speciale pentru ambalarea mărfurilor, obiectelor, alte valori materiale trimise în colete, care afectează în mod direct siguranța conținutului coletului în tranzit. Pentru orice pagube ale articolelor trimise pe poștă internațională, a căror ambalare nu le asigură siguranța, operatorul poștal nu este responsabil.',
    sectionsUsaBtn: 'Lista de articole interzise',
    servicesCantDeliverText1: 'Logistica mărfurilor periculoase<br />(DGR / AGR)',
    servicesCantDeliverText2: 'Avem o serie de soluții integrate pentru transportul diferitelor categorii de mărfuri, inclusiv bunurile periculoase. Bunurile periculoase sunt substanțe și obiecte care reprezintă o amenințare pentru viața și sănătatea umană, starea mediului și siguranța clădirilor /construcții.',
    servicesCantDeliverText3: 'Mărfurile periculoase sunt transportate conform regulilor stricte, în conformitate cu toate cerințele necesare. Angajații noștri certificați, vă vor oferi o soluție profesională pentru transportul bunurilor periculoase și vor monitoriza respectarea tuturor măsurilor necesare de la ambalarea mărfurilor până la expedierea lor.',
    servicesCantDeliverText4: 'Cu ce bunuri și substanțe periculoase lucrăm?',
    servicesCantDeliverText5: 'Clasa de pericol 1',
    servicesCantDeliverText6: 'Materiale explozive (VM)',
    servicesCantDeliverText7: 'Clasa de pericol 2',
    servicesCantDeliverText8: 'Gaze comprimate, lichefiate și dizolvate sub presiune',
    servicesCantDeliverText9: 'Clasa de pericol 3',
    servicesCantDeliverText10: 'Lichide inflamabile (lichide inflamabile)',
    servicesCantDeliverText11: 'Clasa de pericol 4',
    servicesCantDeliverText12: 'Marfă și substanțe solide inflamabile (LVT)',
    servicesCantDeliverText13: 'Mărfuri și substanțe combustibile spontane (CB)',
    servicesCantDeliverText14: 'Mărfurile și substanțele care emit gaze inflamabile în contact cu apa',
    servicesCantDeliverText15: 'Clasa de pericol 5',
    servicesCantDeliverText16: 'Substanțe oxidante (OK) și peroxizi organici (OP)',
    servicesCantDeliverText17: 'Clasa de pericol 6',
    servicesCantDeliverText18: 'Substanțe toxice (JV) și mărfuri și substanțe infecțioase (IW)',
    servicesCantDeliverText19: 'Clasa de pericol 7',
    servicesCantDeliverText20: 'Materiale radioactive (RM)',
    servicesCantDeliverText21: 'Clasa de pericol 8',
    servicesCantDeliverText22: 'Mărfuri și substanțe caustice și (sau) corozive (CE)',
    servicesCantDeliverText23: 'Clasa de pericol 9',
    servicesCantDeliverText24: 'Alte mărfuri și substanțe periculoase (gheață uscată)',
    knowMore1: 'Pentru mai multe detalii despre servicii, apelați la numărul de telefon',
    aboutText1: 'Despre Noi',
    aboutText2: 'Abordare individuală și cele mai inovatoare soluții logistice',
    aboutText3: '– este o companie de logistică care operează pe piața moldovenească din 2016. Vă prezentăm o abordare integrată de soluționare a sarcinilor cheie ale organizării transportului de mărfuri dintr-un punct în altul.',
    aboutText4: 'Mulți ani de experiență profesională a angajaților noștri în domeniul logisticii, ne permite să prezentăm o serie de soluții cele mai flexibile și ambițioase.',
    aboutText5: 'Echipa noastră este întotdeauna deschisă pentru parteneriat.',
    aboutText6: 'Ne-am obișnuit să facem, dar nu să vorbim.',
    aboutText7: 'Scopurile noastre',
    aboutList: `<li>Dorim să avansăm formatul transportului de marfă la un nou nivel modern.</li>
                <li>Să oferim soluții logistice mai bune și mai inteligente.</li>`,
    advantagesText1: 'Avantajele Noastre',
    advantagesText2: 'Zona vamală<br />autorizată',
    advantagesText3: 'Mărfuri cu condiții la temperatură',
    advantagesText4: 'Transportarea materialelor radioactive',
    advantagesText5: 'Logistica transport<br />animale',
    advantagesText6: 'Lucrăm atât cu persoane juridice, cât și cu persoane fizice',
    advantagesText7: 'Bonusuri - reduceri pentru clienți fideli',
    formText1: 'Ce tip de livrare aveți?',
    formLabel1: 'Conținutul',
    formInput1: 'Ce conținut trimiteți',
    formLabel2: 'De la',
    formInput2: 'Adresa',
    formLabel3: 'Spre',
    formInput3: 'Adresa',
    formLabel4: 'Greutate (kg)',
    formInput4: '0',
    formLabel5: 'Cantitate (un)',
    formInput5: '0',
    formLabel6: 'Lungime (см)',
    formInput6: '0',
    formLabel7: 'Lățime (см)',
    formInput7: '0',
    formLabel8: 'Înălțime (см)',
    formInput8: '0',
    formValue1: 'Trimite-ți Cererea',
    footerText1: 'Adresa',
    footerText2: 'str. Varnita 16',
    footerText3: 'Chisinau MD-2023, Rep. of Moldova',
    footerText4: 'Contacte',
    shopsText1: 'Lista de magazine',
    shopsText2: 'Magazine de Branduri Multiple',
    shopsText3: 'Magazine Outlet',
    shopsText4: 'Echipamente Electronice',
    shopsText5: 'Îmbrăcăminte pentru Femei',
    shopsText6: 'Îmbrăcăminte pentru Bărbați',
    shopsText7: 'Încalțăminte, Genți, Accesorii',
    shopsText8: 'Pentru Copii și Mame',
    shopsText9: 'Sănătate și Frumusețe',
    shopsText10: 'Bunuri Gospodărești',
    shopsText11: 'Pentru Animale',
    shopsText12: 'Articole Sportive',
    shopsText13: 'Piese Auto',
    knowMore2: 'Pentru mai multe detalii despre servicii, apelați la numărul de telefon',
    cantDeliverText1: 'Lista articolelor interzise', 
    cantDeliverText2: 'Arme', 
    cantDeliverText3: 'Arme de foc și muniție', 
    cantDeliverText4: 'Arme reci și alte obiecte', 
    cantDeliverText5: 'Special conceput pentru atac și apărare (articulații de alamă, stilete, conserve de lichid paralitic etc.)', 
    cantDeliverText6: 'Obiecte cu valoare națională', 
    cantDeliverText7: 'Obiectele reprezentând moștenirea națională, istorică sau culturală a poporului moldovenesc sunt determinate în conformitate cu legile Republicii Moldova.', 
    cantDeliverText8: 'Documente', 
    cantDeliverText9: 'Permise pentru dreptul de a purta arme, cărți de muncă, actele de identitate militare, pașapoarte și alte documente de identificare', 
    cantDeliverText10: 'Substanțe periculoase', 
    cantDeliverText11: 'Echipamente militare explozive, inflamabile sau alte substanțe periculoase', 
    cantDeliverText12: 'Proprietate intelectuală', 
    cantDeliverText13: 'Bunuri exportate cu încălcarea drepturilor de proprietate intelectuală', 
    cantDeliverText14: 'Mărfuri comerciale', 
    cantDeliverText15: 'Mărfuri cu semne ale unui lot comercial (o sumă semnificativă din același tip de investiții)', 
    cantDeliverText16: 'Produse agricole', 
    cantDeliverText17: 'Produse agricole și produse alimentare (inclusiv conserve)', 
    cantDeliverText18: 'Substanțe narcotice', 
    cantDeliverText19: 'Narcotice, substanțe psihotrope și analogii lor', 
    cantDeliverText20: 'Produse din tutun', 
    cantDeliverText21: 'Țigarete, trabucuri și alte produse din tutun', 
    cantDeliverText22: 'Articole obscene', 
    cantDeliverText23: 'Obiecte obscene și imorale', 
    cantDeliverText24: 'Produse alcoolice', 
    cantDeliverText25: 'Băuturi alcoolice și alte produse care conțin alcool', 
    cantDeliverText26: 'Metale pretioase', 
    cantDeliverText27: 'Aur, argint și produse din metale prețioase', 
    cantDeliverText28: 'Produse alimentare', 
    cantDeliverText29: 'Hrana pentru animale', 
    cantDeliverText30: 'Medicamente', 
    cantDeliverText31: 'Medicamente, vitamine și complexe de vitamine', 
    cantDeliverText32: 'Materiale de plantare', 
    cantDeliverText33: 'Semințe și material de plantare', 
    cantDeliverText34: 'Brichete pe gaz', 
    cantDeliverText35: 'Brichete pe gaz', 
    cantDeliverText36: 'Notă', 
    cantDeliverText37: 'În funcție de specificul legislației vamale din țara de primire, există excepții separate de la cerințele de bază enumerate mai jos:', 
    cantDeliverText38: 'SUA', 
    cantDeliverText39: 'Este interzisă trimiterea de produse în aerosoli; CN23 trebuie să indice materialul din care este realizat atașamentul, de exemplu:<br />· cămașă (poliester) – 2 un;<br />· pahare (din plastic) – 1 un; vaza (ceramica) – 1 un.', 
    cantDeliverText40: 'Canada', 
    cantDeliverText41: 'Este interzisă trimiterea de produse în aerosoli; dulciuri sau bomboane de ciocolată sunt permise, cu o greutate totală de până la 2 kg.', 
    cantDeliverText42: 'Spania și Portugalia', 
    cantDeliverText43: 'Este permisă expedierea produselor alimentare (cu excepția produselor de origine animală), în timp ce greutatea totală a produselor alimentare nu trebuie să depășească 10 kg; greutatea maximă admisă a articolului este de 20 kg.', 
    cantDeliverText44: 'Alte țări Europene', 
    cantDeliverText45: '(cu excepția Spaniei și Portugaliei)', 
    cantDeliverText46: 'Este permisă trimiterea de produse alimentare cu păstrare pe termen lung în ambalaje din fabrică (cu excepția produselor de origine animală), în timp ce greutatea totală a produselor alimentare nu trebuie să depășească 10 kg într-о singură expediere.' 
  },
};




function Flip() {
  const val1 = $('.faddressFrom').find('input').val();
  const val2 = $('.faddressTo').find('input').val();
  $('.faddressFrom').find('input').val(val2);
  $('.faddressTo').find('input').val(val1);
}

// scripts.js loads as a module, so expose Flip for the inline onclick handler
window.Flip = Flip;

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Localization


$(document).ready(function() {
    $('#currentYear').text(new Date().getFullYear());

    let lang = localStorage.getItem("currentLanguage");

    if (lang === null) {
        lang = "ru";
        localStorage.setItem("currentLanguage", lang);
    }
    
    $("html").attr("lang", lang);
    $("#main-navbar-dropdown").text($(`[data-lang='${lang}']`).text());
    const localization = dataSet[lang];

    $("[data-locale]").each(function() {
        $(this).html(localization[$(this).data("locale")]);
    });

    $("[data-placeholder]").each(function() {
      $(this).attr("placeholder", localization[$(this).data("placeholder")]);
    });

    $("[data-value]").each(function() {
      $(this).attr("value", localization[$(this).data("value")]);
    });
});

$("[data-lang]").click(function() {
    const lang = $(this).data("lang");
    $("#main-navbar-dropdown").text($(this).text());
    localStorage.setItem("currentLanguage", lang);
    $("html").attr("lang", lang);
    window.location.reload();
});

// ---- UI polish (design only) ----
$(function () {
  const $header = $('.site-header');
  const onScroll = () => $header.toggleClass('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // header background while the mobile menu is open
  $('#main-navbar')
    .on('show.bs.collapse', () => $header.addClass('is-open'))
    .on('hidden.bs.collapse', () => $header.removeClass('is-open'));

  // close the mobile menu after picking a section
  $('#main-navbar a[href^="#"]').on('click', () => {
    if ($('#main-navbar').hasClass('show')) $('#main-navbar').collapse('hide');
  });

  // highlight the expanded service card
  $('#services .collapse')
    .on('show.bs.collapse', function () {
      $(this).closest('.service-card').addClass('is-open');
    })
    .on('hide.bs.collapse', function () {
      $(this).closest('.service-card').removeClass('is-open');
    });
});

})();

export const destinationsData = [
    {
        id: 1,
        name: "Индонезия",
        description: "Райский уголок с уникальной культурой и природой",
        imageUrl: "https://www.svoiludi.ru/images/tb/4760/indonesia-place-resorts-islands-16957509129871_w687h357.jpg",
        citiesCount: 3,
        cities: [
            {
                id: 1,
                name: "Бали",
                description: "Остров богов с бесконечными пляжами и храмами",
                imageUrl: "https://travelbelka.ru/wp-content/uploads/2020/02/manta-bay-or-kelingking-beach-on-nusa-penida-T8AHWZ6-696x392.jpg",
                toursCount: 3,
                tours: [
                    {
                        id: 1,
                        name: "Райский отдых на Бали",
                        price: 1200,
                        duration: 10,
                        maxPeople: 10,
                        rating: 4.8,
                        reviewsCount: 12,
                        imageUrl: "https://www.ecotour.by/upload/iblock/ee2/bali.jpg",
                        description: "Незабываемый отдых на райском острове с экскурсиями и спа-процедурами",
                        included: ["Проживание в отеле 5*", "Завтраки", "Трансфер", "Медицинская страховка", "Экскурсия на вулкан"],
                        reviews: [
                            { author: "Анна С.", date: "2024-03-15", rating: 5, text: "Потрясающий отдых! Все было организовано на высшем уровне." },
                            { author: "Михаил К.", date: "2024-02-10", rating: 4, text: "Очень понравилось, отличные экскурсии." },
                            { author: "Екатерина В.", date: "2024-01-20", rating: 5, text: "Спа-процедуры - это что-то невероятное!" },
                            { author: "Дмитрий П.", date: "2023-12-05", rating: 3, text: "Хорошо, но дороговато." },
                            { author: "Ольга Н.", date: "2023-11-18", rating: 5, text: "Лучший отпуск в моей жизни!" },
                            { author: "Сергей М.", date: "2023-10-22", rating: 4, text: "Все отлично, только питание однообразное." },
                            { author: "Наталья Д.", date: "2023-09-30", rating: 5, text: "Восторг! Особенно понравилась экскурсия на вулкан." },
                            { author: "Алексей И.", date: "2023-08-15", rating: 4.5, text: "Хороший тур, все включено." },
                            { author: "Ирина С.", date: "2023-07-20", rating: 5, text: "Спасибо за организацию!" },
                            { author: "Владимир Р.", date: "2023-06-10", rating: 4, text: "Достойный отдых. Цена соответствует качеству." }
                        ]
                    },
                    {
                        id: 2,
                        name: "Бали: Серфинг и приключения",
                        price: 1500,
                        duration: 12,
                        maxPeople: 8,
                        rating: 4.9,
                        reviewsCount: 10,
                        imageUrl: "https://www.atorus.ru/sites/default/files/upload/image/SovetyTuristam/4610/8.jpg",
                        description: "Активный отдых с обучением серфингу и походами в джунгли",
                        included: ["Проживание", "Завтраки и обеды", "Уроки серфинга", "Трансфер", "Страховка"],
                        reviews: [
                            { author: "Денис Л.", date: "2024-03-01", rating: 5, text: "Лучший серфинг в моей жизни!" },
                            { author: "Алексей Б.", date: "2024-02-15", rating: 4.8, text: "Отличный тур для активных людей." },
                            { author: "Максим С.", date: "2024-01-10", rating: 5, text: "Наконец-то освоил серфинг!" },
                            { author: "Антон К.", date: "2023-12-20", rating: 4, text: "Хороший тур, но очень утомительный." },
                            { author: "Павел Н.", date: "2023-11-05", rating: 5, text: "Невероятные эмоции!" },
                            { author: "Роман В.", date: "2023-10-12", rating: 4.5, text: "Организация на высоте." },
                            { author: "Илья Г.", date: "2023-09-08", rating: 5, text: "Мечта сбылась!" },
                            { author: "Артем Ф.", date: "2023-08-25", rating: 4, text: "Хорошо, но мало свободного времени." },
                            { author: "Виталий М.", date: "2023-07-14", rating: 5, text: "Лучший активный отдых!" },
                            { author: "Евгений Т.", date: "2023-06-30", rating: 4.5, text: "Отличный тур, рекомендую!" }
                        ]
                    },
                    {
                        id: 3,
                        name: "Балийские храмы и культура",
                        price: 1100,
                        duration: 8,
                        maxPeople: 12,
                        rating: 4.7,
                        reviewsCount: 8,
                        imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200",
                        description: "Погружение в культуру Бали с посещением главных храмов",
                        included: ["Проживание", "Завтраки", "Экскурсии", "Трансфер", "Гид"],
                        reviews: [
                            { author: "Мария К.", date: "2024-02-01", rating: 5, text: "Очень познавательная экскурсия!" },
                            { author: "Иван П.", date: "2024-01-15", rating: 4.5, text: "Интересно, но много ходьбы." }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Греция",
        description: "Страна древней истории и живописных островов",
        imageUrl: "https://www.astons.com/wp-content/uploads/2025/04/vse-o-santorini-2.webp",
        citiesCount: 2,
        cities: [
            {
                id: 1,
                name: "Санторини",
                description: "Романтический остров с белоснежными домиками",
                imageUrl: "https://www.astons.com/wp-content/uploads/2025/04/vse-o-santorini-2.webp",
                toursCount: 2,
                tours: [
                    {
                        id: 4,
                        name: "Санторини: Романтика Эгейского моря",
                        price: 1600,
                        duration: 8,
                        maxPeople: 6,
                        rating: 5.0,
                        reviewsCount: 10,
                        imageUrl: "https://www.astons.com/wp-content/uploads/2025/04/vse-o-santorini-2.webp",
                        description: "Идеальное место для медового месяца и романтического отдыха",
                        included: ["Вилла с видом на море", "Завтраки", "Романтический ужин", "Трансфер"],
                        reviews: [
                            { author: "Елена М.", date: "2024-02-20", rating: 5, text: "Самый красивый закат в моей жизни!" },
                            { author: "Андрей С.", date: "2024-01-25", rating: 5, text: "Невероятная атмосфера!" },
                            { author: "Мария К.", date: "2023-12-10", rating: 5, text: "Провели медовый месяц - незабываемо!" },
                            { author: "Дмитрий А.", date: "2023-11-05", rating: 4.5, text: "Очень красиво, но дороговато." },
                            { author: "Анастасия В.", date: "2023-10-18", rating: 5, text: "Мечта сбылась!" }
                        ]
                    },
                    {
                        id: 5,
                        name: "Санторини: Винные туры",
                        price: 1400,
                        duration: 7,
                        maxPeople: 10,
                        rating: 4.8,
                        reviewsCount: 6,
                        imageUrl: "https://www.foodandwine.com/thmb/KXdA3Bf_QNsy9IKqjZjRiz7t5uU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Wine-Flight-Greece-Santorini-MAG-0524-dc8d12fbbbdb45cdb2ceaa504b3540bf.jpg",
                        description: "Дегустация лучших вин Санторини",
                        included: ["Проживание", "Завтраки", "Винные туры", "Трансфер"],
                        reviews: []
                    }
                ]
            },
            {
                id: 2,
                name: "Афины",
                description: "Древняя столица с историческими памятниками",
                imageUrl: "https://t-v.by/upload/iblock/32c/32c706a3205e707c6ea0c1379758370d.jpg",
                toursCount: 1,
                tours: [
                    {
                        id: 6,
                        name: "Афины: Колыбель цивилизации",
                        price: 1000,
                        duration: 6,
                        maxPeople: 15,
                        rating: 4.7,
                        reviewsCount: 8,
                        imageUrl: "https://kidpassage.com/images/publications/afiny-oktyabre-otdyh-pogoda/cover_original.jpg",
                        description: "Экскурсионный тур по историческим местам Афин",
                        included: ["Проживание", "Завтраки", "Экскурсии", "Трансфер", "Гид"],
                        reviews: []
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Испания",
        description: "Страна фламенко, тапасов и солнечных пляжей",
        imageUrl: "https://ezdili-znaem.com/wp-content/uploads/2023/03/ostrov-tenerife-poster937.jpg",
        citiesCount: 2,
        cities: [
            {
                id: 1,
                name: "Тенерифе",
                description: "Остров вечной весны с вулканом Тейде",
                imageUrl: "https://ezdili-znaem.com/wp-content/uploads/2023/03/ostrov-tenerife-poster937.jpg",
                toursCount: 2,
                tours: [
                    {
                        id: 7,
                        name: "Тенерифе: Восхождение на Тейде",
                        price: 1400,
                        duration: 9,
                        maxPeople: 10,
                        rating: 4.9,
                        reviewsCount: 12,
                        imageUrl: "https://unigid.com/wp-content/uploads/2021/03/vulkan-teyde.jpg",
                        description: "Восхождение на вулкан Тейде и отдых на лучших пляжах",
                        included: ["Проживание", "Завтраки", "Экскурсия на Тейде", "Трансфер"],
                        reviews: [
                            { author: "Ольга Н.", date: "2024-03-10", rating: 5, text: "Тенерифе была моей мечтой, и Traveland помог осуществить ее!" },
                            { author: "Дмитрий С.", date: "2024-02-05", rating: 4.8, text: "Отличный тур, вулкан впечатляет!" }
                        ]
                    },
                    {
                        id: 8,
                        name: "Тенерифе: Пляжный рай",
                        price: 1200,
                        duration: 10,
                        maxPeople: 12,
                        rating: 4.7,
                        reviewsCount: 5,
                        imageUrl: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1200",
                        description: "Расслабляющий отдых на лучших пляжах Тенерифе",
                        included: ["Проживание", "Завтраки и ужины", "Трансфер", "Страховка"],
                        reviews: []
                    }
                ]
            },
            {
                id: 2,
                name: "Барселона",
                description: "Город Гауди и средиземноморского настроения",
                imageUrl: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200",
                toursCount: 1,
                tours: [
                    {
                        id: 9,
                        name: "Барселона: Архитектура Гауди",
                        price: 1100,
                        duration: 6,
                        maxPeople: 12,
                        rating: 4.8,
                        reviewsCount: 8,
                        imageUrl: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200",
                        description: "Погружение в мир удивительной архитектуры Гауди",
                        included: ["Проживание", "Завтраки", "Билеты в Саграда Фамилия", "Трансфер"],
                        reviews: []
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        name: "Италия",
        description: "Страна пиццы, пасты и вечного города",
        imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200",
        citiesCount: 3,
        cities: [
            {
                id: 1,
                name: "Рим",
                description: "Вечный город с богатой историей",
                imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200",
                toursCount: 2,
                tours: [
                    {
                        id: 10,
                        name: "Рим: Вечный город",
                        price: 1300,
                        duration: 7,
                        maxPeople: 15,
                        rating: 4.8,
                        reviewsCount: 10,
                        imageUrl: "https://cdn.pixabay.com/photo/2023/01/29/10/39/rome-7752970_1280.jpg ",
                        description: "Экскурсионный тур по главным достопримечательностям Рима",
                        included: ["Проживание", "Завтраки", "Экскурсии", "Трансфер", "Входные билеты"],
                        reviews: [
                            { author: "Антон К.", date: "2024-02-10", rating: 5, text: "Рим великолепен! Колизей - чудо света!" }
                        ]
                    },
                    {
                        id: 11,
                        name: "Рим: Ватикан и соборы",
                        price: 900,
                        duration: 5,
                        maxPeople: 15,
                        rating: 4.6,
                        reviewsCount: 6,
                        imageUrl: "https://www.italieonline.eu/img/t750h0/blogimg/leto/lazio/vatikan2.jpg",
                        description: "Посещение Ватикана и главных соборов Рима",
                        included: ["Проживание", "Завтраки", "Экскурсии", "Трансфер"],
                        reviews: []
                    }
                ]
            },
            {
                id: 2,
                name: "Венеция",
                description: "Город на воде с романтическими каналами",
                imageUrl: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=1200",
                toursCount: 1,
                tours: [
                    {
                        id: 12,
                        name: "Венеция: Город на воде",
                        price: 1400,
                        duration: 6,
                        maxPeople: 10,
                        rating: 4.9,
                        reviewsCount: 8,
                        imageUrl: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=1200",
                        description: "Романтическое путешествие по каналам Венеции",
                        included: ["Проживание", "Завтраки", "Прогулка на гондоле", "Трансфер"],
                        reviews: []
                    }
                ]
            },
            {
                id: 3,
                name: "Альпы",
                description: "Величественные горы с захватывающими видами и горнолыжными курортами",
                imageUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200",
                toursCount: 1,
                tours: [
                    {
                        id: 13,
                        name: "Путешествие в Итальянские Альпы",
                        price: 2000,
                        duration: 8,
                        maxPeople: 10,
                        rating: 5.0,
                        reviewsCount: 12,
                        imageUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200",
                        description: "Незабываемое приключение в сердце Итальянских Альп с восхождениями и ночевками в горах",
                        included: ["Проживание в горных шале", "Завтраки и ужины", "Гид-альпинист", "Трансфер", "Страховка", "Снаряжение"],
                        reviews: [
                            { author: "Максим С.", date: "2024-02-15", rating: 5, text: "Невероятные виды! Альпы покорили мое сердце!" },
                            { author: "Анна К.", date: "2024-01-20", rating: 5, text: "Лучшее путешествие в моей жизни. Обязательно вернусь!" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        name: "Япония",
        description: "Страна восходящего солнца и передовых технологий",
        imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200",
        citiesCount: 3,
        cities: [
            {
                id: 1,
                name: "Токио",
                description: "Гигантский мегаполис с уникальной культурой",
                imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200",
                toursCount: 1,
                tours: [
                    {
                        id: 14,
                        name: "Токио: Город будущего",
                        price: 2200,
                        duration: 9,
                        maxPeople: 12,
                        rating: 4.9,
                        reviewsCount: 10,
                        imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200",
                        description: "Знакомство с современным Токио и традиционной японской культурой",
                        included: ["Проживание", "Завтраки", "Трансфер", "Страховка", "Гид"],
                        reviews: [
                            { author: "Артем Ф.", date: "2024-01-20", rating: 5, text: "Токио превзошел все ожидания!" }
                        ]
                    }
                ]
            },
            {
                id: 2,
                name: "Киото",
                description: "Древняя столица с храмами и садами",
                imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200",
                toursCount: 1,
                tours: [
                    {
                        id: 15,
                        name: "Киото: Традиционная Япония",
                        price: 1800,
                        duration: 7,
                        maxPeople: 10,
                        rating: 4.9,
                        reviewsCount: 6,
                        imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200",
                        description: "Погружение в традиционную японскую культуру и историю",
                        included: ["Проживание", "Завтраки", "Экскурсии в храмы", "Трансфер"],
                        reviews: []
                    }
                ]
            },
            {
                id: 3,
                name: "Фудзи",
                description: "Величественная гора Фудзи и живописные озера",
                imageUrl: "https://a-static.besthdwallpaper.com/japan-mount-fuji-wallpaper-3200x900-81110_74.jpg",
                toursCount: 2,
                tours: [
                    {
                        id: 16,
                        name: "Восхождение на гору Фудзи",
                        price: 2500,
                        duration: 5,
                        maxPeople: 8,
                        rating: 5.0,
                        reviewsCount: 15,
                        imageUrl: "https://dailystorm.ru/media/images/2019/08/27/da0df858-5cd1-4f5e-b20f-92d7e1029e45.jpg",
                        description: "Экстремальное восхождение на священную гору Фудзи с опытным гидом",
                        included: ["Снаряжение", "Гид", "Проживание в гостевом доме", "Питание", "Трансфер"],
                        reviews: [
                            { author: "Алексей К.", date: "2024-03-10", rating: 5, text: "Невероятные впечатления! Восход на вершине - это магия!" }
                        ]
                    },
                    {
                        id: 17,
                        name: "Озёра Фудзи: Природное великолепие",
                        price: 1200,
                        duration: 4,
                        maxPeople: 12,
                        rating: 4.8,
                        reviewsCount: 8,
                        imageUrl: "https://visitjapan.ru/storage/app/media/Spot/6620/image/yamanashi913-8.jpeg",
                        description: "Путешествие по живописным озерам у подножия горы Фудзи",
                        included: ["Проживание", "Завтраки", "Экскурсии", "Трансфер"],
                        reviews: []
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        name: "Бразилия",
        description: "Страна карнавалов, футбола и тропических лесов",
        imageUrl: "https://www.equatorial.by/sites/default/files/brazil_rio_isus003.jpg",
        citiesCount: 1,
        cities: [
            {
                id: 1,
                name: "Рио-де-Жанейро",
                description: "Город контрастов с знаменитым пляжем Копакабана",
                imageUrl: "https://extraguide.ru/images/blog/2022/01-31-tk3o84-gora-saharnaya-golova.jpg",
                toursCount: 2,
                tours: [
                    {
                        id: 18,
                        name: "Рио: Христа-Искупителя и Копакабана",
                        price: 1700,
                        duration: 7,
                        maxPeople: 12,
                        rating: 4.9,
                        reviewsCount: 10,
                        imageUrl: "https://www.equatorial.by/sites/default/files/brazil_rio_isus003.jpg",
                        description: "Знакомство с главными достопримечательностями Рио-де-Жанейро",
                        included: ["Проживание", "Завтраки", "Экскурсии", "Трансфер", "Билеты"],
                        reviews: []
                    },
                    {
                        id: 19,
                        name: "Карнавал в Рио",
                        price: 3000,
                        duration: 10,
                        maxPeople: 15,
                        rating: 5.0,
                        reviewsCount: 12,
                        imageUrl: "https://yamal-media.ru/images/insecure/rs:fill-down:1920:1080/aHR0cHM6Ly9zdG9yYWdlLnlhbmRleGNsb3VkLm5ldC95bS1zaXRlcy1zdGF0aWMvOGRkNWFlMmEtNDA0LndlYnA.webp",
                        description: "Погружение в атмосферу легендарного бразильского карнавала",
                        included: ["Проживание", "Билеты на карнавал", "Костюм", "Трансфер", "Гид"],
                        reviews: []
                    }
                ]
            }
        ]
    },
    {
        id: 7,
        name: "Франция",
        description: "Страна любви, вина и изысканной кухни",
        imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200",
        citiesCount: 3,
        cities: [
            {
                id: 1,
                name: "Париж",
                description: "Город любви, света и романтики с Эйфелевой башней",
                imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200",
                toursCount: 2,
                tours: [
                    {
                        id: 20,
                        name: "Париж: Романтика столицы",
                        price: 1500,
                        duration: 7,
                        maxPeople: 12,
                        rating: 4.9,
                        reviewsCount: 25,
                        imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200",
                        description: "Романтическое путешествие по Парижу с посещением Эйфелевой башни, Лувра и Монмартра",
                        included: ["Проживание в центре", "Завтраки", "Экскурсии", "Трансфер", "Билеты в Лувр"],
                        reviews: [
                            { author: "Екатерина М.", date: "2024-03-20", rating: 5, text: "Париж - город мечты! Все было великолепно!" },
                            { author: "Александр П.", date: "2024-02-10", rating: 4.8, text: "Отличный тур, очень понравилась экскурсия в Лувр." }
                        ]
                    },
                    {
                        id: 21,
                        name: "Версаль: Королевская роскошь",
                        price: 800,
                        duration: 3,
                        maxPeople: 15,
                        rating: 4.8,
                        reviewsCount: 15,
                        imageUrl: "https://blog.global-guide.org/wp-content/uploads/2025/01/111-176.jpg",
                        description: "Экскурсия в знаменитый Версальский дворец и его сады",
                        included: ["Трансфер", "Гид", "Входные билеты"],
                        reviews: []
                    }
                ]
            },
            {
                id: 2,
                name: "Лазурный берег",
                description: "Роскошные пляжи и знаменитые курорты",
                imageUrl: "https://pohcdn.com/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Cote-d%27Azur.jpg",
                toursCount: 2,
                tours: [
                    {
                        id: 22,
                        name: "Лазурный берег: Ницца и Канны",
                        price: 1800,
                        duration: 8,
                        maxPeople: 10,
                        rating: 4.9,
                        reviewsCount: 18,
                        imageUrl: "https://pohcdn.com/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Cote-d%27Azur.jpg",
                        description: "Отдых на роскошных пляжах Лазурного берега с посещением Ниццы, Канн и Монако",
                        included: ["Проживание у моря", "Завтраки", "Экскурсии", "Трансфер"],
                        reviews: [
                            { author: "Мария С.", date: "2024-02-25", rating: 5, text: "Невероятная поездка! Монако - сказка!" }
                        ]
                    },
                    {
                        id: 23,
                        name: "Сен-Тропе: Гламурный отдых",
                        price: 2200,
                        duration: 7,
                        maxPeople: 8,
                        rating: 5.0,
                        reviewsCount: 12,
                        imageUrl: "https://images.unsplash.com/photo-1519045430330-1b7fcbe062e1?w=1200",
                        description: "VIP-отдых в самом гламурном курорте Франции",
                        included: ["Вилла", "Завтраки и ужины", "Яхт-тур", "Трансфер", "Страховка"],
                        reviews: []
                    }
                ]
            },
            {
                id: 3,
                name: "Прованс",
                description: "Лавандовые поля и уютные деревушки",
                imageUrl: "https://pohcdn.com/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Provence.jpg",
                toursCount: 1,
                tours: [
                    {
                        id: 24,
                        name: "Прованс: Лавандовое сердце Франции",
                        price: 1300,
                        duration: 6,
                        maxPeople: 12,
                        rating: 4.9,
                        reviewsCount: 14,
                        imageUrl: "https://pohcdn.com/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Provence.jpg",
                        description: "Путешествие по лавандовым полям Прованса с дегустацией вин и сыров",
                        included: ["Проживание в замке", "Завтраки", "Винные туры", "Трансфер", "Гид"],
                        reviews: [
                            { author: "Ольга К.", date: "2024-03-05", rating: 5, text: "Лавандовые поля - это что-то невероятное!" }
                        ]
                    }
                ]
            }
        ]
    }
];
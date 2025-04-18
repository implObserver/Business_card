import ticTacToeImage1 from '@/shared/assets/projects/ticTacToe/ticTacToe_scale,w_50.webp';
import ticTacToeImage2 from '@/shared/assets/projects/ticTacToe/ticTacToe_scale,w_905.webp';
import ticTacToeImage3 from '@/shared/assets/projects/ticTacToe/ticTacToe_scale,w_1318.webp';

import battleShipImage1 from '@/shared/assets/projects/battleShip/battleShip_znkt60_c_scale,w_50.webp';
import battleShipImage2 from '@/shared/assets/projects/battleShip/battleShip_znkt60_c_scale,w_750.webp';
import battleShipImage3 from '@/shared/assets/projects/battleShip/battleShip_znkt60_c_scale,w_1318.webp';

import knightTravelersImage1 from '@/shared/assets/projects/knightTravelers/knightTravelers_ipiv1f_c_scale,w_50.webp';
import knightTravelersImage2 from '@/shared/assets/projects/knightTravelers/knightTravelers_ipiv1f_c_scale,w_727.webp';
import knightTravelersImage3 from '@/shared/assets/projects/knightTravelers/knightTravelers_ipiv1f_c_scale,w_1318.webp';

import todoManagerImage1 from '@/shared/assets/projects/TODO-Manager/TODO-Manager_lj0ive_c_scale,w_50.webp';
import todoManagerImage2 from '@/shared/assets/projects/TODO-Manager/TODO-Manager_lj0ive_c_scale,w_1160.webp';
import todoManagerImage3 from '@/shared/assets/projects/TODO-Manager/TODO-Manager_lj0ive_c_scale,w_1318.webp';

import weatherAppImage1 from '@/shared/assets/projects/WeatherApp/WeatherApp_pqwqwj_c_scale,w_50.webp';
import weatherAppImage2 from '@/shared/assets/projects/WeatherApp/WeatherApp_pqwqwj_c_scale,w_688.webp';
import weatherAppImage3 from '@/shared/assets/projects/WeatherApp/WeatherApp_pqwqwj_c_scale,w_1318.webp';

import cvApplicationImage1 from '@/shared/assets/projects/cvApplication/cvApplication_rvirmq_c_scale,w_50.webp';
import cvApplicationImage2 from '@/shared/assets/projects/cvApplication/cvApplication_rvirmq_c_scale,w_795.webp';
import cvApplicationImage3 from '@/shared/assets/projects/cvApplication/cvApplication_rvirmq_c_scale,w_1223.webp';

import memoryCardImage1 from '@/shared/assets/projects/memoryCard/memoryCard_uutnw8_c_scale,w_50.webp';
import memoryCardImage2 from '@/shared/assets/projects/memoryCard/memoryCard_uutnw8_c_scale,w_785.webp';
import memoryCardImage3 from '@/shared/assets/projects/memoryCard/memoryCard_uutnw8_c_scale,w_1195.webp';

import blogApiImage1 from '@/shared/assets/projects/blogApi/blogApi_oop04s_c_scale,w_50.webp';
import blogApiImage2 from '@/shared/assets/projects/blogApi/blogApi_oop04s_c_scale,w_773.webp';
import blogApiImage3 from '@/shared/assets/projects/blogApi/blogApi_oop04s_c_scale,w_1237.webp';

import passwordManagerImage1 from '@/shared/assets/projects/passwordManager/passwordManager_fhreup_c_scale,w_50.webp'
import passwordManagerImage2 from '@/shared/assets/projects/passwordManager/passwordManager_fhreup_c_scale,w_713.webp'
import passwordManagerImage3 from '@/shared/assets/projects/passwordManager/passwordManager_fhreup_c_scale,w_1083.webp'
import passwordManagerImage4 from '@/shared/assets/projects/passwordManager/passwordManager_fhreup_c_scale,w_1152.webp'

import oldBusinessCardImage1 from '@/shared/assets/projects/oldBusinessCard/oldBusinessCard_violjy_c_scale,w_50.webp';
import oldBusinessCardImage2 from '@/shared/assets/projects/oldBusinessCard/oldBusinessCard_violjy_c_scale,w_817.webp';
import oldBusinessCardImage3 from '@/shared/assets/projects/oldBusinessCard/oldBusinessCard_violjy_c_scale,w_1244.webp';

import testProductsImage1 from '@/shared/assets/projects/testProduct/screen.png'
import testTodoImage1 from '@/shared/assets/projects/testTodo/testTodo.png'

import fabrica from '@/shared/assets/projects/fabrica_of_projects/Вставленное изображение.png'

import autoPlusMagazine from '@/shared/assets/projects/autoPlusMagazine/Вставленное изображение.png'
import noimage from '@/shared/assets/noimage.png'

export const projects = {
    TicTacToe: {
        type: 'Vanilla',
        name: "Крестики-нолики",
        description: [],
        parameters: [
            "Оффлайн",
            "До 4 игроков",
            "Присутствует непобедимый min-max алгоритм"
        ],
        preview: [ticTacToeImage1, ticTacToeImage2, ticTacToeImage3],
        link: "https://implobserver.github.io/TicTacToe/",
        repository: "https://github.com/implObserver/TicTacToe"
    },
    BattleShip: {
        type: 'Vanilla',
        name: "Морской бой",
        description: [],
        parameters: [
            "Оффлайн",
            "2 игрока",
            "Формат классический, русский"
        ],
        preview: [battleShipImage1, battleShipImage2, battleShipImage3],
        link: "https://implobserver.github.io/BattleShip/",
        repository: "https://github.com/implObserver/BattleShip"
    },
    KnightsTravails: {
        type: 'Vanilla',
        name: "Путь конем",
        description: [
            "Визуализация алгоритма, который выстраивает кратчайший путь конем из произвольных пунктов А и Б.",
            "При построении пути применяется граф."
        ],
        parameters: [],
        preview: [knightTravelersImage1, knightTravelersImage2, knightTravelersImage3],
        link: "https://implobserver.github.io/KnightsTravails/",
        repository: "https://github.com/implObserver/KnightsTravails"
    },
    /*TODOManager: {
        name: "Записная книжка",
        description: [
            "Примитивная имитация файловой системы внутри веб-браузера. Можно создавать структуры папок и текстовых записей.",
            "Для хранения данных применяется localStorage."
        ],
        parameters: [],
        preview: [todoManagerImage1, todoManagerImage2, todoManagerImage3],
        link: "https://implobserver.github.io/TODO-Manager/",
        repository: "https://github.com/implObserver/TODO-Manager"
    },
    WeatherApp: {
        name: "Прогноз погоды",
        description: [
            "Веб-страничка, которая позволяет получить прогноз погоды для какого-нибудь города.",
            "В проекте применяется 2 API, одно для получения информации о погоде, другое для обновления фоновых изображений на странице."
        ],
        parameters: [],
        preview: [weatherAppImage1, weatherAppImage2, weatherAppImage3],
        link: "https://implobserver.github.io/WeatherApp/",
        repository: "https://github.com/implObserver/WeatherApp"
    },*/
    /*CVApplication: {
        type: 'React',
        name: "Резюме-конструктор",
        description: [
            "Написанный на реакт конструктор для резюме."
        ],
        parameters: [],
        preview: [cvApplicationImage1, cvApplicationImage2, cvApplicationImage3],
        link: "https://cv-applicationstudyproject.netlify.app/",
        repository: "https://github.com/implObserver/CV-Applications"
    },*/
    MemoryCard: {
        type: 'React',
        name: "Игра 'Запомни карту'",
        description: [
            "Написанный на React сайт-игра, на котором надо набрать как можно больше очков, не повторившись при выборе карты.",
            "Сайт написан с применением Redux Toolkit.",
            "В проекте применяется архитектура FSD."
        ],
        parameters: [
            "React",
            "Redux Toolkit",
            "Feature Sliced Design",
            "1 игрок"
        ],
        preview: [memoryCardImage1, memoryCardImage2, memoryCardImage3],
        link: "https://memorycardgamepokemon.netlify.app/",
        repository: "https://github.com/implObserver/MemoryCard"
    },
    BlogApi: {
        type: 'React, FullStack',
        name: "Блог",
        description: [
            "Fullstack приложение, блог+конструктор для постов блога.",
            "Можно конструировать свои посты и публиковать в блоге.",
            "ВНИМАНИЕ: применяются бесплатные хостинги, возможны проблемы с доступом к сайту или замедление работы.",
            "НЕОБХОДИМО подождать несколько минут, прежде чем сайт заработает"
        ],
        parameters: [
            "Два фронтенда",
            "React",
            "Feature Sliced Design",
            "SPA(The Single Page Application)",
            "Redux Toolkit/Persist",
            "IndexedDB",
            "postgresql(Prisma)",
            "node js(express)",
            "Passport(local/jwt)",
            "Авторизация с рассылкой на почтовый ящик",
            "Присутствует непобедимый min-max алгоритм",
            "onlyhttp Cookies"
        ],
        preview: [blogApiImage1, blogApiImage2, blogApiImage3],
        link: "https://blogapifront.netlify.app/",
        repository: "https://github.com/implObserver/Blog_API_Solutions"
    },
    PasswordManager: {
        type: 'React',
        name: "Менеджер Паролей",
        description: [
            "Простой менеджер паролей",
            "Только фронт-енд"
        ],
        parameters: [
            "React",
            "Hybrid pseudoservices Feature Sliced Design - собственная разработка",
            "SPA(The Single Page Application)",
            "Redux Toolkit/Persist",
        ],
        preview: [passwordManagerImage1, passwordManagerImage2, passwordManagerImage3, passwordManagerImage4],
        link: "https://ultimatepasswordmanager.netlify.app/",
        repository: "https://github.com/implObserver/shoppingCart_backEnd-microservices"
    },
    TestProduct: {
        type: 'React',
        name: "Магазин",
        description: [
            "Простой магазин",
            "Только фронт-енд",
            "Товары получены Platzi Fake Store API"
        ],
        parameters: [
            "React",
            "Hybrid pseudoservices Feature Sliced Design - собственная разработка",
            "SPA(The Single Page Application)",
            "Redux Toolkit/Persist",
        ],
        preview: [testProductsImage1],
        link: "https://superb-llama-93e7c0.netlify.app/",
        repository: "https://github.com/implObserver/testProducts/tree/main"
    },
    TestTodo: {
        type: 'React',
        name: "Задачник",
        description: [
            "Простой задачник",
            "Только фронт-енд",
        ],
        parameters: [
            "React",
            "Hybrid pseudoservices Feature Sliced Design - собственная разработка",
            "SPA(The Single Page Application)",
            "Redux Toolkit/Persist",
        ],
        preview: [testTodoImage1],
        link: "https://sunny-marigold-d035ca.netlify.app/",
        repository: "https://github.com/implObserver/testTODO"
    },
    OldBusinessSite: {
        type: 'Vanilla',
        name: "Старый сайт-визитка",
        description: [
            "Мой первый сайт визитка.",
            "Написан без использования react и FSD, труден для масштабирования.",
        ],
        parameters: [],
        preview: [oldBusinessCardImage1, oldBusinessCardImage2, oldBusinessCardImage3],
        link: "https://implobserver.github.io/homepage/",
        repository: "https://github.com/implObserver/homepage"
    },
    FabricaOfProjects: {
        type: 'NextJS',
        name: "Фабрика проектов",
        description: [
            "Участие в разработке сайта.",
            "Разработка личного кабинета стартапера на этапе MVP-1",
            "Рефакторинг кода и архитектуры проекта"
        ],
        parameters: [
            'NextJS',
            'Tailwind',
            'TypeScript',
            'RTK Query'
        ],
        preview: [fabrica],
        link: "https://fabrica-frontend-react.vercel.app/",
        repository: "https://github.com/salfa-ru/fabrica_frontend_react"
    },
    AutoPlusMagazine: {
        type: 'React',
        name: "Магазин автозапчастей AutoPlus",
        description: [
            "Разработка фронтенд.",
            "Упрощенный сайт-магазин без личного кабинета для магазина автозапчастей",
        ],
        parameters: [
            'React',
            'Tailwind',
            'TypeScript',
            'RTK Query',
        ],
        preview: [autoPlusMagazine],
        link: "https://aplys.ru/products?page=1",
        repository: "https://github.com/implObserver/autoPlusMagazine"
    },

    PriceSeller: {
        type: 'NextJS',
        name: "PriceSeller",
        description: [
            "Участие в разработке системы учета торговли.",
            "Единолично: Проектирование архитектуры и разработка фронтент. Реализация Passport JWT HttpOnly на laravel",
            "В команде: организация SWAGGER и DOXYGEN. Проектирование RestAPI"
        ],
        parameters: [
            'React',
            'Tailwind',
            'TypeScript',
            'RTK Query',
        ],
        preview: [noimage],
        link: "",
        repository: "https://github.com/implObserver/priceseller"
    }
};
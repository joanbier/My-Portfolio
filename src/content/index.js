const content = {
  nav: {
    linksENG: [
      { name: "Home", path: "home" },
      { name: "About", path: "about" },
      { name: "Projects", path: "projects" },
      { name: "Contact", path: "contact" }
    ],
    linksPL: [
      { name: "Główna", path: "home" },
      { name: "O mnie", path: "about" },
      { name: "Projekty", path: "projects" },
      { name: "Kontakt", path: "contact" }
    ]
  },
  header: {
    greeting: {
      ENG: "Hi!",
      PL: "Cześć!"
    },
    subtitle: {
      ENG: "Welcome to my portfolio website.",
      PL: "Witaj na stronie mojego portfolio"
    },
    button: {
      ENG: "Discover More",
      PL: "Zobacz więcej"
    },
    typicalEng: [
      "Hello World! 🌎",
      "It's about Front-End Developing 💻",
      "Take a look at my projects 👀"
    ],
    typicalPl: [
      "Witaj świecie! 🌎",
      "Pogadajmy o frontendzie 💻",
      "Spójrz na moje projekty 👀"
    ]
  },
  about: {
    ENG:
      "My name is Joanna Biernat and I would like to become a professional Front-end Developer. My adventure with programming started about 2 years ago. I try to keep up with standards. Developing accessible, responsive, optimized websites with SEO and performance in mind is a priority for me. My main focus lies on the front-end, JavaScript and React/Angular development. I graduated the 'Basic JavaScript + React' at CODE:ME academy in Gdańsk. I finished a few interesting courses on Udemy platform as well. In the future, I want to learn Angular.js and get know something about back-end development. Currently, I am looking for my first job in IT sector, therefore I still foster and improve my programming skills of JavaScript.",
    PL:
      "Nazywam się Joanna Biernat i chciałabym zostać zawodowym Front-end Developerem. Moja przygoda z programowaniem zaczęła się około 2 lata temu. Staram się trzymać wszelkich standardów. Tworzenie dostępnych, responsywnych, zoptymalizowanych stron internetowych z myślą o SEO i wydajności jest dla mnie priorytetem. Skupiam się głównie na rozwoju front-endu, JavaScript i React / Angular. Ukończyłam kurs 'JavaScript + React od podstaw' fundancji CODE:ME z siedzibą w Gdańsku. Przerobiłam równiez kilka interesujących kursów na platformie Udemy. Moje plany na przyszłość to zapoznanie się z frameworkiem Angular i dowiedzieć się czegoś o backendzie. Obecnie poszukuję swojej pierwszej pracy w sektorze IT, daltego cały czas staram się pielęgnować i ulepszać moje zdolności programistyczne w języku JavaScript"
  },
  contact: {
    subtitle: {
      ENG:
        "If you require any further information,feel free to mail me at j.biernat955@gmail.com or use the form below.",
      PL:
        "Jeśli potrzebujesz więcej informacji, proszę skontaktuj się ze mną mailowo pod adresem j.biernat955@gmail.com lub użyj poniższego formularza"
    },
    placeholder: [
      {
        ENG: "Job offer - Front-End Developer",
        PL: "Oferta pracy - Front-End Developer"
      },
      {
        ENG: "example@mail.com",
        PL: "jankowalski@mail.com"
      },
      {
        ENG:
          "Hey! We would like to have you in our team. Check out our job offer and join us...",
        PL:
          "Hej! Chcielibyśmy mieć Cię w naszym zespole. Sprawdź naszą ofertę pracy..."
      }
    ]
  },
  projects: [
    {
      title: "PhotoBlog",
      id: "photoblog-1",
      img: process.env.PUBLIC_URL + "/assets/blog.png",
      alt: "Photography blog application",
      description: {
        PL:
          "Aplikacja bazuje na dokumentacji Unsplash API. Aplikacja pozwala przeglądać różne zdjęcia i uzyskać więcej w danej tematyce. Aplikacja umożliwia sortowanie pozycji według daty publikacji lub polubień, które zdobyły. Jeśli jesteś ciekawy autora wybranego zdjęcia, istnieje możliwość obejrzenia opisu tej osoby i przejrzenia jej portfolio klikając na nazwisko autora. Możesz także udostępnić dane zdjęcie na Facebooku, wyszukiwać zdjęć według zapytania lub uzyskać losowe.",

        ENG:
          "The Application is based on Unsplash API documentation. You can review the pictures, and browse more similar thanks to them ID. The app provides you to sort the items by publication date or likes which them gained. If you are curious about the author of the selected photo, there is possibility to see description of that person and review his or her portfolio clicking on the author name. You can also share pics on Facebook, search photos by your query or get a random one."
      },
      links: {
        live: "https://joanbier.github.io/Blog-API-React/",
        code: "https://github.com/joanbier/Blog-API-React"
      }
    },
    {
      title: "WeatherApp",
      id: "weatherapp-2",
      img: process.env.PUBLIC_URL + "/assets/weather-app.png",
      alt: "Weather application",
      description: {
        PL:
          "Ta aplikacja pogodowa pozwala uzyskać prognozę pogody dla każdego miejsca na świecie. Można wyszukać dane miejsce lub wybrać miasto z 5 gotowych przycisków. Dostępna jest aktualna, godzinowa (następne 5h) i dzienna (następne 7 dni) prognoza pogody. Istnieją również szczegóły pogodowe takie jak ciśnienie, czas wschodu słońca, UV, wiatr itp.",

        ENG:
          "My weather aplication allows you to get weather forecast for every place in the world. It has an input to search city or 5 city buttons. There is a current, hourly(next 5h) and daily(next 7days) weather forecast. There are details (such as pressure, sunrise time, UV, wind as so on) for the current weather as well"
      },
      links: {
        live: "https://joanbier.github.io/Weather-App/",
        code: "https://github.com/joanbier/Weather-App"
      }
    },
    {
      title: "ToDo List",
      id: "todo-list-3",
      img: process.env.PUBLIC_URL + "/assets/to-do-app.png",
      alt: "ToDo list application",
      description: {
        PL:
          "Ten projekt umożliwia wprowadzenie zadania, wybranie terminu, usunięcie zadań lub potwierdzenie wykonania zadania. Możesz także wybrać zadanie jako priorytetowe. Aplikacja sortuje elementy w kolejności alfabetycznej, ale ważne zadania i tak są w pierwszej kolejności. Zrealizowane zadania posortowane są według dat.",

        ENG:
          "This project allows you to enter a task, select a deadline, delete tasks, or confirm a task as done. You can also select task as an important one. The application sorts the items in alphabetical order, but the important tasks are on the top anyway. The realized tasks are sorted by date."
      },
      links: {
        live: "https://joanbier.github.io/ToDo-App/",
        code: "https://github.com/joanbier/ToDo-App"
      }
    },
    {
      title: "Movie Search",
      id: "movie-search-4",
      img: process.env.PUBLIC_URL + "/assets/movie-search.png",
      alt: "Movie search application",
      description: {
        PL:
          "Przedstawiona aplikacja to wyszukiwarka filmów. Strona wysyła żądanie do serwera OMDb API (http://www.omdbapi.com). Aplikacja pozwala na pobranie informacji o danym filmie tzn. opis filmu (długi lub krótki), podgląd plakatu, dane o obsadzie, nagrodach, zyskach i tak dalej",

        ENG:
          "The App presents a simple movie search application. The application sends a request to the OMDb API server (http://www.omdbapi.com). This website provides to review description (long or short) of the movie, see a poster, boxoffice, cast, awards and so on"
      },
      links: {
        live: "https://joanbier.github.io/movie-search-app/",
        code: "https://github.com/joanbier/movie-search-app"
      }
    },
    {
      title: "Arkanoid",
      id: "arkanoid-5",
      img: process.env.PUBLIC_URL + "/assets/arkanoid.png",
      alt: "Arkanoid application",
      description: {
        PL:
          "Ten projekt przedstawia klasyczną grę o nazwie arkanoid. Gra polega na odbijaniu piłki, łamaniu cegieł i zbieraniu punktów. Aby rozpocząć grę, wystarczy kliknąć i przytrzymać lewy przycisk myszy. Aby poruszać belką nalezy ruszać myszką. Wybróbuj sam, powodzenia!",

        ENG:
          "This project presents a classic game called arkanoid. The game is about bouncing the ball, breaking the bricks and collecting points. To start the game, just click and hold the left mouse button. To move the paddle you need to move your mouse clicked before. Just give it a try and good luck!"
      },
      links: {
        live: "https://joanbier.github.io/Arkanoid/",
        code: "https://github.com/joanbier/Arkanoid"
      }
    },
    {
      title: "Online Shop",
      id: "online-shop-6",
      img: process.env.PUBLIC_URL + "/assets/electro-shop.png",
      alt: "Application of online shop with electronic stuff",
      description: {
        PL:
          "Ta aplikacja korzysta z biblioteki Bootstrap. To prosty sklep internetowy. Możesz dodawać przedmioty do koszyka i płacić za nie za pomocą PayPal.",

        ENG:
          "This application uses a Bootstrap library. It's a simple online shop. You can add items to your cart and pay for them using PayPal."
      },
      links: {
        live: "https://joanbier.github.io/Online-ElectroShop/",
        code: "https://github.com/joanbier/Online-ElectroShop"
      }
    },
    {
      title: "Space Adventure",
      id: "space-adventure-7",
      img: process.env.PUBLIC_URL + "/assets/space-adventure.png",
      alt:
        "Application built in react router, it contains spacecrafts to display",
      description: {
        PL:
          "Ten projekt przedstawia aplikację jednostronicową zbudowaną za pomocą React Router. Serwis zawiera cztery podstrony i ścieżki dla wybranych produktów. Tło w nagłówku jest zależny od podwitryny",

        ENG:
          "This project presents Single Page Application with a React Router. The website contains four subsites and paths for selected products. The background in header changes depend on subsite"
      },
      links: {
        live: "https://joanbier.github.io/React_Router-Space-Adventure/",
        code: "https://github.com/joanbier/React_Router-Space-Adventure"
      }
    },
    {
      title: "Martians attack",
      id: "martians-attack-8",
      img: process.env.PUBLIC_URL + "/assets/martians-attack.png",
      alt: "Flying saucers, earth and moon in the spacevoid",
      description: {
        PL:
          "Kod przedstawia prostą animację i daje efekt 3D. Animacja jest wykonywana przy poruszaniu myszką.",

        ENG:
          "The code presents a simple animation and gives a 3D effect . The animation is performed when you move the mouse."
      },
      links: {
        live: "https://joanbier.github.io/Animation-Mars-Attacks/",
        code: "https://github.com/joanbier/Animation-Mars-Attacks"
      }
    },
    {
      title: "Calculator",
      id: "calculator-9",
      img: process.env.PUBLIC_URL + "/assets/calculator.png",
      alt: "Calculator application",
      description: {
        PL: "Podstawowy kalkulator napisany w React :)",

        ENG: "Basic calculator written in React"
      },
      links: {
        live: "https://joanbier.github.io/Calculator-in-React/",
        code: "https://github.com/joanbier/Calculator-in-React"
      }
    },
    {
      title: "Robot Animation",
      id: "robot-10",
      img: process.env.PUBLIC_URL + "/assets/robot.png",
      alt: "Animation of the robot",
      description: {
        PL:
          "Animacja wykorzystuje bibliotekę GSAP do animowania obrazu svg. Robot mruga, porusza nogami, a na jego tułowiu pojawia się kolorowy efekt fali. Dodatkowo wykonywany jest efekt pisania na maszynie",

        ENG:
          "The animation uses the GSAP library to animate svg image. The robot blinks, moves its legs and there is a colorful wave effect on its chest. Additionaly there is a typing effect"
      },
      links: {
        live: "https://joanbier.github.io/Robot-Animation-SVG/",
        code: "https://github.com/joanbier/Robot-Animation-SVG"
      }
    }
  ]
};

export default content;

const model = {
  app: document.getElementById("app"),

  viewState: {
    currentPage: "home",
    selectedPlaceId: null,
  },

  data: {
    places: [
      {
        id: 1,
        title: "Oslo",
        category: "Storby",
        shortDescription: "Kultur, mat og byliv ved Oslofjorden.",
        description:
          "Oslo er Norges hovedstad og byr på en blanding av moderne arkitektur, historie, kultur og natur. Her finner du museer, restauranter, parker og kort vei til både fjord og skog.",
        population: "ca. 720 000",
        region: "Østlandet",
        activities: [
          "Besøke Munchmuseet",
          "Gå langs Akerselva",
          "Utforske Grünerløkka",
          "Ta badstue ved fjorden",
        ],
      },

      {
        id: 2,
        title: "Bergen",
        category: "Kystby",
        shortDescription: "Fjell, historie og vestlandsk byliv.",
        description:
          "Bergen ligger mellom syv fjell og er kjent for Bryggen, Fløyen og nærheten til fjordene. Byen har en lang historie som handelsby og et aktivt kulturliv.",
        population: "ca. 290 000",
        region: "Vestlandet",
        activities: [
          "Besøke Bryggen",
          "Ta Fløibanen",
          "Besøke Fisketorget",
          "Dra på fjordtur",
        ],
      },

      {
        id: 3,
        title: "Tromsø",
        category: "Nord-Norge",
        shortDescription: "Nordlys og arktiske opplevelser.",
        description:
          "Tromsø ligger nord for polarsirkelen og er et populært reisemål for nordlys, midnattssol og arktiske naturopplevelser.",
        population: "ca. 80 000",
        region: "Nord-Norge",
        activities: [
          "Se nordlyset",
          "Besøke Ishavskatedralen",
          "Ta Fjellheisen",
          "Dra på hvalsafari",
        ],
      },

      {
        id: 4,
        title: "Lofoten",
        category: "Natur",
        shortDescription: "Dramatiske fjell og små fiskevær.",
        description:
          "Lofoten er kjent for spektakulære fjell, strender og tradisjonelle fiskevær. Området er populært blant både fotografer, surfere og fjellvandrere.",
        population: "ca. 25 000",
        region: "Nordland",
        activities: [
          "Gå fjelltur",
          "Besøke Reine",
          "Surfe på Unstad",
          "Oppleve midnattssolen",
        ],
      },

      {
        id: 5,
        title: "Stavanger",
        category: "Kystby",
        shortDescription: "Mat, historie og spektakulær natur.",
        description:
          "Stavanger kombinerer et moderne byliv med historiske trehus og nærhet til noen av Norges mest kjente naturopplevelser.",
        population: "ca. 150 000",
        region: "Vestlandet",
        activities: [
          "Besøke Gamle Stavanger",
          "Gå til Preikestolen",
          "Utforske Fargegaten",
          "Besøke Norsk Oljemuseum",
        ],
      },

      {
        id: 6,
        title: "Trondheim",
        category: "Historisk by",
        shortDescription: "Studentliv, historie og teknologi.",
        description:
          "Trondheim er en historisk by med et stort studentmiljø. Byen er blant annet kjent for Nidarosdomen, NTNU og den fargerike bebyggelsen langs Nidelva.",
        population: "ca. 215 000",
        region: "Trøndelag",
        activities: [
          "Besøke Nidarosdomen",
          "Gå over Gamle Bybro",
          "Utforske Bakklandet",
          "Besøke Kristiansten festning",
        ],
      },
    ],
  },
};

updateView();

function updateView() {
  if (model.viewState.currentPage === "home") {
    homeView();
  }

  if (model.viewState.currentPage === "details") {
    detailsView();
  }
}

function homeView() {
  model.app.innerHTML = /*HTML*/ `
        <header>
            <h1>Utforsk Norge</h1>

            <p>
                Oppdag noen spennende steder å besøke.
            </p>
        </header>

        <main>

            <section>
                <h2>Reisemål</h2>

                <div>
                    ${displayCards()}
                </div>
            </section>

        </main>

        <footer>
            <p>Utforsk Norge</p>
        </footer>
    `;
}

function displayCards() {
  let html = "";

  for (let i = 0; i < model.data.places.length; i++) {
    const place = model.data.places[i];

    html += /*HTML*/ `
            <article onclick="showDetails(${place.id})">

                <span>
                    ${place.category}
                </span>

                <h2>
                    ${place.title}
                </h2>

                <p>
                    ${place.shortDescription}
                </p>

                <button>
                    Les mer
                </button>

            </article>
        `;
  }

  return html;
}

function detailsView() {
  const place = getSelectedPlace();

  model.app.innerHTML = /*HTML*/ `

        <header>

            <button onclick="goBack()">
                ← Tilbake
            </button>

        </header>


        <main>

            <article>

                <span>
                    ${place.category}
                </span>

                <h1>
                    ${place.title}
                </h1>

                <p>
                    ${place.description}
                </p>


                <section>

                    <h2>Informasjon</h2>

                    <p>
                        <strong>Region:</strong>
                        ${place.region}
                    </p>

                    <p>
                        <strong>Innbyggere:</strong>
                        ${place.population}
                    </p>

                </section>


                <section>

                    <h2>Ting å gjøre</h2>

                    <ul>
                        ${displayActivities(place.activities)}
                    </ul>

                </section>

            </article>

        </main>
    `;
}

function displayActivities(activities) {
  let html = "";

  for (let i = 0; i < activities.length; i++) {
    html += /*HTML*/ `
            <li>
                ${activities[i]}
            </li>
        `;
  }

  return html;
}

function showDetails(id) {
  model.viewState.selectedPlaceId = id;

  model.viewState.currentPage = "details";

  updateView();
}

function goBack() {
  model.viewState.currentPage = "home";

  model.viewState.selectedPlaceId = null;

  updateView();
}

function getSelectedPlace() {
  for (let i = 0; i < model.data.places.length; i++) {
    if (model.data.places[i].id === model.viewState.selectedPlaceId) {
      return model.data.places[i];
    }
  }
}

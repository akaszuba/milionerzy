// Sample questions for Who Wants to Be a Millionaire
// This file can be edited to add your own questions
// Format: { question: "Question text", answers: ["Answer A", "Answer B", "Answer C", "Answer D"], correctIndex: 0-3 }

const questions = [
	{
	  "question": "Jaki jest numer alarmowy w Polsce?",
	  "answers": ["112", "999", "997", "998"],
	  "correctIndex": 0
	},
	{
	  "question": "Co należy zrobić, gdy ubranie zacznie się palić?",
	  "answers": ["Biec po pomoc", "Polać wodą", "Położyć się i trulać", "Użyć gaśnicy"],
	  "correctIndex": 2
	},
	{
	  "question": "Jak pomóc przy lekkim oparzeniu?",
	  "answers": ["Schłodzić wodą", "Posmarować masłem", "Przebić pęcherze", "Przykładać lód"],
	  "correctIndex": 0
	},
	{
	  "question": "Gaśnica CO2 służy głównie do gaszenia:",
	  "answers": ["Pożarów drewna", "Pożarów urządzeń elektrycznych", "Płynów łatwopalnych", "Metali"],
	  "correctIndex": 1
	},
	{
	  "question": "Co zrobić, gdy poczujesz gaz w domu?",
	  "answers": ["Zapalić światło", "Otworzyć okna", "Zadzwonić z telefonu stacjonarnego", "Schować się pod łóżko"],
	  "correctIndex": 1
	},
	{
	  "question": "Jaką pozycję przyjąć dla nieprzytomnego oddychającego?",
	  "answers": ["Na plecach", "Boczna ustalona", "Siedzącą", "Na brzuchu"],
	  "correctIndex": 1
	},
	{
	  "question": "Czego nie wolno gasić wodą?",
	  "answers": ["Drewna", "Papieru", "Oleju w garnku", "Tkanin"],
	  "correctIndex": 2
	},
	{
	  "question": "Który przedmiot jest najbezpieczniejszy dla dzieci?",
	  "answers": ["Zapalniczka", "Świeczka", "Latarka", "Sztuczne ognie"],
	  "correctIndex": 2
	},
	{
	  "question": "Co zrobić, gdy drzwi są gorące podczas pożaru?",
	  "answers": ["Otworzyć je", "Użyć gaśnicy", "Szukać innej drogi", "Krzyczeć"],
	  "correctIndex": 2
	},
	{
	  "question": "Jaki jest pierwszy krok w przypadku zadławienia?",
	  "answers": ["Uderzenia w plecy", "Uciśnięcia brzucha", "Podanie wody", "Wezwanie pomocy"],
	  "correctIndex": 0
	},
	{
	  "question": "Który materiał najszybciej się zapala?",
	  "answers": ["Metal", "Szkło", "Benzyna", "Kamień"],
	  "correctIndex": 2
	},
	{
	  "question": "Jak zabezpieczyć choinkę przed pożarem?",
	  "answers": ["Postawić przy kaloryferze", "Używać wadliwych lampek", "Spryskać wodą", "Wyłączać oświetlenie na noc"],
	  "correctIndex": 3
	},
	{
	  "question": "Czego nie robić podczas burzy?",
	  "answers": ["Schować się w budynku", "Stać pod drzewem", "Wyłączyć urządzeń elektrycznych", "Kucnąć na ziemi"],
	  "correctIndex": 1
	},
	{
	  "question": "Co oznacza biały znak z zielonym krzyżem?",
	  "answers": ["Gaśnica", "Apteczka", "Wyjście ewakuacyjne", "Hydrant"],
	  "correctIndex": 1
	},
	{
	  "question": "Co zrobić, gdy zauważysz pożar w lesie?",
	  "answers": ["Ugasić samodzielnie", "Zadzwonić na 112", "Zignorować", "Zrobić zdjęcie"],
	  "correctIndex": 1
	},
	{
	  "question": "Jak wezwać pomoc, gdy nie możesz mówić?",
	  "answers": ["Krzyczeć", "Wysłać SMS na 112", "Zamknąć oczy", "Biec do sąsiada"],
	  "correctIndex": 1
	},
	{
	  "question": "Jak pomóc osobie wychłodzonej?",
	  "answers": ["Podać alkohol", "Ogrzać stopniowo", "Zanurzyć w gorącej wodzie", "Zostawić na mrozie"],
	  "correctIndex": 1
	},
	{
	  "question": "Co oznacza skrót RKO?",
	  "answers": ["Ratownicze Kształcenie Ogólne", "Resuscytacja Krążeniowo-Oddechowa", "Ratunkowe Korytarze Operacyjne", "Regionalna Komenda Ochrony"],
	  "correctIndex": 1
	},
	{
	  "question": "Czego nie gasić gaśnicą proszkową?",
	  "answers": ["Komputera", "Oleju", "Farb", "Ciała człowieka"],
	  "correctIndex": 3
	},
	{
	  "question": "Jaki kolor mają błyskające światłą ostrzegawcze samochodu strażackiego?",
	  "answers": ["Niebieskie", "Czerwone", "Zielone", "Białe"],
	  "correctIndex": 0
	},
	{
	  "question": "Jakie buty zakłada strażak?",
	  "answers": ["Trampki", "Kozaki", "Specjalne buty ognioodporne", "Klapki"],
	  "correctIndex": 2
	},
	{
	  "question": "Co oznacza numer 112?",
	  "answers": ["Pogotowie", "Straż pożarna", "Numer alarmowy dla całej UE", "Policja"],
	  "correctIndex": 2
	},

	
		{
		  "question": "Co należy zrobić w przypadku pożaru w budynku?",
		  "answers": ["Wezwać straż pożarną i ewakuować się na zewnątrz", "Spróbować ugasić pożar bez wzywania pomocy", "Otworzyć wszystkie okna, aby pożar się rozprzestrzenił", "Wychodzić przez okno, nie sprawdzając, czy jest bezpieczne"],
		  "correctIndex": 0
		},
		{
		  "question": "Jakie jest pierwsze działanie w przypadku zatrucia tlenkiem węgla?",
		  "answers": ["Należy natychmiast ewakuować się z pomieszczenia", "Trzeba natychmiast wezwać pomoc medyczną i pozostać w pomieszczeniu", "Otworzyć wszystkie okna i czekać na pomoc", "Wziąć głęboki oddech, by się nie zasłabić"],
		  "correctIndex": 0
		},
		{
		  "question": "Co oznacza symbol 'B' na gaśnicy?",
		  "answers": ["Gaśnica przeznaczona do gaszenia pożarów ciał stałych", "Gaśnica przeznaczona do gaszenia pożarów cieczy łatwopalnych", "Gaśnica przeznaczona do gaszenia gazów", "Gaśnica przeznaczona do gaszenia pożarów metalicznych"],
		  "correctIndex": 1
		},
		{
		  "question": "Co to jest defibrylator?",
		  "answers": ["Urządzenie do gaszenia pożarów", "Urządzenie służące do przywrócenia akcji serca", "Urządzenie do udzielania pierwszej pomocy w przypadku złamań", "Urządzenie służące do oświetlenia terenu akcji ratunkowej"],
		  "correctIndex": 1
		},
		{
		  "question": "Co należy zrobić w przypadku wycieku substancji chemicznej?",
		  "answers": ["Natychmiast zamknąć okna i drzwi", "Wezwać odpowiednie służby ratunkowe", "Pozostawić substancję, aby sama się zneutralizowała", "Spróbować ją zamaskować wodą"],
		  "correctIndex": 1
		},
		{
		  "question": "Co należy zrobić w przypadku poparzenia?",
		  "answers": ["Zanurzyć poparzone miejsce w wodzie", "Zastosować zimny okład i wezwać pomoc medyczną", "Pokryć ranę tłuszczem lub masłem", "Poczekać, aż ból ustąpi"],
		  "correctIndex": 1
		},
		{
		  "question": "Jakie zadanie pełni hydrant?",
		  "answers": ["Umożliwia pobór wody do gaszenia pożarów", "Służy do odpompowywania wody z zalanych pomieszczeń", "Służy do przetłaczania wody do budynków", "Umożliwia podłączenie urządzeń gaśniczych"],
		  "correctIndex": 0
		},
		{
		  "question": "Co zrobić, gdy zauważymy płonącą kuchenkę gazową?",
		  "answers": ["Spróbować ugasić ogień wodą", "Zamknąć dopływ gazu i wezwać straż pożarną", "Otworzyć okna, by rozproszyć ogień", "Zignorować ogień, jeśli jest mały"],
		  "correctIndex": 1
		},
		{
		  "question": "Co oznacza symbol 'A' na gaśnicy?",
		  "answers": ["Gaśnica przeznaczona do gaszenia pożarów ciał stałych", "Gaśnica przeznaczona do gaszenia cieczy łatwopalnych", "Gaśnica przeznaczona do gaszenia gazów", "Gaśnica przeznaczona do gaszenia pożarów metalicznych"],
		  "correctIndex": 0
		},
		{
		  "question": "Jakie urządzenie zapewnia ochronę przed pożarem w domu?",
		  "answers": ["Wykrywacz tlenku węgla", "Gaśnica", "Czujnik dymu", "Wykrywacz metanu"],
		  "correctIndex": 2
		},
		{
		  "question": "Co należy zrobić, jeśli na ulicy znajduje się wypadek samochodowy?",
		  "answers": ["Udzielić pomocy ofiarom", "Sprawdzić, czy nikt nie uciekł", "Zadzwonić po służby ratunkowe i zabezpieczyć miejsce", "Poczekać, aż ktoś inny zajmie się wypadkiem"],
		  "correctIndex": 2
		},
		{
		  "question": "Jakie elementy są ważne przy przeprowadzaniu ewakuacji z budynku?",
		  "answers": ["Punkty zbiórki, drogi ewakuacyjne i numery alarmowe", "Wysokie piętra budynku, miejsce odpoczynku", "Wszystkie okna, drzwi i korytarze", "Należy wyjść jak najszybciej i ignorować osoby potrzebujące pomocy"],
		  "correctIndex": 0
		},	    
  
  
  {
    "question": "Co jest niezbędne do powstania pożaru?",
    "answers": ["Materiał palny, tlen i źródło ciepła", "Tylko materiał palny i tlen", "Tylko materiał palny i źródło ciepła", "Tylko tlen i źródło ciepła"],
    "correctIndex": 0
  },
  {
    "question": "Kiedy obchodzony jest Dzień Strażaka w Polsce?",
    "answers": ["4 maja", "1 czerwca", "24 grudnia", "11 listopada"],
    "correctIndex": 0
  },
  {
    "question": "Co oznacza skrót PSP?",
    "answers": ["Państwowa Straż Pożarna", "Polska Służba Pożarnicza", "Pierwsza Sekcja Pomocy", "Pogotowie Straży Pożarnej"],
    "correctIndex": 0
  },
  {
    "question": "Jakie urządzenie powinno znajdować się w każdym domu, aby ostrzegać przed pożarem?",
    "answers": ["Czujka dymu", "Termometr", "Barometr", "Higrometr"],
    "correctIndex": 0
  },
  {
    "question": "Jaką pozycję należy zastosować u nieprzytomnej osoby, która oddycha?",
    "answers": ["Pozycję boczną ustaloną", "Pozycję na plecach", "Pozycję na brzuchu", "Pozycję siedzącą"],
    "correctIndex": 0
  },
  {
    "question": "Który z tych materiałów jest najbardziej łatwopalny?",
    "answers": ["Papier", "Stal", "Beton", "Szkło"],
    "correctIndex": 0
  },
  {
    "question": "Co to jest ewakuacja?",
    "answers": ["Zorganizowane przemieszczenie ludzi z miejsca zagrożonego do bezpiecznego", "Gaszenie pożaru", "Wezwanie straży pożarnej", "Zamknięcie drzwi i okien"],
    "correctIndex": 0
  },
  {
    "question": "Kto jest patronem strażaków?",
    "answers": ["Święty Florian", "Święty Jerzy", "Święty Piotr", "Święty Michał"],
    "correctIndex": 0
  },
  {
    "question": "Ile wynosi prawidłowa częstotliwość uciśnięć klatki piersiowej podczas resuscytacji osoby dorosłej?",
    "answers": ["100-120 na minutę", "60-80 na minutę", "140-160 na minutę", "30-40 na minutę"],
    "correctIndex": 0
  },
  {
    "question": "Co oznacza skrót OSP?",
    "answers": ["Ochotnicza Straż Pożarna", "Ogólnopolska Służba Przeciwpożarowa", "Organizacja Systemu Pożarowego", "Oddział Straży Pożarnej"],
    "correctIndex": 0
  },
  {
    "question": "W jakim kolorze są znaki ewakuacyjne?",
    "answers": ["Zielono-białe", "Czerwono-białe", "Żółto-czarne", "Niebiesko-białe"],
    "correctIndex": 0
  },
  {
    "question": "Jakie jest prawidłowe ułożenie rąk podczas uciskania klatki piersiowej?",
    "answers": ["Na środku klatki piersiowej, jedna dłoń na drugiej", "Po lewej stronie klatki piersiowej", "Po prawej stronie klatki piersiowej", "Na brzuchu poszkodowanego"],
    "correctIndex": 0
  },
  {
    "question": "Co to jest trójkąt spalania?",
    "answers": ["Materiał palny, tlen i energia cieplna", "Ogień, dym i popiół", "Woda, piasek i koc gaśniczy", "Gaśnica, wąż strażacki i hydrant"],
    "correctIndex": 0
  },
  {
    "question": "Co oznacza skrót AED?",
    "answers": ["Automatyczny Defibrylator Zewnętrzny", "Aparat Ewakuacji Dymowej", "Agregat Elektryczny Dużej mocy", "Akcja Edukacji Dzieci"],
    "correctIndex": 0
  },
  {
    "question": "Co stanowi największe zagrożenie dla ludzi podczas pożaru?",
    "answers": ["Dym i toksyczne gazy", "Płomienie", "Wysoka temperatura", "Hałas"],
    "correctIndex": 0
  },
  {
    "question": "Jaki jest stosunek uciśnięć klatki piersiowej do wdechów ratowniczych u osoby dorosłej?",
    "answers": ["30:2", "15:2", "10:1", "5:1"],
    "correctIndex": 0
  },
  {
    "question": "Co to jest hydrant?",
    "answers": ["Urządzenie umożliwiające pobór wody do celów gaśniczych", "Urządzenie do gaszenia prądem", "Pojazd strażacki", "Rodzaj gaśnicy"],
    "correctIndex": 0
  },
  {
    "question": "Co to jest komenda 'WODA NAPRZÓD'?",
    "answers": ["Rozkaz podania wody do linii gaśniczej", "Polecenie gaszenia wodą", "Komenda do rozpoczęcia ćwiczeń", "Polecenie napełnienia zbiornika wodą"],
    "correctIndex": 0
  },
  {
    "question": "Co to jest butla kompozytowa?",
    "answers": ["Lekka butla z powietrzem do aparatu oddechowego", "Butla z wodą gaśniczą", "Butla z pianą gaśniczą", "Butla z CO₂ do gaszenia"],
    "correctIndex": 0
  },
  {
    "question": "Jakie jest prawidłowe oznaczenie drogi ewakuacyjnej?",
    "answers": ["Biała strzałka na zielonym tle", "Czerwona strzałka na białym tle", "Czarna strzałka na żółtym tle", "Żółta strzałka na czarnym tle"],
    "correctIndex": 0
  },
  {
    "question": "Co oznacza skrót KPPSP?",
    "answers": ["Komenda Powiatowa Państwowej Straży Pożarnej", "Krajowy Program Pomocy Strażakom Poszkodowanym", "Korpus Podporuczników Straży Pożarnej", "Krajowa Pomoc Pierwszej Służby Pożarniczej"],
    "correctIndex": 0
  },
  {
    "question": "Jaka jest podstawowa zasada bezpieczeństwa podczas akcji ratowniczej?",
    "answers": ["Bezpieczeństwo ratownika jest najważniejsze", "Jak najszybsze ugaszenie pożaru", "Uratowanie jak największej ilości mienia", "Informowanie mediów o przebiegu akcji"],
    "correctIndex": 0
  },
  {
    "question": "Jak sprawdzić, czy osoba nieprzytomna oddycha?",
    "answers": ["Udrożnić drogi oddechowe, przybliżyć ucho do ust i obserwować klatkę piersiową", "Potrząsnąć poszkodowanym", "Sprawdzić puls na nadgarstku", "Polewać twarz wodą"],
    "correctIndex": 0
  },
  {
    "question": "Co to jest drabina nasadkowa?",
    "answers": ["Drabina składająca się z przęseł, które można łączyć ze sobą", "Drabina z hakiem do zaczepiania", "Drabina wysuwana mechanicznie", "Drabina zamontowana na samochodzie"],
    "correctIndex": 0
  },
  {
    "question": "Jaki rodzaj gaśnicy najlepiej nadaje się do gaszenia urządzeń elektrycznych?",
    "answers": ["Gaśnica śniegowa (CO₂)", "Gaśnica wodna", "Gaśnica pianowa", "Koc gaśniczy"],
    "correctIndex": 0
  },
  {
    "question": "Co to jest CTIF?",
    "answers": ["Międzynarodowy Komitet Techniczny Prewencji i Zwalczania Pożarów", "Centrum Taktyki i Interwencji Fizykochemicznych", "Centralny Trening Instruktorów Fachowych", "Czujnik Temperatury i Intensywności Fal"],
    "correctIndex": 0
  },
  {
    "question": "Jaka jest prawidłowa kolejność działań w przypadku pożaru w budynku?",
    "answers": ["Zaalarmować, ewakuować, gasić", "Gasić, zaalarmować, ewakuować", "Ewakuować, gasić, zaalarmować", "Uciekać, wezwać pomoc, wrócić gasić"],
    "correctIndex": 0
  },
  {
    "question": "Co to jest tlenek węgla?",
    "answers": ["Bezwonny, bezbarwny, trujący gaz", "Gaz o charakterystycznym zapachu siarki", "Niepalny gaz używany w gaśnicach", "Gaz powstający przy spalaniu metali"],
    "correctIndex": 0
  },
  {
    "question": "Co to jest linia gaśnicza?",
    "answers": ["Wąż pożarniczy z prądownicą służący do podawania środka gaśniczego", "Granica, której nie można przekroczyć podczas pożaru", "Linia wyznaczająca teren akcji", "Trasa przejazdu wozu strażackiego"],
    "correctIndex": 0
  },
  {
    "question": "Jakie informacje należy podać dyspozytorowi podczas zgłaszania pożaru?",
    "answers": ["Co się pali, dokładny adres, czy są osoby poszkodowane, swoje dane", "Tylko adres zdarzenia", "Tylko co się pali", "Tylko czy są osoby poszkodowane"],
    "correctIndex": 0
  },
  {
    "question": "Co to jest strefa zadymienia?",
    "answers": ["Obszar wypełniony dymem", "Miejsce powstawania dymu", "Miejsce gromadzenia się spalin", "Miejsce gaszenia pożaru"],
    "correctIndex": 0
  },
  {
    "question": "Jaką rolę pełni dowódca zastępu?",
    "answers": ["Kieruje działaniami zespołu ratowniczego", "Jest kierowcą wozu strażackiego", "Obsługuje radiostację", "Przygotowuje sprzęt gaśniczy"],
    "correctIndex": 0
  }


  ];
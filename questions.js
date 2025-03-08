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
	  "answers": ["Ratownicze Kształcenie Ogólne", "Resusxytacja Krążeniowo-Oddechowa", "Ratunkowe Korytarze Operacyjne", "Regionalna Komenda Ochrony"],
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
	}
  ];
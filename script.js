// IIFE Wrapper zum Schutz des globalen Namespace
(function() {

    // =================================================================================
    // ====== DATENBANK (LOKALE DATEN) ======
    // =================================================================================
    const db = {
        courses: [
            // --- Alphabet & Aussprache (Neue Lektion) ---
            {
                level: "Start",
                title: "Alphabet & Aussprache",
                lessons: [
                    {
                        id: "alpha-l1",
                        title: "Das rumänische Alphabet",
                        icon: "fas fa-font",
                        description: "Lerne Buchstaben, Laute und typische Ausspracheregeln.",
                        xp: 30,
                        exercises: [
                            {
                                type: "audio",
                                question: "Wie spricht man 'ă'?",
                                audio: "ă",
                                options: ["a", "ö", "ə (wie in 'bitte')"],
                                answer: "ə (wie in 'bitte')",
                                explanation: "'ă' klingt wie ein kurzes, neutrales 'a', ähnlich wie das deutsche 'e' in 'bitte'."
                            },
                            {
                                type: "audio",
                                question: "Wie spricht man 'ș'?",
                                audio: "ș",
                                options: ["sch", "s", "z"],
                                answer: "sch",
                                explanation: "'ș' wird wie das deutsche 'sch' ausgesprochen."
                            },
                            {
                                type: "audio",
                                question: "Wie spricht man 'ț'?",
                                audio: "ț",
                                options: ["ts", "t", "z"],
                                answer: "ts",
                                explanation: "'ț' klingt wie das deutsche 'z' in 'Zeit'."
                            },
                            {
                                type: "multiple-choice",
                                question: "Welcher Buchstabe klingt wie 'u' in 'Buch'?",
                                options: ["u", "o", "ă"],
                                answer: "u"
                            },
                            {
                                type: "audio",
                                question: "Höre das Wort und wähle das richtige Bild.",
                                audio: "măr",
                                options: [
                                    "<img src='img/apple.png' alt='Apfel' style='height:40px;'>",
                                    "<img src='img/bread.png' alt='Brot' style='height:40px;'>",
                                    "<img src='img/water.png' alt='Wasser' style='height:40px;'>"
                            ],
                                answer: "<img src='img/apple.png' alt='Apfel' style='height:40px;'>",
                                explanation: "'măr' bedeutet Apfel."
                            },
                            // Zusätzliche Übungen:
                            {
                                type: "multiple-choice",
                                question: "Welcher Buchstabe ist ein Vokal?",
                                options: ["b", "ă", "ș"],
                                answer: "ă",
                                explanation: "'ă' ist ein Vokal, 'b' und 'ș' sind Konsonanten."
                            },
                            {
                                type: "multiple-choice",
                                question: "Wie viele Buchstaben hat das rumänische Alphabet?",
                                options: ["26", "28", "31"],
                                answer: "31",
                                explanation: "Das rumänische Alphabet hat 31 Buchstaben."
                            },
                            {
                                type: "fill-in-the-blank",
                                question: "Schreibe den Buchstaben, der wie 'sch' klingt: ____",
                                answer: "ș",
                                explanation: "'ș' wird wie 'sch' ausgesprochen."
                            }
                        ]
                    },
                    {
                        id: "alpha-l2",
                        title: "Erste Wörter & Sätze",
                        icon: "fas fa-volume-up",
                        description: "Höre und sprich einfache Wörter und Sätze nach.",
                        xp: 30,
                        exercises: [
                            {
                                type: "audio",
                                question: "Höre und sprich nach: 'Salut!'",
                                audio: "Salut!",
                                options: ["Hallo", "Tschüss", "Danke"],
                                answer: "Hallo",
                                explanation: "Begrüßung: 'Salut!' heißt 'Hallo!'."
                            },
                            {
                                type: "audio",
                                question: "Höre und sprich nach: 'Mulțumesc!'",
                                audio: "Mulțumesc!",
                                options: ["Bitte", "Danke", "Entschuldigung"],
                                answer: "Danke"
                            },
                            {
                                type: "audio",
                                question: "Höre und sprich nach: 'Ce faci?'",
                                audio: "Ce faci?",
                                options: ["Wie geht es dir?", "Wo wohnst du?", "Wie heißt du?"],
                                answer: "Wie geht es dir?"
                            },
                            // Zusätzliche Übungen:
                            {
                                type: "multiple-choice",
                                question: "Was heißt 'Danke' auf Rumänisch?",
                                options: ["Salut", "Mulțumesc", "La revedere"],
                                answer: "Mulțumesc"
                            },
                            {
                                type: "fill-in-the-blank",
                                question: "Wie sagt man 'Hallo' auf Rumänisch? ____",
                                answer: "Salut",
                                explanation: "Die Begrüßung 'Hallo' heißt 'Salut'."
                            }
                        ]
                    }
                ]
            },
            // --- A1 ---
            {
                level: "A1",
                title: "Grundlagen für Anfänger",
                lessons: [
                    {
                        id: "a1-l1", title: "Begrüßungen & Vorstellung", icon: "fas fa-handshake", description: "Lerne, dich vorzustellen und andere zu begrüßen.", xp: 50,
                        exercises: [
                            { 
                                type: "multiple-choice", 
                                question: "Was bedeutet 'Bună ziua'?", 
                                options: ["Guten Tag", "Gute Nacht", "Danke"], 
                                answer: "Guten Tag",
                                explanation: "'Bună ziua' wird formell für 'Guten Tag' verwendet. Für Freunde kannst du auch 'Salut' sagen."
                            },
                            { 
                                type: "fill-in-the-blank", 
                                question: "Ich heiße Andrei = Mă numesc ____.", 
                                answer: "Andrei",
                                explanation: "Neben 'Mă numesc' (formell für 'Ich heiße') kannst du auch einfach 'Sunt...' (Ich bin...) verwenden."
                            },
                            { 
                                type: "multiple-choice", 
                                question: "Wie sagt man 'Mutter' auf Rumänisch?", 
                                options: ["Tată", "Mamă", "Frate"], 
                                answer: "Mamă",
                                explanation: "'Mamă' (Mutter) und 'Tată' (Vater) sind zentrale Familienvokabeln."
                            },
                            { 
                                type: "multiple-choice", 
                                question: "Was bedeutet 'Da'?", 
                                options: ["Nein", "Bitte", "Ja"], 
                                answer: "Ja" 
                            },
                            { 
                                type: "audio", 
                                question: "Höre zu und wähle die richtige Übersetzung für 'Mulțumesc'.", 
                                audio: "Mulțumesc", 
                                options: ["Bitte", "Danke", "Ja"], 
                                answer: "Danke",
                                explanation: "Die häufigste und höflichste Antwort auf 'Mulțumesc' (Danke) ist 'Cu plăcere' (Gern geschehen)."
                            },
                            { 
                                type: "fill-in-the-blank", 
                                question: "Wie geht es dir? = Ce ____?", 
                                answer: "faci",
                                explanation: "'Ce faci?' ist die informelle Art, 'Wie geht es dir?' zu fragen. Eine formelle Variante wäre 'Ce faceți?'."
                            },
                            { 
                                type: "multiple-choice", 
                                question: "Was ist die richtige Antwort auf 'Mulțumesc'?", 
                                options: ["Cu plăcere", "Scuze", "Da"], 
                                answer: "Cu plăcere" 
                            }
                        ]
                    },
                    {
                        id: "a1-l2", title: "Zahlen, Alter & Herkunft", icon: "fas fa-birthday-cake", description: "Zahlen von 1-20, nach dem Alter und der Herkunft fragen.", xp: 60,
                        exercises: [
                            { 
                                type: "multiple-choice", 
                                question: "Wie sagt man 'zehn'?", 
                                options: ["opt", "nouă", "zece"], 
                                answer: "zece",
                                explanation: "Die Zahlen von 11 bis 19 werden oft mit der Endung '...sprezece' gebildet, z.B. unsprezece (11)."
                            },
                            { 
                                type: "fill-in-the-blank", 
                                question: "Fünfzehn = ____", 
                                answer: "cincisprezece",
                                explanation: "cinci (5) + spre (auf/zu) + zece (10) = Fünfzehn."
                            },
                            { 
                                type: "multiple-choice", 
                                question: "Wie alt bist du? = Câți ____ ai?", 
                                options: ["ani", "mere", "case"], 
                                answer: "ani",
                                explanation: "Wörtlich übersetzt bedeutet 'Câți ani ai?' 'Wie viele Jahre hast du?', was die Standardform ist, um nach dem Alter zu fragen."
                            },
                            { 
                                type: "multiple-choice", 
                                question: "Woher kommst du? = De unde ____ tu?", 
                                options: ["ești", "sunt", "este"], 
                                answer: "ești",
                                explanation: "Das Pronomen 'tu' (du) am Ende ist optional und dient der Betonung, da die Verbform 'ești' bereits auf die 2. Person Singular hinweist."
                            }
                        ]
                    },
                    {
                        id: "a1-l3", title: "Essen & Trinken", icon: "fas fa-pizza-slice", description: "Lerne grundlegende Vokabeln für Lebensmittel.", xp: 50,
                        exercises: [
                            { 
                                type: "matching-pairs", 
                                question: "Bilde die richtigen Paare.",
                                pairs: [
                                    { ro: "Măr", de: "Apfel" },
                                    { ro: "Pâine", de: "Brot" },
                                    { ro: "Apă", de: "Wasser" },
                                    { ro: "Cafea", de: "Kaffee" },
                                    { ro: "Lapte", de: "Milch" }
                                ],
                                explanation: "Das Zuordnen von Wortpaaren stärkt dein visuelles Gedächtnis und die direkte Verbindung zwischen den Sprachen."
                            },
                            { 
                                type: "multiple-choice", 
                                question: "Ich esse einen Apfel. = Eu mănânc un ____.", 
                                options: ["măr", "pâine", "pește"], 
                                answer: "măr",
                                explanation: "'un' ist der unbestimmte Artikel für männliche und sächliche Substantive im Singular, ähnlich wie 'ein' im Deutschen."
                            },
                            { 
                                type: "fill-in-the-blank", 
                                question: "Ich trinke Wasser. = Eu beau ____.", 
                                answer: "apă",
                                explanation: "Im Rumänischen wird oft kein Artikel verwendet, wo im Deutschen einer stehen würde, z.B. bei allgemeinen Aussagen."
                            }
                        ]
                    },
                    {
                        id: "a1-l4",
                        title: "Erste Fragen & Antworten",
                        icon: "fas fa-question-circle",
                        description: "Stelle und beantworte einfache Fragen.",
                        xp: 40,
                        exercises: [
                            {
                                type: "multiple-choice",
                                question: "Wie fragt man 'Wie heißt du?'",
                                options: ["Ce faci?", "Cum te cheamă?", "Unde locuiești?"],
                                answer: "Cum te cheamă?",
                                explanation: "'Cum te cheamă?' bedeutet 'Wie heißt du?'."
                            },
                            {
                                type: "fill-in-the-blank",
                                question: "Ich heiße Maria. = Mă numesc ____.",
                                answer: "Maria"
                            },
                            {
                                type: "multiple-choice",
                                question: "Wie antwortest du auf 'Ce faci?'",
                                options: ["Bine, mulțumesc!", "La revedere!", "Salut!"],
                                answer: "Bine, mulțumesc!",
                                explanation: "Eine typische Antwort ist 'Bine, mulțumesc!' (Gut, danke!)."
                            },
                            {
                                type: "fill-in-the-blank",
                                question: "Wie sagt man 'Ich komme aus Deutschland'? Eu sunt din ____.",
                                answer: "Germania"
                            }
                        ]
                    }
                ]
            },
            // --- A2 ---
            {
                level: "A2", title: "Alltagssituationen",
                lessons: [
                    {
                        id: "a2-l1", title: "Im Restaurant bestellen", icon: "fas fa-utensils", description: "Bestelle Essen und Getränke und frage nach der Rechnung.", xp: 75,
                        exercises: [
                            { 
                                type: "multiple-choice", 
                                question: "Was bedeutet 'Nota, vă rog'?", 
                                options: ["Die Rechnung, bitte", "Das Menü, bitte", "Ein Glas Wasser, bitte"], 
                                answer: "Die Rechnung, bitte",
                                explanation: "'vă rog' ist die höfliche Form von 'bitte'. Sie wird verwendet, wenn man jemanden siezt oder mit mehreren Personen spricht."
                            },
                            { 
                                type: "fill-in-the-blank", 
                                question: "Ich möchte einen Kaffee = Aș dori o ____.", 
                                answer: "cafea",
                                explanation: "'Aș dori' ist der Konditional ('Ich würde wünschen') und eine sehr höfliche Art, etwas zu bestellen."
                            },
                            { type: "multiple-choice", question: "Ein Glas Wein = Un pahar de ____", options: ["vin", "apă", "bere"], answer: "vin" },
                            { type: "multiple-choice", question: "Wie bestellt man Brot?", options: ["Vreau pâine", "Vreau apă", "Vreau lapte"], answer: "Vreau pâine" }
                        ]
                    },
                    {
                        id: "a2-l2", title: "Einkaufen auf dem Markt", icon: "fas fa-shopping-basket", description: "Frage nach Preisen und kaufe Lebensmittel ein.", xp: 70,
                        exercises: [
                             { type: "fill-in-the-blank", question: "Wie viel kostet das? = Cât ____?", answer: "costă" },
                             { type: "multiple-choice", question: "Was bedeutet 'scump'?", options: ["billig", "lecker", "teuer"], answer: "teuer" },
                             { type: "multiple-choice", question: "Was sind 'legume'?", options: ["Obst", "Gemüse", "Fleisch"], answer: "Gemüse" },
                             { type: "fill-in-the-blank", question: "Ein Kilo Äpfel = Un kilogram de ____.", answer: "mere" }
                        ]
                    }
                ]
            },
            // --- B1 ---
            {
                level: "B1", title: "Unterwegs & Konversation",
                lessons: [
                    {
                        id: "b1-l1", title: "Nach dem Weg fragen", icon: "fas fa-map-signs", description: "Verstehe und gebe einfache Wegbeschreibungen.", xp: 80,
                        exercises: [
                            { type: "multiple-choice", question: "Was bedeutet 'La dreapta'?", options: ["Geradeaus", "Nach links", "Nach rechts"], answer: "Nach rechts" },
                            { type: "fill-in-the-blank", question: "Die U-Bahn = ____", answer: "Metroul" },
                            { type: "multiple-choice", question: "Wo ist der Bahnhof? = Unde este ____?", options: ["gara", "parcul", "magazinul"], answer: "gara" },
                            { type: "multiple-choice", question: "Geradeaus = Mergi ____.", options: ["înainte", "înapoi", "la stânga"], answer: "înainte" }
                        ]
                    },
                    {
                        id: "b1-l2", title: "Vergangene Ereignisse", icon: "fas fa-history", description: "Sprich über deinen letzten Urlaub in der Vergangenheit.", xp: 90,
                        exercises: [ 
                            { type: "multiple-choice", question: "Ich war = Eu am ____", options: ["fost", "fi", "sunt"], answer: "fost" },
                            { type: "multiple-choice", question: "Gestern = ____", options: ["Azi", "Mâine", "Ieri"], answer: "Ieri" },
                            { type: "fill-in-the-blank", question: "Letztes Jahr = ____ trecut.", answer: "Anul" },
                            { type: "multiple-choice", question: "Es war sonnig = A fost ____.", options: ["însorit", "ploios", "înnorat"], answer: "însorit" }
                        ]
                    }
                ]
            },
            // --- B2 ---
            {
                level: "B2", title: "Fortgeschrittene Themen",
                lessons: [
                    {
                        id: "b2-l1", title: "Arbeit & Beruf", icon: "fas fa-briefcase", description: "Sprich über deinen Beruf und deine täglichen Aufgaben.", xp: 100,
                        exercises: [
                            { type: "fill-in-the-blank", question: "Ich arbeite als Programmierer = Lucrez ca ____.", answer: "programator" },
                            { type: "multiple-choice", question: "Ein Meeting = O ____", options: ["vacanță", "ședință", "pauză"], answer: "ședință" },
                            { type: "fill-in-the-blank", question: "Mein Gehalt = ____ meu.", answer: "Salariul" },
                            { type: "multiple-choice", question: "Ich habe viel Arbeit = Am mult de ____.", options: ["lucru", "muncă", "treabă"], answer: "lucru" }
                        ]
                    },
                    {
                        id: "b2-l2", title: "Meinungen äußern", icon: "fas fa-comments", description: "Drücke deine Meinung aus und stimme anderen zu oder widersprich.", xp: 110,
                        exercises: [
                            { type: "multiple-choice", question: "Meiner Meinung nach = În opinia ____", options: ["mea", "ta", "sa"], answer: "mea" },
                            { type: "fill-in-the-blank", question: "Ich bin nicht einverstanden = Nu sunt de ____.", answer: "acord" },
                            { type: "multiple-choice", question: "Du hast Recht = Ai ____.", options: ["dreptate", "motiv", "cauza"], answer: "dreptate" },
                            { type: "fill-in-the-blank", question: "Das ist eine gute Idee = Este o ____ bună.", answer: "idee" }
                        ]
                    }
                ]
            },
             // --- C1 ---
            {
                level: "C1", title: "Sprachliche Gewandtheit",
                lessons: [
                    {
                        id: "c1-l1", title: "Komplexe Diskussionen", icon: "fas fa-brain", description: "Diskutiere über abstrakte Themen wie Kultur und Gesellschaft.", xp: 150,
                        exercises: [
                            { type: "multiple-choice", question: "Nachhaltigkeit = ____", options: ["Durabilitate", "Cultură", "Societate"], answer: "Durabilitate" },
                            { type: "fill-in-the-blank", question: "Die globale Erwärmung = ____ globală.", answer: "Încălzirea" },
                            { type: "multiple-choice", question: "Die Regierung = ____", options: ["Guvernul", "Poporul", "Națiunea"], answer: "Guvernul" },
                            { type: "fill-in-the-blank", question: "Die Wirtschaftskrise = Criza ____.", answer: "economică" }
                        ]
                    }
                ]
            }
        ],
        vocabulary: [
            // Grundlagen & Begrüßung
            { romanian: "Salut", german: "Hallo", category: "Grundlagen" },
            { romanian: "Bună ziua", german: "Guten Tag", category: "Grundlagen" },
            { romanian: "Bună dimineața", german: "Guten Morgen", category: "Grundlagen" },
            { romanian: "Bună seara", german: "Guten Abend", category: "Grundlagen" },
            { romanian: "Noapte bună", german: "Gute Nacht", category: "Grundlagen" },
            { romanian: "La revedere", german: "Auf Wiedersehen", category: "Grundlagen" },
            { romanian: "Pe curând", german: "Bis bald", category: "Grundlagen" },
            { romanian: "Mulțumesc", german: "Danke", category: "Grundlagen" },
            { romanian: "Cu plăcere", german: "Gern geschehen", category: "Grundlagen" },
            { romanian: "Scuzați-mă", german: "Entschuldigung", category: "Grundlagen" },
            { romanian: "Vă rog", german: "Bitte (höflich)", category: "Grundlagen" },
            { romanian: "Da", german: "Ja", category: "Grundlagen" },
            { romanian: "Nu", german: "Nein", category: "Grundlagen" },
            { romanian: "Poate", german: "Vielleicht", category: "Grundlagen" },
            { romanian: "Noroc!", german: "Prost! / Viel Glück!", category: "Grundlagen" },
            // Familie & Leute
            { romanian: "Mamă", german: "Mutter", category: "Familie" },
            { romanian: "Tată", german: "Vater", category: "Familie" },
            { romanian: "Frate", german: "Bruder", category: "Familie" },
            { romanian: "Soră", german: "Schwester", category: "Familie" },
            { romanian: "Bunic", german: "Großvater", category: "Familie" },
            { romanian: "Bunică", german: "Großmutter", category: "Familie" },
            { romanian: "Unchi", german: "Onkel", category: "Familie" },
            { romanian: "Mătușă", german: "Tante", category: "Familie" },
            { romanian: "Văr", german: "Cousin", category: "Familie" },
            { romanian: "Vară", german: "Cousine", category: "Familie" },
            { romanian: "Copil", german: "Kind", category: "Familie" },
            { romanian: "Părinți", german: "Eltern", category: "Familie" },
            // Zahlen & Zeit
            { romanian: "unu", german: "eins", category: "Zahlen & Zeit" },
            { romanian: "doi", german: "zwei", category: "Zahlen & Zeit" },
            { romanian: "trei", german: "drei", category: "Zahlen & Zeit" },
            { romanian: "patru", german: "vier", category: "Zahlen & Zeit" },
            { romanian: "cinci", german: "fünf", category: "Zahlen & Zeit" },
            { romanian: "șase", german: "sechs", category: "Zahlen & Zeit" },
            { romanian: "șapte", german: "sieben", category: "Zahlen & Zeit" },
            { romanian: "opt", german: "acht", category: "Zahlen & Zeit" },
            { romanian: "nouă", german: "neun", category: "Zahlen & Zeit" },
            { romanian: "zece", german: "zehn", category: "Zahlen & Zeit" },
            { romanian: "unsprezece", german: "elf", category: "Zahlen & Zeit" },
            { romanian: "doisprezece", german: "zwölf", category: "Zahlen & Zeit" },
            { romanian: "treisprezece", german: "dreizehn", category: "Zahlen & Zeit" },
            { romanian: "paisprezece", german: "vierzehn", category: "Zahlen & Zeit" },
            { romanian: "cincisprezece", german: "fünfzehn", category: "Zahlen & Zeit" },
            { romanian: "șaisprezece", german: "sechzehn", category: "Zahlen & Zeit" },
            { romanian: "șaptesprezece", german: "siebzehn", category: "Zahlen & Zeit" },
            { romanian: "optsprezece", german: "achtzehn", category: "Zahlen & Zeit" },
            { romanian: "nouăsprezece", german: "neunzehn", category: "Zahlen & Zeit" },
            { romanian: "douăzeci", german: "zwanzig", category: "Zahlen & Zeit" },
            { romanian: "Luni", german: "Montag", category: "Zahlen & Zeit" },
            { romanian: "Marți", german: "Dienstag", category: "Zahlen & Zeit" },
            { romanian: "Miercuri", german: "Mittwoch", category: "Zahlen & Zeit" },
            { romanian: "Joi", german: "Donnerstag", category: "Zahlen & Zeit" },
            { romanian: "Vineri", german: "Freitag", category: "Zahlen & Zeit" },
            { romanian: "Sâmbătă", german: "Samstag", category: "Zahlen & Zeit" },
            { romanian: "Duminică", german: "Sonntag", category: "Zahlen & Zeit" },
            // Essen & Trinken
            { romanian: "Măr", german: "Apfel", category: "Essen & Trinken" },
            { romanian: "Pâine", german: "Brot", category: "Essen & Trinken" },
            { romanian: "Apă", german: "Wasser", category: "Essen & Trinken" },
            { romanian: "Cafea", german: "Kaffee", category: "Essen & Trinken" },
            { romanian: "Lapte", german: "Milch", category: "Essen & Trinken" },
            { romanian: "Brânză", german: "Käse", category: "Essen & Trinken" },
            { romanian: "Ou", german: "Ei", category: "Essen & Trinken" },
            { romanian: "Pește", german: "Fisch", category: "Essen & Trinken" },
            { romanian: "Pui", german: "Hähnchen", category: "Essen & Trinken" },
            { romanian: "Banană", german: "Banane", category: "Essen & Trinken" },
            { romanian: "Portocală", german: "Orange", category: "Essen & Trinken" },
            { romanian: "Vin", german: "Wein", category: "Essen & Trinken" },
            { romanian: "Bere", german: "Bier", category: "Essen & Trinken" },
            { romanian: "Ceai", german: "Tee", category: "Essen & Trinken" },
            { romanian: "Zahăr", german: "Zucker", category: "Essen & Trinken" },
            // Farben
            { romanian: "Roșu", german: "Rot", category: "Farben" },
            { romanian: "Galben", german: "Gelb", category: "Farben" },
            { romanian: "Albastru", german: "Blau", category: "Farben" },
            { romanian: "Verde", german: "Grün", category: "Farben" },
            { romanian: "Negru", german: "Schwarz", category: "Farben" },
            { romanian: "Alb", german: "Weiß", category: "Farben" },
            { romanian: "Maro", german: "Braun", category: "Farben" },
            { romanian: "Gri", german: "Grau", category: "Farben" },
            // Adjektive & Gefühle
            { romanian: "Fericit", german: "Glücklich", category: "Adjektive & Gefühle" },
            { romanian: "Trist", german: "Traurig", category: "Adjektive & Gefühle" },
            { romanian: "Obosit", german: "Müde", category: "Adjektive & Gefühle" },
            { romanian: "Bolnav", german: "Krank", category: "Adjektive & Gefühle" },
            { romanian: "Foame", german: "Hunger", category: "Adjektive & Gefühle" },
            { romanian: "Sete", german: "Durst", category: "Adjektive & Gefühle" },
            { romanian: "Nou", german: "Neu", category: "Adjektive & Gefühle" },
            { romanian: "Vechi", german: "Alt", category: "Adjektive & Gefühle" },
            { romanian: "Frumos", german: "Schön", category: "Adjektive & Gefühle" },
            { romanian: "Ușor", german: "Leicht", category: "Adjektive & Gefühle" },
            { romanian: "Greu", german: "Schwer", category: "Adjektive & Gefühle" },
            // Tiere
            { romanian: "Câine", german: "Hund", category: "Tiere" },
            { romanian: "Pisică", german: "Katze", category: "Tiere" },
            { romanian: "Cal", german: "Pferd", category: "Tiere" },
            { romanian: "Vacă", german: "Kuh", category: "Tiere" },
            { romanian: "Oaie", german: "Schaf", category: "Tiere" },
            { romanian: "Porc", german: "Schwein", category: "Tiere" },
            { romanian: "Păsăre", german: "Vogel", category: "Tiere" },
            { romanian: "Pește", german: "Fisch", category: "Tiere" },
            // Berufe
            { romanian: "Programator", german: "Programmierer", category: "Berufe" },
            { romanian: "Doctor", german: "Arzt", category: "Berufe" },
            { romanian: "Profesor", german: "Lehrer", category: "Berufe" },
            { romanian: "Student", german: "Student", category: "Berufe" },
            { romanian: "Polițist", german: "Polizist", category: "Berufe" },
            { romanian: "Vânzător", german: "Verkäufer", category: "Berufe" },
            // Orte
            { romanian: "Casă", german: "Haus", category: "Orte" },
            { romanian: "Școală", german: "Schule", category: "Orte" },
            { romanian: "Spital", german: "Krankenhaus", category: "Orte" },
            { romanian: "Magazin", german: "Geschäft", category: "Orte" },
            { romanian: "Piață", german: "Markt", category: "Orte" },
            { romanian: "Gara", german: "Bahnhof", category: "Orte" },
            { romanian: "Parc", german: "Park", category: "Orte" },
            { romanian: "Stradă", german: "Straße", category: "Orte" },
            { romanian: "Oraș", german: "Stadt", category: "Orte" },
            { romanian: "Sat", german: "Dorf", category: "Orte" },
            // Verben (Infinitiv)
            { romanian: "a fi", german: "sein", category: "Verben" },
            { romanian: "a avea", german: "haben", category: "Verben" },
            { romanian: "a merge", german: "gehen", category: "Verben" },
            { romanian: "a veni", german: "kommen", category: "Verben" },
            { romanian: "a face", german: "machen", category: "Verben" },
            { romanian: "a spune", german: "sagen", category: "Verben" },
            { romanian: "a vedea", german: "sehen", category: "Verben" },
            { romanian: "a mânca", german: "essen", category: "Verben" },
            { romanian: "a bea", german: "trinken", category: "Verben" },
            { romanian: "a lucra", german: "arbeiten", category: "Verben" },
            { romanian: "a vorbi", german: "sprechen", category: "Verben" },
            { romanian: "a învăța", german: "lernen", category: "Verben" },
            { romanian: "a dori", german: "wünschen", category: "Verben" },
            { romanian: "a cumpăra", german: "kaufen", category: "Verben" },
            { romanian: "a plăti", german: "bezahlen", category: "Verben" },
            { romanian: "a costa", german: "kosten", category: "Verben" },
            // Sonstiges
            { romanian: "Astăzi", german: "Heute", category: "Zeit" },
            { romanian: "Mâine", german: "Morgen", category: "Zeit" },
            { romanian: "Ieri", german: "Gestern", category: "Zeit" },
            { romanian: "Acum", german: "Jetzt", category: "Zeit" },
            { romanian: "Timp", german: "Zeit", category: "Zeit" },
            { romanian: "An", german: "Jahr", category: "Zeit" },
            { romanian: "Lună", german: "Monat", category: "Zeit" },
            { romanian: "Săptămână", german: "Woche", category: "Zeit" },
            { romanian: "Zi", german: "Tag", category: "Zeit" },
            { romanian: "Ceas", german: "Uhr", category: "Zeit" },
            { romanian: "Bilet", german: "Fahrkarte", category: "Reisen" },
            { romanian: "Vacanță", german: "Urlaub", category: "Reisen" },
            { romanian: "Bagaj", german: "Gepäck", category: "Reisen" },
            { romanian: "Harta", german: "Karte", category: "Reisen" },
            { romanian: "Telefon", german: "Telefon", category: "Technik" },
            { romanian: "Calculator", german: "Computer", category: "Technik" },
            { romanian: "Mașină", german: "Auto", category: "Technik" },
            { romanian: "Bicicletă", german: "Fahrrad", category: "Technik" },
            { romanian: "Carte", german: "Buch", category: "Alltag" },
            { romanian: "Pix", german: "Stift", category: "Alltag" },
            { romanian: "Hârtie", german: "Papier", category: "Alltag" },
            { romanian: "Fereastră", german: "Fenster", category: "Alltag" },
            { romanian: "Ușă", german: "Tür", category: "Alltag" },
            { romanian: "Scaun", german: "Stuhl", category: "Alltag" },
            { romanian: "Masă", german: "Tisch", category: "Alltag" },
            { romanian: "Pere", german: "Birne", category: "Essen & Trinken" },
            { romanian: "Morcov", german: "Karotte", category: "Essen & Trinken" },
            { romanian: "Cartof", german: "Kartoffel", category: "Essen & Trinken" },
            { romanian: "Salată", german: "Salat", category: "Essen & Trinken" },
            { romanian: "Tomată", german: "Tomate", category: "Essen & Trinken" },
            { romanian: "Castravete", german: "Gurke", category: "Essen & Trinken" },
            { romanian: "Ardei", german: "Paprika", category: "Essen & Trinken" },
            { romanian: "Ceapă", german: "Zwiebel", category: "Essen & Trinken" },
            { romanian: "Usturoi", german: "Knoblauch", category: "Essen & Trinken" },
            { romanian: "Ciocolată", german: "Schokolade", category: "Essen & Trinken" },
            { romanian: "Înghețată", german: "Eis", category: "Essen & Trinken" },
            { romanian: "Prăjitură", german: "Kuchen", category: "Essen & Trinken" },
            { romanian: "Costă", german: "kostet", category: "Verben" }
        ],
        grammar: [
            {
                id: "g1", title: "Verben: Präsens", icon: "fas fa-running", description: "Lerne die Konjugation von regelmäßigen Verben im Präsens.", xp: 40,
                exercises: [
                    { type: "fill-in-the-blank", question: "Ich arbeite = Eu ____.", answer: "lucrez" },
                    { type: "multiple-choice", question: "Du sprichst = Tu ____.", options: ["vorbesc", "vorbești", "vorbește"], answer: "vorbești" },
                    { type: "fill-in-the-blank", question: "Er/Sie isst = El/Ea ____.", answer: "mănâncă" },
                ]
            },
            {
                id: "g2", title: "Substantive: Geschlecht", icon: "fas fa-venus-mars", description: "Verstehe das männliche, weibliche und neutrale Geschlecht.", xp: 30,
                exercises: [
                    { type: "multiple-choice", question: "Welches Geschlecht hat 'băiat' (Junge)?", options: ["Männlich", "Weiblich", "Neutral"], answer: "Männlich" },
                    { type: "multiple-choice", question: "Welches Geschlecht hat 'fată' (Mädchen)?", options: ["Männlich", "Weiblich", "Neutral"], answer: "Weiblich" },
                    { type: "multiple-choice", question: "Welches Geschlecht hat 'scaun' (Stuhl)?", options: ["Männlich", "Weiblich", "Neutral"], answer: "Neutral" },
                ]
            }
        ],
        pronunciation: [
            {
                id: "p1", title: "Der Buchstabe 'ă'", icon: "fas fa-assistive-listening-systems", description: "Höre genau hin und erkenne den Laut 'ă'.", xp: 25,
                exercises: [
                    { type: "audio", question: "Welches Wort hörst du?", audio: "măr", options: ["măr (Apfel)", "mar (braun)", "mor (ich sterbe)"], answer: "măr (Apfel)" },
                    { type: "audio", question: "Welches Wort hörst du?", audio: "pâine", options: ["pâine (Brot)", "pine (Kiefer)", "pene (Federn)"], answer: "pâine (Brot)" },
                ]
            },
            {
                id: "p2", title: "Zischende Laute: 'ș' und 'ț'", icon: "fas fa-wind", description: "Unterscheide zwischen den scharfen 'ș' und 'ț' Lauten.", xp: 35,
                 exercises: [
                    { type: "audio", question: "Welches Wort hörst du?", audio: "șapte", options: ["șapte (sieben)", "fapte (Taten)"], answer: "șapte (sieben)" },
                    { type: "audio", question: "Welches Wort hörst du?", audio: "mașină", options: ["mașină (Auto)", "macina (mahlen)"], answer: "mașină (Auto)" },
                    { type: "audio", question: "Welches Wort hörst du?", audio: "piață", options: ["piață (Markt)", "piatră (Stein)"], answer: "piață (Markt)" },
                ]
            }
        ],
        conversations: [
            {
                id: "c1", title: "Im Café", icon: "fas fa-coffee", description: "Übe einen einfachen Dialog, um einen Kaffee zu bestellen.",
                dialogue: [
                    { speaker: "other", line: "Bună ziua! Ce doriți?" },
                    { speaker: "user", line: "Bună ziua! Aș dori o cafea, vă rog." },
                    { speaker: "other", line: "Desigur. Altceva?" },
                    { speaker: "user", line: "Nu, mulțumesc. Atât." },
                    { speaker: "other", line: "Poftiți. Cafeaua dumneavoastră." },
                    { speaker: "user", line: "Mulțumesc mult!" }
                ]
            },
             {
                id: "c2", title: "Nach dem Weg fragen", icon: "fas fa-route", description: "Frage jemanden auf der Straße nach dem Weg zum Bahnhof.",
                dialogue: [
                    { speaker: "user", line: "Scuzați-mă, mă puteți ajuta?" },
                    { speaker: "other", line: "Da, sigur. Spuneți." },
                    { speaker: "user", line: "Unde este gara, vă rog?" },
                    { speaker: "other", line: "Mergeți drept înainte și apoi la prima stradă la dreapta." },
                    { speaker: "user", line: "Este departe?" },
                    { speaker: "other", line: "Nu, cam la cinci minute de mers pe jos." },
                    { speaker: "user", line: "Mulțumesc frumos pentru ajutor!" },
                    { speaker: "other", line: "Cu plăcere!" }
                ]
            }
        ]
    };
    
    const MAX_HEARTS = 5;
    const PRACTICE_SESSION_GOAL = 5;

    // --- Spaced Repetition: Fehlerhafte Wörter speichern ---
    let userProgress = {
        completedLessons: [],
        xp: 0,
        streak: 0,
        hearts: MAX_HEARTS,
        difficultWords: [],
        dailyGoal: { completed: false, date: null },
        badges: [],
        favoriteWords: []
    };
    
    let currentLesson = null;
    let currentExerciseIndex = 0;
    let selectedAnswer = null;
    let isPracticeSession = false;
    let practiceCorrectAnswers = 0;
    
    const appContainer = document.getElementById('app-container');
    const navButtons = {
        home: document.getElementById('nav-home'),
        vocab: document.getElementById('nav-vocab'),
        progress: document.getElementById('nav-progress'),
        grammar: document.getElementById('nav-grammar'),
        conversation: document.getElementById('nav-conversation'),
        pronunciation: document.getElementById('nav-pronunciation'),

    };
    const themeToggle = document.getElementById('theme-toggle');

    // Nur Herz-Kauf im Shop erlauben
const SHOP_ITEMS = [
    { id: "heart", name: "1 Herz", cost: 50, type: "heart" }
];

    async function loadUserProgressFromServer() {
        try {
            const response = await fetch('/api/progress');
            if (!response.ok) {
                throw new Error('Netzwerkantwort war nicht ok.');
            }
            const progressData = await response.json();

            const defaultProgress = {
                completedLessons: [],
                xp: 0,
                streak: 0,
                hearts: MAX_HEARTS,
            };

            userProgress = {
                ...defaultProgress,
                xp: progressData.xp || 0,
                hearts: progressData.hearts ?? MAX_HEARTS,
                streak: progressData.streak || 0,
                completedLessons: progressData.completed_lessons || [],
                difficultWords: progressData.difficult_words || [],
                dailyGoal: progressData.daily_goal || { completed: false, date: null },
                badges: progressData.badges || [],
                favoriteWords: progressData.favorite_words || []
            };
            
            console.log('Fortschritt vom Server geladen:', userProgress);

        } catch (error) {
            console.error('Fehler beim Laden des Fortschritts:', error);
            userProgress = { completedLessons: [], xp: 0, streak: 0, hearts: MAX_HEARTS };
        }
    }

    async function saveProgressToServer() {
        try {
            const progressToSave = {
                completed_lessons: userProgress.completedLessons,
                xp: userProgress.xp,
                hearts: userProgress.hearts,
                streak: userProgress.streak,
                difficult_words: userProgress.difficultWords,
                daily_goal: userProgress.dailyGoal,
                badges: userProgress.badges,
                favorite_words: userProgress.favoriteWords
            };

            const response = await fetch('/api/progress', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(progressToSave),
            });

            if (!response.ok) {
                 throw new Error('Fehler beim Speichern des Fortschritts.');
            }

            const result = await response.json();
            console.log(result.message);

        } catch (error) {
            console.error(error);
        }
    }

    function speak(text, lang = 'ro-RO') {
        if (!('speechSynthesis' in window)) {
            alert('Entschuldigung, dein Browser unterstützt keine Sprachausgabe.');
            return;
        }
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    }

    function startGenericLesson(lessonData) {
         if (userProgress.hearts <= 0) {
            appContainer.innerHTML = `<div class="quiz-container text-center"><h2>Keine Herzen mehr!</h2><p>Du musst zuerst üben, um Herzen wiederherzustellen, bevor du eine neue Lektion beginnen kannst.</p><button class="check-button" id="back-to-home">Zurück zur Übersicht</button></div>`;
            document.getElementById('back-to-home').addEventListener('click', showHomePage);
            return;
        }

        if (!lessonData) return;
        
        isPracticeSession = false;
        currentLesson = lessonData;
        currentExerciseIndex = 0;
        showExercise();
    }
    
    // --- Spaced Repetition: In Practice-Session gezielt wiederholen ---
    function startPracticeSession() {
        isPracticeSession = true;
        practiceCorrectAnswers = 0;

        // 5 zufällige Vokabel-Fragen aus dem gesamten Pool (ohne Duplikate)
        let allVocab = db.vocabulary.slice();
        let used = new Set();
        let practiceExercises = [];

        while (practiceExercises.length < PRACTICE_SESSION_GOAL && allVocab.length > 0) {
            const idx = Math.floor(Math.random() * allVocab.length);
            const word = allVocab.splice(idx, 1)[0];
            if (used.has(word.romanian)) continue;
            used.add(word.romanian);

            // Falsche Antworten generieren
            const wrongOptions = db.vocabulary
                .filter(v => v.romanian !== word.romanian)
                .sort(() => 0.5 - Math.random())
                .slice(0, 2)
                .map(v => v.german);

            const options = [word.german, ...wrongOptions].sort(() => 0.5 - Math.random());

            practiceExercises.push({
                type: "multiple-choice",
                question: `Was bedeutet "${word.romanian}"?`,
                options: options,
                answer: word.german
            });
        }

        currentLesson = { id: "practice", title: "Übungseinheit", exercises: practiceExercises, xp: 0 };
        currentExerciseIndex = 0;
        showExercise();
    }

    function showExercise() {
        if (!currentLesson || currentExerciseIndex >= currentLesson.exercises.length) {
            if (isPracticeSession) {
                completePracticeSession();
            } else {
                completeLesson();
            }
            return;
        }

        selectedAnswer = null;
        const exercise = currentLesson.exercises[currentExerciseIndex];
        const progress = Math.round(((currentExerciseIndex) / currentLesson.exercises.length) * 100);
        const title = isPracticeSession ? "Übung: Herzen verdienen" : currentLesson.title;

        let exerciseHTML = `
            <div class="quiz-container">
                <h3 style="text-align: center; color: var(--text-light); margin-bottom: 10px;">${title}</h3>
                <div class="progress-bar" style="margin-bottom: 20px;"><div class="progress-fill" style="width: ${progress}%"></div></div>
                ${exercise.type === 'audio' ? `<button class="audio-btn pronounce-btn" data-word="${exercise.audio}"><i class="fas fa-volume-high"></i></button>` : ''}
                <div class="question-text">${exercise.question}</div>
        `;

        switch (exercise.type) {
            case 'multiple-choice':
            case 'audio':
                exerciseHTML += `<div class="options-grid">
                    ${exercise.options.map(option => `<button class="option-btn" data-answer="${option}">${option}</button>`).join('')}
                </div>`;
                break;
            case 'fill-in-the-blank':
                exerciseHTML += `
                    <input type="text" id="blank-input" placeholder="Antwort eingeben..." style="width: 100%; padding: 15px; font-size: 1.2rem; border-radius: var(--border-radius); border: 1px solid var(--border-color); margin-top: 20px;">
                `;
                break;
            case 'matching-pairs':
                const shuffledRo = [...exercise.pairs].sort(() => 0.5 - Math.random());
                const shuffledDe = [...exercise.pairs].sort(() => 0.5 - Math.random());
                exerciseHTML += `
                    <div class="matching-grid">
                        <div class="match-column">
                            ${shuffledRo.map((pair, index) => `<button class="match-btn" data-pair-id="${pair.ro}">${pair.ro}</button>`).join('')}
                        </div>
                        <div class="match-column">
                            ${shuffledDe.map((pair, index) => `<button class="match-btn" data-pair-id="${pair.ro}">${pair.de}</button>`).join('')}
                        </div>
                    </div>
                `;
                break;
        }

        exerciseHTML += `
                <div id="feedback-container"></div>
                <button class="check-button" id="check-answer" style="margin-top: 20px;" disabled>Überprüfen</button>
                <button class="check-button" id="next-exercise" style="margin-top: 20px; display:none;">Weiter</button>
            </div>
        `;
        appContainer.innerHTML = exerciseHTML;
        
        const checkAnswerBtn = document.getElementById('check-answer');
        const nextBtn = document.getElementById('next-exercise');

        if (exercise.type === 'audio') {
             document.querySelector('.pronounce-btn').addEventListener('click', (e) => speak(e.currentTarget.dataset.word));
        }

        if (exercise.type === 'multiple-choice' || exercise.type === 'audio') {
            const optionBtns = document.querySelectorAll('.option-btn');
            optionBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    optionBtns.forEach(b => b.classList.remove('selected'));
                    btn.classList.add('selected');
                    selectedAnswer = btn.dataset.answer;
                    checkAnswerBtn.disabled = false;
                });
            });
        } else if (exercise.type === 'fill-in-the-blank') {
            const input = document.getElementById('blank-input');
            input.addEventListener('input', () => {
                checkAnswerBtn.disabled = input.value.trim() === '';
            });
            input.addEventListener('keyup', (e) => {
                if (e.key === 'Enter' && !checkAnswerBtn.disabled) {
                    checkAnswer(exercise);
                }
            });
        } else if (exercise.type === 'matching-pairs') {
            let selectedRo = null;
            let selectedDe = null;
            const matchBtns = document.querySelectorAll('.match-btn');
            matchBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    if(btn.classList.contains('correct')) return;
                    const isRoButton = exercise.pairs.some(p => p.ro === btn.textContent);
                    if (isRoButton) {
                        document.querySelectorAll('.match-column:first-child .match-btn').forEach(b => b.classList.remove('selected'));
                        btn.classList.add('selected');
                        selectedRo = btn;
                    } else {
                        document.querySelectorAll('.match-column:last-child .match-btn').forEach(b => b.classList.remove('selected'));
                        btn.classList.add('selected');
                        selectedDe = btn;
                    }
                    if (selectedRo && selectedDe) {
                        if (selectedRo.dataset.pairId === selectedDe.dataset.pairId) {
                            selectedRo.classList.remove('selected');
                            selectedDe.classList.remove('selected');
                            selectedRo.classList.add('correct');
                            selectedDe.classList.add('correct');
                            selectedRo.disabled = true;
                            selectedDe.disabled = true;
                            selectedRo = null;
                            selectedDe = null;
                        } else {
                            selectedRo.classList.add('incorrect');
                            selectedDe.classList.add('incorrect');
                            setTimeout(() => {
                                selectedRo.classList.remove('selected', 'incorrect');
                                selectedDe.classList.remove('selected', 'incorrect');
                                selectedRo = null;
                                selectedDe = null;
                            }, 800);
                        }
                    }
                    const totalPairs = exercise.pairs.length;
                    const correctPairs = document.querySelectorAll('.match-btn.correct').length / 2;
                    if (correctPairs === totalPairs) {
                        checkAnswerBtn.disabled = false;
                    }
                });
            });
        }
        
        checkAnswerBtn.addEventListener('click', async () => {
            await checkAnswer(exercise);
            checkAnswerBtn.style.display = "none";
            nextBtn.style.display = "";
            nextBtn.focus();
        });
        nextBtn.addEventListener('click', () => {
            currentExerciseIndex++;
            showExercise();
        });
    }


    // --- Deaktiviere automatisches Skippen nach Zeit in checkAnswer ---
    async function checkAnswer(exercise) {
        let isCorrect = true; 

        if (exercise.type === 'multiple-choice' || exercise.type === 'audio') {
            isCorrect = selectedAnswer && selectedAnswer.toLowerCase() === exercise.answer.toLowerCase();
        } else if (exercise.type === 'fill-in-the-blank') {
            isCorrect = document.getElementById('blank-input').value.trim().toLowerCase() === exercise.answer.toLowerCase();
        }
       
        document.querySelectorAll('.option-btn, .match-btn, #blank-input, #check-answer').forEach(el => el.disabled = true);
        const feedbackContainer = document.getElementById('feedback-container');

        let feedbackHTML = '';

        if (isCorrect) {
            if(isPracticeSession) practiceCorrectAnswers++;
            const xpGained = isPracticeSession ? 5 : Math.round(currentLesson.xp / currentLesson.exercises.length);
            
            userProgress.xp += xpGained;
            updateStats();

            feedbackHTML = `<div class="correct" style="padding: 15px; border-radius: var(--border-radius); margin-top: 15px;">Richtig! +${xpGained} XP</div>`;
        } else {
            if (!isPracticeSession) {
                 userProgress.hearts--;
                 updateStats();
            }
            const correctAnswer = exercise.answer;
            feedbackHTML = `<div class="incorrect" style="padding: 15px; border-radius: var(--border-radius); margin-top: 15px;">Falsch. Die richtige Antwort ist: <strong>${correctAnswer}</strong>.</div>`;
        }
        
        if (exercise.explanation) {
            feedbackHTML += `
                <div class="explanation-box">
                    <i class="fas fa-info-circle"></i>
                    <span>${exercise.explanation}</span>
                </div>
            `;
        }
        
        feedbackContainer.innerHTML = feedbackHTML;
        
        await saveProgressToServer();
    }

    function completeLesson() {
        if (!userProgress.completedLessons.includes(currentLesson.id)) {
            userProgress.completedLessons.push(currentLesson.id);
        }
        // Tagesziel als erreicht markieren
        const today = new Date().toISOString().slice(0,10);
        if (userProgress.dailyGoal && userProgress.dailyGoal.date === today) {
            userProgress.dailyGoal.completed = true;
        }
        // Badge: 10 Lektionen
        if (userProgress.completedLessons.length === 10 && !(userProgress.badges || []).some(b => b.id === "10lessons")) {
            userProgress.badges = userProgress.badges || [];
            userProgress.badges.push({ id: "10lessons", icon: "fas fa-medal", desc: "10 Lektionen abgeschlossen" });
        }
        // Badge: 5 Tage in Folge (vereinfachte Logik)
        userProgress.streak = userProgress.streak || 0;
        if (userProgress.streak === 4 && !(userProgress.badges || []).some(b => b.id === "5streak")) {
            userProgress.badges.push({ id: "5streak", icon: "fas fa-fire", desc: "5 Tage in Folge gelernt" });
        }
        saveProgressToServer();
        updateStats();

        const totalLessonXP = currentLesson.xp;

        appContainer.innerHTML = `
            <div class="quiz-container text-center">
                <i class="fas fa-trophy" style="font-size: 4rem; color: var(--accent-color);"></i>
                <h2>Lektion abgeschlossen!</h2>
                <p>Du hast "${currentLesson.title}" gemeistert und ${totalLessonXP} XP verdient!</p>
                <button class="check-button" id="back-to-home">Zurück zur Übersicht</button>
            </div>
        `;
        document.getElementById('back-to-home').addEventListener('click', showHomePage);
    }
    
    function completePracticeSession() {
        const totalPracticeXP = practiceCorrectAnswers * 5;
        let message = `<h2>Übung beendet!</h2><p>Du hast ${practiceCorrectAnswers} von ${PRACTICE_SESSION_GOAL} Fragen richtig beantwortet und ${totalPracticeXP} XP verdient.</p>`;
        
        if (practiceCorrectAnswers >= PRACTICE_SESSION_GOAL) {
            if (userProgress.hearts < MAX_HEARTS) {
                userProgress.hearts++;
                message += `<p style="color: var(--success-color); font-weight: bold;">Super! Du hast ein Herz zurückgewonnen!</p>`;
            } else {
                message += `<p>Du hast bereits die maximale Anzahl an Herzen.</p>`;
            }
        } else {
            message += `<p>Du musst alle Fragen richtig beantworten, um ein Herz zu verdienen. Versuche es erneut!</p>`;
        }
        
        // Tagesziel als erreicht markieren
        const today = new Date().toISOString().slice(0,10);
        if (userProgress.dailyGoal && userProgress.dailyGoal.date === today) {
            userProgress.dailyGoal.completed = true;
        }
        
        saveProgressToServer();
        updateStats();

        appContainer.innerHTML = `<div class="quiz-container text-center">${message}<button class="check-button" id="back-to-home">Zurück zur Übersicht</button></div>`;
        document.getElementById('back-to-home').addEventListener('click', showHomePage);
    }
    
    function updateStats() {
        if (userProgress.xp !== undefined) {
            document.getElementById('xp-count').textContent = userProgress.xp;
            document.getElementById('streak-count').textContent = userProgress.streak;
            document.getElementById('hearts-count').textContent = userProgress.hearts;
        }
    }

    function setActiveNav(activeButton) {
        Object.values(navButtons).forEach(button => {
            button.classList.remove('active');
        });
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }

    function showHomePage() {
        setActiveNav(navButtons.home);
        let content = '';
        // Tagesziel
        const today = new Date().toISOString().slice(0,10);
        if (!userProgress.dailyGoal || userProgress.dailyGoal.date !== today) {
            userProgress.dailyGoal = { completed: false, date: today };
        }
        content += `
            <section>
                <div class="stat-card" style="background: var(--card-bg); padding: 10px 20px; border-radius: var(--border-radius); margin-bottom: 10px; display: flex; align-items: center; gap: 20px;">
                    <i class="fas fa-bullseye" style="font-size: 2rem; color: var(--accent-color);"></i>
                    <div>
                        <strong>Tagesziel:</strong> 1 Lektion oder 5 Wörter lernen<br>
                        <span style="color:${userProgress.dailyGoal.completed ? 'var(--success-color)' : 'var(--danger-color)'};font-weight:bold;">
                            ${userProgress.dailyGoal.completed ? 'Erreicht!' : 'Noch offen'}
                        </span>
                    </div>
                </div>
                <div class="stat-card" style="background: var(--card-bg); padding: 10px 20px; border-radius: var(--border-radius); margin-bottom: 10px; display: flex; align-items: center; gap: 20px;">
                    <i class="fas fa-trophy" style="font-size: 2rem; color: var(--primary-color);"></i>
                    <div>
                        <strong>Badges:</strong>
                        ${userProgress.badges && userProgress.badges.length > 0
                            ? userProgress.badges.map(b => `<span class="badge" title="${b.desc}" style="margin-right:5px;"><i class="${b.icon}"></i></span>`).join('')
                            : '<span style="color:var(--text-light);">Noch keine</span>'
                        }
                    </div>
                </div>
            </section>
        `;
        let lessonCounter = 0;
        let completedLessonsCount = userProgress.completedLessons ? userProgress.completedLessons.length : 0;

    // Übungseinheit-Card: Immer anzeigen, unabhängig von Herzen
    content += `
        <section>
            <div class="lesson-card practice-card" id="practice-session-card" style="cursor: pointer; border-color: var(--info-color); position:relative;">
                <i class="fas fa-heart-pulse" aria-hidden="true"></i>
                <h3>Übungseinheit</h3>
                <p>Beantworte ${PRACTICE_SESSION_GOAL} Fragen richtig, um ein Herz zurückzugewinnen!</p>
            </div>
        </section>
    `;

        db.courses.forEach(course => {
            content += `
                <section>
                    <h2 style="color: var(--primary-dark); border-bottom: 2px solid var(--border-color); padding-bottom: 10px; margin-bottom: 20px;">
                        <span style="background: var(--primary-color); color: white; padding: 2px 8px; border-radius: 5px; font-size: 1rem; margin-right: 10px;">${course.level}</span>
                        ${course.title}
                    </h2>
                    <div class="lesson-grid">
            `;
            
            // --- Angepasst: Nur rumänisches Alphabet frei, dann das nächste ---
            const completed = userProgress.completedLessons || [];
            course.lessons.forEach((lesson, idx) => {
                const isCompleted = completed.includes(lesson.id);
                let isUnlocked = false;

                if (course.level === "Start") {
                    if (lesson.id === "alpha-l1") {
                        isUnlocked = true;
                    } else if (lesson.id === "alpha-l2") {
                        isUnlocked = completed.includes("alpha-l1");
                    } else {
                        isUnlocked = false;
                    }
                } else {
                    // Für alle anderen Kurse bleibt die alte Logik
                    if (idx === 0) {
                        isUnlocked = true;
                    } else {
                        const prevLesson = course.lessons[idx - 1];
                        isUnlocked = completed.includes(prevLesson.id);
                    }
                }
                if (isCompleted) isUnlocked = true;

                content += `
                    <div class="lesson-card ${isCompleted ? 'completed' : ''} ${!isUnlocked ? 'locked' : ''}" 
                         data-lesson-id="${lesson.id}" 
                         style="${!isUnlocked ? 'cursor: not-allowed; background-color: var(--light-bg);' : 'cursor: pointer;'}">
                        
                        ${!isUnlocked ? '<i class="fas fa-lock" style="position: absolute; top: 20px; right: 20px; color: var(--text-light);"></i>' : ''}
                        
                        <i class="${lesson.icon}" aria-hidden="true"></i>
                        <h3>${lesson.title}</h3>
                        <p>${lesson.description}</p>
                        <div style="margin-top: 15px; color: var(--accent-dark); font-weight: bold;">${lesson.xp} XP</div>
                    </div>
                `;
                lessonCounter++;
            });

            content += '</div></section>';
        });

        appContainer.innerHTML = content;

        // Nur freigeschaltete Lektionen anklickbar machen
        document.querySelectorAll('.lesson-card:not(.locked):not(.practice-card)').forEach(card => {
            card.addEventListener('click', () => {
                const lessonId = card.dataset.lessonId;
                let lessonToStart;
                for (const course of db.courses) {
                    const foundLesson = course.lessons.find(l => l.id === lessonId);
                    if (foundLesson) {
                        lessonToStart = foundLesson;
                        break;
                    }
                }
                startGenericLesson(lessonToStart);
            });
        });

        // Übungseinheit-Card: Immer aktivieren
        const practiceCard = document.getElementById('practice-session-card');
        if (practiceCard) {
            practiceCard.addEventListener('click', startPracticeSession);
        }

        // === SHOP BUTTON ===
        content += `
            <section>
                <button class="check-button" id="open-shop-btn" style="width:auto; margin-bottom:10px;">
                    <i class="fas fa-store"></i> Shop
                </button>
            </section>
        `;

        appContainer.innerHTML = content;

        // SHOP-Dialog öffnen
        document.getElementById('open-shop-btn').addEventListener('click', showShopModal);
    }

    // === SHOP MODAL (nur Herz-Kauf) ===
function showShopModal() {
    let shopHTML = `
        <div class="modal" id="shop-modal" style="display:block;">
            <div class="modal-content">
                <span class="close" id="close-shop-modal" aria-label="Schließen">&times;</span>
                <h2>Shop</h2>
                <div style="margin-bottom:15px;">Deine XP: <b>${userProgress.xp}</b></div>
                <div>
                    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
                        <span>1 Herz</span>
                        <button class="check-button shop-buy-btn" data-item="heart" style="width:auto; font-size:1rem; padding:8px 15px;">
                            Kaufen (50 XP)
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    let modalDiv = document.createElement('div');
    modalDiv.innerHTML = shopHTML;
    document.body.appendChild(modalDiv);

    document.getElementById('close-shop-modal').onclick = () => modalDiv.remove();
    document.querySelector('.shop-buy-btn').onclick = async () => {
        if (userProgress.xp < 50) {
            alert("Nicht genug XP!");
            return;
        }
        if (userProgress.hearts >= MAX_HEARTS) {
            alert("Du hast bereits die maximale Anzahl an Herzen.");
            return;
        }
        userProgress.xp -= 50;
        userProgress.hearts = Math.min(userProgress.hearts + 1, MAX_HEARTS);
        await saveProgressToServer();
        updateStats();
        modalDiv.remove();
        showShopModal();
    };
}

    function showVocabularyPage() {
        setActiveNav(navButtons.vocab);
        // Schöne Kategorie-Knöpfe
        const categories = [
            "Grundlagen", "Familie", "Zahlen & Zeit", "Essen & Trinken", "Farben",
            "Adjektive & Gefühle", "Tiere", "Berufe", "Orte", "Verben", "Zeit",
            "Reisen", "Technik", "Alltag", "Favoriten"
        ];
        let content = `
            <section>
                <h2>Vokabeltrainer</h2>
                <div class="category-tabs vocab-categories" style="display: flex; gap: 15px; margin-bottom: 20px; flex-wrap: wrap;">
                    ${categories.map(cat => `
                        <button class="nav-btn category-btn vocab-cat-btn" data-category="${cat}">
                            <span>${cat === "Favoriten" ? "<i class='fas fa-star'></i> " : ""}${cat}</span>
                        </button>
                    `).join('')}
                </div>
                <div id="vocab-list-container" class="word-list" style="background: var(--card-bg); border-radius: var(--border-radius); padding: 20px;">
                </div>
            </section>
        `;
        appContainer.innerHTML = content;

        function renderVocab(category) {
            let vocabList;
            if (category === "Favoriten") {
                vocabList = db.vocabulary.filter(v => userProgress.favoriteWords && userProgress.favoriteWords.includes(v.romanian));
            } else {
                vocabList = db.vocabulary.filter(v => v.category === category);
            }
            document.getElementById('vocab-list-container').innerHTML = `
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="border-bottom: 2px solid var(--primary-color);">
                            <th style="text-align: left; padding: 10px;">Rumänisch</th>
                            <th style="text-align: left; padding: 10px;">Deutsch</th>
                            <th style="text-align: left; padding: 10px;">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${vocabList.map(v => `
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 10px; display: flex; align-items: center; justify-content: space-between;">
                                    <span>${v.romanian}</span>
                                    <button class="audio-btn small pronounce-btn" data-word="${v.romanian}" aria-label="Aussprache anhören">
                                        <i class="fas fa-volume-high" aria-hidden="true"></i>
                                    </button>
                                </td>
                                <td style="padding: 10px;">${v.german}</td>
                                <td style="padding: 10px;">
                                    <button class="fav-btn" data-word="${v.romanian}" style="background:none;border:none;cursor:pointer;">
                                        <i class="fas fa-star${userProgress.favoriteWords && userProgress.favoriteWords.includes(v.romanian) ? '' : '-o'}" style="color: var(--accent-color);"></i>
                                    </button>
                                </td>
                            </tr>`).join('')}
                    </tbody>
                </table>
            `;
            document.querySelectorAll('.pronounce-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const word = e.currentTarget.dataset.word;
                    speak(word);
                });
            });
            document.querySelectorAll('.fav-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const word = btn.dataset.word;
                    userProgress.favoriteWords = userProgress.favoriteWords || [];
                    if (userProgress.favoriteWords.includes(word)) {
                        userProgress.favoriteWords = userProgress.favoriteWords.filter(w => w !== word);
                    } else {
                        userProgress.favoriteWords.push(word);
                    }
                    saveProgressToServer();
                    renderVocab(category);
                });
            });
        }
        
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');
                renderVocab(e.currentTarget.dataset.category);
            });
        });
        
        // Standard: Grundlagen
        document.querySelector('.category-btn[data-category="Grundlagen"]').click();
    }
    
    function showGrammarPage() {
        setActiveNav(navButtons.grammar);
        let content = `
            <section>
                <h2>Grammatikübungen</h2>
                <div class="lesson-grid">
        `;

        db.grammar.forEach(topic => {
            const isCompleted = userProgress.completedLessons && userProgress.completedLessons.includes(topic.id);
            content += `
                <div class="lesson-card ${isCompleted ? 'completed' : ''}" data-lesson-id="${topic.id}" style="cursor: pointer;">
                    <i class="${topic.icon}" aria-hidden="true"></i>
                    <h3>${topic.title}</h3>
                    <p>${topic.description}</p>
                    <div style="margin-top: 15px; color: var(--accent-dark); font-weight: bold;">${topic.xp} XP</div>
                </div>
            `;
        });
        
        content += '</div></section>';
        appContainer.innerHTML = content;
        
        document.querySelectorAll('.lesson-card').forEach(card => {
            card.addEventListener('click', () => {
                const lessonId = card.dataset.lessonId;
                const lessonData = db.grammar.find(g => g.id === lessonId);
                startGenericLesson(lessonData);
            });
        });
    }

    function showPronunciationPage() {
        setActiveNav(navButtons.pronunciation);
        let content = `
            <section>
                <h2>Aussprachetraining</h2>
                <div class="lesson-grid">
        `;

        db.pronunciation.forEach(topic => {
            const isCompleted = userProgress.completedLessons && userProgress.completedLessons.includes(topic.id);
            content += `
                <div class="lesson-card ${isCompleted ? 'completed' : ''}" data-lesson-id="${topic.id}" style="cursor: pointer;">
                    <i class="${topic.icon}" aria-hidden="true"></i>
                    <h3>${topic.title}</h3>
                    <p>${topic.description}</p>
                    <div style="margin-top: 15px; color: var(--accent-dark); font-weight: bold;">${topic.xp} XP</div>
                </div>
            `;
        });
        
        content += '</div></section>';
        appContainer.innerHTML = content;
        
        document.querySelectorAll('.lesson-card').forEach(card => {
            card.addEventListener('click', () => {
                               const lessonId = card.dataset.lessonId;
                const lessonData = db.pronunciation.find(p => p.id === lessonId);
                startGenericLesson(lessonData);
            });
        });
    }

    function showConversationPage() {
        setActiveNav(navButtons.conversation);
        let content = `
            <section>
                <h2>Konversationen üben</h2>
                <div class="lesson-grid">
        `;

        db.conversations.forEach(convo => {
            content += `
                <div class="lesson-card" data-convo-id="${convo.id}" style="cursor: pointer;">
                    <i class="${convo.icon}" aria-hidden="true"></i>
                    <h3>${convo.title}</h3>
                    <p>${convo.description}</p>
                </div>
            `;
        });

        content += `</div></section>`;
        appContainer.innerHTML = content;

        document.querySelectorAll('.lesson-card').forEach(card => {
            card.addEventListener('click', () => {
                const convoId = card.dataset.convoId;
                const convoData = db.conversations.find(c => c.id === convoId);
                displayConversation(convoData);
            });
        });
    }

    function displayConversation(convo) {
        let content = `
            <div class="conversation-container">
                <h3>${convo.title}</h3>
        `;
        convo.dialogue.forEach(line => {
            content += `
                <div class="chat-bubble ${line.speaker}">
                    <span>${line.line}</span>
                    <button class="audio-btn small pronounce-btn" data-word="${line.line}">
                        <i class="fas fa-volume-high"></i>
                    </button>
                </div>
            `;
        });
        content += `<button class="check-button" id="back-to-convo-list" style="margin-top: 20px;">Zurück zur Übersicht</button></div>`;
        appContainer.innerHTML = content;
        
        document.querySelectorAll('.pronounce-btn').forEach(btn => {
            btn.addEventListener('click', e => speak(e.currentTarget.dataset.word));
        });
        document.getElementById('back-to-convo-list').addEventListener('click', showConversationPage);
    }

    function showProgressPage() {
        setActiveNav(navButtons.progress);
        const totalLessons = db.courses.reduce((sum, course) => sum + course.lessons.length, 0);
        const completedLessons = userProgress.completedLessons?.length || 0;
        const progressPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
        const totalXP = db.courses.flatMap(c => c.lessons).reduce((sum, l) => sum + l.xp, 0);
        const favWords = userProgress.favoriteWords || [];
        const badges = userProgress.badges || [];
        const longestStreak = userProgress.longestStreak || userProgress.streak || 0;
        const today = new Date().toISOString().slice(0,10);
        const dailyGoalDone = userProgress.dailyGoal && userProgress.dailyGoal.date === today && userProgress.dailyGoal.completed;

        let content = `
            <section>
                <h2>Dein Fortschritt</h2>
                <div class="stat-card" style="background: var(--card-bg); padding: 20px; border-radius: var(--border-radius); box-shadow: var(--shadow); margin-bottom: 20px;">
                    <h3><i class="fas fa-check-circle" style="color:var(--success-color);"></i> Lektionen abgeschlossen</h3>
                    <p style="font-size: 2rem; font-weight: bold; color: var(--primary-color);">${completedLessons} / ${totalLessons}</p>
                    <div class="progress-bar" style="height: 10px; margin-top: 10px;">
                        <div class="progress-fill" style="width: ${progressPercentage}%;"></div>
                    </div>
                </div>
                <div class="stat-card" style="background: var(--card-bg); padding: 20px; border-radius: var(--border-radius); box-shadow: var(--shadow); margin-bottom: 20px;">
                    <h3><i class="fas fa-star" style="color:var(--accent-color);"></i> Erfahrungspunkte (XP)</h3>
                    <p style="font-size: 2rem; font-weight: bold; color: var(--accent-color);">${userProgress.xp || 0} / ${totalXP}</p>
                </div>
                <div class="stat-card" style="background: var(--card-bg); padding: 20px; border-radius: var(--border-radius); box-shadow: var(--shadow); margin-bottom: 20px;">
                    <h3><i class="fas fa-fire" style="color:var(--danger-color);"></i> Streak</h3>
                    <p style="font-size: 2rem; font-weight: bold; color: var(--danger-color);">${userProgress.streak || 0}</p>
                    <div style="color:var(--text-light);font-size:1rem;">Längste Serie: <b>${longestStreak}</b></div>
                </div>
                <div class="stat-card" style="background: var(--card-bg); padding: 20px; border-radius: var(--border-radius); box-shadow: var(--shadow); margin-bottom: 20px;">
                    <h3><i class="fas fa-bullseye" style="color:var(--primary-color);"></i> Tagesziel</h3>
                    <p style="font-size: 1.2rem; font-weight: bold; color:${dailyGoalDone ? 'var(--success-color)' : 'var(--danger-color)'};">
                        ${dailyGoalDone ? 'Erreicht!' : 'Noch offen'}
                    </p>
                </div>
                <div class="stat-card" style="background: var(--card-bg); padding: 20px; border-radius: var(--border-radius); box-shadow: var(--shadow); margin-bottom: 20px;">
                    <h3><i class="fas fa-trophy" style="color:var(--primary-color);"></i> Badges</h3>
                    <div>
                        ${badges.length > 0
                            ? badges.map(b => `<span class="badge" title="${b.desc}" style="margin-right:5px;"><i class="${b.icon}"></i></span>`).join('')
                            : '<span style="color:var(--text-light);">Noch keine</span>'
                        }
                    </div>
                </div>
                <div class="stat-card" style="background: var(--card-bg); padding: 20px; border-radius: var(--border-radius); box-shadow: var(--shadow);">
                    <h3><i class="fas fa-star" style="color:var(--accent-color);"></i> Lieblingswörter</h3>
                    <div>
                        ${favWords.length > 0
                            ? favWords.slice(0,10).map(w => `<span style="background:var(--accent-light);color:var(--accent-dark);padding:2px 7px;border-radius:8px;margin-right:3px;">${w}</span>`).join('') +
                              (favWords.length > 10 ? ` ... (${favWords.length})` : '')
                            : '<span style="color:var(--text-light);">Keine</span>'
                        }
                    </div>
                </div>
            </section>
        `;
        appContainer.innerHTML = content;
    }

    function initializeEventListeners() {
        navButtons.home.addEventListener('click', showHomePage);
        navButtons.vocab.addEventListener('click', showVocabularyPage);
        navButtons.progress.addEventListener('click', showProgressPage);
        navButtons.grammar.addEventListener('click', showGrammarPage);
        navButtons.conversation.addEventListener('click', showConversationPage);
        navButtons.pronunciation.addEventListener('click', showPronunciationPage);
        
    
        
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            themeToggle.innerHTML = newTheme === 'dark' 
                ? '<i class="fas fa-sun" aria-hidden="true"></i>' 
                : '<i class="fas fa-moon" aria-hidden="true"></i>';
        });
    }
    
    function applySavedTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.body.setAttribute('data-theme', savedTheme);
        
        themeToggle.innerHTML = savedTheme === 'dark' 
            ? '<i class="fas fa-sun" aria-hidden="true"></i>' 
            : '<i class="fas fa-moon" aria-hidden="true"></i>';
    }

    applySavedTheme();
    initializeEventListeners();
    
    async function updateAndInitializeApp() {
        const loggedOutView = document.getElementById('logged-out-view');
        const loggedInView = document.getElementById('logged-in-view');
        const logoutBtn = document.getElementById('logout-btn');
        const accountBtn = document.getElementById('account-btn');

        // --- Konto-Modal anzeigen ---
        let sessionUser = { email: null, username: null }; // wird nach Login gesetzt

        function showAccountModal() {
            // Statistiken berechnen
            const totalLessons = db.courses.reduce((sum, course) => sum + course.lessons.length, 0);
            const completedLessons = userProgress.completedLessons?.length || 0;
            const progressPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
            const longestStreak = userProgress.longestStreak || userProgress.streak || 0;
            const favWords = userProgress.favoriteWords || [];
            const badges = userProgress.badges || [];
            const today = new Date().toISOString().slice(0,10);
            const dailyGoalDone = userProgress.dailyGoal && userProgress.dailyGoal.date === today && userProgress.dailyGoal.completed;

            let modalHTML = `
                <div class="modal" id="account-modal" style="display:block;">
                    <div class="modal-content" style="max-width:400px;">
                        <span class="close" id="close-account-modal" aria-label="Schließen">&times;</span>
                        <h2 style="margin-bottom:10px;"><i class="fas fa-user-circle"></i> Konto</h2>
                        <div style="margin-bottom:10px;">
                            <b>E-Mail:</b> ${sessionUser.email ? sessionUser.email : '<span style="color:var(--danger-color);">Unbekannt</span>'}<br>
                            ${sessionUser.username ? `<b>Username:</b> ${sessionUser.username}<br>` : ''}
                        </div>
                        <div class="stat-card" style="background:var(--card-bg);padding:10px 15px;border-radius:var(--border-radius);margin-bottom:10px;">
                            <i class="fas fa-star" style="color:var(--accent-color);margin-right:8px;"></i>
                            <b>XP:</b> ${userProgress.xp || 0}
                            <span style="margin-left:15px;"><i class="fas fa-fire" style="color:var(--danger-color);"></i> <b>Streak:</b> ${userProgress.streak || 0}</span>
                        </div>
                        <div class="stat-card" style="background:var(--card-bg);padding:10px 15px;border-radius:var(--border-radius);margin-bottom:10px;">
                            <i class="fas fa-check-circle" style="color:var(--success-color);margin-right:8px;"></i>
                            <b>Lektionen abgeschlossen:</b> ${completedLessons} / ${totalLessons}
                            <div class="progress-bar" style="height:8px;margin-top:5px;">
                                <div class="progress-fill" style="width:${progressPercentage}%;"></div>
                            </div>
                        </div>
                        <div class="stat-card" style="background:var(--card-bg);padding:10px 15px;border-radius:var(--border-radius);margin-bottom:10px;">
                            <i class="fas fa-bullseye" style="color:var(--primary-color);margin-right:8px;"></i>
                            <b>Tagesziel:</b> 
                            <span style="color:${dailyGoalDone ? 'var(--success-color)' : 'var(--danger-color)'};font-weight:bold;">
                                ${dailyGoalDone ? 'Erreicht!' : 'Noch offen'}
                            </span>
                        </div>
                        <div class="stat-card" style="background:var(--card-bg);padding:10px 15px;border-radius:var(--border-radius);margin-bottom:10px;">
                            <i class="fas fa-trophy" style="color:var(--primary-color);margin-right:8px;"></i>
                            <b>Badges:</b>
                            ${badges.length > 0
                                ? badges.map(b => `<span class="badge" title="${b.desc}" style="margin-right:5px;"><i class="${b.icon}"></i></span>`).join('')
                                : '<span style="color:var(--text-light);">Noch keine</span>'
                            }
                        </div>
                        <div class="stat-card" style="background:var(--card-bg);padding:10px 15px;border-radius:var(--border-radius);margin-bottom:10px;">
                            <i class="fas fa-star" style="color:var(--accent-color);margin-right:8px;"></i>
                            <b>Lieblingswörter:</b>
                            ${favWords.length > 0
                                ? favWords.slice(0,5).map(w => `<span style="background:var(--accent-light);color:var(--accent-dark);padding:2px 7px;border-radius:8px;margin-right:3px;">${w}</span>`).join('') +
                                  (favWords.length > 5 ? ` ... (${favWords.length})` : '')
                                : '<span style="color:var(--text-light);">Keine</span>'
                            }
                        </div>
                        <div class="stat-card" style="background:var(--card-bg);padding:10px 15px;border-radius:var(--border-radius);margin-bottom:10px;">
                            <i class="fas fa-medal" style="color:var(--primary-dark);margin-right:8px;"></i>
                            <b>Längste Serie:</b> ${longestStreak}
                        </div>
                        <button class="check-button" id="logout-btn-modal" style="width:100%;margin-top:10px;">
                            <i class="fas fa-sign-out-alt"></i> Abmelden
                        </button>
                    </div>
                </div>
            `;
            let modalDiv = document.createElement('div');
            modalDiv.innerHTML = modalHTML;
            document.body.appendChild(modalDiv);

            document.getElementById('close-account-modal').onclick = () => modalDiv.remove();
            document.getElementById('logout-btn-modal').onclick = () => {
                window.location.href = '/logout';
            };
        }

        logoutBtn.addEventListener('click', () => {
            window.location.href = '/logout';
        });

        // Account-Button öffnet Modal
        accountBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showAccountModal();
        });

        try {
            const response = await fetch('/api/session-status');
            const data = await response.json();

            if (data.loggedIn) {
                loggedOutView.style.display = 'none';
                loggedInView.style.display = 'flex';
                // Username optional anzeigen
                sessionUser.email = data.email;
                sessionUser.username = data.username || null;
                accountBtn.title = `Eingeloggt als: ${data.email}${data.username ? " (" + data.username + ")" : ""}`;

                await loadUserProgressFromServer();
                updateStats();
                showHomePage();

            } else {
                loggedOutView.style.display = 'flex';
                loggedInView.style.display = 'none';
                accountBtn.title = 'Konto';
                appContainer.innerHTML = `
                    <div class="quiz-container text-center">
                        <h2>Willkommen bei Moldolearn!</h2>
                        <p>Bitte melden Sie sich an oder registrieren Sie sich, um Ihren Lernfortschritt zu speichern und auf Lektionen zuzugreifen.</p>
                        <a href="/login" class="check-button" style="text-decoration: none; display: inline-block; width: auto; padding: 15px 30px; margin-top: 20px;">Anmelden / Registrieren</a>
                    </div>`;
            }
        } catch (error) {
            console.error('Fehler beim Abrufen des Session-Status:', error);
            loggedOutView.style.display = 'flex';
            loggedInView.style.display = 'none';
            appContainer.innerHTML = `<p style="text-align: center; color: var(--danger-color);">Fehler bei der Verbindung zum Server. Bitte versuchen Sie es später erneut.</p>`;
        }
    }
    
    document.addEventListener('DOMContentLoaded', updateAndInitializeApp);


})();

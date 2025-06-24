// Dieta completa di 10 giorni estratta dal piano alimentare
const dieta = [
  {
    giorno: 1,
    pasti: {
      colazione: [
        { piatto: "Latte P.S. Macchiato", ricetta: "latte_macchiato" },
        { piatto: "Biscotti secchi", quantita: "40g" }
      ],
      pranzo: [
        { piatto: "Risotto agli asparagi", ricetta: "risotto_asparagi" },
        { piatto: "Cetrioli", quantita: "100g" },
        { piatto: "Valerianella", quantita: "100g" },
        { piatto: "Banane", quantita: "200g" },
        { piatto: "Mele", quantita: "180g" },
        { piatto: "Vino rosso", quantita: "120g" }
      ],
      cena: [
        { piatto: "Tonno alla griglia", ricetta: "tonno_griglia" },
        { piatto: "Pane integrale", quantita: "70g" }
      ]
    },
    olio: "25g"
  },
  {
    giorno: 2,
    pasti: {
      colazione: [
        { piatto: "Latte P.S. Macchiato", ricetta: "latte_macchiato" },
        { piatto: "Marmellata alla frutta", quantita: "30g" },
        { piatto: "Fette biscottate integrali", quantita: "24g" }
      ],
      pranzo: [
        { piatto: "Pasta con i broccoli", ricetta: "pasta_broccoli" },
        { piatto: "Insalata mista", ricetta: "insalata_mista" },
        { piatto: "Vino rosso", quantita: "120g" },
        { piatto: "Kiwi", quantita: "180g" }
      ],
      cena: [
        { piatto: "Tagliata con rucola", ricetta: "tagliata_rucola" },
        { piatto: "Pane integrale", quantita: "80g" },
        { piatto: "Agretti lessati", quantita: "150g" },
        { piatto: "Uva", quantita: "180g" }
      ]
    },
    olio: "35g",
    parmigiano: "5g"
  },
  {
    giorno: 3,
    pasti: {
      colazione: [
        { piatto: "Latte P.S. Macchiato", ricetta: "latte_macchiato" },
        { piatto: "Marmellata alla frutta", quantita: "30g" },
        { piatto: "Fette biscottate integrali", quantita: "32g" }
      ],
      pranzo: [
        { piatto: "Fusilli con fave e piselli", ricetta: "fusilli_fave_piselli" },
        { piatto: "Piselli lessati", ricetta: "piselli_lessati" },
        { piatto: "Vino rosso", quantita: "120g" },
        { piatto: "Kiwi", quantita: "180g" }
      ],
      cena: [
        { piatto: "Prosciutto cotto magro", quantita: "100g" },
        { piatto: "Pane integrale", quantita: "90g" },
        { piatto: "Insalata di indivia belga", quantita: "150g" },
        { piatto: "Ananas al naturale", quantita: "200g" }
      ]
    },
    olio: "35g",
    parmigiano: "10g"
  },
  {
    giorno: 4,
    pasti: {
      colazione: [
        { piatto: "Latte P.S. Macchiato", ricetta: "latte_macchiato" },
        { piatto: "Marmellata alla frutta", quantita: "30g" },
        { piatto: "Fette biscottate integrali", quantita: "24g" }
      ],
      pranzo: [
        { piatto: "Spaghetti pomodoro e basilico", ricetta: "spaghetti_pomodoro_basilico" },
        { piatto: "Insalata di verza con limone", ricetta: "insalata_verza_limone" },
        { piatto: "Vino rosso", quantita: "120g" },
        { piatto: "Kiwi", quantita: "180g" }
      ],
      cena: [
        { piatto: "Orata alla griglia", quantita: "200g" },
        { piatto: "Pane integrale", quantita: "80g" },
        { piatto: "Melanzane grigliate", ricetta: "melanzane_grigliate" },
        { piatto: "Pere", quantita: "200g" }
      ]
    },
    olio: "30g",
    parmigiano: "10g"
  },
  {
    giorno: 5,
    pasti: {
      colazione: [
        { piatto: "Latte P.S. Macchiato", ricetta: "latte_macchiato" },
        { piatto: "Biscotti secchi", quantita: "40g" }
      ],
      pranzo: [
        { piatto: "Riso con borlotti e trevigiana", ricetta: "riso_borlotti_trevigiana" },
        { piatto: "Fagioli borlotti in scatola scolati", quantita: "180g" },
        { piatto: "Vino rosso", quantita: "120g" },
        { piatto: "Kiwi", quantita: "180g" }
      ],
      cena: [
        { piatto: "Uovo sodo", quantita: "120g" },
        { piatto: "Pane integrale", quantita: "90g" },
        { piatto: "Insalata di verdure", ricetta: "insalata_verdure" },
        { piatto: "Mele", quantita: "180g" }
      ]
    },
    olio: "25g",
    parmigiano: "10g"
  },
  {
    giorno: 6,
    pasti: {
      colazione: [
        { piatto: "Latte P.S. Macchiato", ricetta: "latte_macchiato" },
        { piatto: "Marmellata alla frutta", quantita: "30g" },
        { piatto: "Fette biscottate integrali", quantita: "24g" }
      ],
      pranzo: [
        { piatto: "Pasta zucchine e zafferano", ricetta: "pasta_zucchine_zafferano" },
        { piatto: "Insalata di pomodori", quantita: "150g" },
        { piatto: "Vino rosso", quantita: "120g" },
        { piatto: "Kiwi", quantita: "180g" }
      ],
      cena: [
        { piatto: "Salmone ai ferri e limone", ricetta: "salmone_ferri_limone" },
        { piatto: "Pane integrale", quantita: "100g" },
        { piatto: "Insalata mista", ricetta: "insalata_mista" },
        { piatto: "Melone", quantita: "200g" }
      ]
    },
    olio: "15g",
    parmigiano: "10g"
  },
  {
    giorno: 7,
    pasti: {
      colazione: [
        { piatto: "Latte P.S. Macchiato", ricetta: "latte_macchiato" },
        { piatto: "Biscotti secchi", quantita: "40g" }
      ],
      pranzo: [
        { piatto: "Trenette al pesto", ricetta: "trenette_pesto" },
        { piatto: "Insalata di asparagi", ricetta: "insalata_asparagi" },
        { piatto: "Vino rosso", quantita: "120g" },
        { piatto: "Melone", quantita: "200g" }
      ],
      cena: [
        { piatto: "Petto di pollo al limone", ricetta: "petto_pollo_limone" },
        { piatto: "Pane integrale", quantita: "90g" },
        { piatto: "Insalata di radicchio rosso", ricetta: "insalata_radicchio_rosso" },
        { piatto: "Uva", quantita: "180g" }
      ]
    },
    olio: "20g"
  },
  {
    giorno: 8,
    pasti: {
      colazione: [
        { piatto: "Latte P.S. Macchiato", ricetta: "latte_macchiato" },
        { piatto: "Biscotti secchi", quantita: "40g" }
      ],
      pranzo: [
        { piatto: "Riso con la verza", ricetta: "riso_verza" },
        { piatto: "Insalata mista", ricetta: "insalata_mista" },
        { piatto: "Vino rosso", quantita: "120g" },
        { piatto: "Uva", quantita: "200g" }
      ],
      cena: [
        { piatto: "Platessa alla pizzaiola", ricetta: "platessa_pizzaiola" },
        { piatto: "Pane integrale", quantita: "80g" },
        { piatto: "Melanzane grigliate", ricetta: "melanzane_grigliate" },
        { piatto: "Pere", quantita: "180g" }
      ]
    },
    olio: "40g"
  },
  {
    giorno: 9,
    pasti: {
      colazione: [
        { piatto: "Latte P.S. Macchiato", ricetta: "latte_macchiato" },
        { piatto: "Biscotti secchi", quantita: "40g" }
      ],
      pranzo: [
        { piatto: "Filetto di manzo ai ferri", quantita: "150g" },
        { piatto: "Insalata mista", ricetta: "insalata_mista" },
        { piatto: "Pane integrale", quantita: "70g" },
        { piatto: "Mele", quantita: "180g" }
      ],
      cena: [
        { piatto: "Pizza margherita", quantita: "250g" },
        { piatto: "Ciliegie", quantita: "180g" },
        { piatto: "Insalata di indivia belga", quantita: "100g" }
      ]
    },
    olio: "5g"
  },
  {
    giorno: 10,
    pasti: {
      colazione: [
        { piatto: "Latte P.S. Macchiato", ricetta: "latte_macchiato" },
        { piatto: "Marmellata alla frutta", quantita: "30g" },
        { piatto: "Fette biscottate integrali", quantita: "24g" }
      ],
      pranzo: [
        { piatto: "Spaghetti bianchi alle olive", ricetta: "spaghetti_olive" },
        { piatto: "Ceci lessati", quantita: "100g" },
        { piatto: "Vino rosso", quantita: "120g" },
        { piatto: "Melone", quantita: "200g" }
      ],
      cena: [
        { piatto: "Ricotta vaccina", quantita: "100g" },
        { piatto: "Pane integrale", quantita: "80g" },
        { piatto: "Finocchi crudi", quantita: "150g" },
        { piatto: "Ciliegie", quantita: "180g" }
      ]
    },
    olio: "15g"
  }
];

const ricette = {
  latte_macchiato: {
    nome: "Latte P.S. Macchiato",
    ingredienti: [
      { nome: "Latte parz. scremato", quantita: "250g" },
      { nome: "Caffè", quantita: "50g" }
    ],
    preparazione: "Unire il caffè al latte caldo."
  },
  risotto_asparagi: {
    nome: "Risotto agli asparagi",
    ingredienti: [
      { nome: "Riso brillato", quantita: "110g" },
      { nome: "Asparagi di campo", quantita: "220g" },
      { nome: "Olio extravergine di oliva", quantita: "50g" },
      { nome: "Cipolle", quantita: "75g" },
      { nome: "Brodo vegetale" }
    ],
    preparazione: "Mettere in casseruola olio e cipolla tritata finemente, far imbiondire a pentola coperta per pochi minuti. Aggiungere la parte verde degli asparagi tagliati a pezzetti e far insaporire per 5 minuti. Versare il riso e farlo tostare. Unire il brodo poco alla volta e portare a cottura per 20 minuti circa."
  },
  tonno_griglia: {
    nome: "Tonno alla griglia",
    ingredienti: [
      { nome: "Tonno", quantita: "200g" },
      { nome: "Olio extravergine di oliva" }
    ],
    preparazione: "Cuocere il tonno alla griglia e condire con olio."
  },
  pasta_broccoli: {
    nome: "Pasta con i broccoli",
    ingredienti: [
      { nome: "Pasta alimentare", quantita: "120g" },
      { nome: "Broccolo a testa", quantita: "70g" },
      { nome: "Olio extravergine di oliva" },
      { nome: "Parmigiano" }
    ],
    preparazione: "Cuocere la pasta, saltare i broccoli con olio, unire e cospargere di parmigiano."
  },
  insalata_mista: {
    nome: "Insalata mista",
    ingredienti: [
      { nome: "Lattuga", quantita: "100g" },
      { nome: "Finocchi", quantita: "30g" },
      { nome: "Pomodori", quantita: "50g" },
      { nome: "Ravanelli", quantita: "10g" }
    ],
    preparazione: "Tagliare e mescolare tutti gli ingredienti."
  },
  tagliata_rucola: {
    nome: "Tagliata con rucola",
    ingredienti: [
      { nome: "Vitello magro", quantita: "170g" },
      { nome: "Rucola", quantita: "100g" },
      { nome: "Olio extravergine di oliva" }
    ],
    preparazione: "Su una griglia ben calda cuocere al sangue il vitello da entrambi i lati per alcuni minuti. A cottura terminata tagliarlo a pezzetti e disporlo su un piatto da portata e condirlo con olio di oliva. Cospargere poi la rucola."
  },
  fusilli_fave_piselli: {
    nome: "Fusilli con fave e piselli",
    ingredienti: [
      { nome: "Pasta alimentare", quantita: "100g" },
      { nome: "Piselli freschi", quantita: "70g" },
      { nome: "Fave fresche", quantita: "60g" },
      { nome: "Scarola", quantita: "50g" },
      { nome: "Pomodori San Marzano", quantita: "30g" },
      { nome: "Cipollotto", quantita: "20g" },
      { nome: "Peperoncino", quantita: "q.b." },
      { nome: "Parmigiano" },
      { nome: "Olio extravergine di oliva" }
    ],
    preparazione: "Affettare sottilmente il cipollotto, farlo dorare in un tegame con un goccio di olio, unire quindi i piselli e le fave e regolare di sale e peperoncino. Aggiungere un mestolo di acqua e lasciare cuocere per 10 minuti circa. Aggiungere la scarola tagliata a pezzetti, i pomodori pelati e sminuzzati e continuare la cottura per altri 10 minuti. Fare cuocere la pasta al dente e condirla con le verdure appena cotte e cospargere di parmigiano."
  },
  piselli_lessati: {
    nome: "Piselli lessati",
    ingredienti: [
      { nome: "Piselli freschi", quantita: "200g" },
      { nome: "Cipolle", quantita: "50g" }
    ],
    preparazione: "Lessare i piselli con le cipolle."
  },
  spaghetti_pomodoro_basilico: {
    nome: "Spaghetti pomodoro e basilico",
    ingredienti: [
      { nome: "Pasta alimentare", quantita: "120g" },
      { nome: "Pomodori pelati", quantita: "145g" },
      { nome: "Basilico in foglie", quantita: "q.b." },
      { nome: "Cipolle", quantita: "10g" },
      { nome: "Olio extravergine di oliva" },
      { nome: "Parmigiano" }
    ],
    preparazione: "Soffriggere la cipolla con olio, aggiungere i pomodori e il basilico. Cuocere la pasta e condire con il sugo e parmigiano."
  },
  insalata_verza_limone: {
    nome: "Insalata di verza con limone",
    ingredienti: [
      { nome: "Cavolo verza", quantita: "100g" },
      { nome: "Succo di limone", quantita: "5g" }
    ],
    preparazione: "Tagliare finemente la verza e condire con limone."
  },
  melanzane_grigliate: {
    nome: "Melanzane grigliate",
    ingredienti: [
      { nome: "Melanzane", quantita: "150g" },
      { nome: "Sale fino", quantita: "q.b." },
      { nome: "Aglio fresco", quantita: "10g" }
    ],
    preparazione: "Grigliare le melanzane e condire con aglio e sale."
  },
  riso_borlotti_trevigiana: {
    nome: "Riso con borlotti e trevigiana",
    ingredienti: [
      { nome: "Riso brillato", quantita: "80g" },
      { nome: "Fagioli borlotti freschi", quantita: "40g" },
      { nome: "Trevigiana", quantita: "80g" },
      { nome: "Cipolle", quantita: "15g" },
      { nome: "Brodo vegetale", quantita: "160g" },
      { nome: "Olio extravergine di oliva" },
      { nome: "Parmigiano" }
    ],
    preparazione: "Lavare, asciugare e tagliare a striscioline la trevigiana. Tritare finemente la cipolla e metterla in una casseruola antiaderente con i fagioli, un pizzico di sale, acqua a sufficienza e lasciare cuocere a fuoco basso. Fare asciugare l'acqua di cottura dei fagioli a fuoco vivace, poi unire il riso, l'insalata e portare a cottura, diluendo poco alla volta il brodo bollente. A cottura ultimata il risotto dovrà risultare piuttosto morbido. Incorporare il parmigiano e lasciare riposare per un paio di minuti prima di servire."
  },
  insalata_verdure: {
    nome: "Insalata di verdure",
    ingredienti: [
      { nome: "Radicchio rosso", quantita: "75g" },
      { nome: "Indivia belga", quantita: "45g" },
      { nome: "Scarola", quantita: "50g" }
    ],
    preparazione: "Mescolare tutte le verdure tagliate."
  },
  pasta_zucchine_zafferano: {
    nome: "Pasta zucchine e zafferano",
    ingredienti: [
      { nome: "Pasta alimentare", quantita: "120g" },
      { nome: "Zucchine verdi", quantita: "120g" },
      { nome: "Zafferano", quantita: "q.b." },
      { nome: "Olio extravergine di oliva" },
      { nome: "Parmigiano" }
    ],
    preparazione: "In una larga padella disporre un goccio di olio e disporre le zucchine tagliate a listelle. Lasciarle cuocere aggiungendo poco sale e acqua all'occorrenza. Pochi minuti prima della fine cottura unire lo zafferano sciolto in acqua quindi mescolare il tutto. Lessare la pasta al dente e condirle con il sugo pronto e parmigiano."
  },
  salmone_ferri_limone: {
    nome: "Salmone ai ferri e limone",
    ingredienti: [
      { nome: "Salmone", quantita: "200g" },
      { nome: "Succo di limone", quantita: "10g" }
    ],
    preparazione: "Cuocere il salmone ai ferri e condire con limone."
  },
  trenette_pesto: {
    nome: "Trenette al pesto",
    ingredienti: [
      { nome: "Trenette", quantita: "120g" },
      { nome: "Pesto alla genovese", quantita: "35g" }
    ],
    preparazione: "Cuocere le trenette e condire con il pesto."
  },
  insalata_asparagi: {
    nome: "Insalata di asparagi",
    ingredienti: [
      { nome: "Asparagi di campo", quantita: "150g" },
      { nome: "Succo di limone", quantita: "10g" }
    ],
    preparazione: "Lessare gli asparagi e condire con limone."
  },
  petto_pollo_limone: {
    nome: "Petto di pollo al limone",
    ingredienti: [
      { nome: "Petto di pollo", quantita: "200g" },
      { nome: "Prezzemolo", quantita: "q.b." },
      { nome: "Succo di limone", quantita: "10g" }
    ],
    preparazione: "Cuocere il petto di pollo e condire con prezzemolo e limone."
  },
  insalata_radicchio_rosso: {
    nome: "Insalata di radicchio rosso",
    ingredienti: [
      { nome: "Radicchio rosso", quantita: "100g" },
      { nome: "Succo di limone", quantita: "5g" }
    ],
    preparazione: "Tagliare il radicchio e condire con limone."
  },
  riso_verza: {
    nome: "Riso con la verza",
    ingredienti: [
      { nome: "Riso brillato", quantita: "120g" },
      { nome: "Carote", quantita: "25g" },
      { nome: "Sedano", quantita: "35g" },
      { nome: "Cavolo verza", quantita: "50g" },
      { nome: "Pomodori", quantita: "35g" },
      { nome: "Basilico in foglie", quantita: "q.b." },
      { nome: "Olio extravergine di oliva" }
    ],
    preparazione: "Stufare un battuto tritato finemente formato da una carota e una costa di sedano verde. Tagliare la verza, unirla al battuto, salare, mescolare con il cucchiaio di legno lasciando a fuoco basso con il coperchio per 10 minuti. Tagliare a cubetti mezzo il pomodoro, unirlo alla verza insieme a qualche foglia di basilico. Aggiungere tanta acqua quanta servirà per lessare il riso, calcolando che, a fine cottura, rimanga morbido senza essere scolato. Bollire fino a che la verza comincerà a spappolarsi. Buttare il riso, aggiustare di sale."
  },
  platessa_pizzaiola: {
    nome: "Platessa alla pizzaiola",
    ingredienti: [
      { nome: "Platessa", quantita: "200g" },
      { nome: "Pomodori pelati", quantita: "100g" },
      { nome: "Prezzemolo", quantita: "q.b." },
      { nome: "Olio extravergine di oliva" }
    ],
    preparazione: "Pulire e lavare la platessa, dopodiché disporla in una casseruola, unire i pomodori pelati, prezzemolo e un goccio di olio di oliva. Lasciare cuocere per circa 15 minuti aggiungendo acqua all'occorrenza."
  },
  spaghetti_olive: {
    nome: "Spaghetti bianchi alle olive",
    ingredienti: [
      { nome: "Pasta alimentare", quantita: "120g" },
      { nome: "Olive nere", quantita: "10g" },
      { nome: "Olive verdi", quantita: "25g" },
      { nome: "Peperoncino", quantita: "q.b." },
      { nome: "Olio extravergine di oliva" }
    ],
    preparazione: "In una casseruola mettere un goccio di olio con le olive snocciolate e tritate finemente. Lasciare insaporire per pochissimi minuti quindi unire un pizzico di peperoncino. Terminare la cottura quindi condire la pasta cotta al dente."
  }
};

export { dieta, ricette };

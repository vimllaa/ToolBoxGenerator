let btnRandom = document.getElementById("randombutton");
let result = document.querySelector("h2");
let filterBtn = document.getElementById("filterbutton");

let filters = [];

let sunnyClicked = false;
let rainyClicked = false;
let snowyClicked = false;

let forfreeClicked = false;
let $Clicked = false;
let $$Clicked = false;

let cityClicked = false;
let outsidecityClicked = false;

let firstdateClicked = false;

let activities = [
  {
    name: "see a jazz concert at Fasching",
    tags: ["city", "firstdate", "$", "snowy", "rainy"],
  },
  {
    name: "go climb together at Klättercentret",
    tags: ["city", "firstdate", "$", "snowy", "rainy"],
  },
  {
    name: "go go karting together! Preferably at Gokart Stockholm",
    tags: ["outsidecity", "$", "snowy", "rainy"],
  },
  {
    name: "take a walk around Djurgården",
    tags: ["city", "firstdate", "forfree", "sunny"],
  },
  {
    name: "go second hand shopping in Södermalm",
    tags: ["city", "$", "sunny", "rainy", "snowy"],
  },
  {
    name: "visit Moderna Museet",
    tags: ["city", "firstdate", "forfree", "snowy", "rainy"],
  },
  {
    name: "visit Naturhistoriska Museet",
    tags: ["outsidecity", "firstdate", "forfree", "snowy", "rainy"],
  },
  {
    name: "visit Fotografiska",
    tags: ["city", "firstdate", "$", "snowy", "rainy"],
  },
  {
    name: "visit Medelhavsmuseet",
    tags: ["city", "firstdate", "forfree", "snowy", "rainy"],
  },
  {
    name: "make home-made sushi",
    tags: ["city", "outsidecity", "$", "sunny", "rainy", "snowy"],
  },
  {
    name: "go eat at the three star Michelin restaurant Frantzén",
    tags: ["city", "firstdate", "$$", "snowy", "rainy"],
  },
  {
    name: "go on a picknick in Hagaparken",
    tags: ["outsidecity", "firstdate", "forfree", "sunny"],
  },
  {
    name: "visit Stockholm's best escape room 'Escape Stories'",
    tags: ["city", "firstdate", "$", "snowy", "rainy"],
  },
  {
    name: "play disc golf in Tantolunden",
    tags: ["city", "firstdate", "forfree", "sunny", "snowy"],
  },
  {
    name: "drink cheap beer at Wollmars by Mariatorget",
    tags: ["city", "firstdate", "$", "sunny", "rainy", "snowy"],
  },
  {
    name: "go to Moyagi and have a kareoke night",
    tags: ["city", "$", "snowy", "rainy"],
  },
  {
    name: "visit Judarskogen nature reserve",
    tags: ["outsidecity", "firstdate", "forfree", "sunny"],
  },
  {
    name: "learn how to do ceramics at Drejstudion",
    tags: ["city", "$$", "sunny", "rainy", "snowy"],
  },
  {
    name: "visit the fleamarket in Södermalm (every Saturday!)",
    tags: ["city", "firstdate", "forfree", "sunny"],
  },
  {
    name: "go to Stockholm VR-center",
    tags: ["city", "firstdate", "$", "snowy", "rainy"],
  },
  {
    name: "play boule at Stockholm Boulebar",
    tags: ["city", "firstdate", "$", "sunny", "snowy", "rainy"],
  },
  {
    name: "see a movie and have dinner at Capitol",
    tags: ["city", "$", "snowy", "rainy"],
  },
  { name: "rent a boat", tags: ["outsidecity", "$$", "sunny"] },
  {
    name: "experience Stockholm by kayak! Rent one at Långholmen Kajak",
    tags: ["city", "firstdate", "$", "sunny"],
  },
  {
    name: "arrange a movie marathon",
    tags: ["city", "outsidecity", "forfree", "snowy", "rainy"],
  },
  {
    name: "go bowl at Birka Bowling & Dart",
    tags: ["city", "firstdate", "$", "snowy", "rainy"],
  },
  {
    name: "rent bikes and bike around Stockholm",
    tags: ["city", "firstdate", "$", "sunny"],
  },
  {
    name: "eat brunch at Sthlm Brunch Club",
    tags: ["city", "firstdate", "$", "sunny", "rainy", "snowy"],
  },
  { name: "visit Gröna Lund", tags: ["city", "$", "sunny", "snowy"] },
  {
    name: "arrange an at-home-cinema",
    tags: ["city", "outsidecity", "forfree", "snowy", "rainy"],
  },
  {
    name: "try out each other's hobbies",
    tags: ["city", "outsidecity", "forfree", "$", "sunny", "snowy", "rainy"],
  },
  { name: "explore Vaxholm", tags: ["outsidecity", "forfree", "sunny"] },
  {
    name: "pick vegetables and flowers at Rosendals Trädgård",
    tags: ["outsidecity", "firstdate", "$", "sunny"],
  },
  {
    name: "have picknick at Skinnarviksberget",
    tags: ["city", "firstdate", "forfree", "sunny"],
  },
  {
    name: "eat breakfast at A la Lo café & cantine",
    tags: ["city", "$", "sunny", "snowy", "rainy"],
  },
  {
    name: "have pancake breakfast together at home",
    tags: ["city", "outsidecity", "forfree", "sunny", "rainy", "snowy"],
  },
  {
    name: "learn how to do poached eggs and eat Eggs Benedict",
    tags: ["city", "outsidecity", "$", "sunny", "snowy", "rainy"],
  },
  {
    name: "go to a fair at Stockholmsmässan",
    tags: ["outsidecity", "firstdate", "forfree", "$", "snowy", "rainy"],
  },
  {
    name: "bring a deck of cards and drink beer at Hirschenkeller",
    tags: ["city", "firstdate", "$", "snowy", "rainy"],
  },
  {
    name: "go horseback riding at Sigtuna Islandshästar",
    tags: ["outsidecity", "firstdate", "$$", "sunny", "snowy"],
  },
  {
    name: "cook lebanese food together at home",
    tags: ["city", "outsidecity", "forfree", "sunny", "snowy", "rainy"],
  },
  {
    name: "drink äppelmust at Rosenhill",
    tags: ["outsidecity", "firstdate", "$", "sunny"],
  },
  {
    name: "go ice skating in Kungsträdgården",
    tags: ["city", "firstdate", "forfree", "snowy"],
  },
  {
    name: "go ice skating in Östermalms idrottsplats ishall",
    tags: ["city", "firstdate", "forfree", "snowy"],
  },
  {
    name: "cook indian food at home",
    tags: ["city", "outsidecity", "$", "sunny", "snowy", "rainy"],
  },
  {
    name: "cook classic swedish 'husmanskost' at home",
    tags: ["city", "outsidecity", "$", "sunny", "rainy", "snowy"],
  },
  {
    name: "play fake museum guide at Vasamuseet",
    tags: ["city", "$", "snowy", "rainy"],
  },
  {
    name: "find a cool science experiment on YouTube and try it out",
    tags: ["city", "outsidecity", "forfree", "sunny", "snowy", "rainy"],
  },
  {
    name: "pick mushroom in Tegelhagens nature preserve",
    tags: ["outsidecity", "forfree", "sunny"],
  },
  {
    name: "paint along with Bob Ross (search for it on YouTube!)",
    tags: ["city", "outsidecity", "forfree", "sunny", "snowy", "rainy"],
  },
  {
    name: "go to Hammarbybacken to ski",
    tags: ["outsidecity", "firstdate", "$", "snowy"],
  },
  {
    name: "go snow racing in Hammarbybacken",
    tags: ["outsidecity", "firstdate", "forfree", "snowy"],
  },
  {
    name: "rent cross country skis and go skiing in Ursvik",
    tags: ["outsidecity", "firstdate", "$", "snowy"],
  },
  {
    name: "go sauna bathing at Tanto Bastu",
    tags: ["city", "$", "sunny", "rainy", "snowy"],
  },
  {
    name: "go on a hot air balloon date, book at Ballongflyg i Stockholm AB",
    tags: ["city", "$$", "sunny"],
  },
  {
    name: "try cheese together in Östermalms Saluhall",
    tags: ["city", "firstdate", "$", "snowy", "rainy"],
  },
  {
    name: "try cheese together at Taysta in Gamla Stan",
    tags: ["city", "firstdate", "$", "snowy", "rainy"],
  },
  {
    name: "go see a theatre at Dramaten",
    tags: ["city", "$", "snowy", "rainy"],
  },
  {
    name: "go see an opera at Kungliga Operan",
    tags: ["city", "$$", "snowy", "rainy"],
  },
  {
    name: "have a snowball fight",
    tags: ["city", "outsidecity", "forfree", "snowy"],
  },
  {
    name: "build a snow fort together",
    tags: ["city", "outsidecity", "forfree", "snowy"],
  },
  {
    name: "play paintball at Spela Paintball in Farsta Strand",
    tags: ["outsidecity", "$", "sunny"],
  },
  {
    name: "play pool at Ugglan",
    tags: ["city", "$", "rainy", "snowy", "firstdate"],
  },
  {
    name: "book a food tour at Food Tours Stockholm",
    tags: ["city", "$", "sunny", "rainy", "snowy"],
  },
  {
    name: "try a bunch of ice cream flavours at McDonalds",
    tags: ["city", "outsidecity", "firstdate", "$", "sunny", "rainy", "snowy"],
  },
  {
    name: "go on a tacky pub crawl at Sveavägen",
    tags: ["city", "firstdate", "$", "sunny", "rainy", "snowy"],
  },
  {
    name: "go zip-lining in Accropark in Tullinge",
    tags: ["outsidecity", "$", "sunny"],
  },
  {
    name: "play shuffleboard at Biljardpalatset",
    tags: ["city", "firstdate", "$", "rainy", "snowy"],
  },
  {
    name: "play minigolf together in Kristineberg",
    tags: ["city", "firstdate", "$", "sunny"],
  },
  {
    name: "take a walk in Hagaparken",
    tags: ["outsidecity", "firstdate", "forfree", "sunny"],
  },
  {
    name: "shoot clay pigeons at Bromma Jaktskytteklubb",
    tags: ["outsidecity", "firstdate", "$", "sunny"],
  },
  {
    name: "try out fencing at Stockholm Fencing in Solna",
    tags: ["outsidecity", "$", "rainy", "snowy"],
  },
  {
    name: "watch the sunset from Skinnarviksberget",
    tags: ["city", "firstdate", "forfree", "sunny"],
  },
  {
    name: "go fishing together somewhere by Mälaren",
    tags: ["city", "outsidecity", "firstdate", "forfree", "sunny"],
  },
  {
    name: "go to a pub quiz at Southside Pub",
    tags: ["city", "firstdate", "$", "rainy", "snowy"],
  },
  { name: "visit Skansen", tags: ["city", "firstdate", "$", "sunny", "snowy"] },
  {
    name: "go swimming in Brunnsviken",
    tags: ["outsidecity", "firstdate", "forfree", "sunny"],
  },
  {
    name: "book skydiving with Fallskarmshoppning.se",
    tags: ["outsidecity", "$$", "sunny"],
  },
  {
    name: "go camping in the closest forest",
    tags: ["outsidecity", "forfree", "sunny"],
  },
  {
    name:
      "find an electrical scooter and discover a part of Stockholm you've never been to",
    tags: ["city", "firstdate", "$", "sunny"],
  },
  {
    name: "be a tourist in Gamla Stan",
    tags: ["city", "firstdate", "forfree", "sunny", "snowy", "rainy"],
  },
  {
    name: "go barbecue by Fredhällsbadet",
    tags: ["city", "firstdate", "forfree", "sunny"],
  },
  {
    name: "attend an outdoor cinema event in Rålambshovsparken",
    tags: ["city", "firstdate", "forfree", "sunny"],
  },
  {
    name: "watch Stockholm with a view from Mariaberget",
    tags: ["city", "firstdate", "forfree", "sunny"],
  },
  {
    name: "go for a drink at TAK rooftop bar",
    tags: ["city", "firstdate", "$", "sunny"],
  },
  {
    name: "bake what Swedes call 'kladdkaka'",
    tags: ["city", "outsidecity", "$", "sunny", "rainy", "snowy"],
  },
  {
    name: "take a walk at Skeppsholmen",
    tags: ["city", "firstdate", "forfree", "sunny"],
  },
  {
    name: "go rollerskating at Rollers & Bowlers in Haninge",
    tags: ["outsidecity", "$", "rainy", "snowy"],
  },
  {
    name: "have a board game night at home",
    tags: ["city", "outsidecity", "forfree", "rainy", "snowy"],
  },
  {
    name: "go on a double date",
    tags: [ "city", "outsidecity", "for free", "$", "$$", "sunny", "rainy", "snowy"],
  },
  {
    name: "go on a beer tasting at Bierhaus in Vasastan",
    tags: ["city", "firstdate", "$", "rainy", "snowy"],
  },
  {
    name: "find a Christmas market and go there",
    tags: ["city", "outsidecity", "firstdate", "forfree", "snowy"],
  },
  {
    name: "bake cinnamon buns together",
    tags: ["city", "outsidecity", "forfree", "$", "snowy", "sunny", "rainy"],
  },
  {
    name: "build a gingerbread house",
    tags: ["city", "outsidecity", "$", "snowy"],
  },
  {
    name: "take the ferry to Djursholm and go on upper class safari",
    tags: ["outsidecity", "forfree", "$", "sunny"],
  },
  {
    name: "have a Disney movie marathon",
    tags: ["city", "outsidecity", "forfree", "rainy", "snowy"],
  },
  {
    name: "play tennis in Hagaparken",
    tags: ["outsidecity", "firstdate", "$", "sunny"],
  },
  {
    name: "take a salsa class at Studio Salsa",
    tags: ["city", "$", "rainy", "snowy"],
  },
  {
    name: "go on staycation and book a night at Hotel Miss Clara",
    tags: ["city", "$$$", "rainy", "snowy", "sunny"],
  },
  {
    name: "pretend to be Hammarby fans and go to their soccer game",
    tags: ["outsidecity", "$", "sunny"],
  },
  {
    name: "pretend to be AIK fans and go to their soccer game",
    tags: ["outsidecity", "$$", "sunny"],
  },
  {
    name: "do a 1 000 piece puzzle and drink tea",
    tags: ["city", "outsidecity", "forfree", "rainy", "snowy"],
  },
  {
    name: "order Foodora for each other",
    tags: ["city", "outsidecity", "$", "$$", "sunny", "snowy", "rainy"],
  },
  {
    name: "fall in love by answering the questions at 36questionsinlove.com",
    tags: ["city", "outsidecity", "firstdate", "forfree", "sunny", "rainy", "snowy"],
  },
  {
    name: "make a DIY project",
    tags: ["city", "outsidecity", "free", "sunny", "snowy", "rainy"],
  },
  {
    name:
      "find a tourist attraction that neither one of you have tried before and go there",
    tags: [
      "city", "outsidecity", "firstdate", "forfree", "$", "$$","sunny","rainy","snowy"],
  },
  {
    name: "have an artsy photoshoot",
    tags: ["city", "outsidecity", "forfree", "sunny", "rainy", "snowy"],
  },
  {
    name: "start a book club for two and start reading",
    tags: ["city", "outsidecity", "forfree", "sunny", "rainy", "snowy"],
  },
  {
    name: "watch a nostalgic movie",
    tags: ["city", "outsidecity", "forfree", "snowy", "rainy"],
  },
  {
    name:
      "meet each other in a bar and assume new identities and try to pick each other up",
    tags: ["city", "$", "sunny", "rainy", "snowy"],
  },
  {
    name: "go on a roadtrip to Mariefred and visit Gripsholms slott",
    tags: ["outsidecity", "$", "sunny", "rainy", "snowy"],
  },
  {
    name: "take a walk along Strandvägen",
    tags: ["city", "firstdate", "forfree", "sunny", "snowy"],
  },
  {
    name: "take the train to Uppsala and be tourists for a day",
    tags: ["outsidecity", "firstdate", "$", "sunny"],
  },
  {
    name: "watch the sunrise from Långholmen",
    tags: ["city", "firstdate", "forfree", "sunny"],
  },
  {
    name: "have a Zoom-date",
    tags: ["city", "outsidecity", "forfree", "sunny", "rainy", "snowy"],
  },
  {
    name: "carve a pumpkin",
    tags: ["city", "outsidecity", "forfree", "rainy"],
  },
  {
    name: "rent a tandem bike",
    tags: ["city", "outsidecity", "firstdate", "$", "sunny"],
  },
  {
    name: "visit Fjärilshuset",
    tags: ["outsidecity", "firstdate", "$", "sunny", "rainy", "snowy"],
  },
  {
    name: "visit Bergianska Trädgården",
    tags: ["outsidecity", "firstdate", "$", "sunny"],
  },
  {
    name: "go padel boarding",
    tags: ["city", "outsidecity", "firstdate", "$", "sunny"],
  },
  {
    name: "take a boxing class at Stockholm Kickboxning",
    tags: ["city", "$", "sunny", "rainy", "snowy"],
  },
  {
    name: "go for pedicure together",
    tags: ["city", "$", "sunny", "rainy", "snowy"],
  },
  {
    name: "go swimming by Reimersholme",
    tags: ["city", "firstdate", "forfree", "sunny"],
  },
  {
    name: "go for a work lunch at AI Ramen",
    tags: ["city", "firstdate", "$", "sunny", "rainy", "snowy"],
  },
  {
    name: "eat hotel breakfast at Grand Hotel",
    tags: ["city", "$", "firstdate", "sunny", "snowy", "rainy"],
  },
  {
    name: "play beach volleyball at The Beach in Södertälje",
    tags: ["outsidecity", "$", "rainy", "snowy"],
  },
  {
    name: "have a video game night",
    tags: ["city", "outsidecity", "forfree", "rainy", "snowy"],
  },
  {
    name: "pick berries and make a pie",
    tags: ["city", "outsidecity", "firstdate", "forfree", "sunny"],
  },
  {
    name: "go to the ballet at Kungliga Operan",
    tags: ["city", "$", "rainy", "snowy"],
  },
  {
    name: "make homemade pizza together",
    tags: ["city", "outsidecity", "firstdate", "forfree", "$", "sunny", "rainy", "snowy"],
  },
  {
    name: "make a bonfire and barbecue marshmallows",
    tags: ["city", "outsidecity", "firstdate", "for free", "sunny", "snowy"],
  },
  {
    name: "go for a night time walk",
    tags: ["city", "outsidecity", "forfree", "sunny", "snowy", "rainy"],
  },
  {
    name: "make decorations for a holiday",
    tags: ["city", "outsidecity", "forfree", "$", "rainy", "sunny", "snowy"],
  },
  {
    name: "watch a Netflix documentary together",
    tags: ["city", "outsidecity", "forfree", "rainy", "snowy"],
  },
  {
    name: "eat Sweden's best sandwich at Scandwich in Midsommarkransen",
    tags: ["outsidecity", "firstdate", "$", "sunny", "rainy", "snowy"],
  },
  {
    name: "pretend we're in Thailand at ThaiBoat",
    tags: ["city", "firstdate", "$", "sunny"],
  },
  {
    name: "pretend we're in France at Mister French",
    tags: ["city", "firstdate", "$$", "sunny", "rainy", "snowy"],
  },
  {
    name: "pick up some falafel at Bulgarian Falafel",
    tags: ["city", "firstdate", "$", "sunny", "rainy", "snowy"],
  },
  {
    name: "pretend we're in Italy at Eataly",
    tags: ["city", "firstdate", "$", "sunny", "rainy", "snowy"],
  },
  {
    name: "go fine dining at AG",
    tags: ["city", "firstdate", "$$", "sunny", "rainy", "snowy"],
  },
  {
    name: "go to the ocean without going to the ocean by eating at Den gamle & havet",
    tags: ["city", "firstdate", "$$", "sunny", "snowy", "rainy"],
  },
  {
    name: "go dine at YUC. Mexican food por favor!",
    tags: ["city", "firstdate", "$", "sunny", "rainy", "snowy"],
  },
  {
    name: "go bananas at Bistro Bananas!",
    tags: ["city", "firstdate", "$", "sunny", "rainy", "snowy"],
  },
  {
    name: "grab some fine pizza at Leoparden",
    tags: ["city", "firstdate", "$", "sunny", "rainy", "snowy"],
  },
  {
    name: "go for indian food at Holy Cow",
    tags: ["city", "firstdate", "$", "sunny", "rainy", "snowy"],
  },
  {
    name: "go eat some Asian fusion at Mooncake, Kungsholmen",
    tags: ["city", "firstdate", "$", "sunny", "rainy", "snowy"],
  },
  {
    name: "drink really nice wine and eat really nice food at Vinverket",
    tags: ["city", "firstdate", "$$", "sunny", "snowy", "rainy"],
  },
  {
    name: "eat fish and seafood at Främmat",
    tags: ["city", "firstdate", "$$", "sunny", "rainy", "snowy"],
  },
  {
    name: "try out new beer at Katarina Ölcafé",
    tags: ["city", "firstdate", "$", "sunny", "rainy", "snowy"],
  },
  {
    name: "have some Portuguese wine at Cork Vinbar",
    tags: ["city", "firstdate", "$", "sunny", "rainy", "snowy"],
  },
  {
    name: "go for a cozy night out at Omaka",
    tags: ["city", "firstdate", "$", "sunny", "rainy", "snowy"],
  },
  {
    name: "have beer at Stigbergets fot",
    tags: ["city", "firstdate", "$", "sunny", "rainy", "snowy"],
  },

  { name: "eat ice cream at Aryam", 
    tags: ["city", "firstdate", "$", "sunny"] },

  {
    name: "choose ice cream flavors for each other at Mjuk Mjuk",
    tags: ["city", "firstdate", "$", "sunny"],
  },
  {
    name: "go for fika at Lillebrors Bageri",
    tags: ["city", "firstdate", "$", "sunny", "rainy", "snowy"],
  },
  {
    name:
      "find out whether you're in Sweden or Italy by eating ice cream at Gelato Scarfo",
    tags: ["city", "firstdate", "$", "sunny"],
  },
  {
    name: "taste each others ice creams at Kennys Gelato",
    tags: ["outsidecity", "firstdate", "$", "sunny"],
  },
  {
    name: "see a stand-up comedy show at Scalateatern",
    tags: ["city", "firstdate", "$", "rainy", "snowy"],
  },
  {
    name: "paint a picture together",
    tags: ["city", "outsidecity", "forfree", "sunny", "rainy", "snowy"],
  },

  {
    name: "have a luxury staycation at Grand Hotel", 
    tags: ["city", "$$", "sunny", "snowy", "rainy"],
  },

  {
     name: "travel back in time and dine as a real viking at Aifur Krog & Bar",
     tags: ["city", "firstdate", "$$", "sunny", "snowy", "rainy"],
  },
    
  {
     name: "be a nerd and visit Stockholms spelmuseum",
     tags: ["city", "firstdate", "$", "sunny", "snowy", "rainy"],
  },
    
  {
      name: "fly corona safe and sleep in a plane at Hotel Jumbo Stay",
      tags: ["outsidecity", "$$", "sunny", "snowy", "rainy"],
  },
    
  {
      name: "eat the Nobel banquet menu at the restaurant Stadshuskällaren",
      tags: ["city", "firstdate", "$$", "sunny", "snowy", "rainy"],
  },
    
  {
      name: "play arcade games at Hey STHLM",
      tags: ["city", "firstdate", "$", "sunny", "snowy", "rainy"],
  },
      
  {
      name: "go and look at the stars in Sweden's largest optical telescope AlbaNova Telescope",
      tags: ["outsidecity", "firstdate", "$", "sunny", "snowy", "rainy"],
  },
    
  {
      name: "go to ICEBAR. Winter is coming…",
      tags: ["city", "firstdate", "$", "sunny", "snowy", "rainy"],
  },
    
  {
      name: "go for a swim at Eriksdalsbadet",
      tags: ["city", "firstdate", "$", "sunny", "snowy", "rainy"],
  },
    
  {
      name: "have brunch at Greasy Spoon",
      tags: ["city", "firstdate", "$", "sunny", "snowy", "rainy"],
  },
    
  {
      name: "have a picknick with a view in Ivar Los Park",
      tags: ["city", "firstdate", "$", "sunny"],
  }, 
    
  {
      name: "dance all night at the rave club Under Bron",
      tags: ["city", "firstdate", "$", "sunny", "snowy", "rainy"],
  },
    
  {
      name: "go and eat the world’s tastiest meatballs at Meatballs for the People",
      tags: ["city", "firstdate", "$", "sunny", "snowy", "rainy"],
  }, 
    
  {
      name: "visit Tekniska Museet",
      tags: ["city", "firstdate", "$", "sunny", "snowy", "rainy"],
  },
    
  {
      name: "visit Hotel Hellsten’s jazz nights",
      tags: ["city", "firstdate", "$", "sunny", "snowy", "rainy"],
  },
    
  {
      name: "go on a ghost walk around Stockholm. Book one at: http://www.stockholmghostwalk.com",
      tags: ["city", "firstdate", "$", "sunny"],
  },
     
  {
      name: "book a helicopter tour around Stockholm",
      tags: ["city", "firstdate", "$$", "sunny", "snowy", "rainy"],
  },
    
  {
      name: "go to Solvalla and bet on horses",
      tags: ["outsidecity", "firstdate", "$$", "sunny", "snowy", "rainy"],
  },
    
  {
      name: "have picnic in Rosendals Trädgård",
      tags: ["city", "firstdate", "$", "sunny"],
  },
    
  {
      name: "have a spa day at Yasuragi",
      tags: ["outsidecity", "firstdate", "$$", "sunny", "snowy", "rainy"],
  },
    
  {
      name: "go for a swim and relax at Centralbadet",
      tags: ["city", "firstdate", "$$", "sunny", "snowy", "rainy"],
  },

  {
      name: "cook a new dish you never tried before",
      tags: ["city", "firstdate", "$", "sunny", "snowy", "rainy", "outsidecity"],
  },
    
  {
      name: "go for a couples massage",
      tags: ["city", "firstdate", "$$", "sunny", "snowy", "rainy", "outsidecity"],
  },
    
  {
      name: "have a three course dinner in three different restaurants",
      tags: ["city", "firstdate", "$", "$$", "outsidecity", "sunny", "snowy", "rainy"],
  },
    
  {
      name: "bake a cake together",
      tags: ["city", "firstdate", "$", "sunny", "snowy", "rainy", "outsidecity"],
  },
    
  {
      name: "cuddle up and watch a horror movie together",
      tags: ["city", "firstdate", "forfree", "$", "sunny", "snowy", "rainy", "outsidecity"],
  },
    
  {
      name: "do a couple’s yoga session in a yoga studio (if you're on a budget use YouTube!)",
      tags: ["city", "firstdate", "forfree", "$", "sunny", "snowy", "rainy", "outsidecity"],
  },
    
  {
      name: "have a water gun/balloon fight",
      tags: ["city", "forfree", "$", "sunny", "outsidecity"],
  },
    
  {
      name: "rent a convertible sports car or a luxury car and cruise around all day",
      tags: ["city", "firstdate", "$$", "sunny", "rainy", "snowy", "outsidecity"],
  },
    
  {
      name: "have a fancy fast food feast, dress in your finest and use your best cutlery!",
      tags: ["city", "firstdate", "$", "sunny", "rainy", "snowy", "outsidecity"],
  },
    
  {
      name: "buy a bunch of different seeds and plant them in random places",
      tags: ["city", "$", "forfree", "sunny", "rainy", "outsidecity"],
  },

  {
      name: "buy Lego kits and put them together, spice it up with a bottle of red wine",
      tags: ["city", "$", "sunny", "rainy", "snowy", "outsidecity", "firstdate"],
  },
    
  {
      name: "jump around at the trampoline park JumpYard",
      tags: ["$", "sunny", "rainy", "snowy", "outsidecity", "firstdate"],
  },
    
  {
      name: "make personalized scavenger hunts for each other" ,
      tags: ["forfree", "sunny", "rainy", "snowy", "outsidecity"],
  },
    
  {
      name: "play a childhood game such as Twister or Monopoly" ,
      tags: ["$", "forfree", "firstdate", "sunny", "rainy", "snowy", "outsidecity"],
  },
    
  {
      name: "plan your dream vacation together" ,
      tags: ["$", "forfree", "$$", "sunny", "rainy", "snowy", "outsidecity"],
  },
    
  {
      name: "build a fort out of stuff you have at home" ,
      tags: ["forfree", "sunny", "rainy", "snowy", "outsidecity", "firstdate"],
  },
    
  {
      name: "plan a party together" ,
      tags: ["forfree", "$", "sunny", "rainy", "snowy", "outsidecity"],
  },

];

const sunnyActivities = activities.filter((x) => x.tags.includes("sunny"));
const rainyActivities = activities.filter((x) => x.tags.includes("rainy"));
const snowyActivites = activities.filter((x) => x.tags.includes("snowy"));
const activiesInTheCity = activities.filter((x) => x.tags.includes("snowy"));
const firstDateActivites = activities.filter((x) =>
  x.tags.includes("firstdate")
);

function getRandomNumber(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;

  return result;
}

btnRandom.addEventListener("click", () => {
  let availableActivities = activities;

  filters.forEach((filter) => {
    availableActivities = availableActivities.filter((x) => x.tags.includes(filter));
  });

  if (availableActivities.length > 0) {
    let index = getRandomNumber(0, availableActivities.length - 1);
    result.innerText = availableActivities[index].name;

    console.log("ACTIVITY", availableActivities[index].name);
  }
});

filterBtn.addEventListener("click", () => {
  const filterPopUp = document.querySelector(".modal-content");
  filterPopUp.style.display = "block";
  document.getElementById("everythingbutmodal").style.opacity = "0.1"; 
  document.getElementById("modal-content").style.opacity = "1";
});

document.getElementById("savebutton").addEventListener("click", (e) => {
  e.preventDefault()
  document.querySelector(".modal-content").style.display = "none";
  document.getElementById("everythingbutmodal").style.opacity = "1";
});

let rainy = document.getElementById("rainy");
rainy.addEventListener("click", function () {
  if (!rainyClicked) {
    filters.push("rainy");
  } else {
    filters = filters.filter((x) => x != "rainy");
  }

  rainyClicked = !rainyClicked;
})

let sunny = document.getElementById('sunny');
sunny.addEventListener('click', function (){
      if (!sunnyClicked) {
          filters.push('sunny');
    } else {
        filters = filters.filter((x) => x != 'sunny');
    }

    sunnyClicked = !sunnyClicked;
})
    
let snowy = document.getElementById("snowy");
    snowy.addEventListener("click", function () {
      if (!rainyClicked) {
        filters.push("snowy");
      } else {
        filters = filters.filter((x) => x != "snowy");
      }
    
      snowyClicked = !snowyClicked;
})

let $ = document.getElementById("$");
    $.addEventListener("click", function () {
    if (!$Clicked) {
        filters.push("$");
    } else {
        filters = filters.filter((x) => x != "$");
    }
      
    $Clicked = !$Clicked;
})

let $$ = document.getElementById("$$");
    $$.addEventListener("click", function () {
    if (!$$Clicked) {
        filters.push("$$");
    } else {
        filters = filters.filter((x) => x != "$$");
    }
      
    $$Clicked = !$$Clicked;
})

let forfree = document.getElementById("forfree");
    forfree.addEventListener("click", function () {
    if (!forfreeClicked) {
        filters.push("forfree");
    } else {
        filters = filters.filter((x) => x != "forfree");
    }
      
    forfreeClicked = !forfreeClicked;
})

let city = document.getElementById("city");
    city.addEventListener("click", function () {
    if (!cityClicked) {
        filters.push("city");
    } else {
        filters = filters.filter((x) => x != "city");
    }
      
    cityClicked = !cityClicked;
})


  outsidecity.addEventListener("click", function () {
    if (!outsidecityClicked) {
        filters.push("outsidecity");
    } else {
        filters = filters.filter((x) => x != "outsidecity");
    }
      
    outsidecityClicked = !outsidecityClicked;
  })

  let firstdate = document.getElementById("firstdate");
  firstdate.addEventListener("click", function () {
    if (!firstdateClicked) {
        filters.push("firstdate");
    } else {
        filters = filters.filter((x) => x != "firstdate");
    }
      
    firstdateClicked = !firstdateClicked;
  });



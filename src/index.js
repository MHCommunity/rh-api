const environments = [
	{
	  "id": "meadow",
	  "name": "Meadow",
	  "article": "the Meadow",
	  "image": "https://www.mousehuntgame.com/images/environments/a441eb078698da69ef2765983f4b5912.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/6ef3ffe2f90a79250807b46105e77b68.jpg",
	  "region": "gnawnia",
	  "order": 10,
	  "title": "novice"
	},
	{
	  "id": "town_of_gnawnia",
	  "name": "Town of Gnawnia",
	  "article": "the Town of Gnawnia",
	  "image": "https://www.mousehuntgame.com/images/environments/231c9b4d583f98c365efcbbd50fddb76_v2.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/4f61abe7975e99a3c780c5fd895dc07c_v2.jpg",
	  "region": "gnawnia",
	  "order": 11,
	  "title": "recruit"
	},
	{
	  "id": "windmill",
	  "name": "Windmill",
	  "article": "the Windmill",
	  "image": "https://www.mousehuntgame.com/images/environments/15623ee3d1cecd303d677e35507b6bb1.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/18298644393b7a4d062bed498f03aeca.jpg",
	  "region": "gnawnia",
	  "order": 16,
	  "title": "apprentice"
	},
	{
	  "id": "harbour",
	  "name": "Harbour",
	  "article": "the Harbour",
	  "image": "https://www.mousehuntgame.com/images/environments/299b09242d8fc78cbf208c3241a84f47.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/8c969345fe09d05a1aaa7cac063eee2b.jpg",
	  "region": "gnawnia",
	  "order": 17,
	  "title": "initiate"
	},
	{
	  "id": "mountain",
	  "name": "Mountain",
	  "article": "the Mountain",
	  "image": "https://www.mousehuntgame.com/images/environments/dee680c95caf9f8d4f4c8f62d9559c55.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/7fb74d6bb5148169a41e9e999f8d72ee.jpg",
	  "region": "gnawnia",
	  "order": 18,
	  "title": "journeyman"
	},
	{
	  "id": "kings_arms",
	  "name": "King's Arms",
	  "article": "the King's Arms",
	  "image": "https://www.mousehuntgame.com/images/environments/85b1ef8a33eb3738f99ff6b6ef031b0b.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/657cad8107032c3e4e5ee3931964c8ae.jpg",
	  "region": "valour",
	  "order": 14,
	  "title": "apprentice"
	},
	{
	  "id": "tournament_hall",
	  "name": "Tournament Hall",
	  "article": "the Tournament Hall",
	  "image": "https://www.mousehuntgame.com/images/environments/bcef5388cc1ef35263ab0ce4dc25775a.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/43f6791b691ba14212d2d94ab3f8c03d.jpg",
	  "region": "valour",
	  "order": 15,
	  "title": "apprentice"
	},
	{
	  "id": "kings_gauntlet",
	  "name": "King's Gauntlet",
	  "article": "the King's Gauntlet",
	  "image": "https://www.mousehuntgame.com/images/environments/c6b49b20bb646760bf6c0ed3068f1295.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/85fddecd193221238fab3e5d7db0cead.jpg",
	  "region": "valour",
	  "order": 65,
	  "title": "hero"
	},
	{
	  "id": "calm_clearing",
	  "name": "Calm Clearing",
	  "article": "the Calm Clearing",
	  "image": "https://www.mousehuntgame.com/images/environments/7767dffc1f500872477a503c3860a0af.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/e310e54e7de5501d7a82b5d20202b387.jpg",
	  "region": "whisker_woods",
	  "order": 20,
	  "title": "journeyman"
	},
	{
	  "id": "great_gnarled_tree",
	  "name": "Great Gnarled Tree",
	  "article": "the Great Gnarled Tree",
	  "image": "https://www.mousehuntgame.com/images/environments/ea24e3c7e0318a5ab098139848e43f36.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/e332e7ab3913409e331ce750ce45ba70.jpg",
	  "region": "whisker_woods",
	  "order": 24,
	  "title": "master"
	},
	{
	  "id": "lagoon",
	  "name": "Lagoon",
	  "article": "the Lagoon",
	  "image": "https://www.mousehuntgame.com/images/environments/cfbb19c90443073ff9d14b282c157c90.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/76489e496d9bdda7760d04856adf7e85.jpg",
	  "region": "whisker_woods",
	  "order": 25,
	  "title": "grandmaster"
	},
	{
	  "id": "laboratory",
	  "name": "Laboratory",
	  "article": "the Laboratory",
	  "image": "https://www.mousehuntgame.com/images/environments/34167a825f66074fcc1c2f01018815b9.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/bcc9ef0f15b292e08d04715f6b4dc750.jpg",
	  "region": "burroughs",
	  "order": 21,
	  "title": "master"
	},
	{
	  "id": "mousoleum",
	  "name": "Mousoleum",
	  "article": "the Mousoleum",
	  "image": "https://www.mousehuntgame.com/images/environments/90f0aedc563b86ae9f791f8f1d54e65d.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/508a63db4778fd235f4721e2646126f8.jpg",
	  "region": "burroughs",
	  "order": 22,
	  "title": "master"
	},
	{
	  "id": "town_of_digby",
	  "name": "Town of Digby",
	  "article": "the Town of Digby",
	  "image": "https://www.mousehuntgame.com/images/environments/82cc4bd9e80af9968d04e3f353386c39_v2.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/ed2bd0952268c9e602375af82601a3a8_v2.jpg",
	  "region": "burroughs",
	  "order": 23,
	  "title": "master"
	},
	{
	  "id": "bazaar",
	  "name": "Bazaar",
	  "article": "the Bazaar",
	  "image": "https://www.mousehuntgame.com/images/environments/52aa280a0470bf2bbf4fcc47248df387.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/844ce3418fc5990eb57738aa5223462e.jpg",
	  "region": "burroughs",
	  "order": 31,
	  "title": "grandmaster"
	},
	{
	  "id": "pollution_outbreak",
	  "name": "Toxic Spill",
	  "article": "the Toxic Spill",
	  "image": "https://www.mousehuntgame.com/images/environments/6e8c017845d0fac63689aaa807775ab2.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/90bf5805afad175dca5ab584d73e4526.jpg",
	  "region": "burroughs",
	  "order": 66,
	  "title": "archduke_archduchess"
	},
	{
	  "id": "training_grounds",
	  "name": "Training Grounds",
	  "article": "the Training Grounds",
	  "image": "https://www.mousehuntgame.com/images/environments/c4a76adf8dce0b63bc51985821a7df8f.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/64d17c40b34901ca2dacadb110d451c4.jpg",
	  "region": "furoma",
	  "order": 30,
	  "title": "grandmaster"
	},
	{
	  "id": "dojo",
	  "name": "Dojo",
	  "article": "the Dojo",
	  "image": "https://www.mousehuntgame.com/images/environments/04009d0da06626fec6dde7fbca554e04.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/1421a0b3920d4bfafb6a150ced5f4278.jpg",
	  "region": "furoma",
	  "order": 32,
	  "title": "grandmaster"
	},
	{
	  "id": "meditation_room",
	  "name": "Meditation Room",
	  "article": "the Meditation Room",
	  "image": "https://www.mousehuntgame.com/images/environments/6abcf1fec4d87fe316c596ddf40c486e.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/8d4d7b2c39f6027fc7e8bc20507ba817.jpg",
	  "region": "furoma",
	  "order": 33,
	  "title": "grandmaster"
	},
	{
	  "id": "pinnacle_chamber",
	  "name": "Pinnacle Chamber",
	  "article": "the Pinnacle Chamber",
	  "image": "https://www.mousehuntgame.com/images/environments/87926031d29e6aefe3fb7ed6c9b26634.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/a4fa72ca33426c8b7630b6c268ff3b77.jpg",
	  "region": "furoma",
	  "order": 34,
	  "title": "grandmaster"
	},
	{
	  "id": "catacombs",
	  "name": "Catacombs",
	  "article": "the Catacombs",
	  "image": "https://www.mousehuntgame.com/images/environments/6c90bd8fb85fbbfecb1b15eb191e61a7.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/36a27716b813e1dfeb9d4e9008aa43db.jpg",
	  "region": "bristle_woods",
	  "order": 40,
	  "title": "legendary"
	},
	{
	  "id": "forbidden_grove",
	  "name": "Forbidden Grove",
	  "article": "the Forbidden Grove",
	  "image": "https://www.mousehuntgame.com/images/environments/2b093e36c3aadc67b59abc740f194149.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/a3c6d8106b7f6fa6dfadbdf887dd093f.jpg",
	  "region": "bristle_woods",
	  "order": 41,
	  "title": "legendary"
	},
	{
	  "id": "acolyte_realm",
	  "name": "Acolyte Realm",
	  "article": "the Acolyte Realm",
	  "image": "https://www.mousehuntgame.com/images/environments/a72f9c94f446eef321d92f25c8617c62.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/4f4eb01d7b6ff25046a78af4e6913ac0.jpg",
	  "region": "bristle_woods",
	  "order": 42,
	  "title": "legendary"
	},
	{
	  "id": "cape_clawed",
	  "name": "Cape Clawed",
	  "article": "Cape Clawed",
	  "image": "https://www.mousehuntgame.com/images/environments/49323d2e691deb0336089fa0be3b9a80.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/557ea195ec4c9be8f2ad4816158c9577.jpg",
	  "region": "tribal_isles",
	  "order": 60,
	  "title": "legendary"
	},
	{
	  "id": "elub_shore",
	  "name": "Elub Shore",
	  "article": "the Elub Shore",
	  "image": "https://www.mousehuntgame.com/images/environments/35e41632eb8740769d7c3b4fce87d08e.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/06770d179764b35c573a7db5348828f5.jpg",
	  "region": "tribal_isles",
	  "order": 61,
	  "title": "legendary"
	},
	{
	  "id": "nerg_plains",
	  "name": "Nerg Plains",
	  "article": "the Nerg Plains",
	  "image": "https://www.mousehuntgame.com/images/environments/e543aa29b9ddbf8e53b614243c502b37.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/6c151158dde393e87804b6266a5ef1c6.jpg",
	  "region": "tribal_isles",
	  "order": 62,
	  "title": "legendary"
	},
	{
	  "id": "derr_dunes",
	  "name": "Derr Dunes",
	  "article": "Derr Dunes",
	  "image": "https://www.mousehuntgame.com/images/environments/e2203bda2c17140902aed0a0f8da1515.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/0f0964cc5604c1894da6e2e67a6c3820.jpg",
	  "region": "tribal_isles",
	  "order": 63,
	  "title": "legendary"
	},
	{
	  "id": "jungle_of_dread",
	  "name": "Jungle of Dread",
	  "article": "the Jungle of Dread",
	  "image": "https://www.mousehuntgame.com/images/environments/cf9945d59760e180f3c0d77d6f065b71_v2.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/55c8b16d30aa344f64c5daaeb95de38b_v2.jpg",
	  "region": "tribal_isles",
	  "order": 64,
	  "title": "hero"
	},
	{
	  "id": "dracano",
	  "name": "Dracano",
	  "article": "Dracano",
	  "image": "https://www.mousehuntgame.com/images/environments/eefec52373c6cb93bcd55909cb477e47.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/7b223d1176016fbf2a6f362d9d86371c.jpg",
	  "region": "tribal_isles",
	  "order": 67,
	  "title": "knight"
	},
	{
	  "id": "balacks_cove",
	  "name": "Balack's Cove",
	  "article": "Balack's Cove",
	  "image": "https://www.mousehuntgame.com/images/environments/13f8a9edffc65a052d84dd08d1a0a32b.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/a802bbffb7dcbf035352bb6a0916eb04.jpg",
	  "region": "tribal_isles",
	  "order": 68,
	  "title": "knight"
	},
	{
	  "id": "claw_shot_city",
	  "name": "Claw Shot City",
	  "article": "Claw Shot City",
	  "image": "https://www.mousehuntgame.com/images/environments/d3ace11874ce22faf7b2801b0c57f529.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/b79693a6e67a1f5c7f268b3ceb9de8cf.jpg",
	  "region": "varmint_valley",
	  "order": 85,
	  "title": "lord_lady"
	},
	{
	  "id": "train_station",
	  "name": "Gnawnian Express Station",
	  "article": "the Gnawnian Express Station",
	  "image": "https://www.mousehuntgame.com/images/environments/dbbb6f5114d44fefa3870271a8a4b0fe.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/34fb304be8323af0a4584cdf1a9c7d1c.jpg",
	  "region": "varmint_valley",
	  "order": 86,
	  "title": "lord_lady"
	},
	{
	  "id": "fort_rox",
	  "name": "Fort Rox",
	  "article": "Fort Rox",
	  "image": "https://www.mousehuntgame.com/images/environments/f8fa3cfb0ba47234604e790c0edc51aa.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/ccf4854faaabc8f36cf9ec7a6d328393.jpg",
	  "region": "varmint_valley",
	  "order": 95,
	  "title": "baron_baroness"
	},
	{
	  "id": "desert_warpath",
	  "name": "Fiery Warpath",
	  "article": "the Fiery Warpath",
	  "image": "https://www.mousehuntgame.com/images/environments/50c140c25725c308d70f14ef96279ab6.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/6d866864cb299fbc992cc3a1b5a4da5f.jpg",
	  "region": "desert",
	  "order": 90,
	  "title": "baron_baroness"
	},
	{
	  "id": "desert_city",
	  "name": "Muridae Market",
	  "article": "the Muridae Market",
	  "image": "https://www.mousehuntgame.com/images/environments/423b8ccbc5788e599320f20f6c20a478.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/ce9fd48c0a5b4e76f2f63113474d9ac6.jpg",
	  "region": "desert",
	  "order": 91,
	  "title": "baron_baroness"
	},
	{
	  "id": "desert_oasis",
	  "name": "Living Garden",
	  "article": "the Living Garden",
	  "image": "https://www.mousehuntgame.com/images/environments/1f78a597ffbc9e1db4dd312d2a510e2d.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/4888b940f4619e6611e90a612cb254e3.jpg",
	  "region": "desert",
	  "order": 92,
	  "title": "baron_baroness"
	},
	{
	  "id": "lost_city",
	  "name": "Lost City",
	  "article": "the Lost City",
	  "image": "https://www.mousehuntgame.com/images/environments/aa370a7e75c3baa6db51967c17f6bc90.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/678132388b2581f42d01749fbff0bcfa.jpg",
	  "region": "desert",
	  "order": 93,
	  "title": "baron_baroness"
	},
	{
	  "id": "sand_dunes",
	  "name": "Sand Dunes",
	  "article": "the Sand Dunes",
	  "image": "https://www.mousehuntgame.com/images/environments/4e8967692df16dfbb489e9acf672ec4a.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/6e96db3ec1b7075ba09875173e1999d5.jpg",
	  "region": "desert",
	  "order": 94,
	  "title": "baron_baroness"
	},
	{
	  "id": "ss_huntington_ii",
	  "name": "S.S. Huntington IV",
	  "article": "the S.S. Huntington IV",
	  "image": "https://www.mousehuntgame.com/images/environments/2b8b5004d762ad05d5e84a932244a6e0.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/0d758141f6bcbe0a231985c578714538.jpg",
	  "region": "rodentia",
	  "order": 50,
	  "title": "legendary"
	},
	{
	  "id": "seasonal_garden",
	  "name": "Seasonal Garden",
	  "article": "the Seasonal Garden",
	  "image": "https://www.mousehuntgame.com/images/environments/49b4059a6789ec3b24b7489be9143c4a.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/7829f3af239544f2ceb3a4bbddfa60ce.jpg",
	  "region": "rodentia",
	  "order": 70,
	  "title": "lord_lady"
	},
	{
	  "id": "zugzwang_tower",
	  "name": "Zugzwang's Tower",
	  "article": "Zugzwang's Tower",
	  "image": "https://www.mousehuntgame.com/images/environments/08a64629c0ca285a411df8330ede2c11.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/7d8ec7b21f3761cd81c8385f62d294df.jpg",
	  "region": "rodentia",
	  "order": 71,
	  "title": "lord_lady"
	},
	{
	  "id": "zugzwang_library",
	  "name": "Crystal Library",
	  "article": "the Crystal Library",
	  "image": "https://www.mousehuntgame.com/images/environments/3b829c45549a8f953bc96ee34eff66dd.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/56e2f71c1ad421c71e252065619ec316.jpg",
	  "region": "rodentia",
	  "order": 72,
	  "title": "lord_lady"
	},
	{
	  "id": "slushy_shoreline",
	  "name": "Slushy Shoreline",
	  "article": "the Slushy Shoreline",
	  "image": "https://www.mousehuntgame.com/images/environments/83a58b48b1fdbde6f3b14e8a40e04e1f.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/3e8eb4494fdac0c3338219b64e1dbfc5.jpg",
	  "region": "rodentia",
	  "order": 80,
	  "title": "lord_lady"
	},
	{
	  "id": "iceberg",
	  "name": "Iceberg",
	  "article": "the Iceberg",
	  "image": "https://www.mousehuntgame.com/images/environments/11939d9ac30a58d4b923915834764ff0.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/4ff3e4717538b76cc1ec3f67ab8bd149.jpg",
	  "region": "rodentia",
	  "order": 81,
	  "title": "lord_lady"
	},
	{
	  "id": "sunken_city",
	  "name": "Sunken City",
	  "article": "the Sunken City",
	  "image": "https://www.mousehuntgame.com/images/environments/76c845e1cb95684581b12f3c3b1c1c8e.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/02e7cde50d53cd9ed90e1dcb4cb2c5a6.jpg",
	  "region": "rodentia",
	  "order": 110,
	  "title": "count_countess"
	},
	{
	  "id": "queso_river",
	  "name": "Queso River",
	  "article": "the Queso River",
	  "image": "https://www.mousehuntgame.com/images/environments/404207124e79f78d3970df192fae9460.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/1c30a0923563b56e01ec10cbe2eac17c.jpg",
	  "region": "queso_canyon",
	  "order": 100,
	  "title": "count_countess"
	},
	{
	  "id": "queso_plains",
	  "name": "Prickly Plains",
	  "article": "the Prickly Plains",
	  "image": "https://www.mousehuntgame.com/images/environments/b22f0b26343fc87581e3291e41b957ef.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/079c993f2608cc46a2676c16b2a95f0a.jpg",
	  "region": "queso_canyon",
	  "order": 101,
	  "title": "count_countess"
	},
	{
	  "id": "queso_quarry",
	  "name": "Cantera Quarry",
	  "article": "the Cantera Quarry",
	  "image": "https://www.mousehuntgame.com/images/environments/04042c67b067e04bc96bf59a05b3c9c3.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/425d407d398942cc3d13ea1ba9a23a75.jpg",
	  "region": "queso_canyon",
	  "order": 102,
	  "title": "count_countess"
	},
	{
	  "id": "queso_geyser",
	  "name": "Queso Geyser",
	  "article": "the Queso Geyser",
	  "image": "https://www.mousehuntgame.com/images/environments/d0046f985528496b0d638c04f35270bc.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/99ed271c5c776d5cff7eb3e0b42d20b7.jpg",
	  "region": "queso_canyon",
	  "order": 103,
	  "title": "count_countess"
	},
	{
	  "id": "fungal_cavern",
	  "name": "Fungal Cavern",
	  "article": "the Fungal Cavern",
	  "image": "https://www.mousehuntgame.com/images/environments/8e2c435efa191b1948f38525664c96ff.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/2f102c9a838767f48d4966e6ea1a91fc.jpg",
	  "region": "zokor_zone",
	  "order": 130,
	  "title": "duke_dutchess"
	},
	{
	  "id": "labyrinth",
	  "name": "Labyrinth",
	  "article": "the Labyrinth",
	  "image": "https://www.mousehuntgame.com/images/environments/fde0d810fea36c1bb16af988fa014a1f.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/24d1074c2616b20a5f4b8348a3cdd729.jpg",
	  "region": "zokor_zone",
	  "order": 131,
	  "title": "duke_dutchess"
	},
	{
	  "id": "ancient_city",
	  "name": "Zokor",
	  "article": "Zokor",
	  "image": "https://www.mousehuntgame.com/images/environments/4439cd721150faa28ff83f8e390dd766.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/436adc956ec6763c6ece2c91609610c1.jpg",
	  "region": "zokor_zone",
	  "order": 132,
	  "title": "duke_dutchess"
	},
	{
	  "id": "moussu_picchu",
	  "name": "Moussu Picchu",
	  "article": "Moussu Picchu",
	  "image": "https://www.mousehuntgame.com/images/environments/438e2879c8c1e468f7e7eee169e289b6.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/fee8b8eaeca51a0c1ea67b9f9f262739.jpg",
	  "region": "zokor_zone",
	  "order": 133,
	  "title": "grand_duke"
	},
	{
	  "id": "floating_islands",
	  "name": "Floating Islands",
	  "article": "the Floating Islands",
	  "image": "https://www.mousehuntgame.com/images/environments/0fb181c7f216be2d5bde0475ab46f8c5.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/53e8e44ac36e222571c250bcfab3d900.jpg",
	  "region": "zokor_zone",
	  "order": 134,
	  "title": "archduke_archduchess"
	},
	{
	  "id": "foreword_farm",
	  "name": "Foreword Farm",
	  "article": "the Foreword Farm",
	  "image": "https://www.mousehuntgame.com/images/environments/e473a02469e37bf1d01c0a42188a8609.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/97f7fb7936ea4842c996bb8b614902f4.jpg",
	  "region": "folklore_forest",
	  "order": 140,
	  "title": "archduke_archduchess"
	},
	{
	  "id": "prologue_pond",
	  "name": "Prologue Pond",
	  "article": "the Prologue Pond",
	  "image": "https://www.mousehuntgame.com/images/environments/cd1bbc4c15baca2208f90313c7ef65a4.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/b80757311ac4164ef9b3ad12b5dfb48d.jpg",
	  "region": "folklore_forest",
	  "order": 141,
	  "title": "archduke_archduchess"
	},
	{
	  "id": "table_of_contents",
	  "name": "Table of Contents",
	  "article": "the Table of Contents",
	  "image": "https://www.mousehuntgame.com/images/environments/f48fa15a916ac106efbf4ca6b4be7135.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/e5fae435efbf58a7a3f76f496c08aec1.jpg",
	  "region": "folklore_forest",
	  "order": 142,
	  "title": "archduke_archduchess"
	},
	{
	  "id": "bountiful_beanstalk",
	  "name": "Bountiful Beanstalk",
	  "article": "the Bountiful Beanstalk",
	  "image": "https://www.mousehuntgame.com/images/environments/b87a3294559cfa57506b4fbda5f66917.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/ce1d7f400ed30896a7118468cf790706.jpg",
	  "region": "folklore_forest",
	  "order": 143,
	  "title": "viceroy"
	},
	{
	  "id": "rift_gnawnia",
	  "name": "Gnawnia Rift",
	  "article": "the Gnawnia Rift",
	  "image": "https://www.mousehuntgame.com/images/environments/632aa670b5358a0bbc2d2c4ef982c6ad.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/c02154174160d9023d44f3075f3267e1.jpg",
	  "region": "riftopia",
	  "order": 900,
	  "title": "count_countess"
	},
	{
	  "id": "rift_burroughs",
	  "name": "Burroughs Rift",
	  "article": "the Burroughs Rift",
	  "image": "https://www.mousehuntgame.com/images/environments/818f04f2bda88795c67cc6ff227615bb.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/c1ada6edacdc8bf6cbdce967d7d7481f.jpg",
	  "region": "riftopia",
	  "order": 901,
	  "title": "duke_dutchess"
	},
	{
	  "id": "rift_whisker_woods",
	  "name": "Whisker Woods Rift",
	  "article": "the Whisker Woods Rift",
	  "image": "https://www.mousehuntgame.com/images/environments/d5e2069ed820740389a2f4cebbc5657c.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/91e00fc43d1517fd7ac6ead89a3ce8ec.jpg",
	  "region": "riftopia",
	  "order": 902,
	  "title": "duke_dutchess"
	},
	{
	  "id": "rift_furoma",
	  "name": "Furoma Rift",
	  "article": "the Furoma Rift",
	  "image": "https://www.mousehuntgame.com/images/environments/67fca617353d1d951d24abea92bce506.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/44eb42443db54782b5c4ba02b432ee13.jpg",
	  "region": "riftopia",
	  "order": 903,
	  "title": "grand_duke"
	},
	{
	  "id": "rift_bristle_woods",
	  "name": "Bristle Woods Rift",
	  "article": "the Bristle Woods Rift",
	  "image": "https://www.mousehuntgame.com/images/environments/3319aacbf12783484718dd1470f2bdb7.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/f96ec205e6d305a8ceb62a9ffc7042c4.jpg",
	  "region": "riftopia",
	  "order": 904,
	  "title": "grand_duke"
	},
	{
	  "id": "rift_valour",
	  "name": "Valour Rift",
	  "article": "the Valour Rift",
	  "image": "https://www.mousehuntgame.com/images/environments/5d2d00f48fbe41740cfb438f947273ac.jpg",
	  "headerImage": "https://www.mousehuntgame.com/images/environments/35d5eed5ac7dfd3f3a5c3b4254ab1fc7.jpg",
	  "region": "riftopia",
	  "order": 905,
	  "title": "archduke_archduchess"
	}
];

export default {
	async fetch(request) {
		const response = await fetch('https://mhct.win/tracker.json');
		const data = await response.json();

		// Find the environment that matches the location name
		let environment = environments.find(env => env.name.toLowerCase() === data.rh.location.toLowerCase());
		if (! environment) {
			environment = {
				id: "unknown",
				name: "Unknown",
			};
		}

		return new Response(JSON.stringify(environment), {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
      }
    });
	}
};

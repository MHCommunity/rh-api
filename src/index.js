const environments = [
  {
    "id": "meadow",
    "name": "Meadow",
    "image": "https://www.mousehuntgame.com/images/environments/a441eb078698da69ef2765983f4b5912.jpg?cv=2",
    "region": "gnawnia"
  },
  {
    "id": "town_of_gnawnia",
    "name": "Town of Gnawnia",
    "image": "https://www.mousehuntgame.com/images/environments/231c9b4d583f98c365efcbbd50fddb76_v2.jpg?cv=2",
    "region": "gnawnia"
  },
  {
    "id": "windmill",
    "name": "Windmill",
    "image": "https://www.mousehuntgame.com/images/environments/15623ee3d1cecd303d677e35507b6bb1.jpg?cv=2",
    "region": "gnawnia"
  },
  {
    "id": "harbour",
    "name": "Harbour",
    "image": "https://www.mousehuntgame.com/images/environments/299b09242d8fc78cbf208c3241a84f47.jpg?cv=2",
    "region": "gnawnia"
  },
  {
    "id": "mountain",
    "name": "Mountain",
    "image": "https://www.mousehuntgame.com/images/environments/dee680c95caf9f8d4f4c8f62d9559c55.jpg?cv=2",
    "region": "gnawnia"
  },

  {
    "id": "kings_arms",
    "name": "King's Arms",
    "image": "https://www.mousehuntgame.com/images/environments/85b1ef8a33eb3738f99ff6b6ef031b0b.jpg?cv=2",
    "region": "valour"
  },
  {
    "id": "tournament_hall",
    "name": "Tournament Hall",
    "image": "https://www.mousehuntgame.com/images/environments/bcef5388cc1ef35263ab0ce4dc25775a.jpg?cv=2",
    "region": "valour"
  },
  {
    "id": "kings_gauntlet",
    "name": "King's Gauntlet",
    "image": "https://www.mousehuntgame.com/images/environments/c6b49b20bb646760bf6c0ed3068f1295.jpg?cv=2",
    "region": "valour"
  },

  {
    "id": "calm_clearing",
    "name": "Calm Clearing",
    "image": "https://www.mousehuntgame.com/images/environments/7767dffc1f500872477a503c3860a0af.jpg?cv=2",
    "region": "whisker_woods"
  },
  {
    "id": "great_gnarled_tree",
    "name": "Great Gnarled Tree",
    "image": "https://www.mousehuntgame.com/images/environments/ea24e3c7e0318a5ab098139848e43f36.jpg?cv=2",
    "region": "whisker_woods"
  },
  {
    "id": "lagoon",
    "name": "Lagoon",
    "image": "https://www.mousehuntgame.com/images/environments/cfbb19c90443073ff9d14b282c157c90.jpg?cv=2",
    "region": "whisker_woods"
  },

  {
    "id": "laboratory",
    "name": "Laboratory",
    "image": "https://www.mousehuntgame.com/images/environments/34167a825f66074fcc1c2f01018815b9.jpg?cv=2",
    "region": "burroughs"
  },
  {
    "id": "mousoleum",
    "name": "Mousoleum",
    "image": "https://www.mousehuntgame.com/images/environments/90f0aedc563b86ae9f791f8f1d54e65d.jpg?cv=2",
    "region": "burroughs"
  },
  {
    "id": "town_of_digby",
    "name": "Town of Digby",
    "image": "https://www.mousehuntgame.com/images/environments/82cc4bd9e80af9968d04e3f353386c39_v2.jpg?cv=2",
    "region": "burroughs"
  },
  {
    "id": "bazaar",
    "name": "Bazaar",
    "image": "https://www.mousehuntgame.com/images/environments/52aa280a0470bf2bbf4fcc47248df387.jpg?cv=2",
    "region": "burroughs"
  },
  {
    "id": "pollution_outbreak",
    "name": "Toxic Spill",
    "image": "https://www.mousehuntgame.com/images/environments/6e8c017845d0fac63689aaa807775ab2.jpg?cv=2",
    "region": "burroughs"
  },

  {
    "id": "training_grounds",
    "name": "Training Grounds",
    "image": "https://www.mousehuntgame.com/images/environments/c4a76adf8dce0b63bc51985821a7df8f.jpg?cv=2",
    "region": "furoma"
  },
  {
    "id": "dojo",
    "name": "Dojo",
    "image": "https://www.mousehuntgame.com/images/environments/04009d0da06626fec6dde7fbca554e04.jpg?cv=2",
    "region": "furoma"
  },
  {
    "id": "meditation_room",
    "name": "Meditation Room",
    "image": "https://www.mousehuntgame.com/images/environments/6abcf1fec4d87fe316c596ddf40c486e.jpg?cv=2",
    "region": "furoma"
  },
  {
    "id": "pinnacle_chamber",
    "name": "Pinnacle Chamber",
    "image": "https://www.mousehuntgame.com/images/environments/87926031d29e6aefe3fb7ed6c9b26634.jpg?cv=2",
    "region": "furoma"
  },

  {
    "id": "catacombs",
    "name": "Catacombs",
    "image": "https://www.mousehuntgame.com/images/environments/6c90bd8fb85fbbfecb1b15eb191e61a7.jpg?cv=2",
    "region": "bristle_woods"
  },
  {
    "id": "forbidden_grove",
    "name": "Forbidden Grove",
    "image": "https://www.mousehuntgame.com/images/environments/2b093e36c3aadc67b59abc740f194149.jpg?cv=2",
    "region": "bristle_woods"
  },
  {
    "id": "acolyte_realm",
    "name": "Acolyte Realm",
    "image": "https://www.mousehuntgame.com/images/environments/a72f9c94f446eef321d92f25c8617c62.jpg?cv=2",
    "region": "bristle_woods"
  },

  {
    "id": "cape_clawed",
    "name": "Cape Clawed",
    "image": "https://www.mousehuntgame.com/images/environments/49323d2e691deb0336089fa0be3b9a80.jpg?cv=2",
    "region": "tribal_isles"
  },
  {
    "id": "elub_shore",
    "name": "Elub Shore",
    "image": "https://www.mousehuntgame.com/images/environments/35e41632eb8740769d7c3b4fce87d08e.jpg?cv=2",
    "region": "tribal_isles"
  },
  {
    "id": "nerg_plains",
    "name": "Nerg Plains",
    "image": "https://www.mousehuntgame.com/images/environments/e543aa29b9ddbf8e53b614243c502b37.jpg?cv=2",
    "region": "tribal_isles"
  },
  {
    "id": "derr_dunes",
    "name": "Derr Dunes",
    "image": "https://www.mousehuntgame.com/images/environments/e2203bda2c17140902aed0a0f8da1515.jpg?cv=2",
    "region": "tribal_isles"
  },
  {
    "id": "jungle_of_dread",
    "name": "Jungle of Dread",
    "image": "https://www.mousehuntgame.com/images/environments/cf9945d59760e180f3c0d77d6f065b71_v2.jpg?cv=2",
    "region": "tribal_isles"
  },
  {
    "id": "dracano",
    "name": "Dracano",
    "image": "https://www.mousehuntgame.com/images/environments/eefec52373c6cb93bcd55909cb477e47.jpg?cv=2",
    "region": "tribal_isles"
  },
  {
    "id": "balacks_cove",
    "name": "Balack's Cove",
    "image": "https://www.mousehuntgame.com/images/environments/13f8a9edffc65a052d84dd08d1a0a32b.jpg?cv=2",
    "region": "tribal_isles"
  },

  {
    "id": "claw_shot_city",
    "name": "Claw Shot City",
    "image": "https://www.mousehuntgame.com/images/environments/d3ace11874ce22faf7b2801b0c57f529.jpg?cv=2",
    "region": "varmint_valley"
  },
  {
    "id": "train_station",
    "name": "Gnawnian Express Station",
    "image": "https://www.mousehuntgame.com/images/environments/dbbb6f5114d44fefa3870271a8a4b0fe.jpg?cv=2",
    "region": "varmint_valley"
  },
  {
    "id": "fort_rox",
    "name": "Fort Rox",
    "image": "https://www.mousehuntgame.com/images/environments/f8fa3cfb0ba47234604e790c0edc51aa.jpg?cv=2",
    "region": "varmint_valley"
  },

  {
    "id": "desert_warpath",
    "name": "Fiery Warpath",
    "image": "https://www.mousehuntgame.com/images/environments/50c140c25725c308d70f14ef96279ab6.jpg?cv=2",
    "region": "desert"
  },
  {
    "id": "desert_city",
    "name": "Muridae Market",
    "image": "https://www.mousehuntgame.com/images/environments/423b8ccbc5788e599320f20f6c20a478.jpg?cv=2",
    "region": "desert"
  },
  {
    "id": "desert_oasis",
    "name": "Living Garden",
    "image": "https://www.mousehuntgame.com/images/environments/1f78a597ffbc9e1db4dd312d2a510e2d.jpg?cv=2",
    "region": "desert"
  },
  {
    "id": "lost_city",
    "name": "Lost City",
    "image": "https://www.mousehuntgame.com/images/environments/aa370a7e75c3baa6db51967c17f6bc90.jpg?cv=2",
    "region": "desert"
  },
  {
    "id": "sand_dunes",
    "name": "Sand Dunes",
    "image": "https://www.mousehuntgame.com/images/environments/4e8967692df16dfbb489e9acf672ec4a.jpg?cv=2",
    "region": "desert"
  },

  {
    "id": "ss_huntington_ii",
    "name": "S.S. Huntington IV",
    "image": "https://www.mousehuntgame.com/images/environments/2b8b5004d762ad05d5e84a932244a6e0.jpg?cv=2",
    "region": "rodentia"
  },
  {
    "id": "seasonal_garden",
    "name": "Seasonal Garden",
    "image": "https://www.mousehuntgame.com/images/environments/49b4059a6789ec3b24b7489be9143c4a.jpg?cv=2",
    "region": "rodentia"
  },
  {
    "id": "zugzwang_tower",
    "name": "Zugzwang's Tower",
    "image": "https://www.mousehuntgame.com/images/environments/08a64629c0ca285a411df8330ede2c11.jpg?cv=2",
    "region": "rodentia"
  },
  {
    "id": "zugzwang_library",
    "name": "Crystal Library",
    "image": "https://www.mousehuntgame.com/images/environments/3b829c45549a8f953bc96ee34eff66dd.jpg?cv=2",
    "region": "rodentia"
  },
  {
    "id": "slushy_shoreline",
    "name": "Slushy Shoreline",
    "image": "https://www.mousehuntgame.com/images/environments/83a58b48b1fdbde6f3b14e8a40e04e1f.jpg?cv=2",
    "region": "rodentia"
  },
  {
    "id": "iceberg",
    "name": "Iceberg",
    "image": "https://www.mousehuntgame.com/images/environments/11939d9ac30a58d4b923915834764ff0.jpg?cv=2",
    "region": "rodentia"
  },
  {
    "id": "sunken_city",
    "name": "Sunken City",
    "image": "https://www.mousehuntgame.com/images/environments/76c845e1cb95684581b12f3c3b1c1c8e.jpg?cv=2",
    "region": "rodentia"
  },

  {
    "id": "queso_river",
    "name": "Queso River",
    "image": "https://www.mousehuntgame.com/images/environments/404207124e79f78d3970df192fae9460.jpg?cv=2",
    "region": "queso_canyon"
  },
  {
    "id": "queso_plains",
    "name": "Prickly Plains",
    "image": "https://www.mousehuntgame.com/images/environments/b22f0b26343fc87581e3291e41b957ef.jpg?cv=2",
    "region": "queso_canyon"
  },
  {
    "id": "queso_quarry",
    "name": "Cantera Quarry",
    "image": "https://www.mousehuntgame.com/images/environments/04042c67b067e04bc96bf59a05b3c9c3.jpg?cv=2",
    "region": "queso_canyon"
  },
  {
    "id": "queso_geyser",
    "name": "Queso Geyser",
    "image": "https://www.mousehuntgame.com/images/environments/d0046f985528496b0d638c04f35270bc.jpg?cv=2",
    "region": "queso_canyon"
  },

  {
    "id": "fungal_cavern",
    "name": "Fungal Cavern",
    "image": "https://www.mousehuntgame.com/images/environments/8e2c435efa191b1948f38525664c96ff.jpg?cv=2",
    "region": "zokor_zone"
  },
  {
    "id": "labyrinth",
    "name": "Labyrinth",
    "image": "https://www.mousehuntgame.com/images/environments/fde0d810fea36c1bb16af988fa014a1f.jpg?cv=2",
    "region": "zokor_zone"
  },
  {
    "id": "ancient_city",
    "name": "Zokor",
    "image": "https://www.mousehuntgame.com/images/environments/4439cd721150faa28ff83f8e390dd766.jpg?cv=2",
    "region": "zokor_zone"
  },
  {
    "id": "moussu_picchu",
    "name": "Moussu Picchu",
    "image": "https://www.mousehuntgame.com/images/environments/438e2879c8c1e468f7e7eee169e289b6.jpg?cv=2",
    "region": "zokor_zone"
  },
  {
    "id": "floating_islands",
    "name": "Floating Islands",
    "image": "https://www.mousehuntgame.com/images/environments/0fb181c7f216be2d5bde0475ab46f8c5.jpg?cv=2",
    "region": "zokor_zone"
  },

  {
    "id": "foreword_farm",
    "name": "Foreword Farm",
    "image": "https://www.mousehuntgame.com/images/environments/e473a02469e37bf1d01c0a42188a8609.jpg?cv=2",
    "region": "folklore_forest"
  },
  {
    "id": "prologue_pond",
    "name": "Prologue Pond",
    "image": "https://www.mousehuntgame.com/images/environments/cd1bbc4c15baca2208f90313c7ef65a4.jpg?cv=2",
    "region": "folklore_forest"
  },
  {
    "id": "table_of_contents",
    "name": "Table of Contents",
    "image": "https://www.mousehuntgame.com/images/environments/f48fa15a916ac106efbf4ca6b4be7135.jpg?cv=2",
    "region": "folklore_forest"
  },
  {
    "id": "bountiful_beanstalk",
    "name": "Bountiful Beanstalk",
    "image": "https://www.mousehuntgame.com/images/environments/b87a3294559cfa57506b4fbda5f66917.jpg?cv=2",
    "region": "folklore_forest"
  },

  {
    "id": "rift_gnawnia",
    "name": "Gnawnia Rift",
    "image": "https://www.mousehuntgame.com/images/environments/632aa670b5358a0bbc2d2c4ef982c6ad.jpg?cv=2",
    "region": "riftopia"
  },
  {
    "id": "rift_burroughs",
    "name": "Burroughs Rift",
    "image": "https://www.mousehuntgame.com/images/environments/818f04f2bda88795c67cc6ff227615bb.jpg?cv=2",
    "region": "riftopia"
  },
  {
    "id": "rift_whisker_woods",
    "name": "Whisker Woods Rift",
    "image": "https://www.mousehuntgame.com/images/environments/d5e2069ed820740389a2f4cebbc5657c.jpg?cv=2",
    "region": "riftopia"
  },
  {
    "id": "rift_furoma",
    "name": "Furoma Rift",
    "image": "https://www.mousehuntgame.com/images/environments/67fca617353d1d951d24abea92bce506.jpg?cv=2",
    "region": "riftopia"
  },
  {
    "id": "rift_bristle_woods",
    "name": "Bristle Woods Rift",
    "image": "https://www.mousehuntgame.com/images/environments/3319aacbf12783484718dd1470f2bdb7.jpg?cv=2",
    "region": "riftopia"
  },
  {
    "id": "rift_valour",
    "name": "Valour Rift",
    "image": "https://www.mousehuntgame.com/images/environments/5d2d00f48fbe41740cfb438f947273ac.jpg?cv=2",
    "region": "riftopia"
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

		return new Response(JSON.stringify(environment), { headers: {
      "content-type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    } });
	}
};

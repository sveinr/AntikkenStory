var game = {
    "chapters":[
      {
        "name":"Kapitel 1 - Reisen begynner",
        "intro":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "scenes":[
          {"id":1,"name":"På kjøkkenet",
            "text": "Du står inne på et mørkt dunkelt kjøkken. Fra ovnen lukter det svidd. Gjenom døren hører du lyder fra det du tror er stuen etc etc.",
            "choises":[
              {
                "text":"Kikk i ovnen",
                "goto": 2
              },
              {
                "text":"Gå mot stua",
                "goto": 3
              }
            ]
          },
          {"id":2, "name":"I ovnen",
            "text":"Det ligger en råtten kalkun som hopper ut og biter av deg tryne."
          },
          {"id":3, "name":"I stua",
            "text":"Tven står på full guffe det er en bla bla bla..",
            "choises":[
              {
                "text":"Slå av tv",
                "goto":4
              }
            ]
            
          }
        ]
      }
    ]
  };

function displayScene(chapterID,sceneID){

	chapterID = chapterID -1;
	sceneID = sceneID -1;
	document.body.innerHTML = "";
	
	var chapter = game.chapters[chapterID];
	var scene = chapter.scenes[sceneID];
	
	var paragraph = document.createElement("p");
	paragraph.innerText = scene.text;
	document.body.appendChild(paragraph);
	
	for(var i = 0; i < scene.choises.length; i++){
		
		var choise = scene.choises[i];
		
		var a = document.createElement("a");
		a.innerText = choise.text;
		a.setAttribute("onClick","displayScene(1," + choise.goto + ")" );
		document.body.appendChild(a);
		
		
	}
	
	
}


displayScene(1,1);


/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	},
		"End": {
		title: "Thanks for playing!",
		body: "But you are dead.",
		icon: "img/icon_192x192.png"
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	'Theme': 'archivetheme.mp3'
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	'DoorClose': 'doorclose.mp3',
	'Choke': 'body-impact.mp3',
	'Slash': 'knife-cut.mp3',
	'DoorBang': 'bangingdoor.mp3'

});

// Define the videos used in the game.
monogatari.assets ('videos', {
	"Dandelion": "DandelionTimelapse.mp4"
});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	"Main": "monogatari-promo.svg",
	"YellowDoor": "yellowdoor.png",
	"YellowDoorOpen": "yellowdooropen.png",
	"CorridorNormal": "corridornormal.png",
	"ClosedDoor": "closeddoor.png",
	"Archive": "archive.png",
	"Skeleton": "skeleton.png",
	"Classroom": "classroom.jpg",
	"Home": "home.png",
});


// Define the Characters
monogatari.characters ({
	"p": {
		"Name": "Narrator",
		"Color": "#ff3951",
		"Directory": "Narrator",
		"Images":{
			"Empty": "narrator.png",
		}
	},
	"e":{
		"Name": "Jon",
		"Color": "#0aff4b",
		"Directory": "Jon",
		"Images":{
			//"Normal": "jonside.png",
			//"Mad": "jonmadcross.png",
			//"Doubt": "jonsquintsus.png",
			//"Disapointed":"jontired.png",
			//"Nervous":"jonnervous.png",
			//"NervousTalk":"jonnervoustalk.png",
			//"Scared":"jonstunned.png",
			//"ScaredCross":"jonstunnedcross.png",
			"Nervous": "jonnervous.png",
			"NervousTalk": "jonnervoustalk.png",
			"Stunned": "jonstunned.png",
			"Side": "jonside.png",
			"AttitudeSide": "jonsidemadcross.png",
			"Attitude": "jonmadcross.png",
			"AttitudeTalk": "jonmadcrosstalk.png",
			"Tired": "jontired.png",
			"Glint": "jonglint.png",
			"Sus": "jonsquintsus.png",
			"SusTalk": "jonsquintsustalk.png",
			"Sus2": "jonraisedcross.png",
			"SusCross": "jonsquintsuscross.png",
			"SmugTalk": "jonsmugtalk.png",
			"Smug": "jonsmuggrin.png",
			"Done": "jonseriousfrown.png",
			"DoneCross": "jonseriousfrowncross.png",
			"Normal": "jonnormal.png",
			"NormalTalk": "jontalk.png",
			"Relief": "jonreliefgrin.png",
			"Happy": "jonsmilegenuine.png"
		}
	},
	"m":{
		"Name": "Michael",
		"Color": "#f516d7",
		"Font": "Serif",
		"Directory": "Michael",
		"Images":{
			"Normal": "resthappy.png",
			"NormalTalk": "resthappytalk.png",
			"Mad": "restangry.png",
			"MadSide": "restangryside.png",
			"MadTalk": "restangrytalk.png",
			"MadSus": "restquestion.png",
			"Sus": "questionsmile.png",
			"SusTalk": "questionsmiletalk.png",
			"ThreatMad": "angrysharp.png",
			"PityTalk": "handpitytalkside.png",
			"Happy": "restgrinclose.png",
			"Doubt": "restpitytalk.png",
			"Smug": "restsmug.png",
			"SmugTalk": "restsmugtalk.png",
			"MadPoint": "pointangryside.png",
			"Threat": "threatsmile.png",
			"ThreatEye": "threateye.png",
			"Explain1": "handhappytalkside.png",
			"Explain2": "pointexplain.png",
			"PitySmileTalk": "pitysmiletalk.png",
			"PityClose": "pityclose.png",
			"PityCloseTalk": "pityclosetalk.png",
			"Wistful": "wistfulhand.png",
			"ExplainSmug": "pointexplain.png",
			"ExplainSmugSide": "pointexplain.png"
		}
	},
	"n":{
		"Name": "?????",
		"Color": "#00bfff",
	},
	"b":{
		"Name": "Martin",
		"Color": "#00bfff",
		"Directory": "Martin",
		"Images":{
			"Ponder": "mquestionpoint.png",
			"Realize": "mrealizepoint.png",
			"HappyTalk": "mhappytalk.png",
			"Cry": "mcry.png",
			"Cry2": "mcry2.png",
			"Sigh": "msigh.png",
			"NervousSmileTalk": "mnervoussmiletalk.png",
			"Empty": "mempty.png",
			"HappyExplain": "msmilepointtalk.png",
			"Think": "mquestion.png",
			"Angry": "mangry.png",
			"AngryTalk": "mangryteeth.png",
			"AngrySide": "mangryside.png",
			"NervousLeft": "mnervousleft.png",
			"NervousLeftTalk": "mnervouslefttalk.png",
			"Surprise": "msurprise.png",
			"Explain": "mexplain.png",
			"NervousEmpty": "mnervousempty.png"
			//"Mad": "hmph!.png",
			//"Doubt": "uhh.png",
			//"Disapointed":"ngggg....png",
			//"Happy": "hehehehe.png"
		}
	}
});

monogatari.script ({
	// The game starts here.
		"Start":[
			{"Conditional": {
				"Condition": function () {
					return this.storage().played == "true";
				},
				"True": {"Choice":{
					"Text": "It seems you have already played the demo, do you wish to skip the introduction?",
					"Skip":{
						"Text": "Skip",
						"Do": "jump Topics"
					},
					"Continue":{
						"Text": "Continue",
						"Do": "jump Introduction"
					}
				}},
				"False": "jump Introduction"
			}}
		],

		"Introduction": [
			"clear",
			"show scene black with fadeIn",
			//{"Input": {
				//"Text": "What is your name?",
				//"Validation": function (input) {
				//	return input.trim().length > 0;
				//},
				//"Save": function (input) {
				//	Storage.set ("PlayerName", input);
				//	storage.player.name = input;
				//	return true;
				//},
				//"Warning": "You must enter a name!"
			//}},
			//"centered Another grueling day at the archives...",
			//"centered ...oh? Which archives, you ask?",
			//"centered Why, the Magnus Archives, which hold the paranormal research institute's most unexplainable case files.",
			//"centered You are Jonathan Sims, the Head Archivist of the Magnus Institute.",
			//"centered ...Though, you don't believe a single one of the case files in here for a second.",
			"centered You are Jonathan Sims. Try to survive.",

			"show scene Archive",
			//monogatari.script ({
				//'Start': [
				//	'play music Theme with loop',
				//	'end'
				//]
			//}),
			"play music Theme with loop",
			"show character e Normal center with fadeIn",
			"e ...Statement ends.",
			//"show character e Normal left with slideInRight",
			//"wait 500",
			//"show character e Doubt at center with slideInLeft",
			//"wait 500",
			"show character e Tired at center with headShake",
			"e Ugh... those statements get more and more gruesome every day.",

			"show character e Side center",
			"e Now then, time to deliver this tape to-",

			"show character e SusTalk center",
			"e ...was that door there before?",

			"show scene YellowDoor",
			"p A yellow door stands upon the archive wall, looking out of place.",
			"p ...Surely it must have been here before?",
			"p Doors don't appear out of thin air... do they?",
			"p You could have sworn this wall lead outside the building though....",
			"p Open the door?",


			{"Choice":{
				"Text":	"Open the door?",
				"OpenDoor":{
					"Text": "I gotta know!",
					"Do": "jump OpenDoor"
				},
				"NoOpenDoor":{
					"Text": "Absolutely not.",
					"Do": "jump NoOpenDoor"
				}
			}},


			//"e I don't even get to have a name I mean, what's up with that? Come on now, guess you get to choose this.",

			//{"Input": {
			//	"Text": "What should be my name?",
			//	"Validation": function (input) {
			//		return input.trim().length > 0;
			//	},
			//	"Save": function (input) {
			//		this.storage().Evelyn_Name = input;
			//		this.storage().evelyn_name = input;
			//		return true;
			//	},
			//	"Warning": "Choose a nice name for me please."
			//}},
		],
		

		//CHOICES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

		"OpenDoor": [
			function () {
				this.storage().animations = true;
				return true;
			},

			"p Like a fool, you decide to barge into the creepy door. For some reason.",
			"jump CorridorStart"
		],

		"NoOpenDoor": [
			function () {
				this.storage().animations = true;
				return true;
			},

			"p You make the smart decision, and decide to avoid the creepy new door.",
			"p Fortunately, you don’t feel like dying today.",
			"p …However, the man with blonde hair and large, bony hands who just stepped from behind the door obviously does not agree.",
			"show scene Archive with headShake duration 1s",
			"play sound Choke",
			"p A long, sharp finger is pressed to your throat. ",
			
			"show character m Threat with fadeIn duration 0.5s",
			"m Playing coward is no fun, is it Archivist?",
			"show character m ThreatEye with pulse",
			"m I insist… follow me through my door.",
			"p Go through the door?",
			{"Choice":{
				"Text":	"Go through the door?",
				"OpenDoor":{
					"Text": "If you insist...",
					"Do": "jump CorridorStart"
				},
				"NoOpenDoor":{
					"Text": "No means no.",
					"Do": "jump NoMeansNo"
				}
			}},

			"jump CorridorStart"
		],

		"NoMeansNo": [
			function () {
				this.storage().animations = true;
				return true;
			},

			"show scene Archive with shake",
			"play sound Slash",
			"p Michael stabs you. You die.",
			"p What did you think was going to happen?",
			
			"show character m PityTalk with fadeIn",
			"m Oh, my mistake Archivist.",
			"show character m Happy",
			"m Continue on with your day!!",
			"hide character m",
			"p This isn’t Dora, and he’s not Swiper.",
			"p But none of this matters, because you are dead now.",
			"show scene black with fadeIn",
			"centered Ending 1: Dead as a doornail.",
			"end"
		],

		"CorridorStart": [
			function () {
				this.storage().animations = true;
				return true;
			},

			"show scene YellowDoorOpen",
			"p The door opens silently, revealing a long stretching hallway that looks... unremarkable.",
			"p ...It's impossible for this hallway to be here.",
			"p This wall leads to outside the building.",
			"p And yet... here it stands.",

			"show scene CorridorNormal with headShake duration 1s",
			"play sound DoorClose",
			"p ...Wask... that the door???",
			"p But... you never stepped inside!",
			"show scene ClosedDoor with shake",
			"play sound DoorBang",
			"p You frantically try turning the doorknob but... it's locked.",
			"show character e Nervous with headShake",
			"e H- HEY!",
			"show character e NervousTalk with headShake",
			"e LET ME OUT!!!",
			"show character e Stunned with headShake",
			"e HELP!!!",
			"hide character e",

			"m Screaming will get you nowhere, Archivist.",
			"p You turn around to face the voice from behind you.",
			
			"show scene CorridorNormal",
			
			"show character m Smug with fadeIn",
			"m But by all means, continue... it's fun to listen to you try.",
			"show character m Smug left with slideInRight",
			
			"show character e Nervous right with fadeIn duration 0.5s",
			"e Who are you?",
			
			"show character m Explain1 left with pulse",
			"m I am not a Who, Archivist.",
			
			"show character m Explain2 left",
			"m I am a What.",
			"show character m Wistful left",
			"m A 'who' requires a degree of identity I can’t ever retain.",
			
			"show character e NervousTalk right with headShake",
			"e I... uh....",

			"show character m PitySmileTalk left with pulse",
			"m I suppose if you truly need paltry form of identification for me...",
			
			"show character m PityClose left",
			"m You can call me Michael.",

			"show character e Glint right with headShake",
			"e Right... Michael.",
			"show character e Relief right",
			"e I don't suppose you'll let me leave...?",

			"show character m SusTalk left with pulse",
			"m There is no 'leaving' this place, Archivist.",
			"show character m ExplainSmugSide left",
			"m You may enter and exit, perhaps...",
			"show character m Smug left",
			"m But this place will never leave you.",

			"show character e Side right with pulse",
			"e ...'Enter and exit.'",
			"show character e Sus2 right",
			"e So I CAN leave?",

			"show character m Happy left with pulse",
			"m .........",
			"show character m NormalTalk left",
			"m Why don't you find out for yourself?",
			"show character m NormalTalk left with fadeOut",

			"show character e SusCross right with pulse",
			"e ...Why did you phrase it like that-",
			"show character e Stunned right",
			"e HEY??? WHERE DID YOU GO???",
			"show character e Nervous right",
			"e ......",
			"show character e NervousTalk right",
			"e Hello?",
			"show character e NervousTalk right with fadeOut",
			"p It would seem that you are truly alone now.",

			"hide character m",
			"hide character e",

			"p Now alone, you have 2 choices.",
			"p You can stay by the locked door, hoping it will open...",
			"p ...or you can venture down the hallway in search of another exit.",
			"p What will you do?",
			
			{"Choice":{
				"Text":	"What will you do?",
				"StayHere":{
					"Text": "I am staying RIGHT here.",
					"Do": "jump StayHere"
				},
				"Explore1":{
					"Text": "I can’t just stay put!",
					"Do": "jump Explore1"
				}
			}},


			"m barkbarlkbalrk"
		],

		"Explore1": [
			function () {
				this.storage().animations = true;
				return true;
			},

			"p You decide there's no point in waiting around.",
			"jump JourneyStart"
		],

		"StayHere": [
			function () {
				this.storage().animations = true;
				return true;
			},

			"p You decide to stay put.",
			"p You have no idea what's out there, and bumbling around will only get you more lost.",
			"p ....you wait.",
			"p And wait.",
			"p Minutes turn to hours.",
			"p Until at last, you've finally lost all sense of time.",
			
			"show character m Smug with fadeIn duration 0.5s",
			"m My, you've been here quite a while, Archivist.",
			"show character m SusTalk",
			"m Trying to catch me on a bluff?",

			"show character m Sus left with fadeIn",
			
			"show character e Glint right with fadeIn duration 0.5s",
			"e I'm not playing your game, Michael.",

			"show character m PitySmileTalk left with pulse",
			"m Ah... so, defiance, is it?",

			"show character e AttitudeTalk right with pulse",
			"e Eventually, you'll grab a new victim.",
			"show character e AttitudeSide right",
			"e And someone will open this door.",

			"show character m Doubt left with pulse",
			"m Oh, Archivist...",
			"show character m Wistful left",
			"m You think that's the only door I have?",
			"show character m PityCloseTalk left",
			"m Perhaps if you'd take a moment to look around, you'd see.",

			"show character e AttitudeSide right with fadeOut",
			"show character m PityCloseTalk left with fadeOut",
			
			"hide character m",
			"hide character e",

			"p ...Doors stretch as far as the eye can see.",
			"p You had already known this, but know they take on a whole new meaning.",
			"p Any one of them could be your escape.",
			"p But... it's even more likely that none of them are.",
			"p So... what do you do?",

			{"Choice":{
				"Text":	"What will you do?",
				"StayHere":{
					"Text": "I'm not budging.",
					"Do": "jump Stay2"
				},
				"GoExplore":{
					"Text": "Fine, I'll go.",
					"Do": "jump Explore1"
				}
			}},

			

			"jump JourneyStart"
		],


		
		"Stay2": [
			function () {
				this.storage().animations = true;
				return true;
			},

			"show character m SmugTalk with fadeIn duration 0.5s",
			"m You are VERY stubborn, Archivist...",
			"show character m Sus",
			"m But your efforts are pointless.",

			{"Choice":{
				"Text":	"Should I stay or should I go?",
				"StayHere":{
					"Text": "Nuh uh.",
					"Do": "jump Stay3"
				},
				"GoExplore":{
					"Text": "Fine, I'll go.",
					"Do": "jump Explore1"
				}
			}},

			"p You decide there's no point in waiting around.",
			"jump JourneyStart"
		],

		"Stay3": [
			function () {
				this.storage().animations = true;
				return true;
			},

			"show character m Wistful",
			"m Staying here will do nothing.",

			{"Choice":{
				"Text":	"Should I stay or should I go?",
				"StayHere":{
					"Text": "I don't care.",
					"Do": "jump Stay4"
				},
				"GoExplore":{
					"Text": "Fine, I'll go.",
					"Do": "jump Explore1"
				}
			}},

			"p You decide there's no point in waiting around.",
			"jump JourneyStart"
		],

		"Stay4": [
			function () {
				this.storage().animations = true;
				return true;
			},

			"show character m Doubt",
			"m Are you serious?",

			{"Choice":{
				"Text":	"Should I stay or should I go?",
				"StayHere":{
					"Text": "Yes. [BLEEP] you.",
					"Do": "jump Stay5"
				},
				"GoExplore":{
					"Text": "Fine, I'll go.",
					"Do": "jump Explore1"
				}
			}},

			"p You decide there's no point in waiting around.",
			"jump JourneyStart"
		],

		"Stay5": [
			function () {
				this.storage().animations = true;
				return true;
			},

			"show character m PityClose",
			"m Fine, go ahead. Whatever you want.",
			"show character m PityClose with fadeOut",
			"hide character m",
			"p ...are you sure you want to stay?",

			{"Choice":{
				"Text":	"Should I stay or should I go?",
				"StayHere":{
					"Text": "I. Will. Not. Move.",
					"Do": "jump Stay6"
				},
				"GoExplore":{
					"Text": "Fine, I'll go.",
					"Do": "jump Explore1"
				}
			}},

			"p You decide there's no point in waiting around.",
			"jump JourneyStart"
		],

		"Stay6": [
			function () {
				this.storage().animations = true;
				return true;
			},

			"show scene Skeleton with fadeIn",
			"p As you stew in stubborn defiance... you wither to bone.",
			"p You can't live without food or water, you know.",
			"p You're still human... for now at least.",
			"p But none of this matters, because you are dead now.",
			"show scene black with fadeIn",
			"centered Ending 2: World Record Sitting Champion",
			"end"
		],

		"JourneyStart": [
			function () {
				this.storage().animations = true;
				return true;
			},

			"p As you venture down the hall, you see a door that looks... odd.",
			"p Open it?",

			{"Choice":{
				"Text":	"Open the door?",
				"OpenDoor2":{
					"Text": "I gotta know!",
					"Do": "jump OpenDoor2"
				},
				"NoOpenDoor2":{
					"Text": "Absolutely not.",
					"Do": "jump NoOpenDoor2"
				}
			}},
		],

		"OpenDoor2": [
			function () {
				this.storage().animations = true;
				return true;
			},

			"show scene YellowDoorOpen with headShake duration 1s", 
			"p It... opened???",
			"p You hear an enraged voice echo from the corridors.",
			"m Wait WHAT??? HOW DID YOU-",
			"play sound DoorClose",
			"show scene YellowDoor with headShake duration 1s",
			"p ...you escaped.",
			"p You're free.",
			"p But something feels... wrong.",
			"p You feel like you left... something. In there.",
			"p Oh well. It probably wasn't that important anyways.",

			"show scene black with fadeIn",
			"centered Ending 3: Forgotten Partner",
			"end"
		],

		"NoOpenDoor2": [
			function () {
				this.storage().animations = true;
				return true;
			},

			"p You decide to keep walking ahead.",
			"p The vibes of that door seemed off anyways.",
			"p ...",
			"p In the distance, you hear a weak voice.",
			"b Someone... help...",
			"p Is that... Martin?!",
			"p Martin's here... you have to go save him!",
			"p Will you go towards the-",

			"show character b Cry2 with fadeIn duration 0.5s",
			"b I wish I could be saved...",
			"show character b Cry",
			"b But the programmer had to call it quits on the wip for today...",
			"show character b NervousEmpty",
			"b Or she'd go insane.",
			"show character b Cry2",
			"b So I guess I'm stuck here for now...",
			"show character b Cry2 with fadeOut",
			"hide character b",
			"p I have an entire 3 sets of puzzles to get to...",
			"p But this is turning out FAR too long already.",
			"p I have to assume I'm doing something incorrect.",
			"p So we will pretend that with the power of friendship, Jon and Martin escape the corridors.",
			"p ...until I work on this again tomorrow.",

			"show scene black with fadeIn",
			"centered Ending ???: FRIENDSHIP!!!!",
			"end"
			

			//{"Choice":{
			//	"Text":	"Go through the door?",
			//	"OpenDoor":{
			//		"Text": "If you insist...",
			//		"Do": "jump CorridorStart"
			//	},
			//	"NoOpenDoor":{
			//		"Text": "No means no.",
			//		"Do": "jump NoMeansNo"
			//	}
			//}},

		],


		
		"Playing":[
			function () {
				this.storage().playing = true;
				return true;
			},

		]
});
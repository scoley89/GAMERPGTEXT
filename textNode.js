const textNodes = [
  {
    // INTRO LTR
    id: 1,
    text:
      "This letter is from the Office of the Chief Minister of the Federation of Sovreign Lands. It is addressed to all young men and women of age who are proud citizens. After the proud people of the Empire of Ragnosal realized the means of their explosive industrial economic growth, they decided to spread their borders in hopes of gaining more resouces and wish to spread their 'Enlightened Civilization' to all the 'lower nations'. After an attack on the ancient Sey'ran Isle, the newly formed 'Allaince of Free Nations' forced the Federation's hands and has begrudgingly pulled us into a conflict that we had hoped to avoid. My fellow Citizen, it is with regret that I must inform you that you have been drafted and are legally REQUIRED to appear for active duty. We as a nation have long held individual choice as a principle beyond reproach and the irony of a draft is not beyond me or your superiors. In hopes of recompense, we offer you the choice of which branch of our Armed Forces you shall serve. Please provide us in person the following information about yourself regarding you Age, Gender and which branch you will choose to serve.",
    options: [
      {
        text: "I am a proud son of this fine land! My life for my people!",
        setState: { isMale: true },
        nextText: 2
      },
      {
        text: "I am brave Lady of the Federation here to serve my Country!",
        setState: { isFemale: true },
        nextText: 3
      }
    ]
  },
  {
    // CHS 1 remeber to aid name entry text bar here ^
    id: 2,
    text:
      "My sweetest Jacqueline. The timing of this horrid War could not have been set at a more remoursful time. While it is with excitment, honor, and pride that I have answered the call to arms like my brothers before me; there is no greater sorrow then being away from you at the very onset of the miracle that is our courtship. Like my eldest brother James I have choosen to serve in the best _________ this world has ever seen, so fear not my sweet those Ragnosian bastards won't know what hit them!",
    options: [
      {
        text: "Army",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedArmy: true },
        nextText: 4
      },
      {
        text: "Navy",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedNavy: true },
        nextText: 5
      },
      {
        text: "Air Force",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedAirForce: true },
        nextText: 6
      }
    ]
  },
  {
    id: 3,
    text:
      "My dearest Anthony, I am sorry that you must hear of my current state this way but telling you in person would have left my heart in shables and I fear I would not have been ablt to bring myself to go to war. I know that you of all people will understand what happens to draft dodgers and that you especially would remind me of the strength of our bond. You wish to be with a strong and capable lady who, while she may carry her self with grace and class, has the strength of will and tenacity to put those treacherous Ragnosian fools in the grave were they belong. Not even the ancient Spartonian Women can hold a candle to our feminine prowess. I know that my joining the ______ will make you proud and our eventual reunion will be that much sweeter as a consquent of our distancce and the constant worry that is bount to haunt us both while this war rages.",
    options: [
      {
        text: "Army",
        requiredState: currentState => currentState.isFemale,
        setState: { isFemale: true, joinedArmy: true },
        nextText: 7
      },
      {
        text: "Navy",
        requiredState: currentState => currentState.isFemale,
        setState: { isFemale: true, joinedNavy: true },
        nextText: 8
      },
      {
        text: "Air Force",
        requiredState: currentState => currentState.isFemale,
        setState: { isFemale: true, joinedAirForce: true },
        nextText: 9
      }
    ]
  },
  {
    id: 4,
    text: "M Ar Infn, TC, Fmm J1",
    options: [
      {
        text: "M Ar Infn",
        requiredState: currentState => currentState.isMale.joinedArmy,
        setState: { isMale: true, joinedArmy: true },
        nextText: 1234124
      },
      {
        text: "Male Ar TC",
        requiredState: currentState => currentState.isMale.joinedArmy,
        setState: { isMale: true, joinedArmy: true },
        nextText: 131423
      },
      {
        text: "Male Ar Fmm",
        requiredState: currentState => currentState.isMale.joinedArmy,
        setState: { isMale: true, joinedArmy: true },
        nextText: 134241
      }
    ]
  },
  // ____________________LAST FINISHED SLIDE MOVE THIS LINE AS YOU GO!
  {
    id: 5,
    text: "Mp Na CKACK NLEm or SMCm",
    options: [
      {
        text: "CKACK",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedNavy: true },
        nextText: 24982759298
      },
      {
        text: "NLEm",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedNavy: true },
        nextText: 51093810985
      },
      {
        text: "SMCm",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedNavy: true },
        nextText: 894723058927
      }
    ]
  },
  {
    id: 6,
    text:
      "My sweetest Jacqueline. The timing of this horrid War could not have been set at a more remoursful time. While it is with excitment, honor, and pride that I have answered the call to arms like my brothers before me; there is no greater sorrow then being away from you at the very onset of the miracle that is our courtship. Like my eldest brother James I have choosen to serve in the best _________ this world has ever seen, so fear not my sweet those Ragnosian bastards won't know what hit them!",
    options: [
      {
        text: "FILL TEXT HERE",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedArmy: true },
        nextText: 24982759298
      },
      {
        text: "FILL TEXT HERE",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedNavy: true },
        nextText: 51093810985
      },
      {
        text: "FILL TEXT HERE",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedAirForce: true },
        nextText: 894723058927
      }
    ]
  },
  {
    id: 7,
    text: "FILL TEXT HERE",
    options: [
      {
        text: "FILL TEXT HERE",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedArmy: true },
        nextText: 24982759298
      },
      {
        text: "FILL TEXT HERE",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedNavy: true },
        nextText: 51093810985
      },
      {
        text: "FILL TEXT HERE",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedAirForce: true },
        nextText: 894723058927
      }
    ]
  },
  {
    id: 7,
    text: "FILL TEXT HERE",
    options: [
      {
        text: "FILL TEXT HERE",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedArmy: true },
        nextText: 24982759298
      },
      {
        text: "FILL TEXT HERE",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedNavy: true },
        nextText: 51093810985
      },
      {
        text: "FILL TEXT HERE",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedAirForce: true },
        nextText: 894723058927
      }
    ]
  },
  {
    id: 8,
    text: "FILL TEXT HERE",
    options: [
      {
        text: "FILL TEXT HERE",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedArmy: true },
        nextText: 24982759298
      },
      {
        text: "FILL TEXT HERE",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedNavy: true },
        nextText: 51093810985
      },
      {
        text: "Air Force",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedAirForce: true },
        nextText: 894723058927
      }
    ]
  },
  {
    id: 9,
    text: "FILL TEXT HERE",
    options: [
      {
        text: "Army",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedArmy: true },
        nextText: 24982759298
      },
      {
        text: "Navy",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedNavy: true },
        nextText: 51093810985
      },
      {
        text: "Air Force",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedAirForce: true },
        nextText: 894723058927
      }
    ]
  },
  {
    id: 10,
    text: "FILL TEXT HERE",
    options: [
      {
        text: "FILL TEXT HERE",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedArmy: true },
        nextText: 24982759298
      },
      {
        text: "FILL TEXT HERE",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedNavy: true },
        nextText: 51093810985
      },
      {
        text: "FILL TEXT HERE",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedAirForce: true },
        nextText: 894723058927
      }
    ]
  },
  {
    id: 101,
    text:
      "My sweetest Jacqueline. The timing of this horrid War could not have been set at a more remoursful time. While it is with excitment, honor, and pride that I have answered the call to arms like my brothers before me; there is no greater sorrow then being away from you at the very onset of the miracle that is our courtship. Like my eldest brother James I have choosen to serve in the best _________ this world has ever seen, so fear not my sweet those Ragnosian bastards won't know what hit them!",
    options: [
      {
        text: "Army",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedArmy: true },
        nextText: 24982759298
      },
      {
        text: "Navy",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedNavy: true },
        nextText: 51093810985
      },
      {
        text: "Air Force",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedAirForce: true },
        nextText: 894723058927
      }
    ]
  },
  {
    id: 102,
    text:
      "My sweetest Jacqueline. The timing of this horrid War could not have been set at a more remoursful time. While it is with excitment, honor, and pride that I have answered the call to arms like my brothers before me; there is no greater sorrow then being away from you at the very onset of the miracle that is our courtship. Like my eldest brother James I have choosen to serve in the best _________ this world has ever seen, so fear not my sweet those Ragnosian bastards won't know what hit them!",
    options: [
      {
        text: "Army",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedArmy: true },
        nextText: 24982759298
      },
      {
        text: "Navy",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedNavy: true },
        nextText: 51093810985
      },
      {
        text: "Air Force",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedAirForce: true },
        nextText: 894723058927
      }
    ]
  },
  {
    id: 103,
    text:
      "My sweetest Jacqueline. The timing of this horrid War could not have been set at a more remoursful time. While it is with excitment, honor, and pride that I have answered the call to arms like my brothers before me; there is no greater sorrow then being away from you at the very onset of the miracle that is our courtship. Like my eldest brother James I have choosen to serve in the best _________ this world has ever seen, so fear not my sweet those Ragnosian bastards won't know what hit them!",
    options: [
      {
        text: "Army",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedArmy: true },
        nextText: 24982759298
      },
      {
        text: "Navy",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedNavy: true },
        nextText: 51093810985
      },
      {
        text: "Air Force",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedAirForce: true },
        nextText: 894723058927
      }
    ]
  },
  {
    id: 104,
    text:
      "My sweetest Jacqueline. The timing of this horrid War could not have been set at a more remoursful time. While it is with excitment, honor, and pride that I have answered the call to arms like my brothers before me; there is no greater sorrow then being away from you at the very onset of the miracle that is our courtship. Like my eldest brother James I have choosen to serve in the best _________ this world has ever seen, so fear not my sweet those Ragnosian bastards won't know what hit them!",
    options: [
      {
        text: "Army",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedArmy: true },
        nextText: 24982759298
      },
      {
        text: "Navy",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedNavy: true },
        nextText: 51093810985
      },
      {
        text: "Air Force",
        requiredState: currentState => currentState.isMale,
        setState: { isMale: true, joinedAirForce: true },
        nextText: 894723058927
      }
    ]
  }
  // ____________________________________This is the copy line____________________________________________
];

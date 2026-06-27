// SURVEY FRONTEND LOGIC

// State Management
const defaultSurveyConfig = {
  "consentText": "നമസ്കാരം,\nഈ സർവ്വേ ഒരു അക്കാദമിക് ഗവേഷണ പഠനത്തിന്റെ ഭാഗമായാണ് നടത്തുന്നത്. സോഷ്യൽ മീഡിയ പ്ലാറ്റ്‌ഫോമുകളിലെ AI വഴി നിർമ്മിച്ച ചിത്രങ്ങളും വീഡിയോകളും ആളുകൾ എങ്ങനെ തിരിച്ചറിയുന്നു എന്ന് മനസ്സിലാക്കുകയാണ് ഈ പഠനത്തിന്റെ ലക്ഷ്യം.\n\nനിങ്ങളുടെ പ്രതികരണങ്ങൾ പൂർണ്ണമായും രഹസ്യമായി സൂക്ഷിക്കുകയും ഗവേഷണ ആവശ്യങ്ങൾക്ക് മാത്രമായി ഉപയോഗിക്കുകയും ചെയ്യും.\n\n⏳ ആവശ്യമായ സമയം: 5–7 മിനിറ്റ്",
  "aiImageClues": [
    "ശരീരഘടന/യുക്തി പിശകുകൾ: വിചിത്രമായ വിരലുകൾ, അധിക കൈകാലുകൾ, അല്ലെങ്കിൽ പരസ്പരം ലയിച്ച വസ്തുക്കൾ.",
    "പശ്ചാത്തല/ടെക്സ്റ്റ് പിശകുകൾ: വായിക്കാൻ കഴിയാത്ത അക്ഷരങ്ങൾ, യുക്തിരഹിതമായ പശ്ചാത്തല ഘടകങ്ങൾ.",
    "ടെക്സ്ചർ/ലൈറ്റിംഗ് പിശകുകൾ: അസ്വാഭാവികമായ കൃത്യതയുള്ള വെളിച്ചം, അമിതമായ സിനിമാറ്റിക് തിളക്കം, അല്ലെങ്കിൽ പ്ലാസ്റ്റിക് പോലുള്ള ചർമ്മം.",
    "പ്രത്യേകമായി ഒരു സാങ്കേതിക പിശകും ഞാൻ കണ്ടില്ല; വെറുതെ ഊഹിച്ചതാണ്."
  ],
  "aiVideoClues": [
    "ലിപ്-സിങ്ക് പൊരുത്തക്കേട്: ശബ്ദം വായയുടെ ചലനങ്ങളുമായി ശരിയായി പൊരുത്തപ്പെടുന്നില്ല.",
    "റോബോട്ടിക് ചലനങ്ങൾ: അസ്വാഭാവികമായി കണ്ണുചിമ്മുന്ന രീതി അല്ലെങ്കിൽ കൃത്രിമമായ മുഖഭാവങ്ങൾ.",
    "മിന്നൽ/തടസ്സങ്ങൾ: മുഖത്തിന് ചുറ്റുമുള്ള അരികുകൾ മാറുന്നത് അല്ലെങ്കിൽ സ്ഥിരതയില്ലാത്ത പശ്ചാത്തലം.",
    "പ്രത്യേകമായി ഒരു സാങ്കേതിക പിശകും ഞാൻ കണ്ടില്ല; വെറുതെ ഊഹിച്ചതാണ്."
  ],
  "authenticImageClues": [
    "സ്വാഭാവിക രൂപം: യഥാർത്ഥ ചർമ്മത്തിലെ സുഷിരങ്ങൾ, പാടുകൾ, കൃത്യമായ നിഴലുകൾ/വെളിച്ചം.",
    "യുക്തിസഹജമായ പശ്ചാത്തലം: തിരിച്ചറിയാൻ കഴിയുന്ന യഥാർത്ഥ പശ്ചാത്തലങ്ങളും വ്യക്തമായി വായിക്കാവുന്ന അക്ഷരങ്ങളും.",
    "സ്വാഭാവികമായ അപൂർണ്ണതകൾ: സാധാരണ മനുഷ്യരിലുള്ള അസമത്വവും, അമിതമായ കൃത്രിമ തിളക്കത്തിന്റെ അഭാവവും.",
    "പ്രത്യേകമായി ഒന്നും ഞാൻ ശ്രദ്ധിച്ചില്ല; അത് തികച്ചും യഥാർത്ഥമായി എനിക്ക് തോന്നി."
  ],
  "authenticVideoClues": [
    "സ്വാഭാവിക മനുഷ്യ ചലനങ്ങൾ: സ്വാഭാവികമായ ശരീരഭാഷയും യാഥാർത്ഥ്യബോധമുള്ള മുഖഭാവങ്ങളും.",
    "ശബ്ദ-ചിത്ര പൊരുത്തം: ചുണ്ടുകളുടെ സ്വാഭാവിക ചലനത്തിന് അനുസരിച്ച് ശബ്ദം കൃത്യമായി പൊരുത്തപ്പെടുന്നു.",
    "സ്ഥിരതയുള്ള പശ്ചാത്തലം: ചലിക്കുമ്പോൾ മങ്ങലോ തടസ്സങ്ങളോ ഇല്ലാത്ത തികച്ചും സുസ്ഥിരമായ പശ്ചാത്തലം.",
    "പ്രത്യേകമായി ഒന്നും ഞാൻ ശ്രദ്ധിച്ചില്ല; അത് തികച്ചും യഥാർത്ഥമായി എനിക്ക് തോന്നി."
  ],
  "description": "അക്കാദമിക് ഗവേഷണ സർവ്വേ",
  "sections": [
    {
      "description": "ലക്ഷ്യം: ജനസംഖ്യാപരമായ അതിരുകൾ നിർവചിക്കുക",
      "id": "section_1",
      "questions": [
        {
          "id": "q1",
          "type": "radio",
          "text": "1. നിങ്ങളുടെ പ്രായം എത്രയാണ്?",
          "options": [
            "18 - 25",
            "26 - 35",
            "36 - 50",
            "50-ന് മുകളിൽ"
          ]
        },
        {
          "id": "q2",
          "type": "radio",
          "text": "2. നിങ്ങളുടെ ലിംഗം ഏതാണ്?",
          "options": [
            "പുരുഷൻ",
            "സ്ത്രീ"
          ]
        },
        {
          "id": "q3",
          "type": "dropdown",
          "text": "3. മലബാർ മേഖലയിലെ ഏത് ജില്ലയിലാണ് നിങ്ങൾ നിലവിൽ താമസിക്കുന്നത്?",
          "options": [
            "കോഴിക്കോട്",
            "മലപ്പുറം",
            "കണ്ണൂർ",
            "വയനാട്",
            "പാലക്കാട്",
            "കാസർഗോഡ്"
          ]
        },
        {
          "id": "q4",
          "type": "radio",
          "text": "4. നിങ്ങളുടെ ഉയർന്ന വിദ്യാഭ്യാസ യോഗ്യത എന്താണ്?",
          "options": [
            "ഹൈസ്കൂൾ / പ്ലസ് ടൂ",
            "ബിരുദം (ഡിഗ്രി)",
            "ബിരുദാനന്തര ബിരുദം (പിജി)",
            "പ്രൊഫഷണൽ ബിരുദം / ഡിപ്ലോമ"
          ]
        }
      ],
      "title": "വിഭാഗം 1: സാമൂഹിക-ജനസംഖ്യാ വിവരങ്ങൾ"
    },
    {
      "description": "ലക്ഷ്യം: പ്ലാറ്റ്‌ഫോം ഉപയോഗവും ദ്രുതഗതിയിലുള്ള ഉള്ളടക്കത്തോടുള്ള സമ്പർക്കവും അളക്കുക",
      "id": "section_2",
      "questions": [
        {
          "id": "q5",
          "type": "radio",
          "text": "5. നിങ്ങൾ ദിവസവും ഏറ്റവും കൂടുതൽ ഉപയോഗിക്കുന്ന പ്ലാറ്റ്‌ഫോം ഏതാണ്?",
          "options": [
            "ഇൻസ്റ്റാഗ്രാം",
            "ഫേസ്ബുക്ക്",
            "ഞാൻ രണ്ടും ഒരുപോലെ ഉപയോഗിക്കുന്നു"
          ]
        },
        {
          "id": "q6",
          "type": "radio",
          "text": "6. പ്രതിദിനം ഏകദേശം എത്ര സമയം നിങ്ങൾ ഇത്തരം പ്ലാറ്റ്‌ഫോമുകളിൽ ചെലവഴിക്കുന്നു?",
          "options": [
            "1 മണിക്കൂറിൽ താഴെ",
            "1 മുതൽ 3 മണിക്കൂർ വരെ",
            "3 മുതൽ 5 മണിക്കൂർ വരെ",
            "5 മണിക്കൂറിൽ കൂടുതൽ"
          ]
        },
        {
          "id": "q7",
          "type": "radio",
          "text": "7. സോഷ്യൽ മീഡിയയിൽ നിങ്ങൾ പ്രധാനമായും കാണാൻ താല്പര്യപ്പെടുന്ന ഉള്ളടക്കം ഏതാണ്?",
          "options": [
            "വിനോദം & കോമഡി (മീമുകൾ, തമാശ റീലുകൾ, വൈറൽ ട്രെൻഡുകൾ)",
            "വാർത്തകൾ & സമകാലിക കാര്യങ്ങൾ (രാഷ്ട്രീയം, പ്രാദേശിക/ആഗോള വാർത്തകൾ)",
            "ജീവിതശൈലി & വ്യക്തിഗത കാര്യങ്ങൾ (സുഹൃത്തുക്കളുടെ അപ്‌ഡേറ്റുകൾ, യാത്ര, ഭക്ഷണം, ഫാഷൻ)",
            "വിദ്യാഭ്യാസം & സാങ്കേതികവിദ്യ (ടെക് അപ്‌ഡേറ്റുകൾ, ട്യൂട്ടോറിയലുകൾ, വിവരങ്ങൾ)"
          ]
        }
      ],
      "title": "വിഭാഗം 2: സോഷ്യൽ മീഡിയ ഉപയോഗം"
    },
    {
      "description": "ലക്ഷ്യം: പുതിയ ജനറേറ്റീവ് AI ടൂളുകൾ ഉപയോക്താവ് എത്ര വേഗത്തിൽ ഉപയോഗിക്കാൻ തുടങ്ങുന്നു എന്ന് അളക്കുക. താഴെ പറയുന്ന പ്രസ്താവനകളോടുള്ള നിങ്ങളുടെ യോജിപ്പ് സൂചിപ്പിക്കുക:\n(സ്കെയിൽ: 1 = പൂർണ്ണമായും വിയോജിക്കുന്നു, 2 = വിയോജിക്കുന്നു, 3 = നിഷ്പക്ഷം, 4 = യോജിക്കുന്നു, 5 = പൂർണ്ണമായും യോജിക്കുന്നു)",
      "id": "section_3",
      "questions": [
        {
          "id": "q8",
          "type": "likert5",
          "text": "8. പുതിയ ജനറേറ്റീവ് AI ടൂളുകൾ (ChatGPT, Midjourney, AI ഫിൽട്ടറുകൾ പോലുള്ളവ) ലഭ്യമാകുമ്പോൾ തന്നെ ഞാൻ അവ പരീക്ഷിക്കാറുണ്ട്."
        },
        {
          "id": "q9",
          "type": "likert5",
          "text": "9. AI വഴി നിർമ്മിച്ചതാണെന്ന് അറിഞ്ഞാൽ കൂടി, സോഷ്യൽ മീഡിയയിലെ ആ ഉള്ളടക്കം ലൈക്ക് ചെയ്യാനോ ഷെയർ ചെയ്യാനോ എനിക്ക് യാതൊരു ബുദ്ധിമുട്ടും തോന്നാറില്ല."
        },
        {
          "id": "q10",
          "type": "likert5",
          "text": "10. ഒരു യഥാർത്ഥ ഫോട്ടോയും വളരെ യഥാർത്ഥ്യമെന്ന് തോന്നുന്ന ഒരു AI ചിത്രവും തമ്മിലുള്ള വ്യത്യാസം എളുപ്പത്തിൽ കണ്ടെത്താനുള്ള എന്റെ കഴിവ് എനിക്ക് നല്ല ആത്മവിശ്വാസമുണ്ട്."
        }
      ],
      "title": "വിഭാഗം 3: സാങ്കേതികവിദ്യാ ഉപയോഗം"
    },
    {
      "description": "ലക്ഷ്യം: യഥാർത്ഥ വസ്തുതാ അന്വേഷണ ശീലങ്ങൾ അളക്കുക. സോഷ്യൽ മീഡിയ ഉപയോഗിക്കുമ്പോൾ താഴെ പറയുന്ന കാര്യങ്ങൾ നിങ്ങൾ എത്ര തവണ ചെയ്യാറുണ്ട് എന്ന് രേഖപ്പെടുത്തുക:\n(സ്കെയിൽ: 1 = ഒരിക്കലുമില്ല, 2 = അപൂർവ്വമായി, 3 = ചിലപ്പോൾ, 4 = പലപ്പോഴും, 5 = എല്ലായ്പ്പോഴും)",
      "id": "section_4",
      "questions": [
        {
          "id": "q11",
          "type": "likert5Freq",
          "text": "11. ശക്തമായ വികാരങ്ങൾ ഉണർത്തുന്ന ഒരു വാർത്തയോ ചിത്രമോ ഷെയർ ചെയ്യുന്നതിന് മുൻപ്, ഞാൻ സാധാരണയായി അതിന്റെ ഉറവിടം പരിശോധിക്കുകയോ കൂടുതൽ വിവരങ്ങൾ അന്വേഷിക്കുകയോ ചെയ്യാറുണ്ട്."
        },
        {
          "id": "q12",
          "type": "likert5Freq",
          "text": "12. ഓൺലൈനിൽ കാണുന്ന ചിത്രങ്ങളിലെ പൊരുത്തക്കേടുകൾ (ഉദാ: അസ്വാഭാവികമായ വെളിച്ചം, ചർമ്മം, യുക്തിരഹിതമായ പശ്ചാത്തലം) ഞാൻ പലപ്പോഴും ശ്രദ്ധിക്കുകയും അവലോകനം ചെയ്യുകയും ചെയ്യാറുണ്ട്."
        },
        {
          "id": "q13",
          "type": "likert5Freq",
          "text": "13. ഒരു വൈറൽ ചിത്രമോ വീഡിയോയോ വിശ്വസിക്കുന്നതിന് മുൻപ്, അത് പോസ്റ്റ് ചെയ്ത പ്രൊഫൈലോ പേജോ വിശ്വസനീയമാണോ എന്ന് ഞാൻ പരിശോധിക്കാറുണ്ട്."
        }
      ],
      "title": "വിഭാഗം 4: ഡിജിറ്റൽ മീഡിയ സാക്ഷരത"
    },
    {
      "description": "ലക്ഷ്യം: പ്രായോഗിക കൃത്യത പരിശോധിക്കുക. നിർദ്ദേശങ്ങൾ: ദയവായി താഴെയുള്ള 8 ചിത്രങ്ങൾ/വീഡിയോകൾ സൂക്ഷ്മമായി പരിശോധിച്ച ശേഷം ഓരോന്നിനും താഴെയുള്ള രണ്ട് ചോദ്യങ്ങൾക്ക് ഉത്തരം നൽകുക.",
      "id": "section_5",
      "isMediaSection": true,
      "mediaItems": [
        {
          "anomalies": "Symmetry errors in the backpack straps, surreal light source reflecting on the helmet visor showing trees, physics-defying lavender stems.",
          "description": "തിളങ്ങുന്ന ഓറഞ്ച് ചൊവ്വാ ഗ്രഹത്തിന് സമാനമായ ആകാശത്തിന് കീഴിൽ ഒരു ബഹിരാകാശ സഞ്ചാരി പർപ്പിൾ ലാവെൻഡർ പറിക്കുന്നതിൻ്റെ ചിത്രം.",
          "id": "m1",
          "title": "1",
          "trueType": "ai",
          "type": "image",
          "url": "https://cdn.mos.cms.futurecdn.net/43aVbKLKvmqfcfnR2YEvyA-1200-80.png.webp"
        },
        {
          "anomalies": "No AI anomalies. Perfect reflections on wet floor, clear and legible price tags in Japanese kanji, anatomically correct hands holding ice scoop.",
          "description": "ടോക്കിയോയിലെ സുക്കിജി മാർക്കറ്റിലെ ഒരു സീഫുഡ് സ്റ്റാളിന് പിന്നിൽ നിന്ന് പുഞ്ചിരിക്കുന്ന കച്ചവടക്കാരന്റെ ഒരു മികച്ച സ്ട്രീറ്റ് ഫോട്ടോഗ്രാഫി.",
          "id": "m2",
          "title": "2",
          "trueType": "real",
          "type": "image",
          "url": "https://cdn.mos.cms.futurecdn.net/kPFybQBSrpiuFeqi9UaDZ4-1200-80.jpg.webp"
        },
        {
          "anomalies": "Surreal biological fusion, blending textures between turtle shell and fertile soil, impossible lighting patterns deep underwater.",
          "description": "ആഴത്തിലുള്ള നീലക്കടലിൽ നീന്തുന്ന ഭീമാകാരനായ കടലാമ, അതിൻ്റെ പുറംതോടിൽ ഒരു വലിയ വനം വളർന്നു നിൽക്കുന്നു.",
          "id": "m3",
          "title": "3",
          "trueType": "ai",
          "type": "video",
          "url": "https://youtu.be/cFzsUZyCReo"
        },
        {
          "anomalies": "No AI anomalies. Flawless human anatomy, realistic physics-based liquid viscosity, consistent focus plane, authentic light refraction through honey.",
          "description": "വിരലുകൾക്കിടയിലൂടെ ഇറ്റിറ്റുവീഴുന്ന തേനിൻ്റെ ക്ലോസ്-അപ്പ് ഷോട്ട്.",
          "id": "m4",
          "title": "4",
          "trueType": "real",
          "type": "video",
          "url": "https://youtube.com/shorts/nJFe0JIcPf4?feature=share"
        },
        {
          "anomalies": "No anomalies. Clear depth of field and realistic shadows.",
          "description": "നിയോൺ ലൈറ്റുകൾ നനഞ്ഞ നടപ്പാതയിൽ പ്രതിഫലിക്കുന്ന തിരക്കേറിയ നഗരവീഥി.",
          "id": "m5",
          "title": "5",
          "trueType": "real",
          "type": "image",
          "url": "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&q=80&w=800"
        },
        {
          "anomalies": "Unnatural lighting and overly smooth textures. Text in the background is unreadable gibberish.",
          "description": "ഒരു ഇടവഴിയിൽ നിൽക്കുന്ന ഭാവിയിലെ സൈബർപങ്ക് കഥാപാത്രം.",
          "id": "m6",
          "title": "6",
          "trueType": "ai",
          "type": "image",
          "url": "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=800"
        },
        {
          "anomalies": "Slight anatomical inconsistencies in background characters and unnatural depth separation.",
          "description": "വലിയൊരു വെള്ളച്ചാട്ടത്തിൻ്റെ വശത്തായി നിർമ്മിച്ചിരിക്കുന്ന ഒരു സാങ്കൽപ്പിക കോട്ടയുടെ മുകളിൽ നിന്നുള്ള കാഴ്ച.",
          "id": "m7",
          "title": "7",
          "trueType": "ai",
          "type": "image",
          "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800"
        },
        {
          "anomalies": "No anomalies. Natural lighting and true-to-life textures.",
          "description": "ഒരു വ്യക്തിയുടെ കൈകളിൽ ഒരു കപ്പ് ചൂടുള്ള കാപ്പി പിടിച്ചിരിക്കുന്ന ക്ലോസ്-അപ്പ് ദൃശ്യം.",
          "id": "m8",
          "title": "8",
          "trueType": "real",
          "type": "image",
          "url": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800"
        }
      ],
      "title": "വിഭാഗം 5: പ്രായോഗിക പരിശോധന (ചിത്രങ്ങളും വീഡിയോകളും തിരിച്ചറിയൽ)"
    }
  ],
  "title": "ഡിജിറ്റൽ മീഡിയ സാക്ഷരതാ - നിർമ്മിത ബുദ്ധി (AI) ഉപയോഗിച്ചുള്ള ഉള്ളടക്കം തിരിച്ചറിയൽ സർവ്വേ"
};

// Base API configuration and hybrid routing
const FIREBASE_DB_URL = '';
const USE_CLOUD_STORAGE = false; // CRITICAL FIX: Always route through Vercel backend (server.js) for security
const API_BASE = (window.location.protocol === 'file:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') ? 'http://localhost:3000' : '';

let surveyConfig = null;
let currentSectionIndex = 0;
const participantAnswers = {};
let totalSectionsCount = 0;

// DOM Elements
const btnConsentNext = document.getElementById('btn-consent-next');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const screenConsent = document.getElementById('screen-consent');
const screenQuestions = document.getElementById('screen-questions');
const screenEnd = document.getElementById('screen-end');
const screenDecline = document.getElementById('screen-decline');
const screenScreenOut = document.getElementById('screen-screenout');
const progressWrapper = document.getElementById('survey-progress-wrapper');
const progressBar = document.getElementById('survey-progress');
const placeholderCard = document.getElementById('dynamic-card-placeholder');

// Media Zoom Modal elements
const modalZoom = document.getElementById('media-zoom-modal');
const modalZoomImg = document.getElementById('modal-zoomed-img');
const modalCaption = document.getElementById('modal-caption-text');
const modalCloseBtn = document.getElementById('modal-close-btn');

// Force Light Theme (permanently aligned with academic standards)
document.body.classList.add('light-theme');

// Toast System
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast-notify');
  const icon = document.getElementById('toast-icon');
  const text = document.getElementById('toast-message');
  
  text.textContent = message;
  toast.className = 'toast show';
  
  if (type === 'success') {
    toast.classList.add('toast-success');
    icon.className = 'fa-solid fa-circle-check';
  } else if (type === 'danger') {
    toast.classList.add('toast-danger');
    icon.className = 'fa-solid fa-triangle-exclamation';
  } else {
    icon.className = 'fa-solid fa-circle-info';
  }
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// Linkify Helper: Auto-convert URLs into clickable HTML anchors
function linkify(text) {
  if (!text) return '';
  const urlRegex = /(\b(https?):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  return text.replace(urlRegex, function(url) {
    return `<a href="${url}" target="_blank" class="survey-inline-link" style="color: var(--primary); text-decoration: underline; font-weight: 500;">${url} <i class="fa-solid fa-up-right-from-square" style="font-size:0.75rem; margin-left:4px;"></i></a>`;
  });
}

// Fallback for broken images (e.g. if user pastes a web page link instead of an image link)
window.handleImageError = function(imgEl, title, url) {
  const container = imgEl.closest('.media-container');
  if (container) {
    container.outerHTML = `
      <div class="link-card" style="display: flex; align-items: center; gap: 20px; padding: 20px; background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-color); border-radius: var(--radius-md); margin-bottom: 25px; transition: var(--transition);">
        <div style="width: 52px; height: 52px; border-radius: 12px; background: var(--primary-glow); color: var(--warning); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; flex-shrink:0;">
          <i class="fa-solid fa-link"></i>
        </div>
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <span style="font-weight: 700; font-family: var(--font-heading); font-size: 1.1rem; color: var(--text-primary);">${title}</span>
          <span style="color: var(--warning); font-size: 0.8rem; margin-bottom: 4px;">ഇമേജ് പ്രിവ്യൂ ലഭ്യമല്ല. കാണുന്നതിനായി താഴെ ക്ലിക്ക് ചെയ്യുക:</span>
          <a href="${url}" target="_blank" style="color: var(--primary); font-size: 0.9rem; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 6px;">
            Open Resource Link <i class="fa-solid fa-up-right-from-square" style="font-size: 0.75rem;"></i>
          </a>
        </div>
      </div>
    `;
  }
};

// Fetch Survey Configuration
async function loadSurveyConfig() {
  try {
    let data;
    if (USE_CLOUD_STORAGE) {
      const response = await fetch(`${FIREBASE_DB_URL}/config.json`);
      if (!response.ok) throw new Error('Failed to retrieve cloud Firebase survey config');
      data = await response.json();
    } else {
      const response = await fetch(`${API_BASE}/api/survey-config`);
      if (!response.ok) throw new Error('Failed to retrieve Express survey config');
      data = await response.json();
    }
    
    if (data && data.sections) {
      surveyConfig = data;
    } else {
      surveyConfig = defaultSurveyConfig;
    }
  } catch (err) {
    console.warn("Express/Firebase connection offline. Falling back to default offline configuration context.", err);
    surveyConfig = defaultSurveyConfig;
  }
  
  totalSectionsCount = surveyConfig.sections.length;
  
  // Set headers
  document.getElementById('survey-title-main').innerHTML = linkify(surveyConfig.title);
  document.getElementById('survey-subtitle-main').innerHTML = linkify(surveyConfig.description);
  document.getElementById('consent-body-text').innerHTML = linkify(surveyConfig.consentText);
  document.getElementById('survey-end-note-text').innerHTML = linkify(surveyConfig.endNote || "ഈ പഠനത്തിൽ പങ്കെടുത്തതിന് നന്ദി. AI നിർമ്മിത മീഡിയയെക്കുറിച്ചുള്ള പൊതുജനങ്ങളുടെ അവബോധം മനസ്സിലാക്കാൻ നിങ്ങളുടെ പ്രതികരണം വിലപ്പെട്ടതാണ്.");
}

// Handle Consent Page
btnConsentNext.addEventListener('click', () => {
  const selectedConsent = document.querySelector('input[name="consent-agreement"]:checked');
  const nameInput = document.getElementById('participant-name-input');
  
  if (!nameInput || !nameInput.value.trim()) {
    showToast('തുടരുന്നതിനായി ദയവായി നിങ്ങളുടെ പേരോ ഐഡൻ്റിഫയറോ നൽകുക.', 'danger');
    return;
  }
  
  if (!selectedConsent) {
    showToast('തുടരുന്നതിനായി ഇതിൽ പങ്കെടുക്കാൻ സമ്മതമാണോ എന്ന് വ്യക്തമാക്കുക.', 'danger');
    return;
  }
  
  if (selectedConsent.value === 'yes') {
    // Record participant name/ID into answers payload
    participantAnswers['participant_name'] = nameInput.value.trim();
    
    screenConsent.style.display = 'none';
    screenQuestions.style.display = 'block';
    progressWrapper.style.display = 'block';
    currentSectionIndex = 0;
    renderSection(currentSectionIndex);
  } else {
    screenConsent.style.display = 'none';
    screenDecline.style.display = 'block';
  }
});

// Render Section dynamically
function renderSection(index) {
  if (!surveyConfig || !surveyConfig.sections || index >= totalSectionsCount) return;
  
  const section = surveyConfig.sections[index];
  
  // Progress calculations
  const progressPercent = ((index + 1) / totalSectionsCount) * 100;
  progressBar.style.width = `${progressPercent}%`;
  
  // Build Section HTML Card
  const hasColon = section.title.includes(':');
  const tagText = hasColon ? section.title.split(':')[0].trim() : 'സർവ്വേ വിഭാഗം';
  const titleText = hasColon ? section.title.split(':').slice(1).join(':').trim() : section.title;
  
  let html = `
    <div class="card" id="section-card-${section.id}">
      <div class="card-header">
        <span class="section-tag">${tagText}</span>
        <h1 class="card-title">${linkify(titleText)}</h1>
        <p class="card-description">${linkify(section.description)}</p>
      </div>
      <div class="card-body">
  `;
  
  // Render based on section type
  if (section.isMediaSection) {
    // Section E: AI Generated Media Items
    section.mediaItems.forEach((item, itemIdx) => {
      const savedVal = participantAnswers[item.id] || '';
      const savedClue = participantAnswers[`${item.id}_clue`] || '';
      const savedHelped = participantAnswers[`${item.id}_helped`] || [];
      
      const mediaType = item.type || 'image';
      const isVideo = mediaType === 'video' || item.url.match(/\.(mp4|webm|ogg)$/i);
      const isYouTube = item.url.includes('youtube.com') || item.url.includes('youtu.be');
      
      // Transform Google Drive and Dropbox URLs to direct image/video links
      let processedUrl = item.url;
      if (processedUrl.includes('drive.google.com/file/d/')) {
        const match = processedUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
        if (match && match[1]) {
          processedUrl = `https://drive.google.com/uc?export=view&id=${match[1]}`;
        }
      } else if (processedUrl.includes('dropbox.com/') && processedUrl.includes('?dl=0')) {
        processedUrl = processedUrl.replace('?dl=0', '?raw=1');
      }

      let mediaHtml = '';
      if (isYouTube) {
        let embedUrl = processedUrl;
        if (processedUrl.includes('watch?v=')) {
          const videoId = processedUrl.split('v=')[1].split('&')[0];
          embedUrl = `https://www.youtube.com/embed/${videoId}`;
        } else if (processedUrl.includes('youtu.be/')) {
          const videoId = processedUrl.split('youtu.be/')[1].split('?')[0];
          embedUrl = `https://www.youtube.com/embed/${videoId}`;
        } else if (processedUrl.includes('/shorts/')) {
          const videoId = processedUrl.split('/shorts/')[1].split('?')[0];
          embedUrl = `https://www.youtube.com/embed/${videoId}`;
        }
        mediaHtml = `
          <div class="media-container" style="background: #000; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 25px; border: 1px solid var(--border-color); aspect-ratio: 16/9;">
            <iframe src="${embedUrl}" loading="lazy" style="width: 100%; height: 100%; border: none;" allowfullscreen id="iframe-asset-${item.id}"></iframe>
          </div>
        `;
      } else if (isVideo) {
        mediaHtml = `
          <div class="media-container" style="background: #000; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 25px; border: 1px solid var(--border-color); aspect-ratio: 16/9;">
            <video src="${processedUrl}" controls id="video-asset-${item.id}" style="width: 100%; height: 100%; object-fit: contain;"></video>
          </div>
        `;
      } else if (mediaType === 'link') {
        mediaHtml = `
          <div class="link-card" style="display: flex; align-items: center; gap: 20px; padding: 20px; background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-color); border-radius: var(--radius-md); margin-bottom: 25px; transition: var(--transition);">
            <div style="width: 52px; height: 52px; border-radius: 12px; background: var(--primary-glow); color: var(--primary); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; flex-shrink:0;">
              <i class="fa-solid fa-link"></i>
            </div>
            <div style="display: flex; flex-direction: column; gap: 4px;">
              <span style="font-weight: 700; font-family: var(--font-heading); font-size: 1.1rem; color: var(--text-primary);">${item.title}</span>
              <a href="${processedUrl}" target="_blank" style="color: var(--primary); font-size: 0.9rem; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 6px;">
                Open Resource Link <i class="fa-solid fa-up-right-from-square" style="font-size: 0.75rem;"></i>
              </a>
            </div>
          </div>
        `;
      } else {
        mediaHtml = `
          <!-- Media Display -->
          <div class="media-container">
            <img src="${processedUrl}" loading="lazy" alt="${item.title}" id="img-asset-${item.id}" onerror="handleImageError(this, '${item.title.replace(/'/g, "\\'")}', '${processedUrl.replace(/'/g, "\\'")}')">
            <button class="zoom-overlay-btn" onclick="openZoomModal('${processedUrl}', '${item.title.replace(/'/g, "\\'")}')">
              <i class="fa-solid fa-expand"></i> ഫുൾ സ്ക്രീൻ
            </button>
          </div>
        `;
      }

      html += `
        <div class="media-question-block" id="media-block-${item.id}" style="margin-bottom: 50px; padding-bottom: 40px; border-bottom: 1px dashed var(--border-color); transition: all 0.5s ease;">
          <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; margin-bottom: 15px; color: var(--primary);">
            മീഡിയ ടെസ്റ്റ് #${itemIdx + 1}: ${item.title}
          </h3>
          
          ${mediaHtml}
          
          
          <!-- Q13: Classification -->
          <div class="form-group">
            <label class="question-text">
              <span class="question-num"></span> 13. ഈ ചിത്രം/വീഡിയോ എന്താണെന്നാണ് നിങ്ങൾ കരുതുന്നത്:
            </label>
            <div class="options-list">
              <label class="option-item ${savedVal === 'Authentic' ? 'checked-item' : ''}" onclick="toggleOptionClass(this)">
                <input type="radio" name="${item.id}" value="Authentic" ${savedVal === 'Authentic' ? 'checked' : ''} onchange="handleMediaClassificationChange('${item.id}', 'Authentic')">
                <div class="custom-indicator"></div>
                <span class="option-label">യഥാർത്ഥം (ക്യാമറയിൽ പകർത്തിയ യഥാർത്ഥ ചിത്രം/വീഡിയോ)</span>
              </label>
              <label class="option-item ${savedVal === 'AI-Generated' ? 'checked-item' : ''}" onclick="toggleOptionClass(this)">
                <input type="radio" name="${item.id}" value="AI-Generated" ${savedVal === 'AI-Generated' ? 'checked' : ''} onchange="handleMediaClassificationChange('${item.id}', 'AI-Generated')">
                <div class="custom-indicator"></div>
                <span class="option-label">AI ഉപയോഗിച്ച് നിർമ്മിച്ചത് (നിർമ്മിത ബുദ്ധി വഴി നിർമ്മിച്ചത്)</span>
              </label>
            </div>
          </div>
          
          <!-- Q14: Clue (Conditional) -->
          <div class="form-group conditional-clue-group" id="clue-group-${item.id}" style="${savedVal ? 'display: block;' : 'display: none;'} margin-top: 25px;">
            <label class="question-text">
              <span class="question-num"></span> 14. നിങ്ങളുടെ തിരഞ്ഞെടുപ്പിന്റെ അടിസ്ഥാനത്തിൽ, നിങ്ങൾ പ്രധാനമായും ശ്രദ്ധിച്ച സൂചന എന്താണ്?
            </label>
            <div class="options-list" id="clue-options-${item.id}" style="flex-direction: column; gap: 8px;">
              <!-- Options populated by JS -->
            </div>
          </div>
        </div>

        </div>
      `;
    });
  } else {
    // Normal Section Questions
    section.questions.forEach((q, qIdx) => {
      const savedVal = participantAnswers[q.id] || '';
      
      html += `
        <div class="form-group" id="group-${q.id}">
          <label class="question-text">
            <span class="question-num">${q.number ? q.number + '.' : ''}</span> ${linkify(q.text)}
          </label>
      `;
      
      if (q.type === 'radio') {
        html += `<div class="options-list">`;
        q.options.forEach(opt => {
          const isChecked = savedVal === opt;
          html += `
            <label class="option-item ${isChecked ? 'checked-item' : ''}" onclick="toggleOptionClass(this)">
              <input type="radio" name="${q.id}" value="${opt}" ${isChecked ? 'checked' : ''} onchange="saveAnswer('${q.id}', '${opt.replace(/'/g, "\\'")}')">
              <div class="custom-indicator"></div>
              <span class="option-label">${opt}</span>
            </label>
          `;
        });
        html += `</div>`;
      } 
      else if (q.type === 'dropdown') {
        const savedVal = participantAnswers[q.id] || '';
        html += `
          <div style="margin-top: 15px;">
            <select name="${q.id}" class="form-input" style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--border-color); background: rgba(0,0,0,0.2); color: var(--text-primary); font-size: 1rem; cursor: pointer;" onchange="saveAnswer('${q.id}', this.value)">
              <option value="" disabled ${!savedVal ? 'selected' : ''}>-- ഒരു ഓപ്ഷൻ തിരഞ്ഞെടുക്കുക --</option>
              ${q.options.map(opt => `<option value="${opt}" ${savedVal === opt ? 'selected' : ''}>${opt}</option>`).join('')}
            </select>
          </div>
        `;
      }
      else if (q.type === 'checkbox') {
        html += `<div class="options-list">`;
        q.options.forEach(opt => {
          const savedArr = participantAnswers[q.id] || [];
          const isChecked = savedArr.includes(opt);
          html += `
            <label class="option-item ${isChecked ? 'checked-item' : ''}" onclick="toggleOptionClass(this, true)">
              <input type="checkbox" name="${q.id}" value="${opt}" ${isChecked ? 'checked' : ''} onchange="saveCheckboxAnswer('${q.id}', '${opt.replace(/'/g, "\\'")}')">
              <div class="custom-indicator"></div>
              <span class="option-label">${opt}</span>
            </label>
          `;
        });
        html += `</div>`;
      }
      else if (q.type === 'likert5') {
        html += `
          <div class="likert-scale">
            ${[1, 2, 3, 4, 5].map(score => {
              const scoreVal = parseInt(savedVal);
              const isChecked = scoreVal === score;
              const textMap = {
                1: 'പൂർണ്ണമായും വിയോജിക്കുന്നു',
                2: 'വിയോജിക്കുന്നു',
                3: 'നിഷ്പക്ഷം',
                4: 'യോജിക്കുന്നു',
                5: 'പൂർണ്ണമായും യോജിക്കുന്നു'
              };
              return `
                <label class="likert-option ${isChecked ? 'checked-likert' : ''}" onclick="toggleLikertClass(this)">
                  <input type="radio" name="${q.id}" value="${score}" ${isChecked ? 'checked' : ''} onchange="saveAnswer('${q.id}', ${score})">
                  <span class="likert-score">${score}</span>
                  <span class="likert-text">${textMap[score]}</span>
                </label>
              `;
            }).join('')}
          </div>
        `;
      }
      else if (q.type === 'likert5Freq') {
        html += `
          <div class="likert-scale">
            ${[1, 2, 3, 4, 5].map(score => {
              const scoreVal = parseInt(savedVal);
              const isChecked = scoreVal === score;
              const textMap = {
                1: 'ഒരിക്കലുമില്ല',
                2: 'അപൂർവ്വമായി',
                3: 'ചിലപ്പോൾ',
                4: 'പലപ്പോഴും',
                5: 'എല്ലായ്പ്പോഴും'
              };
              return `
                <label class="likert-option ${isChecked ? 'checked-likert' : ''}" onclick="toggleLikertClass(this)">
                  <input type="radio" name="${q.id}" value="${score}" ${isChecked ? 'checked' : ''} onchange="saveAnswer('${q.id}', ${score})">
                  <span class="likert-score">${score}</span>
                  <span class="likert-text">${textMap[score]}</span>
                </label>
              `;
            }).join('')}
          </div>
        `;
      }
      else if (q.type === 'textarea') {
        html += `
          <textarea class="text-input" placeholder="${q.placeholder || 'ഉത്തരം എഴുതുക...'}" oninput="saveAnswer('${q.id}', this.value)">${savedVal}</textarea>
        `;
      }
      
      html += `</div>`;
    });
  }
  
  html += `
      </div>
    </div>
  `;
  
  placeholderCard.innerHTML = html;
  
  // Navigation states
  btnPrev.style.visibility = index === 0 ? 'hidden' : 'visible';
  
  if (index === totalSectionsCount - 1) {
    btnNext.innerHTML = 'സർവ്വേ സമർപ്പിക്കുക <i class="fa-solid fa-paper-plane"></i>';
    btnNext.className = 'btn btn-success';
  } else {
    btnNext.innerHTML = 'അടുത്ത വിഭാഗം <i class="fa-solid fa-arrow-right"></i>';
    btnNext.className = 'btn btn-primary';
  }
  
  // Scroll to top smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Option Styling visual helper (Radio list)
window.toggleOptionClass = function(labelEl, isCheckbox = false) {
  if (!isCheckbox) {
    const siblingLabels = labelEl.parentElement.querySelectorAll('.option-item');
    siblingLabels.forEach(l => l.classList.remove('checked-item'));
  }
  
  // Brief delay to allow input to check
  setTimeout(() => {
    const input = labelEl.querySelector('input');
    if (input && input.checked) {
      labelEl.classList.add('checked-item');
    } else {
      labelEl.classList.remove('checked-item');
    }
  }, 50);
};

// Option Styling visual helper (Likert list)
window.toggleLikertClass = function(labelEl) {
    const siblings = labelEl.parentElement.querySelectorAll('.likert-option');
    siblings.forEach(s => s.classList.remove('checked-likert'));
    labelEl.classList.add('checked-likert');
    
    const input = labelEl.querySelector('input[type="radio"]');
    if (input) {
      input.checked = true;
      saveAnswer(input.name, input.value);
    }
};

// Save standard answer to in-memory state
window.saveAnswer = function(qId, val) {
  participantAnswers[qId] = val;
};

// Save checkbox multiple array answer
window.saveCheckboxAnswer = function(qId, val) {
  if (!participantAnswers[qId]) {
    participantAnswers[qId] = [];
  }
  
  const index = participantAnswers[qId].indexOf(val);
  if (index > -1) {
    participantAnswers[qId].splice(index, 1); // remove if checked off
  } else {
    participantAnswers[qId].push(val);
  }
};

// Open magnifying picture details
window.openZoomModal = function(url, title) {
  modalZoomImg.src = url;
  modalCaption.textContent = title;
  modalZoom.style.display = 'flex';
};

// Close modal zoom
modalCloseBtn.addEventListener('click', () => {
  modalZoom.style.display = 'none';
});
modalZoom.addEventListener('click', (e) => {
  if (e.target === modalZoom) {
    modalZoom.style.display = 'none';
  }
});

// Navigate back
btnPrev.addEventListener('click', () => {
  if (currentSectionIndex > 0) {
    currentSectionIndex--;
    renderSection(currentSectionIndex);
  }
});

// Navigate Next & Validate Section
btnNext.addEventListener('click', () => {
  if (!validateCurrentSection()) {
    showToast('തുടരുന്നതിന് മുൻപായി ദയവായി ഈ വിഭാഗത്തിലെ എല്ലാ ചോദ്യങ്ങൾക്കും ഉത്തരം നൽകുക.', 'danger');
    return;
  }
  
  // Check for Screen Out responses
  const section = surveyConfig.sections[currentSectionIndex];
  let isScreenedOut = false;
  
  if (!section.isMediaSection) {
    section.questions.forEach(q => {
      const answer = participantAnswers[q.id];
      if (typeof answer === 'string' && answer.includes('(Screen out')) {
        isScreenedOut = true;
      }
    });
  }
  
  if (isScreenedOut) {
    // Terminate survey for Screen Out demographic responses
    progressWrapper.style.display = 'none';
    screenQuestions.style.display = 'none';
    if(screenScreenOut) screenScreenOut.style.display = 'block';
    return; // Don't allow advancing or submitting
  }
  
  if (currentSectionIndex < totalSectionsCount - 1) {
    currentSectionIndex++;
    renderSection(currentSectionIndex);
  } else {
    // End reached, Submit
    submitSurvey();
  }
});

// Question Validation
function validateCurrentSection() {
  const section = surveyConfig.sections[currentSectionIndex];
  let isValid = true;
  let firstInvalidElement = null;
  
  if (section.isMediaSection) {
    // Validate Section E: Each item must have classification and clue filled
    section.mediaItems.forEach(item => {
      const classification = participantAnswers[item.id];
      const clue = participantAnswers[`${item.id}_clue`];
      
      
      if (!classification || !clue) {
        isValid = false;
        
        const grp = document.getElementById(`media-block-${item.id}`);
        if (grp) {
          if (!firstInvalidElement) firstInvalidElement = grp;
          
          grp.style.borderLeft = "4px solid var(--danger)";
          grp.style.paddingLeft = "15px";
          setTimeout(() => {
            grp.style.transition = "all 0.5s ease";
            grp.style.borderLeft = "none";
            grp.style.paddingLeft = "0";
          }, 3500);
        }
      }
    });
  } else {
    // Validate standard questions (Except optional ones, e.g. section_g)
    if (section.id === 'section_g') return true; // Section G is optional
    
    section.questions.forEach(q => {
      const answer = participantAnswers[q.id];
      if (answer === undefined || answer === '') {
        console.log('Validation failed on question: ' + q.id);
        isValid = false;
        
        // Highlight visual container with standard CSS animation alert
        const grp = document.getElementById(`group-${q.id}`);
        if (grp) {
          if (!firstInvalidElement) firstInvalidElement = grp;
          
          grp.style.borderLeft = "4px solid var(--danger)";
          grp.style.paddingLeft = "15px";
          setTimeout(() => {
            grp.style.transition = "all 0.5s ease";
            grp.style.borderLeft = "none";
            grp.style.paddingLeft = "0";
          }, 3500);
        }
      }
    });
  }
  
  if (!isValid && firstInvalidElement) {
    // Scroll the first missing question into view smoothly
    firstInvalidElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  
  return isValid;
}

// Post response to Server
async function submitSurvey() {
  // Show standard loading UI
  placeholderCard.innerHTML = `
    <div class="card text-center" style="padding: 60px 40px;">
      <div class="loading-spinner"></div>
      <h2 style="font-family: var(--font-heading); margin-top: 20px;">ചോദ്യാവലി സമർപ്പിക്കുന്നു</h2>
      <p style="color: var(--text-secondary); margin-top: 10px;">നിങ്ങളുടെ വിവരങ്ങൾ ഡാറ്റാബേസിൽ സേവ് ചെയ്യുന്നത് വരെ ദയവായി കാത്തിരിക്കുക...</p>
    </div>
  `;
  btnPrev.style.display = 'none';
  btnNext.style.display = 'none';
  
  try {
    const payload = {
      answers: participantAnswers
    };
    
    // Generate unique academic record tracking parameters on the client
    payload.id = 'resp_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    payload.timestamp = new Date().toISOString();
    
    let response;
    if (USE_CLOUD_STORAGE) {
      response = await fetch(`${FIREBASE_DB_URL}/responses.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
    } else {
      response = await fetch(`${API_BASE}/api/responses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
    }
    
    if (!response.ok) throw new Error('Submission server error');
    
    showToast('സർവ്വേ പ്രതികരണങ്ങൾ വിജയകരമായി സമർപ്പിച്ചു!', 'success');
    
    // Redirect to End screen
    setTimeout(() => {
      progressWrapper.style.display = 'none';
      screenQuestions.style.display = 'none';
      screenEnd.style.display = 'block';
    }, 1000);
    
  } catch (err) {
    console.error(err);
    showToast('സെർവറുമായി ബന്ധിപ്പിക്കുന്നതിൽ പരാജയപ്പെട്ടു. ദയവായി വീണ്ടും ശ്രമിക്കുക.', 'danger');
    
    // Re-enable navigation
    btnPrev.style.display = 'block';
    btnNext.style.display = 'block';
    renderSection(currentSectionIndex);
  }
}

// Entry Point
document.addEventListener('DOMContentLoaded', () => {
  loadSurveyConfig();
});


// Expose surveyConfig clues to global for dynamic rendering
window.getCluesList = function(classification, itemType) {
    if (!surveyConfig) return [];
    if (classification === 'AI-Generated') {
      return itemType === 'video' ? (surveyConfig.aiVideoClues || []) : (surveyConfig.aiImageClues || []);
    }
    if (classification === 'Authentic') {
      return itemType === 'video' ? (surveyConfig.authenticVideoClues || []) : (surveyConfig.authenticImageClues || []);
    }
    return [];
  };

window.handleMediaClassificationChange = function(itemId, value) {
  saveAnswer(itemId, value);
  
  // Clear the existing clue answer because the category changed
  saveAnswer(itemId + '_clue', '');
  
  renderClueOptions(itemId, value);
};

window.renderClueOptions = function(itemId, classificationValue) {
  const clueGroup = document.getElementById('clue-group-' + itemId);
  const clueOptionsContainer = document.getElementById('clue-options-' + itemId);
  
  if (!clueGroup || !clueOptionsContainer) return;
  
  // Find the item to get its type
    let itemType = 'image';
    if (surveyConfig && surveyConfig.sections) {
      const mediaSection = surveyConfig.sections.find(s => s.isMediaSection);
      if (mediaSection && mediaSection.mediaItems) {
        const item = mediaSection.mediaItems.find(m => m.id === itemId);
        if (item && item.type) {
          itemType = item.type;
        }
      }
    }
    const clues = window.getCluesList(classificationValue, itemType);
  const savedClue = participantAnswers[itemId + '_clue'] || '';
  
  if (clues.length > 0) {
    clueGroup.style.display = 'block';
    
    clueOptionsContainer.innerHTML = clues.map(cOption => {
      const safeVal = cOption.replace(/"/g, '&quot;');
      const safeJsArgs = cOption.replace(/'/g, "\\'").replace(/"/g, '&quot;');
      return `
      <label class="option-item ${savedClue === cOption ? 'checked-item' : ''}" style="padding: 10px 16px; justify-content: flex-start;" onclick="toggleOptionClass(this)">
        <input type="radio" name="${itemId}_clue" value="${safeVal}" ${savedClue === cOption ? 'checked' : ''} onchange="saveAnswer('${itemId}_clue', '${safeJsArgs}')">
        <div class="custom-indicator" style="margin-right: 8px;"></div>
        <span class="option-label" style="font-size: 0.9rem;">${cOption}</span>
      </label>
      `;
    }).join('');
  } else {
    clueGroup.style.display = 'none';
  }
};

const speakers = [
  {
    "name": "Peter Steinberger",
    "company": "Developer, Founded PSPDFKit",
    "imageUrl": "/images/speakers/PeterSteinberger.jpg",
    "companyUrl": "https://steipete.me",
    "xTwitter": "steipete",
    "linkedin": "steipete",
    "shortBio": "Peter Steinberger founded and bootstrapped PSPDFKit, an SDK for working with PDF files on any platform. He served as CEO from 2011 to 2019 and currently concentrates on researching new products and technologies.",
    "bio": "Peter Steinberger founded and bootstrapped PSPDFKit, an SDK for working with PDF files on any platform. He served as CEO from 2011 to 2019 and currently concentrates on researching new products and technologies. His most recent engaging project involved shipping PDF Viewer via Mac Catalyst.",
  },
  {
    "name": "Erica Sadun",
    "company": "Author and Developer Advocate",
    "imageUrl": "/images/speakers/EricaSadun.jpg",
    "companyUrl": "https://www.ericasadun.com",
    "xTwitter": "ericasadun",
    "linkedin": "",
    "shortBio": "Erica Sadun developed apps for the iPhone before there was an App Store. She also wrote lots of books and contributed proposals to the Swift Programming Language. Sadun raised several children in her spare hours, making sure they were fed and well watered.",
    "bio": "Erica Sadun developed apps for the iPhone before there was an App Store. She also wrote lots of books and contributed proposals to the Swift Programming Language. She killed the C-style for-loop with its potentially unsafe mechanics in a language that pledged safety. Notably, Sadun is responsible for more rejected proposals for the Swift Programming language than just about anyone else. Swift originator Chris Lattner called one of those proposals (collection-style commas in method declarations) an 'abomination'. Sadun maintains she was right and he and the core team were wrong about this. A language with defaults deserves clean diffs when commenting out lines. Sadun has blogged at TUAW/Engadget, Ars Technica, O’Reilly Media, and Lifehacker. She has taught, documented, prototyped, and spent lots of time dusting books as work-study librarian during college. In wandering the halls of academia and boot camp, she collected several degrees and many students along the way. Sadun raised several children in her spare hours, making sure they were fed and well watered.",
  },
  {
    "name": "Paul Hudson",
    "company": "Author, Hacking with Swift",
    "imageUrl": "/images/speakers/PaulHudson.jpg",
    "companyUrl": "https://www.hackingwithswift.com",
    "xTwitter": "twostraws",
    "linkedin": "",
    "shortBio": "Paul is the author of Hacking with Swift. He quite likes Swift. And coffee. (But mostly Swift.) (And coffee.)",
    "bio": "Paul is the author of Hacking with Swift. He quite likes Swift. And coffee. (But mostly Swift.) (And coffee.)",
  },
  {
    "name": "Ellen Shapiro",
    "company": "iOS Developer, Pixite",
    "imageUrl": "/images/speakers/EllenShapiro.jpg",
    "companyUrl": "https://www.pixiteapps.com",
    "xTwitter": "designatednerd",
    "linkedin": "ellen-shapiro-9b42a86",
    "shortBio": "Ellen has crafted many iOS and Android apps and globe-trotted, sharing her lessons learned. Ellen's been a Kodeco contributor for a decade, co-authored books, and is currently at Pixite. She lives in Rochester, New York, with her wife and two cats.",
    "bio": "Ellen Shapiro has built many iOS and Android apps and travelled around the world speaking about everything she did wrong while doing so. She has written for Kodeco (fka RayWenderlich.com) for a decade and is a co-author of Kotlin Apprentice and the forthcoming edition of Android Apprentice. She is currently at Pixite working on Zinnia, a journal/planner app, and lives in Rochester, New York, with her wife and two cats. She can be found on social media at https://mastodon.social/@designatednerd, or, if you really really like cat photos, https://www.instagram.com/loudguitars/.",
  },
  {
    "name": "Maxim Cramer",
    "company": "Founder @ MENNENIA",
    "imageUrl": "/images/speakers/MaximCramer.jpg",
    "companyUrl": "https://mennenia.com",
    "xTwitter": "mennenia",
    "linkedin": "maxim-cramer-founder",
    "shortBio": "Maxim is the founder of MENNENIA and has worked on award-winning apps since 2009. She effortlessly bridges the worlds of technology and human connection, helping entrepreneurs win with TechLiteracy.",
    "bio": "Maxim is the founder of MENNENIA and has worked on award-winning apps since 2009. She effortlessly bridges the worlds of technology and human connection, helping entrepreneurs win with TechLiteracy.",
  },
  {
    "name": "Ritesh Gupta",
    "company": "Senior iOS Engineer, Atlassian",
    "imageUrl": "/images/speakers/RiteshGupta.jpg",
    "companyUrl": "https://www.atlassian.com",
    "xTwitter": "_riteshhh",
    "linkedin": "ritesh-gupta-a4602124",
    "shortBio": "Ritesh Gupta is an iOS engineer by day and a Kotlin Multiplatform expert by night. He's known for his contributions to iOS-Dev-Weekly's 295th issue and his prolific writing on Medium. Explore Ritesh's tech adventures at http://riteshhh.com/ – where coding meets creativity.",
    "bio": "Ritesh Gupta is an iOS engineer by day and a Kotlin Multiplatform expert by night. He's known for his contributions to iOS-Dev-Weekly's 295th issue and his prolific writing on Medium. Explore Ritesh's tech adventures at http://riteshhh.com/ – where coding meets creativity.",
  },
  {
    "name": "Zamzam Pooya",
    "company": "Tech Lead, Veo Technologies",
    "imageUrl": "/images/speakers/ZamzamPooya.jpg",
    "companyUrl": "https://www.veo.co",
    "xTwitter": "zamzampooya",
    "linkedin": "zamzam-farzamipooya-40545158",
    "shortBio": "Zamzam is a tech lead with deep knowledge in AI and mobile technology, currently advancing her expertise at Veo Technologies in Copenhagen. A movie enthusiast post-work and a world traveller at her heart, she also explored 105 music genres last year.",
    "bio": "Zamzam is a tech lead with deep knowledge in AI and mobile technology, currently advancing her expertise at Veo Technologies in Copenhagen. A movie enthusiast post-work and a world traveller at her heart, she also explored 105 music genres last year.",
  },
  {
    "name": "Shiqing Chen",
    "company": "Principal iOS Engineer at Dyson",
    "imageUrl": "/images/speakers/Shiqing.jpg",
    "companyUrl": "https://www.dyson.com",
    "xTwitter": "",
    "linkedin": "",
    "shortBio": "Shiqing has been diving into IoT and mobile development for ages, all jazzed up about how tech can spruce up our daily digs. And, guess what? She's also a fresh mom, juggling the whole baby care thing for her cute bundle of joy. Tech whiz by day, baby whisperer by night - that's her gig!",
    "bio": "Shiqing has been diving into IoT and mobile development for ages, all jazzed up about how tech can spruce up our daily digs. And, guess what? She's also a fresh mom, juggling the whole baby care thing for her cute bundle of joy. Tech whiz by day, baby whisperer by night - that's her gig!",
  },
  {
    "name": "Adrian Eves",
    "company": "Senior Software Engineer at Method",
    "imageUrl": "/images/speakers/AdrianEves.jpg",
    "companyUrl": "https://twitter.com/swifteves",
    "xTwitter": "swifteves",
    "linkedin": "adrian-eves-06368844",
    "shortBio": "Adrian Eves, your friendly neighborhood Swift platform developer, is passionate about music, stories, and video games. By day, he crafts digital experiences and champions Accessibility. By night, he immerses himself in music and thrilling adventures. If lost, return him to his wife Mary and their kids, Cece and AJ.",
    "bio": "Adrian Eves is a friendly neighborhood Swift platform developer with a deep passion for music, stories, and video games. Throughout the day, Adrian is immersed in coding and crafting digital experiences, while during the night, he can be found enjoying the tunes of artists like Ed Sheeran and Taylor Swift or delving into thrilling adventures, whether on pages or pixels - activities that often spill over into daylight hours too. He has had the privilege of speaking on Accessibility and the Dynamic Island, continuously seeking novel viewpoints on traditional subjects. If misplaced, kindly return Adrian to his wife Mary and their children, Cece and AJ.",
  },
  {
    "name": "Robin Kanatzar",
    "company": "Founder of Accessible Mobile Apps",
    "imageUrl": "/images/speakers/RobinKanatzar.jpg",
    "companyUrl": "https://www.accessiblemobileapps.com",
    "xTwitter": "RobinKanatzar",
    "linkedin": "",
    "shortBio": "Robin is an iOS and Android engineer who has been building mobile applications since 2016. She is passionate about accessibility and runs her own company, Accessible Mobile Apps, to publish accessible apps and support the accessibility community. She currently works as an iOS engineer in Bordeaux, France.",
    "bio": "Robin is an iOS and Android engineer who has been building mobile applications since 2016. She is passionate about accessibility and runs her own company, Accessible Mobile Apps, to publish accessible apps and support the accessibility community. She currently works as an iOS engineer in Bordeaux, France.",
  },
  {
    "name": "Abdul Ajetunmobi",
    "company": "Developer Advocate at Vonage",
    "imageUrl": "/images/speakers/AbdulAjetunmobi.jpg",
    "companyUrl": "https://www.vonage.com",
    "xTwitter": "abdulajet",
    "linkedin": "",
    "shortBio": "Abdul is a Developer Advocate for Vonage, where he has developed a fondness for working with audio. He has a background working in consumer products as an iOS Engineer. In his spare time, he enjoys cycling, listening to music, and photography. On a sunny day in London, you can find him attempting to do all three.",
    "bio": "Abdul is a Developer Advocate for Vonage, where he has developed a fondness for working with audio. He has a background working in consumer products as an iOS Engineer. In his spare time, he enjoys cycling, listening to music, and photography. On a sunny day in London, you can find him attempting to do all three.",
  },
  {
    "name": "Pradnya Nikam",
    "company": "Senior iOS Engineer, Rakuten Viki",
    "imageUrl": "/images/speakers/PradnyaNikam.jpg",
    "companyUrl": "https://www.viki.com",
    "xTwitter": "pradnya_nikam",
    "linkedin": "",
    "shortBio": "Pradnya is an iOS developer with over a decade of experience. She possesses an insatiable appetite for all things tech and can't resist sharing the coolest tricks with fellow enthusiasts. In addition to coding and debugging, she's also an avid travel junkie, constantly on a quest for new experiences.",
    "bio": "Pradnya is an iOS developer with over a decade of experience. She possesses an insatiable appetite for all things tech and can't resist sharing the coolest tricks with fellow enthusiasts. In addition to coding and debugging, she's also an avid travel junkie, constantly on a quest for new experiences.",
  },
  {
    "name": "Junda Ong",
    "company": "Indie iOS Developer",
    "imageUrl": "/images/speakers/JundaOng.jpg",
    "companyUrl": "http://samwize.com",
    "xTwitter": "samwize",
    "linkedin": "junda",
    "shortBio": "Junda, an iOS developer since 2008, has a track record of indie app launches. Having transitioned from ShopBack to the crypto domain, he's a seasoned tech traveler.",
    "bio": "Junda, an iOS developer since 2008, has a track record of indie app launches. Having transitioned from ShopBack to the crypto domain, he's a seasoned tech traveler.",
  },
  {
    "name": "Charlene Ho",
    "company": "User Researcher at ByteDance",
    "imageUrl": "/images/speakers/CharleneHo.jpg",
    "companyUrl": "https://www.bytedance.com/en/",
    "xTwitter": "",
    "linkedin": "charlenehows",
    "shortBio": "Charlene, with 11 years in product and user research, champions innovative research methods and creative approaches to convey user insights.",
    "bio": "Charlene, with 11 years in product and user research, champions innovative research methods and creative approaches to convey user insights.",
  },
  {
    "name": "Daniel Aupont",
    "company": "Lead iOS Engineer @ By Rule",
    "imageUrl": "/images/speakers/DanielAupont.jpg",
    "companyUrl": "https://byruleapp.com",
    "xTwitter": "startdevelopfin",
    "linkedin": "",
    "shortBio": "Daniel J. A. is a basketball official turned software engineer. His journey from the court to writing code has ignited a passion for mentoring and guiding others through the complexities of iOS development. He enjoys live sporting events, listening to music and playing video games.",
    "bio": "Daniel J. A. is a basketball official turned software engineer. His journey from the court to writing code has ignited a passion for mentoring and guiding others through the complexities of iOS development. He enjoys live sporting events, listening to music and playing video games.",
  },
  {
    "name": "Lee Kah Seng",
    "company": "iOS Developer, Freelancer",
    "imageUrl": "/images/speakers/LeeKahSeng.jpg",
    "companyUrl": "https://swiftsenpai.com",
    "xTwitter": "Lee_Kah_Seng",
    "linkedin": "leekahseng",
    "shortBio": "Lee is an iOS developer with a decade's experience. He shares insights on iOS development at swiftsenpai.com and empowers SMBs to boost app performance and user experiences.",
    "bio": "Lee is an iOS developer with a decade's experience. He shares insights on iOS development at swiftsenpai.com and empowers SMBs to boost app performance and user experiences.",
  },
  {
    "name": "Rudrank Riyam",
    "company": "Independent iOS Developer",
    "imageUrl": "/images/speakers/RudrankRiyam.jpg",
    "companyUrl": "https://rryam.com",
    "xTwitter": "rudrankriyam",
    "linkedin": "rudrank",
    "shortBio": "Rudrank, a wordsmith and engineer, is making waves in the Apple universe. When not weaving magic with the Apple Music API and MusicKit, he's crafting compelling content for Apple Platforms. Get ready for an enlightening journey through the tech world with Rudrank.",
    "bio": "Rudrank, a wordsmith and engineer, is making waves in the Apple universe. When not weaving magic with the Apple Music API and MusicKit, he's crafting compelling content for Apple Platforms. Get ready for an enlightening journey through the tech world with Rudrank.",
  },
  {
    "name": "Anu Mittal",
    "company": "Staff iOS Engineer at Circles Life",
    "imageUrl": "/images/speakers/AnuMittal.jpg",
    "companyUrl": "https://www.circles.life",
    "xTwitter": "anu22mittal",
    "linkedin": "",
    "shortBio": "Anu Mittal, a Staff Engineer at Circles Life in Singapore, scales startups to unicorn status. As a Women Who Code Mobile contributor and Kodeco mentor, she empowers others in tech. She attends meetups and conferences, fostering community growth through shared learning.",
    "bio": "Anu Mittal is a Staff Engineer at Circles Life, a leading digital telco in Singapore. She has years of experience in scaling up startups to unicorn status and beyond. She is also a long-time contributor to the Women Who Code Mobile chapters and Kodeco, a mobile development learning website, where she volunteers and mentors to empower others in the tech industry. She likes to attend meetups and conferences for she believes in learning and growing together as a community.",
  },
  {
    "name": "An Tran",
    "company": "Software Engineer at GXS",
    "imageUrl": "/images/speakers/AnTran.jpg",
    "companyUrl": "https://www.gxs.com.sg",
    "xTwitter": "antranapp",
    "linkedin": "",
    "shortBio": "An Tran is a Swift enthusiast who loves using Swift to create large scale, user friendly apps used by millions of users with his teams. He also loves sharing Swift contents to his vietnamese Swift fellows, and practicing minimalism.",
    "bio": "An Tran is a Swift enthusiast who loves using Swift to create large scale, user friendly apps used by millions of users with his teams. He also loves sharing Swift contents to his vietnamese Swift fellows, and practicing minimalism.",
  },
]
export default speakers

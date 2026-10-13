// Houston-area neighborhood/city landing pages. Each entry generates a page at
// /areas/[slug] (src/pages/areas/[slug].astro) with unique local copy, ZIP
// coverage, deep links to the most relevant services, the RealWork job map, and
// LocalBusiness + BreadcrumbList schema. Recovers the per-area local-search
// surface lost when the old Wix per-ZIP pages were 301'd into one hub page.
// Copy is unique per area (not templated) to avoid thin/doorway-page issues.
export interface Area {
  name: string;
  slug: string;
  seoTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  h1: string;
  intro: string[]; // paragraphs
  localChallenges: string;
  zips: string[];
  topServices: string[]; // service slugs (→ /services/[slug])
}

export const areas: Area[] = [
  {
    "name": "Katy",
    "slug": "katy",
    "seoTitle": "Plumber in Katy, TX | Latinos Plumbing",
    "metaDescription": "Need a plumber in Katy, TX? Latinos Plumbing offers licensed, 24/7 service for drains, leaks, slab leaks & water heaters. Call (346) 477-8912 today.",
    "heroEyebrow": "Serving Katy, TX",
    "h1": "Plumber in Katy, TX",
    "intro": [
      "Katy has grown from farmland into one of the fastest-expanding suburbs west of Houston, with master-planned communities like Cinco Ranch, Cross Creek Ranch, and Grand Lakes filling out year after year. Homeowners here choose Latinos Plumbing because we know newer construction doesn't mean problem-free plumbing — builder-grade fixtures, fast-laid supply lines, and water heaters that take a beating in the Texas heat all need attention sooner than people expect.",
      "We're a licensed, family-run shop (Texas Master Plumber Licensed & Insured) with a 5.0-star rating across 5.0-star Google reviews, and we treat Katy like our own backyard. Whether you're off the Grand Parkway in 77494 or closer to Old Town Katy, we show up on time, explain the problem in plain language, and stand behind the work. And when something bursts at 2 a.m., we're available 24/7."
    ],
    "localChallenges": "Even Katy's newer homes run into trouble. Builder-installed water heaters wear out fast under relentless summer demand, and quick-construction drain lines are prone to slow clogs and improper slope. As subdivisions mature, Houston's expansive clay soil starts shifting beneath slabs during drought-and-rain cycles, stressing foundations and occasionally cracking under-slab supply or sewer lines. We handle a lot of drain cleaning, water heater replacement, and early leak detection out here — catching a slab leak in a five- or ten-year-old home before it undermines the foundation is exactly the kind of call we want.",
    "zips": [
      "77449",
      "77450",
      "77493",
      "77494"
    ],
    "topServices": [
      "water-heater-repair-and-installation",
      "drain-cleaning",
      "leak-detection",
      "slab-leak-detection-and-repair"
    ]
  },
  {
    "name": "Cypress",
    "slug": "cypress",
    "seoTitle": "Plumber in Cypress, TX | Latinos Plumbing",
    "metaDescription": "Trusted plumber in Cypress, TX. Latinos Plumbing handles drains, slab leaks, sewer lines & water heaters 24/7. Licensed & local. Call (346) 477-8912.",
    "heroEyebrow": "Serving Cypress, TX",
    "h1": "Plumber in Cypress, TX",
    "intro": [
      "Cypress is one of the busiest corners of our service map, and for good reason — this stretch of northwest Houston has exploded with growth, from established neighborhoods around Cypress-Fairbanks to newer communities like Bridgeland, Towne Lake, and Fairfield. We do a lot of work out here, and our techs know the area's streets, subdivisions, and the quirks of its housing stock well.",
      "Families in Cypress call Latinos Plumbing because we're licensed, dependable, and easy to reach — a real family-run business, not a faceless dispatch line. With a 5.0-star average across 5.0-star reviews and round-the-clock emergency availability, we're the neighbors you call whether it's a routine water heater swap or a sewer backup on a holiday weekend. We answer the phone, we show up, and we fix it right the first time."
    ],
    "localChallenges": "Cypress spans a wide age range of homes, so the problems vary. Older sections see aging pipes and tired water heaters, while the newer master-planned areas deal with the settling that comes as Houston's clay soil moves with each drought and downpour — a leading cause of slab leaks and cracked sewer lines. We get frequent calls for drain cleaning, sewer line repair, and slab leak detection here. Because so much of Cypress sits on that reactive clay, we always recommend acting early when you spot warm spots on the floor, unexplained water bills, or recurring drain backups.",
    "zips": [
      "77429",
      "77433"
    ],
    "topServices": [
      "sewer-line-repair",
      "drain-cleaning",
      "slab-leak-detection-and-repair",
      "water-heater-repair-and-installation"
    ]
  },
  {
    "name": "The Heights",
    "slug": "the-heights",
    "seoTitle": "Plumber in The Heights, Houston | Latinos Plumbing",
    "metaDescription": "Plumber in Houston Heights, TX. Latinos Plumbing specializes in repiping aging homes, leaks & drains. Licensed, 24/7 service. Call (346) 477-8912.",
    "heroEyebrow": "Serving Houston Heights",
    "h1": "Plumber in The Heights, TX",
    "intro": [
      "The Heights is one of Houston's most beloved historic neighborhoods, full of early-1900s bungalows, Victorian cottages, and tree-lined streets along Heights Boulevard. That charm comes with character — and character, in plumbing terms, often means original cast-iron drain lines and galvanized steel supply pipes that have been quietly corroding for the better part of a century.",
      "Latinos Plumbing has deep experience with the older inner-loop homes that make 77008 special. We're licensed Master Plumbers (Licensed & Insured) who respect what makes these houses worth preserving, and we know how to work around tight crawlspaces, pier-and-beam foundations, and decades of previous repairs. With 5.0-star reviews and 24/7 emergency service, Heights homeowners trust us to modernize their plumbing without tearing the soul out of a historic home."
    ],
    "localChallenges": "Heights homes carry the plumbing of their era. Galvanized supply lines rust from the inside out, choking water pressure and tinting water brown, while original cast-iron sewer lines crack, scale over, and collapse with age. Mature live oaks and pecans along the streets send roots straight into those failing clay and cast-iron sewer pipes. Repiping with modern materials is one of our most common Heights jobs, along with sewer line repair and leak detection. If your century-old bungalow has low pressure, recurring backups, or pipes you've never replaced, it's worth a look before a small leak becomes a flooded floor.",
    "zips": [
      "77008"
    ],
    "topServices": [
      "repiping",
      "sewer-line-repair",
      "leak-detection",
      "drain-cleaning"
    ]
  },
  {
    "name": "Spring Branch",
    "slug": "spring-branch",
    "seoTitle": "Plumber in Spring Branch, TX | Latinos Plumbing",
    "metaDescription": "Plumber in Spring Branch, Houston. Latinos Plumbing repairs leaks, drains, water heaters & repipes older homes. Licensed, 24/7. Call (346) 477-8912.",
    "heroEyebrow": "Serving Spring Branch",
    "h1": "Plumber in Spring Branch, TX",
    "intro": [
      "Spring Branch is classic west Houston — established mid-century neighborhoods along Long Point and Hammerly sitting right next to lots that have been scraped and rebuilt with brand-new construction. It's a neighborhood in transition, and that mix means we see everything here, from original 1960s plumbing to fresh builder installs that already need a second look. Latinos Plumbing is based just up the road in 77092, so Spring Branch is truly home turf for us.",
      "Neighbors here call us because we're local, licensed, and straightforward. We've worked on the ranch homes that have stood for decades and the modern townhomes going up between them, and we bring the same honest assessment to both. With a 5.0-star reputation across 5.0-star reviews and 24/7 availability, we're the crew that's just minutes away when something goes wrong."
    ],
    "localChallenges": "Spring Branch's older homes often still run on aging galvanized or cast-iron pipes that are due for repiping, and original water heaters that struggle through Houston summers. The newer rebuilds aren't immune either — Houston's expansive clay soil shifts beneath every foundation here, old and new alike, which is a frequent source of slab leaks and stressed sewer lines. We handle steady calls for leak detection, water heater repair and replacement, and drain cleaning across the area. Mixed-age plumbing under one roof, common after partial remodels, is something we untangle regularly.",
    "zips": [
      "77055",
      "77080"
    ],
    "topServices": [
      "leak-detection",
      "water-heater-repair-and-installation",
      "repiping",
      "drain-cleaning"
    ]
  },
  {
    "name": "Bellaire",
    "slug": "bellaire",
    "seoTitle": "Plumber in Bellaire, TX | Latinos Plumbing",
    "metaDescription": "Plumber in Bellaire, TX. Latinos Plumbing handles root-clogged sewers, slab leaks, repiping & drains. Licensed, 24/7 service. Call (346) 477-8912.",
    "heroEyebrow": "Serving Bellaire, TX",
    "h1": "Plumber in Bellaire, TX",
    "intro": [
      "Bellaire — the \"City of Homes\" tucked inside Loop 610 — is a well-established, family-oriented community known for its gracious older houses, generous lots, and canopy of mature oaks and pecans. Those big trees and decades-old homes make for beautiful streets, but they also create some very specific plumbing headaches that we know inside and out.",
      "Bellaire homeowners choose Latinos Plumbing because we deliver careful, high-quality work that matches the value of their homes. We're licensed Master Plumbers (Licensed & Insured) with a 5.0-star rating across 5.0-star Google reviews, and we take the time to diagnose properly rather than guess. From quiet under-slab leaks to root-choked sewer lines, we handle the inner-loop's toughest plumbing problems — and we're available 24/7 when an emergency can't wait."
    ],
    "localChallenges": "Bellaire's mature trees are the neighborhood's signature and the sewer system's nemesis: roots chase moisture into older clay and cast-iron sewer lines, causing recurring backups that demand cleaning and, eventually, repair or replacement. Many established homes also still rely on aging galvanized supply lines that are good candidates for repiping. And because Bellaire sits on the same expansive Houston clay that swells and shrinks with the seasons, slab leaks are a common and costly issue here. We do a lot of sewer line repair, slab leak detection, and root-related drain cleaning across 77401 and 77081.",
    "zips": [
      "77401",
      "77081"
    ],
    "topServices": [
      "sewer-line-repair",
      "slab-leak-detection-and-repair",
      "drain-cleaning",
      "repiping"
    ]
  },
  {
    "name": "Sugar Land",
    "slug": "sugar-land",
    "seoTitle": "Plumber in Sugar Land, TX | Latinos Plumbing",
    "metaDescription": "Plumber in Sugar Land, TX. Latinos Plumbing services drains, leaks, slab leaks & water heaters 24/7. Licensed & trusted. Call (346) 477-8912 now.",
    "heroEyebrow": "Serving Sugar Land, TX",
    "h1": "Plumber in Sugar Land, TX",
    "intro": [
      "Sugar Land anchors the southwest suburbs in Fort Bend County, a polished, master-planned area with communities like First Colony, Telfair, Greatwood, and New Territory. The homes here range from established 1990s neighborhoods to newer builds, and homeowners expect a plumber who's as professional and dependable as the area itself. That's exactly what Latinos Plumbing brings.",
      "We're a licensed, family-run company with a 5.0-star average across 5.0-star reviews, and we serve Sugar Land with the same care we give our closest neighbors. Whether you're dealing with a failing water heater, a slow drain, or a leak you can't pin down, we diagnose it honestly and fix it right. Plumbing emergencies don't keep business hours, so we're on call 24/7 across 77478, 77479, and 77498."
    ],
    "localChallenges": "Sugar Land's master-planned neighborhoods are built on the same reactive clay soils found across the greater Houston area, and Fort Bend County's drought-and-rain swings drive real foundation movement — a frequent cause of slab leaks and sewer line stress. Homes from the '90s and early 2000s are now hitting the age where original water heaters fail and supply fittings start to leak. We see steady demand here for slab leak detection, leak detection, water heater replacement, and drain cleaning. Catching an under-slab leak early, before it threatens the foundation, saves Sugar Land homeowners a great deal of money and disruption.",
    "zips": [
      "77478",
      "77479",
      "77498"
    ],
    "topServices": [
      "slab-leak-detection-and-repair",
      "leak-detection",
      "water-heater-repair-and-installation",
      "drain-cleaning"
    ]
  },
  {
    "name": "The Woodlands",
    "slug": "the-woodlands",
    "seoTitle": "Plumber in The Woodlands, TX | Latinos Plumbing",
    "metaDescription": "Plumber in The Woodlands, TX. Latinos Plumbing handles water heaters, slab leaks, root-clogged drains & leaks 24/7. Licensed Master Plumber. Call (346) 477-8912.",
    "heroEyebrow": "Serving The Woodlands, TX",
    "h1": "Plumber in The Woodlands, TX",
    "intro": [
      "The Woodlands is the polished, forested master-planned community anchoring Montgomery County, with villages like Grogan's Mill, Cochran's Crossing, Alden Bridge, and Creekside Park threaded through dense stands of pine and hardwood. The oldest villages are now well past the 30- and 40-year mark, which means original water heaters, builder-grade supply lines, and cast-iron drains are reaching the end of their service lives right as the newer Creekside sections start showing their own first issues.",
      "Homeowners up here expect a plumber who's as buttoned-up as the community itself, and that's how Latinos Plumbing works — licensed Master Plumbers (Licensed & Insured), 4.9 stars across 5.0-star Google reviews, and a real family-run crew that diagnoses carefully instead of upselling. We drive The Woodlands constantly, we respect your home and your time, and when a line bursts on a Sunday night we're reachable 24/7."
    ],
    "localChallenges": "The Woodlands' signature tree canopy is also its plumbing's biggest adversary: mature pine and oak roots seek out moisture in aging clay and cast-iron sewer laterals, causing the slow backups and recurring clogs we're called out for constantly. In the established villages, 1980s and '90s water heaters fail under heavy household demand, and decades-old supply fittings start to weep. Even on Montgomery County's sandier ground, seasonal soil movement still stresses slabs and under-slab lines. Expect to see us doing a lot of water heater replacement, root-related drain cleaning, sewer repair, and early leak detection across 77380, 77381, 77382, 77384, and 77385.",
    "zips": [
      "77380",
      "77381",
      "77382",
      "77384",
      "77385"
    ],
    "topServices": [
      "water-heater-repair-and-installation",
      "drain-cleaning",
      "sewer-line-repair",
      "leak-detection"
    ]
  },
  {
    "name": "Kingwood",
    "slug": "kingwood",
    "seoTitle": "Plumber in Kingwood, TX | Latinos Plumbing",
    "metaDescription": "Plumber in Kingwood, TX. Latinos Plumbing repairs sewers, drains, water heaters & leaks in the Livable Forest 24/7. Licensed & trusted. Call (346) 477-8912.",
    "heroEyebrow": "Serving Kingwood, TX",
    "h1": "Plumber in Kingwood, TX",
    "intro": [
      "Kingwood — the \"Livable Forest\" — sits in northeast Houston where the San Jacinto River meets Lake Houston, a heavily wooded community of established neighborhoods like Trailwood, Bear Branch, and Kings Point. The tree cover and riverside setting that make Kingwood beautiful also make it tough on plumbing: roots are everywhere, the water table runs high, and homes that took on water during past flooding often have lingering supply and drain issues that surface years later.",
      "Latinos Plumbing knows this corner of the map well. We're a licensed, family-run shop (Master Plumber Licensed & Insured) with a 5.0-star reputation across 5.0-star reviews, and we bring honest, thorough diagnosis to every Kingwood call — whether it's a sewer line losing its battle with tree roots or a water heater that never ran right after a flood. When water's where it shouldn't be, we're available 24/7 across 77339 and 77345."
    ],
    "localChallenges": "Kingwood's dense pines and oaks drive roots straight into older clay and cast-iron sewer lines, making root intrusion and recurring backups some of our most frequent calls here. The community's low, riverside elevation and high water table complicate under-slab work and can mask leaks until water bills spike. Homes affected by past flooding sometimes carry sediment-fouled water heaters and stressed supply lines that fail down the road. We handle steady sewer line repair, drain cleaning, water heater replacement, and leak detection throughout the area, and we always recommend addressing root-clogged lines before a backup turns into a sewage cleanup.",
    "zips": [
      "77339",
      "77345"
    ],
    "topServices": [
      "sewer-line-repair",
      "drain-cleaning",
      "water-heater-repair-and-installation",
      "leak-detection"
    ]
  },
  {
    "name": "Pearland",
    "slug": "pearland",
    "seoTitle": "Plumber in Pearland, TX | Latinos Plumbing",
    "metaDescription": "Plumber in Pearland, TX. Latinos Plumbing services slab leaks, drains, water heaters & leaks 24/7 across Shadow Creek & Silverlake. Call (346) 477-8912.",
    "heroEyebrow": "Serving Pearland, TX",
    "h1": "Plumber in Pearland, TX",
    "intro": [
      "Pearland has been one of the fastest-growing cities in the entire Houston metro, sprawling south through Brazoria and Harris counties with big master-planned communities like Shadow Creek Ranch and Silverlake alongside older neighborhoods closer to Old Townsite. That rapid, large-scale construction means a lot of homes went up quickly on reactive coastal-plain clay — and that combination shows up in our service calls more than almost anywhere else we work.",
      "Pearland families call Latinos Plumbing because we're licensed, local, and straight with them about what a home actually needs. With a 5.0-star average across 5.0-star Google reviews and round-the-clock emergency service, we handle everything from a builder-grade water heater that quit early to a slab leak hiding under a five-year-old foundation. We answer the phone, show up when we say we will, and stand behind the repair across 77581, 77584, and 77588."
    ],
    "localChallenges": "Pearland's expansive clay soil is among the most reactive in the region, swelling and shrinking dramatically through Gulf Coast wet-and-dry cycles and putting constant stress on slabs and under-slab supply and sewer lines — a leading cause of the slab leaks we detect here. Fast-built subdivisions also tend toward improperly sloped or quickly clogging drain lines and water heaters that wear out ahead of schedule. We do a lot of slab leak detection, leak detection, drain cleaning, and water heater replacement in Pearland, and catching a foundation leak early is one of the biggest money-savers we offer local homeowners.",
    "zips": [
      "77581",
      "77584",
      "77588"
    ],
    "topServices": [
      "slab-leak-detection-and-repair",
      "leak-detection",
      "drain-cleaning",
      "water-heater-repair-and-installation"
    ]
  },
  {
    "name": "Spring",
    "slug": "spring",
    "seoTitle": "Plumber in Spring, TX | Latinos Plumbing",
    "metaDescription": "Plumber in Spring, TX. Latinos Plumbing fixes drains, water heaters, slab leaks & repipes older homes 24/7 from Klein to Old Town Spring. Call (346) 477-8912.",
    "heroEyebrow": "Serving Spring, TX",
    "h1": "Plumber in Spring, TX",
    "intro": [
      "Spring covers a big swath of north Harris County, from the historic shops of Old Town Spring to established Klein-area neighborhoods and newer master-planned communities like Gleannloch Farms and Augusta Pines. It's a true mix of housing stock — 1970s and '80s ranch homes sitting near subdivisions barely a decade old — so on any given day our techs might repipe a tired galvanized system in the morning and chase a slab leak under newer construction in the afternoon.",
      "Latinos Plumbing is just down US-45 from Spring, so we're out here all the time. We're licensed Master Plumbers (Licensed & Insured) with a 5.0-star rating across 5.0-star reviews, and neighbors trust us because we give the same honest, plain-language assessment whether the house is forty years old or four. From routine water heater swaps to after-hours emergencies, we're reachable 24/7 across 77373, 77379, 77386, and 77388."
    ],
    "localChallenges": "Spring's wide range of home ages means a wide range of plumbing problems. Older Klein and Old Town homes often still run aging galvanized or cast-iron pipe that's overdue for repiping, plus original water heaters straining through Houston summers. Newer communities aren't spared either — north Harris County's expansive clay shifts with every drought and downpour, stressing foundations and producing slab leaks and cracked sewer lines. We see steady demand for drain cleaning, water heater repair and replacement, repiping, and leak detection, and partial-remodel homes with mixed-age plumbing under one roof are a regular puzzle we sort out.",
    "zips": [
      "77373",
      "77379",
      "77386",
      "77388"
    ],
    "topServices": [
      "drain-cleaning",
      "water-heater-repair-and-installation",
      "repiping",
      "leak-detection"
    ]
  },
  {
    "name": "Humble",
    "slug": "humble",
    "seoTitle": "Plumber in Humble, TX | Latinos Plumbing",
    "metaDescription": "Plumber in Humble & Atascocita, TX. Latinos Plumbing handles drains, sewers, water heaters & slab leaks near Lake Houston 24/7. Call (346) 477-8912.",
    "heroEyebrow": "Serving Humble & Atascocita",
    "h1": "Plumber in Humble, TX",
    "intro": [
      "Humble anchors the northeast side near Bush Intercontinental and Lake Houston, taking in the fast-grown Atascocita area and a range of neighborhoods from older sections around downtown Humble to sprawling lakeside subdivisions. Proximity to Lake Houston and the area's low-lying ground means a high water table and a history of flooding in spots — both of which shape the kind of plumbing trouble homeowners run into out here.",
      "Latinos Plumbing serves Humble and Atascocita with the same dependable, family-run service we're known for closer in. We're licensed Master Plumbers (Licensed & Insured) carrying a 5.0-star average across 5.0-star Google reviews, and we show up on time, explain things clearly, and fix the root cause instead of slapping on a patch. Whether it's a sewer backing up or a water heater that quit, we're on call 24/7 across 77338, 77346, and 77396."
    ],
    "localChallenges": "The Lake Houston area's high water table and flood history make leak detection trickier and put extra stress on sewer systems, so we field a lot of sewer line repair and drain cleaning calls in Humble and Atascocita. Homes that have taken on water sometimes carry sediment-clogged water heaters and corroded fittings that fail later on, and the region's clay-heavy soil still drives the foundation movement behind many slab leaks. We handle steady demand for drain cleaning, sewer repair, water heater replacement, and slab leak detection here — and recommend acting early when backups recur or water bills creep up for no clear reason.",
    "zips": [
      "77338",
      "77346",
      "77396"
    ],
    "topServices": [
      "sewer-line-repair",
      "drain-cleaning",
      "water-heater-repair-and-installation",
      "slab-leak-detection-and-repair"
    ]
  },
  {
    "name": "Missouri City",
    "slug": "missouri-city",
    "seoTitle": "Plumber in Missouri City, TX | Latinos Plumbing",
    "metaDescription": "Plumber in Missouri City, TX. Latinos Plumbing services slab leaks, drains, water heaters & leaks 24/7 across Sienna & Quail Valley. Call (346) 477-8912.",
    "heroEyebrow": "Serving Missouri City, TX",
    "h1": "Plumber in Missouri City, TX",
    "intro": [
      "Missouri City stretches across Fort Bend County south of Sugar Land, blending long-established neighborhoods like Quail Valley and Lake Olympia with the fast-expanding master-planned community of Sienna. The age spread is wide — golf-course homes from the 1970s and '80s sit not far from brand-new construction — and that means the plumbing problems we see range from tired original systems to the early settling issues that come with freshly built homes on Fort Bend's clay.",
      "Latinos Plumbing serves Missouri City with the careful, professional work the area expects. We're a licensed, family-run company (Master Plumber Licensed & Insured) with a 5.0-star reputation across 5.0-star reviews, and we take the time to find the real problem rather than guess at it. From a slab leak under a Sienna slab to a water heater giving out in Quail Valley, we fix it right and we're available 24/7 across 77459 and 77489."
    ],
    "localChallenges": "Missouri City sits on the same reactive Fort Bend clay as its neighbors, and the county's pronounced drought-and-rain swings drive foundation movement that's a frequent source of slab leaks and stressed sewer lines. Older Quail Valley and Lake Olympia homes are now at the age where original water heaters fail and supply fittings begin to leak, while Sienna's newer builds bring their own early settling and builder-grade drain issues. We see steady demand for slab leak detection, leak detection, water heater replacement, and drain cleaning, and we always push to catch an under-slab leak before it threatens the foundation.",
    "zips": [
      "77459",
      "77489"
    ],
    "topServices": [
      "slab-leak-detection-and-repair",
      "leak-detection",
      "water-heater-repair-and-installation",
      "drain-cleaning"
    ]
  },
  {
    "name": "Pasadena",
    "slug": "pasadena",
    "seoTitle": "Plumber in Pasadena, TX | Latinos Plumbing",
    "metaDescription": "Plumber in Pasadena, TX. Latinos Plumbing repipes older homes and repairs sewers, drains & water heaters 24/7. Licensed Master Plumber. Call (346) 477-8912.",
    "heroEyebrow": "Serving Pasadena, TX",
    "h1": "Plumber in Pasadena, TX",
    "intro": [
      "Pasadena is one of southeast Houston's older, hardworking communities, a long-established city near the Ship Channel with mature neighborhoods that largely went up from the 1950s through the '70s. That means a lot of homes here are running on original galvanized supply lines and cast-iron drains that have spent half a century corroding — exactly the kind of aging plumbing where small problems quietly compound until something gives.",
      "Latinos Plumbing brings honest, dependable service to Pasadena homeowners who want the job done right without the runaround. We're licensed Master Plumbers (Licensed & Insured) with a 5.0-star average across 5.0-star Google reviews, and we've spent years working on exactly these older inner-Houston homes — repiping rusted-out systems, clearing and repairing tired sewer lines, and replacing water heaters well past their prime. When an old pipe finally lets go, we're reachable 24/7 across 77502, 77503, 77504, 77505, and 77506."
    ],
    "localChallenges": "Pasadena's older housing stock is the story here: galvanized supply lines rust from the inside out, choking water pressure and discoloring water, while original cast-iron sewer lines scale over, crack, and collapse with age. Repiping and sewer line repair are among our most common Pasadena jobs, along with drain cleaning on lines that have narrowed over decades and water heater replacement for units long past their lifespan. The region's clay soil adds slab movement to the mix. If your mid-century home has low pressure, rusty water, or recurring backups, it's worth having us look before a slow leak becomes a burst pipe.",
    "zips": [
      "77502",
      "77503",
      "77504",
      "77505",
      "77506"
    ],
    "topServices": [
      "repiping",
      "sewer-line-repair",
      "drain-cleaning",
      "water-heater-repair-and-installation"
    ]
  }
];


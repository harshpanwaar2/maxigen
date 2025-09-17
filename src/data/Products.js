import wargenImg from "../assets/Product/wargen.jpg";
import isogenImg from "../assets/Product/isogen.jpg";
import nitrogenImg from "../assets/Product/nitrogen.jpg";
import ripogenImg from "../assets/Product/ripogen.jpg";
import infernoImg from "../assets/Product/inferno.jpg";
import ultimaImg from "../assets/Product/ultima.jpg";
import omegaImg from "../assets/Product/omega.jpg";
import fishOilProImg from "../assets/Product/omega.jpg";
import nitrixImg from "../assets/Product/nitrix.jpg";
import testagenImg from "../assets/Product/testa.jpg";
import creatineImg from "../assets/Product/cre-mono.jpg";
import creatineBlendImg from "../assets/Product/cre-mono-blend.jpg";
import glutamineImg from "../assets/Product/glu.jpg";

export const products = [
  {
    id: "wargen-100-whey",
    name: "Wargen (100% Whey Protein)",
    category: "Protein",
    price: 49.99, // You can adjust this price
    image: wargenImg,
    tagline: "Pure Performance. Real Recovery. Lean Results.",
    specs: {
      flavours: ["Belgian Chocolate", "Maple Delight"],
      weight: "5 Lbs (2.26kg)",
      servings: "70 Servings",
    },
    details: {
      description: `Wargen is a premium, high-impact whey protein formula from Maxigen Nutrition, tailored for individuals who are serious about fitness, strength, and performance. Crafted using ultra-pure whey protein, Wargen delivers 24 grams of fast-absorbing protein per serving to promote muscle synthesis, support strength gains, and accelerate post-workout recovery.

What sets Wargen apart is its purity and precision. It’s formulated with minimal carbohydrates, virtually zero fat, no added sugar, and an advanced digestive enzyme blend (300 mg) — all while keeping calories low. This makes it ideal for athletes cutting fat or looking for a clean source of protein without the bloat.

Every batch is manufactured in GMP-certified, FDA-compliant facilities, is HALAL certified, and third-party tested. If you’re looking for a whey protein that’s clean, fast-absorbing, and built for results, Wargen is your ultimate training partner.`,
      purityInfo:
        "Formulated with minimal carbohydrates, virtually zero fat, no added sugar, and an advanced digestive enzyme blend (300 mg), it's ideal for athletes cutting fat or looking for a clean protein source without the bloat.",
      versatility:
        "Wargen is incredibly versatile. Mix it into water, milk, smoothies, or oats — it blends smoothly and tastes clean without being overly sweet or artificial, making it the perfect addition to your daily routine.",
    },
    benefits: [
      {
        title: "Rapid Muscle Recovery",
        description:
          "Accelerates tissue repair and reduces soreness by rapidly delivering essential amino acids to your muscles after training.",
        icon: "recovery",
      },
      {
        title: "Lean Muscle Growth",
        description:
          "Provides the perfect anabolic environment for lean muscle gain while minimizing fat storage, ideal for clean bulking and cutting.",
        icon: "muscle",
      },
      {
        title: "Clean & Low-Calorie Formula",
        description:
          "At just 110 calories per serving with no added sugar, it offers an efficient way to hit your protein goals without guilt.",
        icon: "calories",
      },
      {
        title: "Supports Fat Loss & Definition",
        description:
          "Fuels muscle repair without unnecessary sugars or carbs, supporting fat loss while preserving lean mass for enhanced definition.",
        icon: "fatloss",
      },
      {
        title: "Easy Digestion & No Bloating",
        description:
          "A 300 mg digestive enzyme blend ensures your body efficiently breaks down and absorbs every gram of protein, preventing bloating.",
        icon: "digestion",
      },
      {
        title: "Safe, Certified & Athlete-Approved",
        description:
          "Manufactured in GMP-certified, FDA-compliant facilities, this formula is HALAL, third-party tested, and free from banned substances.",
        icon: "certified",
      },
    ],
    idealFor: [
      "Bodybuilders seeking clean muscle mass",
      "Endurance athletes needing faster recovery",
      "Fitness enthusiasts looking for lean nutrition",
      "Weightlifters and gym-goers building strength",
      "Anyone living a protein-forward lifestyle",
    ],
    nutritionalFacts: {
      energy: "110.2 kcal",
      carbohydrate: "1.60 gm",
      totalSugar: "0.54 gm",
      addedSugar: "0 gm",
      totalFat: "0.63 gm",
      saturatedFat: "0.21 gm",
      transFat: "0 gm",
      cholesterol: "4.6 mg",
      protein: "24 gm",
      sodium: "150 mg",
      potassium: "200 mg",
      digestiveEnzymeBlend: "300 mg", // This value from your text, as it was cut off in the image
    },
  },

  {
    id: "isogen-27-isolate-protein",
    name: "Isogen-27 (Isolate Protein)",
    category: "Protein",
    price: 64.99, // You can adjust this price
    image: isogenImg,
    tagline: "Ultra-Pure Protein for Elite Performance.",
    specs: {
      flavours: ["Belgian Chocolate", "American Foster"],
      weight: "5 Lbs (2.26kg)",
      servings: "70 Servings",
    },
    details: {
      // --- DESCRIPTION INCREASED AS REQUESTED ---
      description: `Engineered for serious athletes, gym-goers, and fitness-driven individuals, Isogen-27 is a next-generation 100% Whey Isolate Protein designed to deliver maximum muscle support, faster recovery, and superior lean gains. With 27 grams of ultra-pure protein per serving, Isogen-27 provides your body with exactly what it needs — and nothing it doesn’t.

Unlike conventional protein powders that are overloaded with fillers, sugars, or inferior blends, Isogen-27 features a high-purity isolate formula, making it ideal for cutting, shredding, or lean muscle building phases. Whether you’re a bodybuilder chasing definition, a performance athlete with strict macros, or a beginner focused on clean results — Isogen-27 gives you unmatched protein quality and absorption.

Each serving contains only 102 calories, with 0.50g fat, 1.1g carbs, and no added sugar, keeping your macros clean and in check. Unlike blends that spike protein content with hidden ingredients, Maxigen Nutrition guarantees full-label transparency, third-party testing, and internationally sourced raw materials. We ensure every scoop of Isogen-27 is GMP-certified, FDA-compliant, HALAL-certified, and free from banned substances — trusted by athletes, backed by science.`,

      // These smaller fields can remain for specific sections on your page
      purityInfo:
        "What makes Isogen-27 different is its fortification with a potent 500 mg dose of HMB to prevent muscle breakdown, and 2 mg of Yohimbine to support fat metabolism. Each serving is enhanced with a 300 mg Digestive Enzyme Blend, ensuring smooth digestion and maximum protein absorption without bloating.",
      versatility:
        "Isogen-27 is the perfect protein solution for both men and women. It's best consumed post-workout for recovery, between meals to meet protein goals, or anytime during cutting or recomp phases to protect muscle mass.",
    },
    benefits: [
      {
        title: "Ultra-Pure Protein for Lean Gains",
        description:
          "27g of fast-absorbing whey isolate supports lean muscle growth with minimal fat or carbs, ideal for those who demand high-quality protein.",
        icon: "muscle",
      },
      {
        title: "Muscle Preservation with HMB",
        description:
          "Includes 500 mg of HMB, a powerful compound known to reduce muscle breakdown during intense training or calorie deficits.",
        icon: "certified",
      },
      {
        title: "Boosts Fat Loss with Yohimbine",
        description:
          "Provides thermogenic support with 2 mg of Yohimbine to enhance fat metabolism, perfect for shredding phases.",
        icon: "fatloss",
      },
      {
        title: "Zero Bloat, Easy Digestion",
        description:
          "Formulated with a 300 mg Digestive Enzyme Blend, Isogen-27 ensures smooth digestion and optimal absorption of protein.",
        icon: "digestion",
      },
      {
        title: "Clean, Low-Calorie Formula",
        description:
          "At only 102 kcal per serving, it provides maximum protein density with minimal calories, perfect for strict macro plans.",
        icon: "calories",
      },
      {
        title: "Certified Safe & Athlete-Approved",
        description:
          "Manufactured in GMP-certified, FDA-registered facilities, Isogen-27 is HALAL-certified, third-party tested, and free from banned substances.",
        icon: "certified",
      },
    ],
    idealFor: [
      "Athletes in cutting or shredding phases",
      "Bodybuilders chasing definition",
      "Anyone with lactose sensitivities",
      "Individuals on a low-carb or calorie-restricted diet",
      "Fitness enthusiasts seeking faster recovery",
    ],
    nutritionalFacts: {
      energy: "102 kcal",
      carbohydrate: "1.1 gm",
      totalSugar: "0.30 gm",
      addedSugar: "0 gm",
      totalFat: "0.50 gm",
      saturatedFat: "0.10 gm",
      transFat: "0 gm",
      cholesterol: "2.5 mg",
      protein: "27 gm",
      yohimbine: "2 mg",
      hmb: "500 mg",
      sodium: "150 mg",
      digestiveEnzymeBlend: "300 mg",
    },
  },
  {
    id: "nitrogen-advanced-whey",
    name: "Nitrogen (Advanced Whey)",
    category: "Protein",
    price: 59.99, // You can adjust this price
    image: nitrogenImg,
    tagline: "Fuel. Build. Perform.",
    specs: {
      flavours: ["Chocolate Mousse", "Cookie & Dough"],
      weight: "5 Lbs (2.26kg)",
      servings: "56 Servings",
    },
    details: {
      // --- DESCRIPTION INCREASED AS REQUESTED ---
      description: `Nitrogen – Advanced Whey is more than just protein — it’s a complete performance formula for athletes, gym-goers, and fitness enthusiasts who train with purpose. Created by Maxigen Nutrition, Nitrogen delivers a powerful combination of high-quality whey protein, muscle-building aminos, performance-enhancing creatine, and digestive enzymes — all in one clean, effective serving.

With 27 grams of fast-digesting whey protein per scoop, Nitrogen provides your muscles with the fuel they need to grow, repair, and recover. But what truly sets Nitrogen apart is its scientifically backed dual-matrix system. The Nitro Amino Matrix features a full spectrum of Branched Chain Amino Acids (BCAAs) including L-Leucine (2.5g), L-Isoleucine (1.25g), and L-Valine (1.25g) to directly support muscle repair and recovery.

The Nitro Energy Matrix includes Creatine Monohydrate (2.5g) and L-Arginine (1g) — a powerful combo for improving power output, muscular endurance, and nutrient delivery to working muscles. Nitrogen is also built for clean nutrition, with just 130 calories, 2g carbs, and 0g added sugar per serving.

Trusted by athletes and bodybuilders, Nitrogen is manufactured in GMP-certified, FDA-compliant, and HALAL-certified facilities. From your first scoop to your final rep, Nitrogen by Maxigen Nutrition is built to help you train harder, recover faster, and perform better.`,

      // These smaller fields can remain for specific sections on your page
      purityInfo:
        "The formula includes a 300 mg Digestive Enzyme Blend, which enhances nutrient absorption, prevents bloating, and ensures the protein and aminos are absorbed efficiently — no wasted gains, no gut discomfort.",
      versatility:
        "Nitrogen is formulated as a complete intra- and post-workout recovery solution that builds muscle, fuels performance, and optimizes recovery — eliminating the need for separate pre or intra-workout supplements.",
    },
    benefits: [
      // ... benefits array remains the same
      {
        title: "Complete Muscle Fuel in One Scoop",
        description:
          "Delivers 27g of premium whey protein plus a full BCAA profile, ensuring your body gets everything it needs to trigger muscle growth and recovery.",
        icon: "muscle",
      },
      {
        title: "Boosted Performance with Creatine & Arginine",
        description:
          "With 2.5g of Creatine and 1g of L-Arginine, Nitrogen supports better strength, stamina, and vascularity for more intense workouts.",
        icon: "recovery",
      },
      {
        title: "Supports Lean Muscle Gains",
        description:
          "Designed with a clean macronutrient profile—low carbs, low fat, and zero added sugar—to support muscle growth without unwanted weight gain.",
        icon: "fatloss",
      },
      {
        title: "Faster Recovery After Intense Workouts",
        description:
          "A high dose of BCAAs and fast-absorbing whey help speed up muscle repair, reducing soreness and allowing you to train more frequently.",
        icon: "calories",
      },
      {
        title: "Easy on the Stomach, No Bloating",
        description:
          "A 300 mg Digestive Enzyme Blend ensures efficient breakdown and quick absorption, preventing bloating and gut discomfort.",
        icon: "digestion",
      },
      {
        title: "Trusted, Certified, and Safe",
        description:
          "Produced in GMP-certified, HALAL-certified facilities and third-party tested, it’s a trusted choice for professional and competitive athletes.",
        icon: "certified",
      },
    ],
    idealFor: [
      "Athletes wanting an all-in-one recovery formula",
      "Individuals focused on building strength and power",
      "Bodybuilders aiming for lean muscle mass",
      "Fitness professionals seeking a performance edge",
    ],
    nutritionalFacts: {
      // ... nutritional facts remain the same
      energy: "130 kcal",
      carbohydrate: "2 gm",
      totalSugar: "0.54 gm",
      addedSugar: "0 gm",
      totalFat: "1 gm",
      saturatedFat: "0.30 gm",
      transFat: "0 gm",
      cholesterol: "8 mg",
      protein: "27 gm",
      nitroAminoMatrix: {
        lLeucine: "2.5 gm",
        lIsoleucine: "1.25 gm",
        lValine: "1.25 gm",
      },
      nitroEnergyMatrix: {
        creatineMonohydrate: "2.5 gm",
        lArginine: "1 gm",
      },
      sodium: "155 mg",
      potassium: "375 mg",
      digestiveEnzymeBlend: "300 mg",
    },
  },
  {
    id: "ripogen-ripped-whey",
    name: "Ripogen (Ripped Whey)",
    category: "Protein",
    price: 69.99, // You can adjust this price
    image: ripogenImg,
    tagline: "Shred Fat. Build Muscle. Stay Lean.",
    specs: {
      flavours: ["Chocolate Mousse", "Maple Delight"],
      weight: "5 Lbs (2.26kg)",
      servings: "56 Servings",
    },
    details: {
      // --- LONG DESCRIPTION AS REQUESTED ---
      description: `Ripogen – Ripped Whey is a cutting-edge protein formula designed for those who want more than just muscle — they want definition. Whether you're a bodybuilder prepping for a cut, an athlete focused on maintaining lean mass, or a fitness enthusiast aiming for visible results, Ripogen is your go-to solution for lean performance and fat loss support.

At its core, Ripogen delivers 27 grams of ultra-clean, fast-absorbing whey protein per serving. This helps fuel muscle growth and recovery without unnecessary fats or carbs. But what truly makes Ripogen stand out is its powerful Ripped Matrix, a hand-picked blend of fat-metabolizing and thermogenic ingredients that supports lean body composition and enhanced energy.

Unlike conventional protein powders, Ripogen is specially formulated to help you burn fat while preserving muscle mass — a critical goal for athletes working through a cutting phase. The Ripped Matrix includes L-Carnitine (500 mg), CLA (500 mg), Green Coffee Extract (200 mg), and Yohimbine (2 mg) to help transport fatty acids for energy, support metabolism, and target stubborn fat.

All of this is combined with a clean macro profile — only 120 kcal and 0g added sugar per serving. Every scoop of Ripogen is manufactured in GMP-certified, FDA-compliant, and HALAL-certified facilities and is third-party tested. If you’re chasing that lean, athletic physique, Ripogen is built for your journey.`,

      // These smaller fields can remain for specific sections on your page
      purityInfo:
        "To improve digestion and protein absorption, Ripogen also includes 300 mg of a Digestive Enzyme Blend, which ensures you get the full benefit of every scoop without bloating, gas, or discomfort.",
      versatility:
        "Ripogen gives you a two-in-one solution — premium protein for muscle, and thermogenic support for fat loss. It's ideal for those on a calorie-restricted diet or intermittent fasting schedule, where every calorie counts.",
    },
    benefits: [
      {
        title: "Dual-Action Lean Protein Formula",
        description:
          "Combines 27g of whey protein with fat-burning ingredients to build muscle while supporting fat metabolism.",
        icon: "muscle",
      },
      {
        title: "Enhanced Fat-Burning with Ripped Matrix",
        description:
          "With L-Carnitine, CLA, and Yohimbine, this thermogenic blend helps turn stored fat into energy and boosts metabolism.",
        icon: "fatloss",
      },
      {
        title: "Supports Lean Muscle Growth",
        description:
          "Delivers all the essential amino acids needed to repair muscle, prevent catabolism, and stimulate lean growth after workouts.",
        icon: "muscle",
      },
      {
        title: "Low-Calorie, Clean Nutrition",
        description:
          "At only 120 kcal per serving with no added sugar, Ripogen fits perfectly into calorie-controlled or macro-focused diets.",
        icon: "calories",
      },
      {
        title: "Promotes Faster Recovery",
        description:
          "Fast-absorbing whey protein helps reduce post-workout soreness and supports quicker muscle repair for better training consistency.",
        icon: "recovery",
      },
      {
        title: "Digestive Support, No Bloating",
        description:
          "The included 300 mg Digestive Enzyme Blend ensures every scoop is absorbed efficiently, preventing bloating and gas.",
        icon: "digestion",
      },
    ],
    idealFor: [
      "Bodybuilders in a cutting or shredding phase",
      "Athletes focused on maintaining low body fat",
      "Anyone on a calorie-restricted or keto diet",
      "Fitness enthusiasts aiming for a lean, defined physique",
    ],
    nutritionalFacts: {
      energy: "120 kcal",
      carbohydrate: "1.48 gm",
      totalSugar: "0.50 gm",
      addedSugar: "0 gm",
      totalFat: "1 gm",
      saturatedFat: "0.30 gm",
      transFat: "0 gm",
      cholesterol: "3.2 mg",
      protein: "27 gm",
      rippedMatrix: {
        lCarnitine: "500 mg",
        greenCoffeeExtract: "200 mg",
        cla: "500 mg",
        yohimbine: "2 mg",
      },
      sodium: "150 mg",
      digestiveEnzymesBlend: "300 mg",
    },
  },
  // images nahi h
    {
      id: "ultraton-hgh-mass-gainer",
      name: "Ultraton HGH (Mega Mass Gainer)",
      category: "Gainer",
      price: 89.99, // You can adjust this price
      // image: ultratonImg,
      tagline: "Unleash Size. Strength. Superior Growth.",
      specs: {
        flavours: ["The Chocoholic", "Creamy Crumble"],
        weight: "6.6lbs (3 kg)",
        servings: "30 Servings",
      },
      details: {
        // --- LONG DESCRIPTION AS REQUESTED ---
        description: `If you're struggling to gain weight, size, or real muscle mass, Ultraton HGH by Maxigen Nutrition is the high-calorie, high-impact solution you’ve been waiting for. Designed for hard-gainers, athletes, and bodybuilders, Ultraton HGH is a Mega Mass Gainer engineered to deliver the powerful nutrition your body needs to grow — big, dense, and strong.

  Each 200g serving delivers a massive 2133 kcal, 50g of premium protein, and 114g of high-quality carbohydrates. Unlike ordinary gainers loaded with empty sugars, Ultraton HGH is intelligently formulated to help you gain lean mass — not just fat. This is not just a calorie bomb; it’s a precision-engineered mass gaining tool.

  What truly sets Ultraton HGH apart is its anabolic support system. It includes Creatine Monohydrate (6g) to boost power, Glutamine (6g) to accelerate recovery, a full vitamin and mineral blend for metabolic function, and electrolytes to maintain hydration.

  Manufactured in GMP-certified, FDA-registered, and HALAL-certified facilities, Ultraton HGH uses globally sourced ingredients and is third-party tested. If your goal is to bulk up with quality size, train harder, and recover faster, then Ultraton HGH is the mass gainer that works as hard as you do.`,

        // These smaller fields can remain for specific sections on your page
        purityInfo:
          "With just 10g of sugar and no trans fats, Ultraton HGH fuels clean bulking without the common fat gain associated with most weight gainers. It's the ideal foundation for any serious mass-building program.",
        versatility:
          "The addition of 600 mg of digestive enzymes ensures this mega meal is easily broken down and absorbed, eliminating the bloating and digestive discomfort that often comes with mass gainers.",
      },
      benefits: [
        {
          title: "Extreme Calorie Support for Hard Gainers",
          description:
            "With over 2100 kcal per 200g serving, Ultraton HGH delivers the massive energy surplus your body needs to grow.",
          icon: "calories",
        },
        {
          title: "50g High-Quality Protein for Muscle Growth",
          description:
            "Each serving includes 50g of high-quality protein to support muscle protein synthesis, recovery, and lean mass gains.",
          icon: "muscle",
        },
        {
          title: "Performance Boost with 6g Creatine",
          description:
            "Creatine Monohydrate enhances ATP energy production, allowing you to train harder, lift heavier, and increase workout volume.",
          icon: "recovery",
        },
        {
          title: "Faster Recovery with 6g Glutamine",
          description:
            "Glutamine supports faster muscle recovery, reduces post-workout soreness, and strengthens immune function during intense training.",
          icon: "recovery",
        },
        {
          title: "Complete Micronutrient & Electrolyte Support",
          description:
            "Includes key vitamins and minerals like B6, B12, D3, Zinc, and Magnesium to support health, metabolism, and hormone balance.",
          icon: "certified",
        },
        {
          title: "Easy Digestion, No Bloating",
          description:
            "With a 600 mg digestive enzyme blend, this formula ensures maximum absorption and prevents bloating or discomfort.",
          icon: "digestion",
        },
      ],
      idealFor: [
        "Athletes in a mass-building phase",
        "Hard-gainers struggling to put on weight",
        "Bodybuilders seeking serious size",
        "Fitness enthusiasts wanting full-body development",
      ],
      nutritionalFacts: {
        energy: "2133 kcal",
        carbohydrate: "114 gm",
        dietaryFiber: "4 gm",
        totalSugar: "10 gm",
        totalFat: "8 gm",
        saturatedFat: "4 gm",
        transFat: "0 gm",
        cholesterol: "2 gm",
        protein: "50 gm",
        creatineMonohydrate: "6 gm",
        glutamine: "6 gm",
        vitaminB6: "400 mcg",
        vitaminB12: "200 iu",
        calcium: "400 mg",
        iron: "10 mg",
        magnesium: "2 mg",
        zinc: "2 mg",
        sodium: "300 mg",
        potassium: "2000 mg",
        digestiveEnzymeBlend: "600 mg",
      },
    },
  {
    id: "inferno-fat-burner",
    name: "Inferno (Fat Burner)",
    category: "Tablets & Capsules",
    price: 44.99, // You can adjust this price
    image: infernoImg,
    tagline: "Ignite Thermogenesis. Burn Fat. Reveal Definition.",
    specs: {
      flavours: ["N/A"],
      weight: "90 Capsules",
      servings: "30 Servings",
    },
    details: {
      // --- LONG DESCRIPTION AS REQUESTED ---
      description: `Inferno by Maxigen Nutrition is not just another fat burner — it’s an elite, science-based thermogenic formula engineered for serious athletes, gym-goers, and bodybuilders who demand visible, sustained fat loss and peak performance. With a meticulously crafted blend of 18 clinically researched ingredients, Inferno combines powerful thermogenics, appetite suppressants, energy boosters, and cognitive enhancers to help you burn more calories, reduce cravings, and maintain focus, all while preserving lean muscle mass.

The multi-stage formula includes Caffeine Anhydrous and Theobromine for clean energy, Yohimbine and Rauwolscine for intense thermogenic activation, and Green Tea & Green Coffee Bean Extract to boost metabolism. Unlike most fat burners that cause jitters, Inferno includes L-Theanine, Taurine, and N-Acetyl L-Tyrosine to promote focus, balance energy, and enhance mood during calorie restriction.

For appetite control, Chromium Picolinate and Garcinia Cambogia Extract work to support satiety and reduce sugar cravings. Every batch is third-party tested, GMP-certified, and trusted by athletes. If you're striving to uncover your leanest, sharpest physique, Inferno gives you the support you need to make every calorie count.`,

      // These smaller fields can remain for specific sections on your page
      purityInfo:
        "The formula includes Passiflora and Guggul Extract to support adrenal health and hormone balance, ideal for those undergoing heavy training. Black Pepper Extract enhances bioavailability, ensuring you absorb every milligram of fat-burning power.",
      versatility:
        "This is a multi-pathway fat burning solution covering thermogenesis, appetite control, metabolism enhancement, and mental clarity, all in one capsule-based formula.",
    },
    benefits: [
      {
        title: "Powerful Thermogenic Action",
        description:
          "Stimulates heat production and boosts your resting metabolic rate with a blend of caffeine, yohimbine, and cayenne pepper to accelerate fat loss.",
        icon: "fatloss",
      },
      {
        title: "Clean, Focused Energy with No Crash",
        description:
          "A combination of caffeine, L-theanine, and taurine provides long-lasting energy and mental focus without the crash or jitters.",
        icon: "recovery", // Using recovery as a proxy for clean energy
      },
      {
        title: "Enhanced Fat Mobilization",
        description:
          "Ingredients like L-Carnitine and Rauwolscine support the breakdown of stored fat and its conversion into usable energy.",
        icon: "fatloss",
      },
      {
        title: "Appetite Control & Craving Reduction",
        description:
          "Garcinia Cambogia and Chromium Picolinate help curb hunger and reduce sugar cravings, making it easier to stay in a calorie deficit.",
        icon: "digestion", // Using digestion as a proxy for appetite control
      },
      {
        title: "Mood & Mental Performance Support",
        description:
          "Fortified with N-Acetyl L-Tyrosine and Choline to enhance cognitive function, reduce diet-related stress, and promote a positive mindset.",
        icon: "certified", // Using certified as a proxy for mental clarity/trust
      },
      {
        title: "Full Spectrum, Scientifically Dosed Formula",
        description:
          "Delivers clinical levels of 18 premium ingredients for real, measurable results, covering every aspect of fat loss.",
        icon: "certified",
      },
    ],
    idealFor: [
      "Athletes preparing for a competition or cut",
      "Bodybuilders aiming for a shredded physique",
      "Anyone needing support during a calorie deficit",
      "Individuals looking to target stubborn fat areas",
    ],
    nutritionalFacts: {
      caffeineAnhydrous: "166 mg",
      theobromine: "50 mg",
      yohimbineExtract: "5 mg",
      rauwolscine: "50 mg",
      lCarnitineLTartrate: "100 mg",
      taurine: "66 mg",
      citrusAurantiumExtract: "66 mg",
      nAcetylLTyrosine: "66 mg",
      cholineBitartrate: "66 mg",
      lTheanine: "33 mg",
      greenTeaExtract: "200 mg",
      garciniaCambogiaFruitRindExtract: "333 mg",
      greenCoffeeBeanExtract: "300 mg",
      cayennePepperExtract: "34 mg",
      blackPepperExtract: "5 mg",
      chromiumPicolinate: "200 mcg",
      passiflora: "66 mg",
      guggulLipidExtract: "66 mg",
      cla: "100 mg",
      gingerExtract: "100 mg",
      grapeSeedExtract: "50 mg",
      digestiveEnzymeBlend: "300 mg",
    },
  },
  {
    id: "ultima-24-multivitamin",
    name: "Ultima-24 (Multivitamins)",
    category: "Tablets & Capsules",
    price: 34.99, // You can adjust this price
    image: ultimaImg,
    tagline: "Total Health, Peak Performance, 24/7 Support.",
    specs: {
      flavours: ["N/A"],
      weight: "60 Tablets",
      servings: "30 Servings",
    },
    details: {
      // --- LONG DESCRIPTION AS REQUESTED ---
      description: `Ultima-24 by Maxigen Nutrition is not just a multivitamin — it’s a complete daily nutritional powerhouse designed to meet the intense demands of athletes, bodybuilders, and fitness enthusiasts. Intense workouts and active routines can deplete key nutrients quickly. That’s why Ultima-24 is formulated with a synergistic blend of over 40 premium ingredients to help you perform, recover, and thrive.

What makes Ultima-24 different is its targeted support systems. Beyond a full-spectrum Vitamin & Mineral Complex, it includes a dedicated Male Support Blend with Lycopene and Saw Palmetto for hormonal balance. An Immune & Recovery Blend featuring Echinacea and Spirulina strengthens your body’s defenses, while the Antioxidant & Energy Blend with Green Tea and Grape Seed Extract combats free radicals and boosts cellular energy.

Furthermore, an Amino Acid blend supports muscle repair, and a Digestive Enzyme Blend enhances the absorption of every nutrient. This is not your average multivitamin; it’s an all-in-one elite performance and wellness formula, manufactured in GMP-certified, FDA-compliant, and HALAL-certified facilities.`,

      // These smaller fields can remain for specific sections on your page
      purityInfo:
        "Every batch is third-party tested for purity, potency, and safety. The formula contains no proprietary blends, offering full label transparency with clinical dosing you can trust.",
      versatility:
        "This is a full-body support system providing round-the-clock support for energy, muscle repair, mental focus, hormone regulation, and immunity — all in one daily serving.",
    },
    benefits: [
      {
        title: "All-Day Energy & Performance",
        description:
          "Fuels your body with a full spectrum of B-complex vitamins and amino acids that support cellular energy production, helping to eliminate fatigue.",
        icon: "recovery", // Using recovery as a proxy for energy
      },
      {
        title: "Strengthened Immune System",
        description:
          "With Echinacea, Spirulina, and Beta Glucan, Ultima-24 helps protect against illness, inflammation, and oxidative stress during intense training.",
        icon: "certified",
      },
      {
        title: "Muscle Repair & Recovery",
        description:
          "The amino acid blend, along with zinc and magnesium, plays a key role in protein synthesis, tissue repair, and efficient muscle recovery.",
        icon: "muscle",
      },
      {
        title: "Hormonal & Prostate Support",
        description:
          "The Male Support Matrix with Saw Palmetto and Stinging Nettle supports testosterone balance and prostate health.",
        icon: "certified",
      },
      {
        title: "Antioxidant Protection for Vitality",
        description:
          "Packed with polyphenols from Green Tea, Grape Seed, and Pomegranate to protect cells from oxidative damage and boost circulation.",
        icon: "digestion", // Using digestion as a proxy for vitality/health
      },
      {
        title: "Enhanced Nutrient Absorption",
        description:
          "A digestive enzyme blend ensures every vitamin and mineral is fully digested and absorbed, maximizing the effectiveness of your diet.",
        icon: "digestion",
      },
    ],
    idealFor: [
      "Athletes needing advanced micronutrient replenishment",
      "Gym-goers looking to maintain peak performance year-round",
      "Bodybuilders requiring metabolic and hormonal support",
      "Men seeking overall vitality, hormonal balance, and immune support",
    ],
    nutritionalFacts: {
      vitaminA: "3000 mcg",
      vitaminC: "150 mg",
      vitaminD: "37.5 mcg",
      vitaminE: "134 mg",
      vitaminK: "75 mcg",
      vitaminB1: "7 mg",
      vitaminB2: "7.5 mg",
      vitaminB3: "30 mg",
      vitaminB6: "7.5 mg",
      vitaminB12: "27 mcg",
      vitaminB5: "10 mg",
      biotin: "300 mcg",
      magnesium: "50 mg",
      zinc: "15 mg",
      copper: "2 mg",
      selenium: "30 mcg",
      chromium: "120 mcg",
      molybdenum: "75 mcg",
      maleSupportBlend: "1000 mg",
      immuneSupportBlend: "300 mg",
      antioxidantAndEnergySupport: "1200 mg",
      aminoBlend: "500 mg",
      enzymeBlend: "100 mg",
    },
  },
  {
    id: "omega-3-fish-oil",
    name: "Omega 3 (Triple Strength Fish Oil)",
    category: "Tablets & Capsules",
    price: 24.99, // You can adjust this price
    image: omegaImg,
    tagline:
      "Fuel Recovery, Protect Joints, Support Heart & Brain – Naturally.",
    specs: {
      flavours: ["N/A"],
      weight: "90 Softgels",
      servings: "90 Servings",
    },
    details: {
      // --- LONG DESCRIPTION AS REQUESTED ---
      description: `When it comes to recovery, inflammation, heart health, and joint protection, nothing beats Omega-3. Introducing Omega 3 – Triple Strength Fish Oil by Maxigen Nutrition – your trusted daily ally in building a resilient body. Each softgel delivers 1000 mg of high-quality fish oil, containing a potent 400 mg EPA and 300 mg DHA, the two most important Omega-3 fatty acids for athletes.

Most fish oil supplements are underdosed, but Maxigen’s Triple Strength formula delivers a clinical dose in just one capsule. Our fish oil is derived from cold-water, wild-caught fish and undergoes molecular distillation to remove heavy metals, mercury, and toxins, ensuring pharmaceutical-grade purity.

Intense physical activity leads to increased inflammation and joint wear. This formula is tailored to combat exercise-induced inflammation, support cardiovascular efficiency, protect joints, and sharpen focus. Manufactured in GMP-certified, FDA-registered, and HALAL-certified facilities, Maxigen Omega 3 is a premium-grade supplement backed by science.`,

      // These smaller fields can remain for specific sections on your page
      purityInfo:
        "We use advanced softgel technology to ensure smooth digestion, no fishy burps, and maximum nutrient absorption. The formula is third-party tested, mercury-free, and contains no GMOs, gluten, dairy, or soy.",
      versatility:
        "This is your natural performance booster and recovery partner. Whether you're lifting, sprinting, swimming, or cycling, Omega 3 provides the foundation for a stronger body.",
    },
    benefits: [
      {
        title: "Reduces Joint Inflammation and Pain",
        description:
          "EPA acts as a powerful anti-inflammatory, helping reduce joint stiffness, soreness, and discomfort after heavy training sessions.",
        icon: "digestion", // Using digestion icon as a proxy for joint health
      },
      {
        title: "Supports Heart Health and Circulation",
        description:
          "Helps regulate blood pressure, lower triglycerides, and improve blood flow, supporting cardiovascular endurance and oxygen delivery.",
        icon: "digestion", // Using digestion icon as a proxy for heart health
      },
      {
        title: "Enhances Brain Function and Focus",
        description:
          "DHA is essential for brain health, boosting memory, reaction time, and concentration, which is perfect for maintaining sharpness during workouts.",
        icon: "certified", // Using certified icon as a proxy for mental clarity
      },
      {
        title: "Accelerates Recovery from Training",
        description:
          "Helps reduce delayed onset muscle soreness (DOMS), aids muscle repair, and speeds up recovery for more consistent training sessions.",
        icon: "recovery",
      },
      {
        title: "Promotes Hormonal Balance and Immune Health",
        description:
          "Assists in regulating hormone production and enhances immune function, crucial during heavy training phases when the body is under stress.",
        icon: "certified",
      },
      {
        title: "Clean, Pure, and Easy to Digest",
        description:
          "Our molecularly distilled, easy-to-swallow softgels are odorless and burp-free, offering clean absorption without digestive discomfort.",
        icon: "digestion",
      },
    ],
    idealFor: [
      "Bodybuilders needing enhanced recovery and joint care",
      "Strength athletes wanting better inflammation control",
      "Endurance athletes seeking improved cardiovascular capacity",
      "Anyone who wants better joint, brain, and heart support",
      "Fitness enthusiasts looking to improve focus and recovery",
    ],
    nutritionalFacts: {
      energy: "0 kcal",
      totalFat: "0 mg",
      saturatedFat: "0 mg",
      transFat: "0 mg",
      totalCarbohydrate: "0 mg",
      fishOil: "1000 mg",
      eicosapentaenoicAcidEPA: "400 mg",
      docosahexaenoicAcidDHA: "300 mg",
    },
  },
  {
    id: "fish-oil-pro-4xl-omega-3",
    name: "Fish Oil Pro (4XL Strength Omega 3)",
    category: "Tablets & Capsules",
    price: 39.99, // You can adjust this price
    image: fishOilProImg,
    tagline: "Train Smart. Recover Harder. Live Stronger.",
    specs: {
      flavours: ["N/A"],
      weight: "60 Softgels",
      servings: "60 Servings",
    },
    details: {
      // --- LONG DESCRIPTION AS REQUESTED ---
      description: `Maxigen Nutrition brings you its most advanced omega-3 supplement to date — Fish Oil Pro. Specifically designed for athletes and high-performance individuals, this is not your average fish oil. With an industry-leading 1800 mg of pure fish oil, including a whopping 720 mg EPA, 480 mg DHA, and 600 IU Vitamin D3, Fish Oil Pro delivers 4X the strength of standard omega-3 supplements in one convenient softgel.

Most omega-3 supplements provide diluted doses, but Fish Oil Pro gives you the therapeutic performance benefits you need to reduce inflammation, support brain function, and promote cardiovascular health. The addition of Vitamin D3 is critical for athletes, as it plays a role in testosterone production, bone density, and immune strength, creating a powerful dual-action formula.

Our oil is sourced from wild-caught, cold-water fish and is molecularly distilled to remove harmful contaminants like mercury and heavy metals. Produced in a GMP-certified, HALAL, and FDA-compliant facility, you get pure, pharmaceutical-grade oil backed by third-party testing. With Fish Oil Pro, you're building a foundation for peak physical performance and longevity.`,

      // These smaller fields can remain for specific sections on your page
      purityInfo:
        "Each softgel is easy to digest, burp-free, and odorless — thanks to our enteric-coated delivery system that ensures maximum bioavailability without the fishy burps or stomach discomfort.",
      versatility:
        "This is a high-performance recovery tool, brain booster, joint protector, and hormonal optimizer designed for those who train, recover, and live at a higher standard.",
    },
    benefits: [
      {
        title: "Superior Joint Support & Anti-Inflammatory Power",
        description:
          "High-dose EPA and DHA reduce inflammation in joints and muscles, making recovery faster and soreness less intense for lifters and runners.",
        icon: "digestion", // Using digestion icon as a proxy for joint health
      },
      {
        title: "Heart & Cardiovascular Health",
        description:
          "Clinically proven to lower triglycerides, improve circulation, and regulate heart rhythm, enhancing overall endurance for high-intensity athletes.",
        icon: "digestion", // Using digestion icon as a proxy for heart health
      },
      {
        title: "Cognitive Function & Mental Focus",
        description:
          "DHA is vital for brain health, helping to improve memory, concentration, and reaction time, giving you a mental edge during workouts.",
        icon: "certified", // Using certified icon as a proxy for mental clarity
      },
      {
        title: "Faster Muscle Recovery & Less Soreness",
        description:
          "By reducing systemic inflammation, Fish Oil Pro helps muscles recover more efficiently post-training, meaning less DOMS and more consistent sessions.",
        icon: "recovery",
      },
      {
        title: "Hormonal Balance & Testosterone Support",
        description:
          "Vitamin D3 is a natural testosterone booster that, combined with omega-3s, supports optimal hormone function, mood, and metabolic health.",
        icon: "certified",
      },
      {
        title: "Immune System Reinforcement",
        description:
          "Omega-3s and Vitamin D3 together strengthen the immune system, perfect for cutting seasons or heavy training cycles where immunity is at risk.",
        icon: "certified",
      },
    ],
    idealFor: [
      "Bodybuilders wanting faster recovery and joint care",
      "Athletes needing endurance and cardiovascular strength",
      "Gym-goers looking to maintain energy and focus",
      "Anyone experiencing joint stiffness or mental fog",
    ],

    nutritionalFacts: {
      energy: "0 kcal",
      totalFat: "0 mg",
      saturatedFat: "0 mg",
      transFat: "0 mg",
      totalCarbohydrate: "0 mg",
      fishOilProviding: "1800 mg",
      eicosapentaenoicAcidEPA: "720 mg",
      docosahexaenoicAcidDHA: "480 mg",
      vitaminE: "10 iu",
      vitaminD3: "600 iu",
    },
  },
  {
    id: "nitrix-oxide-tablets",
    name: "Nitrix Oxide (Advanced Pump)",
    category: "Pre/Post Workout",
    price: 42.99, // You can adjust this price
    image: nitrixImg,
    tagline: "Powerful Pump. Elevated Performance. Total Recovery.",
    specs: {
      flavours: ["N/A"],
      weight: "90 Tablets",
      servings: "30 Servings",
    },
    details: {
      // --- LONG DESCRIPTION AS REQUESTED ---
      description: `When you’re pushing the limits in the gym, every rep counts. Introducing Nitric Oxide Tablets by Maxigen Nutrition — a scientifically formulated vasodilator and energy support supplement designed to deliver massive muscle pumps, enhanced nutrient delivery, and improved recovery for serious athletes.

Our formula isn’t just about boosting nitric oxide; it’s a full-spectrum performance enhancer. Each serving combines a multi-form Creatine Blend (Monohydrate, Citrate, HCL) for strength, with advanced pump agents like Arginine Nitrate and Citrulline Malate to increase muscle fullness and endurance. This is more than a pump product — it’s a recovery, hormonal, and circulatory support system.

We also include cognitive and adaptogenic elements like Vitamin B12, D3, CoQ10, and Rhodiola Rosea to support hormonal health, antioxidant protection, and energy metabolism. This combination delivers what many separate supplements try to provide—pump, energy, strength, and recovery—all in one clean, tested formula.`,

      // These smaller fields can remain for specific sections on your page
      purityInfo:
        "Manufactured under GMP, third-party tested, and using premium raw materials; free of banned substances and non-transparent proprietary blends. Each tablet contains clinically inspired dosages, not sketchy 'proprietary pumps' with unclear amounts.",
      versatility:
        "This all-in-one solution is ideal for pre-workout use to achieve full pumps and maximized training volume, or for athletes mid-cycle chasing muscle fullness, vascularity, and strength.",
    },
    benefits: [
      {
        title: "Massive Muscle Pumps & Vascularity",
        description:
          "High doses of Arginine Nitrate and Citrulline Malate enhance nitric oxide production, dilating blood vessels for amplified muscle pumps.",
        icon: "muscle",
      },
      {
        title: "Strength, Power & ATP Boost",
        description:
          "A combined creatine blend plus ATP support delivers faster energy replenishment during heavy lifts, leading to increased strength and endurance.",
        icon: "recovery", // Using recovery as a proxy for strength/power
      },
      {
        title: "Faster Recovery & Reduced Fatigue",
        description:
          "Ingredients like betaine, ornithine, and CoQ10 assist in buffering lactic acid and reducing oxidative stress, minimizing post-workout soreness.",
        icon: "recovery",
      },
      {
        title: "Hormonal & Immune Support",
        description:
          "Vitamins D3, B12, K2, and Rhodiola rosea protect against stress and support immune health, essential during demanding training cycles.",
        icon: "certified",
      },
      {
        title: "Enhanced Endurance & Performance",
        description:
          "Improves oxygen delivery and delays onset of fatigue, allowing for longer, more intense cardio, HIIT, or extended strength sets.",
        icon: "calories", // Using calories icon as a proxy for endurance/time
      },
      {
        title: "Clean, Multi-Functional Formula",
        description:
          "Combines pre-workout, creatine, and pump enhancers into one all-in-one solution, reducing supplement clutter and saving you money.",
        icon: "certified",
      },
    ],
    idealFor: [
      "Pre-workout to achieve full pumps and maximized training volume",
      "Mid-cycle athletes chasing muscle fullness and vascularity",
      "Bodybuilders prepping for stage needing lean fullness",
      "Anyone wanting improved nutrient delivery and recovery",
    ],
    nutritionalFacts: {
      vitaminD3: "100 iu",
      vitaminB12: "50 mcg",
      vitaminK2: "50 mcg",
      folicAcid: "200 mcg",
      creatineBlend: {
        total: "1600 mg",
        creatineCitrate: "400 mg",
        creatineMonohydrate: "1000 mg",
        creatineHydrochlorideHCL: "200 mg",
      },
      powerBlendMatrix: {
        total: "3500 mg",
        beetrootPowder: "200 mg",
        rhodiolaRoseaRootExtract: "200 mg",
        coq10: "100 mg",
        arginineNitrate: "1000 mg",
        lOrnithineHCL: "400 mg",
        betaineHCL: "200 mg",
        inositol: "300 mg",
        citrullineMalate: "800 mg",
        adenosineTriphosphateATP: "300 mg",
      },
    },
  },
  {
    id: "testagen-testosterone-booster",
    name: "Testagen (Testosterone Booster)",
    category: "Tablets & Capsules",
    price: 54.99, // You can adjust this price
    image: testagenImg,
    tagline: "Raise Your Edge. Amplify Strength. Redefine Masculinity.",
    specs: {
      flavours: ["N/A"],
      weight: "60 Tablets",
      servings: "30 Servings",
    },
    details: {
      // --- LONG DESCRIPTION AS REQUESTED ---
      description: `When your goals include maximizing strength, building lean muscle, and maintaining peak male performance, natural testosterone levels play a central role. Testagen is a cutting-edge testosterone enhancement formula meticulously engineered for athletes, bodybuilders, and fitness enthusiasts who refuse to compromise. It combines traditional herbal wisdom with modern scientific validation, delivering premium ingredients in high-potency doses.

Unlike many products, Testagen is loaded with a robust synergy of vitamins, minerals, amino acids, and adaptogenic botanicals to support hormone balance, stamina, and recovery. The herbal matrix—including Cordyceps, Ashwagandha, Nettle Root, Shilajit, Tongkat Ali, and Tribulus—supports multiple performance pathways. For direct hormonal stimulation, it provides D-Aspartic Acid to support LH release, a key signal for testosterone production.

Recovery is where gains become real. Testagen includes ingredients that support muscle repair and antioxidant protection. Manufactured under GMP, third-party tested, and featuring full label transparency, Testagen is a full-spectrum, elite formula built for those who train hard and expect results.`,

      // These smaller fields can remain for specific sections on your page
      purityInfo:
        "We believe in full label transparency. Every ingredient in Testagen is clearly listed with no hidden proprietary blends. It is third-party tested for purity and is free from banned substances.",
      versatility:
        "This potent blend ensures you get stimulus for testosterone production, hormonal regulation, libido, energy, and recovery in each serving.",
    },
    benefits: [
      {
        title: "Natural Testosterone Elevation",
        description:
          "A blend of D-Aspartic Acid, Zinc, and Vitamin D3 works to stimulate natural testosterone production, promoting strength and lean muscle.",
        icon: "muscle",
      },
      {
        title: "Enhanced Strength, Power & Performance",
        description:
          "Ingredients like L-Arginine, Cordyceps, and Tribulus improve nitric oxide production, stamina, and power output for more intense sessions.",
        icon: "recovery", // Using recovery as a proxy for strength
      },
      {
        title: "Improved Libido & Hormonal Balance",
        description:
          "Herbs such as Ashwagandha, Tongkat Ali, and Tribulus combine to support sexual drive and hormonal equilibrium.",
        icon: "certified",
      },
      {
        title: "Recovery Acceleration & Reduced Fatigue",
        description:
          "Minerals like Magnesium and adaptogens like Ashwagandha and Shilajit aid in reducing cortisol, improving sleep quality, and lessening burn-out.",
        icon: "recovery",
      },
      {
        title: "Mental Clarity, Mood & Stress Resilience",
        description:
          "L-Dopa and adaptogens contribute to improved mood, neurotransmitter balance, and stress handling for better focus.",
        icon: "certified",
      },
      {
        title: "Support for Free Testosterone",
        description:
          "Nettle Root and DIM help minimize testosterone binding by SHBG, enhancing free testosterone levels for anabolic effects.",
        icon: "muscle",
      },
    ],
    idealFor: [
      "Men lifting heavy who want better gains and less fatigue",
      "Fitness enthusiasts in cutting phases wanting to preserve lean muscle",
      "Athletes seeking improved stamina, libido, and hormonal balance",
      "Anyone noticing declines in energy due to age, stress, or training",
    ],
    nutritionalFacts: {
      vitaminD3: "80 mcg",
      vitaminK2: "50 mcg",
      calcium: "200 mg",
      magnesium: "100 mg",
      zinc: "30 mg",
      cordycepsSinensis: "500 mg",
      withaniaSomniferaAshwagandha: "500 mg",
      dAsparticAcid: "200 mg",
      nettleRootExtract: "100 mg",
      shilajit: "150 mg",
      yohimbine: "2.5 mg",
      chlorophytumBorivilianumSafedMusli: "100 mg",
      fenugreek: "300 mg",
      mushroomExtract: "100 mg",
      tongkatAli: "100 mg",
      lDopa: "100 mg",
      lArginine: "500 mg",
      tribulus: "300 mg",
      dim: "100 mg",
      zincSulphate: "100 mg",
    },
  },
  // images nahi h
  {
    id: 'zma-night-recovery',
    name: 'ZMA (Night Recovery & Performance Support)',
    category: 'Tablets & Capsules',
    price: 29.99, // You can adjust this price
    // image: zmaImg,
    tagline: 'Recover Deeper. Sleep Better. Wake Stronger.',
    specs: {
      flavours: ['N/A'],
      weight: '30 Tablets',
      servings: '30 Servings'
    },
    details: {
      // --- LONG DESCRIPTION AS REQUESTED ---
      description: `Training hard and pushing limits means recovery isn’t optional—it’s fundamental. ZMA by Maxigen Nutrition is a premium night-time recovery complex designed for athletes and bodybuilders who understand that gains are made while you rest. This is not your average zinc-magnesium pill; it’s a powerhouse formula combining the best forms of minerals, adaptogens, and sleep aids to support recovery, hormone balance, and restful sleep.

  Many ZMA supplements simply combine basic forms of zinc, magnesium, and B6. Our formula goes far beyond, using highly bioavailable Zinc Aspartate and Magnesium Glycinate to ensure maximum absorption with lower digestive irritation. What truly sets this formula apart is the blend of sleep and stress-modulating botanicals: Ashwagandha helps reduce cortisol, while Valerian Root and 5-HTP help improve sleep onset and quality.

  By combining essential minerals with adaptogens, sleep herbs, and mood enhancers, this ZMA is designed for serious performance. It helps you recover, repair, reduce bodily stress, and optimize hormone balance so you wake up ready for more.`,

      // These smaller fields can remain for specific sections on your page
      purityInfo: "Manufactured in a GMP-certified facility and third-party tested for purity and heavy metals. We use premium, clinically supported ingredients with transparent labeling—no proprietary blends hiding dosages.",
      versatility: "This formula is ideal for anyone who struggles with muscle soreness, restless nights, or hormonal dips due to chronic training, a stressful job, or inconsistent sleep."
    },
    benefits: [
      {
        title: 'Improved Sleep Quality & Deep Recovery',
        description: 'A combination of magnesium glycinate, valerian root, and 5-HTP supports relaxing sleep onset and prolongs deep sleep phases for vital repair.',
        icon: 'recovery'
      },
      {
        title: 'Superior Mineral Replenishment & Hormone Support',
        description: 'Restores essential minerals lost through intense training and sweat, which are critical for testosterone support, enzyme systems, and metabolic health.',
        icon: 'certified'
      },
      {
        title: 'Reduced Stress & Enhanced Adaptation',
        description: 'Ashwagandha and Hibiscus help modulate cortisol and oxidative stress, aiding your body’s adaptation to training and reducing burnout.',
        icon: 'certified'
      },
      {
        title: 'Faster Muscle Repair & Less Soreness',
        description: 'Magnesium supports muscle relaxation while zinc contributes to tissue repair, reducing DOMS and allowing for more consistent training.',
        icon: 'muscle'
      },
      {
        title: 'Optimized Absorption & Bioavailability',
        description: 'Uses highly bioavailable mineral forms and includes Black Pepper Extract to enhance absorption, ensuring active ingredients deliver maximum effect.',
        icon: 'digestion'
      },
      {
        title: 'Balanced Mood & Hormonal Health',
        description: '5-HTP, a serotonin precursor, and calming herbs help regulate mood, while minerals support overall hormonal balance.',
        icon: 'digestion' // Using digestion as a proxy for balance
      }
    ],
    idealFor: [
      'Strength athletes & bodybuilders needing improved recovery & sleep',
      'Gym-goers pushing high volume or doing double sessions',
      'Fitness enthusiasts with stressful jobs or inconsistent sleep',
      'Anyone struggling with muscle soreness or restless nights'
    ],
    nutritionalFacts: {
      zincAspartate: '20 mg',
      magnesiumGlycinate: '440 mg',
      vitaminB6: '2 mg',
      ashwagandha: '200 mg',
      valerianRoot: '150 mg',
      fiveHTP: '100 mg',
      blackPepperExtract: '5 mg',
      hibiscusFlowerExtract: '100 mg'
    }
  },
  // yha bhe image nAHI H
  {
    id: 'eaa-bcaa-complex',
    name: 'EAA BCAA Complex',
    category: 'Pre/Post Workout',
    price: 39.99, // You can adjust this price
    // image: eaaBcaaImg,
    tagline: 'Fuel Your Muscles. Fast Recovery. Every Rep Counts.',
    specs: {
      flavours: ['Orange Lust', 'Strawberry Mirage'],
      weight: '12.34 OZ (350 gm)',
      servings: '30 Servings'
    },
    details: {
      // --- LONG DESCRIPTION AS REQUESTED ---
      description: `When you train hard and demand more from your body, you need a complete amino acid profile. EAA BCAA Complex by Maxigen Nutrition is more than a supplement—it’s your cellular repair kit, ensuring your muscles are fed, your body is protected, and your performance is maximized. This formula is meticulously designed for bodybuilders, endurance athletes, and anyone looking to push their performance boundaries.

  Rather than just the 3 BCAAs, this complex includes all nine essential amino acids (EAAs) to fully support muscle protein synthesis, immune function, and more. Leucine is present in a high 2,500 mg dose to trigger the mTOR pathway for muscle growth. With zero sugar, zero fats, and only 10 calories per serving, every scoop is pure functional nutrition.

  Many products only include BCAAs, but research shows that muscle protein synthesis requires all essential amino acids. This complex supplies the complete base so your body can build, repair, and perform optimally. It's manufactured for purity and efficacy in GMP-certified, third-party tested facilities.`,

      // These smaller fields can remain for specific sections on your page
      purityInfo: "With 0g fat and 0g carbohydrates, this supplement keeps your macros clean. It contains no unnecessary calories or fillers, just amino acids and electrolytes to support cellular hydration, nerve function, and muscle contraction.",
      versatility: "Use it pre-workout, intra-workout, or post-workout. Its fast absorption and zero sugar load make it ideal for fasted training or calorie-controlled phases to reduce muscle breakdown."
    },
    benefits: [
      {
        title: 'Optimized Muscle Protein Synthesis',
        description: 'With high-dose leucine plus all nine EAAs, this formula triggers muscle growth more effectively than BCAA-only products.',
        icon: 'muscle'
      },
      {
        title: 'Prevents Muscle Breakdown',
        description: 'Helps stop catabolism by supplying essential aminos during long sessions, fasted workouts, or calorie deficits to protect lean tissue.',
        icon: 'muscle'
      },
      {
        title: 'Zero Sugar, Clean Performance Fuel',
        description: 'Designed with purity in mind, the formula has no sugar or carbs, supporting performance without interfering with diet goals.',
        icon: 'calories'
      },
      {
        title: 'Hydration & Endurance Support',
        description: 'With added electrolytes and taurine, this blend supports fluid balance, nerve signaling, and reduces the risk of cramping.',
        icon: 'recovery'
      },
      {
        title: 'Faster Recovery & Reduced Soreness',
        description: 'Accelerates the repair process by delivering aminos immediately after training, reducing DOMS and improving readiness for your next session.',
        icon: 'recovery'
      },
      {
        title: 'Improved Mental Focus',
        description: 'Essential aminos like Tryptophan contribute to neurotransmitter production, supporting mood, focus, and reducing mental fatigue.',
        icon: 'certified'
      }
    ],
    idealFor: [
      'Athletes during high volume training to reduce muscle breakdown',
      'Those doing fasted workouts who want to protect lean mass',
      'Lifters and bodybuilders looking to maximize recovery',
      'Endurance athletes needing support during long workouts',
      'People with gaps in their dietary protein intake'
    ],
    nutritionalFacts: {
      calories: '10',
      totalFat: '0',
      totalCarbohydrate: '0',
      totalSugar: '0',
      addedSugar: '0g',
      calcium: '50 mg',
      phosphorus: '20 mg',
      magnesium: '20 mg',
      sodium: '80 mg',
      potassium: '50 mg',
      essentialAminoAcidComplex: {
        lLeucineBCAA: '2500 mg',
        lIsoleucineBCAA: '1250 mg',
        lValineBCAA: '1250 mg',
        lLysine: '1200 mg',
        lThreonine: '528 mg',
        lPhenylalanine: '400 mg',
        lMethionine: '270 mg',
        lHistidine: '430 mg',
        lTryptophan: '172 mg'
      },
      hydroComplex: {
        taurine: '1000 mg'
      }
    }
  },
  // same as
  {
    id: "maxrage-ace-pre-workout",
    name: "Maxrage (Ace Pre Workout)",
    category: "Pre/Post Workout",
    price: 49.99, // You can adjust this price
    // image: maxrageImg,
    tagline: "Performance, Pump & Focus Unleashed.",
    specs: {
      flavours: ["Velvet Berry", "Icy Melon"],
      weight: "10.58 OZ (300 gm)",
      servings: "30 Servings",
    },
    details: {
      // --- LONG DESCRIPTION AS REQUESTED ---
      description: `When it comes to pushing past plateaus and turning every training session into a defining moment, you need a pre-workout that delivers. MaxRage ACE Pre-Workout is engineered for maximum energy, explosive pumps, and sharp mental clarity. For athletes, bodybuilders, and fitness freaks who demand more from every rep, this is your rocket fuel.

MaxRage ACE is a high-potency formula built around three core complexes. The Performance & Pump Complex is loaded with Beta-Alanine to buffer lactic acid, Betaine for power output, and a massive 4000mg of L-Citrulline Malate for intense pumps. The Cognitive Energy Blend combines fast-acting Caffeine with L-Theanine to provide a smooth, jitter-free focus, while L-Tyrosine supports mental resilience under fatigue.

Finally, an Absorption & Support Matrix with Black Pepper Extract and B-Vitamins ensures you get the maximum effect from every ingredient. All components are openly disclosed with no proprietary blends, manufactured in GMP-certified facilities, and third-party tested.`,

      // These smaller fields can remain for specific sections on your page
      purityInfo:
        "The formula contains no banned substances, weak fillers, or artificial colors. You get quality ingredients, rigorously tested for purity and potency.",
      versatility:
        "This all-in-one formula is ideal for hard-training bodybuilders, strength athletes, and anyone who’s tired of underdosed, weak, or jitter-heavy pre-workouts.",
    },
    benefits: [
      {
        title: "Explosive Pump & Muscle Fullness",
        description:
          "With 4,000 mg of L-Citrulline Malate plus AKG, MaxRage delivers an intense nitric oxide boost, increasing blood flow for a massive pump.",
        icon: "muscle",
      },
      {
        title: "Enhanced Strength & Volume",
        description:
          "Beta-Alanine, Betaine, and Creatine combine to improve muscular endurance, reduce fatigue, and support greater workout volume.",
        icon: "recovery", // Using recovery as a proxy for strength
      },
      {
        title: "Mental Clarity & Focus Without Jitters",
        description:
          "Caffeine provides a strong energy lift, while L-Theanine and Taurine smooth out potential jitteriness for sharp, sustained focus.",
        icon: "certified",
      },
      {
        title: "Enhanced Energy & Fatigue Resistance",
        description:
          "A combination of caffeine, theobromine, and ATP helps you maintain energy throughout your workout, delaying fatigue.",
        icon: "recovery",
      },
      {
        title: "Better Nutrient Absorption",
        description:
          "Black Pepper Extract improves the absorption of several compounds, while B-Vitamins support energy metabolism and reduce nutrient exhaustion.",
        icon: "digestion",
      },
      {
        title: "Reliable, Safe, and Full-Strength Formula",
        description:
          "Produced in rigorous GMP facilities and third-party tested, with precise dosing and transparent labeling for full confidence.",
        icon: "certified",
      },
    ],
    idealFor: [
      "Hard-training bodybuilders pushing for hypertrophy and size",
      "Strength athletes wanting more power and explosive sets",
      "Fitness freaks who need both stamina and focus",
      "Gym-goers who want consistent energy and pump for every workout",
    ],

    nutritionalFacts: {
      energy: "10 kcal",
      totalFat: "0",
      totalCarbohydrate: "0",
      protein: "0",
      performanceAndPumpComplex: {
        total: "6550 mg",
        betaAlanine: "2800 mg",
        betaineAnhydrous: "1500 mg",
        lCitrullineMalate: "4000 mg",
        synephrineHCL: "10 mg",
        akg: "500 mg",
        atp: "100 mg",
        creatine: "2000 mg",
      },
      cognitiveEnergyBlend: {
        total: "1650 mg",
        caffeineAnhydrous: "300 mg",
        lTheanine: "100 mg",
        theobromine: "100 mg",
        lTyrosine: "500 mg",
        taurine: "1000 mg",
      },

      absorptionAndSupportMatrix: {
        total: "50 mg + 100 mcg",
        blackPepperExtract: "10 mg",
        niacin: "30 mg",
        vitaminB6: "10 mg",
        vitaminB12: "100 mcg",
      },
    },
  },
{
  id: 'creatine-monohydrate-pure',
  name: 'Creatine Monohydrate',
  category: 'Pre/Post Workout',
  price: 22.99, // You can adjust this price
  image: creatineImg,
  tagline: 'Strength. Power. Endurance. Recovery. Pure and Proven.',
  specs: {
    flavours: ['Unflavoured'],
    weight: '250gm',
    servings: '83 Servings'
  },
  details: {
    // --- LONG DESCRIPTION AS REQUESTED ---
    description: `If you're pushing through heavy lifts, chasing PRs, or committed to getting better every session, there’s one supplement athletes trust: Creatine Monohydrate. At a pure 3,000 mg (3 g) dose per serving, our Creatine Monohydrate delivers exactly what your muscles need—no fluff, no fillers—for noticeable strength, power, and performance gains.

Our formula stands apart due to its purity and micronized formula for quicker dissolution and better absorption. No weird taste or gritty texture—just smooth mixability. This single-ingredient product is backed by decades of research showing that 3-5 grams daily are optimal for strength and lean body mass improvements.

Creatine monohydrate is stored in your muscles as phosphocreatine. During high-intensity activities like weightlifting, it rapidly regenerates ATP, the primary energy currency of muscle contraction. This supports more reps, heavier sets, and enhanced muscle volumization.`,

    // These smaller fields can remain for specific sections on your page
    purityInfo: "We use ultra-purified creatine monohydrate with negligible impurities. It is manufactured in GMP-certified facilities, third-party lab tested, and free from banned substances. Athletes trust this formula for its transparency and safety.",
    versatility: "This is creatine pure and simple. No added fillers, flavors, carbs, or stimulants. It’s ideal for stacking with your favorite pre-workout, protein shake, or beverage of choice."
  },
  benefits: [
    {
      title: 'Increased Strength & Power Output',
      description: 'Boosts phosphocreatine stores, allowing you to push heavier weights, perform more reps, and deliver more explosive force in lifts.',
      icon: 'recovery' // Using recovery as a proxy for power
    },
    {
      title: 'Enhanced Muscle Endurance & Volume',
      description: 'Helps delay fatigue during high-intensity, repeated efforts, allowing for greater training stimulus and hypertrophic adaptation over time.',
      icon: 'muscle'
    },
    {
      title: 'Faster Recovery & Less Muscle Damage',
      description: 'Supports recovery by reducing markers of muscle damage, enhancing cellular hydration, and buffering lactic acid for less soreness.',
      icon: 'recovery'
    },
    {
      title: 'Improved Muscle Fullness & Hydration',
      description: 'Draws water into muscle cells, enhancing cell volume. This improves the visual pump and can promote better muscle protein synthesis.',
      icon: 'muscle'
    },
    {
      title: 'Cognitive & Neurological Support',
      description: 'Recent research suggests creatine may aid cognitive tasks, memory, and fatigue resistance during mentally demanding work.',
      icon: 'certified'
    },
    {
      title: 'Backed by Science, Safe for Daily Use',
      description: 'One of the most researched supplements in sports nutrition. Its safety is well-documented when taken at 3-5g per day with adequate hydration.',
      icon: 'certified'
    }
  ],
  idealFor: [
    'Strength athletes & powerlifters seeking maximal strength',
    'Bodybuilders aiming for greater volume and muscle fullness',
    'Fitness enthusiasts doing HIIT, sprints, or explosive training',
    'Gym-goers wanting faster recovery between workouts'
  ],
  nutritionalFacts: {
    energy: '0 kcal',
    totalFat: '0 g',
    totalCarbohydrate: '0 g',
    protein: '0 g',
    creatineMonohydrate: '3000 mg'
  }
},
{
  id: 'creatine-monohydrate-hcl-blend',
  name: 'Creatine Monohydrate + HCL Blend',
  category: 'Pre/Post Workout',
  price: 29.99, // You can adjust this price
  image: creatineBlendImg,
  tagline: 'Strength. Absorption. Recovery. All in One Scoop.',
  specs: {
    flavours: ['Green Apple'],
    weight: '3.52 OZ (100gm)',
    servings: '33 Servings'
  },
  details: {
    // --- LONG DESCRIPTION AS REQUESTED ---
    description: `When you are pushing heavy weights and trying to build lean muscle, you need a creatine formula that works hard, delivers fast, and absorbs efficiently. The Creatine Monohydrate + HCL Blend by Maxigen Nutrition combines the gold standard, Creatine Monohydrate, with the highly soluble Creatine Hydrochloride (HCL) for a potent yet gentler formula.

This blend leverages the long-term proven strength of monohydrate and the quicker absorption and gentler profile of HCL. This gives you both “staying power” and “fast action” without the digestive discomfort some users report with high mono-only doses. At 3 grams per serving, this formula gives you a meaningful dose to significantly increase power output, support recovery, and improve training volume.

Creatine HCL is known to dissolve much more easily in water, mix cleaner, and be gentler on the stomach. This blend helps mitigate bloating while still keeping the tried-and-true benefits from monohydrate, making it perfect if you want strength gains without sacrificing comfort.`,

    // These smaller fields can remain for specific sections on your page
    purityInfo: "Each batch is manufactured in GMP-certified facilities and third-party lab tested. There are no proprietary blends hiding low doses and no unnecessary fillers. Trusted by athletes and serious lifters who want solid, proven results.",
    versatility: "The blend's improved solubility and digestive comfort make it an excellent choice for those who have experienced bloating with traditional monohydrate, helping you feel leaner while maintaining strength gains."
  },
  benefits: [
    {
      title: 'Elevated Strength & Power Output',
      description: 'Boosts phosphocreatine stores, accelerating ATP regeneration for explosive lifts, sprints, and maximal effort training, helping you lift more effectively.',
      icon: 'recovery' // Using recovery as a proxy for strength
    },
    {
      title: 'Improved Solubility, Reduced Bloating',
      description: 'Thanks to the HCL portion, the blend dissolves quickly and causes fewer gastrointestinal issues, helping you feel leaner while maintaining gains.',
      icon: 'digestion'
    },
    {
      title: 'Faster Recovery, Less Soreness',
      description: 'Supports recovery by reducing muscle damage and buffering lactic acid. You’ll notice less soreness and better readiness for your next session.',
      icon: 'recovery'
    },
    {
      title: 'Enhanced Muscle Fullness & Hydration',
      description: 'The monohydrate portion draws water into muscle cells, increasing volume and enhancing the “pump,” giving you a tighter, fuller look.',
      icon: 'muscle'
    },
    {
      title: 'Boost in Training Volume & Endurance',
      description: 'By supporting energy delivery and reducing fatigue, this blend lets you push through more reps, more sets, and more training sessions per week.',
      icon: 'muscle'
    },
    {
      title: 'Safe, Scientific, & Athlete-Friendly Formula',
      description: 'This formula is backed by scientific literature and real-world feedback. Manufactured under strict quality standards and tested for purity.',
      icon: 'certified'
    }
  ],
  idealFor: [
    'Bodybuilders seeking lean size gains with solid strength',
    'Power athletes needing shorter recovery between heavy sets',
    'Gym goers with sensitive stomachs or who experienced bloating with mono-only creatine',
    'Fitness lovers combining strength with intense metabolic work'
  ],
  nutritionalFacts: {
    energy: '0 kcal',
    totalFat: '0 g',
    totalCarbohydrate: '0 g',
    protein: '0 g',
    creatineMonohydrateCreapure: '2000 mg',
    creatineHydrochlorideHCL: '1000 mg'
  }
},
{
  id: 'glutamine-5000mg',
  name: 'Glutamine (5000 mg)',
  category: 'Pre/Post Workout',
  price: 29.99, // You can adjust this price
  image: glutamineImg,
  tagline: 'Accelerate Recovery. Support Immunity. Fuel Your Gut.',
  specs: {
    flavours: ['Unflavoured'],
    weight: '10.58 OZ (300 gm)',
    servings: '60 Servings'
  },
  details: {
    // --- LONG DESCRIPTION (Adapted for a pure Glutamine product) ---
    description: `When your training demands the absolute best from your body, your recovery supplements need to match that intensity. Maxigen Nutrition’s Glutamine 5000 is a scientifically designed recovery formula that utilizes one of the most effective ingredients in sports nutrition: pure L-Glutamine (5000 mg) per serving.

This powerful formula is tailored for athletes, bodybuilders, and endurance enthusiasts who train intensely and need to maximize their recovery. L-Glutamine is the most abundant amino acid in muscle tissue and plays a critical role in muscle recovery, immune support, and gut health. Intense training rapidly depletes glutamine stores, which can lead to muscle breakdown and slower recovery.

Our Glutamine 5000 delivers a high-potency dose of pure, micronized L-Glutamine to help rebuild muscle tissue faster, reduce post-workout soreness, and strengthen your immune response. It's an ultra-clean, transparent formula, free from sugars and fillers, and manufactured in GMP-certified facilities.`,

    // These smaller fields can remain for specific sections on your page
    purityInfo: "At Maxigen, we believe in clean, science-backed supplementation. Our Glutamine is non-GMO, third-party tested, HALAL-certified, and compliant with international safety standards. You get exactly what’s listed on the label.",
    versatility: "This unflavoured powder is ideal for stacking. It can be taken post-workout for muscle repair, or between meals to maintain recovery. It stacks perfectly with whey protein, EAAs, and pre-workouts to form the cornerstone of any serious supplement routine."
  },
  benefits: [
    {
      title: 'Speeds Up Muscle Recovery',
      description: 'The 5000 mg of glutamine helps repair damaged muscle fibers after intense workouts, reducing soreness and downtime.',
      icon: 'recovery'
    },
    {
      title: 'Strengthens Immune Function',
      description: 'Intensive workouts can compromise immunity. Glutamine is a critical nutrient for immune cells, helping to maintain defense during heavy training.',
      icon: 'certified'
    },
    {
      title: 'Supports Muscle Preservation',
      description: 'During cutting or calorie-restricted phases, glutamine helps prevent muscle breakdown, protecting your hard-earned muscle tissue.',
      icon: 'muscle'
    },
    {
      title: 'Improves Gut Health & Nutrient Absorption',
      description: 'Glutamine plays a vital role in maintaining the health of the gut lining, which can improve digestion and overall nutrient absorption.',
      icon: 'digestion'
    }
  ],
  idealFor: [
    'Athletes during high-volume training',
    'Bodybuilders looking to maximize recovery between sessions',
    'Anyone in a calorie deficit wanting to protect lean mass',
    'Endurance athletes needing immune and gut support'
  ],
  nutritionalFacts: {
    energy: '0 kcal',
    totalFat: '0 g',
    totalCarbohydrate: '0 g',
    protein: '0 g',
    lGlutamine: '5000 mg'
  }
},

// no image
{
  id: 'l-carnitine-4000-liquid',
  name: 'L-Carnitine 4000 Liquid',
  category: 'Pre/Post Workout',
  price: 34.99, // You can adjust this price
  // image: lCarnitineImg,
  tagline: 'Unlock Your Body’s Ultimate Fat-Burning Potential.',
  specs: {
    flavours: ['Peach Bloom'],
    weight: '15.21 fl.oz (450 ml)',
    servings: '30 Servings'
  },
  details: {
    // --- LONG DESCRIPTION AS REQUESTED ---
    description: `For sports persons, fitness enthusiasts, and bodybuilders, L-Carnitine 4000 Liquid is a game-changer. This triple strength, liquid formula is designed to supercharge your body’s natural fat metabolism, boost energy levels, and support lean muscle retention. Its liquid delivery system ensures fast, efficient uptake for immediate and sustained effects.

L-Carnitine is critical in the transport of fatty acids into the mitochondria where they are converted into energy. Our formula doesn’t just stop there; it is fortified with a synergistic blend of powerful ingredients. Chromium Picolinate helps regulate blood sugar and control cravings, Guarana Extract provides a natural source of caffeine for energy, Yohimbine HCL targets stubborn fat, and Niacin supports overall metabolic function.

This combination creates a powerful thermogenic and metabolic boost designed for anyone serious about fat loss and performance enhancement. Made in GMP-certified facilities with a clean, transparent label, it's free from unnecessary fillers or sugars.`,

    // These smaller fields can remain for specific sections on your page
    purityInfo: "This formula is free from unnecessary fillers, artificial colors, or sugars, ensuring you get a pure and potent supplement. It is manufactured in GMP-certified facilities, guaranteeing quality and purity.",
    versatility: "Ideal for pre-workout energy, post-workout recovery, or anytime fat-burning support is needed. Its liquid form makes it easy to consume for those who dislike pills or powders."
  },
  benefits: [
    {
      title: 'Accelerates Fat Burning & Weight Loss',
      description: 'The potent 4000 mg dose of L-Carnitine combined with Yohimbine helps your body tap into stored fat reserves for energy.',
      icon: 'fatloss'
    },
    {
      title: 'Enhances Workout Energy & Endurance',
      description: 'Guarana and Niacin provide a natural, sustained energy release without jitters, allowing you to train harder and longer.',
      icon: 'recovery' // Using recovery as a proxy for energy
    },
    {
      title: 'Supports Lean Muscle Preservation',
      description: 'By using fat as the primary energy source, L-Carnitine helps protect muscle tissue during intense training or calorie deficit phases.',
      icon: 'muscle'
    },
    {
      title: 'Improves Metabolic Efficiency',
      description: 'Chromium Picolinate improves insulin sensitivity and blood sugar regulation, reducing cravings and preventing energy dips.',
      icon: 'digestion'
    },
    {
      title: 'Promotes Mental Focus and Alertness',
      description: 'The natural stimulants in Guarana and Yohimbine increase mental clarity, essential for maintaining concentration during intense workouts.',
      icon: 'certified' // Using certified as a proxy for focus
    },
    {
      title: 'Rapid Absorption for Faster Results',
      description: 'The liquid form delivers fast and efficient absorption compared to pills, ensuring your body can quickly utilize its effects.',
      icon: 'recovery'
    }
  ],
  idealFor: [
    'Athletes needing extra endurance and fat-burning support',
    'Fitness enthusiasts who want to accelerate fat loss while preserving muscle',
    'Bodybuilders looking to stay shredded during cutting phases',
    'Anyone seeking natural energy boosts without jitters or crashes'
  ],
  nutritionalFacts: {
    energy: '0.52 kcal',
    carbohydrate: '0 gm',
    totalSugar: '0 gm',
    addedSugar: '0 gm',
    totalFat: '0 gm',
    saturatedFat: '0 gm',
    transFat: '0 gm',
    cholesterol: '0 mg',
    protein: '0 gm',
    lCarnitine: '4000 mg',
    chromiumPicolinate: '100 mcg',
    guaranaExtract: '50 mg',
    yohimbineHCL: '2.5 mg',
    niacin: '50 mg'
  }
}

];

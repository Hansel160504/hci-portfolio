const projects = [
  {
    id: 1,
    title: "MealMate",
    desc: "A smart meal planning and recipe finder app with weekly planner, ingredient-based search, and shopping list generation.",
    image: "/projects/mealmate.jfif",
    isMobile: true, // <--- ADD THIS
    longDesc: `
      MealMate is a mobile application designed to simplify weekly meal planning.
      It allows users to filter meals, find recipes based on available ingredients,
      and automatically generate a shopping list.
    `,
    features: [
      "Ingredient-based recipe search",
      "Weekly meal planner",
      "Smart shopping list generation",
      "SQLite local storage",
      "User login system"
    ],
    tech: ["Kotlin", "Android Studio", "SQLite"]
  },

  {
    id: 2,
    title: "WasteWise",
    desc: "A sustainability-focused waste management system with item scanning, gamification, educational content, and community participation.",
    image: "/projects/wastewise.JPG",
    isMobile: false, // <--- ADD THIS (Web App)
    longDesc: `
      WasteWise promotes proper waste disposal through scanning, rewards,
      and educational content.
    `,
    features: [
      "Item scanning + classification",
      "Gamification (points, badges, levels)",
      "Educational resources",
      "Community clean-up tracker",
      "User dashboard"
    ],
    tech: ["React", "MySQL", "Node.js"]
  },

  {
    id: 3,
    title: "WordWeave",
    desc: "A word puzzle game with CS-related questions, levels, and a timer.",
    image: "/projects/wordweave.jfif",
    isMobile: true, // <--- ADD THIS
    longDesc: `
      WordWeave challenges players with computer science themed puzzles
      across multiple levels.
    `,
    features: [
      "Jumbled letters",
      "Level progression",
      "Timer system",
      "CS-themed questions"
    ],
    tech: ["Kotlin", "Android Studio"]
  },

  {
    id: 4,
    title: "CashFlow Monitoring System",
    desc: "A Flutter-based office cash flow and attendance monitoring app.",
    image: "/projects/cashflow.jfif",
    isMobile: true, // <--- ADD THIS
    longDesc: `
      CashFlow helps offices manage attendance, cash-in, cash-out,
      and remaining balances using role-based access.
    `,
    features: [
      "Role-based authentication",
      "Attendance logging",
      "Admin cash-in",
      "Employee cash-out",
      "Automatic balance computation"
    ],
    tech: ["Flutter", "Supabase"]
  }
];

export default projects;
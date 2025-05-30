// 标准版题目
const standard = [
  // E/I 维度 (23题)
  {
    id: 1,
    text: "When attending a social gathering, you tend to:",
    options: ["Talk with many people and enjoy the lively atmosphere", "Have deep conversations with a few people"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 2,
    text: "When you need to relax, you prefer to:",
    options: ["Read, think, or engage in personal hobbies alone", "Gather with friends or participate in social activities"],
    dimension: "EI",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 3,
    text: "In social situations, you tend to:",
    options: ["Initiate conversations and participate in discussions", "Wait for others to initiate conversations"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 4,
    text: "When you are with friends, you prefer to:",
    options: ["Do activities with many friends at once", "Have in-depth interactions with one or two close friends"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 5,
    text: "When you attend a new event, you will:",
    options: ["Actively interact with many people", "Observe first, then interact with a few people"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 6,
    text: "When you are under pressure, you will:",
    options: ["Think and deal with it alone", "Talk to others for support"],
    dimension: "EI",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 7,
    text: "In social situations, you tend to:",
    options: ["Feel energetic and enjoy socializing", "Feel the need to be alone to recover energy"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 8,
    text: "When you have free time, you tend to:",
    options: ["Read or engage in personal hobbies", "Participate in social activities or socialize with friends"],
    dimension: "EI",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 9,
    text: "You tend to:",
    options: ["Think while acting", "Think after acting"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 10,
    text: "You tend to:",
    options: ["Work independently", "Work in a team"],
    dimension: "EI",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 11,
    text: "In social situations, you tend to:",
    options: ["Initiate conversations and interact with people", "Wait for others to interact with you"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 12,
    text: "When you need to relax, you prefer to:",
    options: ["Spend time alone quietly", "Participate in social activities or gatherings"],
    dimension: "EI",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 13,
    text: "When you are under pressure, you will:",
    options: ["Talk to others to alleviate pressure", "Think and deal with it alone"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 14,
    text: "In social situations, you tend to:",
    options: ["Feel energetic and enjoy socializing", "Feel the need to be alone to recover energy"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 15,
    text: "When you have free time, you tend to:",
    options: ["Read or engage in personal hobbies", "Participate in social activities or socialize with friends"],
    dimension: "EI",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 16,
    text: "You tend to:",
    options: ["Think while acting", "Think after acting"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 17,
    text: "You tend to:",
    options: ["Work independently", "Work in a team"],
    dimension: "EI",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 18,
    text: "In social situations, you tend to:",
    options: ["Initiate conversations and interact with people", "Wait for others to interact with you"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 19,
    text: "When you need to relax, you prefer to:",
    options: ["Spend time alone quietly", "Participate in social activities or gatherings"],
    dimension: "EI",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 20,
    text: "When you are under pressure, you will:",
    options: ["Talk to others to alleviate pressure", "Think and deal with it alone"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 21,
    text: "In social situations, you tend to:",
    options: ["Feel energetic and enjoy socializing", "Feel the need to be alone to recover energy"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 22,
    text: "When you have free time, you tend to:",
    options: ["Read or engage in personal hobbies", "Participate in social activities or socialize with friends"],
    dimension: "EI",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 23,
    text: "You tend to:",
    options: ["Think while acting", "Think after acting"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },

  // S/N 维度 (23题)
  {
    id: 24,
    text: "When you think about problems, you tend to:",
    options: ["Focus on abstract concepts and future possibilities", "Focus on specific details and current reality"],
    dimension: "SN",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 25,
    text: "You tend to believe:",
    options: ["Your direct experience", "Your intuition and inspiration"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 26,
    text: "When you encounter problems, you usually:",
    options: ["Seek innovative solutions", "Apply existing knowledge and methods"],
    dimension: "SN",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 27,
    text: "You prefer to learn:",
    options: ["Specific facts and details", "Abstract theories and concepts"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 28,
    text: "You tend to:",
    options: ["Think about future possibilities", "Focus on current reality"],
    dimension: "SN",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 29,
    text: "You tend to focus on:",
    options: ["Specific, concrete details", "Potential meanings and connections"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 30,
    text: "You tend to:",
    options: ["Focus on broad concepts and patterns", "Focus on specific facts and data"],
    dimension: "SN",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 31,
    text: "You tend to:",
    options: ["Focus on reality and actual situations", "Focus on future possibilities and visions"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 32,
    text: "When you learn something new, you prefer to:",
    options: ["Understand the overall concept and principles", "Master specific steps and details"],
    dimension: "SN",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 33,
    text: "You tend to believe:",
    options: ["Actual experience and evidence", "Intuition and inspiration"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 34,
    text: "You tend to focus on:",
    options: ["Abstract concepts and theories", "Specific facts and details"],
    dimension: "SN",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 35,
    text: "When you learn a new skill, you prefer to:",
    options: ["Learn through practice and exercise", "Learn through understanding principles and concepts"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 36,
    text: "You tend to:",
    options: ["Think about future possibilities", "Focus on current reality"],
    dimension: "SN",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 37,
    text: "You tend to:",
    options: ["Focus on specific details", "Focus on abstract concepts"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 38,
    text: "You tend to believe:",
    options: ["Intuition and inspiration", "Actual experience and evidence"],
    dimension: "SN",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 39,
    text: "You tend to:",
    options: ["Focus on reality and actual situations", "Focus on future possibilities and visions"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 40,
    text: "When you learn something new, you prefer to:",
    options: ["Understand the overall concept and principles", "Master specific steps and details"],
    dimension: "SN",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 41,
    text: "You tend to believe:",
    options: ["Actual experience and evidence", "Intuition and inspiration"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 42,
    text: "You tend to focus on:",
    options: ["Abstract concepts and theories", "Specific facts and details"],
    dimension: "SN",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 43,
    text: "When you learn a new skill, you prefer to:",
    options: ["Learn through practice and exercise", "Learn through understanding principles and concepts"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 44,
    text: "You tend to:",
    options: ["Think about future possibilities", "Focus on current reality"],
    dimension: "SN",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 45,
    text: "You tend to:",
    options: ["Focus on specific details", "Focus on abstract concepts"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 46,
    text: "You tend to believe:",
    options: ["Intuition and inspiration", "Actual experience and evidence"],
    dimension: "SN",
    weight: 1.5,
    isReversed: true
  },

  // T/F 维度 (23题)
  {
    id: 47,
    text: "When making decisions, you tend to value:",
    options: ["Logical and rational analysis", "Emotional and interpersonal feelings"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 48,
    text: "In team cooperation, you tend to:",
    options: ["Focus on team members' feelings and needs", "Focus on task completion and efficiency"],
    dimension: "TF",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 49,
    text: "When you need to make a significant decision, you usually:",
    options: ["Calmly analyze various possibilities", "Consider the decision's impact on others"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 50,
    text: "When you receive feedback, you tend to:",
    options: ["Focus on emotional and interpersonal aspects of feedback", "Focus on factual and improvement suggestions"],
    dimension: "TF",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 51,
    text: "When solving problems, you tend to value:",
    options: ["Fairness and objectivity", "Harmony and interpersonal relationships"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 52,
    text: "In a team, you tend to play:",
    options: ["Coordinator and supporter", "Decision-maker and organizer"],
    dimension: "TF",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 53,
    text: "When making decisions, you tend to:",
    options: ["Based on logical and analytical analysis", "Based on values and emotions"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 54,
    text: "In team discussions, you tend to:",
    options: ["Propose objective analysis and suggestions", "Consider team members' feelings and needs"],
    dimension: "TF",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 55,
    text: "When making decisions, you tend to value:",
    options: ["Decision's impact on others", "Decision's logical and fairness"],
    dimension: "TF",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 56,
    text: "In a team, you tend to value:",
    options: ["Good interpersonal relationships and team harmony", "High efficiency and clear goals"],
    dimension: "TF",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 57,
    text: "When you need to solve a complex problem, you will:",
    options: ["Analyze various aspects of the problem and find logical solution", "Consider the problem's impact on related people"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 58,
    text: "In team cooperation, you tend to value:",
    options: ["Harmony and support between team members", "Task efficient completion and quality"],
    dimension: "TF",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 59,
    text: "When facing criticism, you will:",
    options: ["Analyze criticism and find improvement methods", "Feel hurt and may need time to process emotions"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 60,
    text: "In a team, you tend to:",
    options: ["Support and encourage team members", "Propose challenges and improvement suggestions"],
    dimension: "TF",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 61,
    text: "When making decisions, you tend to value:",
    options: ["Logical and rational", "Emotional and values"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 62,
    text: "In team discussions, you tend to:",
    options: ["Propose objective analysis and suggestions", "Consider team members' feelings and needs"],
    dimension: "TF",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 63,
    text: "When making decisions, you tend to value:",
    options: ["Decision's impact on others", "Decision's logical and fairness"],
    dimension: "TF",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 64,
    text: "In a team, you tend to value:",
    options: ["Good interpersonal relationships and team harmony", "High efficiency and clear goals"],
    dimension: "TF",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 65,
    text: "When you need to solve a complex problem, you will:",
    options: ["Analyze various aspects of the problem and find logical solution", "Consider the problem's impact on related people"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 66,
    text: "In team cooperation, you tend to value:",
    options: ["Harmony and support between team members", "Task efficient completion and quality"],
    dimension: "TF",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 67,
    text: "When facing criticism, you will:",
    options: ["Analyze criticism and find improvement methods", "Feel hurt and may need time to process emotions"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 68,
    text: "In a team, you tend to:",
    options: ["Support and encourage team members", "Propose challenges and improvement suggestions"],
    dimension: "TF",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 69,
    text: "When making decisions, you tend to value:",
    options: ["Logical and rational", "Emotional and values"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },

  // J/P 维度 (24题)
  {
    id: 70,
    text: "When facing a new plan or task, you usually:",
    options: ["Plan in advance and make detailed steps", "Stay flexible and adjust according to situation"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 71,
    text: "When you have free time, you usually:",
    options: ["Do whatever you like", "Plan activities or plans in advance"],
    dimension: "JP",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 72,
    text: "In life, you tend to value:",
    options: ["Order and certainty", "Freedom and flexibility"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 73,
    text: "When making plans, you usually:",
    options: ["Make detailed plans and strictly implement", "Make a rough plan and keep adjustment space"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 74,
    text: "When you need to complete a task, you usually:",
    options: ["Start early and ensure timely completion", "Concentrate on completion before the deadline"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 75,
    text: "You prefer life:",
    options: ["Planned and organized", "Flexible and open"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 76,
    text: "When you have an idea, you tend to:",
    options: ["Share with others and get feedback", "Perfect the idea before sharing"],
    dimension: "JP",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 77,
    text: "You tend to:",
    options: ["Plan and organize in advance", "Respond flexibly and adapt to changes"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 78,
    text: "When making plans, you usually:",
    options: ["Make detailed plans and strictly implement", "Make a rough plan and adjust according to situation"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 79,
    text: "When facing a new environment, you will:",
    options: ["Adapt and explore the new environment", "Look for familiar patterns and structures"],
    dimension: "JP",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 80,
    text: "When you make a decision, you tend to:",
    options: ["Make a decision quickly and continue", "Stay open to choices and collect more information"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 81,
    text: "You tend to:",
    options: ["Adapt flexibly to changes", "Like stability and predictability"],
    dimension: "JP",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 82,
    text: "When you have a goal, you usually:",
    options: ["Make detailed plans and strictly implement", "Have a general direction and adjust according to situation"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 83,
    text: "You tend to:",
    options: ["Have clear plans and goals", "Stay open and flexible"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 84,
    text: "When you have an idea, you tend to:",
    options: ["Share with others and get feedback", "Perfect the idea before sharing"],
    dimension: "JP",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 85,
    text: "You tend to:",
    options: ["Plan and organize in advance", "Respond flexibly and adapt to changes"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 86,
    text: "When making plans, you usually:",
    options: ["Make detailed plans and strictly implement", "Make a rough plan and adjust according to situation"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 87,
    text: "When facing a new environment, you will:",
    options: ["Adapt and explore the new environment", "Look for familiar patterns and structures"],
    dimension: "JP",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 88,
    text: "When you make a decision, you tend to:",
    options: ["Make a decision quickly and continue", "Stay open to choices and collect more information"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 89,
    text: "You tend to:",
    options: ["Adapt flexibly to changes", "Like stability and predictability"],
    dimension: "JP",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 90,
    text: "When you have a goal, you usually:",
    options: ["Make detailed plans and strictly implement", "Have a general direction and adjust according to situation"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 91,
    text: "You tend to:",
    options: ["Have clear plans and goals", "Stay open and flexible"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 92,
    text: "When you have an idea, you tend to:",
    options: ["Share with others and get feedback", "Perfect the idea before sharing"],
    dimension: "JP",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 93,
    text: "You tend to:",
    options: ["Plan and organize in advance", "Respond flexibly and adapt to changes"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
]

// 专业版题目
const professional = [
  // 包含标准版的所有题目
  ...standard,
  // 额外添加52道题目
  // E/I 维度 (额外13题)
  {
    id: 94,
    text: "In team discussions, you tend to:",
    options: ["Actively share your thoughts and opinions", "Listen to others' ideas first, then decide whether to share"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 95,
    text: "When you need to solve a problem, you tend to:",
    options: ["Discuss with others and seek advice", "Think alone and find a solution"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 96,
    text: "In social situations, you tend to be:",
    options: ["The center of conversation", "Observe and listen from the periphery"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 97,
    text: "When you feel stressed, you tend to:",
    options: ["Seek support and comfort from others", "Handle it alone and recover"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 98,
    text: "In team projects, you tend to:",
    options: ["Actively participate in discussions and decisions", "Focus on completing assigned tasks"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 99,
    text: "When you need to learn something new, you tend to:",
    options: ["Learn through discussions with others", "Learn through reading and thinking"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 100,
    text: "In social situations, you tend to:",
    options: ["Actively meet new friends", "Wait for others to approach"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 101,
    text: "When you have an idea, you tend to:",
    options: ["Share immediately", "Perfect first before sharing"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 102,
    text: "In a team, you tend to:",
    options: ["Actively take leadership roles", "Participate as a team member"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 103,
    text: "When you need to make a decision, you tend to:",
    options: ["Discuss with others before deciding", "Think alone and decide"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 104,
    text: "In social situations, you tend to:",
    options: ["Participate in conversations with multiple groups", "Have in-depth conversations with one or two people"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 105,
    text: "When you need to relax, you tend to:",
    options: ["Participate in social activities", "Rest alone and recover"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 106,
    text: "In a team, you tend to:",
    options: ["Actively propose suggestions and ideas", "Wait for others to ask for your opinion"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },

  // S/N 维度 (额外13题)
  {
    id: 107,
    text: "When facing a new project, you tend to:",
    options: ["Focus on project innovation and possibilities", "Focus on project specific implementation details"],
    dimension: "SN",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 108,
    text: "You tend to believe:",
    options: ["Intuition and inspiration", "Experience and facts"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 109,
    text: "When solving problems, you tend to:",
    options: ["Seek innovative solutions", "Use known effective methods"],
    dimension: "SN",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 110,
    text: "You tend to focus on:",
    options: ["Symbolic meanings and deep meanings of things", "Surface features and specific representations of things"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 111,
    text: "When you learn something new, you tend to:",
    options: ["Understand concepts and principles", "Master specific facts and data"],
    dimension: "SN",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 112,
    text: "You tend to:",
    options: ["Focus on future possibilities", "Focus on current reality"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 113,
    text: "When you make a decision, you tend to:",
    options: ["Believe in intuition and inspiration", "Rely on experience and data"],
    dimension: "SN",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 114,
    text: "You tend to:",
    options: ["Focus on abstract concepts and theories", "Focus on specific facts and details"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 115,
    text: "When facing a new situation, you tend to:",
    options: ["Seek new possibilities", "Refer to past experience"],
    dimension: "SN",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 116,
    text: "You tend to:",
    options: ["Focus on symbolic meanings of things", "Focus on practical uses of things"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 117,
    text: "When you learn a new skill, you tend to:",
    options: ["Understand principles and concepts", "Master specific steps"],
    dimension: "SN",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 118,
    text: "You tend to:",
    options: ["Focus on future development", "Focus on current situation"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 119,
    text: "When you make a decision, you tend to:",
    options: ["Believe in intuition and inspiration", "Rely on experience and data"],
    dimension: "SN",
    weight: 1.5,
    isReversed: false
  },

  // T/F 维度 (额外13题)
  {
    id: 120,
    text: "In a team, you tend to:",
    options: ["Focus on team members' feelings and needs", "Focus on task goals and efficiency"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 121,
    text: "When you make a decision, you tend to value:",
    options: ["Decision's impact on interpersonal relationships", "Decision's objectivity and fairness"],
    dimension: "TF",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 122,
    text: "When solving problems, you tend to:",
    options: ["Consider others' feelings and needs", "Seek the most effective solution"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 123,
    text: "You tend to:",
    options: ["Focus on others' emotional needs", "Focus on factual logic"],
    dimension: "TF",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 124,
    text: "In team discussions, you tend to:",
    options: ["Focus on team atmosphere and harmony", "Focus on discussion efficiency and results"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 125,
    text: "When facing conflicts, you tend to:",
    options: ["Seek harmony and compromise", "Stick to principles and fairness"],
    dimension: "TF",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 126,
    text: "You tend to:",
    options: ["Focus on others' feelings", "Focus on objective facts"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 127,
    text: "In a team, you tend to value:",
    options: ["Good interpersonal relationships", "High work results"],
    dimension: "TF",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 128,
    text: "When you make a decision, you tend to:",
    options: ["Consider others' feelings", "Consider objective facts"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 129,
    text: "When solving problems, you tend to:",
    options: ["Seek harmony and consensus", "Seek the most effective solution"],
    dimension: "TF",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 130,
    text: "You tend to:",
    options: ["Focus on others' emotional needs", "Focus on task goals and efficiency"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 131,
    text: "In a team, you tend to:",
    options: ["Support and encourage others", "Propose challenges and improvement suggestions"],
    dimension: "TF",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 132,
    text: "When facing criticism, you tend to:",
    options: ["Focus on criticism's emotional impact", "Focus on criticism's objective content"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },

  // J/P 维度 (额外13题)
  {
    id: 133,
    text: "When facing a new project, you tend to:",
    options: ["Make detailed plans", "Stay flexible and open"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 134,
    text: "You tend to:",
    options: ["Have clear plans and goals", "Stay open and flexible"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 135,
    text: "When you make a decision, you tend to:",
    options: ["Make a decision quickly", "Stay open to choices"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 136,
    text: "You tend to:",
    options: ["Like certainty and planning", "Like flexibility and change"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 137,
    text: "When facing a new environment, you tend to:",
    options: ["Look for familiar patterns and structures", "Adapt and explore the new environment"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 138,
    text: "You tend to:",
    options: ["Plan and organize in advance", "Respond flexibly and adapt to changes"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 139,
    text: "When you have a goal, you tend to:",
    options: ["Make detailed plans", "Stay flexible and open"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 140,
    text: "You tend to:",
    options: ["Like certainty and planning", "Like flexibility and change"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 141,
    text: "When you make a decision, you tend to:",
    options: ["Make a decision quickly", "Stay open to choices"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 142,
    text: "You tend to:",
    options: ["Have clear plans and goals", "Stay open and flexible"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 143,
    text: "When facing a new project, you tend to:",
    options: ["Make detailed plans", "Stay flexible and open"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 144,
    text: "You tend to:",
    options: ["Like certainty and planning", "Like flexibility and change"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 145,
    text: "When facing a new environment, you tend to:",
    options: ["Look for familiar patterns and structures", "Adapt and explore the new environment"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
]

// 完整版题目
const complete = [
  // 包含标准版和专业版的所有题目
  ...standard,
  ...professional.slice(standard.length),
  // 额外添加55道题目
  // E/I 维度 (额外14题)
  {
    id: 146,
    text: "In social situations, you tend to:",
    options: ["Actively interact with people", "Wait for people to approach you"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 147,
    text: "You prefer to:",
    options: ["Do activities with many people at once", "Spend time alone or with a few people"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 148,
    text: "In a team, you tend to:",
    options: ["Actively take leadership roles", "Participate as a team member"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 149,
    text: "When you need to relax, you tend to:",
    options: ["Participate in social activities", "Rest alone and recover"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 150,
    text: "In social situations, you tend to:",
    options: ["Actively meet new friends", "Wait for others to approach"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 151,
    text: "When you have an idea, you tend to:",
    options: ["Share immediately", "Perfect first before sharing"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 152,
    text: "In a team, you tend to:",
    options: ["Actively propose suggestions and ideas", "Wait for others to ask for your opinion"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 153,
    text: "When you need to make a decision, you tend to:",
    options: ["Discuss with others before deciding", "Think alone and decide"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 154,
    text: "In social situations, you tend to:",
    options: ["Participate in conversations with multiple groups", "Have in-depth conversations with one or two people"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 155,
    text: "When you need to relax, you tend to:",
    options: ["Participate in social activities", "Rest alone and recover"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 156,
    text: "In a team, you tend to:",
    options: ["Actively take leadership roles", "Participate as a team member"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 157,
    text: "When you need to express your opinion, you tend to:",
    options: ["Express your thoughts directly", "Observe others' reactions before expressing"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 158,
    text: "In social situations, you tend to:",
    options: ["Actively organize activities and invite people", "Wait for others to invite and participate"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 159,
    text: "When you have an idea, you tend to:",
    options: ["Share immediately", "Perfect first before sharing"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },

  // S/N 维度 (额外14题)
  {
    id: 160,
    text: "When facing a new project, you tend to:",
    options: ["Focus on project innovation and possibilities", "Focus on project specific implementation details"],
    dimension: "SN",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 161,
    text: "You tend to believe:",
    options: ["Intuition and inspiration", "Experience and facts"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 162,
    text: "When solving problems, you tend to:",
    options: ["Seek innovative solutions", "Use known effective methods"],
    dimension: "SN",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 163,
    text: "You tend to focus on:",
    options: ["Symbolic meanings and deep meanings of things", "Surface features and specific representations of things"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 164,
    text: "When you learn something new, you tend to:",
    options: ["Understand concepts and principles", "Master specific facts and data"],
    dimension: "SN",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 165,
    text: "You tend to:",
    options: ["Focus on future possibilities", "Focus on current reality"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 166,
    text: "When you make a decision, you tend to:",
    options: ["Believe in intuition and inspiration", "Rely on experience and data"],
    dimension: "SN",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 167,
    text: "You tend to:",
    options: ["Focus on abstract concepts and theories", "Focus on specific facts and details"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 168,
    text: "When facing a new situation, you tend to:",
    options: ["Seek new possibilities", "Refer to past experience"],
    dimension: "SN",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 169,
    text: "You tend to:",
    options: ["Focus on symbolic meanings of things", "Focus on practical uses of things"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 170,
    text: "When you learn a new skill, you tend to:",
    options: ["Understand principles and concepts", "Master specific steps"],
    dimension: "SN",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 171,
    text: "You tend to:",
    options: ["Focus on future development", "Focus on current situation"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 172,
    text: "When you make a decision, you tend to:",
    options: ["Believe in intuition and inspiration", "Rely on experience and data"],
    dimension: "SN",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 173,
    text: "You tend to:",
    options: ["Focus on abstract concepts and theories", "Focus on specific facts and details"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },

  // T/F 维度 (额外14题)
  {
    id: 174,
    text: "In a team, you tend to:",
    options: ["Focus on team members' feelings and needs", "Focus on task goals and efficiency"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 175,
    text: "When you make a decision, you tend to value:",
    options: ["Decision's impact on interpersonal relationships", "Decision's objectivity and fairness"],
    dimension: "TF",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 176,
    text: "When solving problems, you tend to:",
    options: ["Consider others' feelings and needs", "Seek the most effective solution"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 177,
    text: "You tend to:",
    options: ["Focus on others' emotional needs", "Focus on factual logic"],
    dimension: "TF",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 178,
    text: "In team discussions, you tend to:",
    options: ["Focus on team atmosphere and harmony", "Focus on discussion efficiency and results"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 179,
    text: "When facing conflicts, you tend to:",
    options: ["Seek harmony and compromise", "Stick to principles and fairness"],
    dimension: "TF",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 180,
    text: "You tend to:",
    options: ["Focus on others' feelings", "Focus on objective facts"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 181,
    text: "In a team, you tend to value:",
    options: ["Good interpersonal relationships", "High work results"],
    dimension: "TF",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 182,
    text: "When you make a decision, you tend to:",
    options: ["Consider others' feelings", "Consider objective facts"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 183,
    text: "When solving problems, you tend to:",
    options: ["Seek harmony and consensus", "Seek the most effective solution"],
    dimension: "TF",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 184,
    text: "You tend to:",
    options: ["Focus on others' emotional needs", "Focus on task goals and efficiency"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 185,
    text: "In a team, you tend to:",
    options: ["Support and encourage others", "Propose challenges and improvement suggestions"],
    dimension: "TF",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 186,
    text: "When facing criticism, you tend to:",
    options: ["Focus on criticism's emotional impact", "Focus on criticism's objective content"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 187,
    text: "You tend to:",
    options: ["Focus on others' feelings", "Focus on objective facts"],
    dimension: "TF",
    weight: 1.2,
    isReversed: false
  },

  // J/P 维度 (额外13题)
  {
    id: 188,
    text: "When facing a new project, you tend to:",
    options: ["Make detailed plans", "Stay flexible and open"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 189,
    text: "You tend to:",
    options: ["Have clear plans and goals", "Stay open and flexible"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 190,
    text: "When you make a decision, you tend to:",
    options: ["Make a decision quickly", "Stay open to choices"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 191,
    text: "You tend to:",
    options: ["Like certainty and planning", "Like flexibility and change"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 192,
    text: "When facing a new environment, you tend to:",
    options: ["Look for familiar patterns and structures", "Adapt and explore the new environment"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 193,
    text: "You tend to:",
    options: ["Plan and organize in advance", "Respond flexibly and adapt to changes"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 194,
    text: "When you have a goal, you tend to:",
    options: ["Make detailed plans", "Stay flexible and open"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 195,
    text: "You tend to:",
    options: ["Like certainty and planning", "Like flexibility and change"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 196,
    text: "When you make a decision, you tend to:",
    options: ["Make a decision quickly", "Stay open to choices"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 197,
    text: "You tend to:",
    options: ["Have clear plans and goals", "Stay open and flexible"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 198,
    text: "When facing a new project, you tend to:",
    options: ["Make detailed plans", "Stay flexible and open"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 199,
    text: "You tend to:",
    options: ["Like certainty and planning", "Like flexibility and change"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 200,
    text: "When facing a new environment, you tend to:",
    options: ["Look for familiar patterns and structures", "Adapt and explore the new environment"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
]

export const questions = {
  standard,
  professional,
  complete,
}

export const featuresList = [
  {
    key: "editor",
    tag: "New journal entry",
    accent: "#FF7A59",
    dotBg: "#FFE9CF",
    title: "A calm, distraction-free place to write",
    body: "No blank-page dread. Add a title, a mood, a tag, or just start typing. When you're done, save it or turn it straight into a song.",
    points: [
      "A few honest words is enough",
      "Mood, tags & life chapters, optional",
      "Save as a draft or generate instantly",
    ],
    reverse: false,
  },
  {
    key: "generate",
    tag: "AI melody generation",
    accent: "#5B3B8C",
    dotBg: "#F1EAF7",
    title: "Your words, turned into a song you choose",
    body: "DearMelody reads the feeling behind your entry and composes an original track. Guide it with genre, mood, energy and vocals, then generate another version until it feels like you.",
    points: [
      "Instrumental, lyrics & vocals",
      "Shape genre, mood and energy",
      "Regenerate for a different take",
    ],
    reverse: true,
  },
  {
    key: "player",
    tag: "Melody player",
    accent: "#FF7A59",
    dotBg: "#FFE9CF",
    title: "An immersive place to press play",
    body: "Every song gets its own atmospheric player, artwork, lyrics, mood and the journal entry it came from, all one tap away.",
    points: [
      "Cover artwork & animated waveform",
      "Lyrics and mood tags",
      "Deep-links back to the source entry",
    ],
    reverse: false,
  },
  {
    key: "diary",
    tag: "Diary management",
    accent: "#8B5BB0",
    dotBg: "#F1EAF7",
    title: "Every entry, searchable and organized",
    body: "A private archive of everything you've written, including entries without a melody. Search, filter by mood or chapter, and sort however you think.",
    points: [
      "Filter by mood, tag, chapter or status",
      "Includes drafts and melody-free entries",
      "Cards or table, whichever you prefer",
    ],
    reverse: true,
  },
  {
    key: "library",
    tag: "Melody library",
    accent: "#FF7A59",
    dotBg: "#FFE9CF",
    title: "A growing collection of your songs",
    body: "Play, rename, regenerate, archive or delete your melodies in one place. The longer you use DearMelody, the richer your personal soundtrack becomes.",
    points: [
      "Play and manage every melody",
      "Rename & regenerate any track",
      "One song becomes a lifelong playlist",
    ],
    reverse: false,
  },
  {
    key: "collections",
    tag: "Collections & life chapters",
    accent: "#5B3B8C",
    dotBg: "#F1EAF7",
    title: "Every chapter is a journal and an album",
    body: "Group entries and songs into meaningful periods, a wedding, a move abroad, a first year as a parent. Each chapter plays back like a record.",
    points: [
      "Life-chapter templates to start fast",
      "A diary and a musical album in one",
      "Play the whole chapter like an album",
    ],
    reverse: true,
  },
];

export const featureViews = [
  {
    icon: "calendar_month",
    title: "Calendar",
    description:
      "See entries, melodies, moods and journaling streaks laid out across the month.",
    bg: "#FFE9CF",
    fg: "#FF7A59",
  },
  {
    icon: "table_chart",
    title: "Table",
    description:
      "A practical overview you can filter and sort by date, mood, tag, chapter or melody status.",
    bg: "#F1EAF7",
    fg: "#5B3B8C",
  },
  {
    icon: "timeline",
    title: "Timeline",
    description:
      "Journal excerpts, songs, artwork and milestones flowing in chronological order.",
    bg: "#FFF3D6",
    fg: "#B3651F",
  },
];

export const featurePrivacyPoints = [
  "Entries and melodies are private by default",
  "You control what's stored, exported or deleted",
  "You choose which entries ever become songs",
  "Sharing is always optional, never automatic",
];

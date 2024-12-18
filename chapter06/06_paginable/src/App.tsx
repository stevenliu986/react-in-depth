import { IEmployee, IEntry } from "./types.ts";
import EmployeeCard from "./EmployeeCard.tsx";
import HighScoreEntry from "./HighScoreEntry.tsx";
import { Paginable } from "./Paginable.tsx";
import "./app.css";

const EMPLOYEES: IEmployee[] = [
  { name: "Harvey Specter", title: "Senior Partner" },
  { name: "Mike Ross", title: "Associate" },
  { name: "Louis Litt", title: "Partner" },
  { name: "Rachel Zane", title: "Associate" },
  { name: "Donna Paulsen", title: "Legal Secretary" },
  { name: "Jessica Pearson", title: "Managing Partner" },
  { name: "Katrina Bennett", title: "Associate" },
];

const ENTRIES: IEntry[] = [
  { name: "Augustus Caesar", points: 2500 },
  { name: "Hammurabi", points: 2250 },
  { name: "Abraham Lincoln", points: 2000 },
  { name: "Winston Churchill", points: 1900 },
  { name: "Nelson Mandela", points: 1800 },
  { name: "Catherine the Great", points: 1700 },
  { name: "Ashoka", points: 1600 },
  { name: "Marcus Aurelius", points: 1500 },
  { name: "Lech Wałęsa", points: 1400 },
  { name: "Hatsheput", points: 1300 },
  { name: "Charles de Gaulle", points: 1200 },
  { name: "Eleanor of Aquitane", points: 1100 },
  { name: "Ivan the Terrible", points: 1000 },
];

function App() {
  return (
    <main>
      <h1>Cast of characters</h1>
      <Paginable
        className="employee-list"
        items={EMPLOYEES}
        Renderer={EmployeeCard}
      />
      <h1>High Score</h1>
      <Paginable
        className="highscores"
        items={ENTRIES}
        Renderer={HighScoreEntry}
      />
    </main>
  );
}

export default App;

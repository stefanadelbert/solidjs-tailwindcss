import { createSignal } from "solid-js";

const IconSquare = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square"><rect width="18" height="18" x="3" y="3" rx="2" /></svg>
const IconSquareCheck = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-check"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12 2 2 4-4"/></svg>

const colours = {
  red: "bg-red-200",
  green: "bg-green-200",
  blue: "bg-blue-200",
  orange: "bg-orange-200",
}

const Job = (props) => {
  console.log(JSON.stringify(props))
  const colour = colours[props.colour] || "bg-zinc-200";
  const [complete, setComplete] = createSignal(props.complete || false);
  const toggleComplete = (event) => {
    event.preventDefault();
    setComplete(x => !x);
  }
  return (
    <article class={`p-4 min-h-[100px] ${colour} flex flex-row justify-between rounded shadow hover:shadow-md`}>
      <p><strong class="mr-2">{props.title}</strong>{props.description}</p>
      <div onClick={toggleComplete}>
        {complete() ? <IconSquareCheck></IconSquareCheck> : <IconSquare></IconSquare>}
      </div>
    </article>
  );
}

const Jobs = (props) => {
  return <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <For each={props.jobs()}>{(job, i) =>
      <Job {...job}></Job>
    }</For>
  </section>;
};

const defaultJobs = [
  {
    title: "Job A",
    description: "Lorem ipsum. This is a really long description and it's causing the other notes to be taller than they need to be.",
    colour: "red",
    complete: true
  },
  {
    description: "Job B",
    colour: "green",
    complete: false
  },
  {
    description: "Job C",
    colour: "blue",
    complete: false
  },
  {
    description: "Job D",
    colour: "orange",
    complete: false
  },
]

const App = () => {
  const [jobs, setJobs] = createSignal(defaultJobs);
  return (
    <div class="p-4">
      <Jobs jobs={jobs}></Jobs>
    </div>
  );
};

export default App;
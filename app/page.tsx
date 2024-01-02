import Main from "./components/Main";
import Petinfo from "./components/Petinfo";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Petinfo />
      <Main />
    </div>
  );
}

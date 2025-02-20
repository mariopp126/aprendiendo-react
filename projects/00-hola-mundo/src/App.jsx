import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard isFollowing userName="Mariopuch" initialIsFollowing={true}>
        Mario Pucheu
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing={false} userName="pheralb">
        Pablo Hernandez
      </TwitterFollowCard>
      <TwitterFollowCard >Elon Musk</TwitterFollowCard>
    </section>
  );
}

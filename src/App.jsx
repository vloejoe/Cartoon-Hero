import "./index.css";
import Slider from "./component/slider";

function App() {
  return (
    <>
      <Slider />

      <img
        src="src/IMG/severance-banner.png"
        alt="Severance"
        className="h-auto max-w-full rounded-lg"
      />

      <h1>Severance</h1>

      <h2>About Severance</h2>
      <p>
        Mark leads a team of office workers whose memories have been surgically
        divided between their work and personal lives. When a mysterious
        colleague appears outside of work, it begins a journey to discover the
        truth about their jobs.
      </p>
      <img
        src="https://www.ecranlarge.com/media/cache/637x252/uploads/articles/001/418/689/severance-photo-adam-scott-1419137-large.jpg"
        alt="Severance"
      />

      <p className="caption">'Severance's Commentary on Work/Life Balance'</p>
      <h2>What Is Severance?</h2>
      <ol>
        <li>
          'Severance' Is the TV Show You Need to Binge This Winter -{" "}
          <a href="https://collider.com/severance-tv-show-binge-winter/">
            Collider.com
          </a>
        </li>
        <li>
          Severance’s first season is a wonderfully tense workplace horror story
          -{" "}
          <a href="https://www.theverge.com/23015650/severance-season-1-review-apple-tv-plus">
            The Verge
          </a>
        </li>
        <li>
          Severance’s satirical mystery goes far beyond the dystopian workplace
          -{" "}
          <a href="https://www.polygon.com/22991324/severance-episodes-world-meaning">
            Polygon
          </a>
        </li>
      </ol>
      <p>
        Each employee at Lumon has their own personal reasons for having agreed
        to be severed. It raises the much larger question of what lengths people
        will go to maintain a healthy and manageable work/life balance.
      </p>

      <h2>A great casting</h2>
      <p>
        Severance has earned a handful of Emmy nominations including Outstanding
        Drama Series, Outstanding Lead Actor, and supporting nods for veterans
        Walken, Arquette, and Turturro
      </p>
      <ul>
        <li>
          <a href="https://en.wikipedia.org/wiki/Adam_Scott_(actor)">
            Adam Scott as Mark S.
          </a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/Britt_Lower">
            Britt Lower as Helly R
          </a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/Patricia_Arquette">
            Patricia Arquette as Harmony Cobel
          </a>
        </li>
      </ul>

      <p>
        This site was created during a{" "}
        <a href="https://skl.sh/3jQq6IR">Skillshare</a> class, by{" "}
        <a href="https://bento.me/ajamvane">AJ</a>
      </p>
    </>
  );
}

export default App;

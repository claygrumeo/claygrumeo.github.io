import "./AboutMe.css";
import profilePicture from "../../picture.PNG";
import linkedInLogo from "../../LI-In-Bug.png";
import gitHubLogo from "../../github-mark-white.png";

export default function AboutMe() {
  return (
    <div className="AboutMeParent">
      <div className="AboutMeCol">
        <img src={profilePicture} alt="profile" className="ProfilePicture" />
      </div>
      <div className="AboutMeCol">
        <div className="AboutMeContent">
          <h1 className="AboutMeHeadingText">About Me</h1>
          <p className="AboutMeText">
            My name is Clay Grumieaux (GRU-me-oh). I'm a Software Developer
            located in Bloomington, IN. I love writing code and learning new
            things. Currently, I'm seeking a full-time development role in
            Bloomington or on a remote basis. Click below to download a copy of
            my resume. You can contact me via email at{" "}
            <a href="mailto:claygrumeo@gmail.com">claygrumeo@gmail.com</a>.
            Thank you for visiting!
          </p>
          <div className="AboutMeButtonsContainer">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1VtUtDj-4oKqRIeFtcxZFmkT-LET88KgD/view?usp=sharing"
              className="ResumeButton"
              download="ClayGrumieauxResume.pdf"
              rel="noreferrer"
            >
              Download Resume
            </a>
            <a href="https://www.linkedin.com/in/claygrumeo/" target="_blank" rel="noreferrer">
              <img
                className="SocialLogo"
                src={linkedInLogo}
                alt="linkedin-logo"
              />
            </a>
            <a href="https://www.github.com/claygrumeo/" target="_blank" rel="noreferrer">
              <img
                className="SocialLogo"
                src={gitHubLogo}
                alt="github-logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

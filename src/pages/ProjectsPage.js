import { ProjectsContainer } from "../components/ProjectsElements";
import { Card } from "../components/Card";

const ProjectsPage = () => {
  return (
    <ProjectsContainer id="projects">
      <h2>My Projects</h2>
      <div className="cards-wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </ProjectsContainer>
  );
};

export default ProjectsPage;

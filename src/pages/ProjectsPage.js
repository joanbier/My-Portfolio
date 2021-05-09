import { ProjectsContainer } from "../components/ProjectsElements";
import content from "../content/index";
import { Card } from "../components/Card";

const ProjectsPage = ({ lang }) => {
  const getProjects = content.projects.map((item, index) => (
    <Card
      key={`Categories-${Date.now().toString(32)}-${index}`}
      content={item}
      lang={lang}
    />
  ));

  return (
    <ProjectsContainer id="projects">
      <h2>{lang === "PL" ? "Moje Projekty" : "My Projects"}</h2>
      <div className="cards-wrapper">{getProjects}</div>
    </ProjectsContainer>
  );
};

export default ProjectsPage;

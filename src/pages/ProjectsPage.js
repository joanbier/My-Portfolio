import { ProjectsContainer } from "../components/ProjectsElements";
import content from "../content/index";
import { Card } from "../components/Card";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const ProjectsPage = ({ lang }) => {
  const getProjects = content.projects.map((item, index) => (
    <Card
      key={`Categories-${Date.now().toString(32)}-${index}`}
      content={item}
      lang={lang}
    />
  ));

  return (
    <LazyLoadComponent>
      <ProjectsContainer id="projects">
        <h2 className="section-title">
          {lang === "PL" ? "Moje Projekty" : "My Projects"}
        </h2>
        <div className="cards-wrapper">{getProjects}</div>
      </ProjectsContainer>
    </LazyLoadComponent>
  );
};

export default ProjectsPage;

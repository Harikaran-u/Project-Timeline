import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projects} = props
  console.log(projects)
  const {description, duration, imageUrl, projectTitle, projectUrl} = projects
  const project = (
    <div className="project-card-cont">
      <img src={imageUrl} alt="project" className="project-img" />

      <div className="title-and-duration-cont">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="project-duration-cont">
          <AiFillCalendar />
          <p className="projects-hour">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a className="project-links" href={projectUrl}>
        Visit
      </a>
    </div>
  )
  return project
}

export default ProjectTimelineCard

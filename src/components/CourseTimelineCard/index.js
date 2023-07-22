import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courses} = props

  const {courseTitle, description, duration, tagsList} = courses

  const card = (
    <div className="course-card-cont">
      <div className="course-duration-cont">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-cont">
          <AiFillClockCircle className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <div className="tags-list-cont">
        {tagsList.map(eachTag => (
          <p className="tags" key={eachTag.id}>
            {eachTag.name}
          </p>
        ))}
      </div>
    </div>
  )
  return card
}

export default CourseTimelineCard

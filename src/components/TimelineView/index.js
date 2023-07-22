import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const homePage = (
    <div className="journey-cont">
      <div className="title-cont">
        <h1 className="ccbp-title">
          MY JOURNEY OF <br />
          CCBP 4.0
        </h1>
      </div>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={timelineItemsList}
        theme={{
          primary: 'blue',
          secondary: 'light',
        }}
      >
        {timelineItemsList.map(eachObj => {
          if (eachObj.categoryId === 'COURSE') {
            return <CourseTimelineCard courses={eachObj} key={eachObj.id} />
          }
          return <ProjectTimelineCard projects={eachObj} key={eachObj.id} />
        })}
      </Chrono>
    </div>
  )

  return homePage
}

export default TimelineView

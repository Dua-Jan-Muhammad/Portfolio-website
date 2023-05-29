import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import React from 'react'

function Experiance() {
  return (
    <div>




<VerticalTimeline  layout={ '1-column-left' } >
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#343434', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #343434' }}
    date="2011 - present"
    iconStyle={{ background: '#017365', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#343434', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #343434' }}
    date="2011 - present"
    iconStyle={{ background: '#017365', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#343434', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #343434' }}
    date="2011 - present"
    iconStyle={{ background: '#017365', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  
  
</VerticalTimeline>
    </div>
  )
}

export default Experiance
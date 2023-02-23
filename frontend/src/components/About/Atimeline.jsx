import React from 'react';
import "./Atimeline.css"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



import { FaGraduationCap } from 'react-icons/fa'
import { FaBriefcase } from 'react-icons/fa'

const workIcon = {
    icon: <FaBriefcase />,
    iconStyle: { background: 'var(--orange)', color: 'var(--black)' }
};
const schoolIcon = {
    icon: <FaGraduationCap />,
    iconStyle: { background: 'var(--orange)', color: 'var(--black)' }
};


function Atimeline({Education,work}) {

   
    const EduTimeline = Education.map((cur)=>{return { icon: schoolIcon, ...cur }})
    const workTimeline = work.map((cur)=>{return { icon: workIcon, ...cur }})
    

    return (
        <div className="At">
            <div className="t1">
                <h1>Education</h1>
                <VerticalTimeline
                    layout="1-column-left"
                    lineColor='var(--orange)'
                >
                    {EduTimeline.map((t, i) => {
                        const contentStyle = { background: 'whitesmoke', color: 'var(--blue)', cursor: "pointer" } 
                        const arrowStyle = { borderRight: '7px solid  var(--orange)' } 
                        // const contentStyle = i === 0 ? { background: 'rgb(33, 150, 243)', color: '#fff' } : undefined;
                        // const arrowStyle = i === 0 ? { borderRight: '7px solid  rgb(33, 150, 243)' } : undefined;

                        return <div className='At-ele' key={i} >
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={contentStyle}
                                contentArrowStyle={arrowStyle}
                                date={t.time}
                                {...t.icon}   
                            >
                                {t.role ? <React.Fragment>
                                    <h3 className="vertical-timeline-element-title ttit">{t.role}</h3>
                                    {t.org && <h4 className="vertical-timeline-element-subtitle tsubt">{t.org}</h4>}
                                    {t.desc && <p>{t.desc}</p>}
                                </React.Fragment> : undefined}
                            </VerticalTimelineElement>
                        </div>
                    })}
                </VerticalTimeline>
            </div>
           
            <div className="t1">
                <h1>Work</h1>
                <VerticalTimeline
                    layout="1-column-left"
                    lineColor='var(--orange)'
                >
                    {workTimeline.map((t, i) => {
                        const contentStyle = { background: 'whitesmoke', color: 'var(--blue)', cursor: "pointer" } 
                        const arrowStyle = { borderRight: '7px solid  var(--orange)' } 
                        // const contentStyle = i === 0 ? { background: 'rgb(33, 150, 243)', color: '#fff' } : undefined;
                        // const arrowStyle = i === 0 ? { borderRight: '7px solid  rgb(33, 150, 243)' } : undefined;

                        return <div className='At-ele' key={i} >
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={contentStyle}
                                contentArrowStyle={arrowStyle}
                                date={t.time}
                                {...t.icon}   
                            >
                                {t.role ? <React.Fragment>
                                    <h3 className="vertical-timeline-element-title ttit">{t.role}</h3>
                                    {t.org && <h4 className="vertical-timeline-element-subtitle tsubt">{t.org}</h4>}
                                    {t.desc && <p>{t.desc}</p>}
                                </React.Fragment> : undefined}
                            </VerticalTimelineElement>
                        </div>
                    })}
                </VerticalTimeline>
            </div>
           
            
            
            

        </div >
    );
}

export default Atimeline;
import { useState } from "react";
import { Heading } from "@app/components/elements/Heading";
import { ExperienceProps } from "@app/core/types/Experiences";
import { MdWork as WorkIcon } from 'react-icons/md'
import { GrFormAdd as AddIcon } from 'react-icons/gr'
import { TIMELINE } from "@app/core/constants";
import { Button } from "@app/components/elements/Button";
import { AiFillStar } from 'react-icons/ai'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';


export function Experiences() {
  const [elements, setElements] = useState<ExperienceProps[]>([
    {
      id: '1',
      props: {
        date: '2022 - present',
        className: 'vertical-timeline-element--work',
        contentStyle: { background: '#222831', color: '#fff' },
        contentArrowStyle: { borderRight: '7px solid  #222831' },
        iconStyle: { background: '#222831', color: '#fff' },
        icon: <WorkIcon />,
      },
      title: 'Front-end Developer',
      subtitle: 'CI&T Software',
      content:
        `Working in international project. Development system web using ReactJS, NodeJS, Jest, Azure Devops, Jira, Braze, MongoDB, Segment, New Relic.`,
    }
  ]);

  const loadMore = () => {
    const arrayFiltered = TIMELINE.slice(0, elements.length + 2);
    setElements(arrayFiltered);
  };

  const addButton = () => (
    elements.length === TIMELINE.length ?
      <Button>
        <AiFillStar color="#fff" />
      </Button>    
      :  
      <Button>
        <AddIcon color="#022" />
      </Button>
  );

  const getTimelineElements = () =>
    elements.map((element, index) => (
      <VerticalTimelineElement key={index} {...element.props}>
        <h3 className="vertical-timeline-element-title">{element.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">
          {element.subtitle}
        </h4>
        <p>{element.content}</p>
      </VerticalTimelineElement>
  ));

  return (
    <div className="w-full h-full text-center">
      <Heading>
          <h1 className="xl:text-[104px] opacity-10 font-bold xs:text-[50px] ">Experiences</h1>
      </Heading>
      <Heading>
          <h1 className="xl:text-[64px] xl:mt-[-120px] xs:mt-[-60px] xs:text-[38px] font-bold">Experiences</h1>
      </Heading>
     <div className="text-left mt-10">
      <VerticalTimeline>
        {getTimelineElements()}
        <VerticalTimelineElement
          iconOnClick={loadMore}
          iconClassName="vertical-timeline-element-icon--button"
          icon={addButton()}
        />
      </VerticalTimeline>
     </div>
    </div>
  )
}
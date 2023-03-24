import Background from '@assets/background.svg';
import { About } from '@app/components/widgets/About';
import { Navbar } from '@app/components/widgets/Navbar';
import { Skills } from '@app/components/widgets/Skills';
import { Experiences } from '@app/components/widgets/Experiences';

import 'react-vertical-timeline-component/style.min.css';
import { Follow } from '@app/components/widgets/Follow';
import { getProfileInfo } from '@app/core/graphql/getProfileInfo';
import { getSkills } from '@app/core/graphql/getSkills';
import { getExperiences } from '@app/core/graphql/getExperience';

export function Home() {
  // const { data, error } = getProfileInfo();
  // const {data, error } = getSkills()
  const { data, error } = getExperiences()

  // console.log(data !== undefined && data[0].object, error);

  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="bg-gray-700 h-full w-full flex flex-col items-center"
    >
      <div className="max-w-[1200px] w-full">
        <Navbar />
      </div>
      <About />
      <Skills />
      <Experiences />
      <Follow />
    </div>
  );
}

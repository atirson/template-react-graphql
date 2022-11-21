import Background from '@assets/background.svg';
import { About } from '@app/components/widgets/About';
import { Navbar } from '@app/components/widgets/Navbar';
import { Skills } from '@app/components/widgets/Skills';
import { Experiences } from '@app/components/widgets/Experiences';

import 'react-vertical-timeline-component/style.min.css';
import { Follow } from '@app/components/widgets/Follow';

export function Home() {
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

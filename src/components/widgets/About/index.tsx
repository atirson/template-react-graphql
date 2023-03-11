/* eslint-disable react/no-unescaped-entities */
import { Heading } from '@app/components/elements/Heading';
import { IconBackground } from '@app/components/elements/Icon';
import ProfileImage from '@assets/profile.png'
import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react';

export function About() {
  return (
    <>
      <div className="text-left w-full mt-[-50px] max-w-[1200px] mb-4">
        <Heading asChild>
          <h1 className="xl:text-[250px] h-[300px] xs:text-[120px] xs:mt-10 font-bold opacity-10 xs:text-center xl:text-left">HELLO</h1>
        </Heading>

        <div className="flex xl:flex-row w-full xs:flex-col-reverse">
          <div className="w-full xs:px-4">
            <Heading asChild>
              <h1 className="xs:text-[64px] font-bold">I'm</h1>
            </Heading>
            <Heading asChild color="main">
              <h1 className="xs:text-[64px] font-bold">Atirson Fabiano</h1>
            </Heading>

            <div className="h-1 w-60 bg-main rounded" />
            <Heading asChild>
              <h1 className="py-3">Software Engineer | Front-end Developer</h1>
            </Heading>

            <div className="flex flex-row gap-3 ">
              <IconBackground>
                <LinkedinLogo className='text-white' size={32} />
              </IconBackground>
              <IconBackground>
                <InstagramLogo className='text-white' size={32} />
              </IconBackground>
              <IconBackground>
                <GithubLogo className='text-white' size={32} />
              </IconBackground>
            </div>
            
          </div>
          <div className="flex justify-center items-center w-full mt-[-120px]">
            <div className="mask mask-hexagon xl:w-[400px] xl:h-[400px] bg-main xs:w-[300px] xs:h-[300px]">
              <img src={ProfileImage} alt="Profile" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-1 w-full bg-main" />
    </>
  );
}

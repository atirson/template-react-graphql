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
          <h1 className="text-[250px] h-[300px] font-bold opacity-10">HELLO</h1>
        </Heading>

        <div className="flex flex-row w-full">
          <div className="w-full">
            <Heading asChild>
              <h1 className="text-[64px] font-bold">I'm</h1>
            </Heading>
            <Heading asChild color="main">
              <h1 className="text-[64px] font-bold">Atirson Fabiano</h1>
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
            <div className="mask mask-hexagon w-[400px] h-[400px] bg-main">
              <img src={ProfileImage} alt="Profile" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-1 w-full bg-main" />
    </>
  );
}

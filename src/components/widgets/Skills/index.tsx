import { Heading } from "@app/components/elements/Heading";
import { Skill } from "@app/components/elements/Skill";
import { Backend, Devops, Frontend } from "@app/core/constants";

export function Skills() {
  return (
    <div className="w-full h-full flex flex-col items-center text-center bg-gray-700">
      <Heading>
          <h1 className="text-[124px] opacity-10 font-bold">Skills</h1>
      </Heading>
      <Heading>
          <h1 className="text-[64px] mt-[-140px] font-bold">Skills</h1>
      </Heading>
      <div className="flex my-10 px-20 max-w-[1300px]">
        <div className="w-4/12 border-r-4 border-light border-opacity-40">
          <Heading size="lg">
            <h1 className="font-bold">Front-end</h1>
          </Heading>
          <div className="flex flex-wrap gap-8 mt-4 justify-center">
            {
              Frontend.map((skill) => (
                <Skill alt={skill.alt} href={skill.href} src={skill.src} key={skill.alt} />
              ))
            }
          </div>
        </div>
        <div className="w-4/12 border-r-4 border-light border-opacity-40">
          <Heading size="lg">
            <h1 className="font-bold">Back-end</h1>
          </Heading>
          <div className="flex flex-wrap gap-8 mt-4 justify-center">
            {
              Backend.map((skill) => (
                <Skill alt={skill.alt} href={skill.href} src={skill.src} key={skill.alt} />
              ))
            }
          </div>
        </div>
        <div className="w-4/12">
          <Heading size="lg">
            <h1 className="font-bold">DevOps</h1>
          </Heading>
          <div className="flex flex-wrap gap-8 mt-4 justify-center">
            {
              Devops.map((skill) => (
                <Skill alt={skill.alt} href={skill.href} src={skill.src} key={skill.alt} />
              ))
            }
          </div>
        </div>
      </div>
      <div className="h-1 w-full bg-main" />
    </div>
  )
}
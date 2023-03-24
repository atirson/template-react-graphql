import { Heading } from "@app/components/elements/Heading";
import { Skill } from "@app/components/elements/Skill";
import { getSkills } from "@app/core/graphql/getSkills";

export function Skills() {
  const { data } = getSkills();

  return (
    <>
      {data && (
        <div className="w-full h-full flex flex-col items-center text-center bg-gray-700 ">
          <Heading>
              <h1 className="text-[124px] opacity-10 font-bold">Skills</h1>
          </Heading>
          <Heading>
              <h1 className="text-[64px] mt-[-140px] font-bold">Skills</h1>
          </Heading>
          <div className="flex my-10 px-20 max-w-[1300px] xs:flex-col xl:flex-row xs:w-full xs:px-4">
            <div className="xl:w-4/12 xs:w-12/12 xl:border-r-4 border-light border-opacity-40 xs:border-b-4 xs:border-r-0 xl:border-b-0 xs:mb-4">
              <Heading size="lg">
                <h1 className="font-bold">Front-end</h1>
              </Heading>
              <div className="flex flex-wrap gap-8 mt-4 justify-center xs:mb-4">
                {
                  data.filter((skill) => skill.category === 'front').map((skill) => (
                    <Skill alt={skill.category} href={skill.href} src={skill.src} key={skill.id} />
                  ))
                }
              </div>
            </div>
            <div className="xl:w-4/12 xs:w-12/12 xl:border-r-4 border-light border-opacity-40 xs:border-b-4 xs:border-r-0 xl:border-b-0 xs:mb-4">
              <Heading size="lg">
                <h1 className="font-bold">Back-end</h1>
              </Heading>
              <div className="flex flex-wrap gap-8 mt-4 justify-center xs:mb-4">
                {
                  data.filter((skill) => skill.category === 'back').map((skill) => (
                    <Skill alt={skill.category} href={skill.href} src={skill.src} key={skill.id} />
                  ))
                }
              </div>
            </div>
            <div className="xl:w-4/12 xs:w-12/12">
              <Heading size="lg">
                <h1 className="font-bold">DevOps</h1>
              </Heading>
              <div className="flex flex-wrap gap-8 mt-4 justify-center">
                {
                  data.filter((skill) => skill.category === 'devops').map((skill) => (
                    <Skill alt={skill.category} href={skill.href} src={skill.src} key={skill.id} />
                  ))
                }
              </div>
            </div>
          </div>
          <div className="h-1 w-full bg-main" />
        </div>
      )}
    </>
  )
}
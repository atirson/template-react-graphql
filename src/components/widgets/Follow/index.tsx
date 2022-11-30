import { Heading } from "@app/components/elements/Heading";

export function Follow() {
  return (
    <div className="w-full h-full flex flex-col items-center text-center bg-gray-700">
    <Heading>
        <h1 className="text-[124px] opacity-10 font-bold xs:text-[50px]">Follow Me</h1>
    </Heading>
    <Heading>
        <h1 className="text-[64px] mt-[-140px] font-bold xs:text-[38px] xs:mt-[-60px]">Follow Me</h1>
    </Heading>
    <div className="flex gap-3 py-10 xs:flex-col xl:flex-row items-center">
      <a href="https://medium.com/@atirson.oliveira" target="_blank" rel="noreferrer">
        <img src="https://img.shields.io/badge/medium-%23292929.svg?&style=for-the-badge&logo=medium&logoColor=white" width={150} alt="medium"/>
      </a>
      <a href="https://twitter.com/atirson_dev" target="_blank" rel="noreferrer">
        <img src="https://img.shields.io/badge/twitter-%2300acee.svg?&style=for-the-badge&logo=twitter&logoColor=white" width={150} alt="twitter"/>
      </a>
      <a href="https://stackoverflow.com/users/10951276/atirson-fabiano?tab=profile" target="_blank" rel="noreferrer">
        <img src="https://img.shields.io/badge/stackoverflow-%23F28032.svg?&style=for-the-badge&logo=stackoverflow&logoColor=white" width={230} alt="stackoverflow"/>
      </a>
      <a href="https://www.linkedin.com/in/atirson-fabiano/" target="_blank" rel="noreferrer">
        <img src="https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" width={150} alt="linkedin"/>
      </a>
      <a href="https://www.instagram.com/atirsonfabiano/" target="_blank" rel="noreferrer">
        <img src="https://img.shields.io/badge/instagram-%23000000.svg?&style=for-the-badge&logo=instagram&logoColor=white" width={171} alt="instagram"/>
      </a>  
    </div> 
  </div>
  )
}
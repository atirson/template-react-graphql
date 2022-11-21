export interface SkillProps {
  href: string;
  src: string;
  alt: string;
  width?: number;
}

export function Skill({
  href, src, alt, width = 75,
}: SkillProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img className="m-[10px]" src={src} alt={alt} width={`${width}px`} />
    </a>
  );
}

import SkillsListItem from "./SkillsListItem";

export default function SkillsList({ data, type, images, links }) {
  return (
    <ul className={`SkillsList ` + type + `List`}>
      {data.map((listItem, i) => (
        <div className="SkillsListItem" key={i}>
          <SkillsListItem listItems={listItem} link={links?.length > 0 ? links[i] : null} />
          {images !== undefined && <img className="ProjectThumbnail" src={images[i]} alt={`ProjectImage` + i} />}
        </div>
      ))}
    </ul>
  );
}

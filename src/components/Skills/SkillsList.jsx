import SkillsListItem from "./SkillsListItem";

export default function SkillsList({ data, type }) {

  return (
    <ul className={`SkillsList ` + type + `List`}>
      {data.map((listItem) => (
        <SkillsListItem key={listItem.title} listItems={listItem} />
      ))}
    </ul>
  );
}

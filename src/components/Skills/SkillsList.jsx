import SkillsListItem from "./SkillsListItem";

export default function SkillsList({ data }) {

  return (
    <ul className="SkillsList">
      {data.map((listItem) => (
        <SkillsListItem key={listItem.title} listItems={listItem} />
      ))}
    </ul>
  );
}

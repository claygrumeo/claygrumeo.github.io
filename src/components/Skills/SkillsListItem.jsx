export default function SkillsListItem({ listItems }) {
  return (
    <li className="SkillCategory">
      {listItems.title}
      <ul className="SkillCategoryList">
        {listItems.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </li>
  );
}

export default function SkillsListItem({ listItems, link }) {
  return (
    <li className="SkillCategory">
      {listItems.title}
      <ul className="SkillCategoryList">
        {listItems.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
        {link != null && <li><a rel="noreferrer" target="_blank" href={link}>Try Me</a></li>}
      </ul>
    </li>
  );
}

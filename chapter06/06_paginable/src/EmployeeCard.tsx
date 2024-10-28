import { IEmployee } from "./types.ts";
import "./employee.css";

interface ICardProps {
  item: IEmployee;
}

function EmployeeCard({ item }: Readonly<ICardProps>) {
  return (
    <section className="employee">
      <h2 className="employee__name">{item.name}</h2>
      <h3 className="employee__title">{item.title}</h3>
    </section>
  );
}

export default EmployeeCard;

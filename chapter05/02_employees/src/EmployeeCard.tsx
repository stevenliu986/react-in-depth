import "./employee.css";

export type Employee = {
  name: string;
  title: string;
  website?: string;
};

interface IEmployeeCardProps {
  readonly item: Employee;
}

function EmployeeCard({ item }: IEmployeeCardProps) {
  return (
    <section className="employee">
      <h2 className="employee__name">{item.name}</h2>
      <h3 className="employee__title">{item.title}</h3>
      <h3>{item.website}</h3>
    </section>
  );
}

export default EmployeeCard;

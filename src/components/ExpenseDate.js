import "./ExpenseDate.css";

function ExpenseDate(props) {
  const myDate = new Date(Date.UTC(2012, 1, 20, 3, 0, 0));
  const month = myDate.toLocaleString("es-US", { month: "long" }).toUpperCase();
  const day = myDate.toLocaleString("en-US", { day: "2-digit" });
  const year = myDate.toLocaleString("en-US", { year: "numeric" });

  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const time = myDate.toLocaleDateString("en-US", options);

  return (
    <div>
      <div>{month}</div>
      <div className="textYear">{year}</div>
      <div className="textDay">{day}</div>
      <div>{time}</div>
    </div>
  );
}

export default ExpenseDate;

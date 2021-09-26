import "./ShowCurrentDay.css";
export default function ShowCurrentDay() {
  let now = new Date();
  let daysIndex = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let monthsIndex = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = daysIndex[now.getDay()];
  let month = monthsIndex[now.getMonth()];
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = now.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let date = now.getDate();
  let year = now.getFullYear();
  let fullHour = `${hour}:${minute}`;
  let fullDate = `${month} ${date},${year}`;

  return (
    <div className="day">
      <div>{day}</div>
      <div>{fullDate}</div>
      <div>{fullHour}</div>
    </div>
  );
}

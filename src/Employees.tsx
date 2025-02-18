import Pagination from "./Pagination";

const employees = [
  { id: 1, firstName: "John", lastName: "Doe" },
  { id: 2, firstName: "Jane", lastName: "Smith" },
  { id: 3, firstName: "Michael", lastName: "Johnson" },
  { id: 4, firstName: "Emily", lastName: "Davis" },
  { id: 5, firstName: "Chris", lastName: "Brown" },
  { id: 6, firstName: "Amanda", lastName: "Wilson" },
  { id: 7, firstName: "David", lastName: "Jones" },
  { id: 8, firstName: "Sarah", lastName: "Garcia" },
  { id: 9, firstName: "James", lastName: "Martinez" },
  { id: 10, firstName: "Jessica", lastName: "Hernandez" },
  { id: 11, firstName: "Daniel", lastName: "Lopez" },
  { id: 12, firstName: "Laura", lastName: "Gonzalez" },
  { id: 13, firstName: "Matthew", lastName: "Perez" },
  { id: 14, firstName: "Ashley", lastName: "Sanchez" },
  { id: 15, firstName: "Joshua", lastName: "Ramirez" },
  { id: 16, firstName: "Megan", lastName: "Torres" },
  { id: 17, firstName: "Andrew", lastName: "Flores" },
  { id: 18, firstName: "Rachel", lastName: "Nguyen" },
  { id: 19, firstName: "Joseph", lastName: "Gonzales" },
  { id: 20, firstName: "Hannah", lastName: "Rodriguez" },
  { id: 21, firstName: "Ryan", lastName: "Lewis" },
  { id: 22, firstName: "Olivia", lastName: "Lee" },
  { id: 23, firstName: "Brandon", lastName: "Walker" },
  { id: 24, firstName: "Sophia", lastName: "Hall" },
  { id: 25, firstName: "Tyler", lastName: "Allen" },
  { id: 26, firstName: "Samantha", lastName: "Young" },
  { id: 27, firstName: "Nicholas", lastName: "Hernandez" },
  { id: 28, firstName: "Brittany", lastName: "King" },
  { id: 29, firstName: "Ethan", lastName: "Wright" },
  { id: 30, firstName: "Victoria", lastName: "Scott" },
];

export default function Employees() {
  return <Pagination items={employees} itemsPerPage={5}></Pagination>;
}

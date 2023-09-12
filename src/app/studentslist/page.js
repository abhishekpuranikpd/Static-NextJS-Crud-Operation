import React from "react";
import Link from "next/link";

const students = [
  { id: 1, name: "Ram" },
  { id: "jam", name: "Jam" },
  { id: 3, name: "Mam" },
  { id: "kam", name: "Kam" },
];

export default function StudentList() {
  return (
    <>
      <h1>Students List</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <Link href={`/studentslist/${student.id}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

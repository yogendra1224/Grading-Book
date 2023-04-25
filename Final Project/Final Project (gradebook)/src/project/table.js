import React, { useState } from "react";
import StudentData from './studentdata.json';
import './table.css';

const Table = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("ascending");
  const [originalData, setOriginalData] = useState(StudentData);
  const [searchText, setSearchText] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);

  const grades = StudentData.map((student) => student.examGrade);
  const maxGrade = Math.max(...grades);
  const minGrade = Math.min(...grades);
  const avgGrade = grades.reduce((acc, grade) => acc + grade, 0) / grades.length;

  let gradeRange3to4 = 0;
StudentData.forEach((student) => {
  const finalGrade = 0.6 * student.examGrade + 0.4 * student.ratingGrade;
  if (finalGrade >= 3 && finalGrade < 4) {
    gradeRange3to4++;
  }
});

// Count number of students with final grade in range 3-5
let gradeRange4to5 = 0;
StudentData.forEach((student) => {
  const finalGrade = 0.6 * student.examGrade + 0.4 * student.ratingGrade;
  if (finalGrade >= 4 && finalGrade <= 5) {
    gradeRange4to5++;
  }
});

// Update gradeCounts object
const gradeCounts = {
  "3-4": gradeRange3to4,
  "4-5": gradeRange4to5,
};

  const handleDetailsClick = (student) => {
    setSelectedStudent(student);
  };

  const handleCloseModal = () => {
    setSelectedStudent(null);
  };

  const handleFilter = (filter) => {
    setFilter(filter);
    setSortOrder("ascending");
    setOriginalData(StudentData); // Reset original data when filter is changed
  };

  const handleSort = () => {
    setSortOrder(sortOrder === "ascending" ? "descending" : "ascending");
    const sortedData = [...originalData].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return sortOrder === "ascending" ? -1 : 1;
      if (nameA > nameB) return sortOrder === "ascending" ? 1 : -1;
      return 0;
    });
    setOriginalData(sortedData);
  };

  const handleNum = () => {
    setSortOrder(sortOrder === "ascending" ? "descending" : "ascending");
    const sortedData = [...originalData].sort((a, b) => {
      const finalGradeA = 0.6 * a.examGrade + 0.4 * a.ratingGrade;
      const finalGradeB = 0.6 * b.examGrade + 0.4 * b.ratingGrade;
      if (sortOrder === "ascending") {
        return finalGradeA - finalGradeB;
      } else {
        return finalGradeB - finalGradeA;
      }
    });
    setOriginalData(sortedData);
  };
  
  

  const handleSearch = (event) => {
    const searchText = event.target.value;
    setSearchText(searchText);
    const filteredData = StudentData.filter((student) =>
      student.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setOriginalData(filteredData);
  };

  const filteredData = originalData.filter((student) => {
    const finalGrade = 0.6 * student.examGrade + 0.4 * student.ratingGrade;
    switch (filter) {
      case "All":
        return true;
      case "Passed":
        return finalGrade >= 4;
      case "Failed":
        return finalGrade < 4;
      default:
        return true;
    }
  });

  const downloadFile = () => {
    const blob = new Blob([JSON.stringify(StudentData)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'studentdata.json';
    a.click();
  };

  return (
    <div className="table-container">
      <div className="filter-buttons">
        <button className="sort" onClick={() => handleFilter("All")}>All</button>
        <button className="sort" onClick={() => handleFilter("Passed")}>Passed</button>
        <button className="sort" onClick={() => handleFilter("Failed")}>Failed</button>
        <button className="sort" onClick={handleSort}>{sortOrder === "ascending" ? "A - Z" : "Z - A"}</button>
        <button className="sort" onClick={handleNum}>{sortOrder === "ascending" ? "1 - 10" : "10 - 1"}</button>
        <input className="search" type="text" placeholder="Search by name..." value={searchText} onChange={handleSearch} />
        <button className="download" onClick={downloadFile}>Download</button>
      </div>
      <table border={1} className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Ticket Number</th>
            <th>Ticket Topic</th>
            <th>Exam Grade</th>
            <th>Rating Grade</th>
            <th>Final Grade</th>
            <th>Status</th>
            <th>Comments</th>
            <th>Info</th>
          </tr>
        </thead>
<tbody>
{filteredData.map((student, index) => (
  <tr
  key={index}
  onClick={() => {
    setSelectedRow(index);
  }}
  className={selectedRow === index ? "selected-row" : ""}
>

<td>{student.id}</td>
<td className="name">{student.name}</td>
<td>{student.ticketNumber}</td>
<td>{student.ticketTopic}</td>
<td>{student.examGrade}</td>
<td>{student.ratingGrade}</td>
<td id="finalGrade">{0.6 * student.examGrade + 0.4 * student.ratingGrade}</td>
<td>{0.6 * student.examGrade + 0.4 * student.ratingGrade >= 4 ? "Pass" : "Fail"}</td>
<td>{0.6 * student.examGrade + 0.4 * student.ratingGrade >= 4 ? "Great Effort!" : "Needs Improvement"}</td>
<td><button className="details" onClick={() => handleDetailsClick(student)}>Details</button></td>
</tr>
))}
</tbody>
</table>
<footer></footer>
{selectedStudent && (
<div className="modal-container">
<div className="modal">
<button className="close-btn" onClick={handleCloseModal}>X</button>
<h2>Details of {selectedStudent.name}</h2><br></br>
<p>ID: {selectedStudent.id}</p>
<p>Ticket Number : {selectedStudent.ticketNumber}</p>
<p>Ticket Topic : {selectedStudent.ticketTopic}</p>
            <p>Final Grade : {0.6 * selectedStudent.examGrade + 0.4 * selectedStudent.ratingGrade}</p>
            <p>Status : {0.6 * selectedStudent.examGrade + 0.4 * selectedStudent.ratingGrade >= 4 ? "Pass" : "Fail"}</p>
            <p>Comments : {0.6 * selectedStudent.examGrade + 0.4 * selectedStudent.ratingGrade >= 4 ? "Great Effort!" : "Needs Improvement"}</p>
          </div>
        </div>
      )}

      <div>
      <table border={1} className="statistics">
      <thead>
        <tr>
          <th>Status</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(gradeCounts).map(([gradeRange, count]) => (
  <tr key={gradeRange}>
    <td>Final Grade ({gradeRange})</td>
    <td>{count}</td>
  </tr>
))}
        <tr>
          <td>Max</td>
          <td>{maxGrade}</td>
        </tr>
        <tr>
          <td>Min</td>
          <td>{minGrade}</td>
        </tr>
        <tr>
          <td>Avg</td>
          <td>{avgGrade.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>{StudentData.length}</td>
        </tr>
      </tbody>
    </table>
      </div>
    </div>
  );
};

export default Table;

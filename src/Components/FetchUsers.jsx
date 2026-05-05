import { useEffect, useState } from "react";

function FetchUsers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => {
        const indianNames = [
          "Aarav Sharma",
          "Priya Verma",
          "Rahul Singh",
          "Ananya Gupta",
          "Vikram Patel",
          "Neha Reddy",
          "Rohan Mehta",
          "Sneha Kapoor",
          "Aditya Joshi",
          "Pooja Nair"
        ];

        // Replace names
        const updatedData = result.map((user, index) => ({
          ...user,
          name: indianNames[index] || user.name
        }));

        setData(updatedData);
      });
  }, []);

  return (
    <div>
      <h3>User Data</h3>

      {data.map((item) => (
        <div className="card" key={item.id}>
          <p><b>Name:</b> {item.name}</p>
          <p><b>Website:</b> {item.website}</p>
        </div>
      ))}
    </div>
  );
}

export default FetchUsers;
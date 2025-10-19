import React from "react";

const DynamicDashboard = () => {
  const userName = "Del";
  const currentDate = new Date().toLocaleDateString();
  const isPremiumUser = true;

  const tasks = [
    { taskID: 1, taskName: "Learn React", completed: true },
    { taskID: 2, taskName: "Build a project", completed: false },
    { taskID: 3, taskName: "Read documentation", completed: true },
    { taskID: 4, taskName: "Practice JavaScript", completed: false },
  ];

  //   Task counts
  const completedCount = tasks.filter((task) => task.completed).length;
  const incompletedCount = tasks.length - completedCount;

  return (
    <div style={styles.dashboard}>
      <p style={styles.date}>{currentDate}</p>
      <h1 style={styles.heading}>Hello, {userName}!</h1>

      {isPremiumUser ? (
        <p style={{ color: "#00796b" }}>
          Thank you for being a premium member!
        </p>
      ) : (
        <p style={{ color: "#d32f2f" }}>Upgrade to enjoy exclusive features!</p>
      )}

      <h2 style={{ marginTop: "30px" }}>Your Tasks</h2>
      <ul style={styles.list}>
        {tasks.map((task) => (
          <li
            key={task.taskID}
            style={{
              ...styles.listItem,
              color: task.completed ? "green" : "red",
            }}
          >
            {task.completed ? "✅" : "❌"} {task.taskName}
          </li>
        ))}
      </ul>

      <p>
        Completed: <strong>{completedCount}</strong> | Incomplete:{" "}
        <strong>{incompletedCount}</strong>
      </p>
    </div>
  );
};

// Inline styles
const styles = {
  dashboard: {
    textAlign: "center",
    backgroundColor: "#f4f4f9",
    padding: "40px",
    borderRadius: "10px",
    width: "400px",
    margin: "50px auto",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    color: "#333",
  },
  date: {
    color: "#555",
    fontSize: "0.9rem",
    marginBottom: "10px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    background: "#fff",
    margin: "8px 0",
    padding: "8px 12px",
    borderRadius: "6px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    textAlign: "left",
  },
};

export default DynamicDashboard;

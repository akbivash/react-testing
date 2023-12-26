import React from "react";
type Counter = {
  count: number;
  handleIncrement: () => void;
};

export default function Counter() {
  console.log("child");
  return (
    <div>
      <h2>hello</h2>
    </div>
  );
}

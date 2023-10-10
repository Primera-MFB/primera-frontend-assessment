import React from "react";

export default function Box({
  step,
  basket,
}: {
  step: string;
  basket: string;
}) {
  return (
    <section className="box1">
      <div className="text1">{step}</div>
      <div className="text2">{basket}</div>
    </section>
  );
}

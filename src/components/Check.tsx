import React from "react";

export default function Check({ status }: { status: string }) {
  return status === "complete" ? (
    <img src="./checkmark.svg" alt="svg" />
  ) : status === "progress" ? (
    <img src="./checkmark1.svg" alt="svg" />
  ) : (
    <img className="nocheck" src="./checkmark2.svg" alt="svg" />
  );
}

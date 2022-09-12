import React from "react";
import Link from "next/link";
function BackButton() {
  return (
    <div className="text-start pt-3">
      <Link href={"/"}>
        <a className="text-danger text-underline-hover text-color-hover-red">
          {"back"}
        </a>
      </Link>
    </div>
  );
}

export default BackButton;

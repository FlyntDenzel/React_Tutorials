import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "./notes";

const Keeper = () => {
  return (
    <div className="">
      <Header />
      <div className="flex flex-wrap">
        {notes.map((note) => {
          return (
            <Note title={note.title} content={note.content} key={note.key} />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Keeper;

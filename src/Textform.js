        import React from "react";

        export default function Textform() {

            const [text , setText] = React.useState("");
            const handleuppercase = () => {
                let newtext = text.toLocaleUpperCase();
                setText(newtext);
            }

            // for uppercase and lowercase we can also write like this
            const handleOnChange = (event) => {
                setText(event.target.value);
            }
            const handlelowercase = () => {
                let newtext = text.toLocaleLowerCase();
                setText(newtext);
            }

          return (
          <div className="container my-5">

            {/* Heading Center */}
            <h2 className="text-center mb-4">Enter your text here</h2>

            {/* Textarea Center + Width Control */}
            <div className="d-flex justify-content-center">
              <div style={{ width: "70%" }}>
                <textarea
                  className="form-control"
                  value={text}
                  onChange={handleOnChange}
                  rows="8"
                  placeholder="Enter your text here..."
                ></textarea>

                {/* Buttons Left Side (Start) */}
                <div className="mt-3">
                  <button className="btn btn-primary me-2" onClick={handleuppercase}>
                    Convert to Uppercase
                  </button>

                  <button
                    className="btn btn-success me-2"
                    onClick={() => setText(text.toLocaleLowerCase())}
                  >
                    Convert to Lowercase
                  </button>

                  <button
                    className="btn btn-secondary"
                    onClick={() => setText("")}
                  >
                    Clear Text
                  </button>
                  <button className="btn btn-info ms-2" onClick={()=> navigator.clipboard.writeText(text)}>
                    Copy Text
                  </button>
                </div>
              </div>
            
            </div>
        <h3 className="ms-4" style={{ marginTop: "20px" }}>Count Words And Characters:
           {text.split(" ").filter(t => t !== "").length} words and {text.length} characters</h3>
          </div>
        );
      }
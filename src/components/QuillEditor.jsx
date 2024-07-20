import React, { useState, useEffect,memo } from 'react';
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import ImageUploader from "quill-image-uploader";
import ImageResize from "quill-image-resize-module-react";

// Register modules
Quill.register("modules/imageUploader", ImageUploader);
Quill.register("modules/imageResize", ImageResize);

const QuillEditor = ({ value, textEditorfn}) => {
  const [text, setText] = useState(value);
  const [userData, setUserData] = useState({
      VenueID: 500,
      categoryName: 'test' 
  })

  // useEffect(() => {
  //   setText(value);
  // }, []);


  const handleEditorChange = (content, delta, source, editor) => {
    textEditorfn(content);
  }
  // onBlur and onChange handlers

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ script: 'sub' }, { script: 'super' }],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }, { align: [] }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    imageResize: {
      parchment: Quill.import("parchment"),
      modules: ["Resize", "DisplaySize", "Toolbar"]
    },
    imageUploader: {
      upload: (file) => {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append("image", file);
    
            fetch("/api/uploadimg", {
                method: "POST",
                body: formData,
            })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                if (result.url) {
                    resolve(result.url);
                } else {
                    reject("Upload failed: URL not found in response");
                }
            })
            .catch((error) => {
                reject("Upload failed: " + error);
                console.error("Error:", error);
            });
        });
    },
    
    },
  };

  const formats = [
    "header", "bold", "italic", "underline", "strike", "blockquote",
    "list", "bullet", "indent", "link", "image", "align", "imageBlot"
  ];

  return (
    <ReactQuill
      theme="snow"
      modules={modules}
      formats={formats}
      value={text}
      // onBlur={(range, source, editor) => {
      //   setText(editor.getHTML());
      //   props.onBlur(editor.getHTML());
      // }}
    //   onChange={(content, delta, source, editor) => {
    // handleEditorChange(editor.getHTML());
    //   }}

      onChange={handleEditorChange}
    >
      <div className="my-editing-area" />
    </ReactQuill>
  );
};

export default memo(QuillEditor);

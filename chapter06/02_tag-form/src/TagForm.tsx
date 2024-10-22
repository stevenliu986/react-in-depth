import { useState } from "react";

function TagForm() {
  const [newTag, setNewTag] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const handleOnChange = () => {
    setTags((oldTags) => [...oldTags, newTag]);
    setNewTag("");
  };

  return (
    <>
      <h1>Tag Form</h1>
      <label>
        <input
          type="text"
          value={newTag}
          onChange={(evt) => setNewTag(evt.target.value)}
        />{" "}
        <button onClick={handleOnChange}>Add tag</button>
      </label>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </>
  );
}

export default TagForm;

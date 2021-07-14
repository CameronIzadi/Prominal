import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Table%201`;

export default function NewItem() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [avatar_url, setAvatarUrl] = useState("")

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      author,
      description,
      image,
      price,
      avatar_url,
    };

    const res = await axios.post(
      URL,
      { fields },
      {
        headers: { Authorization: `Bearer ${AIRTABLE_KEY}` },
      }
    );
    console.log(res);
    setName("");
    history.push(`/${res.data.id}`);
  };
  return (
    <div>
      Create New Item
      <form onSubmit={handleSubmit}>

        <label>name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label>author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />

        <label>description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />

        <label>image</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />

        <label>price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
        />
        <br />

        <label>avatar</label>
        <input
          type="text"
          value={avatar_url}
          onChange={(e) => setAvatarUrl(e.target.value)}
        />
        <br />

        <button>Create Website/Software</button>
      </form>
    </div>
  );
}
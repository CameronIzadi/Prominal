import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "../NewItem.css"

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Table%201`;

export default function NewItem() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [avatar_url, setAvatarUrl] = useState("")
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image_2, setImage2] = useState("")
  const [image_3, setImage3] = useState("")
  const [image_4, setImage4] = useState("")
  const [image_5, setImage5] = useState("")





  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      author,
      avatar_url,
      image,
      description,
      price,
      image_2,
      image_3,
      image_4,
      image_5,
    };

    const res = await axios.post(
      URL,
      { fields },
      {
        headers: { Authorization: `Bearer ${AIRTABLE_KEY}` },
      }
    );
    setName("");
    history.push(`/${res.data.id}`);
  };

  return (
    <div className="new-item">
      Create New Website/Software
      <form onSubmit={handleSubmit}>

        <label>Name: </label>
        <input
          className="name2"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label>Author: </label>
        <input
          className="author2"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />

        <label>Description: </label>
        <input
          className="descriptionResult"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />

        <label>Image: </label>
        <input
          className="imaged"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />

        <label>Price: </label>
        <input
          className="price2"
          type="number"
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
        />
        <br />

        <label>Avatar URL: </label>
        <input
          className="avatarUrl"
          type="text"
          value={avatar_url}
          onChange={(e) => setAvatarUrl(e.target.value)}
        />
        <br />

        <label>Image 2: </label>
        <input
          className="avatarUrl"
          type="text"
          value={image_2}
          onChange={(e) => setImage2(e.target.value)}
        />
        <br />

        <label>Image 3: </label>
        <input
          className="avatarUrl"
          type="text"
          value={image_3}
          onChange={(e) => setImage3(e.target.value)}
        />
        <br />

        <label>Image 4: </label>
        <input
          className="avatarUrl"
          type="text"
          value={image_4}
          onChange={(e) => setImage4(e.target.value)}
        />
        <br />

        <label>Image 5: </label>
        <input
          className="avatarUrl"
          type="text"
          value={image_5}
          onChange={(e) => setImage5(e.target.value)}
        />
        <br />
        <button>Create Website/Software</button>
      </form>
    </div>
  );
}
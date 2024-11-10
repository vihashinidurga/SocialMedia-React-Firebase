import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
const CreateForm = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    title: yup.string().required("You must add a title"),
    description: yup.string().required("You must add a Description"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const postsRef = collection(db, "posts");

  const onCreatePost = async (data) => {
    await addDoc(postsRef, {
      // title:data.title,
      // description:data.description,
      ...data,
      username: user?.displayName,
      id: user?.uid,
    });
    console.log(data);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onCreatePost)}>
      <input type="text" placeholder="Title..." {...register("title")} />
      <p className="error-para">{errors.title?.message}</p>
      <textarea
        type="text"
        placeholder="Description"
        {...register("description")}
      />
      <p className="error-para">{errors.description?.message}</p>
      <input type="submit" className="submitFormButton" />
    </form>
  );
};

export default CreateForm;

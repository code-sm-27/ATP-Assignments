import { useParams, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { api } from '../api/axiosConfig';
import { useAuth } from "../store/authStore";
import { toast } from "react-hot-toast";
import {
  articlePageWrapper,
  articleHeader,
  articleCategory,
  articleMainTitle,
  articleAuthorRow,
  authorInfo,
  articleContent,
  articleFooter,
  articleActions,
  editBtn,
  deleteBtn,
  loadingClass,
  errorClass,
  inputClass,
} from "../styles/common.js";
import { useForm } from "react-hook-form";

function Article() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit,reset } = useForm();
  
  const user = useAuth((state) => state.currentUser);

  const [article, setArticle] = useState(location.state || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const toggleArticleStatus = async () => {
  const newStatus = !article.isArticleActive;
  const confirmMsg = newStatus ? "Restore this article?" : "Delete this article?";
  if (!window.confirm(confirmMsg)) return;}
  const formatDate = (date) => {
  return new Date(date).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });
};
const addComment = async (commentObj) => {
    //add artcileId
    commentObj.articleId = article._id;
    console.log(commentObj);
    let res = await api.put("/user-api/article", commentObj);
    if (res.status === 200) {
      toast.success(res.data.message);
      setArticle(res.data.payload);
      console.log(res)
    }
  };
  return (
    <div className={articlePageWrapper} >
       {/* Header */}
       <div className={articleHeader}>
         <span className={articleCategory}>{article.category}</span>

         <h1 className={`${articleMainTitle} uppercase`}>{article.title}</h1>

         <div className={articleAuthorRow}>
           <div className={authorInfo}>✍️ {article.author?.firstName || "Author"}</div>

           <div>{formatDate(article.createdAt)}</div>
         </div>
       </div>

       {/* Content */}
       <div className={articleContent}>{article.content}</div>

       {/* AUTHOR actions */}
       {user?.role === "AUTHOR" && (
        <div className={articleActions}>
          <button className={editBtn} onClick={() => editArticle(article)}>
            Edit
          </button>

          <button className={deleteBtn} onClick={toggleArticleStatus}>
            {article.isArticleActive ? "Delete" : "Restore"}
          </button>
        </div>
      )}
      {/* form to add comment if role is USER */}
      {/* USER actions */}
      {user?.role === "USER" && (
        <div className={articleActions}>
          <form onSubmit={handleSubmit(addComment)}>
            <input
              type="text"
              {...register("comment")}
              className={inputClass}
              placeholder="Write your comment here..."
            />
            <button type="submit" className="bg-amber-600 text-white px-5 py-2 rounded-2xl mt-5">
              Add comment
            </button>
          </form>
        </div>
      )}

      {/* comments */}
      {article.comments.map((comment) => (
        <div className="bg-gray-300 p-6 rounded-2xl mt-4">
          <p className="uppercase text-pink-400 font-bold mb-3">
          {comment.user?.email}
          </p>
          <p>{comment.comment}</p>
        </div>
      ))}

      {/* Footer */}
      <div className={articleFooter}>Last updated: {formatDate(article.updatedAt)}</div>
    </div>
  );
}

export default Article



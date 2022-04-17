import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import { useState } from "react";
import FeedbackData from "./Data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import Card from "./components/shared/Card";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <FeedbackForm />
      <FeedbackStats feedback={feedback} />
      <div className="contained"></div>
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </>
  );
}
export default App;

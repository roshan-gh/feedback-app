import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";
import { v4 as uuidv4 } from "uuid"; //for generating unique uids for feedbacks

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setfeedbackEdit] = useState({ item: {}, edit: false });

  //Update feedback
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => {
        return item.id === id ? { ...item, ...updItem } : item;
      })
    );
  };

  //Set item to be edited
  const editFeedback = (item) => {
    setfeedbackEdit({ item, edit: true });
  };

  //Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    console.log(newFeedback);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit, //Actual state that holds the editing object
        deleteFeedback,
        addFeedback,
        editFeedback, //The function for edit
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

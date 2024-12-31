import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import Question from "./Question";
import { useGlobalContext } from "../context"; // Import the context hook

const useStyles = makeStyles(() => ({
  root: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2rem",
    marginBottom: "2rem",
    position: "relative",
    "& > *": {
      marginTop: "50px",
      width: "100%",
      height: "100%",
      background: "rgb(245, 246, 247)",
    },
  },
}));

const QuestionList = () => {
  const classes = useStyles();
  const { loading, setLoading, questionList } = useGlobalContext();

  useEffect(() => {
    if (questionList.length > 0) {
      setLoading(false);
    }
  }, [questionList, setLoading]);

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <div className={classes.root}>
      <Paper className="paper" elevation={10}>
        {questionList.map((question, index) => (
          <Question key={question.id || index} {...question} />
        ))}
      </Paper>
    </div>
  );
};

export default QuestionList;

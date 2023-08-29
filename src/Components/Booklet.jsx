import QuestionCard from "./QuestionCard";

const Booklet = ({score = 0}) => {
  return (
    <div data-testid="Booklet">
      {/* create a div with className="welcome-div" here*/}
      <div className="welcome-div"></div>

      <div className="questions-container">
        {/* Append score and question card components here */}
        <h3>Score: {score}</h3>

        <QuestionCard />
      </div>
    </div>
  );
};

export default Booklet;

const Option = ({showQuetions}) => {
  return <div data-testid="option">{/* create a button here */}
  <h1>To begin the exam, click on the 'Start Exam' button below</h1>
  <button onClick={showQuetions}>Start Exam</button>
  
  </div>;
};

export default Option;

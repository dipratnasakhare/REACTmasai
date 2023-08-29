import { useEffect, useState } from "react";


 const SingelAns = ({ele }) => {
  const [ans, setans] = useState(false);

  const HandelChange = () => {
    setans(!ans)
  };

  console.log(ele.options[0], ele.correctOptionIndex, "s")

  return (<>
    <div className="options">{ele.question}</div>
    {ele.options &&
      ele.options.map((ele) => {
        return (
          <>
              <p>{ele}</p>
          </>
        );
      })}
    <div className="show-ans">
    <button onClick={HandelChange}>
      {!ans ? "Show Ans" : "Hide Ans"}
    </button>
    {ans ? <p>{ele.options[0]}</p> : ""}
    </div>
  </>)
 }
 
 const QuestionCard = () => {
  const [arr, setarr] = useState([]);
  const [ans, setans] = useState(true);
  const getData = async () => {
    try {
      let res = await fetch(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz"
      );
      res = await res.json();
      setarr(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="question-card">
      {/* add question here */}

      {arr &&
        arr.map((ele) => {
          return (
            <SingelAns ele={ele} />
            // <>
            //   <div className="options">{ele.question}</div>
            //   {ele.options &&
            //     ele.options.map((ele) => {
            //       return (
            //         <>
            //             <p>{ele}</p>
            //         </>
            //       );
            //     })}
            //   <div className="show-ans">
            //   <button onClick={HandelChange}>
            //     {ans ? "Show Ans" : "Hide Ans"}
            //   </button>
            //   {ans ? <p>{ele.options[0]}</p> : ""}
            //   </div>
            // </>
          );
        })}
    </div>
  );
};

export default QuestionCard;

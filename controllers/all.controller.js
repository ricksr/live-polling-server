let allQuestions = [];
let allOptions = [];
let userAnswers = [];

const submitQuestion = (req, res) => {
  try {
    const { question, options } = req?.body;
    if (!question || !options) return res.status(400).send({ success: false });
    console.log("body", req?.body);

    if (allQuestions.length > 5 && allQuestions.length > 1) allQuestions = [];
    if (allOptions.length > 5 && allOptions.length > 1) allOptions = [];

    allQuestions.push(question);
    allOptions.push(options);
    console.log("allQuestions--", allQuestions, allOptions);
    // example questions and answers
    // question = {
    //     string: '1+2 = 3',
    //     id: 1,
    //     option_id: 1
    // }
    // option = {
    //   question_id: 1,
    //   id: 1,
    //   opt_a: "3",
    //   opt_b: "4",
    //   opt_c: "5",
    //   correct_opt: "opt_a",
    // };
    res.status(200).send({
      message: "",
      data: { allQuestions: allQuestions, allOptions: allOptions },
      success: true,
    });
  } catch (err) {
    return res.status(500).send({
      message: "Internal server error",
      success: false,
      data: [],
    });
  }
};

const submitAnswer = (req, res) => {
  try {
    const { question_id, option_id, answer } = req?.body;
    let result = true;
    // find the option and its answer
    allOptions.map((each_option) => {
      const {
        question_id: qid,
        id: oid,
        correct_opt,
        opt_a,
        opt_b,
        opt_c,
      } = each_option;
      if (question_id == qid && oid == option_id) {
        result = answer == correct_opt ? true : false;
      }
    });
    res.status(200).send({
      data: [{ result }],
      message: result ? "Correct" : "In-Correct",
      success: true,
    });
  } catch (err) {
    return res.status(500).send({
      message: "Internal server error",
      success: false,
      data: [],
    });
  }
};

const showLatestQuestion = (req, res) => {
  try {
    // const { question_id, option_id, answer } = req?.body;
    // question = {
    //     string: '1+2 = 3',
    //     id: 1,
    //     option_id: 1
    // }
    console.log('---allQuestions[allQuestions.length - 1]', allQuestions)
    let latestQuestion = allQuestions[allQuestions.length - 1]?.string;
    console.log("latest question", latestQuestion);
    let latestOption = allOptions[allOptions.length - 1];
    let opt_a = latestOption?.opt_a;
    let opt_b = latestOption?.opt_b;
    let opt_c = latestOption?.opt_c;
    let correct_opt = latestOption?.correct_opt;

    return res.status(200).send({
      data: { latestQuestion, opt_a, opt_b, opt_c, correct_opt },
      message: "",
      success: true,
    });
  } catch (err) {
    return res.status(500).send({
      message: "Internal server error",
      success: false,
      data: [],
    });
  }
};

module.exports = {
  submitQuestion,
  submitAnswer,
  showLatestQuestion
};

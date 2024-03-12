let allQuestions = [];
let allOptions = [];
let userAnswers = [];

const submitQuestion = (req, res) => {
  try {
    const { question, options } = req?.body;
    console.log("body", req?.body);
    allQuestions.push(question);
    allOptions.push(options);
    console.log("allQuestions--", allQuestions);
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
        message: '',
        data: {allQuestions: allQuestions, allOptions: allOptions},
        success: true
    })
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
        let result = true
        // find the option and its answer
        allOptions.map(each_option => {
            const { question_id: qid, id: oid, correct_opt, opt_a, opt_b, opt_c } = each_option
            if (question_id == qid && oid == option_id) {
                result = answer == correct_opt ? true : false
            }
        })
        res.status(200).send({
            data: [{result}],
            message: result ? 'Correct' : 'In-Correct',
            success: true
        })
    } catch (err) {
        return res.status(500).send({
          message: "Internal server error",
          success: false,
          data: [],
        });
    }
}

module.exports = {
  submitQuestion,
  submitAnswer
};

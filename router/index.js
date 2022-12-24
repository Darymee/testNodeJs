const express = require("express");

const router = express.Router();

// router.get("/humans", (req, res, next) => {
//   //   res.end("finish");
//   res.json({
//     posts: [
//       {
//         name: "Max",
//         age: 18,
//       },

//       {
//         name: "Bob",
//         age: 18,
//       },
//     ],
//   });
// });

router
  .route("/humans")
  .get((req, res, next) => {
    return next({ message: "Error" });
    res.json({
      posts: [
        {
          name: "Max",
          age: 18,
        },

        {
          name: "Bob",
          age: 18,
        },
      ],
    });
  })
  .post((req, res, next) => {
    const { body } = req;
    console.log(req.body);
    res.status(201).json({ post: "Hello" });
  });

router.route("/humans/:humanId/:id").delete((req, res, next) => {
  const { humanId, id } = req.params;
  console.log(humanId, id);

  res.end();
});

module.exports = { router };

import express from 'express';

const router = express.Router();

// router.all('/', (req, res, next) => {
//   //   res.json({
//   //     status: 'success',
//   //     message: 'response from all',
//   //   });
//   next();
// });

let fakeDB = [];

router.get('/', (req, res, next) => {
  res.json({
    status: 'success',
    message: 'response from get',
    tasks: fakeDB,
  });
});
router.post('/', (req, res, next) => {
  //   console.log(req.body);
  fakeDB.push(req.body);
  console.log(fakeDB);

  res.json({
    status: 'success',
    message: 'New Task has been added successfully',
  });
});

router.put('/', (req, res, next) => {
  res.json({
    status: 'success',
    message: 'response from put',
  });
});

router.delete('/', (req, res, next) => {
  res.json({
    status: 'success',
    message: 'response from get',
  });
});

export default router;

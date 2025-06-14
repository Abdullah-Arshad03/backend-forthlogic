const express = require('express');
const router = express.Router();
const { generateMarketingVideo, generatePropertyTour } = require('../controllers/videoController');
const multer = require('multer');

const upload = multer({ 
  storage: multer.diskStorage({ 
    destination: (req, file, cb) => {
      cb(null, 'public/uploads/');
    },
    filename: (req, file, cb) => {
      const random = Date.now().toString();
      cb(null, `${random}-${file.originalname}`);
    },
  }),
  fileFilter: (req, file, cb) => { if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
    cb(null, true);
  } else {
    cb(null, false);
  } }
}).single('image');


router.post('/marketing-video', upload ,generateMarketingVideo);
router.post('/property-tour', generatePropertyTour);

module.exports = router;
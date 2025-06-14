const generateMarketingVideo = (req, res) => {
  console.log("this is the body :", req.body, req.file)
  const { prompt } = req.body;
  const image = req.file;

  if (!prompt || !image) {
    return res.status(400).json({
      status: 'error',
      message: 'Prompt and image are required',
    });
  }

  const videoUrl = '/videos/suplimax-promo.mp4';

  res.status(200).json({
    status: 'success',
    message: 'Marketing video generated successfully',
    videoUrl,
  });
};

const generatePropertyTour = (req, res) => {
  const { address, price, bedrooms, bathrooms, squareFootage, features, tourStyle } = req.body;

  if (!address || !price || !bedrooms || !bathrooms || !squareFootage || !features || !tourStyle) {
    return res.status(400).json({
      status: 'error',
      message: 'All property details and tour style are required',
    });
  }

  const videoUrl = '/videos/property-tour.mp4';

  res.status(200).json({
    status: 'success',
    message: 'Property tour video generated successfully',
    videoUrl,
  });
};

module.exports = {
  generateMarketingVideo,
  generatePropertyTour,
};
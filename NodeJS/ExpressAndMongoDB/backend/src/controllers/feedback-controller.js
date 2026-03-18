export const submitFeedback = (req, res, next) => {
  try {
    let { message, rating, username } = req.body;
    console.log(message, rating, username);
  } catch (error) {
    console.log(error);
  }
};

export const getFeedbacks = (req, res, next) => {};

export const getFeedback = (req, res, next) => {};

export const updateFeedback = (req, res, next) => {};

export const deleteFeedback = (req, res, next) => {};

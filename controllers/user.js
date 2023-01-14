import fetch from "node-fetch";

// URL for the Github API
const URL="https://api.github.com/users/";

/**
 * getUserData - function to fetch user data from Github API
 *
 * @param {username} req - Express request object
 * @param {Object} res - Express response object
 *
 * @returns {Object} - JSON object containing the user data from github
 */

const getUserData = async (req, res) => {
  try {
    // Fetch user data from Github API
    const response = await fetch(`${URL}${req.query.username}`);
    // Parse response to JSON
    const json = await response.json();
    // if github username is incorrect
    if (json.message != null && json.message == "Not Found") {
      throw new Error("Invalid Username");
    }
    // Send user data in the response
    return res.status(200).json(json);
  } catch (error) {
    // If there is an error, send error message in the response
    return res.status(404).json(error);
  }
};

export { getUserData };

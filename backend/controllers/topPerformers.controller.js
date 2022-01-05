/**
 * @description all controllers associated with topPerformers module.
 */

const topPerformers = require("../services/topPerformers/index");

/**
 * Returns top five Gainers in the time period specified
 */
async function topGainers(req, res) {
  try {
  const { fromDate, toDate } = req.body;
  const result = await topPerformers.topFiveGainers(fromDate, toDate);
  res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
  }
}

/**
 * Returns top five Losers in the time period specified
 */
async function topLosers(req, res) {
  try {
    const { fromDate, toDate } = req.body;
    const result = await topPerformers.topFiveLosers(fromDate, toDate);
    res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
  }
}

/**
 * Returns both top five Gainers and top five Losers in the time period specified
 */
async function topFiveGainersAndLosers(req, res) {
  try {
  const { fromDate, toDate } = req.body;
  const result = await topPerformers.topFiveGainersAndLosers(fromDate, toDate);
  res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
  }
}

/**
 * Redirects to Login page
 */
function login(req, res) {
  return res.send("/");
}

module.exports = {
  topGainers,
  topLosers,
  topFiveGainersAndLosers,
  login,
};

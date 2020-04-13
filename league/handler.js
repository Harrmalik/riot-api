'use strict';
let _ = require('lodash');
let fetch = require('node-fetch');

module.exports.getChampionRotations = async event => {
  try {
    let data = {};

    await fetch(`https://na1.api.riotgames.com/lol/platform/v3/champion-rotations`, {
      headers: {
        "X-Riot-Token": process.env.leagueApiKey
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      data = myJson;
    })

    return {
      statusCode: 200,
      body: JSON.stringify({
        champs: data.freeChampionIds
      })
    }
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Unable to get champion rotations'
      })
    };
  }
};

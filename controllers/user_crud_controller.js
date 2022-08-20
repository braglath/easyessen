module.exports = function (req, res, next) {
  const userDetails = req.userDetails;
  const userTokens = req.userTokens;
  const geoLocation = req.userGeoLocation;

  //   console.log(userTokens["access_token"]);

  res.json({
    message: "Logged-in Successfully",
    data: {
      user_id: userDetails["user_id"],
      token: {
        access_token: userTokens["access_token"],
        refresh_token: userTokens["refresh_token"],
      },
      fullname: userDetails["full_name"],
      email: userDetails["email"],
      phonenumber: userDetails["phonenumber"],
      profile_image: userDetails["profile_image"],
      geo_location: {
        latitude: geoLocation["latitude"],
        longitude: geoLocation["longitude"],
      },
      created_on: userDetails["created_on"],
    },
  });
};

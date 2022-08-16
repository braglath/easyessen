module.exports = (req, res, next) => {
  const userDetails = req.userDetails;
  const userTokens = req.userTokens;
  const geoLocation = req.userGeoLocation;

  console.log(`fullname : ${userDetails["full_name"]}`);
  console.log(`email : ${userDetails["email"]}`);

  res.json({
    message: "Registered Successfully",
    data: {
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

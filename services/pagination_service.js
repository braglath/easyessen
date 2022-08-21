exports.paginateList = function (params, callback) {
  const list = params["list"];
  const page = parseInt(params["page"]);
  const limit = parseInt(params["limit"]);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const data = {};

  data.max_count = list.length;
  data.max_page = Math.ceil(data.max_count / limit);

  if (endIndex < data.max_count) {
    data.next = {
      page: page + 1,
      limit: limit,
    };
  }

  if (startIndex > 0) {
    data.previous = {
      page: page - 1,
      limit: limit,
    };
  }

  data.results = list.slice(startIndex, endIndex);
  callback(null, data);
};

class Request {
  constructor(url) {
    this.url = url;
  }

  async get(apiPath) {
    try {
      const response = await fetch(this.url + apiPath);
      const resData = await response.json();
      return resData;
    } catch (err) {
      console.log(err);
    }
  }

  async post(apiPath, body) {
    try {
      const response = await fetch(url + apiPath, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const resData = await response.json();
      return resData;
    } catch (err) {
      console.log(err);
    }
  }

  async delete(apiPath) {
    try {
      const response = await fetch(url + apiPath, {
        method: "DELETE",
      });
      const resData = await response.json();
      return resData;
    } catch (err) {
      console.log(err);
    }
  }

  async put(apiPath, data) {
    try {
      const response = await fetch(apiPath, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await response.json();
      return resData;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports.Request = Request;

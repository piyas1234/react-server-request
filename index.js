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
      const response = await fetch(this.url + apiPath, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      return await response;
    } catch (err) {
      console.log(err);
    }
  }

  async delete(apiPath) {
    try {
      const response = await fetch(this.url + apiPath, {
        method: "DELETE",
      });

      return await response;
    } catch (err) {
      console.log(err);
    }
  }

  async put(apiPath, data) {
    try {
      const response = await fetch(this.url + apiPath, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return await response;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports.Request = Request;

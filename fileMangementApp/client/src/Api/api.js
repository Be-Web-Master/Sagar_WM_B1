export const createUserApi = async ({ username, email, password }) => {
  try {
    const response = await fetch("http://localhost:6600/user/create-user", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.statusText;
  } catch (err) {
    console.log(err);
  }
};

export async function logInUserApi({ username, password }) {
  console.log({ username, password });
  try {
    const response = await fetch("http://localhost:6600/user/login-user", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log({ res: response.statusText });
    return response.statusText;
  } catch (err) {
    console.log(err);
  }
}
export async function logOutApi() {
  try {
    const response = await fetch("http://localhost:500/user/logout");
  } catch (error) {
    return `user Could not logout ${error}`;
  }
}
export async function uploadImageApi(image) {
  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.onloadend = async () => {
    try {
      const response = await fetch("http://localhost:6600/file/upload-image", {
        method: "POST",
        body: JSON.stringify({
          image: reader.result,
          name: image.name,
          size: image.size,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const statusText = response.statusText;

      return statusText;
    } catch (error) {
      return error;
    }
  };
}
export async function getImagesApi() {
  try {
    const res = await fetch("http://localhost:6600/file/get-image");
    const data = await res.json();
    return data.images;
  } catch (err) {
    return String(err);
  }
}
export async function deleteImageApi(publicId) {
  try {
    const res = await fetch("http://localhost:6600/file/delete-image", {
      method: "DELETE",
      body: JSON.stringify({
        publicId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return String(err);
  }
}

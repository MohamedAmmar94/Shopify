const clientResource = (user) => {
  return {
    id: user._id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    // role: user.role,
    avatar: process.env.USER_IMAGE_PATH + user.avatar,
  };
};

export default clientResource;

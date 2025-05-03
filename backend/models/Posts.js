module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // ? Associate the Posts model with the Comments model
  Posts.associate = (models) => {
    Posts.hasMany(models.Comments, {
      OnDelete: "cascade",
    });
  };

  return Posts;
};

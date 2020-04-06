const data = require("./data.json");

const getBasicInfo = () => {
  const temp = {
      "stay": data["stay"],
      "phone": data["phone"],
      "resumelink": data["resumelink"],
      "email": data["email"]
  };
  return temp;
};

const getProfileInfo = () => data["profile"];

const getWorkExp = () => data["workexp"];

const getEducation = () => data["education"];

const getSkills = () => data["skills"];

const getProjects = () => data["projects"];

module.exports.getBasicInfo = getBasicInfo;
module.exports.getProfileInfo = getProfileInfo;
module.exports.getWorkExp = getWorkExp;
module.exports.getEducation = getEducation;
module.exports.getSkills = getSkills;
module.exports.getProjects = getProjects;
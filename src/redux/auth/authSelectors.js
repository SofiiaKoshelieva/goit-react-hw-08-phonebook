const getIsLoggined = state => state.auth.isLogined;
const getUserName = state => state.auth.user.name;

const authSelectors = {
  getIsLoggined,
  getUserName,
};
export default authSelectors;

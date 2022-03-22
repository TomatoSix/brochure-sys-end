class UserService {
  async create(user) {
    console.log("用户信息保存到数据库中", user);
    const {name, password} = users
    const statement = `INSERT INTO users (name, password) VALUES (?, ?)`

    return "创建用户成功"
  }
}

module.exports = new UserService()
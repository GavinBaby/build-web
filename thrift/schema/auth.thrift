include "common.thrift"

/**
 * 账户信息
 */
struct Account {
  /**
   *  id
   */
  1: string  id,
  /**
   * 手机号
   */
  2: string mobile,
  /**
   * 登录密码
   */
  3: string password,
  /**
   * 用户名
   */
  4: string username,
  /**
   * 帐户状态
   */
  5: string state,
  /**
   * 账号类型
   */
  6: string type,
  /**
   * 注册时间
   */
  7: string regTime,
  /**
   * 注册ip
   */
  8: string regIp,
  /**
   * 本次登录时间
   */
  9: string thisLoginTime,
  /**
   * 本次登录ip
   */
  10: string thisLoginIp,
  /**
   * 上次登录时间
   */
  11: string lastLoginTime,
  /**
   * 上次登录ip
   */
  12: string lastLoginIp,

  13:common.Back back
}

   struct AccountList {
      1: list<Account> data,
      /**
       * 数据总数
       */
      2: i32 totalSize
    }


 /**
 * 登录权限
 */
 struct  Menu  {
   /**
    * 序列
    */
   1: string id,
   /**
    * 上级菜单序列
    */
   2: string pid,
   /**
    * 菜单名称
    */
   3: string name,
   /**
    * 链接地址
    */
   4: string link
 }

/**
* 角色信息列表
*/
struct MenuList {
  /**
   * 结果
   */
  1: common.Back back,
  /**
   * 权限信息
   */
  2: list<Menu> menu
}
 



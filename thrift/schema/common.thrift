 * 结果
 */
struct Back {
  /**
   * 结果代码
   */
  1: i32 code,
  /**
   * 结果说明
   */
  2: string text,
  /**
   * 备用1
   */
  3: string spare1,
  /**
   * 备用2
   */
  4: string spare2
}


struct Page{
  /**
   * 单页条数
   */
  1: string pageSize,
  /**
   * 开始记录条数
   */
  2: string recordStart,
  /**
   * 排序条件
   */
  3: string sortName,
  /**
   * 排序方式
   */
  4: string sortType
}

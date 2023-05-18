/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxde7a02f3ebc534f0',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '70c053d6f6e4bd28660666b7d79e4eda',

  PROVINCE: '江苏',
  CITY: '常州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小张好困',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'orwxT5w4VrTRe-vSL9PQWBkytrTA',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'mGp_DzZlyE783WhMSmLW9wBolSoyxFjJVe32P4JEiBc',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '高雅小宝贝', year: '1999', date: '11-22',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-03-12' },
      ],
      
            // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: '11-22',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      
      SLOT_LIST: [
    // 这样配置的话，就会每次随机选一句话发送
    {
      keyword: 'lover_prattle',
      contents: [
        '因为太喜欢你，所以看谁都像是情敌。',
        '申请成为你爱里的永久居民。',
        '你很傻，你很笨，可我还是很羡慕你，因为你有我',
        '遇见你，就好像捡到了100斤的运气',
        '昨晚梦见我娶你,不过梦是相反的,所以应该是你嫁给我。',
        '如果不能一夜暴富,一夜抱你也行。',
        '不懂什么赔率,我只懂陪你。',
        '你能不能别说话了?我满脑子都是你的声音。'
      ],
    },
   ], 
    } 
      
      
      
module.exports = USER_CONFIG


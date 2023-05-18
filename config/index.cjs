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
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '63GoyTDcRNQd2fNy9s8MEBICXIx03RQNhMOVLApOeLQ',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'orwxT5w4VrTRe-vSL9PQWBkytrTA',
    }
  ],

}

module.exports = USER_CONFIG


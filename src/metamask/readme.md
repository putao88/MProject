## 常用相关地址
1. [BSC网络连接](https://docs.binance.org/smart-chain/developer/rpc.html#testnetchainid-0x61-97-in-decimal)
2. [BNB Hero原网站](https://play.bnbheroes.io/)
3. [BNB测试网站](https://testnet.bscscan.com/)
4. [BNB测试币领取地址](https://testnet.binance.org/faucet-smart)
5. [英雄合约代码地址](https://bscscan.com/address/0x5ca334e4b585da8e6054f16d991ed4399ef33d24#code)
6. [文档地址](https://shimo.im/docs/pPyxxJjWPKxPQYD8/ )
7. [vue参考项目](https://github.com/joaquin-alfaro/ethereum-payment-vuejs)
## 连接metaMask
### BSC测试网
1. 网络名称: BSC测试网
2. 链ID: 97
3. 新增 RPC URL: https://data-seed-prebsc-1-s1.binance.org:8545/
4. Currency Symbol: BNB
5. 区块浏览器: https://bscscan.com

### BSC主网
1. 网络名称: BSC主网
2. 链ID: 56
3. 新增 RPC URL: https://bsc-dataseed.binance.org
4. Currency Symbol: BNB
5. 区块浏览器: https://bscscan.com

## metaMask测试账号登陆

### 直接导入密钥:
1. 常用测试账号(Sheldon提供): 81432bcde21bfc0face531b1f9273e759e47ba6581efadd42437e62854c08465

## 业务逻辑

### myheros
1. 这个游戏的原版逻辑是这样的：检测城市等级，显示对应等级的界面：  
  - 开局是1级，默认2个卡槽，可以召唤英雄
  - 2级解锁第三个卡槽，3级解锁第四个卡槽，4级解锁第五个卡槽
2. 获取英雄，将得到的英雄依次渲染到已经解锁卡槽当中 
  - level值对应其xp总值，1level-1999
  - 当xp率大于1，unlock按钮可以点击（去升级英雄）




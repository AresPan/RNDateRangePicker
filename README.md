## RNDateRangePicker

![RNDateRangePicker](https://cdn.pbrd.co/images/ika9uay.gif)

### props

|       参数      |           说明        |     类型     |   默认值  |
|-----------------|-----------------------|--------------|-----------|
|   `onSelected`  |   日期段选择后的回调  |   `function` |  要求设置 |
|   `selected`    |   默认被选择的时间段  |   `object`   |  `null`   |
|   `unavailable` |   时间段区间          |   `object`   |  要求设置 |
|   `showHoloday` |   是否显示节假日信息  |   `boolean`  |  `false`  |
|   `onClose`     |   组件关闭的回调      |   `function` |  要求设置 |

- `selected` 默认被选择的时间段，格式：`{startDate: , endDate: }`；
- `unavailable` 可选时间段区间，格式：`{beforeDate: , afterDate: }`。


### Usage

```js
import RNDateRangePicker from 'rn.daterangepicker';

const RNDateRangePickerIOS = RNDateRangePicker.RNDateRangePickerIOS;

...
<View style={styles.container}>
  <RNDateRangePickerIOS
    selected={this.state.selected}
    unavailable={this.state.unavailable}
    onSelected={this._handleOnSelected}
    onClose={this._handleOnClose}/>
</View>
...
```

### License

rn.daterangepicker is released under the MIT license.

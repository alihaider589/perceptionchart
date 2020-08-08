import React from 'react'
import { StackedBarChart } from 'react-native-svg-charts'
import { View ,Text} from 'react-native'
 
class Comment extends React.PureComponent {
    render() {
        const data = [
            {
                month: new Date(2015, 0, 1),
                racist: 3840,
                good: 1920,
                bad: 960,
                corrupt: 400,
                oranges: 400,
            },
            {
                month: new Date(2015, 1, 1),
                racist: 1600,
                good: 1440,
                bad: 960,
                corrupt: 400,
            },
            {
                month: new Date(2015, 2, 1),
                racist: 640,
                good: 960,
                bad: 3640,
                corrupt: 400,
            },
            {
                month: new Date(2015, 3, 1),
                racist: 3320,
                good: 480,
                bad: 640,
                corrupt: 400,
            },
        ]
 
        const colors = ['purple', 'yellow', 'orange', 'red']
        const keys = ['racist', 'good', 'bad', 'corrupt']
 
        return (
            <View>

            <StackedBarChart
                style={{ height: 200 }}
                keys={keys}
                colors={colors}
                data={data}
                showGrid={false}
                contentInset={{ top: 30, bottom: 30 }}
                />
       
                </View>
        )
    }
}

export default Comment
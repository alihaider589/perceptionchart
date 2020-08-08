import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text ,View} from 'react-native'
 
class PublicView extends React.PureComponent {
    render() {
        const data = [50, 10, 40, 95,]
 
    
        const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
 
 
        const pieData = data
            .filter((value) => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: randomColor(),

                    onPress: () => console.log('press', index),
                },
                key: `pie-${index}`,
            }))
 
        return (
        <View style={{padding:10}}>

        <PieChart style={{ height: 200 }} data={pieData} />
            <Text style={{alignSelf:"center",marginTop:10,fontSize:15,textAlign:'center'}}>{`The Chart Show about the public views of A politician `}</Text>
        </View>
            )
    }
}

export default  PublicView
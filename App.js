import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,ScrollView,} from 'react-native';
import Chart from './src/components/FollowersChart'
import PieChart from './src/components/PieChart';
import Testf from './src/components/TestChart'
import PublicViews from './src/components/PublicViewsChart'
import Comment from './src/components/CommentChart'

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={{padding:10}}>
<Text>The chart Show the followers increasing and decreasing rate of a politician</Text>
<Chart />
      </View>
      <View>

<PublicViews />

      </View>
      <View>
        <Comment />
        <Text style={{alignSelf:'center',padding:20,textAlign:'center'}}> This chart shows the rating of politician according to their provices </Text>
        <Text style={{alignSelf:'center',textAlign:'center'}}>Where the purple color shows that ppl think the politician is a good person </Text>
        <Text style={{alignSelf:'center',textAlign:'center'}}>Where the red color shows that ppl think the politician is a bad person </Text>
        <Text style={{alignSelf:'center',textAlign:'center'}}>Where the orange color shows that ppl think the politician is a corrupt person </Text>
        <Text style={{alignSelf:'center',padding:10,textAlign:'center'}}>Where the red color shows that ppl think the politician is a racist person </Text>
     
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:10,
    marginTop:20,
    marginBottom:10
  },
});

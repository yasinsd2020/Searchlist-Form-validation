import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  ScrollView,
  FlatList,
  TextInput,
} from "react-native";
import { Button } from "react-native-paper";
import { Searchbar, Card } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

const ListofProperties = () => {
  
  const [current, setCurrent] = useState("");

  const Villa = [
    {
      dis: "Homesstay| Lonavla",
      title: "Antiquity Villa",
      active:'Acitve'
    },
    {
      dis: "Homesstay| Lonavla",
      title: "BOND VILLA 3BHK",
      active:'Acitve'
    },
    {
      dis: "Homesstay| Lonavla",
      title: "Greygoose Villa",
      active:'Acitve'
    },
    {
      dis: "Homesstay| Lonavla",
      title: "SMIRNOFF VILLA",
      active:'Acitve'
    },
    {
      dis: "Homesstay| Lonavla",
      title: "WOW 1002",
      active:'Acitve'
    },
    {
      dis: "Homesstay| Lonavla",
      title: "WOW 1002",
      active:'Acitve'
    },

    {
      dis: "Homesstay| Lonavla",
      title: "Oberoy 1002",
      active:'Acitve'
    },

    {
      dis: "Homesstay| Lonavla",
      title: "Taj 1002",
      active:'Acitve'
    },
  ];

  let list = Villa;

  if (current.length > 0) {
    list = Villa.filter(
      (i) =>
        i.title.toLocaleLowerCase().indexOf(current.toLocaleLowerCase()) > -1
    )
  }
  return (
    <>
      <View>
        <View style={styles.container}>
          <Icon
            name="close"
            size={30}
            color="#000000"
            style={{ paddingTop: 5, paddingLeft: 7, marginTop: 10 }}
          />
          <Text style={styles.text1}>List of Properties</Text>
        </View>
        <View style={styles.btn}>
          <Button mode="contained" style={{padding:'.4rem'}}  onPress={() => console.log("Pressed")}>
            View Drafts Or Create New
          </Button>
        </View>
       
        <View style={styles.section1}>
          <Text style={styles.text2}>
            Select the active property you want to manage or compete your drafts
            to list them
          </Text>
          <TextInput
            style={styles.searchbar}
            placeholder="Search with property name or city"
            onChange={(e) => setCurrent(e.target.value)}
            value={current}
          ></TextInput>
        </View>

        <View style={styles.container2}>
          <Text style={styles.text4}>Properties (21)</Text>
        </View>

        <ScrollView>
          <View style={styles.parentContainer}>
            <FlatList
              data={list}
              renderItem={({ item }) => {
                return (
                  <>
                    <View style={{ border: "1px solid grey" , display:'flex' , flexDirection:'row', margin:'1rem',
                  borderRadius:'.3rem'}}>
                      <Icon name="building" style={{alignItems:'center', justifyContent:'center' , width:'20%', display:'flex' , backgroundColor:'#f2f8fb'}} size={30} />
                      <View style={{margin:'.7rem'}}>
                        <Text style={{fontWeight:'bold'}}>{item.title}</Text>
                        <Text>{item.dis}</Text>
                        <Text style={{color:'green'}}>{item.active}</Text>
                      </View>
                    </View>
                  </>
                );
              }}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
    marginTop: 15,
  },
  btn: {
    width: "95%",
    height: 35,
    marginTop: 15,
    marginLeft: 10,
    backgroundolor: "#2243B6",
 
  },
  section1: {
    width: "95%",
    marginTop: 20,
    marginLeft: 20,
  },
  text2: {
    fontSize: 17,
    color: "grey",
  },
  searchbar: {
    width: "100%",
    height: 48,
    marginTop: 20,
    marginLeft: -14,
    fontSize: 16,
    padding:20,
    outlineStyle: 'none',
    borderWidth: 1,
    borderRadius:5
    
  },
  text3: {
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 25,
    marginTop: 8,
  },
  container1: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 20,
    borderColor: "gray",
    borderWidth: 1,
    width: 320,
  },
  text4: {
    fontSize: 20,
    color: "blue",
    padding: 10,
    borderBottomColor: "#2243B6",
    borderBottomWidth: 5,
    marginLeft: 22,
    marginTop: 7,
  },
  container2: {
    width: '50%',
  },
  container3: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginLeft: 25,
    padding: 5,
  },

});

export default ListofProperties;

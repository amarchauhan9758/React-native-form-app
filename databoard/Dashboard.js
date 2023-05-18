/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet , ImageBackground } from 'react-native';
import backgroundImage from '../img/80cce3e3aafbb8b6bbb28e513176192b.jpg';


const Dashboard = () => {
  const handleSubMenuClick = submenu => {
    console.log('Clicked submenu:', submenu);
  };

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.img}>

    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleSubMenuClick('Profile')}>
          <Text style={styles.menuText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleSubMenuClick('Notification')}>
          <Text style={styles.menuText}>Notification</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleSubMenuClick('Gallery')}>
          <Text style={styles.menuText}>Gallery</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleSubMenuClick('Attendance')}>
          <Text style={styles.menuText}>Attendance</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleSubMenuClick('Examination')}>
          <Text style={styles.menuText}>Examination</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleSubMenuClick('PTM')}>
          <Text style={styles.menuText}>PTM</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  img:{
    flex: 1,
    resizeMode: 'cover',
    position: 'relative',
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  menuItem: {
    flex: 1,
    height: 120,
   backgroundColor:'rgb(166,209,216)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 8,
    // eslint-disable-next-line prettier/prettier
    elevation: 2,
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'brown',
  },
});

export default Dashboard;

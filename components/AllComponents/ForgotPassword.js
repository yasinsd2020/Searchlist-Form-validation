import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import Icone from "react-native-vector-icons/MaterialIcons";
import { Formik } from "formik";
import * as yup from "yup";
const ForgotPassword = () => {
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("please enter valid Email")
      .required("Email is required"),

  });
  return (
    <>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={loginValidationSchema}
          validateOnMount={true}
          onSubmit={(values) => console.log("ss")}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
            isvalid,
          }) => (
      <View
        style={{
          alignItems: "center",
          fontFamily: "Heebo, sans-serif",
          marginTop: "5rem",
        }}
      > 
        <View style={{width:'100%' , height:'30vh'}}>
          <Image  source={{ uri :'https://www.tutorix.com/images/login-punch.png' }}
            style={{width:'100%' , height:'100%' , resizeMode: 'contain'}}
           />
        </View>
        <View style={styles.Text}>
          <Text style={styles.head}>Forgot Password ?</Text>
          <Text style={styles.subhead}>
            Dont worry! it happens. Please enter the address assosciated with
            your account
          </Text>
        </View>
    
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Icone
            name="alternate-email"
            size={25}
            style={{
              color: "grey",
              marginTop: "1rem",
              marginLeft: "-2.3%",
              marginRight: "2%",
            }}
          />
          <View style={{marginBottom:'2rem'}}>
          <TextInput
            placeholder="Email/Number"
            style={styles.input}
            onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
          ></TextInput>
          
        {errors.email && touched.email && (
                    <Text style={{ justifyContent: "flex-start" }}>
                      {errors.email}
                    </Text>
                  )}
                  </View>
        </View>
               
        <TouchableOpacity onPress={handleSubmit} style={styles.btn}>Submit</TouchableOpacity>
      </View>
       )}
       </Formik>
    </>
  );
};

const styles = StyleSheet.create({
  head: {
    fontSize: 30,
    fontWeight: "bold",
    width:200,
    marginBottom:'1rem'
  },

  Text: {
    width:270,
    display:'flex',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    marginLeft:'-2.2rem',
    marginBottom:'2rem'
  },
  input: {
    width: 280,
    height: 55,
    outlineStyle: 'none',
    borderBottomWidth: 1,
    fontSize: 16,
    outLine:'none',
   
  },

  btn: {
    backgroundColor: "#6025ff",
    color: "white",
    fontSize: 23,
    width: 320,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    boxShadow: " 0 5px 21px rgba(0,0,0,0.25), 0 2px 10px rgba(0,0,0,0.22)",
    borderRadius: ".8rem",

  },
});

export default ForgotPassword;

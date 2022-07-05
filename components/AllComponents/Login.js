import React, { useState } from "react";
import {
  View,
  Button,
  TextInput,
  Text,
  Touchable,
  TouchableOpacity,
} from "react-native";
import Icone from "react-native-vector-icons/MaterialIcons";
import { Formik } from "formik";
import * as yup from "yup";

const Login = () => {
  const [show, setShow] = useState(false);

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("please enter valid Email")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
        "Please Enter valid Password"
      ),
  });

  return (
    <>
      <View style={{marginTop:'10rem'}}>
        <Formik
          initialValues={{ email: "", password: "" }}
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
              style={{ alignItems: "center", fontFamily: "Heebo, sans-serif" }}
            >
              <View style={{display:'flex', flexDirection:'row' ,left:'-2%'}}>
                <Icone
                  name="alternate-email"
                  size={25}
                  style={{ color: "grey", marginTop:'1rem' , marginLeft:'-2.3%', marginRight:'2%'}}
                />
                <View style={{ }}>
                  <TextInput
                    style={{
                      width: 280,
                      height: 60,
                      outline: "none",
                      borderBottom: "1pX solid grey",
                      fontSize: 22,
                    }}
                    placeholder="Email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                  />
                  {errors.email && touched.email && (
                    <Text style={{ justifyContent: "flex-start" }}>
                      {errors.email}
                    </Text>
                  )}
                </View>
              </View>
          
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Icone
                    name="lock"
                    size={25}
                    style={{ color: "grey", marginTop: "1.2rem" }}
                  />
                  <View style={{marginLeft:'.5rem'}}>
                    <TextInput
                      style={{
                        width: 280,
                        height: 60,
                        outline: "none",
                        borderBottom: "1pX solid grey",
                        fontSize: 22,
                      
                      }}
                      secureTextEntry={show}
                      placeholder="Password"
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                    />
                    {errors.password && touched.password && (
                      <Text
                     
                    
                      >
                        {errors.password}
                      </Text>
                    )}
                  </View>
                  <Icone
                    name={show ? "visibility" : "visibility-off"}
                    onPress={() => setShow(!show)}
                    size={25}
                    style={{ color: "grey", marginTop: "1.2rem" , left:'-10%'}}
                  />
                </View>
     
              <TouchableOpacity
                style={{
                  width: "100%",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  color: "#0000B3",
                  marginLeft:'-4rem'
                  
                }}
              >
                Forgot Password
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleSubmit}
                style={{
                  width: 300,
                  height: 60,
                  backgroundColor: "#0000B3",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: 25,
                  fontWeight: "bold",
                  boxShadow:
                    " 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
                  borderRadius: "3rem",
                  marginTop:'2rem'
                }}
              >
                Login
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </>
  );
};

export default Login;

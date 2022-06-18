import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Input} from '../../components';
import {responsiveHeight, windowWidth} from '../../utils';
import {Formik} from 'formik';
import * as Yup from 'yup';

const Register = ({navigation}) => {
  const form = {
    firstName: '',
    lastName: '',
    email: '',
  };

  // validation formik
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required!'),
    lastName: Yup.string().required('Last Name is required!'),
    email: Yup.string().email('Invalid Email').required('Email is required!'),
  });

  const handleSubmit = data => {
    console.tron.log('🚀 ~ data :=>', data);
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      {/* header */}
      <Header onPress={() => navigation.goBack()} />
      {/* end header */}
      <View style={{paddingHorizontal: 20}}>
        <Text style={{color: 'black', fontSize: 45, fontWeight: 'bold'}}>
          Hi, Welcome!
        </Text>
        <Text style={{color: 'black', fontSize: 26, fontWeight: 'bold'}}>
          Register to get started.
        </Text>
        <View style={{marginTop: 50}}>
          <Formik
            initialValues={form}
            validationSchema={validationSchema}
            onSubmit={(values, formikActions) => {
              const data = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
              };
              setTimeout(() => {
                handleSubmit(data);
                // formikActions.resetForm();
                formikActions.setSubmitting(false);
              }, 5000);
            }}>
            {({
              values,
              errors,
              touched,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => {
              const {email, firstName, lastName} = values;
              return (
                <>
                  <Input
                    label={'First Name'}
                    value={firstName}
                    height={responsiveHeight(50)}
                    error={touched.firstName && errors.firstName}
                    onChangeText={handleChange('firstName')}
                    onBlur={handleBlur('firstName')}
                  />
                  <Input
                    label={'Last Name'}
                    value={lastName}
                    height={responsiveHeight(50)}
                    error={touched.lastName && errors.lastName}
                    onChangeText={handleChange('lastName')}
                    onBlur={handleBlur('lastName')}
                  />
                  <Input
                    label={'Email'}
                    value={email}
                    height={responsiveHeight(50)}
                    error={touched.email && errors.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                  />
                  <Gap height={35} />
                  <Button
                    textButton="Register Now"
                    submiting={isSubmitting}
                    onPress={handleSubmit}
                  />
                </>
              );
            }}
          </Formik>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;

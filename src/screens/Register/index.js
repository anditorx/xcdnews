import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Input} from '../../components';
import {responsiveHeight, windowWidth} from '../../utils';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {registerUserAction} from '../../redux/actions/AuthAction';

const Register = ({navigation}) => {
  const dispatch = useDispatch();
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
    dispatch(registerUserAction(data, navigation));
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <Gap height={30} />
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
                handleSubmit(data);
                setTimeout(() => {
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
                      height={responsiveHeight(60)}
                      error={touched.firstName && errors.firstName}
                      onChangeText={handleChange('firstName')}
                      onBlur={handleBlur('firstName')}
                    />
                    <Input
                      label={'Last Name'}
                      value={lastName}
                      height={responsiveHeight(60)}
                      error={touched.lastName && errors.lastName}
                      onChangeText={handleChange('lastName')}
                      onBlur={handleBlur('lastName')}
                    />
                    <Input
                      label={'Email'}
                      value={email}
                      height={responsiveHeight(60)}
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
        <Gap height={25} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

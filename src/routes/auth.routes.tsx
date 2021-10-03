import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";
import { Course } from "../screens/Course";
import { CourseDetail } from '../screens/CourseDetail';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator
            headerMode={"none"}
        >
            <Screen 
                name="SignIn"
                component={SignIn}
            />
            
            <Screen 
                name="Home"
                component={Home}
            />

            <Screen 
                name="Course"
                component={Course}
            />

            <Screen 
                name="CourseDetail"
                component={CourseDetail}
            />
            

        </Navigator>
    )
}
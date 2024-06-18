import { Button, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

const ReviewDetails = ({ navigation }) => {
    const pressHandler = () => {
        navigation.goBack();
    }
    return (
        <View style={globalStyles.container}>
            <Text>
                {navigation.getParam('title')}
            </Text>
            <Text>
                {navigation.getParam('body')}
            </Text>
            <Text>
                {navigation.getParam('rating')}
            </Text>

            <Button title="back to home screen" onPress={pressHandler}/>
        </View>
    );
}

export default ReviewDetails;
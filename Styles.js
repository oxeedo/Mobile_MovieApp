import { Dimensions, StyleSheet } from "react-native";
import Constant from "./Constant";

const deviceHeight = Dimensions.get('window');
const deviceWidth = Dimensions.get('window')

const Styles = StyleSheet.create({
    sectionBg: {
        backgroundColor: Constant.baseColor,
        height: 1000,
    },
    searchBg: {
        backgroundColor: Constant.baseColor,
        height: 1000,
        flex: 1,

    },
    container: {
        backgroundColor: "black"
    },
    headings: {
        fontSize: 19,
        color: Constant.fededColor,

    },
    headingss: {
        fontSize: 19,
        color: Constant.fededColor,
        margin: 10

    },
    posterImage: {
        height: 250,
        width: 200,
        borderRadius: 10,
        padding: 50,
        display: 'flex',
        flexDirection: 'row'

    },
    searchImage: {
        height: 170,
        width: 170,
        borderRadius: 10,
        padding: 50,
        resizeMode: 'contain'

    },
    movieTitle: {
        color: Constant.textColor,
        width: 150,
        textAlign: 'center',
        marginTop: 0,
        fontSize: 16,
    },
    trendingPeopleImage: {
        height: 70,
        width: 70,
        borderRadius: 500,
    },
    trendingPeopleName: {
        width: 60,
        color: Constant.textColor,
        fontSize: 12,
        textAlign: 'center',
        marginTop: 5,
    },
    trendingPeopleContainer: {
        margin: 10,
    },
    imageBg: {
        width: 400,
        height: 300,
    },
    movieDetailsTitle: {
        fontSize: 28,
        color: Constant.textColor,
        textAlign: 'center',
        marginTop: -40,
    },
    linkContainer: {
        backgroundColor: Constant.secondaryColor,
        borderRadius: 100,
        padding: 10,
        width: 45,
        marginLeft: 20,
        marginTop: -20,
    },
    overview: {
        color: Constant.textColor,
        marginHorizontal: 10,
        textAlign: 'justify',
        fontSize: 16,
    },
    details: {
        color: Constant.secondaryColor,
        fontSize: 15,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    detailsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        marginHorizontal: 2,
    },
    genre: {
        color: Constant.textColor,
        fontSize: 16,
    },
    genreContainer: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Constant.textColor,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 10,
    },
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    },
    parent: {
        marginTop: 50,
        marginLeft: 25,
        marginRight: 25,
        borderColor: "gray",
        borderRadius: 20,
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5
    },
    textInput: {
        height: 40,
        width: "90%",
        color: '#fff'
    },
    closeButton: {
        height: 20,
        width: 20,
        backgroundColor: '#fff'
    },
    closeButtonParent: {
        justifyContent: "center",
        alignItems: "center",
        marginRight: 5,
    },
})
export default Styles


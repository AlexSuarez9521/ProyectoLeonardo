import React from 'react'
import { View, Image, Text } from 'react-native'
import Fondo from '../img/fondo-madera.jpg'
import Hamburguesa from '../img/hamburguesa.png'
import IconHamburguesa from '../img/icon-hamburguesa.png'
import BannerStyles from '../styles/BannerStyles'

const Banner = ({ title }) => {
    return (
        <View>
            <View>
                <Image 
                    source={Fondo}
                    style={BannerStyles.img} 
                />
            </View>
            <View style={BannerStyles.positionHamburguesa}>
                <Image 
                    source={Hamburguesa}
                    style={BannerStyles.hamburguesa}
                />
            </View>
            <View style={BannerStyles.positionTitle}>
                <Text style={BannerStyles.title}>{title}</Text>
            </View>
            <View style={BannerStyles.positionIcon}>
                <Image 
                    source={IconHamburguesa}
                    style={BannerStyles.icon}
                />
            </View>
        </View>
    )
}

export default Banner
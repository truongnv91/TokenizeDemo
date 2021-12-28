
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Storing string value#
 * @param {*} value 
 */
module.exports.storeStringData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    // saving error
  }
}

module.exports.storeObjData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    // saving error
  }
}

module.exports.formatPrice = (str = 0) => {
  let price = parseFloat(str);
  if (price > 5) {
    return price.toFixed(2).toLocaleString();
  } else {
    return price.toFixed(8).toLocaleString();
  }
}
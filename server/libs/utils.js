const ShortUniqueId= require('short-unique-id')
const generateShortUuid = () => {
    const uid = new ShortUniqueId({ length: 8, dictionary: "hex" });  
    return uid.rnd(); 
};

module.exports = {
    generateShortUuid
}
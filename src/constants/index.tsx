// Colors
export const RED="#C21D1D"
export const GREEN="#43CC82"
export const GREY="#D3D9E3"
// Styles
export const CUSTOM ={
    center: {
        display:"flex",
        ["flex-direction"]:"column",
        justifyContent:"center",
        alignItems:"center", 
    }, 
    centerM: {
        marginLeft:"auto",
        marginRight:"auto"
    },
    centerRow: {
        display:"flex",
        ["flex-direction"]:'row',
        alignItems:"center", 
        justifyContent:"center"
    },
    centerRowWrap: {
        ["flex-direction"]:'row',
        alignItems:"center", 
        justifyContent:"center", 
        flexWrap:"wrap"
    },
    betweenRow: {
        display:"flex",
        ["flex-direction"]:'row',
        alignItems:"center", 
        justifyContent:"space-between", 
    }, 
    img: {
        width:"100%", 
    },
    imgBack: {
        resizeMode: "cover",
    },
}
export default {
    // Colors
    RED,
    GREEN,
    // Styles
    CUSTOM
}
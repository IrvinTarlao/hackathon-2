// export function NomAction( la_donnée_qui_nous_intéresse) {
//     console.log(la_donnée_qui_nous_intéresse);
//     return {
//         type  :  ' CE_QUE_FAIT_L_ACTION ' ,
//         payload :  la_donnée_qui_nous_intéresse
//     }
// }

export function isSelected(activity){
    console.log(activity);
    return {
        type  :  'IS_SELECTED',
        payload :  activity,

    }
}
const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
// const promiseOutput = (emosi) => {
//     let count = 0;
//     return new Promise((resolve, reject) => {
//         promiseTheaterIXX().then((result) => {
//             result.forEach((element) => {
//                 if (element.hasil === emosi) {
//                     count++;
//                 }
//             });
//             promiseTheaterVGC().then((result) => {
//                 result.forEach((element) => {
//                     if (element.hasil === emosi) {
//                         count++;
//                     }
//                 });
//                 if (count > 0) {
//                     resolve(count);
//                 } else {
//                     reject("Tidak ada film dengan emosi yang sesuai");
//                 }
//             });
//         });
//     });
// };

const promiseOutput = async(emosi) => {
    let count = 0;
    try {
        const resultIXX = await promiseTheaterIXX();
        const resultVGC = await promiseTheaterVGC();
        const result = [...resultIXX, ...resultVGC];
        result.forEach((element) => {
            if (element.hasil === emosi) {
                count++;
            }
        });

        if (count > 0) {
            return count;
        }
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    promiseOutput,
};
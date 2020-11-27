const fs = require("fs"); 
const path = require('path')
let csv = fs.readFileSync("./public/uploads/filedata.csv") 


let array = csv.toString().split("\r"); 



const toJSON = () => {
    let obj = {
        id : null,
        nama : null,
        absensi : []    
    }
    const assignmentToAbsensi = (str) => {
        let absensi = {}
        let arr = str.replace(/"/g,"").split(',');
        obj.id = +arr[0].slice(1)
        obj.nama = arr[1]
        absensi.tanggal = arr[2]
        absensi.jam_kerja = arr[3]
        absensi.in = arr[4]
        absensi.out = arr[5]
        absensi.scanIn = arr[6]
        absensi.scanIOut = arr[7]
        absensi.jml_jam = arr[8]
        return absensi
    }
    for (let i = 1; i < array.length -1; i++) { 
        let str = array[i]
        obj.absensi.push(assignmentToAbsensi(str))
    } 
    return obj;
}


module.exports = toJSON
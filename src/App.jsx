// tampilkan biodata anda
// nama, nim, dan hobi

import Menyapa from "./Menyapa";

// function App() {
//     // perintah untuk menampilkan biodata
//     // 1 return = 1 statement
// //   return (
// //       <h1>Nama: Mario Ignatius Surya Nugraha</h1>
// //       <h1>NIM: A11.2021.13361</h1>
// //       <h2>Hobi: Mendengar Musik, Menonton Film, dan Gaming</h2>
// //           )
// //         }
// //  ini 1 statement yang dibungkus
//     return <>
//             <h1>Nama: Mario Ignatius Surya Nugraha</h1>
//             <h1>NIM: A11.2021.13361</h1>
//             <h2>Hobi: Mendengar Musik, Menonton Film, dan Gaming</h2>

//             <Biodata 
//             nama="Mario Ignatius Surya Nugraha" 
//             nim="A11.2021.13361" 
//             hobi="Mendengar Musik, Menonton Film, dan Gaming" />
//         </>;
// }

// // "nama" di function ini disebut komponen / paramter, sedangkan "Mario Ignatius Surya Nugraha" disebut argument
function Biodata({nama, nim, hobi}) {
    return <>
            <table border="1">
                <tr>
                    <td>Nama</td>
                    <td>{nama}</td>
                </tr>
                <tr>
                    <td>NIM</td>
                    <td>{nim}</td>
                </tr>
                <tr>
                    <td>Hobi</td>
                    <td>:{hobi}</td>
                </tr>
            </table>
        </>;
}

function App() {
    return <>
    <Menyapa />
    <Menyapa /> 
    <Menyapa />

    <Biodata 
        nama="Mario Ignatius Surya Nugraha" 
        nim="A11.2021.13361" 
        hobi="Mendengar Musik, Menonton Film, dan Gaming" 
        />
    </>;
}

// 1 komponen bisa panggil atau pakai komponen lain, misal komponen biodata dipanggil di komponen App
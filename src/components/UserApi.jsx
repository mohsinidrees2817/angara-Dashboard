
// import { useQuery } from "@tanstack/react-query";


// const UserApi = ({setApiStatus,setToken,email,password}) => {
//   async function checkUser(){
//     let item = {email,password};
//     console.log(item,'item');
    
//     try{
//       let result = await fetch("https://angara-backend.herokuapp.com/login",{
//         method: 'POST',
//         headers: {
//           'Content-type': 'application/json',
//         },
//         body: JSON.stringify(item),
//       });
//       const res = await result.json();
      
//       console.log(res)
//       setToken(res?.token)
//     }
//     catch(e){
//       setApiStatus(true)
//     }
//   }   
//     return useQuery(['UserApi'], checkUser,{
//       enabled: false
//     }
//     // , {
//     //     staleTime: 30000,
//     // }
//     );
// };

// export default UserApi;
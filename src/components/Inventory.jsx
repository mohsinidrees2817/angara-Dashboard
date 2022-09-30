import React from 'react'

const Inventory = () => {
  const data = [
		{
			"email": "payerMississippians@selloutchâtelaine.me",
			"username": "superfluous",
			"name": "Noah Vandenbranden",
			"city": "Richmond",
			"money": "$57766.24"
		},
		{
			"email": "daintilyhoppedLstriplies@nougats.me",
			"username": "witheredpastoral",
			"name": "Theo Gilford",
			"city": "Fontana",
			"money": "$20147.30"
		},
		{
			"email": "priorycatacombdims@symmetrys.gov",
			"username": "Argentinians",
			"name": "Nathaniel Gochis",
			"city": "Salinas",
			"money": "$4326.56"
		},
		{
			"email": "whaledtombstonesfining@enmeshed.edu",
			"username": "trefoils",
			"name": "Waylon Labine",
			"city": "Columbus",
			"money": "$82506.94"
		},
		{
			"email": "markermanipulates@volumeimpediments.gov",
			"username": "bilkemissions",
			"name": "Rudolf Brennon",
			"city": "Fort Lauderdale",
			"money": "$90473.87"
		},
		{
			"email": "adversestintestines@furors.org",
			"username": "cogwheelsjuleps",
			"name": "Clyde Hoffay",
			"city": "Provo",
			"money": "$87540.51"
		},
		{
			"email": "furysthoroughnesss@Keynestirings.net",
			"username": "Britannicbleed",
			"name": "Marlon Ferebee",
			"city": "Louisville",
			"money": "$25586.92"
		},
		{
			"email": "encumbrancessharpness@searchedlionize.com",
			"username": "othersseedlings",
			"name": "Billy Jane",
			"city": "Joliet",
			"money": "$82074.66"
		},
		{
			"email": "mouthwashesRatliffs@alpacascranberry.org",
			"username": "Arabicunderlies",
			"name": "Santiago Reaney",
			"city": "Indianapolis",
			"money": "$1985.82"
		},
		{
			"email": "WaldemarsIrvinparticipants@Sammys.gov",
			"username": "reliable",
			"name": "Weldon Alesci",
			"city": "Oxnard",
			"money": "$80793.97"
		},
		{
			"email": "flattererLegosregresses@catchiestsexual.info",
			"username": "discouraging",
			"name": "Morris Lyzenga",
			"city": "Bakersfield",
			"money": "$88580.3"
		},
  ]
  return (
    <div className='flex flex-col gap-8 max-w-[1080px]"'>

    <p className='text-2xl font-semibold pt-4 dark:text-white'>Inventory</p>
    <div className='flex flex-wrap bg-white dark:bg-[#1a1c23] p-6 gap-8 lg:flex-nowrap  w-full md:w-2/4'>
     <div className='flex justify-start items-center gap-8 w-full sm:w-2/4 md:w-2/4   lg:border-r lg:border-[#e5e7eb]'>
      <div className='bg-[#dbeafe]  w-[50px] h-[50px] flex justify-center items-center rounded-full'>
      <img src="./Images/four-lines.png" className='w-[15px]' />
      </div>
      <div className='flex flex-col gap-2'>
        <p className='font-semibold text-[#725563] dark:text-white'>Total Sales</p>
        <p className='text-xl font-semibold text-[#374161] dark:text-[#9e9e9e]'>$376,20</p>
      </div>
     </div>
     <div className='flex justify-start items-center gap-8 w-full sm:w-2/4 md:w-2/4'>
      <div className='bg-[#dcfce7] w-[50px] h-[50px] flex justify-center items-center rounded-full'>
      <img src="./Images/banknotes.png" className='w-[20px]' />
      </div>
      <div className='flex flex-col gap-2'>
        <p className='font-semibold text-[#725563] dark:text-white'>Units Sold</p>
        <p className='text-xl font-semibold text-[#374161] dark:text-[#9e9e9e]'>468</p>
      </div>
     </div>


     </div>
	 <div className='overflow-x-auto rounded-lg'>
       <table className="  bg-slate-800 w-full  overflow-x-auto rounded-lg whitespace-no-wrap">
          <thead>
                  <tr className="text-xs font-semibold text-left text-gray-500 uppercase border-b dark:text-[#9e9e9e] dark:border-gray-700 dark:bg-[#1a1c23] bg-gray-100  w-full ">
                    <th className="px-4 py-4">
                      User
                    </th>
                    <th className="px-4 py-4" >
                    FBA UNITS
                    </th>
                    <th className=" px-4 py-4">
                    ANGORA UNITS
                    </th>
                    <th className="px-4 py-4">
                    STORE NAME
                    </th>
                  </tr>
                  </thead>
          {data.map((item) => {
            return (
              <tbody key={item?._id}>
              <tr className="text-s font-semibold text-left text-gray-600 border-b dark:border-gray-700 dark:text-[#9e9e9e] dark:bg-[#1a1c23] bg-white  w-full">
                  <td  className="px-4 py-4">{item.name} <p className="text-xs font-normal text-gray-500">{item.email}</p></td>
                  <td className="px-4 py-4 font-normal" >{item.money}</td>
                  <td className=" px-4 py-4 ">{item.city}</td>
                  <td  className="px-4 py-4" >{item.username}</td>
                </tr>
                </tbody>
            );
          })}
          <tbody>
          <tr className="text-xs font-semibold text-left text-gray-500 uppercase dark:text-[#9e9e9e] border-b dark:border-gray-700 bg-gray-100  w-full dark:bg-[#1a1c23] ">
                    <th className="px-4 py-4">

                    </th>
                    <th className="px-4 py-4" >
                      
                    </th>
                    <th className="text-center px-4 py-4">
                    </th>
                    <th className="px-4 py-4">
                    </th>
                  </tr>
                  </tbody>
        </table> 
		</div>
    </div>
  )
}

export default Inventory
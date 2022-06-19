import styles from '../styles/Home.module.css'

export default function Reviews() {
  return (
    <div className=" h-fit bg-red-300 text-white flex flex-col mt-40">
        <div className="h-fit shadow-2xl flex flex-col justify-center py-8 ">
                <h1 className="text-center  text-[#7A3636] font-bold text-5xl xl:text-6xl my-10 ">
                  How does it taste ?
                </h1>
               <div className="flex flex-col sm:grid grid-cols-3 gap-4 px-5 lg:px-0 md:container mx-auto md:max-w-screen-lg">
                  <div className=" bg-white text-[#7A3636] border border-[#7A3636] p-5 rounded-md shadow-md">
                    <p>Elegant, delicate, rich-toned. Mango, cocoa nib, marjoram, lavender, cane sugar in aroma and cup. Sweetly tart structure with bright, juicy acidity; very full, syrupy mouthfeel. The pretty finish leads with lavender and cocoa nib.</p>
                    <p className="pt-5 font-bold">-John Doe</p>
                  </div>
                  <div className=" bg-white text-[#7A3636] border border-[#7A3636] p-5 rounded-md shadow-md">
                    <p>Deeply sweet-savory. Dark chocolate, fresh humus, yellow plum, cashew, oak in aroma and cup. Sweet structure with brisk acidity; silky, lightly viscous mouthfeel. Finish consolidates to earthy chocolate and nut.</p>
                    <p className="pt-5 font-bold">-John Doe</p>
                  </div>
                  <div className=" bg-white text-[#7A3636] border border-[#7A3636] p-5 rounded-md shadow-md">
                    <p>Balanced, deeply sweet. Dark chocolate, honeysuckle, date, orange zest, cedar in aroma and cup. Sweet-toned with bright, vibrant acidity; crisp, velvety mouthfeel. Chocolaty finish with undertones of orange zest.</p>
                    <p className="pt-5 font-bold">-John Doe</p>
                  </div>
               </div>
        </div>
    </div>
  )
}